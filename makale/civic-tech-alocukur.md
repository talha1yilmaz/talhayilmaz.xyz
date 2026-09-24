# Yerel Yönetimlerde Yurttaş Odaklı Dijital Denetim: "Alo Çukur Hattı" Üzerinden Katılımcı Yönetişim, Altyapı Şeffaflığı ve Algoritmik Adalet İçin Bir Civic Tech Modeli

**Yazar:** Talha Nuri Yılmaz  
*Doktora Adayı, Osmaniye Korkut Ata Üniversitesi, Sosyal Bilimler Enstitüsü, Siyaset Bilimi ve Kamu Yönetimi Anabilim Dalı*  
**E-posta:** talhanuriyilmaz@gmail.com | **ORCID:** 0009-0005-4727-8118  
**Yayın Türü:** Çalışma Metni (Working Paper) — Revize Edilmiş Genişletilmiş Versiyon  
**Tarih:** Eylül 2026  

---

### Öz
Bu çalışma, yerel yönetimlerde katılımcı demokrasi, kentsel müştereklerin denetimi ve altyapı şeffaflığını sağlamak amacıyla geliştirilen sivil teknoloji (civic tech) platformlarını yönetsel, kuramsal ve ampirik boyutlarıyla incelemektedir. Temsili demokrasinin yerel düzeydeki krizleri ve yurttaş ile belediye bürokrasisi arasındaki asimetrik iletişim duvarları, yerel hizmetlerin izlenmesinde yeni dijital mekanizmaların doğmasına yol açmıştır. Çalışma; kentsel sokak arızaları ve yol bozukluklarının bildirimine odaklanan "Alo Çukur Hattı" konsepti üzerinden, yurttaş odaklı dijital denetim mimarisini kuramsal bir çerçeveye oturtmaktadır. Araştırmada Sherry Arnstein’ın "Yurttaş Katılımı Merdiveni" (Ladder of Citizen Participation), Albert O. Hirschman’ın "Çıkış, Ses ve Sadakat" (Exit, Voice, and Loyalty) modeli ve Elinor Ostrom’un "Kentsel Müştereklerin Yönetişimi" (Governing the Commons) teorileri analitik bir sacayağı olarak kullanılmıştır. Metodolojik olarak nitel karşılaştırmalı vaka analizi deseni benimsenmiş; Birleşik Krallık’taki "FixMyStreet", Amerika Birleşik Devletleri’ndeki "SeeClickFix" ve "Open311" standartları ile Türkiye’deki kurumsal pratikler (İBB Çözüm Merkezi / Beyaz Masa, Ankara Mavi Masa ve CİMER yerel entegrasyonu) çok boyutlu bir matris üzerinden karşılaştırılmıştır. Bulgular; basit şikayet bildirim arayüzlerinin yapısal şeffaflık ve açık veriyle desteklenmediği sürece Arnstein’ın "göstermelik katılım" (tokenism) tuzağına düştüğünü; buna karşılık kamuya açık haritalama ve gerçek zamanlı takip panelleriyle desteklendiğinde Hirschman’ın "ses" (voice) mekanizmasını etkinleştirerek kurumsal sadakati artırdığını göstermektedir. Ayrıca 2025-2026 döneminde sivil teknoloji platformlarına entegre edilen yapay zekâ (NLP) tabanlı otomatik bildirim sınıflandırma sistemlerinin, yüksek gelirli mahallelerin platformu daha yoğun kullanması sonucu ortaya çıkan "algoritmik tahsisat önyargısı" (algorithmic allocation bias) ve dijital bölünme (digital divide) riskleri tartışılmış; kapsayıcı ve hesap verebilir bir yerel sivil teknoloji ekosistemi için politika önerileri sunulmuştur.

**Anahtar Kelimeler:** Sivil Teknoloji (Civic Tech), Katılımcı Yönetişim, Kentsel Müşterekler, Katılım Merdiveni, FixMyStreet, SeeClickFix, İBB Çözüm Merkezi, Algoritmik Adalet.

---

### Abstract
**Citizen-Centric Digital Oversight in Local Governments: A Civic Tech Model for Participatory Governance, Infrastructure Transparency, and Algorithmic Equity via "Pothole Hotlines"**  
This article examines civic technology (civic tech) platforms designed to foster participatory democracy, urban commons stewardship, and municipal infrastructure transparency from theoretical, empirical, and comparative administrative perspectives. The structural crisis of representative democracy at the municipal scale, compounded by asymmetric communication between citizens and urban bureaucracies, has catalyzed novel bottom-up digital oversight mechanisms. Focusing on the conceptual and operational archetype of municipal "Pothole Hotlines" (Alo Çukur), this research theorizes citizen-led micro-auditing. The study mobilizes a threefold theoretical foundation: Sherry Arnstein’s "Ladder of Citizen Participation," Albert O. Hirschman’s "Exit, Voice, and Loyalty" framework, and Elinor Ostrom’s Nobel-laureate theory of "Governing the Commons." Methodologically, a qualitative comparative case design contrasts benchmark international platforms—the UK's "FixMyStreet," the US's "SeeClickFix" and "Open311" open-data standards—with Turkey's institutionalized municipal mechanisms, notably Istanbul Metropolitan Municipality’s (İBB) "Çözüm Merkezi" (White Desk) and the national Presidential Communication Center (CİMER). Findings reveal that without open data and real-time civic accountability dashboards, municipal reporting tools devolve into Arnsteinian "tokenism" and digital placation. Conversely, transparent, peer-visible civic mapping operationalizes Hirschmanian "voice," converting structural urban dissatisfaction into institutional loyalty and Ostromian co-production. Furthermore, analyzing emerging 2025–2026 deployments of generative AI and automated triage in municipal intake reveals critical hazards of "algorithmic allocation bias," wherein affluent neighborhoods capture municipal response bandwidth. The paper concludes with actionable governance frameworks designed to ensure digital inclusion, socio-spatial equity, and algorithmic justice in urban service delivery.

