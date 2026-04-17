import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'tekstil-leke-kimyasi-protokolu';
const title = 'Tekstil Leke Çıkarma Kimyasal Protokolü';
const description =
  'Lif türüne ve lekenin kimyasal yapısına göre leke çıkarma için bilimsel protokoller. Perkabanat, enzimler, çözücüler: her durum için doğru yöntem.';

const faqData = [
  {
    question: 'Perkarbonat yerine çamaşır suyu kullanabilir miyim?',
    answer:
      'Çamaşır suyu (sodyum hipoklorit) son derece aşındırıcıdır. Lifleri bozarak sararmalarına ve kırılgan hale gelmelerine neden olur. Perkarbonat aktif oksijen yoluyla ağartma yapar ve doğal moleküler yapıyı korur.',
  },
  {
    question: 'Sirke neden kokulara yardımcı olur?',
    answer:
      'Vücut kokuları genellikle alkalidir. Sirkedeki asetik asit bunları nötralize ederek, durulama sırasında tamamen yok olan kokusuz tuzlara dönüştürür.',
  },
  {
    question: 'Kan lekesi için her zaman soğuk su mu kullanmalıyım?',
    answer:
      'Evet. Isı kan proteinlerini pıhtılaştırarak lekenin life kalıcı olarak sabitlenmesine neden olur. Soğuk su lekeyi çözünür durumda tutar ve enzimatik ajanların etkili bir şekilde çalışmasını sağlar.',
  },
  {
    question: 'Asetat bir giysiye aseton sürersem ne olur?',
    answer:
      'Aseton, triasetat ve asetatı çözer. Asetat lifleri asetik asit ile esterlenmiş selülozdur ve asetonda tamamen çözünürler. Sonuç, kumaşın geri dönülemez şekilde tahrip olması olacaktır.',
  },
];

