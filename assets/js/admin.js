/**
 * Talha Nuri Yılmaz - Akademik Kişisel Web Sitesi
 * Yönetici Paneli (Admin Console) Scripti
 * Depolama: localStorage & JSON Sync
 */

const STORAGE_KEY_ARTICLES = 'tny_articles_v1';
const STORAGE_KEY_NEWS = 'tny_news_v1';
const STORAGE_KEY_NOTES = 'tny_notes_v1';

// Varsayılan Başlangıç Verileri (Mevcut Makaleler & Duyurular)
const DEFAULT_ARTICLES = [
  {
    id: 'art_1',
    title: 'Kamu Yönetiminde Otonom Yapay Zekâ Ajanları ve Sistem Düzeyi Bürokrasi: İdari Karar Mekanizmalarında Takdir Yetkisi, Denetlenebilirlik ve Hukuki Sorumluluk',
    slug: 'ai-burokrasi',
    category: 'Hakemli Çalışma Metni',
    date: '2026-09-24',
    status: 'Yayında',
    wordCount: 4129,
    doi: '10.5281/zenodo.10849201',
    tags: 'Yapay Zekâ, Sistem Düzeyi Bürokrasi, Algokrasi, Lipsky, AB Yapay Zeka Yasası',
    abstract: 'Bu çalışma, Michael Lipsky’nin sokak düzeyi bürokrasi kuramının yapay zekâ ajanları ve algoritmik karar sistemleri eliyle Bovens ve Zouridis’in tanımladığı “sistem düzeyi bürokrasi”ye dönüşümünü eleştirel bir idare hukuku ve kamu yönetimi perspektifinden incelemektedir.',
    url: 'makale/ai-burokrasi.html',
    bibtex: `@techreport{yilmaz2026aiburokrasi,
  author      = {Yılmaz, Talha Nuri},
  title       = {Kamu Yönetiminde Otonom Yapay Zekâ Ajanları ve Sistem Düzeyi Bürokrasi: İdari Karar Mekanizmalarında Takdir Yetkisi, Denetlenebilirlik ve Hukuki Sorumluluk},
  institution = {Osmaniye Korkut Ata Üniversitesi Sosyal Bilimler Enstitüsü},
  year        = {2026},
  type        = {Çalışma Metni / Working Paper},
  doi         = {10.5281/zenodo.10849201},
  url         = {https://talhayilmaz.xyz/makale/ai-burokrasi.html}
}`
  },
  {
    id: 'art_2',
    title: 'Yerel Yönetimlerde Yurttaş Odaklı Dijital Denetim: "Alo Çukur Hattı" Üzerinden Katılımcı Yönetişim ve Altyapı Şeffaflığı İçin Bir Civic Tech Modeli',
    slug: 'civic-tech-alocukur',
    category: 'Hakemli Çalışma Metni',
    date: '2026-09-24',
    status: 'Yayında',
    wordCount: 3402,
    doi: '10.5281/zenodo.10849202',
    tags: 'Civic Tech, Alo Çukur Hattı, Arnstein, Hirschman, Kentsel Müşterekler, Ostrom',
    abstract: 'Bu çalışma; Arnstein’ın yurttaş katılımı merdiveni, Hirschman’ın "çıkış ve ses" kuramı ve Elinor Ostrom’un müştereklerin yönetimi ilkeleri ışığında, "Alo Çukur Hattı" ve Açık 311 modelleri üzerinden katılımcı kentsel yönetişim mekanizmasını kuramsallaştırmaktadır.',
    url: 'makale/civic-tech-alocukur.html',
    bibtex: `@techreport{yilmaz2026civictech,
  author      = {Yılmaz, Talha Nuri},
  title       = {Yerel Yönetimlerde Yurttaş Odaklı Dijital Denetim: "Alo Çukur Hattı" Üzerinden Katılımcı Yönetişim ve Altyapı Şeffaflığı İçin Bir Civic Tech Modeli},
  institution = {Osmaniye Korkut Ata Üniversitesi Sosyal Bilimler Enstitüsü},
  year        = {2026},
  type        = {Çalışma Metni / Working Paper},
  doi         = {10.5281/zenodo.10849202},
  url         = {https://talhayilmaz.xyz/makale/civic-tech-alocukur.html}
}`
  },
  {
    id: 'art_3',
    title: 'Doğu Akdeniz ve Levant\'ta Değişen Güç Dengeleri: Yunanistan–İsrail İttifakına Karşı Türkiye–Pakistan–Suudi Arabistan Jeopolitik Ekseni',
    slug: 'dogu-akdeniz',
    category: 'Hakemli Çalışma Metni',
    date: '2026-09-24',
    status: 'Yayında',
    wordCount: 3265,
    doi: '10.5281/zenodo.10849203',
    tags: 'Doğu Akdeniz, Mavi Vatan, Realpolitik, Mearsheimer, Stephen Walt, Tehdit Dengesi',
    abstract: 'Bu makale, Doğu Akdeniz ve Levant havzasında derinleşen deniz yetki alanları uyuşmazlıkları ve hidrokarbon rekabetini John Mearsheimer\'ın "saldırgan gerçekçilik" ve Stephen Walt\'un "tehdit dengesi" kuramları ekseninde analiz etmektedir.',
    url: 'makale/dogu-akdeniz.html',
    bibtex: `@techreport{yilmaz2026doguakdeniz,
  author      = {Yılmaz, Talha Nuri},
  title       = {Doğu Akdeniz ve Levant'ta Değişen Güç Dengeleri: Yunanistan–İsrail İttifakına Karşı Türkiye–Pakistan–Suudi Arabistan Jeopolitik Ekseni},
  institution = {Osmaniye Korkut Ata Üniversitesi Sosyal Bilimler Enstitüsü},
  year        = {2026},
  type        = {Çalışma Metni / Working Paper},
  doi         = {10.5281/zenodo.10849203},
  url         = {https://talhayilmaz.xyz/makale/dogu-akdeniz.html}
}`
  },
  {
    id: 'art_4',
    title: 'Simülasyon Hipotezinin Epistemolojik, Fiziksel ve Siyaset Felsefesi Açısından İmkânsızlığı: Bostrom\'un Trilemmasına Çok Disiplinli Bir Reddiye',
    slug: 'simulasyon-siyaset-fizik-elestirisi',
    category: 'Teorik Polemik / Deneme',
    date: '2026-09-24',
    status: 'Yayında',
    wordCount: 1693,
    doi: '10.5281/zenodo.10849204',
    tags: 'Simülasyon Teorisi, Epistemoloji, Kuantum Fiziği, Siyaset Felsefesi, Toplum Sözleşmesi, Bostrom',
    abstract: 'Nick Bostrom tarafından popülerleştirilen simülasyon argümanına karşı epistemolojik regress, Landauer hesaplama sınırları ve modern devletin ontolojik meşruiyet krizi perspektifinden çok disiplinli bir çürütme denemesi.',
    url: 'makale/simulasyon-siyaset-fizik-elestirisi.html',
    bibtex: `@article{yilmaz2026simulasyon,
  author  = {Yılmaz, Talha Nuri},
  title   = {Simülasyon Hipotezinin Epistemolojik, Fiziksel ve Siyaset Felsefesi Açısından İmkânsızlığı: Bostrom'un Trilemmasına Çok Disiplinli Bir Reddiye},
  journal = {talhayilmaz.xyz Akademik Denemeler Dizisi},
  year    = {2026},
  month   = {Eylül},
  url     = {https://talhayilmaz.xyz/makale/simulasyon-siyaset-fizik-elestirisi.html}
}`
  }
];

