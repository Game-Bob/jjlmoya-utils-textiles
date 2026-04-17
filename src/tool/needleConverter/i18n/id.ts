import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'konverter-jarum-rajut';
const title = 'Konverter Jarum Rajut (Knitting) dan Hakpen (Crochet)';
const description = 'Konversi ukuran jarum antara sistem Metrik (mm), US, dan UK dengan rekomendasi benang dan WPI.';

const faqData = [
  {
    question: 'Mengapa ada sistem ukuran jarum yang berbeda-beda?',
    answer: 'Secara historis, setiap negara mengembangkan sistemnya sendiri. Sistem metrik (mm) adalah standar internasional yang paling presisi. Sistem US menggunakan penomoran progresif (0-50), sedangkan sistem UK menggunakan penomoran terbalik: semakin tinggi angkanya, semakin halus jarumnya.',
  },
  {
    question: 'Apakah ukuran hakpen dan jarum rajut di sistem US sama?',
    answer: 'Tidak persis sama. Hakpen (crochet hook) di sistem US biasanya disertai huruf (misalnya H-8) dan terdapat variasi spesifik pada ketebalan kecil. Selain itu, hakpen baja untuk benang halus menggunakan penomoran yang sangat berbeda.',
  },
  {
    question: 'Jarum mana yang harus saya pilih jika pola saya menggunakan ukuran tanpa padanan yang tepat?',
    answer: 'Jika sebuah pola meminta ukuran 7.0mm dan sistem Anda hanya menyediakan 6.5mm atau 8.0mm, sangat disarankan untuk selalu membuat sampel tegangan (gauge). Perbedaan 0.5mm dapat secara signifikan mengubah ukuran akhir pakaian.',
  },
  {
    question: 'Apa itu WPI (Wraps Per Inch)?',
    answer: 'Ini adalah jumlah lilitan benang yang muat dalam satu inci (2.54 cm). Ini adalah metode paling andal untuk mengidentifikasi ketebalan benang tanpa label dan menentukan jarum mana yang paling cocok untuk merajutnya.',
  },
];

