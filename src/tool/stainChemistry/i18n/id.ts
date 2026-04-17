import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'protokol-kimia-noda-tekstil';
const title = 'Protokol Kimia Penghilang Noda Tekstil';
const description =
  'Protokol ilmiah untuk menghilangkan noda berdasarkan jenis serat dan sifat kimia noda. Perkabanat, enzim, pelarut: metode yang tepat untuk setiap kasus.';

const faqData = [
  {
    question: 'Bolehkah saya menggunakan pemutih sebagai ganti perkarbonat?',
    answer:
      'Pemutih (natrium hipoklorit) sangat korosif. Ia mendegradasi serat, menjadikannya kekuningan dan rapuh. Perkarbonat memutihkan melalui oksigen aktif, menjaga struktur molekul alami serat.',
  },
  {
    question: 'Mengapa cuka membantu menghilangkan bau?',
    answer:
      'Bau badan biasanya bersifat basa. Asam asetat dalam cuka menetralkannya, mengubahnya menjadi garam tak berbau yang akan hilang sepenuhnya saat dibilas.',
  },
  {
    question: 'Haruskah saya selalu menggunakan air dingin untuk noda darah?',
    answer:
      'Ya. Panas akan membekukan protein darah, sehingga noda menempel permanen pada serat. Air dingin menjaga noda dalam kondisi larut dan memungkinkan agen enzimatik bekerja secara efektif.',
  },
  {
    question: 'Apa yang terjadi jika saya mengoleskan aseton pada kain asetat?',
    answer:
      'Aseton akan melarutkan triasetat dan asetat. Serat asetat adalah selulosa yang diesterifikasi dengan asam asetat dan sepenuhnya larut dalam aseton. Hasilnya adalah kerusakan kain yang tidak dapat diperbaiki.',
  },
];

