import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'uji-bakar-tekstil';
const title = 'Uji Bakar Tekstil';
const description =
  'Identifikasi komposisi asli kain apa pun dengan menganalisis perilaku pembakarannya. Bedakan katun, wol, sutra, dan sintetik secara ilmiah.';

const faqData = [
  {
    question: 'Apakah aman melakukan uji bakar di rumah?',
    answer:
      'Ya, selama Anda melakukan tindakan pencegahan ekstrem: gunakan pinset logam, kerjakan di atas permukaan tahan api (keramik atau logam), sediakan air di dekat Anda, dan lakukan pengujian di area berventilasi. Anda hanya memerlukan sampel kecil berukuran 1x1 cm atau beberapa helai benang.',
  },
  {
    question: 'Bagaimana bau katun saat dibakar?',
    answer:
      'Katun adalah selulosa murni. Saat dibakar, baunya persis seperti kertas atau daun kering yang terbakar. Abu yang dihasilkan berwarna abu-abu, sangat halus, dan hancur saat disentuh.',
  },
  {
    question: 'Apa arti bulatan hitam keras di ujung serat?',
    answer:
      'Itu adalah tanda tak terbantahkan dari serat sintetis (plastik), seperti poliester atau nilon. Saat meleleh, polimer akan menggumpal menjadi bulatan plastik yang tidak hancur, berbeda dengan abu dari serat alami.',
  },
  {
    question: 'Mengapa wol berbau tidak sedap saat dibakar?',
    answer:
      'Wol dan sutra adalah protein hewani yang mengandung belerang. Saat terkena api, mereka memancarkan aroma tajam rambut atau bulu yang terbakar. Ini adalah cara termudah untuk membedakannya dari serat tumbuhan.',
  },
];

