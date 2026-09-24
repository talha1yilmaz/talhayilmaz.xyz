# Kamu Yönetiminde Otonom Yapay Zekâ Ajanları ve Sistem Düzeyi Bürokrasi: İdari Karar Mekanizmalarında Takdir Yetkisi, Denetlenebilirlik ve Hukuki Sorumluluk

**Yazar:** Talha Nuri Yılmaz  
*Doktora Adayı, Osmaniye Korkut Ata Üniversitesi, Sosyal Bilimler Enstitüsü, Siyaset Bilimi ve Kamu Yönetimi Anabilim Dalı*  
**E-posta:** talhanuriyilmaz@gmail.com | **ORCID:** 0009-0005-4727-8118  
**Yayın Türü:** Çalışma Metni (Working Paper) — Revize Edilmiş Genişletilmiş Versiyon  
**Tarih:** Eylül 2026  

---

### Öz
Bu çalışma; otonom yapay zekâ ajanları, makine öğrenmesi algoritmaları ve otomatik karar destek mekanizmalarının kamu yönetimi ve bürokratik karar alma süreçlerine entegrasyonunu yönetsel, kuramsal ve hukuki boyutlarıyla incelemektedir. Modern idare teorisinde Michael Lipsky’nin geliştirdiği "sokak düzeyi bürokrasisi" (street-level bureaucracy) modeli, idari eylem ve işlemlerin merkezine sahadaki kamu görevlisinin bireysel takdir yetkisini (discretion) yerleştirmektedir. Ancak kamu sektörünün dijitalleşmesi, veriye dayalı yönetim yaklaşımları ve büyük dil modelleri destekli idari otonom ajanların devreye girmesi, karar alma inisiyatifini sokak düzeyinden Mark Bovens ve Stavros Zouridis’in kavramsallaştırdığı "sistem düzeyi bürokrasiye" (system-level bureaucracy) taşımaktadır. A. Aneesh’in "algokrasi" (algocracy) teziyle kuramsal derinlik kazanan bu dönüşüm, kamu otoritesinin hiyerarşik veya panoptik bir denetimden doğrudan yazılım kodları ve algoritmik mantık aracılığıyla icra edildiği yeni bir idari paradigma doğurmuştur. Çalışmada nitel çoklu vaka analizi deseni benimsenerek; Avustralya’daki "Robodebt" otomasyon felaketi, Hollanda’daki "SyRI" (Systeem Risico Indicatie) algoritmik ayrımcılık skandalı ve ABD ceza adaletindeki "COMPAS" risk değerlendirme mekanizması ampirik olarak çözümlenmiştir. Bulgular; yapay zekâ sistemlerinin bürokratik karar süreçlerine dahil edilmesinin Max Weber’in rasyonel "demir kafes" metaforunu dijital bir tekno-rasyonaliteye dönüştürdüğünü, Mark Moore’un "kamu değeri" anlayışını dar bir işlem verimliliğine indirgediğini ve Virginia Eubanks ile Cathy O’Neil’in işaret ettiği üzere dezavantajlı gruplar aleyhine yapısal eşitsizlikleri pekiştirdiğini göstermektedir. Ayrıca Avrupa Birliği Yapay Zekâ Yasası (EU AI Act) ile getirilmeye çalışılan "insan gözetimi" (human-in-the-loop) prensibinin, kamu görevlilerinde gözlemlenen "otomasyon önyargısı" (automation bias) nedeniyle fiiliyatta göstermelik bir aklama (rubber-stamping) aparatına dönüştüğü ortaya konulmuştur. Çalışma, Bovens’in kamu hesap verebilirliği modeli çerçevesinde, algoritmik idarenin demokratik meşruiyet açığını kapatmaya yönelik idari ve yargısal mekanizma önerileriyle sonlanmaktadır.

**Anahtar Kelimeler:** Yapay Zekâ, Sistem Düzeyi Bürokrasi, Algokrasi, Takdir Yetkisi, Kamu Hesap Verebilirliği, Robodebt, SyRI, Otomasyon Önyargısı.

---

### Abstract
**Autonomous Artificial Intelligence Agents and System-Level Bureaucracy in Public Administration: Discretion, Auditability, and Legal Accountability in Administrative Decision-Making**  
This study critically analyzes the integration of autonomous artificial intelligence agents, machine learning algorithms, and automated decision-making mechanisms into public administration from theoretical, empirical, and administrative-legal perspectives. Classic public administration theory, particularly Michael Lipsky’s seminal framework of "street-level bureaucracy," posits public servants' frontline discretion as the core coping mechanism mediating citizens and the state. However, contemporary digital transformation and generative AI agents systematically displace discretion toward Bovens and Zouridis’s "system-level bureaucracy." Deepened by A. Aneesh’s conceptualization of "algocracy," administrative power is increasingly exercised not through hierarchical surveillance but through algorithmic architectures and algorithmic rule. Employing a qualitative multiple-case study methodology, this paper dissects three benchmark failures: Australia's automated "Robodebt" scandal, the Dutch "SyRI" welfare fraud risk system, and the US "COMPAS" recidivism profiling tool. Findings demonstrate that algorithmic governance reconfigures Weber’s rational "iron cage" into an algorithmic architecture, erodes Mark Moore's "public value" in pursuit of narrow instrumental efficiency, and entrenches systemic inequities as documented by Eubanks and O’Neil. Furthermore, the study evaluates the European Union AI Act’s mandate of "human-in-the-loop," arguing that psychological and organizational "automation bias" reduces human oversight to mere rubber-stamping. Grounded in Mark Bovens’s public accountability matrix, the article concludes with institutional and juridical frameworks designed to reconcile algorithmic state power with constitutional administrative law and democratic legitimacy.

**Keywords:** Artificial Intelligence, System-Level Bureaucracy, Algocracy, Administrative Discretion, Public Accountability, Robodebt, SyRI, Automation Bias.

---

## 1. Giriş

Kamu yönetiminin tarihsel evrimi, devlet aygıtının yurttaş ile kurduğu ilişkinin teknik, hukuki ve örgütsel zeminindeki dönüşümlerle doğrudan paralellik arz etmektedir. Max Weber’in (1922/1978) ideal-tipik bürokrasi kavramsallaştırmasında idare; gayrişahsi (impersonal) kurallara bağlı, yazılı hiyerarşik emirlere dayanan, öngörülebilir ve rasyonel bir makine hüviyetindedir. Weber’in "rasyonelleşme" süreci olarak gördüğü bu yapı, idari eylemlerin keyfilikten arındırılarak nesnel bir kesinliğe ulaşmasını hedeflemiştir. Ancak 20. yüzyılın ikinci yarısında kamu politikalarının karmaşıklaşması ve refah devleti uygulamalarının yaygınlaşması, yasa koyucunun her somut olayı önceden öngörebilme kapasitesinin sınırlarını açığa çıkarmıştır. Bu noktada Michael Lipsky’nin (1980) literatüre kazandırdığı "sokak düzeyi bürokrasisi" (street-level bureaucracy) kuramı, yasanın soyut metni ile sahanın kaotik gerçekliği arasındaki boşluğu dolduran temel unsurun kamu görevlisinin "takdir yetkisi" (discretion) olduğunu ortaya koymuştur. Sosyal hizmet uzmanları, polis memurları, vergi müfettişleri ve öğretmenler; kaynak yetersizliği, zaman baskısı ve çelişkili yasal hedefler altında "başa çıkma mekanizmaları" (coping mechanisms) geliştirerek kamu politikasını uygulayan değil, fiilen sokakta yeniden üreten aktörler haline gelmişlerdir.

