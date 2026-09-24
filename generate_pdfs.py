import os
from xhtml2pdf import pisa
import markdown

BASE_DIR = r"c:\Users\talha\OneDrive\Masaüstü\_DUZENLI_CALISMA\talhayilmaz.xyz"
MD_DIR = os.path.join(BASE_DIR, "makale")
PDF_DIR = os.path.join(BASE_DIR, "assets", "pdf")

if not os.path.exists(PDF_DIR):
    os.makedirs(PDF_DIR)

md_files = [f for f in os.listdir(MD_DIR) if f.endswith('.md')]

def convert_html_to_pdf(source_html, output_filename):
    with open(output_filename, "w+b") as result_file:
        pisa_status = pisa.CreatePDF(
            source_html,                # the HTML to convert
            dest=result_file            # file handle to recieve result
        )
    return pisa_status.err

for file in md_files:
    slug = file.replace('.md', '')
    md_path = os.path.join(MD_DIR, file)
    with open(md_path, 'r', encoding='utf-8') as f:
        md_text = f.read()
    
    html = markdown.markdown(md_text, extensions=['extra', 'toc', 'sane_lists'])
    
    # Add a simple wrapper with a font that supports Turkish characters
    wrapped_html = f"""
    <html>
    <head>
    <meta charset="UTF-8">
    <style>
        body {{ font-family: Helvetica, Arial, sans-serif; }}
        h1 {{ color: #022448; }}
        h2 {{ color: #a13d3b; }}
    </style>
    </head>
    <body>
    {html}
    </body>
    </html>
    """
    
    pdf_path = os.path.join(PDF_DIR, f"{slug}.pdf")
    print(f"Generating PDF for {slug}...")
    err = convert_html_to_pdf(wrapped_html, pdf_path)
    if err:
        print(f"Error generating {slug}.pdf")
    else:
        print(f"Success: {slug}.pdf")