const DEFAULT_NEWS = [
  {
    id: 'news_1',
    title: 'KPSS Kurdu v1.2.4 Güncellemesi App Store’da Yayında',
    badge: 'Mobil Ürün / Vibe Coding',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    date: '2026-09-20',
    summary: 'Yapay zekâ destekli adaptif aralıklı tekrar motoru ve 2026 güncel mevzuat indeksleme modülü App Store üzerinden kullanıma sunuldu.',
    link: 'https://apps.apple.com'
  },
  {
    id: 'news_2',
    title: 'Kamu Yönetiminde Yapay Zekâ ve İdari Takdir Yetkisi Sempozyumu Bildirisi',
    badge: 'Sempozyum / Bildiri',
    badgeColor: 'bg-blue-100 text-blue-800',
    date: '2026-09-15',
    summary: 'OKÜ Sosyal Bilimler Enstitüsü bünyesinde yürütülen doktora tez çalışmasından türetilen sistem düzeyi bürokrasi bulguları akademik müzakereye açıldı.',
    link: 'calisma-metinleri.html'
  },
  {
    id: 'news_3',
    title: 'Civic Tech & Açık Veri Kentsel Denetim Projesi Raporu Yayımlandı',
    badge: 'Araştırma Raporu',
    badgeColor: 'bg-purple-100 text-purple-800',
    date: '2026-09-02',
    summary: 'Yerel yönetimlerde şeffaflık, Alo Çukur Hattı modeli ve altyapı görünürlüğü üzerine hazırlanan saha analizi ön baskı olarak erişime sunuldu.',
    link: 'makale/civic-tech-alocukur.html'
  }
];