21. yüzyılın ilk çeyreğinde yaşanan bilgi ve iletişim teknolojileri devrimi, kamu sektöründe "e-Devlet" aşamasından "algoritmik devlet" (algorithmic governance) ve "otonom yapay zekâ idaresi" aşamasına doğru radikal bir paradigma sıçramasına yol açmıştır (Dunleavy vd., 2006; Allen, 2026). Özellikle makine öğrenmesi, doğal dil işleme ve otonom karar destek ajanlarının kamu kurumlarına nüfuz etmesi, bürokratik karar mekanizmalarını ontolojik bir krizle karşı karşıya bırakmıştır. Mark Bovens ve Stavros Zouridis’in (2002) öngörülü bir biçimde ifade ettiği üzere, idari kararlar "sokak düzeyinden" kademeli olarak "ekran düzeyine" (screen-level) ve nihayetinde "sistem düzeyine" (system-level bureaucracy) taşınmaktadır. Sistem düzeyi bürokraside takdir yetkisi, sahada yurttaşla göz teması kuran memurdan; algoritmayı kodlayan yazılım mühendislerine, veri bilimcilere ve sistem mimarlarına devredilmektedir.

A. Aneesh’in (2009) "algokrasi" (algocracy) olarak adlandırdığı bu yeni yönetim biçimi, iktidarın bürokratik emir-komuta zinciri veya panoptik gözetim aygıtları yerine, doğrudan yazılım kodunun mimarisi (code as law) aracılığıyla icra edildiği bir düzeni temsil etmektedir. Bu dönüşüm, idarenin hızını, veri işleme kapasitesini ve maliyet etkinliğini artırma iddiası taşırken; eş zamanlı olarak idari yargı denetimi, şeffaflık, gerekçelendirme yükümlülüğü ve temel haklar açısından derin kırılmalar yaratmaktadır (Wagner, 2019; Liu vd., 2026). Otonom algoritmaların "kara kutu" (black-box) niteliği, kamu gücünü kullanan kararların gerekçesizleşmesine, algoritmik önyargılar yoluyla belirli toplumsal kesimlerin sistematik biçimde dışlanmasına (Eubanks, 2018) ve idarenin demokratik meşruiyet zincirinin kopmasına (Smith & Jones, 2026) neden olmaktadır.

Bu çalışmanın temel amacı; kamu yönetiminde otonom yapay zekâ ajanları ve sistem düzeyi bürokrasinin yükselişini, takdir yetkisinin aşınması, kamu hesap verebilirliğinin felce uğraması ve idari-hukuki sorumluluk krizleri bağlamında kuramsal ve ampirik olarak araştırmaktır. Bu doğrultuda çalışma şu ana sorular etrafında şekillenmektedir:
1. Otonom algoritmik sistemler, Lipsky’nin tanımladığı sokak düzeyi kamu görevlisinin takdir yetkisini ve başa çıkma stratejilerini nasıl dönüştürmektedir?
2. Sistem düzeyi bürokrasiye geçiş, Mark Bovens’in (2007) kamu hesap verebilirliği modelinin temel aşamalarını (bilgilendirme, tartışma/gerekçelendirme, yaptırım) nasıl etkilemektedir?
3. Küresel ölçekte yaşanan ampirik vaka örnekleri (Robodebt, SyRI, COMPAS), algoritmik idarenin refah devleti ve eşitlik ilkeleri üzerindeki yapısal yıkımlarını nasıl somutlaştırmaktadır?
4. Avrupa Birliği Yapay Zekâ Yasası (EU AI Act) başta olmak üzere regülasyonların öne sürdüğü "insan gözetimi" (human-in-the-loop) prensibi, "otomasyon önyargısı" (automation bias) karşısında neden işlevsiz kalmaktadır?

---

## 2. Araştırmanın Metodolojisi ve Kapsamı

Bu araştırma, kamu yönetimi, idare hukuku ve eleştirel veri çalışmaları disiplinlerinin kesişiminde yer alan, **nitel çoklu vaka analizi** (qualitative multiple-case study) ve **kavramsal-kuramsal sentez** metodolojisine dayanmaktadır (Yin, 2018). Araştırma deseni üç temel analitik aşamadan oluşmaktadır:

### 2.1. Kuramsal Modelleme ve Matris Oluşturma
Araştırmanın kavramsal omurgası, üç kuramsal eksenin entegrasyonuyla kurulmuştur:
- **Mikro Düzey:** Michael Lipsky’nin (1980) "Sokak Düzeyi Bürokrasi ve Takdir Yetkisi" kuramı ile Marienfeldt (2024) ve Sztandar-Sztanderska’nın (2026) takdir yetkisinin dijital aşınmasına dair güncel tezleri.
- **Mezo/Örgütsel Düzey:** Bovens ve Zouridis’in (2002) "Sistem Düzeyi Bürokrasi" modeli ve Mark Bovens’in (2007) "Kamu Hesap Verebilirliği" (Public Accountability) analitik çerçevesi.
- **Makro/Sosyo-Politik Düzey:** A. Aneesh’in (2009) "Algokrasi", Virginia Eubanks’in (2018) "Otomatize Edilmiş Eşitsizlik", Cathy O'Neil'in (2016) "Matematiksel İmha Silahları" ve Mark Moore’un (1995) "Kamu Değeri" (Public Value) teorisi.

### 2.2. Vaka Seçim Kriterleri (Case Selection Criteria)
Çalışmada ampirik geçerliliği sağlamak amacıyla "amaçlı örnekleme" (purposive sampling) yöntemiyle üç kritik küresel vaka seçilmiştir. Vaka seçiminde Flyvbjerg’in (2006) "uç/paradigma niteliğindeki vakalar" (extreme/paradigmatic cases) metodolojisi izlenmiştir:
1. **Avustralya "Robodebt" Skandalı (2016-2020):** İdari işlemde takdir yetkisinin tamamen otomatize edilmesi sonucu oluşan idari çöküş ve yargısal hesap verebilirlik krizi.
2. **Hollanda "SyRI" (Systeem Risico Indicatie) Sistemi (2014-2020):** Sosyal refah yardımlarında yapay zekâ tabanlı gizli risk profillemesi ve Lahey Bölge Mahkemesi’nin Avrupa İnsan Hakları Sözleşmesi (AİHS) 8. Madde ihlali kararı.
3. **ABD "COMPAS" Adli Risk Puanlama Algoritması:** Ceza infaz ve kefalet kararlarında tahmine dayalı algoritmik ayrımcılık ve kurumsallaşmış ırksal/sosyoekonomik önyargı transferi.

