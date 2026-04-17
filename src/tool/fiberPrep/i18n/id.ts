import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'persiapan-serat-pewarnaan';
const title = 'Persiapan Serat untuk Pewarnaan';
const description =
  'Kalkulator WOF, protokol mordant, dan rampa termal untuk mempersiapkan wol, sutra, dan kapas sebelum pewarnaan alami.';

const faqData = [
  {
    question: 'Apa itu WOF (Weight of Fiber)?',
    answer:
      'WOF adalah sistem standar untuk menghitung jumlah pigmen atau mordant yang dibutuhkan. Hal ini didasarkan pada berat kering serat. Misalnya, 100% WOF kulit bawang untuk 100g wol berarti Anda membutuhkan 100g kulit bawang.',
  },
  {
    question: 'Mengapa mordanting diperlukan?',
    answer:
      'Mordant (seperti tawas) bertindak sebagai jembatan kimia antara serat tekstil dan pigmen alami. Tanpanya, sebagian besar pewarna tidak akan menempel dan akan hilang pada pencucian pertama (ketahanan luntur warna yang buruk terhadap cahaya dan gesekan).',
  },
  {
    question: 'Apa perbedaan antara mempersiapkan serat hewani dan nabati?',
    answer:
      'Serat hewani (protein seperti wol) menerima tawas saja dengan sangat baik. Serat nabati (selulosa seperti kapas atau linen) memerlukan langkah awal tanin untuk "mengelabui" serat agar menerima mordant logam.',
  },
  {
    question: 'Apa itu rampa termal dalam pewarnaan?',
    answer:
      'Ini adalah peningkatan suhu secara bertahap (sekitar 1-2°C per menit) dari bak pewarna. Hal ini sangat penting untuk menghindari kejutan termal, terutama pada wol, yang dapat menggumpal atau "menjadi felt" jika perubahan suhunya mendadak.',
  },
];