const howToData = [
  {
    name: 'Lif türünü belirleyin',
    text: 'Giysinin iç etiketine bakarak doğal lif, sentetik mi yoksa değerli lif (yün, ipek, kaşmir) mi olduğunu öğrenin.',
  },
  {
    name: 'Araçta lif türünü seçin',
    text: 'İlk seçiciden ilgili materyali seçin.',
  },
  {
    name: 'Leke türünü seçin',
    text: 'Lekenin organik (şarap, meyve), protein (kan), yağlı veya sentetik (mürekkep) olup olmadığını belirtin.',
  },
  {
    name: 'Belirtilen protokolü uygulayın',
    text: 'Ajan, sıcaklık ve yöntem talimatlarını izleyin. Kritik uyarı notlarına özellikle dikkat edin.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Leke Kimyası Protokolü',
    fiberLabel: '1. Lif Türü',
    selectFiberPlaceholder: 'Kumaş seçin...',
    stainLabel: '2. Leke',
    selectStainPlaceholder: 'Ne oldu?',
    molecularDiagnosis: 'Moleküler Teşhis',
    requiredAgent: 'Gerekli Ajan',
    thermalCondition: 'Termal Koşul',
    temperature: 'Sıcaklık',
    cleaningInstructions: 'Temizlik Talimatları',
    criticalWarning: 'Kritik Dikkat',
    criticalWarningLabel: 'DİKKAT',
    technicalNote: 'Teknik not',
    technicalNoteText:
      'Tam kimyasal işleme geçmeden önce boya dayanıklılığını her zaman görünmeyen bir bölgede doğrulayın.',
    systemDiagnosis: 'Teşhis Sistemi',
    systemDiagnosisDesc:
      'Temizlik yol haritasını almak için tekstil parametrelerini yapılandırın',
    delicatePercarbonateWarning:
      'MOLEKÜLER BOZULMA RİSKİ. Hayvansal lifler perkarbonata karşı son derece hassastır. Görünmeyen bölgede test yapın.',
    fiberData: {
      cotton: { name: 'Pamuk', family: 'natural', isNoble: false },
      linen: { name: 'Keten', family: 'natural', isNoble: true },
      wool: { name: 'Yün / Merinos', family: 'natural', isNoble: true },
      silk: { name: 'İpek', family: 'natural', isNoble: true },
      cashmere: { name: 'Kaşmir', family: 'natural', isNoble: true },
      mohair: { name: 'Moher', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpaka', family: 'natural', isNoble: true },
      polyester: { name: 'Polyester', family: 'synthetic', isNoble: false },
      viscose: { name: 'Viskon / Rayon', family: 'artificial', isNoble: false },
      nylon: { name: 'Naylon (Poliamid)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Akrilik', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Sodyum Perkarbonat',
        description: 'Biyolojik olarak parçalanabilen oksijenli ağartıcı. Çözündüğünde aktif oksijen salar.',
        warning: 'Yüksek konsantrasyonlarda protein liflerinden (ipek, yün) kaçının.',
      },
      isopropyl: {
        name: 'İzopropil Alkol',
        description: 'Pigmentler ve hafif yağlar için etkili çözücü.',
        warning: 'Seyreltilmezse ipeklerdeki parlaklığa zarar verebilir ve bazı akrilikleri çözebilir.',
      },
      acetone: {
        name: 'Aseton',
        description: 'Laklar ve yapıştırıcılar için güçlü çözücü.',
        warning: 'Asetat ve triasetatlarda YASAK (lifi çözer).',
      },
      enzyme: {
        name: 'Enzimatik Deterjan',
        description: 'Biyolojik lekeleri parçalayan proteazlar içerir.',
        warning: 'Yün ve ipek üzerinde (bunlar proteindir) dikkatli kullanın.',
      },
      vinegar: {
        name: 'Beyaz Sirke',
        description: 'Kokuları nötralize etmek ve renkleri sabitlemek için hafif asetik asit.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Kırmızı Şarap / Meyve',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Uzun süreli bekletme' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Doğrudan macun' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Soğuk',
            method: 'Madensuyu ve sirke ile durulama',
            notes: 'Ovalamayın',
          },
        },
      },
      {
        id: 'blood',
        name: 'Kan',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Soğuk',
            method: 'Tuzlu suda bekletme ve ardından enzim',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Soğuk', method: 'Doğrudan uygulama' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Soğuk',
            method: 'Hemen durulama, ısıdan kaçınma',
          },
        },
      },
      {
        id: 'grease',
        name: 'Yağ / Gres',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Alkolle çözme ve ardından yıkama',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Altına emici kağıt koyma',
          },
          delicate: { agentId: 'isopropyl', temperature: 'Soğuk', method: 'Alkolü %50 seyreltme' },
        },
      },
      {
        id: 'ink',
        name: 'Mürekkep / Markör',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Oda Sıcaklığı',
            method: 'Dıştan içe doğru tampon yapma',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Oda Sıcaklığı',
            method: 'Dağılmaya karşı dikkatli olun',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Soğuk',
            method: 'Seyreltme ve gizli bölgede test etme',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Tekstil Temizliğinin Arkasındaki Kimya',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Her leke aynı değildir ve her lif aynı kimyasal ajanlara aynı tepkiyi vermez. Bir giysiyi kurtarmakla yok etmek arasındaki fark, lekenin moleküler yapısını ve lifin yapısını anlamaktan geçer.',
    },
    {
      type: 'card',
      title: '01 — Kontrollü Oksidasyon',
      icon: 'mdi:atom',
      html: '<strong>Sodyum perkarbonat</strong>, kromoforların (lekenin renginden sorumlu moleküller) çift bağlarını kopararak onları renksiz ve suda çözünür hale getiren aktif oksijen salar. Organik lekeler için en etkili yöntemdir.',
    },
    {
      type: 'card',
      title: '02 — Çözücülerle Çözünürlük',
      icon: 'mdi:flask-outline',
      html: 'Yağ veya mürekkep gibi lekeler suda çözünmezler. <strong>İzopropil alkol</strong> veya <strong>aseton</strong> gibi çözücüler yüzey gerilimini azaltır ve lekenin polar olmayan moleküllerini çekerek bir destek ortamına aktarılmalarını sağlar.',
    },
    {
      type: 'title',
      text: 'Lifler Üzerindeki Hakimiyet: Tür Neden Önemlidir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Her lif aynı şekilde "yemez". <strong>İpek ve yün</strong> proteindir (fibroin ve keratin). Kontrolsüz bir şekilde "protein yemek" için tasarlanmış (kan veya yumurta lekeleri) bir enzimatik deterjan uygularsanız, deterjan lifin kendisini bozmaya başlayarak kumaşın parlaklığını ve yapısını bozar.',
    },
    {
      type: 'title',
      text: 'Isı Tehlikesi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En yaygın hatalardan biri bir kan lekesini "yumuşatmak" için sıcak su kullanmaktır. Kimyasal olarak ısı, lekenin <strong>proteinlerinin pıhtılaşmasına</strong> neden olarak onları lifin gözenekli yapısına kalıcı olarak sabitler. Protein lekeleri her zaman soğuk suyla işlenmelidir.',
    },
    {
      type: 'tip',
      title: 'Acil Durum Protokolü: Kırmızı Şarap',
      html: '<strong>A. Pasif emilim:</strong> Emici kağıtla tampon yapın, mekanik genişlemeyi önlemek için asla ovalamayın.<br><strong>B. Ozmotik nötralizasyon:</strong> Sıvıyı lif çekirdeğinden dışarı çekmek için ince tuzla kaplayın.<br><strong>C. Kimyasal işlem:</strong> Lif ısıya dayanıklıysa 40°C\'de perkarbonat ve su karışımından oluşan bir macun uygulayın.',
    },
    {
      type: 'title',
      text: 'Spesifik Çözücüler ve Önlemler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Aseton</strong>, tırnak cilaları veya yapıştırıcılar için olağanüstü bir çözücüdür ancak <strong>asetat</strong> için yıkıcıdır. Selüloz türevi lifler olmalarına rağmen kimyasal işlem gördükleri için aseton kumaşı kelimenin tam anlamıyla çözer.',
    },
    {
      type: 'paragraph',
      html: '<strong>İzopropil alkol</strong> daha stabildir ancak boyalı sentetiklerde pigmentin kendisini sürükleyebilir. Ana işlemden önce her zaman görünmeyen bir bölgede "kenar kıvrımı testi" yapılmasını öneririz.',
    },
  ],
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    {
      name: 'AATCC - Association for Advancing Color Technology and Chemistry',
      url: 'https://www.aatcc.org',
    },
    {
      name: 'Kissa, E. — Textile Auxiliaries',
      url: 'https://www.springer.com/gp/book/9783642057328',
    },
    {
      name: 'ISO 105 — Textiles: Tests for Colour Fastness',
      url: 'https://www.iso.org/standard/72682.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