const DEFAULT_NOTES = [
  {
    id: 'note_1',
    title: 'Algokratik Devlet ve Weberyan Meşruiyet Krizi',
    date: '2026-09-23',
    text: 'Algoritmik kararlar gerekçelendirilmediğinde Weber\'in "yasal-rasyonel" meşruiyet sütunu çöker. Yerine ne konulabilir? Hukuki denetim mekanizmalarının algoritmik kod seviyesine inmesi şart.'
  },
  {
    id: 'note_2',
    title: 'Doğu Akdeniz\'de İHA Destekli Deniz Hakimiyeti',
    date: '2026-09-21',
    text: 'Mavi Vatan doktrini sadece fırkateynlerle değil, otonom denizaltı ve SİHA sürüleriyle savunulabilir. Yunan-İsrail ekseninin elektronik harp kapasitesine karşı asimetrik caydırıcılık analiz edilmeli.'
  }
];

// Uygulama Durumu
let articles = [];
let news = [];
let notes = [];
let activeEditId = null;

// Başlatma
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  setupEventListeners();
  renderArticles();
  renderNews();
  renderNotes();
  updateStats();
});

// Veri Yükleme
function loadData() {
  const storedArt = localStorage.getItem(STORAGE_KEY_ARTICLES);
  articles = storedArt ? JSON.parse(storedArt) : [...DEFAULT_ARTICLES];

  const storedNews = localStorage.getItem(STORAGE_KEY_NEWS);
  news = storedNews ? JSON.parse(storedNews) : [...DEFAULT_NEWS];

  const storedNotes = localStorage.getItem(STORAGE_KEY_NOTES);
  notes = storedNotes ? JSON.parse(storedNotes) : [...DEFAULT_NOTES];
}

// Veri Kaydetme
function saveData() {
  localStorage.setItem(STORAGE_KEY_ARTICLES, JSON.stringify(articles));
  localStorage.setItem(STORAGE_KEY_NEWS, JSON.stringify(news));
  localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notes));
  updateStats();
}

// Sekme Geçişleri
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('bg-primary', 'text-white');
    btn.classList.add('text-slate-600', 'hover:bg-slate-100');
  });

  const targetContent = document.getElementById(tabId);
  const targetBtn = document.getElementById('btn-' + tabId);

  if (targetContent) targetContent.classList.remove('hidden');
  if (targetBtn) {
    targetBtn.classList.remove('text-slate-600', 'hover:bg-slate-100');
    targetBtn.classList.add('bg-primary', 'text-white');
  }
}

