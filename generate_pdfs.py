"""PDF generation from the same content snapshot as the site."""
from pathlib import Path
import json,html,re
import markdown,bleach
from xhtml2pdf import pisa
from pypdf import PdfReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from xhtml2pdf.default import DEFAULT_FONT
ROOT=Path(__file__).resolve().parent
OUT=ROOT/'dist/assets/pdf'
def resource(uri,rel):
    if uri.startswith('/assets/uploads/'):
        target=(ROOT/uri.lstrip('/')).resolve()
        if not target.is_relative_to((ROOT/'assets/uploads').resolve()) or not target.exists():raise ValueError('Missing media: '+uri)
        return str(target)
    if uri.startswith('https:') or uri.startswith('http:'):raise ValueError('Remote image must be imported into media library: '+uri)
    raise ValueError("Only media library images are supported: "+uri)
if __name__=='__main__':
    OUT.mkdir(parents=True,exist_ok=True)
    data=json.loads((ROOT/'content/site.json').read_text(encoding='utf8'))
    regular=(ROOT/'assets/fonts/NotoSans-Regular.ttf').as_posix()
    bold=(ROOT/'assets/fonts/NotoSans-Bold.ttf').as_posix()
    pdfmetrics.registerFont(TTFont('Noto',regular))
    pdfmetrics.registerFont(TTFont('Noto-Bold',bold))
    pdfmetrics.registerFontFamily('Noto',normal='Noto',bold='Noto-Bold',italic='Noto',boldItalic='Noto-Bold')
    DEFAULT_FONT['noto']='Noto'
    for a in data['articles']:
        if not a['published']:continue
        body=bleach.clean(markdown.markdown(a['body'],extensions=['extra','sane_lists']),tags=set(bleach.sanitizer.ALLOWED_TAGS)|{'p','h1','h2','h3','h4','h5','h6','hr','br','table','thead','tbody','tr','td','th','img','pre','div'},attributes={'a':['href','title'],'img':['src','alt'],'th':['align'],'td':['align']},strip=True)
        css=' @page{size:A4;margin:2cm;} body{font-family:Noto;font-size:10pt;line-height:1.6;color:#273a32;} h1{font-size:20pt;line-height:1.3;}h2{font-size:15pt;margin-top:20pt;}h3{font-size:12pt;}td,th{font-size:8pt;padding:5pt;border:0.4pt solid #b8c4b4;}img{max-width:450pt;}a{color:#873e35;} pre{white-space:pre-wrap;font-size:8pt;}'
        source='<html><meta charset="utf-8"><style>'+css+'</style><body><h1>'+html.escape(a['title'])+'</h1><p>'+html.escape(data['profile']['name'])+' | '+a['date']+'</p><hr>'+body+'</body></html>'
        dest=OUT/(a['slug']+'.pdf')
        with dest.open('wb') as stream:
            result=pisa.CreatePDF(source,dest=stream,encoding='utf-8',link_callback=resource)
        if result.err:raise RuntimeError('PDF build failed: '+a['slug'])
        reader=PdfReader(dest)
        if not reader.pages:raise RuntimeError('Empty PDF')
        print(a['slug']+': '+str(len(reader.pages))+' pages')
