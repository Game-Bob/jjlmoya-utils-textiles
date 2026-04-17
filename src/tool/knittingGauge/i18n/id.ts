import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'kalkulator-gauge-tegangan-rajut';
const title = 'Kalkulator Gauge dan Tegangan Rajutan';
const description =
  'Hitung ulang jumlah tusukan dan baris dari pola rajut atau ganchillo (crochet) apa pun dengan mudah. Sesuaikan gauge berdasarkan kelipatan dan faktor skala untuk hasil profesional.';

const faqData = [
  {
    question: 'Apa itu tegangan atau gauge dalam rajutan?',
    answer:
      'Ini adalah ukuran berapa banyak tusukan (stitch) dan baris yang masuk dalam area tertentu (biasanya 10x10 cm). Hal ini mendasar karena menentukan ukuran akhir pakaian berdasarkan jarum dan benang yang digunakan.',
  },
  {
    question: 'Bagaimana perubahan gauge mempengaruhi ukuran?',
    answer:
      'Jika tegangan Anda memiliki lebih banyak tusukan per sentimeter daripada pola, pakaian akan menjadi lebih kecil. Jika Anda memiliki lebih sedikit tusukan, pakaian akan menjadi lebih besar. Itulah mengapa sangat penting untuk menghitung ulang tusukan atau mengganti jarum.',
  },
  {
    question: 'Mengapa penyesuaian berdasarkan kelipatan itu penting?',
    answer:
      'Banyak pola memiliki motif (lace, jalinan, gambar) yang membutuhkan jumlah tusukan tertentu untuk menyelesaikannya. Kalkulator kami menyesuaikan total ke kelipatan terdekat agar tidak merusak desain.',
  },
  {
    question: 'Haruskah saya mencuci sampel rajutan sebelum mengukur?',
    answer:
      'Ya, selalu. "Blocking" (mencucinya dan membentuknya) mermaskan serat dan menunjukkan tegangan sebenarnya yang akan dimiliki pakaian setelah pertama kali digunakan dan dicuci.',
  },
];

