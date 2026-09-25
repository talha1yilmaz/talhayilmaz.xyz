import {describe,it,expect} from 'vitest';
import {siteSchema,publicSnapshot,validOrcid} from '../shared/model';
import {markdown} from '../shared/Site';
import initial from '../content/site.json';
describe('content publication boundaries',()=>{
 it('accepts migrated content and excludes private drafts',()=>{const d=siteSchema.parse(initial);d.articles[0].published=false;expect(publicSnapshot(d).articles.some(a=>a.slug===d.articles[0].slug)).toBe(false);expect(d.articles).toHaveLength(initial.articles.length)});
 it('rejects duplicate and unsafe URL slugs',()=>{const d=structuredClone(initial);d.articles[1].slug=d.articles[0].slug;expect(()=>siteSchema.parse(d)).toThrow();d.articles[1].slug='../test';expect(()=>siteSchema.parse(d)).toThrow()});
 it('rejects executable links in profile and projects',()=>{const d=structuredClone(initial);d.projects[0].url='javascript:alert(1)';expect(()=>siteSchema.parse(d)).toThrow()});
 it('removes executable HTML while preserving tables and Turkish text',()=>{const result=markdown('<script>alert(1)</script><img src="/assets/uploads/a.png" onerror="alert(1)">\n\n| Ölçüt | Değer |\n|---|---|\n| Şeffaflık | İyi |');expect(result).not.toContain('<script');expect(result).not.toContain('onerror');expect(result).toContain('<table>');expect(result).toContain('Şeffaflık');expect(result).toContain('/assets/uploads/a.png')});
 it('rejects outside upload paths and invalid palettes',()=>{const d=structuredClone(initial);d.blocks[0].image='//outside.example/a.jpg';expect(()=>siteSchema.parse(d)).toThrow()});
 it('rejects the incorrect ORCID identifier previously shown on the live site',()=>{expect(validOrcid('https://orcid.org/0009-0005-4727-8118')).toBe(false);expect(validOrcid('https://orcid.org/0000-0002-1825-0097')).toBe(true);const d=structuredClone(initial);d.profile.orcid='https://orcid.org/0009-0005-4727-8118';expect(()=>siteSchema.parse(d)).toThrow()});
});
