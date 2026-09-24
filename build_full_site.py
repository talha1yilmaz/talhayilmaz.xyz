# -*- coding: utf-8 -*-
"""
Talha Nuri Yilmaz - Academic Site Builder & Stitch Integrator
Harmonizes Stitch screens, updates author bio, ORCID, affiliations, navigation, and links.
"""

import os
import re

ROOT_DIR = r"c:\Users\talha\OneDrive\Masaüstü\_DUZENLI_CALISMA\talhayilmaz.xyz"
STITCH_DIR = os.path.join(ROOT_DIR, "stitch_screens")

# Verified Author Data
AUTHOR_NAME = "Talha Nuri Yılmaz"
AUTHOR_AFFILIATION = "Osmaniye Korkut Ata Üniversitesi"
AUTHOR_INSTITUTE = "Sosyal Bilimler Enstitüsü"
AUTHOR_DEPT = "Siyaset Bilimi ve Kamu Yönetimi Anabilim Dalı"
AUTHOR_ADVISOR = "Prof. Dr. Selim Coşkun"
AUTHOR_ORCID = "0009-0005-4727-8118"
AUTHOR_EMAIL = "talhanuriyilmaz@gmail.com"
AUTHOR_TWITTER = "https://x.com/talha1yilmaz"
AUTHOR_TWITTER_HANDLE = "@talha1yilmaz"
AUTHOR_LINKEDIN = "https://www.linkedin.com/in/talha-nuri-yilmaz-626087182/"

# Unified Navigation Menu HTML
UNIFIED_NAV = """<nav class="hidden xl:flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
            <a class="px-3 py-1.5 rounded hover:text-primary hover:bg-surface-container transition-colors text-primary font-medium" href="index.html">Genel Bakış</a>
            <a class="px-3 py-1.5 rounded hover:text-secondary hover:bg-secondary/5 transition-colors flex items-center gap-1.5" href="calisma-metinleri.html">
              <span class="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              Çalışma Metinleri
            </a>
            <a class="px-3 py-1.5 rounded hover:text-secondary hover:bg-secondary/5 transition-colors flex items-center gap-1.5" href="denemeler.html">
              <span class="w-1.5 h-1.5 rounded-full bg-[#c19e67] inline-block"></span>
              Akademik Denemeler
            </a>
            <a class="px-3 py-1.5 rounded hover:text-primary hover:bg-primary/5 transition-colors text-primary font-medium flex items-center gap-1" href="kpss-kurdu.html">
              <span class="material-symbols-outlined text-[15px] text-primary">terminal</span>
              KPSS Kurdu &amp; Vibe Coding
            </a>
            <a class="px-3 py-1.5 rounded hover:text-primary hover:bg-surface-container transition-colors" href="ozgecmis.html">Özgeçmiş</a>
            <a class="px-3 py-1.5 rounded hover:text-primary hover:bg-surface-container transition-colors" href="index.html#iletisim">İletişim</a>
            <a class="px-2.5 py-1 rounded bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors text-xs font-mono font-semibold ml-2" href="admin.html" title="Yönetici Paneli">
              ⚙️ Admin
            </a>
          </nav>"""

def clean_and_replace_author_info(content):
    # Fix ORCID
    content = re.sub(r'0000-0002-[0-9X]{4}-[0-9X]{4}', AUTHOR_ORCID, content)
    content = re.sub(r'0000-0002-8419-411X', AUTHOR_ORCID, content)
    content = re.sub(r'ISSN/ORCID:\s*[0-9X\-]+', f'ORCID: {AUTHOR_ORCID}', content)
    
    # Fix Email
    content = re.sub(r'talhanuri\.yilmaz@osmaniye\.edu\.tr', AUTHOR_EMAIL, content)
    content = re.sub(r'talhanuri@osmaniye\.edu\.tr', AUTHOR_EMAIL, content)
    content = re.sub(r'iletisim@talhayilmaz\.xyz', AUTHOR_EMAIL, content)
    
    # Fix Advisor
    content = re.sub(r'Prof\.\s*Dr\.\s*A\.\s*K\.', AUTHOR_ADVISOR, content)
    
    # Fix Social links
    content = re.sub(r'https://www\.linkedin\.com/in/talhanuriyilmaz', AUTHOR_LINKEDIN, content)
    content = re.sub(r'https://twitter\.com/talha1yilmaz', AUTHOR_TWITTER, content)
    
    return content