**Keywords:** Civic Technology, Participatory Governance, Urban Commons, Ladder of Participation, FixMyStreet, SeeClickFix, Municipal Open Data, Algorithmic Equity.

---

## 1. Giriş

Kentler, yalnızca beton, asfalt ve çelikten oluşan fiziki mekanlar değil; yurttaşların gündelik yaşam pratiklerini sürdürdükleri, devlet otoritesiyle en doğrudan ve kesintisiz temas kurdukları kamusal ekosistemlerdir. Modern kamu yönetimi yazınında "akıllı kent" (smart city) paradigması uzun yıllar boyunca teknoloji şirketlerinin donanım odaklı, merkeziyetçi ve teknokratik vizyonuyla sınırlı kalmıştır (Hollands, 2008; Kitchin, 2014). Bu vizyonda yurttaş; kentin her köşesine yerleştirilen sensörlerin, kameraların ve algoritmaların pasif bir veri nesnesi, dijital gözetimin hedefi konumundadır. Ancak son on yılda yaşanan demokratik meşruiyet krizleri ve yerel hizmetlerdeki hantallık, bu yukarıdan aşağıya (top-down) tekno-belirlemeci anlayışı sarsmış; yerini tabandan tavana (bottom-up), insan odaklı ve yurttaşın failliğini merkeze alan **"Sivil Teknoloji" (Civic Tech)** hareketine bırakmıştır (Saldivar vd., 2019; Kougias & Papadakaki, 2025).

Sivil teknoloji; yurttaşların kamu hizmetlerini denetlemesini, karar alma süreçlerine doğrudan katılmasını, kamusal sorunları raporlamasını ve kamu kurumlarının şeffaflığını artırmasını sağlayan dijital araçlar ve yazılım ekosistemleri bütünüdür. Kentsel altyapının gündelik işleyişi düşünüldüğünde, yol yüzeyindeki bir çukur, yanmayan bir sokak lambası, kırık bir kaldırım taşı veya patlayan bir su borusu, sıradan bir teknik arıza olmanın çok ötesinde anlamlar taşır. Bu aksaklıklar, yurttaşın zihninde idarenin yetersizliğinin, yerel vergilerin heba edildiğinin ve kamusal ihmalin somutlaşmış birer anıtıdır (Offenhuber, 2015). Bu noktada ortaya çıkan "Alo Çukur Hattı" metaforu ve ilişkili mobil kentsel bildirim platformları, yurttaşın yaşadığı kente yabancılaşmasını önleyen, onu pasif bir hizmet alıcısından kentsel müştereklerin aktif "denetçisi" ve "ortak üreticisi" (co-producer) kılan en yalın arayüzü temsil eder.

Bununla birlikte, kamu yönetimi literatüründe sivil teknolojilerin vaatleri ile sahadaki pratik sonuçları arasında derin çelişkiler bulunmaktadır. Birçok belediye, mobil şikayet hatlarını gerçek bir hesap verebilirlik aracı olarak değil, yurttaşın öfkesini emen dijital bir sünger veya halkla ilişkiler (PR) vitrini olarak konumlandırmaktadır. Bildirimlerin kamuya açık bir haritada yayınlanmadığı, çözüm sürelerinin şeffaf biçimde ölçülemediği ve açık veri standartlarının uygulanmadığı sistemler, katılımcı yönetişim iddiasını boşa çıkarmaktadır. Dahası, 2025 ve 2026 yıllarında yerel yönetimlere entegre edilen büyük dil modelleri ve yapay zekâ tabanlı şikayet tasnif algoritmaları, yeni bir "algoritmik eşitsizlik" boyutu doğurmuştur: Dijital okuryazarlığı yüksek, varlıklı mahalle sakinlerinin sisteme bıraktığı detaylı bildirimler algoritmalar tarafından önceliklendirilirken; yoksul ve dezavantajlı mahallelerin temel altyapı talepleri geri plana itilebilmektedir (Aygün & Çekiç, 2025; Smith & Jones, 2026).

Bu makale; "Alo Çukur Hattı" ekseninde sivil teknolojilerin kuramsal temellerini, küresel ve yerel iyi uygulama modellerini, ampirik karşılaştırmalarını ve algoritmik dönüşümün getirdiği riskleri kapsamlı bir biçimde analiz etmeyi amaçlamaktadır.

---

## 2. Metodoloji ve Karşılaştırmalı Vaka Deseni

Bu araştırma, nitel araştırma yöntemleri içerisinde yer alan **karşılaştırmalı kurumsal vaka analizi** (comparative institutional case study) deseni üzerine inşa edilmiştir (Yin, 2018). Araştırmanın ampirik sahası, kentsel bildirim ve sivil denetim platformlarının kurumsal olgunluk düzeylerini, veri açıklık derecelerini ve yurttaş katılım modellerini sınamak üzere küresel ve ulusal ölçekte dört temel vaka üzerinden yapılandırılmıştır:

1.  **FixMyStreet (Birleşik Krallık - mySociety):** Sivil toplum (STK) inisiyatifiyle geliştirilen, bağımsız, açık kaynaklı ve yerel yönetimleri dışarıdan denetleyen öncü küresel civic tech modeli.
2.  **SeeClickFix ve Open311 Standartları (Amerika Birleşik Devletleri):** Kamu-özel ortaklığıyla ticarileşmiş, belediye iş emri sistemlerine (CRM/ERP) entegre, açık API standartlarına (Open311) dayalı kurumsal model.
3.  **İBB Çözüm Merkezi / Beyaz Masa (İstanbul Büyükşehir Belediyesi):** Türkiye'nin en büyük metropolünde faaliyet gösteren, geleneksel çağrı merkezi mantığından mobil uygulamaya ve yapay zekâ destekli biletleme sistemine evrilen kurumsal-kamusal model.
4.  **CİMER (Cumhurbaşkanlığı İletişim Merkezi) Yerel Entegrasyonu:** Türkiye'de merkezi idarenin yerel yönetimler üzerindeki vesayet ve denetim aracı olarak işleyen hiyerarşik yurttaş geri bildirim mekanizması.