// İstatistikleri Güncelle
function updateStats() {
  const statArticles = document.getElementById('stat-articles');
  const statNews = document.getElementById('stat-news');
  const statWords = document.getElementById('stat-words');

  if (statArticles) statArticles.innerText = articles.length;
  if (statNews) statNews.innerText = news.length;
  if (statWords) {
    const totalWords = articles.reduce((acc, cur) => acc + (cur.wordCount || 0), 0);
    statWords.innerText = totalWords.toLocaleString('tr-TR');
  }
}

// Makale Listesini Çiz
function renderArticles(filter = '') {
  const container = document.getElementById('articles-list');
  if (!container) return;

  const filtered = articles.filter(a => 
    a.title.toLowerCase().includes(filter.toLowerCase()) ||
    (a.tags && a.tags.toLowerCase().includes(filter.toLowerCase())) ||
    (a.category && a.category.toLowerCase().includes(filter.toLowerCase()))
  );

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400 font-mono text-sm bg-slate-50 rounded-lg border border-dashed border-slate-200">
        Eşleşen makale bulunamadı.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(a => `
    <div class="p-5 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-primary/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1.5 flex-wrap">
          <span class="px-2 py-0.5 rounded text-[11px] font-mono font-medium ${
            a.status === 'Yayında' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
          }">${a.status || 'Taslak'}</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-600">${a.category || 'Çalışma Metni'}</span>
          <span class="text-xs font-mono text-slate-400">${a.date}</span>
          ${a.wordCount ? `<span class="text-xs font-mono text-slate-400">• ~${a.wordCount} Kelime</span>` : ''}
        </div>
        <h4 class="font-serif text-lg text-slate-900 font-semibold leading-snug hover:text-primary transition-colors cursor-pointer" onclick="editArticle('${a.id}')">
          ${a.title}
        </h4>
        <p class="text-xs text-slate-600 mt-1 line-clamp-2">${a.abstract || ''}</p>
        <div class="flex items-center gap-3 mt-2 text-xs font-mono text-slate-500">
          <span>Slug: <code class="bg-slate-50 px-1 py-0.5 rounded">${a.slug}</code></span>
          ${a.doi ? `<span>DOI: <code class="bg-slate-50 px-1 py-0.5 rounded">${a.doi}</code></span>` : ''}
        </div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${a.url ? `<a href="${a.url}" target="_blank" class="p-2 rounded hover:bg-slate-100 text-slate-600 hover:text-primary transition-colors" title="Sitede Görüntüle">
          <span class="material-symbols-outlined text-[18px]">visibility</span>
        </a>` : ''}
        <button onclick="downloadArticleMd('${a.id}')" class="p-2 rounded hover:bg-slate-100 text-slate-600 hover:text-primary transition-colors" title="Markdown (.md) İndir">
          <span class="material-symbols-outlined text-[18px]">download</span>
        </button>
        <button onclick="copyArticleBibtex('${a.id}')" class="p-2 rounded hover:bg-slate-100 text-slate-600 hover:text-primary transition-colors" title="BibTeX Kopyala">
          <span class="material-symbols-outlined text-[18px]">content_copy</span>
        </button>
        <button onclick="editArticle('${a.id}')" class="p-2 rounded hover:bg-slate-100 text-slate-600 hover:text-primary transition-colors" title="Düzenle">
          <span class="material-symbols-outlined text-[18px]">edit</span>
        </button>
        <button onclick="deleteArticle('${a.id}')" class="p-2 rounded hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors" title="Sil">
          <span class="material-symbols-outlined text-[18px]">delete</span>
        </button>
      </div>
    </div>
  `).join('');
}

