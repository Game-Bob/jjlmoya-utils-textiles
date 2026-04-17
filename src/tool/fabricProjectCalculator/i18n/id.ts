import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'kalkulator-kain-proyek';
const title = 'Kalkulator Konsumsi Kain per Pakaian';
const description =
  'Hitung dengan mudah berapa banyak kain yang Anda butuhkan untuk menjahit rok, celana, gaun, atau kemeja. Sesuaikan berdasarkan lebar kain dan ukuran untuk pemotongan profesional.';

const faqData = [
  {
    question: 'Berapa banyak kain yang saya butuhkan untuk rok?',
    answer:
      'Tergantung pada lebar kainnya. Untuk rok lurus dengan lebar kain 140-150 cm biasanya cukup dengan 1,20 meter. Jika lebar kain 90-110 cm, Anda akan membutuhkan 2,00 meter.',
  },
  {
    question: 'Bagaimana lebar kain mempengaruhi konsumsi?',
    answer:
      'Semakin kecil lebarnya, pola tidak akan bisa diletakkan berdampingan (paralel), sehingga konsumsi biasanya menjadi dua kali lipat karena harus diletakkan satu di bawah yang lain.',
  },
  {
    question: 'Apakah lebih baik membeli kain lebih banyak?',
    answer:
      'Ya, disarankan untuk memberi margin 10% (sekitar 20 cm) untuk mengimbangi penyusutan, cacat pada kain, atau kampuh jahit yang tidak terduga.',
  },
  {
    question: 'Apa itu arah serat kain dan bagaimana pengaruhnya?',
    answer:
      'Arah serat kain adalah arah yang sejajar dengan pinggiran kain (selvedge). Pola harus disejajarkan dengan arah serat ini agar pakaian tidak berubah bentuk saat dikenakan.',
  },
];