const howToData = [
  {
    name: 'Identifikasi jenis serat',
    text: 'Periksa label di dalam pakaian untuk mengetahui pakah itu serat alami, sintetik, atau serat mulia (wol, sutra, cashmere).',
  },
  {
    name: 'Pilih serat di alat',
    text: 'Pilih bahan yang sesuai pada pemilih pertama.',
  },
  {
    name: 'Pilih jenis noda',
    text: 'Tentukan apakah noda tersebut organik (anggur, buah), protein (darah), lemak, atau sintetik (tinta).',
  },
  {
    name: 'Terapkan protokol yang ditunjukkan',
    text: 'Ikuti instruksi mengenai agen, suhu, dan metode. Perhatikan baik-baik peringatan peringatan kritis.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Protokol Kimia Noda',
    fiberLabel: '1. Serat',
    selectFiberPlaceholder: 'Pilih kain...',
    stainLabel: '2. Noda',
    selectStainPlaceholder: 'Apa yang terjadi?',
    molecularDiagnosis: 'Diagnosis Molekuler',
    requiredAgent: 'Agen yang Dibutuhkan',
    thermalCondition: 'Kondisi Termal',
    temperature: 'Suhu',
    cleaningInstructions: 'Instruksi Pembersihan',
    criticalWarning: 'Peringatan Kritis',
    criticalWarningLabel: 'PERINGATAN',
    technicalNote: 'Catatan teknis',
    technicalNoteText:
      'Selalu validasi ketahanan pewarna pada bagian yang tidak terlihat sebelum melakukan perawatan kimia penuh.',
    systemDiagnosis: 'Sistem Diagnosis',
    systemDiagnosisDesc:
      'Konfigurasikan parameter tekstil untuk mendapatkan panduan pembersihan',
    delicatePercarbonateWarning:
      'RISIKO DEGRADASI MOLEKULER. Serat hewani sangat sensitif terhadap perkarbonat. Lakukan tes pada bagian yang tidak terlihat.',
    fiberData: {
      cotton: { name: 'Kapas', family: 'natural', isNoble: false },
      linen: { name: 'Linen', family: 'natural', isNoble: true },
      wool: { name: 'Wol / Merino', family: 'natural', isNoble: true },
      silk: { name: 'Sutra', family: 'natural', isNoble: true },
      cashmere: { name: 'Cashmere', family: 'natural', isNoble: true },
      mohair: { name: 'Mohair', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpaka', family: 'natural', isNoble: true },
      polyester: { name: 'Poliester', family: 'synthetic', isNoble: false },
      viscose: { name: 'Viskosa / Rayon', family: 'artificial', isNoble: false },
      nylon: { name: 'Nilon (Poliamida)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Akrilik', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Natrium Perkarbonat',
        description: 'Pemutih beroksigen biodegradable. Melepaskan oksigen aktif saat dilarutkan.',
        warning: 'Hindari pada serat protein (sutra, wol) dalam konsentrasi tinggi.',
      },
      isopropyl: {
        name: 'Isopropil Alkohol',
        description: 'Pelarut efektif untuk pigmen dan lemak ringan.',
        warning: 'Dapat merusak kilau pada sutra dan melarutkan beberapa akrilik jika tidak diencerkan.',
      },
      acetone: {
        name: 'Aseton',
        description: 'Pelarut kuat untuk pernis dan lem.',
        warning: 'DILARANG pada asetat dan triasetat (melarutkan serat).',
      },
      enzyme: {
        name: 'Deterjen Enzimtik',
        description: 'Mengandung protease yang memecah noda biologis.',
        warning: 'Gunakan dengan hati-hati pada wol dan sutra (keduanya adalah protein).',
      },
      vinegar: {
        name: 'Cuka Putih',
        description: 'Asam asetat ringan untuk menetralkan bau dan mengunci warna.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Anggur Merah / Buah',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Perendaman lama' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Pasta langsung' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Dingin',
            method: 'Bilas dengan air soda dan cuka',
            notes: 'Jangan digosok',
          },
        },
      },
      {
        id: 'blood',
        name: 'Darah',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Dingin',
            method: 'Rendam dalam air garam lalu enzim',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Dingin', method: 'Aplikasi langsung' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Dingin',
            method: 'Segera bilas, hindari panas',
          },
        },
      },
      {
        id: 'grease',
        name: 'Lemak / Minyak',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Larutkan dengan alkohol lalu cuci',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Letakkan kertas penyerap di bawahnya',
          },
          delicate: { agentId: 'isopropyl', temperature: 'Dingin', method: 'Encerkan alkohol hingga 50%' },
        },
      },
      {
        id: 'ink',
        name: 'Tinta / Spidol',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Suhu Ruang',
            method: 'Seka perlahan dari luar ke dalam',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Suhu Ruang',
            method: 'Hati-hati dengan penyebaran noda',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Dingin',
            method: 'Encerkan dan uji pada bagian tersembunyi',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Kimia di Balik Pembersihan Tekstil',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tidak semua noda diciptakan sama, dan tidak semua serat bereaksi sama terhadap agen kimia yang sama. Perbedaan antara menyelamatkan pakaian dan merusaknya terletak pada pemahaman akan sifat molekuler noda dan struktur serat.',
    },
    {
      type: 'card',
      title: '01 — Oksidasi Terkontrol',
      icon: 'mdi:atom',
      html: '<strong>Natrium perkarbonat</strong> melepaskan oksigen aktif yang memecah ikatan rangkap kromofor (molekul yang bertanggung jawab atas warna noda), menjadikannya tidak berwarna dan larut dalam air. Ini adalah metode paling efektif untuk noda organik.',
    },
    {
      type: 'card',
      title: '02 — Kelarutan oleh Pelarut',
      icon: 'mdi:flask-outline',
      html: 'Noda seperti minyak atau tinta tidak larut dalam air. Pelarut seperti <strong>isopropil alkohol</strong> atau <strong>aseton</strong> mengurangi tegangan permukaan dan menarik molekul non-polar noda, memungkinkannya berpindah ke media pendukung.',
    },
    {
      type: 'title',
      text: 'Kedaulatan atas Serat: Mengapa Jenis Itu Penting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tidak semua serat "makan" dengan cara yang sama. <strong>Sutra dan wol</strong> adalah protein (fibroin dan keratin). Jika Anda menggunakan deterjen enzimatik yang dirancang untuk "memakan protein" (seperti noda darah atau telur) tanpa kontrol, deterjen tersebut akan mulai mendegradasi serat itu sendiri, merusak kilau dan struktur kain.',
    },
    {
      type: 'title',
      text: 'Bahaya Panas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Salah satu kesalahan paling umum adalah menggunakan air panas untuk "melunakkan" noda darah. Secara kimia, panas menyebabkan <strong>koagulasi protein</strong> noda, yang membuatnya menempel permanen pada struktur pori serat. Noda protein harus selalu ditangani dengan air dingin.',
    },
    {
      type: 'tip',
      title: 'Protokol Darurat: Anggur Merah',
      html: '<strong>A. Penyerapan pasif:</strong> Tempelkan kertas penyerap, jangan pernah digosok untuk menghindari penyebaran mekanis.<br><strong>B. Netralisasi osmotik:</strong> Tutup dengan garam halus untuk menarik cairan keluar dari inti serat.<br><strong>C. Tindakan kimia:</strong> Oleskan pasta perkarbonat dan air pada suhu 40°C jika serat tahan panas.',
    },
    {
      type: 'title',
      text: 'Pelarut Spesifik dan Peringatan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Aseton</strong> adalah pelarut yang luar biasa untuk cat kuku atau lem, tetapi merusak untuk <strong>asetat</strong>. Karena asetat adalah serat turunan selulosa yang diproses secara kimia, aseton secara harfiah melarutkan kain tersebut.',
    },
    {
      type: 'paragraph',
      html: '<strong>Isopropil alkohol</strong> lebih stabil, tetapi pada sintetik berwarna dapat menarik pigmen itu sendiri. Kami selalu menyarankan untuk melakukan "tes keliman" pada bagian yang tidak terlihat sebelum perawatan utama.',
    },
  ],
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
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