// Haber / Duyuru Listesini Çiz
function renderNews() {
  const container = document.getElementById('news-list');
  if (!container) return;

  if (news.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-slate-400 font-mono text-sm bg-slate-50 rounded-lg border border-dashed border-slate-200">
        Henüz haber veya duyuru eklenmedi.
      </div>
    `;
    return;
  }

  container.innerHTML = news.map(n => `
    <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <span class="px-2 py-0.5 rounded text-[11px] font-mono font-medium ${n.badgeColor || 'bg-slate-100 text-slate-700'}">${n.badge || 'Duyuru'}</span>
          <span class="text-xs font-mono text-slate-400">${n.date}</span>
        </div>
        <h5 class="font-semibold text-slate-900 text-sm leading-snug">${n.title}</h5>
        <p class="text-xs text-slate-600 mt-1">${n.summary}</p>
        ${n.link ? `<a href="${n.link}" target="_blank" class="inline-flex items-center gap-1 text-[11px] text-primary hover:underline font-mono mt-1">Bağlantı ↗</a>` : ''}
      </div>
      <div class="flex items-center gap-2">
        <button onclick="deleteNews('${n.id}')" class="p-2 rounded hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors" title="Sil">
          <span class="material-symbols-outlined text-[18px]">delete</span>
        </button>
      </div>
    </div>
  `).join('');
}

// Notları Çiz
function renderNotes() {
  const container = document.getElementById('notes-list');
  if (!container) return;

  if (notes.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-slate-400 font-mono text-sm bg-slate-50 rounded-lg border border-dashed border-slate-200">
        Kayıtlı not bulunmuyor.
      </div>
    `;
    return;
  }

  container.innerHTML = notes.map(n => `
    <div class="p-4 bg-amber-50/50 rounded-lg border border-amber-200/60 shadow-xs flex flex-col justify-between gap-2">
      <div>
        <div class="flex items-center justify-between text-xs font-mono text-amber-900/60 mb-1">
          <span>${n.date}</span>
          <button onclick="deleteNote('${n.id}')" class="hover:text-rose-600" title="Sil">✕</button>
        </div>
        <h6 class="font-serif font-bold text-slate-900 text-sm mb-1">${n.title}</h6>
        <p class="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed">${n.text}</p>
      </div>
    </div>
  `).join('');
}

// Makale Düzenleme Modu
function editArticle(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;

  activeEditId = id;
  document.getElementById('art-title').value = article.title || '';
  document.getElementById('art-slug').value = article.slug || '';
  document.getElementById('art-category').value = article.category || 'Hakemli Çalışma Metni';
  document.getElementById('art-date').value = article.date || new Date().toISOString().split('T')[0];
  document.getElementById('art-status').value = article.status || 'Yayında';
  document.getElementById('art-doi').value = article.doi || '';
  document.getElementById('art-tags').value = article.tags || '';
  document.getElementById('art-abstract').value = article.abstract || '';
  document.getElementById('art-content').value = article.content || '';
  document.getElementById('art-bibtex').value = article.bibtex || '';

  document.getElementById('form-mode-title').innerText = 'Makale Düzenle: ' + article.title.substring(0, 30) + '...';
  document.getElementById('cancel-edit-btn').classList.remove('hidden');

  updatePreview();
  // Form alanına kaydır
  document.getElementById('article-form-wrapper').scrollIntoView({ behavior: 'smooth' });
}

// Düzenlemeyi İptal Et
function cancelEdit() {
  activeEditId = null;
  resetArticleForm();
  document.getElementById('form-mode-title').innerText = 'Yeni Makale / Çalışma Metni Ekle';
  document.getElementById('cancel-edit-btn').classList.add('hidden');
}

