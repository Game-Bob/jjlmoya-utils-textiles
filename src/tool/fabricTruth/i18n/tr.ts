import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'tekstil-gercekleri-elyaf-analizi';
const title = 'Tekstil Gerçekleri: Elyaf Kalite Analizi';
const description = 'Giysilerinizin kompozisyonunu analiz ederek gerçek kalitesini keşfedin. Gerçek pamuk mu yoksa pahalı plastik mi? Bilimsel elyaf analizi.';

const faqData = [
  {
    question: 'Modada "Greenwashing" nedir?',
    answer: 'Markaların "Ekolojik" veya "Sürdürülebilir" gibi terimleri gerçek bir kanıt olmaksızın pazarlama amacıyla kullanma tekniğidir. Gerçek elyaf kompozisyonunu analiz etmek, bir giysinin gerçekten doğal mı yoksa sentetik mi olduğunu doğrulamanın tek yoludur.',
  },
  {
    question: 'Polyester neden genellikle pamuktan daha düşük kaliteli kabul edilir?',
    answer: 'Polyester bir plastiktir (PET). Dayanıklı olmasına rağmen nefes almaz, bakteriler nedeniyle kötü koku oluşumunu tetikler ve her yıkamada mikroplastik üretir. Pamuk veya keten gibi doğal lifler daha iyi ısıl dengeleme sunar.',
  },
  {
    question: 'Giysilerimin elastan içermesi kötü mü?',
    answer: 'Küçük miktarlarda (%1-5), elastan (Lycra) konfor ve uyum sağlar. Ancak, plastik ile doğal lifleri karıştırarak giysinin geri dönüştürülmesini son derece zorlaştırır; bu da genellikle bir "hızlı moda" (fast fashion) ürününün göstergesidir.',
  },
  {
    question: 'Etiketinden yüksek kaliteli bir giysi nasıl anlaşılır?',
    answer: 'Tek malzemeli kompozisyonlara (%100 Pamuk, %100 Yün) bakın. Karmaşık karışımlar genellikle üretim maliyetlerini düşürmek için kullanılır ve sentetik lifleri cazip ticari isimler altında gizler.',
  },
];