### Veri Toplama ve Analitik Matris
Çalışmada platformların teknik mimarileri, gizlilik sözleşmeleri, yıllık faaliyet raporları, kullanıcı arayüzleri ve kentsel veri şeffaflığı politikaları doküman analizi yöntemiyle incelenmiştir. Vakalar; (1) Mülkiyet ve Bağımsızlık Yapısı, (2) Veri Şeffaflığı ve Kamuya Açıklık, (3) Arnstein Merdivenindeki Konumu, (4) Hirschmanian Ses Mekanizmasının Gücü ve (5) Algoritmik Adalet Riskleri kriterlerine göre analiz edilmiştir.

---

## 3. Kuramsal Çerçeve: Katılım, Ses ve Müşterekler

Yerel yönetimlerde dijital yurttaş denetimini açıklamak için tek bir kuram yetersiz kalmaktadır. Bu çalışma, siyaset bilimi, ekonomi-politik ve kamu yönetiminin üç köklü kuramını yenilikçi bir sentezle bir araya getirmektedir.

<figure class="academic-figure">
  <div class="figure-content">
    <svg viewBox="0 0 820 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
      <defs>
        <linearGradient id="civic-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0369a1"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="civic-g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f766e"/>
          <stop offset="100%" stop-color="#0d9488"/>
        </linearGradient>
        <linearGradient id="civic-g3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4f46e5"/>
          <stop offset="100%" stop-color="#6366f1"/>
        </linearGradient>
        <filter id="shadow3" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity="0.12"/>
        </filter>
      </defs>

      <!-- Center Top Header Badge -->
      <rect x="235" y="10" width="350" height="32" rx="16" fill="#1e293b"/>
      <text x="410" y="31" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">CİVİC TECH KATILIMCI YÖNETİŞİM SACAYAĞI</text>

      <!-- Connecting Lines -->
      <path d="M 330 42 L 150 75" stroke="#94a3b8" stroke-width="2"/>
      <path d="M 410 42 L 410 75" stroke="#94a3b8" stroke-width="2"/>
      <path d="M 490 42 L 670 75" stroke="#94a3b8" stroke-width="2"/>

      <!-- Pillar 1: Arnstein -->
      <g filter="url(#shadow3)">
        <rect x="35" y="75" width="230" height="155" rx="8" fill="url(#civic-g1)"/>
        <text x="150" y="100" fill="#fff" font-size="13" font-weight="700" text-anchor="middle">Sherry Arnstein (1969)</text>
        <text x="150" y="116" fill="#bae6fd" font-size="10" font-weight="600" text-anchor="middle">Katılım Merdiveni</text>
        <line x1="50" y1="126" x2="250" y2="126" stroke="rgba(255,255,255,0.2)"/>
        <text x="50" y="146" fill="#f8fafc" font-size="10.5">• Göstermelik Katılım (Tokenism)</text>
        <text x="50" y="165" fill="#f8fafc" font-size="10.5">• Danışma ve Yatıştırma Tuzağı</text>
        <text x="50" y="184" fill="#f8fafc" font-size="10.5">• Hedef: Yurttaş Denetimi</text>
        <text x="50" y="203" fill="#f8fafc" font-size="10.5">• Karar Ortaklığı (Partnership)</text>
      </g>

      <!-- Pillar 2: Hirschman -->
      <g filter="url(#shadow3)">
        <rect x="295" y="75" width="230" height="155" rx="8" fill="url(#civic-g2)"/>
        <text x="410" y="100" fill="#fff" font-size="13" font-weight="700" text-anchor="middle">Albert Hirschman (1970)</text>
        <text x="410" y="116" fill="#a7f3d0" font-size="10" font-weight="600" text-anchor="middle">Çıkış, Ses ve Sadakat</text>
        <line x1="310" y1="126" x2="510" y2="126" stroke="rgba(255,255,255,0.2)"/>
        <text x="310" y="146" fill="#f8fafc" font-size="10.5">• Yerel Hizmetlerde "Çıkış Yok"</text>
        <text x="310" y="165" fill="#f8fafc" font-size="10.5">• Çıkışsızlığa Çare: "Ses (Voice)"</text>
        <text x="310" y="184" fill="#f8fafc" font-size="10.5">• Sıfır Maliyetli Mobil Şikayet</text>
        <text x="310" y="203" fill="#f8fafc" font-size="10.5">• Çözülen Sorun = Yüksek Sadakat</text>
      </g>

      <!-- Pillar 3: Ostrom -->
      <g filter="url(#shadow3)">
        <rect x="555" y="75" width="230" height="155" rx="8" fill="url(#civic-g3)"/>
        <text x="670" y="100" fill="#fff" font-size="13" font-weight="700" text-anchor="middle">Elinor Ostrom (1990)</text>
        <text x="670" y="116" fill="#c7d2fe" font-size="10" font-weight="600" text-anchor="middle">Kentsel Müşterekler</text>
        <line x1="570" y1="126" x2="770" y2="126" stroke="rgba(255,255,255,0.2)"/>
        <text x="570" y="146" fill="#f8fafc" font-size="10.5">• Sokak ve Altyapı = Müşterek</text>
        <text x="570" y="165" fill="#f8fafc" font-size="10.5">• Birlikte Üretim (Co-production)</text>
        <text x="570" y="184" fill="#f8fafc" font-size="10.5">• Yurttaş = Aktif Gözlemci</text>
        <text x="570" y="203" fill="#f8fafc" font-size="10.5">• Çok Merkezli Sivil Denetim</text>
      </g>
    </svg>
  </div>
  <figcaption class="figure-caption">
    <strong>Şekil 1:</strong> Sivil Teknoloji (Civic Tech) ve Katılımcı Yönetişimin Kuramsal Sacayağı: Arnstein, Hirschman ve Ostrom Teorilerinin Entegrasyonu. Kaynak: Yazar tarafından tasarlanmıştır.
  </figcaption>
