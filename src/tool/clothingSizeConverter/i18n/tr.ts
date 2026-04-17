import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'uluslararasi-giysi-beden-donusturucu';
const title = 'Uluslararası Giysi Beden Dönüştürücü';
const description =
  'EU, US, UK ve IT sistemleri arasında giysi bedenlerini dönüştürün. Erkek, kadın ve unisex tişörtler, pantolonlar, elbiseler ve ceketler için. Ölçü rehberi ve marka önerileri içerir.';

const faqData = [
  {
    question: 'EU beden ile US beden arasındaki fark nedir?',
    answer:
      'Avrupa (EU) bedenleri genellikle artan sayılar veya harfler (XS-XXL veya 32-52) kullanırken, ABD (US) bedenleri genellikle harfler veya pantolonlar için özel sayılar kullanır. Genel olarak, kadın giyiminde 36 EU beden, 4 US bedene eşittir.',
  },
  {
    question: 'Erkek veya kadın giyiminde bedenler değişir mi?',
    answer:
      'Evet, kesinlikle. Aynı ülkede bile, erkekler için 40 beden, kadınlar için 40 beden ile aynı değildir. Erkeklerin farklı oranları (daha geniş omuzlar) vardır, bu nedenle beden hesaplaması değişir.',
  },
  {
    question: 'Bir markada bir beden büyük mü yoksa küçük mü almam gerektiğini nasıl anlarım?',
    answer:
      'En iyi yol, diğer müşterilerin yorumlarını incelemektir. "Bana küçük geldi" veya "kalıbı geniş" gibi ifadeler çok yardımcıdır. Ayrıca o markanın spesifik ölçü tablosuna da danışın.',
  },
  {
    question: 'Beden dönüştürme tablosu ne kadar doğrudur?',
    answer:
      'Dönüştürme tablosu bir kılavuzdur. Genellikle doğru olsa da her markanın kendine özgü özellikleri vardır. Satın almadan önce daima ilgili mağazanın beden tablosunu kontrol edin.',
  },
  {
    question: 'Giysiler yıkandıktan sonra çeker mi?',
    answer:
      'Malzemeye bağlıdır. %100 pamuk, sıcak suda yıkanırsa ve kurutma makinesinde kurutulursa %5-10 oranında çekebilir. Sentetik malzemeler formlarını daha iyi korurlar. Daima yıkama talimatlarını inceleyin.',
  },
];

const howToData = [
  {
    name: 'Giysi Türünü ve Cinsiyeti Seçin',
    text: 'Giysi türünü (tişört, pantolon, elbise, ceket) ve ilgili cinsiyeti seçin.',
  },
  {
    name: 'Beden Sisteminizi Seçin',
    text: 'Bildiğiniz sistemi seçin: EU, US, UK veya IT.',
  },
  {
    name: 'Bedeninizi Seçin',
    text: 'Seçicide bedeninizi belirleyin veya tabloya tıklayın. Karşılıkları anında göreceksiniz.',
  },
  {
    name: 'Marka Rehberine Danışın',
    text: 'Satın alma işleminizi ayarlamak için o markanın kalıbının küçük, normal veya büyük olup olmadığını kontrol edin.',
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

const shirtsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '44' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '46' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '42' },
  ],
  unisex: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '34' },
    { EU: 'S', US: 'S', UK: 'S', IT: '36' },
    { EU: 'M', US: 'M', UK: 'M', IT: '38' },
    { EU: 'L', US: 'L', UK: 'L', IT: '40' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '42' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '44' },
  ],
};

const pantsData = {
  men: [
    { EU: '30', US: '30', UK: '30', IT: '44' },
    { EU: '32', US: '32', UK: '32', IT: '46' },
    { EU: '34', US: '34', UK: '34', IT: '48' },
    { EU: '36', US: '36', UK: '36', IT: '50' },
    { EU: '38', US: '38', UK: '38', IT: '52' },
    { EU: '40', US: '40', UK: '40', IT: '54' },
  ],
  women: [
    { EU: '32', US: '0', UK: '4', IT: '36' },
    { EU: '34', US: '2', UK: '6', IT: '38' },
    { EU: '36', US: '4', UK: '8', IT: '40' },
    { EU: '38', US: '6', UK: '10', IT: '42' },
    { EU: '40', US: '8', UK: '12', IT: '44' },
    { EU: '42', US: '10', UK: '14', IT: '46' },
  ],
  unisex: [],
};

