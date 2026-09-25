# Talha Nuri Yılmaz · Kişisel site ve yönetim paneli

Ziyaretçi sitesi GitHub Pages'te; özel yönetim paneli Cloudflare Worker ve D1 üzerinde çalışır. Yerel bilgisayar veya Cloudflare Tunnel gerekmez.

Canlı adresler: [site](https://talhayilmaz.xyz/) ve [yönetim paneli](https://admin.talhayilmaz.xyz/). 25 Eylül 2026'da GitHub girişinden kaydetme ve yayınlamaya, görsel yüklemeden canlı proje sayfasına kadar akış doğrulandı. Masaüstündeki `Site_Yonetim_Paneli.bat` ve proje içindeki `baslat_admin_uzaktan.bat` artık yönetim adresini açar.

## Kaynak ve yayın ayrımı

- `content/site.json`: GitHub'daki yayımlanmış içerik, profil, projeler ve sayfa düzeni.
- `shared/`: Site ve admin önizlemesinin ortak bileşenleri, tasarım ve içerik doğrulaması.
- `admin/`: React yönetim arayüzü. Yazı, tablo/görsel, proje, tasarım ve sürüm geçmişi yönetimi.
- `worker/`: GitHub girişi, özel taslaklar, medya, yayın API'si ve veritabanı şeması.
- `dist/`: Yalnızca herkese açık derleme çıktısı; GitHub Pages'e yüklenen tek dizin.
- Kök dizindeki eski HTML'ler ve `makale/*.md` geçmiş kaynaklardır. Yeni derleyici bunları değiştirmez ve yayın kaynağı olarak kullanmaz. İçerik düzenlemenin tek kaynağı panel veya `content/site.json` olmalıdır.

Taslaklar ve geçmiş sürümler D1'de özel kalır. Kullanıcı “Yayınla” dediğinde yalnız yayıma dahil yazılar ve referans verilen medya GitHub'a aktarılır. Medya 512 KiB parçalarla D1'de tutulur; hesapta R2 etkin olmadığı için yeni bir R2 aboneliği açılmaz. Dosya başına sınır 10 MB'dir; PNG, JPEG, WebP ve PDF desteklenir.

## Yerel geliştirme

Node 22 ve Python 3.12+:

```powershell
npm ci
python -m pip install -r requirements.txt
npm run types
npm run check
npm test
python build_full_site.py
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Yerel admin için git dışında kalan `.dev.vars` dosyasına `LOCAL_DEV=1` yazın. Bu ayarı üretime secret/variable olarak eklemeyin. Yerel bypass yalnız loopback hostname ile çalışır.

```powershell
npx wrangler d1 migrations apply talha-site-admin --local
npm run build:admin
npx wrangler dev --port 8787 --ip 127.0.0.1
```

Panel: `http://127.0.0.1:8787`. `python scripts/test_local_api.py` sadece bu yerel oturumda kayıt/sürüm testleri yapar; canlıya içerik göndermez.

## Bir defalık canlı kurulum

1. `wrangler whoami` ile hesabı doğrulayın. Kimlik bilgilerini depo dışında, işletim sistemi anahtarlığında tutun.
2. D1 veritabanını oluşturun; gerçek kimliği `wrangler.jsonc` içine yazın ve uzak migrations uygulayın.
3. `npm run deploy:admin` yönetim uygulamasını kurar. Custom domain `admin.talhayilmaz.xyz`.
4. `python scripts/setup_github_app.py` ile loopback kurulum sayfasını açın. GitHub App için Contents write, Actions read, Metadata read yeterlidir. Uygulamayı yalnız `talhayilmaz.xyz` deposuna kurun. Kurulum yardımcısı özel anahtarı ve client secret'ı doğrudan Worker secrets'a gönderir; dosyaya yazmaz.
5. Kurulum kimliğini `GITHUB_INSTALLATION_ID` olarak ayarlayıp Worker'ı yeniden deploy edin. `GITHUB_CLIENT_ID` ve `GITHUB_APP_ID` herkese açık uygulama kimlikleridir. `GITHUB_CLIENT_SECRET` ve `GITHUB_PRIVATE_KEY` yalnız Wrangler secrets'ta tutulur.
6. GitHub Pages yayın kaynağını GitHub Actions olarak ayarlayın. `site.yml`, `master` üzerindeki her değişiklikte yalnız başarılı derlemeyi yayımlar.

Admin'e yalnız GitHub kullanıcı kimliği `82741262` ile giriş yapılabilir. Kullanıcı adı değişiklikleri erişim kontrolünü değiştirmez. Worker varsayılan `workers.dev` adresi ve preview URL'leri kapalıdır.

## Kullanım

Kaydet: özel taslağı ve yeni geçmiş sürümünü oluşturur. Yayınla: seçili içeriği GitHub'a aktarır, derlemeyi izler. İki cihaz aynı sürümü düzenlerse ikinci kayıtta çakışma gösterilir. Geçmiş sürüm “taslak olarak aç” ile geri alınır; canlı siteyi değiştirmek için ayrıca kaydet/yayınla gerekir.

Girişteki hareketli ağ kavramsal bir çizimdir; sayısal araştırma bulgusu değildir. Animasyon, azaltılmış hareket tercihinde ve görünmeyen sekmede durur. Sayfa geçişleri tarayıcının View Transitions desteği varsa kullanılır; diğer tarayıcılarda normal bağlantılar çalışır.

PDF'ler Noto Sans (SIL OFL) gömülü fontlarıyla oluşturulur. Tablolar ve yüklenmiş görseller PDF'ye aktarılır. Uzaktaki görselleri doğrudan gömmek yerine medya kütüphanesine yükleyin. Proje ikonları mevcut yerel ürün kaynaklarından alınmıştır.

## Doğrulama ve geri dönüş

`scripts/check_site.py`: iç bağlantılar, PDF dosyaları, taslakların dışlanması, admin/kaynak dosyalarının dağıtım paketinde bulunmaması.

`npm test`: içerik doğrulaması, tekrarlı/geçersiz slug, zararlı bağlantı ve Markdown temizliği. API testleri: aynı-origin kontrolü, sürüm çakışması, kalıcılık, geçmişi açma ve eksik yayın kimlik bilgileri.

İlk düzenlemeden önce tam yerel yedek proje dizininin yanında `talhayilmaz.xyz-backup-20260924-140007` olarak alınmıştır. Canlı sürümü geri almak için önceki başarılı Git commit'ine bir revert commit'i oluşturup aynı workflow'u çalıştırın. Veritabanı taslak geçmişini silmeyin.
