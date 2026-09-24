import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';
import { Site } from '../shared/Site';
import { siteSchema, publicSnapshot } from '../shared/model';

const root=process.cwd(),out=path.join(root,'dist');
const data=publicSnapshot(siteSchema.parse(JSON.parse(await fs.readFile('content/site.json','utf8'))));
await fs.mkdir(out,{recursive:true});
await build({configFile:false,build:{outDir:'dist',emptyOutDir:true,rollupOptions:{input:'shared/public.ts',output:{entryFileNames:'assets/site.js',assetFileNames:'assets/[name][extname]'}}}});
const esc=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const pages=[{url:'index.html',page:'home',title:'Araştırma & projeler'}, {url:'calisma-metinleri.html',page:'research',title:'Araştırmalar'},{url:'denemeler.html',page:'writing',title:'Yazılar'},{url:'projeler.html',page:'projects',title:'Projeler'},{url:'ozgecmis.html',page:'about',title:'Hakkımda'},{url:'404.html',page:'404',title:'Sayfa bulunamadı'},...data.articles.map(a=>({url:`makale/${a.slug}.html`,page:'article',title:a.title,slug:a.slug})),...data.projects.map(p=>({url:`projeler/${p.slug}.html`,page:'project',title:p.title,slug:p.slug}))];
const css=(await fs.readdir(path.join(out,'assets'))).find(x=>x.endsWith('.css'))!;
for(const p of pages){const slug='slug'in p?p.slug:'';const title=esc(p.title+' — '+data.profile.name);const description=esc(data.articles.find(a=>a.slug===slug)?.summary||data.profile.intro);const html='<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+title+'</title><meta name="description" content="'+description+'"><link rel="canonical" href="https://talhayilmaz.xyz/'+(p.url==='index.html'?'':p.url)+'"><meta property="og:title" content="'+title+'"><meta property="og:description" content="'+description+'"><meta property="og:type" content="website"><link rel="stylesheet" href="/assets/'+css+'"><script type="module" src="/assets/site.js"></script></head><body>'+renderToStaticMarkup(<Site data={data} page={p.page} slug={slug}/>)+'</body></html>';await fs.mkdir(path.dirname(path.join(out,p.url)),{recursive:true});await fs.writeFile(path.join(out,p.url),html);}
await fs.mkdir(path.join(out,'assets/citations'),{recursive:true});
for(const a of data.articles){const clean=(s:string)=>s.replace(/[{}\\]/g,'');await fs.writeFile(path.join(out,`assets/citations/${a.slug}.bib`),`@unpublished{yilmaz${a.date.slice(0,4)}${a.slug.replaceAll('-','')},\n author = {Yılmaz, Talha Nuri},\n title = {${clean(a.title)}},\n year = {${a.date.slice(0,4)}},\n note = {${a.category==='research'?'Çalışma metni':'Kişisel web sitesi yazısı'}},\n url = {https://talhayilmaz.xyz/makale/${a.slug}.html}\n}\n`);}
for(const [alias,target] of Object.entries({'hakkimda.html':'ozgecmis.html','makaleler.html':'calisma-metinleri.html','kpss-kurdu.html':'projeler/kpss-kurdu.html','cv/index.html':'ozgecmis.html','papers/index.html':'calisma-metinleri.html','hakkimda/index.html':'ozgecmis.html','makaleler/index.html':'calisma-metinleri.html'})){await fs.mkdir(path.dirname(path.join(out,alias)),{recursive:true});await fs.writeFile(path.join(out,alias),`<!doctype html><html lang="tr"><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/${target}"><link rel="canonical" href="https://talhayilmaz.xyz/${target}"><title>Sayfa taşındı</title><a href="/${target}">Sayfaya git</a></html>`);}
const uploads=[...new Set(JSON.stringify(data).match(/\/assets\/uploads\/[a-zA-Z0-9._-]+/g)||[])];
for(const asset of uploads){await fs.mkdir(path.join(out,'assets/uploads'),{recursive:true});await fs.copyFile(path.join(root,asset.slice(1)),path.join(out,asset.slice(1)));}
await fs.cp('assets/projects',path.join(out,'assets/projects'),{recursive:true});
await fs.writeFile(path.join(out,'CNAME'),'talhayilmaz.xyz\n');await fs.writeFile(path.join(out,'.nojekyll'),'');
await fs.writeFile(path.join(out,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://talhayilmaz.xyz/sitemap.xml\n');
await fs.writeFile(path.join(out,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+pages.filter(p=>p.page!=='404').map(p=>'<url><loc>https://talhayilmaz.xyz/'+p.url+'</loc></url>').join('')+'</urlset>');
await fs.writeFile(path.join(out,'version.json'),JSON.stringify({commit:process.env.GITHUB_SHA||'local',builtAt:new Date().toISOString()}));
console.log(`${pages.length} sayfa üretildi. Yalnızca yayımlanmış içerikler dist/ içinde.`);