</figure>

### 3.1. Sherry Arnstein: Katılım Merdiveni ve Göstermelik Katılım (Tokenism) Tuzağı
Sherry Arnstein’ın (1969) öncü makalesinde geliştirdiği "Yurttaş Katılımı Merdiveni", katılım söyleminin arkasındaki güç dinamiklerini 8 basamakta özetler:
- **Katılımsızlık (Non-participation):** 1. Manipülasyon, 2. Terapi.
- **Göstermelik Katılım (Tokenism):** 3. Bilgilendirme, 4. Danışma, 5. Yatıştırma (Placation).
- **Yurttaş Gücü (Citizen Power):** 6. Ortaklık (Partnership), 7. Yetki Devri, 8. Yurttaş Denetimi (Citizen Control).

Birçok belediyenin sunduğu mobil şikayet hatları, Arnstein’ın merdiveninde 4. ve 5. basamaklara (Danışma ve Yatıştırma) tekabül etmektedir. Yurttaşa "çukurun fotoğrafını çek ve bize yolla" denilmekte; ancak bildirimin hangi öncelikle işleme alınacağı, bütçenin nereye harcandığı veya arızanın neden geciktiği yurttaşla paylaşılmamaktadır. Yurttaş şikayetini ilettiğinde sistem ona bir "talep numarası" vererek onu psikolojik olarak yatıştırmakta (placation), fakat gerçek bir denetim yetkisi devretmemektedir. 

Civic Tech modelinin gerçek bir "Yurttaş Gücü" (6-8. basamaklar) üretebilmesi için, toplanan verilerin kamuya açık hale getirilmesi, mahalle meclislerinin bu verilere dayanarak belediye bütçesini sorgulayabilmesi ve yurttaşın çözüm sürecini bağımsız olarak doğrulayabilmesi (peer-verification) gerekmektedir.

### 3.2. Albert O. Hirschman: Yerel Tekeller Karşısında "Ses" (Voice) Mekanizması
Albert O. Hirschman’ın (1970) *Exit, Voice, and Loyalty* kuramı, örgütlerin ve devlet kurumlarının performans düşüşü karşısında bireylerin geliştirdiği davranış kalıplarını inceler:
- **Çıkış (Exit):** Tüketici özel sektörde kalitesiz hizmet gördüğünde başka bir firmaya geçer. Ancak yerel yönetim hizmetleri (yollar, kaldırımlar, su, kanalizasyon) coğrafi ve doğal tekellerdir. Bir yurttaş mahallesindeki yol bozuk diye evini taşıyamaz veya belediyesini kolayca değiştiremez. Yerel kamu hizmetlerinde "çıkış" maliyeti aşırı yüksektir veya imkânsızdır.
- **Ses (Voice):** Çıkış kapısının kapalı olduğu yerde yegane demokratik ve rasyonel seçenek "ses çıkarma"dır (şikayet etme, protesto, talep, dilekçe). Geleneksel bürokraside ses çıkarmak aşırı maliyetlidir (belediyeye gitmek, dilekçe yazmak, sıra beklemek). "Alo Çukur" tarzı sivil teknolojiler, ses çıkarma maliyetini (transaction cost) sıfıra indirerek yurttaşın kurumsal çürüme karşısında en etkili silahı haline gelir.
- **Sadakat (Loyalty):** Hirschman’a göre, sesi idare tarafından dinlenen, şikayetinin çözüldüğünü şeffafça gören yurttaşın kuruma olan "sadakati" ve vergi ödeme motivasyonu artar. Tersi durumda, sesi duyulmayan yurttaş içine kapanır, yabancılaşır ve sivil itaatsizlik eğilimi gösterir.

### 3.3. Elinor Ostrom: Kentsel Müşterekler ve Birlikte Üretim (Co-Production)
Nobel ödüllü iktisatçı Elinor Ostrom (1990), *Governing the Commons* eserinde kaynakların sadece devlet mülkiyeti veya özel mülkiyet ikilemiyle değil; kullanıcıların oluşturduğu "müşterekler" (commons) ve çok merkezli (polycentric) yönetişim kurallarıyla sürdürülebilir biçimde yönetilebileceğini kanıtlamıştır.

Modern kent sosyolojisinde sokaklar, kaldırımlar, meydanlar ve kamusal altyapı birer **"kentsel müşterek" (urban commons)** olarak kabul edilmektedir (Foster & Iaione, 2016). Kentsel altyapı bozulduğunda bundan tüm kentli zarar görür ("müştereklerin trajedisi"). Ostrom’un kamu yönetimine kazandırdığı en kritik kavramlardan biri **"birlikte üretim"dir (co-production)** (Ostrom, 1996). Kamu hizmetleri yalnızca profesyonel bürokratlar tarafından üretilmez; yurttaşın katkısıyla ortaklaşa üretilir. Bir sokaktaki çukuru belediyenin 50 kişilik teftiş ekibinin tespit etmesi aylar sürebilir; ancak o sokaktan her gün geçen yüzlerce yurttaşın cep telefonuyla yaptığı bildirimler, belediyenin gözü ve kulağı haline gelir. Civic tech, yurttaşı bedelsiz bir şikayetçiden, kentsel müştereklerin aktif ortak üreticisine ve muhafızına dönüştürür.

