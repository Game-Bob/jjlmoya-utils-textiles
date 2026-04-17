import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'orgu-sisi-tig-donusturucu';
const title = 'Örgü Şişi ve Tığ Numara Dönüştürücü';
const description = 'Metrik (mm), US ve UK sistemleri arasında örgü şişi ve tığ numaralarını dönüştürün, iplik ve WPI önerilerini görün.';

const faqData = [
  {
    question: 'Neden farklı şiş numarası sistemleri var?',
    answer: 'Tarihsel olarak her ülke kendi sistemini geliştirmiştir. Metrik sistem (mm) en hassas uluslararası standarttır. US sistemi artan numaralandırma (0-50) kullanırken, UK sistemi ters numaralandırma kullanır: sayı ne kadar büyükse şiş o kadar incedir.',
  },
  {
    question: 'US sisteminde tığ ve şiş numaraları aynı mıdır?',
    answer: 'Tam olarak değil. ABD\'deki tığlar genellikle bir harfle ilişkilendirilir (örn. H-8) ve küçük kalınlıklarda spesifik varyasyonlar vardır. Ayrıca, ince iplikler için kullanılan çelik tığlar tamamen farklı bir numaralandırma kullanır.',
  },
  {
    question: 'Örneğimde tam karşılığı olmayan bir ölçü varsa hangi şişi seçmeliyim?',
    answer: 'Eğer bir model 7.0mm gibi bir ölçü istiyorsa ve sizin sisteminiz sadece 6.5mm ile 8.0mm arasındaysa, her zaman bir gerginlik örneği (gauge) yapmanız önerilir. 0.5mm\'lik bir fark, giysinin son boyutunu önemli ölçüde değiştirebilir.',
  },
  {
    question: 'WPI (Wraps Per Inch) nedir?',
    answer: 'Bir inçlik (2.54 cm) mesafeye sığan iplik sarım sayısıdır. Etiketsiz bir yünün kalınlığını belirlemek ve örmek için en uygun şişi seçmek için en güvenilir yöntemdir.',
  },
];

