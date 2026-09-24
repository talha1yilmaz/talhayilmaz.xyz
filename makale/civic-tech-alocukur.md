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

```
                  +-------------------------------------------------------+
                  |         CİVİC TECH KATILIMCI YÖNETİŞİM SACAYAĞI       |
                  +-------------------------------------------------------+
                                              |
             +--------------------------------+-------------------------------+
             |                                |                               |
             v                                v                               v
    Sherry Arnstein                   Albert O. Hirschman              Elinor Ostrom
 [Katılım Merdiveni]                [Çıkış, Ses ve Sadakat]         [Kentsel Müşterekler]
  • Göstermelik Katılım (Tokenism)   • Yerel Tekel ve Çıkışsızlık    • Sokak/Altyapı = Müşterek
  • Yurttaş Denetimi (Control)       • "Ses" Olarak Mobil Bildirim   • Birlikte Üretim (Co-production)
  • İki Yönlü Müzakere               • Kurumsal Güven ve Sadakat     • Çok Merkezli Denetim
```

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

```
+-------------------------------------------------------------------------------------------------------------------------+
|                                    CİVİC TECH VE ŞİKAYET SİSTEMLERİ KARŞILAŞTIRMA MATRİSİ                               |
+----------------------+--------------------+---------------------+------------------------+------------------------------+
| Kriter               | FixMyStreet (UK)   | SeeClickFix (ABD)   | İBB Çözüm Merkezi (TR) | CİMER (Türkiye)              |
+----------------------+--------------------+---------------------+------------------------+------------------------------+
| Mülkiyet / Aktör     | Bağımsız STK       | Özel Şirket (SaaS)  | Büyükşehir Belediyesi  | Cumhurbaşkanlığı (Merkezi)   |
|                      | (mySociety)        | Kamu Sözleşmeli     | Kamu Kurumu            | Doğrudan İdari Vesayet       |
+----------------------+--------------------+---------------------+------------------------+------------------------------+
| Veri Şeffaflığı      | Tamamen Açık       | Kamuya Açık         | Kısmen Kapalı          | Tamamen Gizli                |
| (Public Visibility)  | Herkes tüm şikayet-| Harita üzerinden    | Sadece başvuran kendi  | Başvuran ve kurum hariç     |
|                      | leri haritada görür| kamuya açık izleme  | dosyasını takip eder   | üçüncü kişilere kapalı       |
+----------------------+--------------------+---------------------+------------------------+------------------------------+
| Teknik Standart      | Açık Kaynak / API  | Open311 Uyumlu      | Tescilli Kurumsal CRM  | Tescilli Devlet Yazılımı     |
|                      | Veri seti indirilir| Şehir ERP entegre   | Mobil Uygulama / AI    | Güvenlik/İstihbarat Entegre  |
+----------------------+--------------------+---------------------+------------------------+------------------------------+
| Arnstein Basamağı    | 6. Ortaklık        | 5. Yatıştırma /     | 4. Danışma /           | 3. Bilgilendirme /           |
|                      | (Yurttaş Gücü)     | 6. Ortaklık         | 5. Yatıştırma          | İdari Denetim (Vesayet)      |
+----------------------+--------------------+---------------------+------------------------+------------------------------+
| Başvuru Karakteri    | Kolektif / Kamusal | Kolektif / Kamusal  | Bireysel / Müşteri     | Bireysel / Şikayet-İhbar     |
|                      | Sivil Denetim      | Topluluk Odaklı     | Odaklı ("Beyaz Masa")  | Hiyerarşik Teftiş            |
+----------------------+--------------------+---------------------+------------------------+------------------------------+
```

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