---

## 4. Karşılaştırmalı Vaka Analizi: Küresel Örnekler ve Türkiye Pratiği

Aşağıdaki analitik matris, incelenen dört farklı modelin yönetsel felsefesini, teknik altyapısını ve demokratik derinliğini özetlemektedir:

| Değerlendirme Kriteri | FixMyStreet (Birleşik Krallık) | SeeClickFix (ABD) | İBB Çözüm Merkezi (Türkiye) | CİMER (Türkiye) |
| :--- | :--- | :--- | :--- | :--- |
| **Mülkiyet ve Aktör Yapısı** | Bağımsız Sivil Toplum (mySociety) | Özel Şirket (SaaS Modeli / Kamu Tedarik) | Büyükşehir Belediyesi (Doğrudan Kamu) | T.C. Cumhurbaşkanlığı (Merkezi İdare) |
| **Veri Şeffaflığı ve Görünürlük** | **Tamamen Açık:** Tüm bildirimler, harita konumları ve fotoğraflar kamuya açıktır | **Kamuya Açık:** Harita üzerinden mahalleli tüm sorunları ve statüleri izleyebilir | **Kapalı / Bireysel:** Sadece başvuran yurttaş kendi talebinin durumunu görebilir | **Tamamen Gizli:** Başvuran ve kamu kurumu harici üçüncü kişilere ve haritaya kapalıdır |
| **Teknik Protokol & API** | Açık Kaynak Kodlu / Açık API / Veri seti indirilebilir | Open311 Standartları Uyumlu / Belediye ERP entegre | Tescilli Kurumsal CRM / Mobil Uygulama / Dahili AI | Tescilli Devlet Yazılımı / Güvenlik ve E-Devlet entegre |
| **Arnstein Katılım Düzeyi** | **6. Basamak: Ortaklık** (Yurttaş Denetimi) | **5. Basamak: Yatıştırma** / 6. Basamak: Ortaklık | **4. Basamak: Danışma** / 5. Basamak: Yatıştırma | **3. Basamak: Bilgilendirme** / İdari Teftiş |
| **Yönetişim ve Katılım Karakteri** | Kolektif, kamusal sivil denetim ve açık kentsel hesap verebilirlik | Topluluk odaklı, oylama (upvote) destekli belediye iş akışı | Müşteri odaklı çağrı merkezi mantığı ("Beyaz Masa") | Dikey, hiyerarşik ve bürokratik vesayet denetimi |

<div class="callout-box info">
  <h5>💡 Karşılaştırmalı Analiz Bulgusu: "Radikal Şeffaflık" Farkı</h5>
  <p>İngiltere'deki <strong>FixMyStreet</strong> platformunda bir çukur bildirildiğinde, bu veri anında kamusal haritada kırmızı bir nokta olarak belirir. Belediye ekipleri tamiratı bitirdiğinde fotoğraf yükler ve mahalle sakinleri <em>"Evet, düzgün yapıldı"</em> onayı vermeden bildirim yeşile dönmez. Buna karşılık <strong>İBB Çözüm Merkezi</strong>'nde şikayet idarenin kapalı veri tabanında kalır; bu durum mükerrer bildirimlere ve kamuoyu baskısının oluşamamasına yol açar.</p>
</div>

### 4.1. Birleşik Krallık: FixMyStreet ve Sivil Toplum Bağımsızlığı
2007 yılında İngiltere merkezli *mySociety* adlı sivil toplum kuruluşu tarafından kurulan **FixMyStreet**, dünyada sivil teknolojinin kurucu anıtı sayılmaktadır.

*   **Yönetsel Mantık:** Sistem devlete veya belediyelere ait değildir; bağımsız bir sivil platformdur. Yurttaş posta kodunu girer, harita üzerinde sokaktaki arızayı işaretler, fotoğraf yükler ve sorunu açıklar. Sistem, Birleşik Krallık’taki karmaşık yerel yönetim yapısında o sokaktan hangi belediyenin (borough, county, city council) sorumlu olduğunu otomatik olarak tespit eder ve bildirimi ilgili birime iletir.
*   **Radikal Şeffaflık:** FixMyStreet’in en devrimci yönü, **tüm bildirimlerin kamuya açık olmasıdır.** Bir komşunun açtığı çukur bildirimini tüm mahalleli görür, altına yorum yazabilir ("evet bu çukur 2 haftadır var"), çözüldüğünde mahalleli teyit edebilir. Bu kamusal görünürlük, belediyeler üzerinde devasa bir sivil baskı ve hesap verebilirlik oluşturur. Belediye sorunu görmezden gelemez; çünkü ihmal tüm dünyanın gözü önünde haritalanmıştır (Offenhuber, 2015).

### 4.2. ABD: SeeClickFix ve Open311 Standartları
Amerika Birleşik Devletleri’nde 2008’de kurulan **SeeClickFix**, sivil teknolojinin belediye kurumsal sistemleriyle (CRM/ERP) entegre olduğu ticarileşmiş bir modeli temsil eder.

*   **Open311 Standardı:** ABD’de geleneksel olarak acil olmayan belediye şikayetleri için "311" telefon hattı kullanılmaktaydı. Washington DC ve San Francisco öncülüğünde geliştirilen **Open311**, belediyelerin şikayet bildirimlerini standart bir veri formatında (API) dış dünyaya açmasını sağlayan bir protokoldür. Bu sayede bağımsız yazılımcılar belediyenin sistemine bağlanan kendi mobil uygulamalarını geliştirebilmiştir.
*   **Topluluk Dinamiği:** SeeClickFix platformunda yurttaşlar bildirimlere oy verebilmekte (upvote), sorunun aciliyetini kolektif olarak belirleyebilmektedir. Böylece belediye bürokrasisi hangi arızanın daha fazla yurttaşı mağdur ettiğini veriye dayalı olarak önceliklendirebilmektedir.