// Formu Sıfırla
function resetArticleForm() {
  document.getElementById('art-title').value = '';
  document.getElementById('art-slug').value = '';
  document.getElementById('art-category').value = 'Hakemli Çalışma Metni';
  document.getElementById('art-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('art-status').value = 'Taslak';
  document.getElementById('art-doi').value = '';
  document.getElementById('art-tags').value = '';
  document.getElementById('art-abstract').value = '';
  document.getElementById('art-content').value = '';
  document.getElementById('art-bibtex').value = '';
  updatePreview();
}

// Makale Kaydet
function saveArticleForm(e) {
  e.preventDefault();

  const title = document.getElementById('art-title').value.trim();
  const slug = document.getElementById('art-slug').value.trim() || generateSlug(title);
  const category = document.getElementById('art-category').value;
  const date = document.getElementById('art-date').value;
  const status = document.getElementById('art-status').value;
  const doi = document.getElementById('art-doi').value.trim();
  const tags = document.getElementById('art-tags').value.trim();
  const abstract = document.getElementById('art-abstract').value.trim();
  const content = document.getElementById('art-content').value;
  let bibtex = document.getElementById('art-bibtex').value.trim();

  if (!title) {
    showToast('Lütfen en azından bir makale başlığı giriniz.', true);
    return;
  }

  // Otomatik BibTeX oluştur (boşsa)
  if (!bibtex) {
    bibtex = `@techreport{yilmaz_${slug.replace(/-/g, '_')},
  author      = {Yılmaz, Talha Nuri},
  title       = {${title}},
  institution = {Osmaniye Korkut Ata Üniversitesi Sosyal Bilimler Enstitüsü},
  year        = {${date.split('-')[0] || 2026}},
  type        = {${category}},
  ${doi ? `doi         = {${doi}},` : ''}
  url         = {https://talhayilmaz.xyz/makale/${slug}.html}
}`;
  }

  const wordCount = content ? content.trim().split(/\s+/).length : (abstract ? abstract.trim().split(/\s+/).length : 500);

  if (activeEditId) {
    const idx = articles.findIndex(a => a.id === activeEditId);
    if (idx !== -1) {
      articles[idx] = {
        ...articles[idx],
        title,
        slug,
        category,
        date,
        status,
        doi,
        tags,
        abstract,
        content,
        bibtex,
        wordCount,
        url: `makale/${slug}.html`
      };
      showToast('Makale başarıyla güncellendi.');
    }
  } else {
    const newArt = {
      id: 'art_' + Date.now(),
      title,
      slug,
      category,
      date,
      status,
      doi,
      tags,
      abstract,
      content,
      bibtex,
      wordCount,
      url: `makale/${slug}.html`
    };
    articles.unshift(newArt);
    showToast('Yeni makale arşive eklendi.');
  }

  saveData();
  renderArticles();
  cancelEdit();
}

// Makale Sil
function deleteArticle(id) {
  const art = articles.find(a => a.id === id);
  if (!art) return;

  if (confirm(`"${art.title}" başlıklı makaleyi silmek istediğinizden emin misiniz?`)) {
    articles = articles.filter(a => a.id !== id);
    saveData();
    renderArticles();
    showToast('Makale silindi.');
  }
}

// Markdown Önizleme Güncelle
function updatePreview() {
  const title = document.getElementById('art-title').value;
  const abstract = document.getElementById('art-abstract').value;
  const content = document.getElementById('art-content').value;
  const previewEl = document.getElementById('markdown-preview');

  if (!previewEl) return;

  let html = '';
  if (title) html += `<h1 class="text-2xl font-serif font-bold text-slate-900 mb-4">${escapeHtml(title)}</h1>`;
  if (abstract) {
    html += `
      <div class="p-4 bg-slate-50 border-l-4 border-primary rounded text-sm text-slate-700 italic mb-6">
        <strong>Özet:</strong> ${escapeHtml(abstract)}
      </div>
    `;
  }
  if (content) {
    html += renderSimpleMarkdown(content);
  } else if (!title && !abstract) {
    html = `<div class="text-slate-400 font-mono text-sm italic py-8 text-center">Sağdaki alanda yazdığınız Markdown içeriği burada anlık olarak biçimlendirilecektir.</div>`;
  }

  previewEl.innerHTML = html;
}

// Basit Markdown Dönüştürücü
function renderSimpleMarkdown(md) {
  let out = escapeHtml(md);

  // Başlıklar
  out = out.replace(/^### (.*$)/gim, '<h3 class="text-lg font-serif font-bold text-slate-800 mt-5 mb-2">$1</h3>');
  out = out.replace(/^## (.*$)/gim, '<h2 class="text-xl font-serif font-bold text-slate-900 mt-6 mb-3 border-b pb-1">$1</h2>');
  out = out.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-serif font-bold text-slate-900 mt-6 mb-4">$1</h1>');

  // Kalın ve İtalik
  out = out.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold text-slate-900">$1</strong>');
  out = out.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>');

  // Kod blokları
  out = out.replace(/```([\s\S]*?)```/gim, '<pre class="bg-slate-900 text-slate-100 p-4 rounded text-xs font-mono my-3 overflow-x-auto"><code>$1</code></pre>');
  out = out.replace(/`([^`]+)`/gim, '<code class="bg-slate-100 text-primary px-1 py-0.5 rounded text-xs font-mono">$1</code>');

  // Blok alıntılar
  out = out.replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-slate-300 pl-4 py-1 italic text-slate-600 my-2">$1</blockquote>');

  // Paragraflar
  out = out.split('\n\n').map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<pre') || p.startsWith('<block')) return p;
    return `<p class="text-slate-800 leading-relaxed mb-4">${p}</p>`;
  }).join('');

  return out;
}

// Markdown (.md) Olarak İndir
function downloadArticleMd(id) {
  const art = articles.find(a => a.id === id);
  if (!art) return;

  const frontmatter = `---
title: "${art.title.replace(/"/g, '\\"')}"
slug: "${art.slug}"
category: "${art.category}"
date: "${art.date}"
status: "${art.status}"
author: "Talha Nuri Yılmaz"
affiliation: "Osmaniye Korkut Ata Üniversitesi Sosyal Bilimler Enstitüsü"
orcid: "0009-0005-4727-8118"
email: "talhanuriyilmaz@gmail.com"
doi: "${art.doi || ''}"
tags: [${art.tags ? art.tags.split(',').map(t => `"${t.trim()}"`).join(', ') : ''}]
---

# ${art.title}

> **Özet:** ${art.abstract || ''}

${art.content || '*(Tam metin hazırlanmaktadır)*'}

## Kaynakça
\`\`\`bibtex
${art.bibtex || ''}
\`\`\`
`;

  downloadBlob(frontmatter, `${art.slug || 'makale'}.md`, 'text/markdown');
  showToast(`${art.slug}.md dosyası indirildi.`);
}