const dressesData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
  ],
  women: [
    { EU: 'XS', US: '0-2', UK: '4-6', IT: '32-34' },
    { EU: 'S', US: '4-6', UK: '8-10', IT: '36-38' },
    { EU: 'M', US: '8-10', UK: '12-14', IT: '40-42' },
    { EU: 'L', US: '12-14', UK: '16-18', IT: '44-46' },
    { EU: 'XL', US: '16-18', UK: '20-22', IT: '48-50' },
  ],
  unisex: [],
};

const jacketsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '44' },
    { EU: 'S', US: 'S', UK: 'S', IT: '46' },
    { EU: 'M', US: 'M', UK: 'M', IT: '48' },
    { EU: 'L', US: 'L', UK: 'L', IT: '50' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '52' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
  ],
  unisex: [],
};

const measurementRanges = {
  shirts: [
    { size: 'XS', chest: 84, waist: 76, hip: 84 },
    { size: 'S', chest: 92, waist: 84, hip: 92 },
    { size: 'M', chest: 100, waist: 92, hip: 100 },
    { size: 'L', chest: 108, waist: 100, hip: 108 },
    { size: 'XL', chest: 116, waist: 108, hip: 116 },
    { size: 'XXL', chest: 124, waist: 116, hip: 124 },
  ],
  pants: [
    { size: '30', chest: 80, waist: 76, hip: 89 },
    { size: '32', chest: 85, waist: 81, hip: 94 },
    { size: '34', chest: 90, waist: 86, hip: 99 },
    { size: '36', chest: 95, waist: 91, hip: 104 },
    { size: '38', chest: 100, waist: 96, hip: 109 },
    { size: '40', chest: 105, waist: 101, hip: 114 },
  ],
  dresses: [
    { size: 'XS', chest: 80, waist: 72, hip: 88 },
    { size: 'S', chest: 88, waist: 80, hip: 96 },
    { size: 'M', chest: 96, waist: 88, hip: 104 },
    { size: 'L', chest: 104, waist: 96, hip: 112 },
    { size: 'XL', chest: 112, waist: 104, hip: 120 },
  ],
  jackets: [
    { size: 'XS', chest: 84, waist: 76, hip: 88 },
    { size: 'S', chest: 92, waist: 84, hip: 96 },
    { size: 'M', chest: 100, waist: 92, hip: 104 },
    { size: 'L', chest: 108, waist: 100, hip: 112 },
    { size: 'XL', chest: 116, waist: 108, hip: 120 },
  ],
};