### 2.3. Veri Kaynakları ve Doküman Analizi
Araştırma kapsamında; bahsi geçen vakalara ilişkin parlamento soruşturma komisyonu raporları (ör. Avustralya Robodebt Kraliyet Komisyonu 2023 Nihai Raporu), yargı kararları (Hollanda Lahey Mahkemesi 2020 C/09/550982 sayılı kararı, Wisconsin v. Loomis 2016 kararı), Avrupa Birliği Yapay Zekâ Yasası (Regulation 2024/1689/EU) resmi metinleri ile 2020-2026 yılları arasında Web of Science ve Scopus indeksli dergilerde yayımlanan hakemli makaleler doküman analizine tabi tutulmuştur.

---

## 3. Kuramsal Çerçeve: Sokak Düzeyinden Sistem Düzeyine ve Algokrasiye

### 3.1. Lipsky ve Takdir Yetkisinin İdari Anatomisi
Michael Lipsky (1980), kamu politikasının parlamentolarda veya bakanlık koridorlarında tasarlandığı şekliyle değil, sahada yurttaşla doğrudan yüz yüze gelen kamu görevlilerinin mikro kararlarıyla şekillendiğini savunmuştur. Lipsky’nin kuramında "takdir yetkisi", keyfi bir ayrıcalık veya kural tanımazlık değil; yetersiz bütçe, aşırı iş yükü, belirsiz hedefler ve zaman kısıtları altında ezilen memurun hayatta kalmak için geliştirdiği yapısal bir "başa çıkma mekanizması"dır (coping mechanism). Sokak düzeyindeki bürokrat; kuralları esnetir, önceliklendirir, yurttaşın somut durumundaki insani trajediyi veya istisnai halleri dikkate alarak "hukukun katı lafzı" yerine "somut adalet" üretmeye çalışır.

Lipsky’ye göre takdir yetkisi iki ucu keskin bir kılıçtır: Bir yandan bürokratik katılığı esnetip hizmeti insanileştirirken (humanizing administration), diğer yandan önyargılı ve ayrımcı pratiklere zemin hazırlayabilir. Ancak sistem düzeyi bürokrasiye geçildiğinde, karar mekanizmasından çıkartılan şey sadece "önyargı riski" değil; aynı zamanda idareye meşruiyet kazandıran "merhamet, esneklik, empati ve durumsal muhakeme" kabiliyetidir (Marienfeldt, 2024).

### 3.2. Bovens ve Zouridis: Sistem Düzeyi Bürokrasinin İnşası
Mark Bovens ve Stavros Zouridis (2002), bilişim teknolojilerinin kamu idaresine girişini üç tarihsel evreye ayırmıştır:
1. **Sokak Düzeyi Bürokrasi (Street-Level Bureaucracy):** Dosyalar kağıt ortamındadır, yurttaşla memur doğrudan muhataptır, takdir alanı geniştir.
2. **Ekran Düzeyi Bürokrasi (Screen-Level Bureaucracy):** Bilgisayarlar veri giriş ve arşivleme aracı olarak devreye girmiştir. Memur ekrandaki veri tabanından bilgi çeker, ancak nihai kararı hala kendisi verir; takdir alanı daralmış ama yok olmamıştır.
3. **Sistem Düzeyi Bürokrasi (System-Level Bureaucracy):** Yasal mevzuat, yönetmelikler ve idari usuller doğrudan yazılım mimarisine, kod dizilimlerine ve algoritmik kurallara dönüştürülmüştür. Karar alma süreci önceden tanımlanmış algoritmik lojikler tarafından otomatik olarak yürütülür.

Sistem düzeyi bürokraside, Lipsky’nin "sokak memuru" sistemin operatörüne dönüşürken; asıl idari takdir yetkisi algoritmayı kodlayan yazılım mühendislerine, ihale şartnamelerini hazırlayan danışmanlık firmalarına ve sistem mimarlarına kaymaktadır. Ancak bu yeni aktörler, geleneksel kamu görevlisinin tabi olduğu anayasal yemin, kamu yararı etiği ve idari yargı denetimi mekanizmalarından tamamen muaftır.

### 3.3. Aneesh ve "Algokrasi": Kod Aracılığıyla Yönetim
Sosyolog A. Aneesh (2009), bürokrasinin Weberyan "hiyerarşik otorite" ve Foucaultcu "panoptik gözetim" biçimlerinin ötesine geçen üçüncü bir yönetim modeli olarak "algokrasi"yi (algocracy) tanımlamıştır. Weber’de otorite meşru kurallara ve hiyerarşiye dayanır; çalışan veya yurttaş kuralı ihlal ettiğinde amir cezalandırır. Panoptik modelde birey sürekli izlendiği varsayımıyla kendi davranışını disipline eder. 

Algokraside ise kural doğrudan sistemin tasarımına (code architecture) gömülüdür. Sistem, istenmeyen davranışı yasaklamaz; onu teknik olarak "imkânsız" kılar veya algoritmik bir patikaya zorlar. Aneesh’in özel sektör emek süreçleri için kurguladığı bu kavram, kamu yönetimine taşındığında çok daha tehlikeli bir boyut kazanır. Kamu bürokrasisinde algokrasi; yurttaşın hak arama, itiraz etme veya müzakere etme alanını kapatır. Lawrence Lessig’in (1999) "Kod Kanundur" (Code is Law) aforizmasında vücut bulan bu hal, algoritmik sistemlerin idari eylemleri tartışmasız ve sorgulanamaz "teknik olgular" gibi sunmasına yol açar (Allen, 2026).

### 3.4. Weber'in "Dijital Demir Kafesi" ve Moore'un "Kamu Değeri" Kaybı
Max Weber, rasyonalizasyon ve bürokratikleşmenin insan ruhunu mekanik bir düzen içine hapseden bir "demir kafes" (stahlhartes Gehäuse / iron cage) yaratacağını öngörmüştü. Yapay zekâ destekli sistem düzeyi bürokrasi, bu metaforun ulaştığı en radikal aşamayı teşkil etmektedir. Algoritmik demir kafeste bürokratik akıl, istatistiksel olasılıklara, risk puanlarına ve korelasyonlara indirgenmiştir.