// BibTeX Kopyala
function copyArticleBibtex(id) {
  const art = articles.find(a => a.id === id);
  if (!art || !art.bibtex) {
    showToast('Bu makaleye ait BibTeX kaydı bulunamadı.', true);
    return;
  }
  navigator.clipboard.writeText(art.bibtex).then(() => {
    showToast('BibTeX künyesi panoya kopyalandı.');
  });
}

// Haber Ekle
function saveNewsForm(e) {
  e.preventDefault();
  const title = document.getElementById('news-title').value.trim();
  const badge = document.getElementById('news-badge').value.trim() || 'Duyuru';
  const date = document.getElementById('news-date').value || new Date().toISOString().split('T')[0];
  const summary = document.getElementById('news-summary').value.trim();
  const link = document.getElementById('news-link').value.trim();

  if (!title || !summary) {
    showToast('Lütfen başlık ve özet alanlarını doldurunuz.', true);
    return;
  }

  const newN = {
    id: 'news_' + Date.now(),
    title,
    badge,
    badgeColor: getBadgeColor(badge),
    date,
    summary,
    link
  };

  news.unshift(newN);
  saveData();
  renderNews();

  document.getElementById('news-title').value = '';
  document.getElementById('news-summary').value = '';
  document.getElementById('news-link').value = '';
  showToast('Duyuru listeye eklendi.');
}

function deleteNews(id) {
  if (confirm('Bu duyuruyu silmek istediğinize emin misiniz?')) {
    news = news.filter(n => n.id !== id);
    saveData();
    renderNews();
    showToast('Duyuru silindi.');
  }
}

// Not Ekle
function saveNoteForm(e) {
  e.preventDefault();
  const title = document.getElementById('note-title').value.trim();
  const text = document.getElementById('note-text').value.trim();
  const date = new Date().toISOString().split('T')[0];

  if (!title || !text) {
    showToast('Lütfen not başlığı ve içeriği giriniz.', true);
    return;
  }

  const newNote = {
    id: 'note_' + Date.now(),
    title,
    text,
    date
  };

  notes.unshift(newNote);
  saveData();
  renderNotes();

  document.getElementById('note-title').value = '';
  document.getElementById('note-text').value = '';
  showToast('Araştırma notu kaydedildi.');
}

