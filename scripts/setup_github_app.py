"""One-time loopback setup. Secrets go directly to Worker secrets, never to disk."""
from http.server import HTTPServer,BaseHTTPRequestHandler
from urllib.parse import urlsplit,parse_qs
from pathlib import Path
import json,secrets,html,urllib.request,subprocess,os
from cryptography.hazmat.primitives import serialization

ROOT=Path(__file__).resolve().parents[1]
STATE=secrets.token_urlsafe(32)
MANIFEST={'name':'Talha Site Studio','url':'https://talhayilmaz.xyz','redirect_url':'http://127.0.0.1:8987/callback','callback_urls':['https://admin.talhayilmaz.xyz/auth/callback'],'public':False,'hook_attributes':{'active':False,'url':'https://admin.talhayilmaz.xyz/api/github-events'},'default_permissions':{'contents':'write','actions':'read','metadata':'read'},'default_events':[],'description':'Talha Nuri Yılmaz kişisel sitesinin özel içerik yönetimi.'}
def wrangler(*args,secret=None):
    result=subprocess.run(['npx.cmd' if os.name=='nt' else 'npx','wrangler',*args],cwd=ROOT,input=secret,text=True,encoding="utf-8",errors="replace",capture_output=True)
    if result.returncode:raise RuntimeError('Wrangler işlemi başarısız: '+args[0]+'. Yeniden kurulumdan önce Worker durumunu kontrol edin.')
class Handler(BaseHTTPRequestHandler):
    def log_message(self,*args):pass
    def page(self,body,status=200):
        self.send_response(status);self.send_header('Content-Type','text/html;charset=utf-8');self.send_header('Cache-Control','no-store');self.end_headers();self.wfile.write(('<!doctype html><html lang="tr"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>GitHub bağlantısı</title><style>body{font:16px system-ui;max-width:650px;margin:10vh auto;padding:30px;color:#294333;background:#f5f6f0}p{line-height:1.9}button,a{padding:13px;background:#315643;color:white;border:0;border-radius:5px;display:inline-block;text-decoration:none}h1{font-size:30px}</style>'+body).encode())
    def do_GET(self):
        url=urlsplit(self.path)
        if url.path=='/':
            manifest=html.escape(json.dumps(MANIFEST))
            self.page('<h1>GitHub bağlantısını tamamla</h1><p>Site Studio, içerik yayınlamak için yalnızca seçtiğiniz depoya kurulacak. İstenen yetkiler: dosyalara yazma, Actions sonuçlarını ve depo bilgilerini okuma. Sonraki kurulum ekranında yalnız <strong>talhayilmaz.xyz</strong> deposunu seçin.</p><form method="post" action="https://github.com/settings/apps/new?state='+STATE+'"><input type="hidden" name="manifest" value="'+manifest+'"><button>GitHub kurulum formunu aç</button></form>');return
        if url.path=='/callback':
            q=parse_qs(url.query)
            if not secrets.compare_digest(q.get('state',[''])[0],STATE) or not q.get('code'):self.page('<h1>Geçersiz kurulum isteği</h1>',403);return
            try:
                request=urllib.request.Request('https://api.github.com/app-manifests/'+q['code'][0]+'/conversions',data=b'',headers={'Accept':'application/vnd.github+json','User-Agent':'talha-site-setup'},method='POST')
                with urllib.request.urlopen(request,timeout=30) as response:result=json.load(response)
                key=serialization.load_pem_private_key(result['pem'].encode(),password=None).private_bytes(serialization.Encoding.PEM,serialization.PrivateFormat.PKCS8,serialization.NoEncryption()).decode()
                config=ROOT/'wrangler.jsonc';data=json.loads(config.read_text(encoding='utf8'));data['vars']['GITHUB_APP_ID']=str(result['id']);data['vars']['GITHUB_CLIENT_ID']=result['client_id'];config.write_text(json.dumps(data,indent=2),encoding='utf8')
                wrangler('secret','put','GITHUB_CLIENT_SECRET',secret=result['client_secret'])
                wrangler('secret','put','GITHUB_PRIVATE_KEY',secret=key)
                wrangler('deploy')
                slug=result['slug'];self.page('<h1>Giriş bağlantısı hazır.</h1><p>Şimdi uygulamayı yalnızca kişisel site deponuza kurun. Kurulum tamamlandıktan sonra yayın bağlantısının doğrulanması için bu göreve dönün.</p><a href="https://github.com/apps/'+html.escape(slug)+'/installations/new">Depo kurulumunu aç</a>')
                print('GitHub App created; secrets transferred. App ID: '+str(result['id'])+'; slug: '+slug,flush=True)
            except Exception as exc:self.page('<h1>Kurulum tamamlanamadı</h1><p>'+html.escape(str(exc))+'</p>',500)
            return
        self.page('Bulunamadı',404)
if __name__=='__main__':
    print('GitHub App setup: http://127.0.0.1:8987 (loopback only)',flush=True)
    HTTPServer(('127.0.0.1',8987),Handler).serve_forever()
