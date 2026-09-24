from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'dist'
class Links(HTMLParser):
    def __init__(self):super().__init__();self.links=[];self.ids=set()
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.add(a['id'])
        if tag in ('a','img','script','link'):
            url=a.get('href',a.get('src',''))
            if url:self.links.append(url)
errors=[]
for file in OUT.rglob('*.html'):
    parser=Links();parser.feed(file.read_text(encoding='utf8'))
    for link in parser.links:
        url=urlsplit(link)
        if url.scheme or url.netloc:continue
        if link=='#':errors.append(f'{file.name}: empty link');continue
        if not url.path:
            if url.fragment and url.fragment not in parser.ids:errors.append(f'{file.name}: {link}')
            continue
        target=(OUT/unquote(url.path).lstrip('/')) if url.path.startswith('/') else file.parent/unquote(url.path)
        if target.is_dir():target=target/'index.html'
        if not target.exists():errors.append(f'{file.relative_to(OUT)}: missing {link}')
data=json.loads((ROOT/'content/site.json').read_text(encoding='utf8'))
for a in data['articles']:
    if not a['published'] and (OUT/'makale'/f"{a['slug']}.html").exists():errors.append('Draft leaked: '+a['slug'])
for sensitive in ['admin.html','admin/index.html','content/site.json','worker/index.ts']:
    if (OUT/sensitive).exists():errors.append('Private source in build: '+sensitive)
if errors:raise SystemExit('\n'.join(errors))
print('PASS: internal links, PDFs, draft exclusion and public output boundaries.')