const howToData = [
  {
    name: 'Pilih tipe pakaian',
    text: 'Pilih model yang akan Anda buat (rok, celana, dll.) untuk memuat tabel konsumsi dasarnya.',
  },
  {
    name: 'Masukkan lebar kain',
    text: 'Ukur lebar kain dari satu pinggiran ke pinggiran lainnya (90, 115, 140, atau 150 cm).',
  },
  {
    name: 'Pilih ukuran',
    text: 'Sesuaikan volume pakaian berdasarkan ukuran (XS-S, M-L, XL-XXL) untuk menghitung ulang faktor pengalinya.',
  },
  {
    name: 'Dapatkan total meteran',
    text: 'Periksa hasil akhir dengan dan tanpa kampuh jahit untuk mengetahui dengan tepat berapa banyak yang harus dipesan di toko.',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'Fabric Estimation Guide - Threads Magazine',
      url: 'https://www.threadsmagazine.com/forum/measuring-fabric',
    },
    {
      name: 'How much fabric do I need? - Seamwork',
      url: 'https://www.seamwork.com/sewing-tutorials/the-anatomy-of-a-sewing-pattern',
    },
    {
      name: 'Standard Fabric Consumption Charts - Textile School',
      url: 'https://www.textileschool.com/209/fabric-consumption-in-garment-making/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Meteran Kain untuk Konveksi: Panduan Konsumsi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Salah satu keraguan yang paling sering muncul di tempat menjahit adalah menentukan berapa banyak kain yang harus dibeli untuk proyek tertentu. Konsumsi kain sangat bergantung pada tiga faktor: model pakaian, ukuran orang tersebut, dan yang paling penting, lebar potongan kain (yang biasanya berkisar antara 90 cm hingga 150 cm). Kalkulator teknis ini mensistematisasikan perhitungan agar Anda tidak membeli terlalu banyak atau kekurangan kain di tengah proses pemotongan.',
    },
    {
      type: 'title',
      text: 'Berapa banyak kain yang saya butuhkan untuk gaun atau celana?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Perhitungan tradisional didasarkan pada panjang pakaian ditambah panjang lengan, ditambah margin untuk lapisan (vistas) dan keliman (dobladillo). Namun, saat kainnya sempit (90-110 cm), potongan pola biasanya tidak muat diletakkan berdampingan, yang memaksa Anda untuk membeli kain dua kali lipat panjangnya. Alat kami mempertimbangkan variasi ini secara otomatis sesuai dengan standar industri tekstil.',
    },
    {
      type: 'title',
      text: 'Estimasi Konsumsi berdasarkan Lebar Kain (ukuran M-L)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Rok Lurus:</strong> 2.00 m pada kain lebar 90 cm · 1.20 m pada kain lebar 140/150 cm.',
        '<strong>Celana Panjang:</strong> 2.50 m pada kain lebar 90 cm · 1.50 m pada kain lebar 140/150 cm.',
        '<strong>Kemeja Lengan Panjang:</strong> 2.20 m pada kain lebar 90 cm · 1.40 m pada kain lebar 140/150 cm.',
        '<strong>Gaun Dasar:</strong> 3.50 m pada kain lebar 90 cm · 2.20 m pada kain lebar 140/150 cm.',
      ],
    },
    {
      type: 'title',
      text: 'Faktor-faktor yang Mengubah Konsumsi Kain',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Arah motif (Rapport):</strong> Jika kain memiliki motif dengan arah yang jelas atau kotak-kotak yang harus disatukan, Anda akan membutuhkan antara 15% hingga 20% tambahan bahan.',
        '<strong>Serong (Al bies):</strong> Pemotongan serong atau melingkar (seperti rok lingkaran) mengkonsumsi kain secara signifikan lebih banyak karena sisa pada sudut-sudutnya.',
        '<strong>Arah bulu (Sentido del pelo):</strong> Pada tekstil seperti beludru atau corduroy, semua bagian harus dipotong ke arah yang sama, yang membatasi optimalisasi ruang.',
        '<strong>Penyusutan:</strong> Banyak tekstil alami (katun, linen, wol) menyusut setelah pencucian pertama. Sangat penting untuk mencuci kain terlebih dahulu sebelum dipotong.',
      ],
    },
    {
      type: 'tip',
      title: 'Tips Penjahit',
      html: '<p>Jika Anda akan menggunakan kain dengan motif besar atau kotak-kotak (plaid), jangan hanya mengandalkan ukuran standar. Selalu tambahkan satu pengulangan motif lengkap (rapport) ke total meteran yang dihitung untuk memastikan pola serasi di jahitan samping.</p>',
    },
    {
      type: 'title',
      text: 'Keuntungan dan Batasan Kalkulator Ini',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Perhitungan instan untuk berbagai lebar kain dengan penyesuaian ukuran.',
        'Termasuk estimasi kampuh jahit yang dapat disesuaikan.',
        'Panduan visual penempatan bagian pola pada kain.',
        'Tidak menggantikan penempatan pola secara nyata. Ukuran Plus mungkin memerlukan penyesuaian manual tambahan.',
      ],
    },
    {
      type: 'card',
      title: 'Lebar kain',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'Ukuran melintang kain dari <strong>pinggiran ke pinggiran</strong>. Menentukan apakah potongan pola muat secara paralel atau harus diletakkan secara seri.',
    },
    {
      type: 'card',
      title: 'Kampuh jahit',
      icon: 'mdi:tape-measure',
      html: 'Jarak antara tepi pola dan <strong>garis jahitan akhir</strong>. Nilai standar adalah 1,5 cm untuk jahitan pakaian.',
    },
    {
      type: 'card',
      title: 'Pinggiran kain (Selvedge)',
      icon: 'mdi:content-cut',
      html: 'Tepi samping kain yang diperkuat agar <strong>tidak terurai</strong>. Menunjukkan arah serat dan berfungsi sebagai referensi untuk pemotongan.',
    },
  ],
  ui: {
    sectionProject: 'Proyek',
    sectionMaterial: 'Bahan',
    labelGarmentType: 'Tipe pakaian',
    labelSize: 'Ukuran',
    labelFabricWidth: 'Lebar kain (cm)',
    labelSeamAllowance: 'Kampuh jahit (cm)',
    garmentSkirt: 'Rok (Lurus/A-line)',
    garmentPants: 'Celana',
    garmentDress: 'Gaun',
    garmentShirt: 'Kemeja / Blus',
    garmentCoat: 'Mantel / Jaket',
    garmentTote: 'Tote Bag',
    garmentMerceria: {
      skirt: '1 resleting 20cm, 1 kancing',
      pants: '1 resleting 20cm, 1 kancing, 30cm pelapis',
      dress: '1 resleting 60cm, 50cm pelapis',
      shirt: '7 kancing, 1m pelapis tipis',
      coat: '3 kancing besar, 1.5m pelapis, furing',
      tote: '2m tali webbing untuk pegangan',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Sempit)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (Standar EU)',
    width150: '150 cm (Pelapis/Tirai)',
    btnClear: 'Bersihkan',
    btnShare: 'Bagikan',
    btnCopied: 'Disalin!',
    btnCopyList: 'Salin daftar',
    resultLabel: 'Anda membutuhkan:',
    resultUnit: 'Meter',
    shopAdviceFormat: 'Pesan {m}m di toko',
    boardEmpty: 'Pilih proyek untuk melihat tata letak',
    boardDescFormat: 'Lebar: {w}cm | Panjang: {m}m',
    merchTitle: 'Alat Jahit dan Bahan',
    checklistThread: 'Benang yang sesuai',
    warningSerialFormat: 'Pada kain lebar {w}cm, potongan ukuran Anda tidak muat diletakkan paralel. Konsumsi disesuaikan untuk pemotongan seri.',
    foldLabel: '⊟ lipatan',
    pieceNames: {
      front: 'Depan',
      back: 'Belakang',
      waistband: 'Ban Pinggang',
      waistbelt: 'Ikat Pinggang',
      sleeve: 'Lengan',
      collar: 'Kerah',
      cuffs: 'Manset',
      facings: 'Lapisan Leher/Lengan',
      lapels: 'Kelep',
      pocket: 'Saku',
      body: 'Badan',
      handleA: 'Pegangan A',
      handleB: 'Pegangan B',
    },
  },
};