# 1. BUILD INDEX.HTML
def build_index():
    src_file = os.path.join(STITCH_DIR, "Ana Sayfa - Talha Nuri Yılmaz _talhayilmaz_xyz__13ea9927b2f64074aa6ba3a1801e190f.html")
    with open(src_file, "r", encoding="utf-8") as f:
        content = f.read()

    content = clean_and_replace_author_info(content)
    
    # Update navigation in header
    content = re.sub(r'<nav class="hidden xl:flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">.*?</nav>', UNIFIED_NAV, content, flags=re.DOTALL)
    
    # Update Working Paper 1 links (ai-burokrasi)
    content = re.sub(
        r'<a class="bg-primary hover:bg-primary-container text-on-primary px-5 py-2.5 font-label-md text-label-md uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2" href="#">\s*<span>Metni Oku</span>',
        r'<a class="bg-primary hover:bg-primary-container text-on-primary px-5 py-2.5 font-label-md text-label-md uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2" href="makale/ai-burokrasi.html">\n<span>Metni Oku</span>',
        content,
        count=1
    )
    
    # Update Thesis Advisor block in dossier
    old_dossier = "Türkiye’de Dijital Kamu Politikaları ve Akıllı Sözleşmelerin İdari Takdir Alanına Etkisi"
    new_dossier = f"""Türkiye’de Dijital Kamu Politikaları ve Akıllı Sözleşmelerin İdari Takdir Alanına Etkisi
                </div>
                <div class="text-[12px] text-on-surface-variant font-mono mt-1">OKÜ Sosyal Bilimler Enstitüsü · Tez Danışmanı: <strong>{AUTHOR_ADVISOR}</strong>"""
    content = content.replace(f"{old_dossier}\n                </div>\n<div class=\"text-[12px] text-on-surface-variant font-mono mt-1\">OKÜ Sosyal Bilimler Enstitüsü (Devam Ediyor)</div>", new_dossier)

    out_file = os.path.join(ROOT_DIR, "index.html")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {out_file} ({len(content)} bytes)")