const howToData = [
  {
    name: 'Pilih jenis rajutan',
    text: 'Pilih antara merajut (knitting) atau merenda (crochet) untuk melihat padanan yang benar dalam sistem US.',
  },
  {
    name: 'Pilih ukuran di pemilih visual',
    text: 'Klik pada lingkaran yang sesuai dengan ukuran jarum Anda. Lubang-lubang tersebut memiliki proporsi matematis nyata dengan ukuran milimeter.',
  },
  {
    name: 'Baca padanan ukurannya',
    text: 'Lihat hasil secara real-time: milimeter, ukuran US, dan ukuran UK, beserta kategori benang yang direkomendasikan dan WPI-nya.',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
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
      text: 'Panduan Teknis Jarum Rajut dan Hakpen: Sistem, Ukuran, dan Padanan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Globalisasi pola rajutan digital membuatnya sangat penting untuk memahami perbedaan antara <strong>sistem metrik desimal</strong>, <strong>standar Amerika Serikat (US)</strong>, dan <strong>sistem imperial Inggris (UK)</strong>. Alat ini mengoversi di antara ketiga sistem tersebut dan menawarkan rekomendasi benang melalui metode WPI.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Luring', label: 'Bekerja tanpa internet', icon: 'mdi:wifi-off' },
        { value: 'Tripel', label: 'Sinkronisasi Total', icon: 'mdi:sync' },
        { value: 'WPI', label: 'Analisis Benang', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Kompleksitas Sistem Internasional',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sistem', 'Dasar Perhitungan', 'Wilayah Dominan', 'Karakteristik Teknis'],
      rows: [
        ['<strong>Metrik (mm)</strong>', 'Diameter tepat dalam mm', 'Eropa / Internasional', 'Standar ISO yang paling andal. Kenaikan konstan 0.25mm atau 0.50mm.'],
        ['<strong>US (AS)</strong>', 'Penomoran Progresif', 'Amerika Utara', 'Menggunakan angka dari 0 hingga 50. Pada crochet, angka dikaitkan dengan huruf (B-1, G-6).'],
        ['<strong>UK (Imperial)</strong>', 'Penomoran Terbalik', 'Inggris Raya / Australia', 'Berdasarkan ukuran kawat tarik. Semakin besar angkanya, semakin halus jarumnya (14 itu halus, 0 itu tebal).'],
      ],
    },
    {
      type: 'title',
      text: 'Identifikasi Benang menggunakan Metode WPI',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / Encaje (18-22+ WPI):</strong> Benang ultrafine untuk rajutan renda sutra atau mohair. Jarum 1.5mm hingga 2.5mm.',
        '<strong>Fingering / Baby (14-16 WPI):</strong> Standar untuk kaus kaki dan pakaian bayi. Jarum optimal 2.75mm hingga 3.25mm.',
        '<strong>Sport / Fine (12-14 WPI):</strong> Benang ketebalan menengah-rendah, ideal untuk jaket ringan. Jarum 3.5mm hingga 3.75mm.',
        '<strong>DK / Light Worsted (11-13 WPI):</strong> Ketebalan yang paling serbaguna di pasar. Jarum 4.0mm atau 4.5mm.',
        '<strong>Worsted / Aran (9-10 WPI):</strong> Benang tebal untuk sweater musim dingin. Jarum 5.0mm hingga 5.5mm.',
        '<strong>Bulky / Chunky (7-8 WPI):</strong> Benang kaliber besar untuk proyek cepat. Jarum 6.0mm hingga 8.0mm.',
        '<strong>Super Bulky (5-6 WPI):</strong> Serat raksasa untuk dekorasi atau syal. Jarum 9.0mm hingga 15.0mm.',
      ],
    },
    {
      type: 'tip',
      title: 'Teknik Profesional: Hakpen Baja',
      html: '<p>Ada rumpun jarum untuk benang katun mercerized yang sangat halus. Ini adalah <strong>Steel Hooks (Hakpen Baja)</strong>. Penomorannya spesifik dan terbalik: hakpen baja #14 (0.6mm) jauh lebih halus daripada #00 (3.5mm). Jangan pernah gunakan tabel standar untuk ukuran-ukuran ini.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Daftar Periksa untuk Memilih Ukuran Jarum yang Tepat',
      icon: 'mdi:check-circle-outline',
      badge: 'Validasi Teknis',
      html: '<p>Ikuti langkah-langkah ini sebelum memulai proyek jangka panjang:</p><ul><li><strong>Ketegangan Pribadi:</strong> Jika Anda merajut dengan kencang, naikkan 0.5mm. Jika longgar, turunkan 0.5mm.</li><li><strong>Bahan Jarum:</strong> Bambu untuk benang yang licin; Logam untuk wol yang kasar.</li><li><strong>Jenis Serat:</strong> Katun tidak melentur; wol merino mengembang saat proses pemblokiran (blocking).</li><li><strong>Sampel Tegangan:</strong> Rajut kotak 10x10cm dan cuci sebelum mengukur ukuran akhirnya.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Sistem Metrik bersifat universal dan menghindari kesalahan pembulatan antar produsen.',
          con: 'Banyak pola lama dan bersejarah tidak menyantumkan ukuran dalam milimeter.',
        },
        {
          pro: 'Sistem US mempermudah menghafal ukuran standar untuk pola-pola Amerika.',
          con: 'Huruf pada hakpen tidak selalu konsisten antar merek.',
        },
        {
          pro: 'Sistem WPI memungkinkan penggunaan kembali benang tanpa label secara teknis dan profesional.',
          con: 'Memerlukan pengukuran manual yang sangat teliti agar hasilnya tidak salah.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'Contoh rajutan (10x10cm) yang dibuat sebelum memulai proyek untuk memvalidasi ukuran sebenarnya.' },
        { term: 'Hook Throat', definition: 'Leher hakpen. Kedalamannya menentukan seberapa banyak benang yang bisa ditangani jarum.' },
        { term: 'Block Testing', definition: 'Proses membasahi dan meregangkan rajutan agar serat-seratnya rileks dan menunjukkan ukuran akhir yang sebenarnya.' },
      ],
    },
    {
      type: 'summary',
      title: 'Faktor Penting untuk Keberhasilan Proyek Tekstil Anda',
      items: [
        'Jarum yang tepat tidak hanya menentukan ukuran, tetapi juga daya tahan pakaian terhadap gesekan.',
        'Gunakan konverter kami untuk memvalidasi pola dari majalah Amerika atau Inggris dalam hitungan detik.',
        'Jika tidak menemukan padanan yang tepat, pilihlah ukuran di atas atau di bawahnya berdasarkan sampel tegangan Anda.',
        'Merajut dengan hakpen menghabiskan sekitar 30% lebih banyak benang dibandingkan merajut dengan jarum rajut pada ukuran yang sama.',
        'Bersihkan jarum logam Anda secara rutin untuk menjaga kecepatan luncur yang optimal.',
      ],
    },
  ],
  ui: {
    labelSystem: 'SISTEM KERJA',
    modeKnitting: 'Rajut (Knitting)',
    modeCrochet: 'Renda (Crochet)',
    calibratorLabel: 'KALIBRATOR PRESISI (SKALA ASLI)',
    calibratorDesc: 'Pilih diameter untuk melihat padanan ukurannya secara real-time. Lubang-lubang tersebut memiliki proporsi matematis nyata terhadap ukuran milimeter.',
    tagMetric: 'Metrik (mm)',
    tagUS: 'Sistem US',
    tagUK: 'Sistem UK',
    yarnLabel: 'KETEBALAN BENANG IDEAL',
    wpiFormat: '{wpi} WPI (Lilitan per inci)',
    tableSectionLabel: 'KATALOG TEKNIS PADANAN UKURAN',
    tableMetric: 'METRIK',
    tableUS: 'UKURAN US',
    tableUK: 'UK / IMPERIAL',
    tableYarn: 'KATEGORI BENANG',
  },
};