const howToData = [
  {
    name: 'İş tipini seçin',
    text: 'US sistemindeki doğru karşılıkları görmek için örgü (knitting) veya tığ işi (crochet) arasında seçim yapın.',
  },
  {
    name: 'Görsel seçicide boyutu seçin',
    text: 'Şiş veya tığ numaranıza karşılık gelen daireye tıklayın. Delikler, milimetre ölçüsüyle gerçek matematiksel orantıyı korur.',
  },
  {
    name: 'Karşılıkları okuyun',
    text: 'Milimetre, US boyutu ve UK boyutu gibi sonuçları, önerilen iplik kategorisi ve WPI değeriyle birlikte gerçek zamanlı olarak görün.',
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
  description,
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
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Örgü Şişi ve Tığ Teknik Kılavuzu: Sistemler, Kalibreler ve Karşılıklar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dijital modellerin küreselleşmesi, <strong>metrik desimal sistem</strong>, <strong>ABD standardı (US)</strong> ve <strong>Birleşik Krallık emperyal sistemi (UK)</strong> arasındaki farkları anlamayı zorunlu hale getirmiştir. Bu araç, üç sistem arasında dönüşüm yapar ve WPI yöntemiyle iplik önerileri sunar.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Çevrimdışı', label: 'İnternetsiz Çalışır', icon: 'mdi:wifi-off' },
        { value: 'Üçlü', label: 'Tam Senkronizasyon', icon: 'mdi:sync' },
        { value: 'WPI', label: 'İplik Analizi', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Uluslararası Sistemlerin Karmaşıklığı',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sistem', 'Hesaplama Temeli', 'Yaygın Bölge', 'Teknik Özellikler'],
      rows: [
        ['<strong>Metrik (mm)</strong>', 'mm cinsinden kesin çap', 'Avrupa / Uluslararası', 'En güvenilir ISO standardı. 0.25mm veya 0.50mm sabit artışlar.'],
        ['<strong>US (ABD)</strong>', 'Artan Numaralandırma', 'Kuzey Amerika', '0\'dan 50\'ye kadar numaralar kullanır. Tığ işinde sayılar harflerle eşleşir (B-1, G-6).'],
        ['<strong>UK (Emperyal)</strong>', 'Ters Numaralandırma', 'Birleşik Krallık / Avustralya', 'Tel çekme kalibresine dayanır. Sayı büyüdükçe şiş incelir (14 incedir, 0 kalındır).'],
      ],
    },
    {
      type: 'title',
      text: 'WPI Yöntemiyle İplik Belirleme',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / Dantel (18-22+ WPI):</strong> İpek veya moher danteller için ultra ince iplikler. 1.5mm ile 2.5mm arası şişler.',
        '<strong>Fingering / Baby (14-16 WPI):</strong> Çorap ve bebek kıyafetleri için standart. 2.75mm ile 3.25mm arası en uygun şişler.',
        '<strong>Sport / Fine (12-14 WPI):</strong> Orta-düşük kalınlıkta iplik, hafif ceketler için ideal. 3.5mm ile 3.75mm şişler.',
        '<strong>DK / Light Worsted (11-13 WPI):</strong> Piyasadaki en çok yönlü kalınlık. 4.0mm veya 4.5mm şişler.',
        '<strong>Worsted / Aran (9-10 WPI):</strong> Kışlık kazaklar için kalın iplik. 5.0mm ile 5.5mm şişler.',
        '<strong>Bulky / Chunky (7-8 WPI):</strong> Hızlı projeler için kalın yünler. 6.0mm ile 8.0mm şişler.',
        '<strong>Super Bulky (5-6 WPI):</strong> Dekorasyon veya atkılar için devasa lifler. 9.0mm ile 15.0mm şişler.',
      ],
    },
    {
      type: 'tip',
      title: 'Profesyonel Teknik: Çelik Tığ',
      html: '<p>Son derece ince merserize pamuk iplikler için bir tığ ailesi vardır. Bunlar <strong>Steel Hooks (Çelik Tığlar)</strong>dır. Numaralandırmaları özeldir ve terstir: #14 (0.6mm) bir çelik tığ, #00 (3.5mm) olan bir tanesinden çok daha incedir. Bu kalibreler için asla standart tabloyu kullanmayın.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Doğru kalibreyi seçmek için kontrol listesi',
      icon: 'mdi:check-circle-outline',
      badge: 'Teknik Doğrulama',
      html: '<p>Uzun süreli bir projeye başlamadan önce şu adımları izleyin:</p><ul><li><strong>Kişisel Gerginlik:</strong> Sıkı örüyorsanız 0.5mm büyütün. Gevşek örüyorsanız 0.5mm küçültün.</li><li><strong>Şiş Malzemesi:</strong> Kaygan iplikler için bambu; pürüzlü yünler için metal.</li><li><strong>Lif Türü:</strong> Pamuk esnemez; merino yünü bloklama ile genişler.</li><li><strong>Gerginlik Örneği:</strong> 10x10cm bir kare örün ve son ölçümü yapmadan önce yıkayın.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Metrik sistem evrenseldir ve üreticiler arasındaki yuvarlama hatalarını önler.',
          con: 'Pek çok eski ve tarihi model milimetre cinsinden ölçü içermez.',
        },
        {
          pro: 'US sistemi, Amerikan modelleri için standart boyutları hatırlamayı kolaylaştırır.',
          con: 'Tığ işindeki harfler markalar arasında her zaman tutarlı değildir.',
        },
        {
          pro: 'WPI sistemi, etiketsiz ipliklerin teknik ve profesyonel bir şekilde yeniden kullanılmasına olanak tanır.',
          con: 'Sonucun yanlış olmaması için çok titiz bir manuel ölçüm gerektirir.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'Gerçek kalibreyi doğrulamak için projeye başlamadan önce örülen örnek kare (10x10cm).' },
        { term: 'Hook Throat', definition: 'Tığın boyun kısmı. Derinliği, şişin ne kadar iplik yükü taşıyabileceğini belirler.' },
        { term: 'Block Testing', definition: 'Liflerin gevşemesi ve gerçek son boyutlarını ortaya çıkarması için örgünün nemlendirilmesi ve gerilmesi süreci.' },
      ],
    },
    {
      type: 'summary',
      title: 'Tekstil Projenizin Başarısı İçin Kritik Faktörler',
      items: [
        'Doğru şiş sadece boyutu değil, aynı zamanda giysinin sürtünmeye karşı dayanıklılığını da belirleyecektir.',
        'Amerikan veya İngiliz dergilerindeki modelleri saniyeler içinde doğrulamak için dönüştürücümüzü kullanın.',
        'Tam karşılığını bulamazsanız, gerginlik örneğinize dayanarak bir üst veya alt kalibreyi seçin.',
        'Tığ işi, aynı şişle yapılan örgüye göre yaklaşık %30 daha fazla iplik tüketir.',
        'Optimum kayma hızını korumak için metal şişlerinizi düzenli olarak temizleyin.',
      ],
    },
  ],
  ui: {
    labelSystem: 'ÇALIŞMA SİSTEMİ',
    modeKnitting: 'Örgü',
    modeCrochet: 'Tığ İşi',
    calibratorLabel: 'HASSAS KALİBRATÖR (GERÇEK ÖLÇEK)',
    calibratorDesc: 'Karşılıkları gerçek zamanlı görmek için bir çap seçin. Delikler milimetre ölçüsüyle gerçek matematiksel orantıyı korur.',
    tagMetric: 'Metrik (mm)',
    tagUS: 'US Sistemi',
    tagUK: 'UK Sistemi',
    yarnLabel: 'İDEAL İPLİK KALINLIĞI',
    wpiFormat: '{wpi} WPI (İnç başına sarım)',
    tableSectionLabel: 'KARŞILIKLAR TEKNİK KATALOĞU',
    tableMetric: 'METRİK',
    tableUS: 'US BOYUTU',
    tableUK: 'UK / EMPERYAL',
    tableYarn: 'İPLİK KATEGORİSİ',
  },
};
