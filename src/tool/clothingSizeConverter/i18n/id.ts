import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'konverter-ukuran-pakaian-internasional';
const title = 'Konverter Ukuran Pakaian Internasional';
const description =
  'Konversi ukuran pakaian antara sistem EU, US, UK, dan IT. Kaos, celana, gaun, dan jaket untuk pria, wanita, dan unisex. Termasuk panduan pengukuran dan rekomendasi merek.';

const faqData = [
  {
    question: 'Apa perbedaan antara ukuran pakaian EU dan US?',
    answer:
      'Ukuran Eropa (EU) menggunakan angka progresif atau huruf (XS-XXL atau 32-52), sedangkan ukuran Amerika Serikat (US) sering menggunakan huruf atau angka spesifik untuk celana. Secara umum, ukuran 36 EU setara dengan 4 US untuk pakaian wanita.',
  },
  {
    question: 'Apakah ukuran berubah untuk pakaian pria atau wanita?',
    answer:
      'Ya, tentu saja. Bahkan di negara yang sama, ukuran 40 untuk pria tidak sama dengan 40 untuk wanita. Pria memiliki proporsi yang berbeda (bahu lebih lebar), sehingga perhitungan ukurannya bervariasi.',
  },
  {
    question: 'Bagaimana cara mengetahui apakah saya harus menaikkan atau menurunkan ukuran pada suatu merek?',
    answer:
      'Cara terbaik adalah memeriksa ulasan dari pelanggan lain. Kalimat seperti "terlalu kecil bagi saya" atau "ukurannya besar" sangat membantu. Konsultasikan juga tabel ukuran spesifik dari merek tersebut.',
  },
  {
    question: 'Seberapa akurat tabel konversi ukuran ini?',
    answer:
      'Tabel konversi adalah panduan. Meskipun umumnya akurat, setiap merek memiliki spesifikasi masing-masing. Selalu periksa tabel ukuran toko spesifik sebelum membeli.',
  },
  {
    question: 'Apakah pakaian menyusut setelah dicuci?',
    answer:
      'Tergantung bahannya. Katun 100% dapat menyusut 5-10% jika dicuci dengan air panas dan dikeringkan dengan mesin pengering. Bahan sintetis mempertahankan bentuknya lebih baik. Selalu periksa instruksi pencucian.',
  },
];