### 4.3. Türkiye Pratiği: İBB Çözüm Merkezi (Beyaz Masa) ve CİMER İkilemi
Türkiye’de yerel yönetimlerde yurttaş geri bildirim mekanizmaları köklü bir geçmişe sahiptir; ancak Batı'daki "Civic Tech" modellerinden yapısal ve felsefi olarak çok farklı dinamiklere dayanmaktadır.

#### İBB Çözüm Merkezi (Beyaz Masa)
1994 yılında Recep Tayyip Erdoğan'ın İBB Başkanlığı döneminde "Beyaz Masa" adıyla kurulan sistem, Türk kamu yönetiminde çığır açan bir halkla ilişkiler ve şikayet yönetim modeli olmuştur. Günümüzde "İBB Çözüm Merkezi" adıyla mobil uygulama, WhatsApp hattı ve web portalı üzerinden milyonlarca başvuru almaktadır.
*   **Bireyselleştirilmiş / Kapalı Tasarım:** İBB Çözüm Merkezi, teknik olarak çok güçlü bir çağrı ve iş takip altyapısına sahip olmasına rağmen, **verileri kamuya açık değildir.** Bir yurttaşın Kadıköy veya Esenyurt'taki bir çukur veya altyapı arızası hakkında yaptığı bildirim, yalnızca başvuran yurttaş ile belediye memuru arasında "özel bir yazışma" olarak kalır. Diğer mahalle sakinleri bu arızanın bildirildiğini göremez; mükerrer başvurular yapılır ve belediyenin çözüm performansı bağımsız sivil denetime kapalı tutulur.
*   **Müşteri Odaklılık vs. Yurttaş Odaklılık:** Sistem, Yeni Kamu İşletmeciliği (NPM) paradigmasının bir ürünü olarak yurttaşı hak sahibi bir "yurttaş"tan ziyade, memnun edilmesi gereken bir "müşteri" olarak konumlandırmaktadır. Bu durum Arnstein merdiveninde "yatıştırma" (placation) aşamasında sıkışıp kalınmasına yol açmaktadır.

#### CİMER ve İdari Vesayet
Cumhurbaşkanlığı İletişim Merkezi (CİMER), Anayasal dilekçe ve bilgi edinme hakkının dijital arayüzüdür. Ancak yerel yönetimler bağlamında CİMER, sıklıkla yerel bürokrasiyi aşmak için kullanılan hiyerarşik bir "merkezi vesayet" sopasına dönüşmektedir. Yurttaş, belediyenin çözmediği bir sokak sorununu CİMER üzerinden şikayet ettiğinde; merkezi idare valilik veya kaymakamlık kanalıyla yerel yönetime teftiş baskısı kurmaktadır. Bu model, katılımcı ve yatay bir "sivil teknoloji" değil; dikey, otoriter ve merkeziyetçi bir denetim aygıtıdır.

---

## 5. Algoritmik Adalet, Büyük Veri ve Yapay Zekâ Dönüşümü (2025-2026)

2025 ve 2026 yıllarında sivil teknoloji platformları, basit kural tabanlı form sistemlerinden çıkarak derin öğrenme ve üretken yapay zekâ (GenAI) destekli otonom kentsel işletim sistemlerine dönüşmüştür. Ancak bu teknolojik sıçrama, beraberinde ciddi "algoritmik adalet" ve sosyo-mekânsal eşitsizlik riskleri getirmiştir:

### 5.1. Doğal Dil İşleme (NLP) ile Otomatik Triyaj ve Önceliklendirme
Günde on binlerce fotoğraf ve metin bildirimi alan metropol belediyeleri, bildirimleri tasnif etmek için yapay zekâ ajanları kullanmaktadır. Algoritmalar, yurttaşın yazdığı metnin duygu analizini (sentiment analysis) yapmakta, tehlike seviyesini puanlamakta ve fen işleri ekiplerine otomatik iş emri atamaktadır.