const howToData = [
  {
    name: 'Pembersihan dan penghilangan kanji',
    text: 'Cuci serat dengan deterjen netral untuk menghilangkan minyak, lilin, atau kanji industri yang menghalangi mordant meresap secara merata.',
  },
  {
    name: 'Menimbang serat kering',
    text: 'Dapatkan berat tepat dari material kering. Nilai ini adalah dasar untuk semua perhitungan WOF (Weight of Fiber).',
  },
  {
    name: 'Perhitungan dan bak mordant',
    text: 'Larutkan mordant (misalnya tawas kalium pada 15% WOF) dalam air panas dan rendam serat, jaga suhu tetap konstan sesuai protokol.',
  },
  {
    name: 'Pematangan dan pembilasan',
    text: 'Biarkan serat yang telah di-mordant beristirahat (sebaiknya 24 jam) agar logam terfiksasi secara mendalam sebelum masuk ke bak pewarna utama.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Artista Textil y Tintes Naturales',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Sains di Balik Mordanting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mempersiapkan serat untuk pewarnaan bukan sekadar mencucinya. Ini adalah proses teknik kimia pada tingkat molekuler yang disebut mordanting. Kata ini berasal dari bahasa Latin <i>mordere</i> (menggigit), dan fungsinya adalah bertindak sebagai jembatan kimia antara serat dan pigmen. Tanpa jembatan ini, sebagian besar pewarna alami hanya akan luntur pada pembilasan pertama.',
    },
    {
      type: 'card',
      title: 'Konsep Kunci',
      icon: 'mdi:molecule',
      html: 'Mordant memiliki valensi tersedia yang menempel secara bersamaan pada polimer serat dan zat warna.',
    },
    {
      type: 'title',
      text: 'Pembedaan Serat',
      level: 2,
    },
    {
      type: 'card',
      title: 'Serat Protein: Wol dan Sutra',
      icon: 'mdi:sheep',
      html: 'Serat-serat ini terdiri dari rantai asam amino dengan afinitas alami yang sangat tinggi terhadap logam. Panas membuka sisik serat sehingga memungkinkan garam tawas masuk secara mendalam. Penggunaan <strong>Cream of Tartar</strong> sangat penting untuk menjaga pH asam yang menjaga kelembutannya.',
    },
    {
      type: 'card',
      title: 'Serat Selulosa: Kapas dan Linen',
      icon: 'mdi:leaf',
      html: 'Selulosa tidak memiliki situs pengikatan yang tersedia dengan mudah. Itulah sebabnya kita menggunakan <strong>protokol dua langkah</strong>: pertama tanin yang menempel pada selulosa, kemudian tawas menempel pada tanin tersebut. Tanpa pra-perawatan ini, warnanya akan pucat dan tidak tahan lama.',
    },
    {
      type: 'title',
      text: 'Kontrol Bak: WOF, Suhu, dan pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Untuk mendapatkan hasil profesional dan dapat diulang, konsep <strong>WOF (Weight of Fabric)</strong> adalah hukum utamanya. Semuanya diukur sebagai persentase dari berat kering serat. Kelebihan mordant dapat menjenuhkan serat dan membuatnya kasar atau meninggalkan endapan logam yang mengubah warna akhir.',
    },
    {
      type: 'tip',
      title: 'Rampa Termal',
      html: 'Panas bertindak sebagai katalis, mempercepat reaksi kimia. Namun, perubahan suhu yang mendadak pada wol dapat menyebabkan sisik-sisiknya saling mengunci secara permanen, menghasilkan kain yang menjadi felt dan menyusut.',
    },
    {
      type: 'tip',
      title: 'Faktor pH',
      html: 'Banyak pewarna alami adalah indikator pH yang hidup. pH mempengaruhi kelarutan garam dan pelestarian serat. Sutra dapat kehilangan kilaunya jika bak terlalu basa. Menyesuaikan pH dengan asam sitrat atau kalsium karbonat sangatlah mendasar.',
    },
    {
      type: 'title',
      text: 'Zat dan Keamanan',
      level: 2,
    },
    {
      type: 'card',
      title: 'Tawas Kalium',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Mordant universal, tidak berwarna, dan sangat efektif. Referensi utama untuk serat protein.',
    },
    {
      type: 'card',
      title: 'Cream of Tartar',
      icon: 'mdi:spoon-sugar',
      html: 'Asisten yang meningkatkan fiksasi dan kelembutan pada serat hewani. Menjaga pH tetap asam.',
    },
    {
      type: 'tip',
      title: 'Protokol Keamanan',
      html: 'Gunakan panci khusus untuk pewarnaan, jangan pernah untuk makanan.<br>Gunakan sarung tangan dan masker saat menangani mordant bubuk.<br>Pastikan ventilasi yang konstan untuk menghindari penumpukan uap.',
    },
  ],
  ui: {
    profileTitle: 'Pemilihan Profil',
    profileDesc: 'Protokol kimia dibagi menurut asal molekuler serat',
    proteinTitle: 'Serat Protein',
    proteinOrigin: 'Asal Hewani',
    proteinDesc: 'Wol, sutra, alpaka, mohair, atau kasmir. Memerlukan suhu terkontrol dan pH asam.',
    cellulosicTitle: 'Serat Selulosa',
    cellulosicOrigin: 'Asal Nabati',
    cellulosicDesc: 'Kapas, linen, rami, atau goni. Memerlukan pra-mordanting dengan tanin untuk memfiksasi pigmen.',
    wofTitle: 'Kalkulator WOF',
    weightLabel: 'Berat Pakaian Kering (g)',
    weightUnit: 'gr',
    wofEmptyMsg: 'Pilih profil untuk mengaktifkan perhitungan',
    alumLabel: 'Tawas',
    cremLabel: 'Cream of Tartar',
    ironLabel: 'Zat Besi (Hati-hati)',
    rampTitle: 'Rampa Termal',
    rampEmptyTitle: 'Menunggu Pemilihan',
    rampEmptyDesc: 'Pilih serat untuk melihat siklus termal',
    phTitle: 'Penstabil pH',
    phDesc: 'Faktor kritis untuk saturasi warna',
    phVolumeLabel: 'Volume Bak (L)',
    phSliderLabel: 'pH Saat Ini',
    phAcidLabel: 'Asam (1)',
    phAlkalineLabel: 'Basa (14)',
    phEmptyMsg: 'Pilih profil untuk mengaktifkan penstabil',
    phStrings: {
      optimal: 'pH optimal',
      raisePrefix: 'Tambahkan Kalsium Karbonat atau Soda Ash. Sekitar',
      raiseSuffix: 'g untuk menaikkan ke',
      lowerPrefix: 'Tambahkan Asam Sitrat atau Cuka. Sekitar',
      lowerSuffix: 'ml untuk menurunkan ke',
    },
    proteinFibers: [
      { id: 'wool', name: 'Wol / Merino', icon: 'mdi:sheep' },
      { id: 'silk', name: 'Sutra', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Kasmir', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Mohair', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaka', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Kapas', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Linen', icon: 'mdi:leaf' },
    ],
  },
};
