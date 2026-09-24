import { mediaStore } from './media';
import { importPKCS8, SignJWT } from 'jose';
import { siteSchema, publicSnapshot, SiteData } from '../shared/model';
import initialData from '../content/site.json';

type AppEnv=Env & {GITHUB_CLIENT_SECRET?:string;GITHUB_PRIVATE_KEY?:string;LOCAL_DEV?:string};
type Publication={id:string;revision:number;status:string;commit_sha:string|null;error:string|null;created_at:string};
const json=(value:unknown,status=200)=>Response.json(value,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
const hash=async(s:string)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))).map(b=>b.toString(16).padStart(2,'0')).join('');
const cookie=(r:Request,name:string)=>(r.headers.get('Cookie')||'').split(';').map(x=>x.trim()).find(x=>x.startsWith(name+'='))?.slice(name.length+1)||'';
const local=(r:Request,e:AppEnv)=>e.LOCAL_DEV==='1'&&['localhost','127.0.0.1'].includes(new URL(r.url).hostname);
const origin=(r:Request,e:AppEnv)=>local(r,e)?new URL(r.url).origin:e.ADMIN_ORIGIN;
function sessionCookie(r:Request,e:AppEnv,name:string,value:string,age:number){return `${name}=${value}; HttpOnly; ${local(r,e)?'':'Secure; '}SameSite=Lax; Path=/; Max-Age=${age}`;}
async function bounded(r:Request,limit:number){if(Number(r.headers.get('Content-Length')||0)>limit)throw new Error('Dosya veya içerik boyutu sınırı aşıldı.');const reader=r.body?.getReader();if(!reader)return new Uint8Array();const chunks:Uint8Array[]=[];let size=0;while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>limit){await reader.cancel();throw new Error('Dosya veya içerik boyutu sınırı aşıldı.')}chunks.push(value)}const out=new Uint8Array(size);let at=0;for(const c of chunks){out.set(c,at);at+=c.length}return out;}
async function body(r:Request){return JSON.parse(new TextDecoder().decode(await bounded(r,2_000_000)));}
async function github<T>(token:string,path:string,method='GET',data?:unknown):Promise<T>{const res=await fetch('https://api.github.com'+path,{method,headers:{Authorization:'Bearer '+token,Accept:'application/vnd.github+json','User-Agent':'talha-site-admin','X-GitHub-Api-Version':'2026-03-10','Content-Type':'application/json'},body:data?JSON.stringify(data):undefined,signal:AbortSignal.timeout(25000)});if(!res.ok)throw new Error(`GitHub işlemi başarısız (${res.status}): ${path.split('?')[0]}`);return res.status===204?undefined as T:res.json() as Promise<T>;}
async function installationToken(e:AppEnv){if(!e.GITHUB_APP_ID||!e.GITHUB_INSTALLATION_ID||!e.GITHUB_PRIVATE_KEY)throw new Error('GitHub App yayın bağlantısı henüz yapılandırılmamış.');const key=await importPKCS8(e.GITHUB_PRIVATE_KEY.replaceAll('\\n','\n'),'RS256');const jwt=await new SignJWT({}).setProtectedHeader({alg:'RS256'}).setIssuer(e.GITHUB_APP_ID).setIssuedAt(Math.floor(Date.now()/1000)-30).setExpirationTime('8m').sign(key);return (await github<{token:string}>(jwt,`/app/installations/${e.GITHUB_INSTALLATION_ID}/access_tokens`,'POST',{})).token;}
async function current(e:AppEnv){const row=await e.DB.prepare('SELECT revision,data FROM documents WHERE id=1').first<{revision:number;data:string}>();return row?{revision:row.revision,data:JSON.parse(row.data) as SiteData}:{revision:0,data:siteSchema.parse(initialData)};}
async function authenticated(r:Request,e:AppEnv){if(local(r,e))return true;const sid=cookie(r,'tny_session');if(!sid)return false;return !!await e.DB.prepare('SELECT hash FROM sessions WHERE hash=? AND expires>?').bind(await hash(sid),Date.now()).first();}
async function auth(r:Request,e:AppEnv,path:string){
 if(path==='/auth/login'){
  if(!e.GITHUB_CLIENT_ID||!e.GITHUB_CLIENT_SECRET)return json({error:'GitHub giriş bağlantısı henüz yapılandırılmamış.'},503);
  const state=crypto.randomUUID()+crypto.randomUUID();await e.DB.prepare('INSERT INTO oauth_states(hash,expires) VALUES (?,?)').bind(await hash(state),Date.now()+600000).run();const url=new URL('https://github.com/login/oauth/authorize');url.searchParams.set('client_id',e.GITHUB_CLIENT_ID);url.searchParams.set('redirect_uri',origin(r,e)+'/auth/callback');url.searchParams.set('state',state);return new Response(null,{status:302,headers:{Location:url.toString(),'Set-Cookie':sessionCookie(r,e,'tny_state',state,600),'Cache-Control':'no-store'}});
 }
 if(path==='/auth/callback'){
  const q=new URL(r.url).searchParams,state=q.get('state');if(!state||state!==cookie(r,'tny_state')||!q.get('code'))return json({error:'Giriş doğrulanamadı. Yeniden giriş yapın.'},403);
  const saved=await e.DB.prepare('DELETE FROM oauth_states WHERE hash=? AND expires>? RETURNING hash').bind(await hash(state),Date.now()).first();if(!saved)return json({error:'Giriş isteğinin süresi doldu.'},403);
  const tokenRes=await fetch('https://github.com/login/oauth/access_token',{method:'POST',headers:{Accept:'application/json','Content-Type':'application/json'},body:JSON.stringify({client_id:e.GITHUB_CLIENT_ID,client_secret:e.GITHUB_CLIENT_SECRET,code:q.get('code'),redirect_uri:origin(r,e)+'/auth/callback'}),signal:AbortSignal.timeout(20000)});const tok=await tokenRes.json() as {access_token?:string};if(!tok.access_token)return json({error:'GitHub girişi tamamlanamadı.'},403);
  const user=await github<{id:number}>(tok.access_token,'/user');if(String(user.id)!==e.ALLOWED_USER_ID)return json({error:'Bu hesap yönetim paneli için yetkili değil.'},403);
  const sid=crypto.randomUUID()+crypto.randomUUID();await e.DB.batch([e.DB.prepare('DELETE FROM sessions WHERE expires<?').bind(Date.now()),e.DB.prepare('INSERT INTO sessions(hash,expires) VALUES (?,?)').bind(await hash(sid),Date.now()+86400000)]);return new Response(null,{status:302,headers:{Location:'/', 'Set-Cookie':sessionCookie(r,e,'tny_session',sid,86400),'Cache-Control':'no-store'}});
 }
 return json({error:'Bulunamadı'},404);
}
async function refreshJobs(e:AppEnv){const rows=(await e.DB.prepare('SELECT * FROM publications ORDER BY created_at DESC LIMIT 20').all<Publication>()).results;const pending=rows.filter(x=>['queued','building'].includes(x.status));if(pending.length){const token=await installationToken(e);for(const p of pending){
 const age=Date.now()-Date.parse(p.created_at);
 if(p.status==='queued'){
  if(p.commit_sha){
   const comparison=await github<{status:string}>(token,`/repos/${e.GITHUB_OWNER}/${e.GITHUB_REPO}/compare/${p.commit_sha}...${e.GITHUB_BRANCH}`);
   if(['identical','ahead'].includes(comparison.status)){p.status='building';p.error=null;await e.DB.prepare("UPDATE publications SET status='building',error=NULL WHERE id=?").bind(p.id).run()}
   else if(age>600000){p.status='failed';p.error='Yayın dalına aktarım tamamlanmadı. Yeniden yayınlayabilirsiniz.'}
  }else if(age>600000){p.status='failed';p.error='Yayın işlemi kesildi. Taslak korunuyor; yeniden deneyebilirsiniz.'}
  if(p.status==='failed')await e.DB.prepare("UPDATE publications SET status='failed',error=? WHERE id=?").bind(p.error,p.id).run();
 }
 if(p.status!=='building'||!p.commit_sha)continue;
 const runs=await github<{workflow_runs:{head_sha:string;status:string;conclusion:string|null}[]}>(token,`/repos/${e.GITHUB_OWNER}/${e.GITHUB_REPO}/actions/workflows/site.yml/runs?head_sha=${p.commit_sha}&per_page=10`);const run=runs.workflow_runs.find(x=>x.head_sha===p.commit_sha);if(run?.status==='completed'){p.status=run.conclusion==='success'?'published':'failed';p.error=p.status==='failed'?'Derleme veya dağıtım başarısız. GitHub Actions kaydını inceleyin.':null;await e.DB.prepare('UPDATE publications SET status=?,error=? WHERE id=?').bind(p.status,p.error,p.id).run()}}}return rows;}