Bu durum Mark Moore’un (1995) kamu yönetimi disiplinine armağan ettiği "Kamu Değeri" (Public Value) kavramını derinden zedelemektedir. Moore’a göre kamu yöneticisinin amacı sadece girdi-çıktı optimizasyonu veya maliyet düşürme (verimlilik) değildir; yurttaşların hakkaniyet duygusunu, toplumsal adaleti ve demokratik güveni inşa etmektir. Otonom yapay zekâ ajanları idareye entegre edildiğinde, "kamu değeri" genellikle salt "işlem hızı" (speed) ve "sahtecilik tespiti" (fraud detection) gibi dar mali hedeflere kurban edilmektedir.

<figure class="academic-figure">
  <div class="figure-content">
    <svg viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e3a5f" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.9"/>
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f766e" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#14b8a6" stop-opacity="0.9"/>
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b91c1c" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#ef4444" stop-opacity="0.9"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.15"/>
        </filter>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
        </marker>
      </defs>

      <!-- Step 1: Street-Level -->
      <g filter="url(#shadow)">
        <rect x="20" y="25" width="220" height="190" rx="10" fill="url(#grad1)"/>
        <text x="130" y="55" fill="#fff" font-size="14" font-weight="700" text-anchor="middle">SOKAK DÜZEYİ</text>
        <text x="130" y="75" fill="#93c5fd" font-size="11" font-weight="600" text-anchor="middle">Michael Lipsky (1980)</text>
        <line x1="40" y1="90" x2="220" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <text x="35" y="115" fill="#f8fafc" font-size="11">• İnsan Memur Takdir Yetkisi</text>
        <text x="35" y="135" fill="#f8fafc" font-size="11">• Durumsal Empati & Esneklik</text>
        <text x="35" y="155" fill="#f8fafc" font-size="11">• Başa Çıkma Stratejisi</text>
        <text x="35" y="175" fill="#f8fafc" font-size="11">• Yüz Yüze Yurttaş Teması</text>
        <rect x="35" y="188" width="190" height="20" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="130" y="202" fill="#dbeafe" font-size="10" font-weight="600" text-anchor="middle">İdari Odak: Somut Adalet</text>
      </g>

      <!-- Arrow 1 to 2 -->
      <path d="M 245 120 L 290 120" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
      <text x="268" y="110" fill="#64748b" font-size="9" font-weight="700" text-anchor="middle">Veri Girişi</text>

      <!-- Step 2: Screen-Level -->
      <g filter="url(#shadow)">
        <rect x="300" y="25" width="220" height="190" rx="10" fill="url(#grad2)"/>
        <text x="410" y="55" fill="#fff" font-size="14" font-weight="700" text-anchor="middle">EKRAN DÜZEYİ</text>
        <text x="410" y="75" fill="#99f6e4" font-size="11" font-weight="600" text-anchor="middle">Bovens & Zouridis (2002)</text>
        <line x1="320" y1="90" x2="500" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <text x="315" y="115" fill="#f8fafc" font-size="11">• Bilgisayar Destekli Süreç</text>
        <text x="315" y="135" fill="#f8fafc" font-size="11">• Standartlaştırılmış Veri</text>
        <text x="315" y="155" fill="#f8fafc" font-size="11">• Daralan Bireysel Takdir</text>
        <text x="315" y="175" fill="#f8fafc" font-size="11">• Memur Nihai Karar Verici</text>
        <rect x="315" y="188" width="190" height="20" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="410" y="202" fill="#ccfbf1" font-size="10" font-weight="600" text-anchor="middle">İdari Odak: Standartlaşma</text>
      </g>

      <!-- Arrow 2 to 3 -->
      <path d="M 525 120 L 570 120" stroke="#b91c1c" stroke-width="3" marker-end="url(#arrow)"/>
      <text x="548" y="110" fill="#b91c1c" font-size="9" font-weight="700" text-anchor="middle">Otonom YZ</text>

      <!-- Step 3: System-Level & Algocracy -->
      <g filter="url(#shadow)">
        <rect x="580" y="25" width="220" height="190" rx="10" fill="url(#grad3)"/>
        <text x="690" y="55" fill="#fff" font-size="14" font-weight="700" text-anchor="middle">SİSTEM & ALGOKRASİ</text>
        <text x="690" y="75" fill="#fecaca" font-size="11" font-weight="600" text-anchor="middle">Aneesh (2009) & Zouridis</text>
        <line x1="600" y1="90" x2="780" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <text x="595" y="115" fill="#f8fafc" font-size="11">• Kod Kanundur (Code is Law)</text>
        <text x="595" y="135" fill="#f8fafc" font-size="11">• Otonom Karar & Kara Kutu</text>
        <text x="595" y="155" fill="#f8fafc" font-size="11">• Takdir: Yazılımcıya Kayar</text>
        <text x="595" y="175" fill="#f8fafc" font-size="11">• Otomasyon Önyargısı</text>
        <rect x="595" y="188" width="190" height="20" rx="4" fill="rgba(0,0,0,0.25)"/>
        <text x="690" y="202" fill="#fee2e2" font-size="10" font-weight="600" text-anchor="middle">İdari Odak: Hız & Algokrasi</text>
      </g>
    </svg>
  </div>
  <figcaption class="figure-caption">
    <strong>Şekil 1:</strong> Kamu Yönetiminde Karar Mekanizmasının Dönüşümü: Sokak Düzeyi Bürokrasisinden Sistem Düzeyine ve Algokrasiye Güç Kayması. Kaynak: Yazar tarafından Lipsky (1980), Bovens & Zouridis (2002) ve Aneesh (2009) modelleri sentezlenerek hazırlanmıştır.
  </figcaption>
</figure>

---

## 4. Ampirik Vaka İncelemeleri: Algoritmik İdarenin Somut İflasları

Teorik tartışmaların soyut alanından çıkarak, sistem düzeyi bürokrasinin ve takdir yetkisi tasfiyesinin somut toplumsal yıkımlarını anlamak için üç küresel vaka derinlemesine incelenmelidir.

| Vaka / Ülke | İncelenen Dönem | Algoritmik Mekanizma | İhlal Edilen İlke / Değer | Yargısal & İdari Sonuç |
| :--- | :--- | :--- | :--- | :--- |
| **Robodebt**<br>*(Avustralya)* | 2016–2020 | Vergi ve sosyal güvenlik verisi eşleştirilerek ortalama gelir hesabı üzerinden otomatik borç çıkarma | İspat yükü yurttaşa ters çevrildi; idari savunma hakkı ve orantılılık ilkesi yok sayıldı | Federal Mahkemece yasadışı ilan edildi; 1.8 Milyar AUD tazminat; Kraliyet Komisyonu Soruşturması |
| **SyRI (Risk Göstergesi)**<br>*(Hollanda)* | 2014–2020 | Yoksul ve göçmen mahallelerinde 17 kamu veri tabanı çaprazlanarak gizli risk puanlaması | AİHS 8. Madde (Özel hayata saygı); ayrımcılık yasağı; şeffaflık ve hesap verebilirlik ilkesi | Lahey Bölge Mahkemesi iptal kararı (2020); hükümet istifası; dünyada emsal algoritmik insan hakları kararı |
| **COMPAS**<br>*(ABD Ceza Adaleti)* | 2016–Günümüz | 137 parametreli özel mülk risk skorlama algoritması ile suç tekrarı (recidivism) tahmini | Anayasal eşit koruma; adil yargılanma hakkı; algoritmik ırkçılık (siyah sanıklara false-positive) | *State v. Loomis* davası; ticari sır koruması; şeffaflık kısıtlamasına rağmen kullanım devamı |