export const content: ToolLocaleContent<ClothingSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    { name: 'ISO 3635: Giysi Bedenleri - Resmi Standart', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Giysi Beden Standartları - Wikipedia', url: 'https://tr.wikipedia.org/wiki/Beden_tablosu' },
    {
      name: 'Uluslararası Beden Dönüşümü - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Giysi Beden Dönüştürücü: Tam Rehber',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uluslararası mağazalardan alışveriş yapmak, bedenler uymadığında kafa karıştırıcı olabilir. <strong>Beden dönüştürücü</strong>, tişörtler, pantolonlar, elbiseler ve ceketler için EU, US, UK ve IT sistemlerinde mükemmel bedeninizi bulmanıza yardımcı olur.',
    },
    {
      type: 'title',
      text: 'Giysi bedenleri neden ülkeler arasında farklılık gösterir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tek bir uluslararası standart yoktur. Her bölge kendi sistemini geliştirmiştir; bu da yurt dışı mağazalarından veya Amazon ya da AliExpress gibi platformlardan alışveriş yaparken karışıklığa neden olur.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU Bedenleri (Avrupa):</strong> Artan sayıları (32, 34, 36...) veya harfleri kullanır. Almanya, Fransa ve çoğu kıta Avrupası ülkesinde en yaygın sistemdir.</span>',
        '<span><strong>US Bedenleri (ABD):</strong> Harfleri (XS, S, M, L) veya kadın pantolonları için sayıları (0, 2, 4, 6...) kullanır.</span>',
        '<span><strong>UK Bedenleri (Birleşik Krallık):</strong> EU sistemine benzer ancak kendi numaralandırması vardır ve genellikle US numaralandırmasından daha düşüktür.</span>',
        '<span><strong>IT Bedenleri (İtalya):</strong> Genel EU sisteminden sapmalar gösteren İtalyan numaralandırmasıdır.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Pro İpucu',
      html: 'Bedenler markalar arasında önemli ölçüde fark gösterir. Zara\'daki bir 38 beden, H&amp;M\'deki bir 38 bedenden farklı olabilir. Satın almadan önce daima mağazanın spesifik beden tablosuna danışın.',
    },
    {
      type: 'title',
      text: 'Vücudunuzu doğru şekilde nasıl ölçersiniz?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Doğru bir beden seçimi garanti etmek için vücudunuzu esnek bir mezura ile ölçün. Vücudun en geniş olduğu günün sonunda ölçüm yapın.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Göğüs:</strong> Göğsün en geniş kısmı etrafında, mezurayı kolların altından geçirerek ölçün.</span>',
        '<span><strong>Bel:</strong> Karnınızı yapay olarak içeri çekmeden göbek deliği hizasında ölçün.</span>',
        '<span><strong>Basen:</strong> Mezurayı yere paralel tutarak basenlerin en geniş kısmı etrafında ölçün.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Markaya Göre Kalıp Rehberi',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Düzenli bedenler. Zara\'daki bir 36 beden, standart ölçüler için genellikle güvenilirdir.</span>',
        '<span><strong>H&amp;M:</strong> Büyük gelme eğilimindedir. Normalden bir beden küçük almayı düşünün.</span>',
        '<span><strong>Uniqlo:</strong> Özellikle temel parçalarda genellikle küçük gelir. Bir beden büyük alınması önerilir.</span>',
        '<span><strong>Nike / Adidas:</strong> Sportif, genellikle dar kesimler. Yarım beden büyük almayı değerlendirin.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Giysi Türü',
    categoryShirts: 'Tişörtler',
    categoryPants: 'Pantolonlar',
    categoryDresses: 'Elbiseler',
    categoryJackets: 'Ceketler',
    genderLabel: 'Cinsiyet',
    genderMen: 'Erkek',
    genderWomen: 'Kadın',
    genderUnisex: 'Unisex',
    tabBySize: 'Bedene Göre',
    tabByMeasurements: 'Ölçülere Göre',
    regionLabel: 'Beden Sisteminiz',
    sizeLabel: 'Bedeninizi Seçin',
    regionEU: 'Avrupa (EU)',
    regionUS: 'Amerika Birleşik Devletleri (US)',
    regionUK: 'Birleşik Krallık (UK)',
    regionIT: 'İtalya (IT)',
    labelEU: 'Avrupa',
    labelUS: 'ABD',
    labelUK: 'BK',
    labelIT: 'İtalya',
    quickGridTitle: 'Hızlı Karşılıklar (EU)',
    tableTitle: 'Tam Dönüşüm Tablosu',
    measurementsTitle: 'Ölçülerinizi Girin',
    chestLabel: 'Göğüs (cm)',
    waistLabel: 'Bel (cm)',
    hipLabel: 'Basen (cm)',
    chestPlaceholder: 'Örn: 95',
    waistPlaceholder: 'Örn: 85',
    hipPlaceholder: 'Örn: 95',
    recommendBtnLabel: 'Beden Öner',
    tipsTitle: 'Ölçüm İpuçları',
    tipOverClothes: 'Giysi üzerinden',
    tipStraight: 'Düz ve paralel',
    tipNoTight: 'Sıkmadan',
    tipEndOfDay: 'Günün sonunda',
    recommendationTitle: 'Önerilen Beden',
    recommendedSizePrefix: 'Size şu bedeni öneriyoruz:',
    measuredBy: 'Ölçülerinize dayanarak:',
    chestShort: 'Göğüs',
    waistShort: 'Bel',
    hipShort: 'Basen',
    recommendationError: 'Bir öneri almak için lütfen tüm ölçüleri doldurun.',
    recommendationNoData: 'Bu kategori için veri mevcut değil.',
    fitGuideTitle: 'Marka Kalıp Rehberi',
    fitSmall: 'Küçük Kalıp',
    fitRegular: 'Normal Kalıp',
    fitLarge: 'Geniş Kalıp',
    fitInfoDefault: 'Özel öneriler için bir markaya tıklayın.',
    fitNotif1: ' genellikle ',
    fitNotifSmall: 'küçük',
    fitNotifRegular: 'standard',
    fitNotifLarge: 'geniş',
    fitNotif2: ' kalıptır. Bu markadan ilk kez alışveriş yapıyorsanız ',
    fitNotif3: ' düşünün.',
    fitAdviceSmall: 'bir beden büyük almayı',
    fitAdviceRegular: 'normal bedeninizi korumayı',
    fitAdviceLarge: 'bir beden küçük almayı',
    fitSelectedSuffix: ' seçildi. Karşılaştırmak için başka bir marka seçin.',
    infoBannerTitle: 'Pro İpucu:',
    infoBannerText:
      'Giysi bedenleri markalar arasında önemli ölçüde fark gösterir. Satın almadan önce daima mağazanın spesifik tablosunu kontrol edin.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
