import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'konversi-ukuran-sepatu';
const title = 'Alat Konversi Ukuran Sepatu';
const description = 'Konversi ukuran sepatu antara sistem Amerika Serikat (US), Eropa (EU), Inggris (UK), dan sentimeter (CM). Panduan alas kaki pria dan wanita.';

const faqData = [
  {
    question: 'Bagaimana cara mengetahui ukuran sepatu saya di Amerika Serikat (US)?',
    answer: 'Untuk pria, ukuran US biasanya satu tingkat lebih tinggi dari ukuran UK. Untuk wanita, skalanya berbeda. Cara paling akurat adalah dengan mengukur kaki Anda dalam sentimeter dan menggunakan konverter kami untuk mendapatkan nomor US yang tepat.',
  },
  {
    question: 'Apa perbedaan antara ukuran sepatu Inggris (UK) dan Amerika (US)?',
    answer: 'Meskipun keduanya menggunakan sistem imperial, titik awalnya berbeda. Umumnya, ukuran 8 UK setara dengan ukuran 9 US untuk sepatu pria.',
  },
  {
    question: 'Bagaimana cara mengukur kaki saya untuk mengetahui ukuran CM?',
    answer: 'Letakkan tumit Anda di dinding, tandai di mana ujung jari terpanjang Anda berakhir, dan ukur jaraknya. Ukuran dalam sentimeter (CM) ini adalah yang paling andal untuk membeli sepatu dari merek internasional.',
  },
];

const howToData = [
  {
    name: 'Pilih Jenis Kelamin',
    text: 'Pilih apakah Anda mencari ukuran untuk pria atau wanita, karena skalanya bervariasi.',
  },
  {
    name: 'Pilih Wilayah',
    text: 'Tentukan sistem ukuran yang Anda ketahui (EU, US, UK, atau CM).',
  },
  {
    name: 'Pilih Nomor Anda',
    text: 'Gunakan pemilih atau klik langsung pada kisi ukuran Eropa.',
  },
  {
    name: 'Lihat Persamaan',
    text: 'Dapatkan nomor yang sesuai di wilayah lain di dunia secara instan.',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'Shoe size conversion - Wikipedia', url: 'https://en.wikipedia.org/wiki/Shoe_size' },
    { name: 'ISO 9407: Shoe sizes - Mondopoint system', url: 'https://www.iso.org/standard/17157.html' },
    { name: 'Shoe size conversion - Zappos', url: 'https://www.zappos.com/c/shoe-size-conversion' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Alat Konversi Ukuran Sepatu: Panduan Internasional Lengkap',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Membeli alas kaki di toko internasional bisa menjadi tantangan logistik. <strong>Konverter ukuran sepatu</strong> adalah alat penting untuk menghindari pengembalian barang yang tidak perlu dan memastikan bahwa setiap pembelian, baik di Amazon, AliExpress, atau toko olahraga khusus, memuaskan.',
    },
    {
      type: 'title',
      text: 'Bagaimana cara kerja persamaan ukuran sepatu?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dunia alas kaki tidak seragam. Secara historis, setiap wilayah mengembangkan sistemnya sendiri berdasarkan unit pengukuran lokal seperti inci atau "Paris point".',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Ukuran EU (Eropa):</strong> Berdasarkan "Paris Point", yang setara dengan 2/3 sentimeter. Ini adalah sistem yang paling umum.</span>',
        '<span><strong>Ukuran US (Amerika Serikat):</strong> Menggunakan inci dengan titik awal yang berbeda untuk pria dan wanita.</span>',
        '<span><strong>Ukuran UK (Inggris):</strong> Juga dalam sistem imperial, tetapi dengan skala satu unit lebih rendah dari ukuran AS.</span>',
        '<span><strong>Ukuran CM / Mondopoint:</strong> Yang paling akurat. Menggunakan langsung panjang kaki dalam sentimeter.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Panduan untuk mengukur kaki Anda dan menemukan ukuran yang tepat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sebelum menggunakan konverter, sangat penting untuk mengetahui ukuran kaki Anda yang sebenarnya. Untuk sepatu, ukuran mendasarnya adalah panjang kaki dari tumit hingga ujung jari terpanjang.',
    },
    {
      type: 'tip',
      title: 'Saran Profesional',
      html: 'Ukur kaki Anda di penghujung hari. Kaki cenderung membengkak karena aktivitas dan panas, sehingga pengukuran di pagi hari bisa menyebabkan sepatu terasa sempit di sore hari.',
    },
    {
      type: 'title',
      text: 'Mengapa ukuran bervariasi antar merek sepatu lari',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mengapa Anda ukuran 42 di Nike tetapi 41 1/3 di Adidas? Merek menggunakan "last" (cetakan kaki) mereka sendiri. Beberapa merek olahraga cenderung berukuran kecil, yang mengharuskan Anda membeli setengah nomor lebih besar dari biasanya.',
    },
  ],
  ui: {
    genderMenTitle: 'Sepatu Pria',
    genderWomenTitle: 'Sepatu Wanita',
    regionLabel: 'Sistem Ukuran Anda',
    regionEU: 'Eropa (EU)',
    regionUS: 'Amerika Serikat (US)',
    regionUK: 'Inggris (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Pilih Ukuran Anda',
    gridDesc: 'Klik untuk melihat persamaan internasional',
    labelEU: 'Eropa (EU)',
    labelUS: 'AS (US)',
    labelUK: 'Inggris (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: 'Ukuran <strong>CM</strong> mewakili panjang fisik kaki. Ini adalah metode yang paling andal untuk membeli sepatu dari merek internasional.',
    menData: [
      { EU: '39', US: '6.5', UK: '6', CM: '24.5' },
      { EU: '40', US: '7.5', UK: '7', CM: '25.0' },
      { EU: '40.5', US: '8', UK: '7.5', CM: '25.5' },
      { EU: '41', US: '8.5', UK: '8', CM: '26.0' },
      { EU: '42', US: '9', UK: '8.5', CM: '26.5' },
      { EU: '42.5', US: '9.5', UK: '9', CM: '27.0' },
      { EU: '43', US: '10', UK: '9.5', CM: '27.5' },
      { EU: '44', US: '10.5', UK: '10', CM: '28.0' },
      { EU: '44.5', US: '11', UK: '10.5', CM: '28.5' },
      { EU: '45', US: '11.5', UK: '11', CM: '29.0' },
      { EU: '46', US: '12', UK: '11.5', CM: '30.0' },
    ],
    womenData: [
      { EU: '35', US: '5', UK: '3', CM: '22.0' },
      { EU: '36', US: '6', UK: '4', CM: '22.5' },
      { EU: '37', US: '6.5', UK: '4.5', CM: '23.5' },
      { EU: '37.5', US: '7', UK: '5', CM: '23.8' },
      { EU: '38', US: '7.5', UK: '5.5', CM: '24.0' },
      { EU: '38.5', US: '8', UK: '6', CM: '24.5' },
      { EU: '39', US: '8.5', UK: '6.5', CM: '25.0' },
      { EU: '40', US: '9', UK: '7', CM: '25.5' },
      { EU: '41', US: '10', UK: '8', CM: '26.5' },
      { EU: '42', US: '11', UK: '9', CM: '27.0' },
    ],
  },
};