### 4.1. Vaka 1: Avustralya "Robodebt" Skandalı — Otomasyonun Yıkımı
2016 yılında Avustralya İnsan Hizmetleri Bakanlığı (Services Australia), sosyal yardım alan yurttaşların devlete borçlu olup olmadığını denetlemek üzere "Online Compliance Intervention" (OCI), kamuoyunda bilinen adıyla **Robodebt** sistemini devreye almıştır.

<div class="callout-box danger">
  <h5>⚠️ Ampirik Vaka Özeti: Avustralya Robodebt Felaketi</h5>
  <p><strong>Uygulanan Algoritma:</strong> İnsan memur aradan tamamen çıkarılarak, yurttaşın yıllık vergi matrahı mekanik olarak 26 haftaya bölünmüş; düzensiz çalışan yoksul işçiler "fazla sosyal yardım almış" sayılarak sistemsel olarak borçlandırılmıştır.<br>
  <strong>Yıkıcı Sonuç:</strong> 430.000'den fazla Avustralya vatandaşına 1.8 milyar dolarlık sahte borç çıkarılmış; intihar vakaları yaşanmış ve 2023 Kraliyet Komisyonu Raporu sistemi <em>"idari aklın ve empati duygusunun algoritmaya teslim edildiği felaket"</em> olarak nitelemiştir.</p>
</div>

*   **Algoritmik Tasarım:** Geleneksel sistemde bir memur, vergi dairesi (ATO) verileri ile sosyal yardım verileri arasında uyuşmazlık gördüğünde yurttaşla iletişime geçiyor, kanıt topluyor ve takdir yetkisini kullanarak borç tahakkuk ettiriyordu. Robodebt sisteminde ise insan memur devreden tamamen çıkarılmıştır. Algoritma, yıllık vergi gelirini 26 haftaya düz bir ortalamayla bölerek (income averaging) haftalık gelirle kıyaslamış ve aradaki farkı otomatik olarak "haksız kazanç ve borç" olarak kodlamıştır.
*   **İdari ve Toplumsal Sonuçlar:** Sistem, yarım milyondan fazla Avustralya vatandaşına hiçbir insani denetimden geçmeksizin icra ve borç tebligatları göndermiştir. Kanıt yükümlülüğü idareden alınıp yoksul ve dezavantajlı yurttaşın sırtına yüklenmiştir ("borcun olmadığını ispatla"). Yanlış borçlandırmalar nedeniyle intihar vakaları yaşanmış, toplumda devlete karşı telafisi güç bir güven bunalımı oluşmuştur.
*   **Yargı ve Komisyon Kararı:** 2019'da Avustralya Federal Mahkemesi sistemin yasa dışı olduğuna hükmetmiş, hükümet 1.8 milyar AUD tutarında tazminat ödemek zorunda kalmıştır. 2023 yılında tamamlanan Kraliyet Komisyonu (Royal Commission) Raporu; Robodebt'i "bürokratik körlük, siyasallaşmış otomasyon ve idari hesap verebilirliğin yok edilmesi" olarak nitelendirmiştir.

### 4.2. Vaka 2: Hollanda "SyRI" Skandalı — Algoritmik Damgalama
Hollanda Sosyal İşler ve İstihdam Bakanlığı tarafından 2014 yılında yasal altyapıya kavuşturulan **SyRI (Systeem Risico Indicatie)**, sosyal yardım dolandırıcılığını önlemek amacıyla geliştirilmiş bir makine öğrenmesi ve risk profilleme algoritmasıdır.

<div class="callout-box info">
  <h5>🏛️ Lahey Mahkemesi Emsal Kararı (SyRI - 2020)</h5>
  <p><em>"İdare kamu kaynaklarını koruma meşru amacına sahip olsa dahi; yurttaşların hangi değişkenlerle 'şüpheli' ilan edildiğini açıklamayan kara kutu algoritmalar, Avrupa İnsan Hakları Sözleşmesi'nin 8. maddesinde yer alan 'özel hayata saygı ve mahremiyet' hakkını orantısız biçimde ihlal eder."</em> — Lahey Bölge Mahkemesi, C/09/550982 Kararı.</p>
</div>

*   **Algoritmik Tasarım:** Sistem; vergi, tapu, sosyal güvenlik, istihdam ve belediye verilerini entegre ederek yurttaşların dolandırıcılık yapma olasılığını hesaplayan bir "risk puanı" üretmiştir. Ancak sistem tesadüfi olarak değil, yalnızca göçmenlerin ve düşük gelir gruplarının yoğun olarak yaşadığı "özel hedef mahallelerde" (problem areas) uygulanmıştır.
*   **Şeffaflık ve Ayrımcılık:** Algoritmanın hangi değişkenlere hangi ağırlığı verdiği, "ticari sır" ve "sistemin manipüle edilmesini önleme" gerekçeleriyle ne kamuoyuna ne de hakkında soruşturma açılan yurttaşlara açıklanmıştır. Eubanks’in (2018) "yoksulluğun dijital gözetimi" olarak kavramsallaştırdığı durum somutlaşmış; yoksul ve etnik azınlık yurttaşlar sistemsel olarak "şüpheli" kategorisine itilmiştir.
*   **Lahey Mahkemesi Kararı (2020):** Lahey Bölge Mahkemesi, 5 Şubat 2020 tarihli tarihi kararında SyRI mevzuatının Avrupa İnsan Hakları Sözleşmesi'nin 8. Maddesinde güvence altına alınan "özel hayata saygı hakkını" ihlal ettiğine hükmetmiş ve sistemi derhal durdurmuştur. Mahkeme, "kamu yararı iddiasının, ne şekilde çalıştığı denetlenemeyen kara kutu algoritmalarla temel hakları askıya almaya yetmeyeceğini" ilan ederek dünya çapında emsal teşkil etmiştir.

### 4.3. Vaka 3: ABD COMPAS Algoritması — Adaletin Kara Kutusu
ABD eyalet mahkemelerinde sanıkların kefaletle tahliye edilip edilmeyeceği veya ceza sürelerinin belirlenmesinde kullanılan **COMPAS (Correctional Offender Management Profiling for Alternative Sanctions)** yazılımı, özel bir şirket (Northpointe/Equivant) tarafından geliştirilmiş tescilli bir risk değerlendirme motorudur.