# 2. BUILD OZGECMIS.HTML & HAKKIMDA.HTML
def build_ozgecmis():
    src_file = os.path.join(STITCH_DIR, "Özgeçmiş - Talha Nuri Yılmaz_b475f5832e714c1eb07427149861b9ea.html")
    with open(src_file, "r", encoding="utf-8") as f:
        content = f.read()

    content = clean_and_replace_author_info(content)
    
    # Replace header nav
    content = re.sub(r'<nav class="hidden md:flex items-center gap-space-md".*?</nav>', UNIFIED_NAV, content, flags=re.DOTALL)
    
    # Add title tag if missing
    if "<title>" not in content:
        content = content.replace("<head>", f"<head><title>Özgeçmiş (CV) · {AUTHOR_NAME}</title>")

    out_file = os.path.join(ROOT_DIR, "ozgecmis.html")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {out_file}")

    # Also update hakkimda.html
    out_hakkimda = os.path.join(ROOT_DIR, "hakkimda.html")
    with open(out_hakkimda, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {out_hakkimda}")

# 3. BUILD CALISMA-METINLERI.HTML & MAKALELER.HTML
def build_calisma_metinleri():
    src_file = os.path.join(STITCH_DIR, "Çalışma Metinleri - Talha Nuri Yılmaz_50eb4e20106b4fd4a53c721b814719b3.html")
    with open(src_file, "r", encoding="utf-8") as f:
        content = f.read()

    content = clean_and_replace_author_info(content)
    
    # Replace header nav
    content = re.sub(r'<nav class="hidden md:flex items-center gap-space-md".*?</nav>', UNIFIED_NAV, content, flags=re.DOTALL)
    
    # Add title tag
    if "<title>" not in content:
        content = content.replace("<head>", f"<head><title>Çalışma Metinleri & Araştırma Taslakları · {AUTHOR_NAME}</title>")

    # Replace read links with our real article pages
    content = content.replace('href="#"', 'href="makale/ai-burokrasi.html"', 1) # first read button
    # Replace subsequent read links
    content = content.replace('WP-2024/01', 'WP-2026/02')
    content = content.replace('WP-2024/03', 'WP-2026/01')
    content = content.replace('WP-2023/03', 'WP-2026/03')
    
    # Update links specifically by matching article sections
    content = re.sub(r'(data-target="bib-1".*?<a class="px-4 py-1\.5 bg-primary[^>]+href=")[^"]+(")', r'\g<1>makale/ai-burokrasi.html\2', content, flags=re.DOTALL)
    content = re.sub(r'(data-target="bib-3".*?<a class="px-4 py-1\.5 bg-primary[^>]+href=")[^"]+(")', r'\g<1>makale/civic-tech-alocukur.html\2', content, flags=re.DOTALL)
    content = re.sub(r'(data-target="bib-5".*?<a class="px-4 py-1\.5 bg-primary[^>]+href=")[^"]+(")', r'\g<1>makale/dogu-akdeniz.html\2', content, flags=re.DOTALL)

    out_file = os.path.join(ROOT_DIR, "calisma-metinleri.html")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {out_file}")

    # Also update makaleler.html
    out_makale = os.path.join(ROOT_DIR, "makaleler.html")
    with open(out_makale, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {out_makale}")

# 4. BUILD KPSS-KURDU.HTML
def build_kpss_kurdu():
    src_file = os.path.join(STITCH_DIR, "KPSS Kurdu _ Vibe Coding - Talha Nuri Yılmaz_e41641a0614c4db78a5a396b1ec11c9a.html")
    with open(src_file, "r", encoding="utf-8") as f:
        content = f.read()

    content = clean_and_replace_author_info(content)
    content = re.sub(r'<nav class="hidden xl:flex items-center gap-space-md h-full".*?</nav>', UNIFIED_NAV, content, flags=re.DOTALL)

    out_file = os.path.join(ROOT_DIR, "kpss-kurdu.html")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {out_file}")

# 5. BUILD DENEMELER.HTML
def build_denemeler():
    src_file = os.path.join(STITCH_DIR, "Denemeler ve Analizler - Talha Nuri Yılmaz_e7cc40ebadb4489fa3d1941dbb0d7f36.html")
    with open(src_file, "r", encoding="utf-8") as f:
        content = f.read()

    content = clean_and_replace_author_info(content)
    content = re.sub(r'<nav class="hidden xl:flex items-center gap-space-md h-full".*?</nav>', UNIFIED_NAV, content, flags=re.DOTALL)

    out_file = os.path.join(ROOT_DIR, "denemeler.html")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {out_file}")

# 6. BUILD 404.HTML
def build_404():
    content = f"""<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>404 - Sayfa Bulunamadı | {AUTHOR_NAME}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {{
      theme: {{
        extend: {{
          colors: {{ primary: "#022448", secondary: "#a13d3b" }},
          fontFamily: {{ serif: ["Newsreader", "serif"], mono: ["JetBrains Mono", "monospace"], sans: ["Inter", "sans-serif"] }}
        }}
      }}
    }};
  </script>
</head>
<body class="bg-[#fbf8fc] text-[#1b1b1e] antialiased min-h-screen flex flex-col justify-between">
  <header class="border-b border-slate-200 py-4 px-6 bg-white/80 backdrop-blur-md">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <a href="index.html" class="font-serif text-primary font-bold text-lg">{AUTHOR_NAME}</a>
      <span class="font-mono text-xs text-slate-500">talhayilmaz.xyz</span>
    </div>
  </header>
  <main class="max-w-xl mx-auto px-6 py-24 text-center">
    <div class="font-mono text-secondary font-bold text-sm tracking-widest uppercase mb-2">[ HATA 404 ]</div>
    <h1 class="font-serif text-4xl text-primary font-bold mb-4">Aradığınız Sayfa Bulunamadı</h1>
    <p class="text-slate-600 font-sans leading-relaxed mb-8">
      Ulaşmaya çalıştığınız akademik metin veya sayfa taşınmış ya da kaldırılmış olabilir. Ana sayfaya veya çalışma metinleri arşivine dönebilirsiniz.
    </p>
    <div class="flex items-center justify-center gap-3 font-mono text-xs">
      <a href="index.html" class="px-5 py-2.5 bg-primary text-white rounded font-medium hover:bg-opacity-90 transition-opacity">
        Ana Sayfaya Dön
      </a>
      <a href="calisma-metinleri.html" class="px-5 py-2.5 bg-slate-200 text-slate-800 rounded font-medium hover:bg-slate-300 transition-colors">
        Çalışma Metinleri
      </a>
    </div>
  </main>
  <footer class="border-t border-slate-200 py-6 px-6 text-center font-mono text-xs text-slate-400">
    © 2026 {AUTHOR_NAME} · <a href="index.html" class="hover:underline">talhayilmaz.xyz</a>
  </footer>
</body>
</html>"""
    out_file = os.path.join(ROOT_DIR, "404.html")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {out_file}")

# 7. CLOUDFLARE CONFIG: _headers & _redirects
def build_cloudflare_configs():
    headers_content = """/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

/assets/*
  Cache-Control: public, max-age=31536000, immutable
"""
    with open(os.path.join(ROOT_DIR, "_headers"), "w", encoding="utf-8") as f:
        f.write(headers_content)

    redirects_content = """/hakkimda /ozgecmis.html 301
/makaleler /calisma-metinleri.html 301
/cv /ozgecmis.html 301
/papers /calisma-metinleri.html 301
"""
    with open(os.path.join(ROOT_DIR, "_redirects"), "w", encoding="utf-8") as f:
        f.write(redirects_content)

    print("Generated Cloudflare _headers and _redirects")

if __name__ == "__main__":
    build_index()
    build_ozgecmis()
    build_calisma_metinleri()
    build_kpss_kurdu()
    build_denemeler()
    build_404()
    build_cloudflare_configs()
    print("ALL PAGES BUILT SUCCESSFULLY!")
