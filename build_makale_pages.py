import os
import markdown
import re
from datetime import datetime

# --- Paths ---
BASE_DIR = r"c:\Users\talha\OneDrive\Masaüstü\_DUZENLI_CALISMA\talhayilmaz.xyz"
MD_DIR = os.path.join(BASE_DIR, "makale")
HTML_DIR = os.path.join(BASE_DIR, "makale")

# --- HTML Template ---
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="tr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — Talha Nuri Yılmaz</title>
  <meta name="description" content="{description}">
  <link rel="canonical" href="https://talhayilmaz.xyz/makale/{slug}.html">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body>
  <header class="site-header">
    <div class="container nav-container">
      <a href="../index.html" class="brand-logo">
        <span class="brand-name">Talha Nuri Yılmaz</span>
        <span class="brand-tag">Siyaset Bilimi · Kamu Yönetimi</span>
      </a>
      <ul class="nav-links">
        <li><a href="../index.html">Ana Sayfa</a></li>
        <li><a href="../makaleler.html" class="active">Çalışma Metinleri</a></li>
        <li><a href="../hakkimda.html">Özgeçmiş</a></li>
      </ul>
      <div class="nav-actions">
        <button class="theme-toggle" aria-label="Tema değiştir">🌙</button>
      </div>
    </div>
  </header>

  <main class="container reader-layout">
    <article class="article-content">
      <header class="article-header">
        <a href="../makaleler.html" class="back-link">← Makalelere Dön</a>
        <div class="article-meta">
          <span class="tag status">Çalışma Metni</span>
          <span class="meta-item">Yazar: <strong>Talha Nuri Yılmaz</strong></span>
          <div class="meta-divider"></div>
          <span class="meta-item">2026</span>
          <div class="meta-divider"></div>
          <span class="meta-item" id="word-count"></span>
          <span class="meta-item" id="reading-time"></span>
        </div>
        <h1>{title}</h1>
        <div class="keywords">
          {tags_html}
        </div>
      </header>

      <div class="article-body">
        {content}
      </div>
    </article>

    <aside class="sidebar-toc">
      <h4>İçindekiler</h4>
      <ul id="toc-list">
        {toc_html}
      </ul>
    </aside>
  </main>

  <div class="download-bar">
    <a href="../assets/pdf/{slug}.pdf" class="btn btn-primary" download>PDF İndir</a>
    <button class="btn" data-bibtex-toggle="bib-{slug}">BibTeX Atıf</button>
  </div>
  
  <!-- Bibtex Popup (hidden by default) -->
  <div id="bib-{slug}" class="bibtex-box" style="position:fixed; bottom:80px; left:50%; transform:translateX(-50%); width:90%; max-width:600px; z-index:100; box-shadow:0 10px 25px rgba(0,0,0,0.2);">
@unpublished{{yilmaz2026{slug_clean},
  author = {{Yılmaz, Talha Nuri}},
  title  = {{{title}}},
  year   = {{2026}},
  note   = {{Çalışma Metni (Working Paper). Osmaniye Korkut Ata Üniversitesi, Sosyal Bilimler Enstitüsü}},
  url    = {{https://talhayilmaz.xyz/makale/{slug}.html}}
}}
    <button class="btn btn-sm mt-2" data-bibtex-copy="bib-{slug}">Kopyala</button>
  </div>

  <footer class="site-footer mt-4">
    <p>© 2026 Talha Nuri Yılmaz</p>
  </footer>

  <script src="../assets/js/main.js"></script>
</body>
</html>
"""

def slugify(text):
    text = text.lower().replace(' ', '-').replace('ı', 'i').replace('ğ', 'g').replace('ü', 'u').replace('ş', 's').replace('ö', 'o').replace('ç', 'c')
    return re.sub(r'[^a-z0-9-]', '', text)

def build_articles():
    if not os.path.exists(MD_DIR):
        print(f"Hata: {MD_DIR} bulunamadı.")
        return

    md_files = [f for f in os.listdir(MD_DIR) if f.endswith('.md')]
    if not md_files:
        print("MD dosyası bulunamadı.")
        return

    md_exts = ['extra', 'toc', 'sane_lists']

    for file in md_files:
        slug = file.replace('.md', '')
        slug_clean = slug.replace('-', '')
        md_path = os.path.join(MD_DIR, file)
        
        with open(md_path, 'r', encoding='utf-8') as f:
            md_text = f.read()

        # Extract title (first # Heading)
        title_match = re.search(r'^#\s+(.+)$', md_text, re.MULTILINE)
        title = title_match.group(1).strip() if title_match else "İsimsiz Makale"
        
        # Remove title from body to avoid duplication in HTML
        md_text = re.sub(r'^#\s+(.+)$\n', '', md_text, count=1, flags=re.MULTILINE)

        # Convert to HTML
        html_content = markdown.markdown(md_text, extensions=md_exts)

        # Wrap tables in responsive container
        html_content = re.sub(r'(<table>.*?</table>)', r'<div class="table-container">\1</div>', html_content, flags=re.DOTALL)

        # Extract TOC items (h2)
        toc_items = []
        for match in re.finditer(r'<h2[^>]*id="([^"]+)"[^>]*>(.*?)<\/h2>', html_content):
            toc_items.append(f'<li><a href="#{match.group(1)}">{match.group(2)}</a></li>')
        toc_html = '\n'.join(toc_items)

        # Basic tags based on slug
        tags = []
        if 'ai' in slug: tags = ['Yapay Zekâ', 'Bürokrasi', 'Algokrasi']
        elif 'civic' in slug: tags = ['Civic Tech', 'Yerel Yönetim', 'Katılım']
        elif 'akdeniz' in slug: tags = ['Realpolitik', 'Doğu Akdeniz', 'Güç Dengesi']
        
        tags_html = '\n'.join([f'<span class="tag">{t}</span>' for t in tags])
        
        # Write HTML
        final_html = HTML_TEMPLATE.format(
            title=title,
            slug=slug,
            slug_clean=slug_clean,
            description=f"{title} - Talha Nuri Yılmaz çalışma metni.",
            tags_html=tags_html,
            toc_html=toc_html,
            content=html_content
        )

        out_path = os.path.join(HTML_DIR, f"{slug}.html")
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(final_html)
        print(f"Oluşturuldu: {out_path}")

if __name__ == "__main__":
    build_articles()