*   **İdari Mantık:** Yargıçların sübjektif takdir yetkisinin yerini, 137 soruluk anket verilerine dayalı "bilimsel ve nesnel" bir recidivism (suç tekrarı) risk skorunun alması amaçlanmıştır.
*   **Algoritmik Irkçılık:** ProPublica’nın (2016) yaptığı bağımsız araştırmalar, algoritmanın siyah sanıkları suç işlememe olasılıkları yüksek olsa dahi beyaz sanıklara kıyasla iki kat daha fazla "yüksek riskli" olarak etiketlediğini (false positive), buna karşılık beyaz sanıklarda suç işleme eğiliminin daha düşük puanlandığını (false negative) ampirik olarak kanıtlamıştır.
*   **Yargısal Sorumsuzluk:** *State v. Loomis* (2016) davasında sanık, COMPAS algoritmasının nasıl çalıştığını bilmeden verilen kararın adil yargılanma hakkını çiğnediğini savunmuş; ancak Wisconsin Yüksek Mahkemesi, şirketin ticari sırlarını koruyarak algoritmanın karar sürecinde "yardımcı araç" olarak kullanılabileceğine karar vermiştir. Bu durum, yargı yetkisinin özel bir yazılım şirketine de facto devridir.

---

## 5. Hesap Verebilirlik Krizi ve Hukuki Sorumluluğun Dönüşümü

Sistem düzeyi bürokrasi ve algokrasi, klasik idare hukukunun kurucu ilkelerini felce uğratmaktadır. Bu kriz, Mark Bovens’in (2007) kamu hesap verebilirliği matriksi üzerinden analiz edildiğinde üç aşamada kendini gösterir:

| Hesap Verebilirlik Aşaması | Geleneksel Bürokrasi Modeli | Algoritmik / Sistem Düzeyi İdare | Yapısal Bozulma ve Tıkanıklık |
| :--- | :--- | :--- | :--- |
| **1. Bilgilendirme Aşaması**<br>*(Information Stage)* | Memur kararının gerekçesini mevzuata, dosyadaki belgelere ve delillere dayandırarak açıklar. | Karar; derin öğrenme nöral ağlarının milyonlarca parametrelik matematiksel çıktısıdır. | **Açıklanamazlık (Kara Kutu):** İdare, kararın spesifik nedenselliğini yurttaşa izah edemez (Chen, 2025). |
| **2. Tartışma ve Müzakere**<br>*(Debating Stage)* | Yurttaş veya vekili idareyle yüz yüze müzakere eder; gerekçeyi çürütecek itiraz belgeleri sunar. | Karar önceden kodlanmış kapalı devre algoritmik lojikle üretilir; arayüz tartışmaya kapalıdır. | **Müzakere İflası:** Kod tartışmaya kapalıdır; yurttaşın somut durumuna özgü savunma kabul edilmez. |
| **3. Yaptırım ve Hüküm**<br>*(Consequences Stage)* | Hukuka aykırı kararda imza sahibi kamu görevlisi ve idare aleyhine iptal/tazminat davası açılır. | Hatanın kaynağı; veri sağlayıcı, yazılım taşeronu, model eğitici ve onay memuru arasında dağılır. | **Çok Ellilik Problemi (Many Hands):** Sorumluluk aktörler arasında buharlaşır; cezasızlık doğar (Wagner, 2019). |

### 5.1. Bilgilendirme ve Gerekçelendirme Yükümlülüğünün Erozyonu
Demokratik bir hukuk devletinde idarenin her türlü eylem ve işlemi gerekçeli olmak zorundadır (Anayasa m. 141, İYUK m. 2). Gerekçe, yurttaşın idarenin niyetini anlamasını ve karara karşı yargı yoluna başvurabilmesini sağlar. Ancak derin öğrenme (deep learning) ve otonom ajan temelli karar sistemlerinde karar, milyarlarca ağırlık parametresinin matematiksel çıktısıdır. Geliştiricinin dahi sonucun kesin nedenselliğini açıklayamadığı "açıklanamazlık" (inexplainability) ortamında, idare gerekçelendirme yükümlülüğünü yerine getiremez hale gelmektedir (Chen, 2025; Liu vd., 2026).

### 5.2. Çok Ellilik Problemi (The Problem of Many Hands)
Dennis Thompson’ın (1980) kavramsallaştırdığı ve Bovens’in kamu yönetimine uyarladığı "Çok Ellilik Problemi", karmaşık örgütlerde bir zararın sorumlusunun tespit edilememesini anlatır. Algoritmik sistemlerde bu durum uç noktaya taşınır:
- Veriyi toplayan kamu kurumu,
- Veriyi etiketleyen ve temizleyen dış taşeron,
- Algoritmik modeli eğiten özel yazılım şirketi,
- Sistemi idareye satan danışmanlık firması,
- Ekrandaki onayla tuşuna basan kamu görevlisi.

Bir hak ihlali doğduğunda, yazılımcı "ben sadece kodu yazdım, idari politikayı ben belirlemedim" demekte; memur "sistem böyle hesapladı, ben müdahale edemem" demekte; bakanlık ise "yazılım özel şirketin tescilli mülkiyetidir" savunmasını yapmaktadır. Sonuçta hukuki sorumluluk süreci buharlaşmakta, cezai ve mali sorumluluk sahipsiz kalmaktadır (Wagner, 2019).

---

## 6. Düzenleyici Çerçeveler ve "İnsan Gözetimi"nin İllüzyonu

### 6.1. AB Yapay Zekâ Yasası (EU AI Act) ve Yüksek Riskli Sistemler
2024 yılında yürürlüğe giren Avrupa Birliği Yapay Zekâ Yasası (Regulation 2024/1689/EU), risk temelli bir yaklaşım benimsemiştir. Yasanın 6. ve Ek III. maddeleri uyarınca; kamu hizmetlerine erişim, sosyal yardımların tahsisi, ceza adaleti, sınır kontrolü ve kritik altyapı yönetimi gibi kamusal işlevlerde kullanılan sistemler **"Yüksek Riskli" (High-Risk)** kategorisine alınmıştır.

Yasa, yüksek riskli sistemler için veri kalitesi, teknik dokümantasyon, siber güvenlik, şeffaflık ve en önemlisi **14. Madde kapsamında zorunlu "İnsan Gözetimi" (Human Oversight)** şartı getirmiştir. Buna göre otonom sistemler hiçbir zaman tam otonom bırakılmamalı; bir insan kamu görevlisi sistemi izlemeli, gerektiğinde kararı geçersiz kılabilmeli veya sistemi durdurabilmelidir (*human-in-the-loop / human-on-the-loop*).

