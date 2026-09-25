import { z } from 'zod';

const text = z.string().max(4000);
const link = z.string().max(1000).refine(v => !v || /^https:\/\/[^\s]+$/.test(v) || /^mailto:[^\s]+$/.test(v), 'HTTPS veya e-posta bağlantısı girin.');
export function validOrcid(value:string){
 if(!value)return true;
 const match=/^https:\/\/orcid\.org\/(\d{4}-\d{4}-\d{4}-[\dX]{4})$/.exec(value);
 if(!match)return false;
 const digits=match[1].replaceAll('-','');let total=0;
 for(const digit of digits.slice(0,15))total=(total+Number(digit))*2;
 const expected=(12-total%11)%11;
 return (expected===10?'X':String(expected))===digits[15];
}
const orcid=z.string().max(1000).refine(validOrcid,'Geçerli bir ORCID adresi girin veya alanı boş bırakın.');
export const blockSchema = z.object({
  id: z.string().uuid(), type: z.enum(['hero','research','projects','writing','text','image','timeline','contact']),
  title: text, body: text.default(''), visible: z.boolean(), columns: z.enum(['1','2']),
  image: z.string().regex(/^(|\/assets\/(uploads|projects)\/[a-zA-Z0-9._-]+)$/).default(''),
});
export const articleSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(120), title: z.string().min(1).max(500),
  category: z.enum(['research','essay','analysis']), date: z.iso.date(),
  summary: text, tags: z.array(z.string().max(60)).max(12), body: z.string().max(300000),
  published: z.boolean(), doi: z.string().max(200).default(''),
});
export const projectSchema = z.object({slug: z.string().regex(/^[a-z0-9-]+$/), title:text, summary:text, body:text, url:link, status:text, image:z.string().regex(/^(|\/assets\/(uploads|projects)\/[a-zA-Z0-9._-]+)$/).default('')});
export const siteSchema = z.object({
  schemaVersion: z.literal(1),
  profile: z.object({name: text, role:text, intro:text, bio:text, email:z.string().email(), github:link, linkedin:link, orcid, thesis:text}),
  theme: z.object({palette:z.enum(['burgundy','forest','navy']), typography:z.enum(['editorial','modern']), density:z.enum(['airy','compact'])}),
  blocks:z.array(blockSchema).max(30), articles:z.array(articleSchema).max(300), projects:z.array(projectSchema).max(50),
}).superRefine((v,c)=>{
  for (const list of [v.articles,v.projects]) if(new Set(list.map(x=>x.slug)).size!==list.length)c.addIssue({code:'custom',message:'Aynı bağlantı adı iki kez kullanılamaz.'});
  if(new Set(v.blocks.map(x=>x.id)).size!==v.blocks.length)c.addIssue({code:'custom',message:'Bölüm kimlikleri benzersiz olmalı.'});
});
export type SiteData = z.infer<typeof siteSchema>;
export type Article = SiteData['articles'][number];
export const categories = {research:'Çalışma metni',essay:'Deneme',analysis:'Analiz'};
export function publicSnapshot(data:SiteData):SiteData{return {...data,articles:data.articles.filter(a=>a.published)};}
