import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'pengubah-skala-pola-jahit';
const title = 'Pengubah Skala Pola Jahit Online';
const description = 'Sesuaikan pola jahit apa pun dengan ukuran tubuh asli Anda. Kalkulator penskalaan diferensial dengan pratinjau pola yang diperbarui.';

const faqData = [
  {
    question: 'Mengapa bagian bahu tidak membesar secara proporsional dengan lingkar dada?',
    answer: 'Tubuh manusia bukanlah bola. Meskipun volume batang tubuh (torso) dapat bervariasi secara signifikan, kerangka dan titik artikulasi seperti bahu cenderung lebih statis. Penskalaan (grading) profesional menerapkan faktor yang berbeda agar tidak merusak keseimbangan pakaian.',
  },
  {
    question: 'Apa itu "kelonggaran" atau "ease"?',
    answer: 'Ease adalah ruang ekstra antara tubuh Anda dan kain. Tanpa kelonggaran, Anda tidak akan bisa bergerak. Kalkulator kami mempertahankan kelonggaran ini sehingga pakaian tetap pas seperti yang dibayangkan desainer, namun disesuaikan dengan kontur tubuh asli Anda.',
  },
  {
    question: 'Dapatkah saya mengubah skala pola rajutan atau jersey?',
    answer: 'Bisa, namun perlu diingat bahwa kain elastis biasanya memiliki kelonggaran negatif. Jika polanya sangat ketat, pastikan faktor elastisitas kain baru yang Anda pilih sama dengan kain aslinya.',
  },
];