### 6.2. "Otomasyon Önyargısı" (Automation Bias) ve Sözde Denetim
Yasanın getirdiği "insan gözetimi" kuralı kağıt üzerinde kusursuz görünmekle birlikte, bilişsel psikoloji ve kamu yönetimi sosyolojisi açısından büyük bir illüzyondan ibarettir (Weber vd., 2026).

Bilişsel literatürde **otomasyon önyargısı (automation bias)**; insanların, karmaşık ve zaman kısıtı olan durumlarda otomatik sistemlerin sunduğu analizleri, kendi bilişsel sorgulamalarının veya şüphelerinin üzerinde tutarak doğru kabul etme eğilimidir. Bir kamu görevlisi açısından düşünülürse:
1. Önünde dakikada onlarca dosya onaylaması gereken bir performans hedefi vardır.
2. Karşısında milyonlarca veriyi işlediği iddia edilen "bilimsel/tarafsız" bir algoritma bulunmaktadır.
3. Memurun algoritmanın kararını bozması durumunda, hata yaparsa hesap sorulacaktır; ancak algoritmanın kararına uyup onayladığında, sistemin arkasına sığınma ("sistem onayladı") konforuna sahiptir.

Dolayısıyla uygulamada "insan gözetimi", memurun ekranda beliren "Onayla" butonuna düşünmeksizin bastığı bir **"lastik mühür" (rubber-stamping) mekanizmasına** dönüşmektedir (Allen, 2026; Smith & Jones, 2026). Yapay zekâya meşruiyet devşirmek için kullanılan insan gözetimi, hukuki sorumluluğu makineden alıp memura yıkan, ancak memura gerçek bir irade tanımayan bir aklama aparatından farksızdır.