const howToData = [
  {
    name: 'Identifikasi tegangan pola',
    text: 'Cari dalam instruksi pola berapa banyak tusukan dan baris yang ditunjukkan untuk sampel 10x10 cm atau 4x4 inci.',
  },
  {
    name: 'Rajut dan ukur sampel Anda sendiri',
    text: 'Rajut sampel dengan benang dan jarum Anda, lakukan blocking, dan ukur berapa banyak tusukan dan baris yang Anda miliki di area yang sama.',
  },
  {
    name: 'Konfigurasi kalkulator',
    text: 'Masukkan data sampel pola dan data sampel nyata Anda. Tambahkan total tusukan untuk ukuran Anda dan kelipatan motif jika ada.',
  },
  {
    name: 'Dapatkan hasil',
    text: 'Tinjau jumlah tusukan baru yang harus dipasang dan faktor skala untuk mengetahui apakah Anda perlu menyesuaikan panjang pakaian juga.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Gauge dan Tegangan Rajutan Online: Panduan Teknis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda pernah menyelesaikan sebuah sweter yang tampak seperti didesain untuk raksasa atau topi yang nyaris tidak menutupi ubun-ubun, Anda sudah mengetahui pentingnya <strong>gauge atau tegangan</strong>. Dalam dunia merajut dan merenda, tegangan adalah hubungan antara ketebalan benang, ukuran jarum, dan kekuatan tangan setiap perajut saat menarik benang. Tidak ada dua perajut yang sama, dan karena itu, tidak ada dua tegangan yang identik.',
    },
    {
      type: 'title',
      text: 'Mengapa Tegangan atau Gauge sangat Vital dalam Rajutan?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator gauge untuk rajutan ini adalah alat teknis yang dirancang untuk menghilangkan tebakan matematis dan memungkinkan Anda fokus pada kreativitas. Dengan memasukkan data sampel pola dan data sampel Anda sendiri, Anda akan mendapatkan penyesuaian tusukan dan baris yang presisi, memastikan pakaian akhir Anda memiliki ukuran yang tepat seperti yang diharapkan.',
    },
    {
      type: 'title',
      text: 'Cara menggunakan kalkulator tegangan rajutan',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Buatlah sampel:</strong> Jangan batasi pada 10x10 cm. Rajutlah setidaknya 15x15 cm agar bagian tepi tidak memberikan ukuran tengah yang salah.',
        '<strong>Lakukan blocking pada sampel:</strong> Cuci dan keringkan sampel sebagaimana Anda akan memperlakukan pakaian yang sudah jadi. Banyak serat wol yang memuai atau bertambah panjang saat basah.',
        '<strong>Ukur dengan presisi:</strong> Gunakan penggaris kaku atau alat ukur 10 cm. Hitung berapa banyak tusukan yang masuk secara horizontal dan berapa banyak baris secara vertikal.',
        '<strong>Masukkan data:</strong> Letakkan nilai dari pola di kolom kiri dan nilai Anda sebenarnya di kolom kanan. Alat ini akan secara otomatis menghitung ulang berapa banyak tusukan yang Anda butuhkan untuk mencapai lebar yang diinginkan.',
      ],
    },
    {
      type: 'title',
      text: 'Interpretasi Hasil: Faktor Skala',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Faktor skala adalah pengali yang kita terapkan pada setiap instruksi pola. Jika tegangan Anda adalah 22 tusukan dan pola meminta 20, faktor skala Anda adalah 1.1. Ini berarti untuk mendapatkan lebar fisik yang sama, Anda membutuhkan 10% lebih banyak tusukan. Deviasi 0-2% adalah ideal, 2-10% moderat, 10-25% membutuhkan perhitungan ulang wajib, dan lebih dari 25% merupakan risiko struktural.',
    },
    {
      type: 'title',
      text: 'Penanganan Kelipatan dan Motif',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Salah satu tantangan terbesar saat menghitung ulang pola adalah menjaga integritas lace, jalinan, atau motif. Jika desain berulang setiap 8 tusukan, Anda tidak bisa begitu saja menambahkan 3 tusukan tambahan; Anda harus menyesuaikan totalnya agar tetap menjadi kelipatan 8. Fungsi <strong>penyesuaian berdasarkan kelipatan</strong> dari kalkulator ini menyarankan jumlah tusukan terdekat yang menghormati struktur desain.',
    },
    {
      type: 'tip',
      title: 'Tips untuk Ahli',
      html: '<p>Sering kali lebih baik menggunakan kalkulator ini dan bekerja dengan tegangan alami benang Anda, menyesuaikan jumlah tusukan daripada memaksakan tegangan dengan mengganti ukuran jarum secara radikal, karena hal terakhir dapat mengubah jatuhnya kain dan kelembutan rajutan.</p>',
    },
    {
      type: 'title',
      text: 'Keuntungan menggunakan alat penyesuaian kami',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Penyesuaian otomatis tusukan dan baris dengan faktor skala yang presisi.',
        'Dukungan untuk kelipatan kompleks (X + Y) untuk menjaga integritas motif.',
        'Estimasi gram benang wol yang dibutuhkan untuk proyek lengkap.',
        'Visualisator swatch dinamis yang menunjukkan kerapatan rajutan secara real-time.',
      ],
    },
    {
      type: 'card',
      title: 'Gauge / Tegangan',
      icon: 'mdi:ruler',
      html: 'Jumlah tusukan dan baris dalam kotak berukuran <strong>10x10 cm</strong> atau <strong>4x4 inci</strong>. Ini adalah referensi universal dari semua pola rajutan.',
    },
    {
      type: 'card',
      title: 'Blocking',
      icon: 'mdi:water',
      html: 'Proses membasahi dan membentuk pakaian untuk memantapkan tusukan. Mengungkapkan <strong>tegangan sebenarnya</strong> yang akan dimiliki pakaian setelah pertama kali digunakan dan dicuci.',
    },
    {
      type: 'card',
      title: 'Faktor Skala',
      icon: 'mdi:scale',
      html: 'Proporsi matematis antara sampel pola dan sampel nyata perajut. Menentukan berapa banyak tusukan dan baris yang harus disesuaikan untuk mempertahankan <strong>ukuran yang benar</strong>.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Tegangan Orisinal',
    sectionMyGauge: 'Sampel Anda Saat Ini',
    sectionProject: 'Struktur Proyek',
    labelStitches: 'Tusukan',
    labelRows: 'Baris',
    labelWidth: 'Lebar',
    labelLength: 'Panjang',
    labelUnit: 'Satuan Ukuran',
    labelNeedle: 'Jarum',
    labelNeedleMm: 'Jarum (mm)',
    labelWeight: 'Berat (g)',
    labelWeightOptional: 'opsional',
    labelPatternSts: 'Tusukan Pola',
    labelPatternRows: 'Baris Pola',
    labelMultiples: 'Kelipatan',
    labelMultiplesExample: 'Misal: 10 + 2',
    labelMultiplesPlaceholder: 'Kelipatan + Tepi',
    unitEU: '10 x 10 cm (Standar EU)',
    unitUS: '4 x 4 inci (Standar US)',
    btnClear: 'Bersihkan',
    btnShare: 'Bagikan',
    btnCopied: 'Disalin!',
    resSuggestedSts: 'Saran tusukan untuk dipasang',
    resNewRows: 'Baris Baru',
    resNewRowsTooltip: 'Jumlah baris yang diperlukan untuk menyamai panjang pola orisinal dengan tegangan Anda saat ini.',
    resScaleFactor: 'Faktor Skala',
    resScaleFactorTooltip: 'Hubungan ukuran antara rajutan Anda dan pola. Nilai negatif menunjukkan rajutan Anda lebih rapat.',
    resSuggestion: 'Saran',
    resSuggestionTooltip: 'Rekomendasi teknis untuk menyesuaikan tegangan Anda tanpa harus menghitung ulang setiap tusukan pada pola.',
    suggestionIdeal: 'Ideal',
    suggestionDown: 'Turunkan Ukuran Jarum',
    suggestionUp: 'Naikkan Ukuran Jarum',
    suggestionDownDetail: 'Gunakan jarum {n}mm atau ukuran yang lebih kecil.',
    suggestionUpDetail: 'Gunakan jarum {n}mm atau ukuran yang lebih besar.',
    multiplesNoteFormat: 'Disesuaikan dari {n} tusukan (Kelipatan {m})',
    yarnTitle: 'Estimasi Benang untuk Proyek',
    yarnResultFormat: 'Estimasi benang: <strong>{g}g</strong>',
    yarnSafetyFormat: '(+{s}g untuk keamanan)',
    alertDanger: 'Perbedaan ekstrem (>25%). Sifat jatuh dan struktur pakaian akan berubah.',
  },
};