const howToData = [
  {
    name: 'Ukur pola Anda',
    text: 'Ukur garis horizontal utama (dada, pinggang, dan pinggul) pada potongan kertas pola asli Anda, dari jahitan ke jahitan.',
  },
  {
    name: 'Atur asal (origin)',
    text: 'Masukkan ukuran pola atau ukuran yang telah Anda ambil ke dalam kolom "Asal" di alat kami.',
  },
  {
    name: 'Masukkan tujuan (target)',
    text: 'Masukkan ukuran tubuh asli Anda atau ukuran target yang Anda inginkan. Alat ini akan menghitung perbedaan tepat per zona.',
  },
  {
    name: 'Terapkan pada meja potong',
    text: 'Ikuti instruksi "Tindakan di Meja Potong" untuk menambah atau mengurangi sentimeter pada bagian samping dan bawah potongan pola Anda.',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'Patronaje: Las Bases - Teresa Gilewska',
      url: 'https://www.scribd.com/document/696165843/patronaje-las-bases-by-teresa-gilewska',
    },
    {
      name: 'Metric Pattern Cutting for Women\'s Wear - Winifred Aldrich',
      url: 'https://download.e-bookshelf.de/download/0000/5989/88/L-G-0000598988-0002339537.pdf',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cara Mengubah Skala Pola Jahit: Panduan Teknis dan Praktis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Penskalaan pola</strong> (pattern grading) adalah salah satu keterampilan paling krusial dalam dunia konfeksi. Ini bukan sekadar memperbesar atau memperkecil gambar secara proporsional; ini adalah tentang mengadaptasi struktur dua dimensi ke kurva dan proporsi tubuh manusia yang kompleks, yang tidak tumbuh secara linier.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Luring', label: 'Perhitungan Lokal', icon: 'mdi:calculator' },
        { value: 'Diferensial', label: 'Skala Proporsional', icon: 'mdi:resize' },
        { value: '100%', label: 'Aman dan Privat', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Apa Sebenarnya Penskalaan Pola Itu?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Penskalaan (atau <em>grading</em>) adalah proses teknis menambah atau mengurangi ukuran pola dasar untuk menciptakan serangkaian ukuran yang berbeda. Berbeda dengan zoom sederhana, penskalaan mempertimbangkan bahwa bagian tubuh tertentu membesar lebih banyak daripada yang lain. Misalnya, lingkar dada biasanya lebih bervariasi antar ukuran dibandingkan lebar bahu atau panjang punggung.',
    },
    {
      type: 'title',
      text: 'Rahasia Sukses: Kelonggaran (Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kelonggaran gerak (Wearing Ease):</strong> Sentimeter ekstra yang diperlukan agar Anda dapat bernapas, duduk, dan menggerakkan lengan tanpa membuat kain robek.',
        '<strong>Kelonggaran desain (Design Ease):</strong> Sentimeter yang ditambahkan desainer untuk menciptakan siluet tertentu (misalnya, mantel oversize atau blus yang melambai).',
      ],
    },
    {
      type: 'title',
      text: 'Penskalaan Horizontal vs. Vertikal',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sumbu Horizontal (Lekuk Tubuh):</strong> Dada, Pinggang, Pinggul. Memerlukan penyesuaian terbesar. Dibagi menjadi seperempat untuk setiap bagian pola.',
        '<strong>Sumbu Vertikal (Panjang):</strong> Panjang depan, panjang belakang, panjang total. Memengaruhi posisi kupnat (dart) dan garis pinggang. Variasi antar ukuran yang berdekatan lebih kecil.',
      ],
    },
    {
      type: 'title',
      text: 'Cara Menggunakan Pengubah Skala Pola',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Ukur pola Anda:</strong> Ambil potongan pola kertas dan ukur dari tepi ke tepi pada garis dada, pinggang, dan pinggul.',
        '<strong>Masukkan ukuran asal:</strong> Tulis ukuran tersebut di kolom kiri dan tentukan ukuran apa yang diwakili oleh pola tersebut.',
        '<strong>Masukkan ukuran atau target ukuran Anda:</strong> Di kolom kanan, masukkan ukuran tubuh asli Anda atau ukuran yang ingin dituju.',
        '<strong>Interpretaskan hasil:</strong> Kalkulator akan menunjukkan berapa banyak yang harus ditambah atau dikurangi pada setiap area spesifik.',
      ],
    },
    {
      type: 'tip',
      title: 'Saran untuk Penskalaan Profesional',
      html: '<p><strong>Jangan mengubah skala lebih dari dua atau tiga ukuran:</strong> Jika Anda mencoba mengubah dari ukuran 36 ke 52, kemungkinan besar kerung lengan akan berubah bentuk dan leher akan menjadi terlalu besar. Dalam kasus seperti itu, lebih baik menggambar ulang pola dasar menggunakan ukuran Anda dari nol.</p>',
    },
    {
      type: 'title',
      text: 'Keuntungan Penskalaan Digital',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Mempertahankan proporsi tepat dari desain aslinya.',
          con: 'Kerung lengan mungkin memerlukan sedikit penghalusan manual.',
        },
        {
          pro: 'Perhitungan instan untuk kelonggaran yang diperlukan.',
          con: 'Tidak mendeteksi secara otomatis jika pola sudah termasuk kampuh jahitan.',
        },
        {
          pro: 'Visualisasi grafis dari perkembangan potongan pola.',
          con: 'Memerlukan pengukuran awal yang sangat akurat.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diferensial', definition: 'Perbedaan ukuran antara dua ukuran yang berurutan.' },
        { term: 'Titik Jangkar', definition: 'Area pola yang tidak bergerak (biasanya bagian tengah depan/belakang).' },
        { term: 'Sarang Penskalaan (Grading Nest)', definition: 'Gambar bertumpuk dari semua ukuran yang telah diskalakan.' },
        { term: 'Pola Dasar', definition: 'Templat tanpa desain atau kelonggaran yang sesuai dengan ukuran tubuh.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'SISTEM KERJA',
    modeStandard: 'Ukuran Standar',
    modeCustom: 'Ukuran Tubuh Asli',
    labelPatternSize: 'Ukuran Pola',
    labelTargetSize: 'Ukuran Target',
    labelOriginMeasures: 'UKURAN ASAL',
    labelTargetMeasures: 'UKURAN TUBUH ANDA',
    labelEase: 'Kelonggaran Saat Ini (Ease)',
    labelChest: 'Dada',
    labelWaist: 'Pinggang',
    labelHips: 'Pinggul',
    labelLength: 'Panjang',
    resBust: 'Dada',
    resWaist: 'Pinggang',
    resHips: 'Pinggul',
    resLength: 'Panjang',
    actionLatAdd: 'Tambah',
    actionLatRemove: 'Kurangi',
    actionLatSuffix: 'pada sisi potongan pola',
    actionLatNote: 'Penyesuaian per seperempat pola',
    actionLenExtend: 'Perpanjang pola',
    actionLenShorten: 'Perpendek pola',
    actionLenNote: 'Penyesuaian pada garis bawah',
    legendOriginal: 'Asli',
    legendUpdated: 'Diperbarui',
    warnText: 'Penskalaan lebih dari 3 ukuran. Risiko deformasi pada kerung lengan.',
    sizePrefix: 'Ukuran',
  },
};
