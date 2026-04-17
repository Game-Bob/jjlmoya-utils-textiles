import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'kalkulator-benang-rajut';
const title = 'Kalkulator Benang: Berapa meter dan gulung yang saya butuhkan?';
const description =
  'Hitung dengan presisi metrik jumlah wol atau benang yang dibutuhkan untuk proyek merajut (knit) dan merenda (crochet) berdasarkan pola dan ukuran.';

const faqData = [
  {
    question: 'Mengapa merenda (crochet) menghabiskan lebih banyak benang daripada merajut (knit)?',
    answer:
      'Merenda didasarkan pada pembuatan simpul dan loop yang tumpang tindih, yang menghasilkan kain yang lebih padat dan tebal per sentimeter persegi. Rata-rata, proyek crochet mengonsumsi antara 25% hingga 35% lebih banyak benang daripada proyek rajutan dua jarum yang sama.',
  },
  {
    question: 'Apa yang terjadi jika saya membeli benang dari lot pewarna (Dye Lot) yang berbeda?',
    answer:
      'Meskipun warnanya tampak identik di toko, variasi kimia minimal selama pencelupan dapat menciptakan "garis-garis" yang terlihat pada pakaian yang sudah jadi. Sangat disarankan untuk membeli semua benang sekaligus dengan memastikan kode lot-nya sama.',
  },
  {
    question: 'Bagaimana ketegangan (gauge) memengaruhi konsumsi akhir?',
    answer:
      'Jika Anda merajut dengan longgar, setiap tusukan menghabiskan lebih banyak meter benang. Jika sampel ketegangan Anda lebih besar dari yang ditunjukkan pola (misalnya 13 tusukan, bukan 15), konsumsi benang Anda akan meningkat secara substansial. Melakukan sampel ketegangan sebelumnya sangatlah penting.',
  },
  {
    question: 'Bagaimana cara menghitung meter jika saya hanya tahu berat gulungan benang?',
    answer:
      'Tanpa data panjang meter, sulit ditentukan. Kebanyakan gulungan benang mencantumkan panjang meternya di label. Jika tidak ada, cari nama benangnya di database seperti Ravelry untuk menemukan panjang pastinya per 50g atau 100g.',
  },
];