const howToData = [
  {
    name: 'İç etiketi bulun',
    text: 'Giysinizin genellikle iç yan tarafında veya yakasında bulunan beyaz kompozisyon etiketini arayın.',
  },
  {
    name: 'Bileşenleri tanımlayın',
    text: 'Her bir elyafın yüzdesini okuyun (örn. %70 Pamuk, %30 Polyester).',
  },
  {
    name: 'Verileri analizöre girin',
    text: 'Teknik bir kalite puanı elde etmek için elyaf oranlarını aracımıza yazın.',
  },
  {
    name: 'Teşhisi yorumlayın',
    text: 'Giysinizin nefes alabilir, dayanıklı olup olmadığını veya sentetik kompozisyonu nedeniyle özel bakım gerektirip gerektirmediğini anlamak için oluşturulan raporu inceleyin.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description: description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description: description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Tekstil Gerçekleri',
    addFiber: 'Elyaf Ekle',
    total: 'Toplam',
    composition: 'Kompozisyon Analizi',
    description: 'Giysinizin kalitesi hakkındaki gerçeği keşfetmek için yüzdeleri tam olarak etiketinde göründüğü gibi girin.',
    verdict: 'Karar',
    breathability: 'Nefes Alabilirlik',
    durability: 'Dayanıklılık',
    warmth: 'Sıcaklık',
    careWarning: 'Özel Bakım Uyarısı',
    specialCareWarning: 'STANDART YIKAMA: Daima fiziksel etiketteki talimatları izleyin.',
    validationError: 'Kararı görmek için kompozisyon toplamı tam olarak %100 olmalıdır',
    actualTotal: 'Mevcut',
    missingLabel: 'eksik',
    disclaimer: 'Nefes alabilirlik, dayanıklılık ve sıcaklık verileri, her bir elyaf türü için endüstri ortalamalarına dayalı tahminlerdir.',
    careWarnings: {
      delicate: 'ÇOK HASSAS: Soğuk suda elde yıkayın. Kurutma makinesi kullanmayın. Sertçe sıkmaktan kaçının.',
      wool: 'YÜNLER / DEĞERLİ TÜYLER: Özel programda soğuk yıkayın. Deformasyonu önlemek için düz bir zeminde kurutun. Kurutma makinesi kullanmayın.',
      linen: 'KETEN: Çok fazla kırışma eğilimindedir. En iyi sonuçlar için hafif nemli ütüleyin.',
      semisynthetic: 'YARI SENTETİKLER: Islakken zayıflar. Dikkatli davranın ve sert santrifüj yapmayın.',
      standard: 'STANDART YIKAMA: Daima fiziksel etiketteki talimatları izleyin.',
    },
    fiberData: {
      cotton: {
        name: 'Pamuk',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Keten',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Yün / Merino',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'İpek',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Kaşmir',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: 'Tiftik (Mohair)',
        family: 'natural',
        breathability: 8,
        durability: 9,
        warmth: 9,
        isNoble: true,
      },
      angora: {
        name: 'Angora',
        family: 'natural',
        breathability: 8,
        durability: 4,
        warmth: 10,
        isNoble: true,
      },
      alpaca: {
        name: 'Alpaka',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: 'Polyester',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: 'Viskon / Rayon',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'Naylon (Poliamid)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: 'Akrilik',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: 'Pahalı Plastik',
        description: 'Bu giysinin çoğu petroldür. Terlemeye ve hızlı tüylenmeye (pilling) hazırlıklı olun.',
      },
      hook: {
        label: 'Pazarlama Tuzağı',
        description: 'O küçük yüzdeye sahip değerli elyaf, sadece etikete yazılmak için oradadır. Faydasını fark etmeyeceksiniz.',
      },
      fragile: {
        label: 'Yumuşak ama Kırılgan',
        description: 'Dokunuşu çok hoş ama yıkarken dikkat: Kolayca deforme olma ve çekme eğilimindedir.',
      },
      natural: {
        label: 'Doğal Kalite',
        description: 'Nefes alabilir ve dayanıklı giysi. Hassas ciltler ve uzun süreli kullanım için idealdir.',
      },
      technical: {
        label: 'Teknik / Ultra Sentetik Giysi',
        description: 'Özel bir spor kıyafeti değilse, saf plastik için ödeme yapıyorsunuz.',
      },
      luxury: {
        label: 'Gerçek Lüks',
        description: 'Konfor ve dayanıklılığa yapılan bir yatırım. Ona hak ettiği saygıyla davranın.',
      },
      balanced: {
        label: 'Dengeli Karışım',
        description: 'Muhtemelen maliyet ve dayanıklılığı dengelemeyi amaçlayan fonksiyonel bir kombinasyon.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'Etiketin Arkasındaki Gerçek: Tekstil Kompozisyonu Ana Rehberi', level: 2 },
    { type: 'paragraph', html: 'Hiç o marka tişörtün sizi neden bu kadar çok terlettiğini veya o "yün" kazağın neden dayanılmaz bir şekilde kaşındırdığını merak ettiniz mi? Cevap tasarımda değil, liflerinin kimyasında gizlidir.' },
    { type: 'paragraph', html: '<strong>Hızlı Moda</strong> (Fast Fashion) tarafından domine edilen bir dünyada, kumaş kalitesi geçici estetiğin gerisinde kalmıştır. Ancak tekstil kompozisyonunu anlamak, akıllı, kalıcı ve cildinize saygılı bir alışveriş yapmanın tek yoludur. <strong>Tekstil Gerçekleri</strong> aracımız, kaliteli bir giysiyle mi yoksa sadece işlenmiş bir plastik blokla mı karşı karşıya olduğunuzu ortaya çıkarmak için resmi yüzdeleri analiz eder.' },
    { type: 'title', text: 'Metodolojimiz', level: 2 },
    { type: 'paragraph', html: 'Avrupa ve Kuzey Amerika endüstri standartlarından çıkarılan üç temel sütuna dayalı ağırlıklı bir algoritma kullanıyoruz:' },
    { type: 'list', items: ['<strong>Nefes Alabilirlik:</strong> Elyafın su buharı ve hava geçişine izin verme kapasitesi.', '<strong>Dayanıklılık:</strong> Aşınmaya, çekilmeye ve <strong>tüylenme</strong> (pilling) oluşumuna karşı direnç.', '<strong>Isıl Verimlilik:</strong> Isı tutma veya mekanik serinlik sağlama kapasitesi.'] },
    { type: 'tip', title: 'Önemli', html: 'Yasalar, AB ve ABD\'de satılan tüm giysilerin bileşenlerini azalan yüzde sırasına göre listelemesini zorunlu kılar. Bir giysinin etiketi yoksa veya okunamaz durumdaysa şüphelenin: Muhtemelen minimum tekstil güvenlik standartlarını karşılamıyordur.' },
    { type: 'title', text: 'Perakendede Yaygın "Hileler"', level: 2 },
    { type: 'paragraph', html: 'Sıradan bir giysinin algılanan değerini artırmak için tasarlanmış çok rafine pazarlama teknikleri vardır. İşte bunları nasıl tespit edeceğiniz:' },
    { type: 'card', title: 'Değerli Elyaf Tuzağı', icon: 'mdi:alert', html: 'Büyük harflerle "KAŞMİRLİ" veya "İPEKLİ" yazan etiketler göreceksiniz. Kompozisyona baktığınızda %3 ipek ve %97 polyester olduğunu keşfedersiniz. O %3\'lük kısım yumuşaklık, parlaklık veya sıcaklık sağlamaz; sadece markanın fiyatı %20 artırabilmesine hizmet eder.' },
    { type: 'card', title: '"Ekolojik Viskon" Efsanesi', icon: 'mdi:leaf', html: 'Viskon selülozdan (odun) üretilmesine rağmen, mevcut üretim süreci genellikle aşırı kirleticidir ve nihai sonuç ıslanınca ciddi şekilde zayıflayan bir elyaftır. <strong>Lyocell</strong> veya <strong>Tencel</strong> olmadığı sürece dayanıklılığı sınırlıdır.' },
    { type: 'title', text: 'Kategorilere Göre Derinlemesine Analiz', level: 2 },
    { type: 'title', text: '1. Doğal Lifler (Gururla Organik)', level: 3 },
    { type: 'paragraph', html: 'Altın standarttır. Uzun elyaflı <strong>Pamuk</strong> (Pima veya Mısır pamuğu gibi) sonsuz yumuşaklık sunar. <strong>Keten</strong>, moeküler yapısı gereği ısıyı iten ve nemi emen yapısıyla bilimsel olarak sıcak havalar için en iyi elyaftır. <strong>Yün</strong> ve <strong>Kenevir</strong> (Hemp) doğal antibakteriyellerdir; koku tutmadıkları için çok sık yıkanmaları gerekmez.' },
    { type: 'title', text: '2. Yarı Sentetik Lifler (Hibrit)', level: 3 },
    { type: 'paragraph', html: 'Burada <strong>Viskon</strong>, <strong>Rayon</strong> ve <strong>Modal</strong> buluruz. İpek hissi verirler ama pamuk fiyatınadırlar. Çok dökümlü giysiler için mükemmeldirler ancak "susuzdurlar": Çok su emerler ve geç kururlar, bu da bakımı yapılmazsa küf oluşumuna zemin hazırlayabilir. <strong>Lyocell (Tencel)</strong>, kapalı çevrim üretim döngüsü ve daha yüksek direnciyle bu grubun premium ve sürdürülebilir versiyonudur.' },
    { type: 'title', text: '3. Sentetik Lifler (Eğrilmiş Plastikler)', level: 3 },
    { type: 'paragraph', html: '<strong>Polyester</strong> pazarın kralıdır. Ucuzdur, kırışmaz ve ölümsüzdür (kelimenin tam anlamıyla, doğada parçalanması 200 yıl sürer). Sorun nefes almamasıdır. Kumaş ile cildiniz arasında nemli bir mikro iklim yaratarak bakteriler için ideal bir üreme alanı oluşturur. <strong>Akrilik</strong>, yünün ucuz taklididir: Isıtır ancak çok fazla statik elektrik üretir ve iki yıkamada tüycüklerle dolar.' },
    { type: 'title', text: 'Tekstil Hayatta Kalma Tavsiyeleri', level: 2 },
    { type: 'paragraph', html: 'Dünyanın en iyi giysisi bile tek bir hatalı yıkamada mahvolabilir. İşte evrensel altın kurallar:' },
    { type: 'tip', title: 'Soğuk Su Dostunuzdur', html: 'Giysilerin %90\'ı 30°C\'den fazlasına ihtiyaç duymaz. Isı elastik lifleri bozar ve doğal lifleri çektirir.' },
    { type: 'tip', title: 'Az Çoktur (Deterjan)', html: 'Aşırı sabun, kirleri çeken ve kıyafetleri sertleştiren kalıntılar bırakır.' },
    { type: 'tip', title: 'Kurutma Makinesi: Sinsi Düşman', html: 'Kurutma filtresinde gördüğünüz havlar, sürtünme ve ısı nedeniyle giysilerinizden kopan parçalardır.' },
    { type: 'tip', title: 'Tersinden Yıkama', html: 'Rengi ve nakışları tamburla ve diğer giysilerle temastan korur.' },
    { type: 'paragraph', html: '"Az al, iyi seç ve uzun ömürlü kıl." — Bu analizör, bilinçli ve yüksek kaliteli bir gardıroba giden ilk adımınızdır.' },
  ],
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    {
      name: 'FTC - Tekstil Etiketleme Rehberi',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'Avrupa Komisyonu - Tekstil Düzenlemesi',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Tekstil Bakım Sembolleri',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