const howToData = [
  {
    name: 'Ekstrak sampel yang representatif',
    text: 'Potong kotak kecil dari kain atau, lebih baik lagi, tarik beberapa helai benang dari lungsin (vertikal) dan pakan (horizontal).',
  },
  {
    name: 'Amati pendekatan ke nyala api',
    text: 'Dekatkan serat perlahan ke nyala api tanpa menyentuhnya. Amati apakah serat mengkerut, meleleh, atau langsung terbakar.',
  },
  {
    name: 'Analisis jenis nyala api dan asap',
    text: 'Perhatikan apakah nyala api stabil atau padam sendiri, dan apakah asapnya berwarna putih, hitam, atau tidak ada.',
  },
  {
    name: 'Evaluasi residu dan bau',
    text: 'Setelah dingin, sentuh abu atau bulatan yang dihasilkan dan amati baunya (kertas, rambut, atau kimia) untuk memastikan keluarga serat.',
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

const flame = {
  cellulosic: 'Terbakar CEPAT dan TERANG (nyala kuning). Tidak meleleh. Terus terbakar saat dijauhkan.',
  protein: 'Terbakar LAMBAT, meletup-letup, dan MENGKERUT menjauhi nyala api. Padam sendiri saat dijauhkan.',
  synthetic: 'MELELEH dan kontraksi cepat, menetes seperti plastik cair. Nyala api berjelaga.',
};

const odor = {
  paper: 'Kertas terbakar, kayu, daun kering.',
  hair: 'Rambut terbakar, tanduk terbakar, bulu.',
  chemical_sweet: 'Kimia AROMATIK (manis, buah).',
  chemical_fishy: 'Kimia ASAM (ikan, daging panggang).',
  vegetable: 'Sayuran rebus (seledri).',
};

const residue = {
  ash_soft: 'Abu ABU-ABU/HITAM halus, lembut dan mudah terbang (hancur saat disentuh).',
  ash_shape: 'Abu ABU-ABU mempertahankan bentuk serat (rapuh).',
  bead_crushable: 'Massa hitam berongga/rapuh (mudah hancur dengan jari).',
  bead_hard: 'Bulatan KERAS dan seperti kaca. Mustahil dipecahkan dengan jari.',
  bead_irregular: 'Massa hitam KERAS dan tidak beraturan.',
};

const smoke = {
  white_gray: 'Putih / Abu-abu terang.',
  gray: 'Abu-abu sedang.',
  black: 'HITAM pekat dan gelap.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'AATCC TM20: Fiber Analysis - Qualitative',
      url: 'https://members.aatcc.org/store/tm20/485/',
    },
    {
      name: 'Textile Fibers: Identification and Testing - NIST',
      url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/circ/nbscircular41e3.pdf',
    },
    {
      name: 'Burn Test Chart for Fiber Identification - Fabric Mart',
      url: 'https://fabricmartfabrics.com/pages/burn-test-chart',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Sains Forensik pada Filamen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uji bakar adalah metode analitis tercepat dan paling akurat untuk membedakan polimer alami dari sintetis tanpa memerlukan mikroskop elektron. Dengan memaparkan serat ke panas, perilaku molekulnya mengungkapkan asal-usulnya: dari selulosa tumbuhan hingga protein hewani atau turunan minyak bumi.',
    },
    {
      type: 'card',
      title: 'Serat Selulosa',
      icon: 'mdi:leaf',
      html: '<strong>Katun</strong> dan <strong>Linen</strong> terbakar cepat tanpa meleleh. Baunya seperti kertas terbakar karena berasal dari kayu atau tumbuhan, meninggalkan abu abu-abu yang mudah terbang saat ditiup.',
    },
    {
      type: 'card',
      title: 'Serat Protein',
      icon: 'mdi:sheep',
      html: '<strong>Wol</strong> dan <strong>Sutra</strong> menjauh dari nyala api. Bau khas rambut terbakar menunjukkan adanya belerang dan keratin. Residunya berupa butiran hitam yang hancur saat disentuh.',
    },
    {
      type: 'card',
      title: 'Serat Sintetis',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>Poliester</strong> dan <strong>Nilon</strong> pada dasarnya adalah plastik. Mereka meleleh membentuk tetesan panas yang mengeras menjadi butiran kaca yang mustahil dipecahkan, dengan bau kimia yang tajam.',
    },
    {
      type: 'title',
      text: 'Matriks Bukti Kimia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Analisis yang tepat memerlukan penyilangan setidaknya tiga bukti. Bau adalah indikator paling andal untuk mengidentifikasi campuran: jika kain "linen" mengeluarkan sedikit aroma plastik dan meninggalkan residu keras, itu menunjukkan campuran poliester yang tidak dinyatakan.',
    },
    {
      type: 'tip',
      title: 'Protokol Keamanan Laboratorium',
      html: '<strong>Ventilasi kritis:</strong> Serat sintetis melepaskan gas beracun saat terbakar. Jangan pernah melakukan tes ini di ruang tertutup.<br><strong>Pemadaman segera:</strong> Selalu sediakan wadah berisi air di dekat Anda. Beberapa serat sintetis dapat meleleh dan menempel pada kulit.',
    },
  ],
  ui: {
    investigationLabel: 'INVESTIGASI',
    stepPrefix: 'LANGKAH',
    stepCompleted: 'ANALISIS SELESAI',
    resetLabel: 'MULAI ULANG',
    positiveId: 'IDENTIFIKASI POSITIF',
    flameLabel: 'Perilaku Api',
    odorLabel: 'Jejak Penciuman',
    residueLabel: 'Residu',
    identifiedAs: 'Sampel diidentifikasi positif sebagai',
    safetyTitle: 'Protokol Keamanan',
    safetyText:
      'Lakukan pengujian ini di area berventilasi, di atas permukaan tahan api. Gunakan pinset logam dan sediakan air di dekat Anda.',
    questions: {
      flame: 'Perilaku dalam api?',
      odor: 'Bau khas?',
      residue: 'Residu akhir?',
      smoke: 'Jenis asap?',
    },
    fiberData: {
      cotton: { name: 'Katun', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Serat nabati alami, lembut dan sejuk. Raja dari kebutuhan dasar.' },
      linen: { name: 'Linen', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Serat nabati yang sangat kuat, dingin dan berkerut khas.' },
      wool: { name: 'Wol / Merino', icon: 'mdi:sheep', color: '#FCD34D', description: 'Serat protein hewani, isolator termal yang sangat baik dan elastis.' },
      silk: { name: 'Sutra', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Serat filamen kontinu hewani. Kilau alami dan sentuhan kering.' },
      cashmere: { name: 'Cashmere', icon: 'mdi:crown', color: '#F59E0B', description: 'Serat kambing Kashmir yang mewah. Sangat lembut, ringan, dan hangat.' },
      mohair: { name: 'Mohair', icon: 'mdi:shimmer', color: '#14B8A6', description: ' "Serat berlian" dari kambing Angora. Kilau alami, sangat tahan lama.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Rambut kelinci Angora. Dikenal karena efek "halo" yang halus dan sangat ringan.' },
      alpaca: { name: 'Alpaka', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Harta karun dari Andes. Serat berongga, termal, hipoalergenik, dan halus.' },
      polyester: { name: 'Poliester', icon: 'mdi:oil', color: '#94A3B8', description: 'Serat sintetis berbasis minyak bumi. Tahan lama, bebas kerut, tidak menyerap keringat.' },
      nylon: { name: 'Nilon (Poliamida)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Serat sintetis yang sangat tahan terhadap tarikan dan abrasi.' },
      acrylic: { name: 'Akrilik', icon: 'mdi:resize', color: '#450A0A', description: 'Imitasi wol sintetis. Lembut, hangat, mudah berbulu (pilling).' },
    },
    burnTestData: [
      { fiberId: 'cotton', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_soft },
      { fiberId: 'linen', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_shape },
      { fiberId: 'wool', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'silk', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'cashmere', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'mohair', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'angora', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'alpaca', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'polyester', flame: flame.synthetic, odor: odor.chemical_sweet, smoke: smoke.black, residue: residue.bead_hard },
      { fiberId: 'nylon', flame: flame.synthetic, odor: odor.vegetable, smoke: smoke.white_gray, residue: residue.bead_hard },
      { fiberId: 'acrylic', flame: flame.synthetic, odor: odor.chemical_fishy, smoke: smoke.black, residue: residue.bead_irregular },
    ],
  },
};