async function publish(r:Request,e:AppEnv){
 const input=await body(r);if(typeof input.id!=='string'||!/^[0-9a-f-]{36}$/.test(input.id))return json({error:'Geçersiz yayın kimliği.'},400);
 const previous=await e.DB.prepare('SELECT * FROM publications WHERE id=?').bind(input.id).first();if(previous)return json(previous);
 const snapshot=await current(e);if(input.revision!==snapshot.revision)return json({error:'İçerik değişmiş. Son sürümü yükleyip yeniden deneyin.'},409);
 const token=await installationToken(e);await refreshJobs(e);
 try{await e.DB.prepare("INSERT INTO publications(id,revision,status,created_at) VALUES (?,?,'queued',?)").bind(input.id,snapshot.revision,new Date().toISOString()).run()}catch{return json({error:'Devam eden bir yayın var. Yayın durumunu kontrol edin.'},409)}
 try{
  const repo=`/repos/${e.GITHUB_OWNER}/${e.GITHUB_REPO}`;const ref=await github<{object:{sha:string}}>(token,repo+'/git/ref/heads/'+e.GITHUB_BRANCH);const commit=await github<{tree:{sha:string}}>(token,repo+'/git/commits/'+ref.object.sha);
  const data=publicSnapshot(snapshot.data);const tree:{path:string;mode:string;type:string;content?:string;sha?:string}[]=[{path:'content/site.json',mode:'100644',type:'blob',content:JSON.stringify(data,null,2)+'\n'}];
  const mediaKeys=[...new Set(JSON.stringify(data).match(/\/assets\/uploads\/[a-zA-Z0-9._-]+/g)||[])];if(mediaKeys.length>40)throw new Error('Bir yayında en fazla 40 medya dosyası destekleniyor.');
  for(const path of mediaKeys){const key=path.split('/').pop()!;const file=await mediaStore(e.DB).get(key);if(!file)throw new Error('Görsel veya dosya bulunamadı: '+key);const bytes=new Uint8Array(await file.arrayBuffer());let binary='';for(let i=0;i<bytes.length;i+=8192)binary+=String.fromCharCode(...bytes.subarray(i,i+8192));const blob=await github<{sha:string}>(token,repo+'/git/blobs','POST',{content:btoa(binary),encoding:'base64'});tree.push({path:path.slice(1),mode:'100644',type:'blob',sha:blob.sha})}
  const newTree=await github<{sha:string}>(token,repo+'/git/trees','POST',{base_tree:commit.tree.sha,tree});const next=await github<{sha:string}>(token,repo+'/git/commits','POST',{message:`İçerik yayını: sürüm ${snapshot.revision} [${input.id}]`,tree:newTree.sha,parents:[ref.object.sha]});
  await e.DB.prepare('UPDATE publications SET commit_sha=? WHERE id=?').bind(next.sha,input.id).run();
  await github(token,repo+'/git/refs/heads/'+e.GITHUB_BRANCH,'PATCH',{sha:next.sha,force:false});
  await e.DB.prepare("UPDATE publications SET status='building' WHERE id=?").bind(input.id).run();return json({id:input.id,status:'building',commit_sha:next.sha});
 }catch(err){const message=err instanceof Error?err.message:'Yayın başarısız.';const stored=await e.DB.prepare('SELECT commit_sha FROM publications WHERE id=?').bind(input.id).first<{commit_sha:string|null}>();await e.DB.prepare('UPDATE publications SET status=?,error=? WHERE id=?').bind(stored?.commit_sha?'queued':'failed',message,input.id).run();return json({error:message,id:input.id},502)}
}
async function handle(r:Request,e:AppEnv){const url=new URL(r.url),path=url.pathname;
 if(path.startsWith('/auth/'))return auth(r,e,path);
 if(path==='/api/health')return json({ok:true});
 if(!await authenticated(r,e)){
  if(path.startsWith('/api/')||path.startsWith('/assets/uploads/'))return json({error:'Giriş gerekli.'},401);
  if(path==='/'||path==='/index.html')return new Response('<!doctype html><html lang="tr"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Talha Nuri Yılmaz · Yönetim</title><style>body{font:16px system-ui;background:#f3f4ef;color:#253b32;max-width:440px;margin:15vh auto;padding:25px}h1{font-size:36px}a{display:inline-block;padding:16px 24px;background:#294f40;color:white;text-decoration:none;border-radius:6px}p{line-height:1.8}</style><p>TALHA NURİ YILMAZ / YÖNETİM</p><h1>Çalışma alanına hoş geldiniz.</h1><p>Yazılarınızı, araştırmalarınızı ve projelerinizi tek bir yerden yönetin.</p><a href="/auth/login">GitHub ile giriş yap →</a></html>',{headers:{'Content-Type':'text/html;charset=utf-8','Cache-Control':'no-store'}});
  return json({error:'Giriş gerekli.'},401);
 }
 if(!['GET','HEAD'].includes(r.method)){const allowed=local(r,e)?['http://127.0.0.1:5173','http://localhost:5173',url.origin]:[e.ADMIN_ORIGIN];if(!allowed.includes(r.headers.get('Origin')||''))return json({error:'İstek kaynağı doğrulanamadı.'},403)}
 if(path==='/api/session')return json({user:'talha1yilmaz',local:local(r,e)});
 if(path==='/api/logout'&&r.method==='POST'){await e.DB.prepare('DELETE FROM sessions WHERE hash=?').bind(await hash(cookie(r,'tny_session'))).run();return new Response('{}',{headers:{'Content-Type':'application/json','Set-Cookie':sessionCookie(r,e,'tny_session','',0)}})}
 if(path==='/api/site'&&r.method==='GET')return json(await current(e));
 if(path==='/api/site'&&r.method==='PUT'){
  const input=await body(r),data=siteSchema.parse(input.data),snapshot=await current(e);if(!Number.isInteger(input.revision)||snapshot.revision!==input.revision)return json({error:'Başka bir oturumda değişiklik yapılmış. Değişikliklerinizi dışa aktarıp sayfayı yenileyin.'},409);
  const rev=input.revision+1,serialized=JSON.stringify(data),now=new Date().toISOString();
  const result=await e.DB.batch([e.DB.prepare('INSERT INTO documents(id,revision,data,updated_at) VALUES(1,?,?,?) ON CONFLICT(id) DO UPDATE SET revision=excluded.revision,data=excluded.data,updated_at=excluded.updated_at WHERE documents.revision=?').bind(rev,serialized,now,input.revision),e.DB.prepare('INSERT OR IGNORE INTO history(revision,data,created_at) SELECT revision,data,updated_at FROM documents WHERE id=1')]);
  if(result[0].meta.changes===0)return json({error:'Sürüm çakışması. Yenileyip tekrar deneyin.'},409);return json({revision:rev,data});
 }
 if(path==='/api/history'&&r.method==='GET')return json((await e.DB.prepare('SELECT revision,created_at FROM history ORDER BY revision DESC LIMIT 50').all()).results);
 if(/^\/api\/history\/\d+$/.test(path)&&r.method==='GET'){const row=await e.DB.prepare('SELECT data FROM history WHERE revision=?').bind(Number(path.split('/').pop())).first<{data:string}>();return row?json(JSON.parse(row.data)):json({error:'Sürüm bulunamadı.'},404)}
 if(path==='/api/publications'&&r.method==='GET')return json(await refreshJobs(e));
 if(path==='/api/publish'&&r.method==='POST')return publish(r,e);
 if(path==='/api/media'&&r.method==='GET')return json((await e.DB.prepare('SELECT * FROM media ORDER BY created_at DESC').all()).results);
 if(path==='/api/media'&&r.method==='POST'){
  const bytes=await bounded(r,10_000_000);const ext=bytes[0]===137&&bytes[1]===80&&bytes[2]===78&&bytes[3]===71?'png':bytes[0]===255&&bytes[1]===216&&bytes[2]===255?'jpg':new TextDecoder().decode(bytes.slice(0,4))==='%PDF'?'pdf':new TextDecoder().decode(bytes.slice(0,4))==='RIFF'&&new TextDecoder().decode(bytes.slice(8,12))==='WEBP'?'webp':'';if(!ext)return json({error:'PNG, JPEG, WebP veya PDF yükleyin.'},400);
  const key=crypto.randomUUID()+'.'+ext,type=ext==='pdf'?'application/pdf':ext==='jpg'?'image/jpeg':'image/'+ext;await mediaStore(e.DB).put(key,bytes,{httpMetadata:{contentType:type}});await e.DB.prepare('INSERT INTO media(id,name,type,size,created_at) VALUES (?,?,?,?,?)').bind(key,decodeURIComponent(r.headers.get('X-File-Name')||key).slice(0,200),type,bytes.length,new Date().toISOString()).run();return json({id:key,url:'/assets/uploads/'+key});
 }
 if(path.startsWith('/assets/uploads/')){const key=path.slice('/assets/uploads/'.length);if(!/^[a-zA-Z0-9._-]+$/.test(key))return json({error:'Bulunamadı'},404);const file=await mediaStore(e.DB).get(key);if(!file)return json({error:'Bulunamadı'},404);return new Response(file.body,{headers:{'Content-Type':file.httpMetadata?.contentType||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}})}
 if(path.startsWith('/api/'))return json({error:'Bulunamadı'},404);
 return e.ASSETS.fetch(r);
}
export default {async fetch(r:Request,e:AppEnv){try{const response=await handle(r,e);const secured=new Response(response.body,response);secured.headers.set('X-Frame-Options','SAMEORIGIN');secured.headers.set('Referrer-Policy','same-origin');secured.headers.set('X-Robots-Tag','noindex, nofollow');secured.headers.set('Cache-Control','no-store');return secured}catch(err){console.error(JSON.stringify({event:'request_failed',path:new URL(r.url).pathname,error:err instanceof Error?err.name:'Error'}));return json({error:err instanceof Error?err.message:'İşlem tamamlanamadı.'},400)}}} satisfies ExportedHandler<AppEnv>;