function deleteNote(id) {
  notes = notes.filter(n => n.id !== id);
  saveData();
  renderNotes();
  showToast('Not silindi.');
}

// JSON Dışa Aktar (Backup)
function exportFullData() {
  const payload = {
    site: 'talhayilmaz.xyz',
    exportedAt: new Date().toISOString(),
    author: {
      name: 'Talha Nuri Yılmaz',
      orcid: '0009-0005-4727-8118',
      email: 'talhanuriyilmaz@gmail.com',
      affiliation: 'Osmaniye Korkut Ata Üniversitesi Sosyal Bilimler Enstitüsü'
    },
    articles,
    news,
    notes
  };

  const jsonStr = JSON.stringify(payload, null, 2);
  downloadBlob(jsonStr, `talhayilmaz_site_data_${new Date().toISOString().split('T')[0]}.json`, 'application/json');
  showToast('Tüm site verileri JSON olarak dışa aktarıldı.');
}

// JSON İçe Aktar
function importDataFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed.articles && Array.isArray(parsed.articles)) {
        articles = parsed.articles;
      }
      if (parsed.news && Array.isArray(parsed.news)) {
        news = parsed.news;
      }
      if (parsed.notes && Array.isArray(parsed.notes)) {
        notes = parsed.notes;
      }
      saveData();
      renderArticles();
      renderNews();
      renderNotes();
      showToast('Veriler başarıyla içe aktarıldı!');
    } catch (err) {
      showToast('Geçersiz JSON dosyası: ' + err.message, true);
    }
  };
  reader.readAsText(file);
}

// Varsayılan Verileri Sıfırla
function restoreDefaults() {
  if (confirm('Tüm verileri varsayılan başlangıç haline getirmek istediğinizden emin misiniz?')) {
    articles = [...DEFAULT_ARTICLES];
    news = [...DEFAULT_NEWS];
    notes = [...DEFAULT_NOTES];
    saveData();
    renderArticles();
    renderNews();
    renderNotes();
    showToast('Varsayılan makaleler ve duyurular geri yüklendi.');
  }
}

// Yardımcı Fonksiyonlar
function generateSlug(str) {
  return str
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    }[s];
  });
}

function getBadgeColor(badge) {
  const b = badge.toLowerCase();
  if (b.includes('yayın') || b.includes('makale')) return 'bg-blue-100 text-blue-800';
  if (b.includes('ürün') || b.includes('mobil') || b.includes('kod')) return 'bg-emerald-100 text-emerald-800';
  if (b.includes('sempozyum') || b.includes('konferans')) return 'bg-amber-100 text-amber-800';
  if (b.includes('rapor') || b.includes('proje')) return 'bg-purple-100 text-purple-800';
  return 'bg-slate-100 text-slate-800';
}

function downloadBlob(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function showToast(message, isError = false) {
  const toast = document.getElementById('admin-toast');
  const msg = document.getElementById('admin-toast-message');
  if (!toast || !msg) return;

  msg.innerText = message;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none', 'bg-rose-900', 'bg-slate-900');
  toast.classList.add('translate-y-0', 'opacity-100', isError ? 'bg-rose-900' : 'bg-slate-900');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 3500);
}

function setupEventListeners() {
  const formArticle = document.getElementById('article-form');
  if (formArticle) formArticle.addEventListener('submit', saveArticleForm);

  const formNews = document.getElementById('news-form');
  if (formNews) formNews.addEventListener('submit', saveNewsForm);

  const formNote = document.getElementById('note-form');
  if (formNote) formNote.addEventListener('submit', saveNoteForm);

  const searchInput = document.getElementById('article-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderArticles(e.target.value));
  }

  // Canlı önizleme dinleyicileri
  ['art-title', 'art-abstract', 'art-content'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updatePreview);
  });
}