const howToData = [
  {
    name: 'Pilih Jenis Pakaian dan Gender',
    text: 'Pilih jenis pakaian (kaos, celana, gaun, jaket) dan gender yang sesuai.',
  },
  {
    name: 'Pilih Sistem Ukuran Anda',
    text: 'Pilih sistem yang Anda kenal: EU, US, UK, atau IT.',
  },
  {
    name: 'Pilih Ukuran Anda',
    text: 'Pilih ukuran Anda di pemilih atau klik pada tabel. Anda akan melihat persamaannya secara instan.',
  },
  {
    name: 'Konsultasikan Panduan Merek',
    text: 'Periksa apakah merek tersebut berukuran kecil, reguler, atau besar untuk menyesuaikan pembelian Anda.',
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
  inLanguage: 'id',
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
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    { name: 'ISO 3635: Ukuran Pakaian - Standar Resmi', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Standar Ukuran Pakaian - Wikipedia', url: 'https://en.wikipedia.org/wiki/Clothing_size' },
    {
      name: 'Konversi Ukuran Pakaian Internasional - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Konverter Ukuran Pakaian: Panduan Lengkap',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Membeli pakaian di toko internasional bisa membingungkan jika ukurannya tidak sesuai. <strong>Konverter ukuran pakaian</strong> membantu Anda menemukan ukuran sempurna dalam sistem EU, US, UK, dan IT, untuk kaos, celana, gaun, dan jaket.',
    },
    {
      type: 'title',
      text: 'Mengapa ukuran pakaian berbeda antar negara?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tidak ada standar internasional tunggal. Setiap wilayah mengembangkan sistemnya sendiri, yang menimbulkan kebingungan saat membeli di toko luar negeri atau di platform seperti Amazon atau AliExpress.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Ukuran EU (Eropa):</strong> Menggunakan angka progresif (32, 34, 36...) atau huruf. Ini adalah sistem yang paling umum di Indonesia (untuk beberapa merek global) dan Eropa daratan.</span>',
        '<span><strong>Ukuran US (Amerika Serikat):</strong> Menggunakan huruf (XS, S, M, L) atau angka untuk celana wanita (0, 2, 4, 6...).</span>',
        '<span><strong>Ukuran UK (Inggris):</strong> Mirip dengan sistem EU tetapi dengan penomoran sendiri, umumnya lebih rendah dari penomoran US.</span>',
        '<span><strong>Ukuran IT (Italia):</strong> Penomoran Italia dengan variasi terhadap sistem EU umum.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Tips Profesional',
      html: 'Ukuran sangat bervariasi antar merek. Ukuran 38 di Zara mungkin berbeda dengan 38 di H&amp;M. Selalu konsultasikan tabel ukuran spesifik toko sebelum membeli.',
    },
    {
      type: 'title',
      text: 'Cara mengukur tubuh Anda dengan benar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Untuk menjamin ukuran yang benar, ukur tubuh Anda dengan pita pengukur yang fleksibel. Ukur di penghujung hari, saat tubuh berada pada ekspansi maksimalnya.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Dada:</strong> Ukur di sekeliling bagian dada yang paling lebar, lewati pita di bawah lengan.</span>',
        '<span><strong>Pinggang:</strong> Ukur setinggi pusar tanpa menekan perut secara tidak alami.</span>',
        '<span><strong>Pinggul:</strong> Ukur di sekeliling bagian pinggul yang paling lebar, dengan pita sejajar dengan lantai.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Panduan ukuran berdasarkan merek',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Ukuran reguler. Ukuran 36 di Zara biasanya dapat diandalkan untuk ukuran standar.</span>',
        '<span><strong>H&amp;M:</strong> Cenderung berukuran besar. Pertimbangkan untuk menurunkan satu ukuran dari biasanya.</span>',
        '<span><strong>Uniqlo:</strong> Sering berukuran kecil, terutama untuk koleksi dasar. Disarankan untuk menaikkan satu ukuran.</span>',
        '<span><strong>Nike / Adidas:</strong> Potongan ketat untuk aktivitas fisik. Pertimbangkan untuk menaikkan setengah ukuran.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Jenis Pakaian',
    categoryShirts: 'Kaos',
    categoryPants: 'Celana',
    categoryDresses: 'Gaun',
    categoryJackets: 'Jaket',
    genderLabel: 'Gender',
    genderMen: 'Pria',
    genderWomen: 'Wanita',
    genderUnisex: 'Unisex',
    tabBySize: 'Berdasarkan Ukuran',
    tabByMeasurements: 'Berdasarkan Pengukuran',
    regionLabel: 'Sistem Ukuran Anda',
    sizeLabel: 'Pilih Ukuran Anda',
    regionEU: 'Eropa (EU)',
    regionUS: 'Amerika Serikat (US)',
    regionUK: 'Inggris (UK)',
    regionIT: 'Italia (IT)',
    labelEU: 'Eropa',
    labelUS: 'Amerika Serikat',
    labelUK: 'Inggris',
    labelIT: 'Italia',
    quickGridTitle: 'Persamaan Cepat (EU)',
    tableTitle: 'Tabel Konversi Lengkap',
    measurementsTitle: 'Masukkan Ukuran Anda',
    chestLabel: 'Dada (cm)',
    waistLabel: 'Pinggang (cm)',
    hipLabel: 'Pinggul (cm)',
    chestPlaceholder: 'Misalnya: 95',
    waistPlaceholder: 'Misalnya: 85',
    hipPlaceholder: 'Misalnya: 95',
    recommendBtnLabel: 'Rekomendasikan Ukuran',
    tipsTitle: 'Tips Pengukuran',
    tipOverClothes: 'Di atas pakaian',
    tipStraight: 'Lurus dan sejajar',
    tipNoTight: 'Jangan terlalu ketat',
    tipEndOfDay: 'Di penghujung hari',
    recommendationTitle: 'Ukuran yang Direkomendasikan',
    recommendedSizePrefix: 'Kami merekomendasikan ukuran:',
    measuredBy: 'Berdasarkan ukuran tubuh Anda:',
    chestShort: 'Dada',
    waistShort: 'Pinggang',
    hipShort: 'Pinggul',
    recommendationError: 'Harap lengkapi semua ukuran untuk mendapatkan rekomendasi.',
    recommendationNoData: 'Tidak ada data tersedia untuk kategori ini.',
    fitGuideTitle: 'Panduan Ukuran Berdasarkan Merek',
    fitSmall: 'Ukuran Kecil',
    fitRegular: 'Ukuran Reguler',
    fitLarge: 'Ukuran Besar',
    fitInfoDefault: 'Klik merek untuk mendapatkan rekomendasi spesifik.',
    fitNotif1: ' biasanya berukuran ',
    fitNotifSmall: 'kecil',
    fitNotifRegular: 'reguler',
    fitNotifLarge: 'besar',
    fitNotif2: '. Pertimbangkan untuk ',
    fitNotif3: ' jika ini pertama kali Anda membeli merek ini.',
    fitAdviceSmall: 'menaikkan satu ukuran',
    fitAdviceRegular: 'tetap pada ukuran biasa Anda',
    fitAdviceLarge: 'menurunkan satu ukuran',
    fitSelectedSuffix: ' dipilih. Pilih merek lain untuk membandingkan.',
    infoBannerTitle: 'Tips Pro:',
    infoBannerText:
      'Ukuran pakaian sangat bervariasi antar merek. Selalu periksa tabel spesifik toko sebelum membeli.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