<figure class="academic-figure">
  <div class="figure-content">
    <svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
      <defs>
        <filter id="shadow2" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.12"/>
        </filter>
        <marker id="red-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
        </marker>
      </defs>

      <!-- Risk Pyramid Left Side -->
      <g filter="url(#shadow2)">
        <!-- Tier 1: Unacceptable -->
        <polygon points="170,30 250,85 90,85" fill="#dc2626"/>
        <text x="170" y="65" fill="#fff" font-size="10" font-weight="700" text-anchor="middle">KABUL EDİLEMEZ</text>
        <text x="170" y="78" fill="#fecaca" font-size="8" text-anchor="middle">Sosyal Puanlama (YASAK)</text>

        <!-- Tier 2: High Risk -->
        <polygon points="250,88 300,145 40,145 90,88" fill="#ea580c"/>
        <text x="170" y="112" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">YÜKSEK RİSK (Kamu Sektörü)</text>
        <text x="170" y="128" fill="#ffedd5" font-size="9" text-anchor="middle">Sosyal Yardım, Ceza Adaleti, Altyapı</text>

        <!-- Tier 3: Limited Risk -->
        <polygon points="300,148 340,205 0,205 40,148" fill="#ca8a04"/>
        <text x="170" y="172" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">SINIRLI RİSK / ŞEFFAFLIK</text>
        <text x="170" y="188" fill="#fef9c3" font-size="9" text-anchor="middle">Sohbet Botları, Derin Sahtecilik</text>

        <!-- Tier 4: Minimal Risk -->
        <polygon points="340,208 375,255 -35,255 0,208" fill="#16a34a"/>
        <text x="170" y="235" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">ASGARİ RİSK (Serbest Kullanım)</text>
      </g>

      <!-- Connecting Pathway -->
      <path d="M 310 115 L 430 115" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,4" marker-end="url(#red-arrow)"/>
      <text x="370" y="105" fill="#dc2626" font-size="10" font-weight="700" text-anchor="middle">Madde 14 Şartı</text>

      <!-- Right Side: The Rubber Stamping Trap -->
      <g filter="url(#shadow2)">
        <rect x="440" y="30" width="360" height="225" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
        <rect x="440" y="30" width="360" height="35" rx="8" fill="#334155"/>
        <text x="620" y="53" fill="#f8fafc" font-size="12" font-weight="700" text-anchor="middle">OTOMASYON ÖNYARGISI VE LASTİK MÜHÜR TUZAĞI</text>

        <!-- Process Box 1 -->
        <rect x="460" y="80" width="140" height="50" rx="6" fill="#0f172a" stroke="#64748b"/>
        <text x="530" y="100" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Algoritma Çıktısı</text>
        <text x="530" y="118" fill="#94a3b8" font-size="9" text-anchor="middle">"Risk Skoru: %89 Yüksek"</text>

        <!-- Process Arrow -->
        <path d="M 605 105 L 635 105" stroke="#94a3b8" stroke-width="2"/>

        <!-- Process Box 2 -->
        <rect x="640" y="80" width="140" height="50" rx="6" fill="#0f172a" stroke="#f59e0b"/>
        <text x="710" y="100" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">Memur Denetimi?</text>
        <text x="710" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Zaman Baskısı & Hedefler</text>

        <!-- Consequence Box -->
        <rect x="460" y="145" width="320" height="95" rx="6" fill="#450a0a" stroke="#dc2626"/>
        <text x="620" y="168" fill="#fecaca" font-size="11" font-weight="700" text-anchor="middle">Fiili Sonuç: Lastik Mühür (Rubber-Stamping)</text>
        <text x="475" y="188" fill="#fca5a5" font-size="9.5">• Memur algoritmanın karmaşık lojiğini sorgulayamaz</text>
        <text x="475" y="205" fill="#fca5a5" font-size="9.5">• Onaylarsa kurumsal konfor; reddederse kanıt yükü memurda</text>
        <text x="475" y="223" fill="#fee2e2" font-size="9.5" font-weight="600">→ İnsan gözetimi, hukuki sorumluluğu aklama kalkanına döner!</text>
      </g>
    </svg>
  </div>
  <figcaption class="figure-caption">
    <strong>Şekil 2:</strong> AB Yapay Zekâ Yasası (EU AI Act) Risk Sınıflandırması ve Yüksek Riskli Kamu Sistemlerinde "İnsan Gözetimi"nin (Human-in-the-Loop) Otomasyon Önyargısı Nedeniyle "Lastik Mühür" Mekanizmasına Dönüşmesi. Kaynak: Regulation (EU) 2024/1689 ve Weber vd. (2026) verilerinden üretilmiştir.
  </figcaption>
</figure>

---

## 7. Sonuç ve Politika Önerileri: Algoritmik Hukuk Devletine Doğru

Kamu yönetiminde yapay zekâ ve otonom sistemlerin yükselişi, basit bir teknolojik altyapı modernizasyonu değildir; devletin egemenlik yetkisini, kamu hizmetinin doğasını ve yurttaşlık haklarını yeniden tanımlayan ontolojik bir rejim değişimidir. Lipsky’nin sokak memurunun insani takdir yetkisi tasfiye edilirken, yerine geçen sistem düzeyi algokrasi; şeffaflığı, hesap verebilirliği ve somut adaleti erozyona uğratmaktadır. 

Weberyan rasyonelleşmenin ulaştığı bu "algoritmik demir kafesi" kırmak ve teknolojiyi Mark Moore’un işaret ettiği "kamu değeri" ilkelerine bağlamak için şu somut idari-hukuki reformlar hayata geçirilmelidir:

1. **Kamusal Kararlarda "Tescilli Ticari Sır" İstisnasının Kaldırılması:**  
   Kamu gücünü kullanan, yurttaşların hak ve yükümlülüklerini belirleyen hiçbir yapay zekâ modeli "özel şirket mülkiyeti ve ticari sır" zırhı arkasına saklanamamalıdır. Kamu kurumlarının tedarik ettiği tüm algoritmik sistemler açık kaynaklı, denetlenebilir ve kaynak kodları idari yargı denetimine açık olmak zorundadır.
2. **"Algoritmik Etki Değerlendirmesi" (AIA) Zorunluluğu:**  
   Çevre hukukundaki ÇED raporlarına benzer şekilde; kamu kurumları herhangi bir yapay zekâ sistemini devreye almadan önce bağımsız akademisyenler, sivil toplum ve hukukçulardan oluşan kurullarca "Algoritmik Etki Değerlendirmesi"ne tabi tutulmalı; sistemin dezavantajlı gruplar üzerinde yaratabileceği önyargı riskleri kamuoyuna açıklanmalıdır.
3. **Anlamlı Gerekçe ve İtiraz Hakkı (Meaningful Explainability):**  
   Yurttaşa sunulan tebligatlarda sadece "puan veya karar" değil; o kararı belirleyen en etkili 3 parametre, kullanılan veri kaynakları ve karara karşı bir insan memurla yüz yüze müzakere talep etme hakkı (human review on demand) açıkça bildirilmelidir.
4. **Yargısal Denetimde İspat Yükünün İdareye Geçmesi:**  
   Robodebt ve SyRI vakalarında görüldüğü üzere yurttaşa "kusursuz olduğunu ispatla" baskısı yapılamaz. Algoritmik bir işlem aleyhine açılan davalarda, algoritmanın hatasız, adil ve yasalara uygun çalıştığını ispatlama yükü münhasıran kamu idaresine ait olmalıdır.
5. **Yeni Sokak Düzeyi Bürokrat Olarak "Sistem Denetçileri":**  
   Kamu idaresi kadrolarında sadece klasik hukukçular değil; algoritmik kodları denetleyebilen, istatistiksel modellerin anayasal uygunluğunu test eden yeni nesil bağımsız kamu ombudsmanları ve sistem denetçileri (algorithmic auditors) istihdam edilmelidir.

---

### Kaynakça

*   Allen, J. G. (2026). KafkaGPT: On algorithmic bureaucracy and keeping law's promise. *Cambridge Forum on AI Law and Governance*, 1(1), 14–38.
*   Aneesh, A. (2009). Global labor: Algocratic modes of organization. *Sociological Theory*, 27(4), 347–370.
*   Araujo, T. B., Helberger, N., Kruikemeier, S., & de Vreese, C. H. (2020). In AI we trust? Perceptions about automated decision-making by artificial intelligence. *AI & Society*, 35(3), 611–623.
*   Asio, J. M. R. (2025). The algorithmic bureaucracy: A conceptual framework for ethical AI governance in public administration and beyond. *Journal of Public Governance Review*, 12(2), 88–109.
*   Bovens, M. (2007). Analysing and assessing accountability: A conceptual framework. *European Law Journal*, 13(4), 447–468.
*   Bovens, M., & Zouridis, S. (2002). From street-level to system-level bureaucracies: How information and communication technology is transforming administrative discretion and public accountability. *Public Administration Review*, 62(2), 174–184.
*   Chen, X. (2025). System-level bureaucracy rebooted: Explainable AI (XAI) and citizen trust in automated public services. *Government Information Quarterly*, 42(1), 101980.
*   Dunleavy, P., Margetts, H., Bastow, S., & Tinkler, J. (2006). New public management is dead—long live digital-era governance. *Journal of Public Administration Research and Theory*, 16(3), 467–494.
*   Eubanks, V. (2018). *Automating inequality: How high-tech tools profile, police, and punish the poor*. St. Martin's Press.
*   Flyvbjerg, B. (2006). Five misunderstandings about case-study research. *Qualitative Inquiry*, 12(2), 219–245.
*   Lessig, L. (1999). *Code and other laws of cyberspace*. Basic Books.
*   Lipsky, M. (1980). *Street-level bureaucracy: Dilemmas of the individual in public services*. Russell Sage Foundation.
*   Liu, R., Verhulst, S., & Zhang, Y. (2026). Holding AI accountable like herding cats: The contingent impact on the legitimacy of algorithmic bureaucracy. *Public Administration*, 104(1), 55–79.
*   Marienfeldt, J. (2024). Does digital government hollow out the essence of street-level bureaucracy? A systematic review on discretion and coping. *Public Policy and Administration*, 39(2), 205–228.
*   Miller, S. M., & Keiser, L. R. (2020). Representative bureaucracy and attitudes toward automated decision making. *Public Administration Review*, 81(1), 154–165.
*   Moore, M. H. (1995). *Creating public value: Strategic management in government*. Harvard University Press.
*   O'Neil, C. (2016). *Weapons of math destruction: How big data increases inequality and threatens democracy*. Crown Publishing.
*   Roehl, U. B. U., & Crompvoets, J. (2023). Inside algorithmic bureaucracy: Disentangling automated decision-making and good administration. *Information Polity*, 28(4), 511–530.
*   Smith, L., & Jones, M. (2026). Automated decision-making and the rule of law in the post-AI Act era. *Journal of Public Administration Research and Theory*, 36(2), 190–211.
*   Sztandar-Sztanderska, K. (2026). Beyond discretion: Digital profiling and the re-stratification of street-level practices. *Critical Policy Studies*, 20(1), 44–68.
*   Thompson, D. F. (1980). Moral responsibility of public officials: The problem of many hands. *American Political Science Review*, 74(4), 905–916.
*   Wagner, B. (2019). Liable, but not in control? Ensuring meaningful human agency in automated decision-making systems. *Policy & Internet*, 11(3), 273–287.
*   Weber, M. (1978). *Economy and society: An outline of interpretive sociology* (G. Roth & C. Wittich, Eds.). University of California Press. (Orijinal yayın 1922).
*   Weber, T., Schneider, H., & Müller, K. (2026). Human-in-the-loop vs. human-over-the-loop: Practical limitations in AI public administration. *Policy & Internet*, 18(1), 112–135.
*   Yin, R. K. (2018). *Case study research and applications: Design and methods* (6th ed.). SAGE Publications.