const howToData = [
  {
    name: 'Pilih proyek',
    text: 'Pilih antara sweter, syal, topi, kaus kaki, atau selimut untuk memuat basis konsumsi spesifik.',
  },
  {
    name: 'Tentukan ukuran dan ketebalan',
    text: 'Tentukan dimensi akhir (S, M, L, XL) dan ketebalan benang yang akan Anda gunakan (Fingering, DK, Worsted, Bulky).',
  },
  {
    name: 'Aktifkan pengganda',
    text: 'Jika pola Anda memiliki kepang (cables) atau tekstur kompleks, aktifkan sakelar tekstur untuk menambahkan tambahan yang diperlukan.',
  },
  {
    name: 'Dapatkan daftar belanja',
    text: 'Masukkan panjang meter per gulung dari benang pilihan Anda untuk melihat persis berapa banyak unit yang harus Anda beli.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'Craft Yarn Council: Standard Yarn Weights & Yardages',
      url: 'https://www.craftyarncouncil.com/standards/yarn-weight-system',
    },
    {
      name: 'Interweave Essentials: Yarn Substitution and Estimation',
      url: 'https://www.interweave.com/article/knitting/yarn-substitution-angelina-take-two/',
    },
    {
      name: 'The Woolery: Fibers and Calculation of Yarn Usage',
      url: 'https://woolery.com/blogs/the-woolery-blog/yarn-weight-charts-helpful-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Panduan Konsumsi Benang: Cara Menghitung meter dan gulungan untuk proyek Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kuasai logistik merajut dan hindari kehabisan benang dengan kalkulator teknis presisi kami untuk rajut dan renda. Salah satu ketakutan terbesar setiap perajut adalah <strong>"Yarn Chicken"</strong>: momen kritis di akhir proyek di mana benang sepertinya akan habis sebelum menyelesaikan tusukan terakhir. Kalkulator ini dikembangkan untuk menawarkan estimasi berdasarkan standar industri panjang meter dan berat benang.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Margin Aman', icon: 'mdi:security' },
        { value: 'Metrik', label: 'Perhitungan dalam Meter', icon: 'mdi:ruler' },
        { value: 'Offline', label: 'Database Lokal', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Mengapa berat gulungan benang sering menipu?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Banyak pemula melakukan kesalahan dengan membeli benang hanya berdasarkan berat (misalnya "6 gulung seberat 100g"). Namun, berat adalah satuan massa, bukan panjang. Dua benang yang keduanya seberat 100g dapat memiliki panjang yang sangat berbeda: benang jenis <strong>Bulky</strong> mungkin hanya memiliki panjang 80 meter, sedangkan benang <strong>Fingering / Lace</strong> dapat melebihi 450 meter dengan berat yang sama.',
    },
    {
      type: 'paragraph',
      html: 'Oleh karena itu, kalkulator kami selalu memprioritaskan <strong>total meter</strong>. Setelah Anda mengetahui panjang yang dibutuhkan untuk ukuran dan proyek Anda, Anda dapat membaginya dengan panjang meter yang tertera pada label benang spesifik Anda untuk mendapatkan jumlah gulungan yang tepat yang harus Anda beli.',
    },
    {
      type: 'title',
      text: 'Tabel Panjang Meter Standar berdasarkan Ketebalan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda tidak memegang label benangnya, Anda dapat menggunakan referensi panjang meter ini (per 100g serat) untuk estimasi Anda:',
    },
    {
      type: 'table',
      headers: ['Ketebalan (Weight)', 'Meter kira-kira / 100g', 'Kegunaan yang Disarankan', 'Saran Jarum'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Syal renda, rajutan berlubang', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Kaus kaki, pakaian bayi', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Jaket ringan', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Sweter, topi', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Selimut, mantel', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'Syal XXL, selimut', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Faktor Ketegangan (Gauge)',
      html: '<p>Ingatlah bahwa jika Anda merajut dengan sangat longgar, tusukan Anda akan lebih besar dan menghabiskan lebih banyak benang daripada jika Anda merajut dengan kencang. Kalkulator kami menerapkan margin keamanan, tetapi jika Anda tahu ketegangan Anda sangat longgar, pertimbangkan untuk menambahkan 5-10% tambahan pada hasilnya untuk menghindari kekurangan benang.</p>',
    },
    {
      type: 'title',
      text: 'Variabel yang meningkatkan konsumsi benang',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tidak semua tusukan menghabiskan jumlah serat yang sama. Saat memilih desain Anda, pertimbangkan faktor-faktor pengganda ini:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Stockinette / Jersey',
          description: 'Mewakili konsumsi dasar dan efisiensi benang maksimal untuk pakaian apa pun.',
          icon: 'mdi:minus-circle-outline',
          points: ['Ideal untuk pemula', 'Tekstur jatuh alami'],
        },
        {
          title: 'Cables / Kepang',
          description: 'Persilangan serat "memperpendek" potongan kain, meningkatkan konsumsi sekitar 25%.',
          icon: 'mdi:texture-box',
          points: ['Butuh lebih banyak meter', 'Kain lebih padat dan berat'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Merenda (Crochet)',
          description: 'Simpul crochet menggunakan sekitar 30% lebih banyak benang daripada merajut biasa.',
          icon: 'mdi:hook',
          points: ['Penggunaan benang lebih cepat', 'Tekstur tiga dimensi'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Ribbing / Karet',
          description: 'Struktur atas/bawah mengumpulkan lebih banyak wol per cm persegi.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Konsumsi menengah (+15%)', 'Pemulihan elastisitas tinggi'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Glosarium Perajut Pintar',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (Lot Pewarna)',
          definition:
            'Nomor yang mengidentifikasi bak pewarna tempat benang dicelup. Lot yang berbeda dapat memiliki variasi warna yang tidak terlihat saat dalam gulungan tetapi sangat terlihat pada pakaian yang sudah jadi.',
        },
        {
          term: 'Stash (Simpanan)',
          definition:
            'Koleksi pribadi benang seorang perajut. Mengidentifikasi berat sisa benang tanpa label sangat penting untuk proyek kecil.',
        },
        {
          term: 'Put-up',
          definition:
            'Cara benang disajikan (dalam bentuk hanks, gulungan ball, atau cones), yang memengaruhi apakah perlu digulung ulang sebelum digunakan.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'Tantangan mencoba menyelesaikan bagian rajutan dengan jumlah benang yang tampaknya tidak mencukupi.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Cara menggunakan hasil kalkulator ini',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Setelah alat memberikan jumlah meter dan gulungan, kami sarankan untuk melakukan langkah-langkah verifikasi manual berikut:',
    },
    {
      type: 'list',
      items: [
        '<strong>Periksa panjang meter gulungan asli Anda:</strong> Tidak semua gulungan 100g memiliki panjang 200m. Verifikasi data ini di label untuk menyesuaikan perhitungan akhir.',
        '<strong>Tambahkan panjang meter untuk detail:</strong> Jika Anda akan menambahkan rumbai pada syal atau pompon pada topi, tambahkan ekstara 50-80 meter pada totalnya.',
        '<strong>Sampel ketegangan:</strong> Rajut kotak berukuran 10x10 cm. Timbang dengan timbangan presisi. Jika beratnya 20g dan selimut Anda berukuran 100x100 (100 kotak), Anda akan membutuhkan tepat 2kg benang.',
        '<strong>Belilah dari lot yang sama:</strong> Jika hasil hitung menunjukkan 7 gulung, belilah 8 untuk berjaga-jaga jika ada perbedaan lot agar memiliki ruang gerak atau untuk bagian tersembunyi seperti jahitan.',
      ],
    },
    {
      type: 'summary',
      title: 'Saran Strategis untuk Membeli Benang',
      items: [
        'Prioritaskan panjang meter daripada gram untuk memastikan panjang yang dibutuhkan.',
        'Merenda menghabiskan lebih banyak benang daripada merajut; sesuaikan pemilih jenis.',
        'Tekstur padat (kepang) memerlukan kenaikan 25% dalam anggaran benang.',
        'Selalu simpan label dari setiap lot jika Anda perlu memesan warna pengganti.',
        'Gunakan margin keamanan 10% untuk merajut sampel ketegangan wajib.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. JENIS PROYEK',
    sectionSize: '2. DIMENSI / UKURAN',
    sectionWeight: '3. KETEBALAN BENANG',
    sectionPattern: '4. KARAKTERISTIK POLA',
    sectionBall: '5. DATA GULUNGAN',
    labelCables: 'Kepang atau tekstur padat?',
    labelGrams: 'GRAM / GULUNG',
    labelMeters: 'METER / GULUNG',
    weightFine: 'Halus',
    weightMedium: 'Sedang',
    weightThick: 'Tebal',
    weightXXL: 'XXL',
    projectSweater: 'SWETER',
    projectScarf: 'SYAL',
    projectHat: 'TOPI',
    projectSocks: 'KAUS KAKI',
    projectBlanket: 'SELIMUT',
    projectCardigan: 'JAKET RAJUT',
    statPrefix: 'ESTIMASI TOTAL KONSUMSI',
    statSuffix: 'M',
    statNote: 'Panjang meter akhir dihitung dengan cadangan stok 10%.',
    ballsFormatSingular: 'Beli {n} gulung',
    ballsFormatPlural: 'Beli {n} gulung',
    ballsDetailFormat: 'Gulungan seberat {w}g / {m}m masing-masing.',
    alertTitle: 'Keamanan strategis:',
    alertText:
      'Perhitungan ini menjamin Anda tidak akan kehabisan benang. Pastikan lot pewarna (dye lot) sama saat membeli benang Anda.',
    schemeSleeveLabel: 'Lengan',
    schemeSleeveEach: 'masing-masing',
    schemeBodyLabel: 'Badan',
    schemeTotalHat: 'Total Topi',
    schemeTotalFlat: 'Total Bagian',
    schemeTotalSocks: 'Total Sepasang',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Anak', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Besar', 'Maxi'],
      socks: ['Anak', 'Dws S', 'Dws M', 'Dws L'],
      blanket: ['Bayi', 'Sofa', 'Tempat Tidur 90', 'Tempat Tidur 150'],
    },
  },
};