### 5.2. Algoritmik Tahsisat Önyargısı (Algorithmic Allocation Bias)
Literatürdeki en kritik tartışma, yapay zekânın kamu kaynaklarını dağıtırken ürettiği yapısal adaletsizliktir (Aygün & Çekiç, 2025; Kougias & Papadakaki, 2025):
- **Katılım Uçurumu:** Akıllı telefon kullanım oranı, dijital okuryazarlık ve sivil farkındalık; sosyoekonomik gelişmişlik düzeyi yüksek mahallelerde (örneğin İstanbul'da Kadıköy veya Beşiktaş) çok daha yüksektir. Düşük gelirli, göçmen veya yaşlı nüfusun yoğun olduğu çevre ilçelerde ise mobil şikayet uygulamalarını kullanma sıklığı düşüktür.
- **Yapay Zekânın Körlüğü:** Belediye veri havuzuna akan bildirimlerin %70'i varlıklı mahallelerden geldiğinde, yapay zekâ algoritmaları bu mahallelerdeki küçük kozmetik arızaları (ör. kaldırım boyası) dahi "yüksek kentsel talep ve yoğunluk" olarak algılayıp belediye ekiplerini bu bölgelere yönlendirmektedir. Buna karşılık yoksul bir mahalledeki hayati bir altyapı çöküntüsü, kimse mobil uygulamadan fotoğraf yüklemediği için sistemin radarına girememektedir. Bu olgu, kamu kaynaklarının zengin bölgelere kaymasına yol açan tehlikeli bir **"algoritmik soylulaştırma" (algorithmic gentrification)** biçimidir.

### 5.3. Süper Uygulamalar (Super-Apps) ve Kapsayıcılık Krizi
2026 kentsel yönetişim trendlerinde, parça parça uygulamalar yerine "Süper Uygulama" (Super-App) modeli öne çıkmaktadır (ulaşım kartı, borç ödeme, etkinlik bileti ve şikayet hattının tek portala toplanması). Ancak bu bütünleşik sistemler, akıllı telefonu olmayan veya dijital kimlik doğrulamasında zorluk yaşayan yaşlılar, engelliler ve kırılgan gruplar için erişim bariyerini (digital barrier) artırmaktadır.

---

## 6. Sonuç ve Politika Önerileri: İdeal Bir "Civic Tech" Mimarisi

"Alo Çukur Hattı" metaforu üzerinden incelediğimiz sivil teknolojiler, yerel demokrasinin canlandırılması, bürokratik ataletin kırılması ve kentsel müştereklerin korunması için emsalsiz fırsatlar sunmaktadır. Ancak bu teknolojilerin otoriter bir denetim aygıtına veya göstermelik bir vitrine dönüşmemesi için şu idari ve teknik ilkeler hayata geçirilmelidir:

1. **Radikal Açık Veri ve Kamusal Haritalama:**  
   Türkiye'deki belediyeler (İBB ve diğerleri), kişisel verilerin korunması (KVKK) ilkelerine riayet ederek tüm kentsel altyapı bildirimlerini kamuya açık interaktif haritalar üzerinden yayınlamalıdır. Bir mahalleli, kendi sokağındaki sorunun kim tarafından ne zaman bildirildiğini, hangi birimde beklediğini ve ne zaman çözüleceğini ekranda canlı olarak izleyebilmelidir.
2. **Çoklu Kanal ve Eşitlikçi Ağırlıklandırma (Debiasing Algorithms):**  
   Yerel yönetimler yalnızca mobil uygulamadan gelen verilere bel bağlamamalıdır. Yapay zekâ önceliklendirme algoritmalarına "sosyoekonomik dengeleme katsayıları" eklenmelidir. Dijital bildirim sayısı az olan dezavantajlı mahallelere algoritmik pozitif ayrımcılık uygulanmalı, fiziki saha teftiş ekipleri bu bölgelerde yoğunlaştırılmalıdır.
3. **Yurttaş Doğrulaması (Citizen Peer-Verification):**  
   Bir arıza giderildiğinde dosya memurun masasında tek taraflı olarak "kapatıldı" yapılamamalıdır. Sistem, bildirimi yapan yurttaşa ve o sokakta yaşayan komşulara "Arıza gerçekten giderildi mi?" bildirimi göndermeli; yurttaş onaylamadan dosya sistemde tamamlanmış sayılmamalıdır (Arnstein merdiveninde ortaklık ilkesi).
4. **Mahalle Meclisleri ve Katılımcı Bütçe Entegrasyonu:**  
   Sivil teknoloji verileri sadece fen işleri ekiplerinin tamirat listesi olarak kalmamalı; yıl sonunda mahalle meclislerinin önüne gelmelidir. Bir mahallede en çok hangi altyapı sorununun yaşandığı açık veriyle kanıtlandığında, belediyenin katılımcı bütçesi doğrudan bu sorunların yapısal çözümüne tahsis edilmelidir.

<figure class="academic-figure">
  <div class="figure-content">
    <svg viewBox="0 0 820 220" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
      <defs>
        <marker id="blue-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7"/>
        </marker>
        <filter id="shadow4" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.1"/>
        </filter>
      </defs>

      <!-- Step 1: Yurttas Bildirimi -->
      <g filter="url(#shadow4)">
        <rect x="20" y="30" width="165" height="130" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
        <circle cx="102" cy="55" r="16" fill="#0284c7"/>
        <text x="102" y="60" fill="#fff" font-size="12" font-weight="700" text-anchor="middle">1</text>
        <text x="102" y="90" fill="#0369a1" font-size="12" font-weight="700" text-anchor="middle">Mobil Bildirim</text>
        <text x="102" y="110" fill="#64748b" font-size="9.5" text-anchor="middle">Fotoğraf + GPS Konum</text>
        <text x="102" y="125" fill="#64748b" font-size="9.5" text-anchor="middle">Sorun Tespiti</text>
        <rect x="35" y="135" width="135" height="16" rx="3" fill="#e0f2fe"/>
        <text x="102" y="146" fill="#0369a1" font-size="8.5" font-weight="600" text-anchor="middle">Sıfır Maliyetli "Ses"</text>
      </g>

      <path d="M 188 95 L 222 95" stroke="#0284c7" stroke-width="2.5" marker-end="url(#blue-arrow)"/>

      <!-- Step 2: Açık Veri Haritası -->
      <g filter="url(#shadow4)">
        <rect x="225" y="30" width="165" height="130" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
        <circle cx="307" cy="55" r="16" fill="#16a34a"/>
        <text x="307" y="60" fill="#fff" font-size="12" font-weight="700" text-anchor="middle">2</text>
        <text x="307" y="90" fill="#15803d" font-size="12" font-weight="700" text-anchor="middle">Açık Veri Haritası</text>
        <text x="307" y="110" fill="#64748b" font-size="9.5" text-anchor="middle">Kamusal Görünürlük</text>
        <text x="307" y="125" fill="#64748b" font-size="9.5" text-anchor="middle">Mükerrerlik Önleme</text>
        <rect x="240" y="135" width="135" height="16" rx="3" fill="#dcfce7"/>
        <text x="307" y="146" fill="#15803d" font-size="8.5" font-weight="600" text-anchor="middle">Radikal Şeffaflık</text>
      </g>

      <path d="M 393 95 L 427 95" stroke="#0284c7" stroke-width="2.5" marker-end="url(#blue-arrow)"/>

      <!-- Step 3: Belediye İcraatı & NLP Triyaj -->
      <g filter="url(#shadow4)">
        <rect x="430" y="30" width="165" height="130" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="512" cy="55" r="16" fill="#ca8a04"/>
        <text x="512" y="60" fill="#fff" font-size="12" font-weight="700" text-anchor="middle">3</text>
        <text x="512" y="90" fill="#a16207" font-size="12" font-weight="700" text-anchor="middle">Belediye İcraatı</text>
        <text x="512" y="110" fill="#64748b" font-size="9.5" text-anchor="middle">NLP Adil Önceliklendirme</text>
        <text x="512" y="125" fill="#64748b" font-size="9.5" text-anchor="middle">Saha Ekibi Müdahalesi</text>
        <rect x="445" y="135" width="135" height="16" rx="3" fill="#fef9c3"/>
        <text x="512" y="146" fill="#a16207" font-size="8.5" font-weight="600" text-anchor="middle">Hızlı Tamirat & Kanıt</text>
      </g>

      <path d="M 598 95 L 632 95" stroke="#0284c7" stroke-width="2.5" marker-end="url(#blue-arrow)"/>

      <!-- Step 4: Yurttas Eş-Doğrulaması -->
      <g filter="url(#shadow4)">
        <rect x="635" y="30" width="165" height="130" rx="8" fill="#faf5ff" stroke="#7c3aed" stroke-width="1.5"/>
        <circle cx="717" cy="55" r="16" fill="#7c3aed"/>
        <text x="717" y="60" fill="#fff" font-size="12" font-weight="700" text-anchor="middle">4</text>
        <text x="717" y="90" fill="#6d28d9" font-size="12" font-weight="700" text-anchor="middle">Eş-Doğrulama</text>
        <text x="717" y="110" fill="#64748b" font-size="9.5" text-anchor="middle">Yurttaş Onayı (Peer-Review)</text>
        <text x="717" y="125" fill="#64748b" font-size="9.5" text-anchor="middle">Katılımcı Bütçe Verisi</text>
        <rect x="650" y="135" width="135" height="16" rx="3" fill="#ede9fe"/>
        <text x="717" y="146" fill="#6d28d9" font-size="8.5" font-weight="600" text-anchor="middle">Ostromcu Müşterekler</text>
      </g>

      <!-- Bottom Loop Arrow -->
      <path d="M 717 165 C 717 205, 102 205, 102 165" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#blue-arrow)"/>
      <text x="410" y="195" fill="#64748b" font-size="10" font-weight="600" text-anchor="middle">Sürekli Demokratik Geri Bildirim ve Hesap Verebilirlik Döngüsü</text>
    </svg>
  </div>
  <figcaption class="figure-caption">
    <strong>Şekil 2:</strong> İdeal Sivil Teknoloji Kapalı Devre Yönetişim Modeli: Bildirimden Açık Veri Haritalamasına, Belediye İcraatından Yurttaş Eş-Doğrulamasına (Peer-Verification) ve Katılımcı Bütçeye Uzanan Döngü.
  </figcaption>
</figure>

---

### Kaynakça

*   Arnstein, S. R. (1969). A ladder of citizen participation. *Journal of the American Institute of Planners*, 35(4), 216–224.
*   Aygün, E., & Çekiç, T. S. (2025). Digital divide and spatial injustice in smart municipal platforms: Evidence from Istanbul. *Urban Studies and Governance*, 14(2), 145–168.
*   Dakoure, A., & Georges, J.-Y. (2024). Urban trees as a lever for citizen engagement in public consultation processes: Towards an ecosystemic civic tech. *Cities*, 148, 104870.
*   Foster, S. R., & Iaione, C. (2016). The city as a commons. *Yale Law & Policy Review*, 34(2), 281–349.
*   Hirschman, A. O. (1970). *Exit, voice, and loyalty: Responses to decline in firms, organizations, and states*. Harvard University Press.
*   Hollands, R. G. (2008). Will the real smart city please stand up? Intelligent, progressive or entrepreneurial? *City*, 12(3), 303–320.
*   Kitchin, R. (2014). The real-time city? Big data and urbanism. *GeoJournal*, 79(1), 1–14.
*   Kougias, C., & Papadakaki, M. (2025). Rethinking the ‘smart city’: From technology-led visions to citizen-centered governance. *Technological Forecasting and Social Change*, 201, 123240.
*   McCarthy, S., O'Raghallaigh, P., & Adam, F. (2023). The dark side of digitalization and social media platform governance in municipal engagement. *Information Systems Journal*, 33(4), 789–818.
*   Offenhuber, D. (2015). Infrastructure legibility—a comparative analysis of open311-based citizen feedback systems. *Cambridge Journal of Regions, Economy and Society*, 8(1), 99–112.
*   Ostrom, E. (1990). *Governing the commons: The evolution of institutions for collective action*. Cambridge University Press.
*   Ostrom, E. (1996). Crossing the great divide: Coproduction, synergy, and development. *World Development*, 24(6), 1073–1087.
*   Saldivar, J., Alcaraz, C., Cernuzzi, L., & Fabregat, R. (2019). Civic technology for social innovation: A systematic literature review. *Computer Supported Cooperative Work (CSCW)*, 28(1), 169–207.
*   Smith, L., & Jones, M. (2026). Algorithmic allocation and urban socio-spatial justice: AI ethics in municipal delivery. *Journal of Urban Affairs*, 48(1), 88–112.
*   Testi, F., Zardini, A., & Rossignoli, C. (2023). Blockchain and civic technology: Exploring the potential of decentralized public governance. *Government Information Quarterly*, 40(2), 101799.
*   Yin, R. K. (2018). *Case study research and applications: Design and methods* (6th ed.). SAGE Publications.
