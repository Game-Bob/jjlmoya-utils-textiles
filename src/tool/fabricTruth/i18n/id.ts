import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'kejujuran-tekstil-analisis-serat';
const title = 'Kejujuran Tekstil: Analisis Kualitas Serat';
const description = 'Temukan kualitas asli pakaian Anda dengan menganalisis komposisinya. Apakah ini katun asli atau plastik mahal? Analisis serat ilmiah.';

const faqData = [
  {
    question: 'Apa itu "Greenwashing" dalam dunia fashion?',
    answer: 'Ini adalah teknik pemasaran di mana merek menggunakan istilah seperti "Ekologis" atau "Berkelanjutan" tanpa bukti nyata. Menganalisis komposisi serat yang sebenarnya adalah satu-satunya cara untuk memverifikasi apakah pakaian tersebut benar-benar alami atau sintetis.',
  },
  {
    question: 'Mengapa polister seringkali dianggap berkualitas lebih rendah daripada katun?',
    answer: 'Poliester adalah plastik (PET). Meskipun tahan lama, ia tidak menyerap keringat, memicu bau tidak sedap karena bakteri, dan menghasilkan mikroplastik di setiap pencucian. Serat alami seperti katun atau linen menawarkan regulasi termal yang lebih baik.',
  },
  {
    question: 'Apakah buruk jika pakaian saya mengandung elastane?',
    answer: 'Dalam jumlah kecil (1-5%), elastane (Lycra) memberikan kenyamanan dan kesesuaian bentuk. Namun, ia sangat menyulitkan daur ulang pakaian karena mencampur plastik dengan serat alami, yang seringkali mengindikasikan produk "fast fashion".',
  },
  {
    question: 'Bagaimana cara mendeteksi pakaian berkualitas tinggi melalui labelnya?',
    answer: 'Carilah komposisi monomaterial (100% Katun, 100% Wol). Campuran kompleks sering digunakan untuk menekan biaya produksi dan menyembunyikan serat sintetis di bawah nama dagang yang menarik.',
  },
];

const howToData = [
  {
    name: 'Temukan label bagian dalam',
    text: 'Cari label komposisi berwarna putih yang biasanya ada di bagian samping dalam atau di kerah pakaian Anda.',
  },
  {
    name: 'Identifikasi komponen',
    text: 'Baca persentase setiap serat (misal: 70% Katun, 30% Poliester).',
  },
  {
    name: 'Masukkan data ke alat analisis',
    text: 'Tulis proporsi serat ke dalam alat kami untuk mendapatkan skor kualitas teknis.',
  },
  {
    name: 'Interpretasikan diagnosis',
    text: 'Tinjau laporan yang dihasilkan untuk memahami apakah pakaian Anda menyerap keringat, tahan lama, atau memerlukan perawatan khusus karena komposisi sintetisnya.',
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
  description: description,
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
  description: description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Kejujuran Tekstil',
    addFiber: 'Tambah Serat',
    total: 'Total',
    composition: 'Analisis Komposisi',
    description: 'Masukkan persentase apa adanya seperti yang tertera pada label pakaian Anda untuk mengungkap kebenaran tentang kualitasnya.',
    verdict: 'Putusan',
    breathability: 'Daya Serap Keringat',
    durability: 'Ketahanan',
    warmth: 'Kehangatan',
    careWarning: 'Peringatan Perawatan Khusus',
    specialCareWarning: 'PENCUCIAN STANDAR: Selalu ikuti instruksi pada label fisik.',
    validationError: 'Komposisi harus berjumlah tepat 100% untuk melihat putusan',
    actualTotal: 'Aktual',
    missingLabel: 'kurang',
    disclaimer: 'Data daya serap, ketahanan, dan kehangatan adalah estimasi berdasarkan rata-rata industri untuk setiap jenis serat.',
    careWarnings: {
      delicate: 'SANGAT HALUS: Cuci dengan tangan menggunakan air dingin. Jangan gunakan mesin pengering. Hindari memeras terlalu kuat.',
      wool: 'WOL / BULU MULIA: Cuci menggunakan air dingin dengan program khusus. Jemur mendatar untuk menghindari perubahan bentuk. Jangan gunakan mesin pengering.',
      linen: 'LINEN: Cenderung mudah kusut. Setrika dalam kondisi agak lembap untuk hasil terbaik.',
      semisynthetic: 'SEMI-SINTETIS: Melemah saat basah. Rawat dengan hati-hati dan jangan gunakan pengering putar (centrifuge) yang kuat.',
      standard: 'PENCUCIAN STANDAR: Selalu ikuti instruksi pada label fisik.',
    },
    fiberData: {
      cotton: {
        name: 'Katun',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Linen',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Wol / Merino',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'Sutra',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Cashmere',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: 'Mohair',
        family: 'natural',
        breathability: 8,
        durability: 9,
        warmth: 9,
        isNoble: true,
      },
      angora: {
        name: 'Angora',
        family: 'natural',
        breathability: 8,
        durability: 4,
        warmth: 10,
        isNoble: true,
      },
      alpaca: {
        name: 'Alpaca',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: 'Poliester',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: 'Viscose / Rayon',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'Nilon (Polyamide)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: 'Akrilik',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: 'Plastik Mahal',
        description: 'Sebagian besar pakaian ini adalah minyak bumi. Bersiaplah untuk berkeringat dan munculnya bola-bola benang (pilling) dengan cepat.',
      },
      hook: {
        label: 'Umpan Pemasaran',
        description: 'Persentase kecil serat mulia itu ada di sana hanya untuk dicantumkan di label. Anda tidak akan merasakan manfaatnya.',
      },
      fragile: {
        label: 'Lembut tapi Rapuh',
        description: 'Sangat nyaman saat disentuh, tetapi hati-hati saat mencucinya: cenderung mudah berubah bentuk dan menyusut.',
      },
      natural: {
        label: 'Kualitas Alami',
        description: 'Pakaian yang menyerap keringat dan tahan lama. Ideal untuk kulit sensitif dan penggunaan jangka panjang.',
      },
      technical: {
        label: 'Pakaian Teknis / Ultra-Sintetis',
        description: 'Kecuali ini pakaian olahraga khusus, Anda membayar untuk plastik murni.',
      },
      luxury: {
        label: 'Kemewahan Nyata',
        description: 'Investasi dalam kenyamanan dan daya tahan. Perlakukan dengan rasa hormat yang layak diterimanya.',
      },
      balanced: {
        label: 'Campuran Seimbang',
        description: 'Kombinasi fungsional, kemungkinan besar berupaya mencari keseimbangan antara biaya dan ketahanan.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'Kebenaran di Balik Label: Panduan Utama Komposisi Tekstil', level: 2 },
    { type: 'paragraph', html: 'Pernahkah Anda bertanya-tanya mengapa kaos bermerek itu membuat Anda sangat berkeringat, atau mengapa sweter "wol" itu terasa gatal sekali? Jawabannya bukan pada desainnya, melainkan pada kimia seratnya.' },
    { type: 'paragraph', html: 'Di dunia yang didominasi oleh <strong>Fast Fashion</strong>, kualitas kain telah dikesampingkan demi estetika sesaat. Namun, memahami komposisi tekstil adalah satu-satunya cara untuk melakukan pembelian yang cerdas, tahan lama, dan ramah bagi kulit Anda. Alat <strong>Kejujuran Tekstil</strong> kami menganalisis persentase resmi untuk mengungkap apakah Anda menghadapi pakaian berkualitas atau sekadar balok plastik hasil olahan.' },
    { type: 'title', text: 'Metodologi Kami', level: 2 },
    { type: 'paragraph', html: 'Kami menggunakan algoritme berbobot berdasarkan tiga pilar utama yang diambil dari standar industri Eropa dan Amerika Utara:' },
    { type: 'list', items: ['<strong>Daya Serap Keringat:</strong> Kemampuan serat untuk memungkinkan uap air dan udara lewat.', '<strong>Ketahanan:</strong> Ketahanan terhadap abrasi, tarikan, dan pembentukan <strong>pilling</strong> (bola benang).', '<strong>Efisiensi Termal:</strong> Kemampuan untuk menahan panas atau memberikan kesejukan mekanis.'] },
    { type: 'tip', title: 'Penting', html: 'Hukum mewajibkan semua pakaian yang dijual di UE dan AS untuk mencantumkan komponennya dalam urutan persentase yang menurun. Jika pakaian tidak memiliki label atau label tidak terbaca, waspadalah: kemungkinan besar ia tidak memenuhi standar keamanan tekstil minimum.' },
    { type: 'title', text: '"Tipuan" Umum dalam Ritel', level: 2 },
    { type: 'paragraph', html: 'Terdapat teknik pemasaran yang sangat halus yang dirancang untuk meningkatkan persepsi nilai dari pakaian yang biasa saja. Berikut cara mendeteksinya:' },
    { type: 'card', title: 'Umpan Serat Mulia', icon: 'mdi:alert', html: 'Anda akan melihat label yang bertuliskan "DENGAN CASHMERE" atau "DENGAN SUTRA" dengan huruf besar. Saat melihat komposisinya, Anda menemukan 3% sutra dan 97% poliester. 3% itu tidak memberikan kelembutan, kilau, maupun kehangatan; itu hanya berfungsi agar merek bisa menaikkan harga sebesar 20%.' },
    { type: 'card', title: 'Mitos "Viscose Ekologis"', icon: 'mdi:leaf', html: 'Meskipun viscose berasal dari selulosa (kayu), proses pembuatannya saat ini seringkali sangat mencemari dan hasil akhirnya adalah serat yang melemah drastis saat basah. Kecuali jika ia adalah <strong>Lyocell</strong> atau <strong>Tencel</strong>, ketahanannya terbatas.' },
    { type: 'title', text: 'Analisis Mendalam Berdasarkan Kategori', level: 2 },
    { type: 'title', text: '1. Serat Alami (Bangga Organik)', level: 3 },
    { type: 'paragraph', html: 'Mereka adalah standar emas. <strong>Katun</strong> serat panjang (seperti Pima atau Mesir) menawarkan kelembutan abadi. <strong>Linen</strong> secara ilmiah adalah serat terbaik untuk cuaca panas karena struktur molekulnya yang menolak panas dan menyerap kelembapan. <strong>Wol</strong> dan <strong>Hemp</strong> (Ganja) adalah antibakteri alami; tidak perlu dicuci terlalu sering karena tidak menahan bau.' },
    { type: 'title', text: '2. Serat Semi-Sintetis (Si Hibrida)', level: 3 },
    { type: 'paragraph', html: 'Di sini kita menemukan <strong>Viscose</strong>, <strong>Rayon</strong>, dan <strong>Modal</strong>. Terasa seperti sutra tetapi seharga katun. Sangat baik untuk pakaian dengan drape (jatuh kain) yang bagus, tetapi mereka "haus": menyerap banyak air dan lama kering, yang dapat memicu munculnya jamur jika tidak dirawat. <strong>Lyocell (Tencel)</strong> adalah versi premium dan berkelanjutan dari kelompok ini, dengan siklus produksi tertutup dan ketahanan yang lebih baik.' },
    { type: 'title', text: '3. Serat Sintetis (Plastik yang Dipintal)', level: 3 },
    { type: 'paragraph', html: '<strong>Poliester</strong> adalah raja pasar. Murah, tidak mudah kusut, dan abadi (secara harfiah, butuh 200 tahun untuk terurai). Masalahnya adalah ia tidak bernapas. Ia menciptakan mikroklimat lembap antara kain dan kulit Anda, tempat berkembang biak yang ideal bagi bakteri. <strong>Akrilik</strong> adalah imitasi murah dari wol: hangat, tetapi menghasilkan banyak listrik statis dan penuh dengan bola benang dalam dua kali pencucian.' },
    { type: 'title', text: 'Kiat Bertahan Hidup Tekstil', level: 2 },
    { type: 'paragraph', html: 'Bahkan pakaian terbaik di dunia pun bisa hancur hanya dengan satu kali pencucian yang tidak tepat. Berikut adalah aturan emas universal:' },
    { type: 'tip', title: 'Air Dingin Adalah Teman Anda', html: '90% pakaian tidak membutuhkan suhu lebih dari 30°C. Panas merusak serat elastis dan menyusutkan serat alami.' },
    { type: 'tip', title: 'Sedikit Lebih Baik (Deterjen)', html: 'Kelebihan sabun meninggalkan residu yang menarik kotoran dan membuat pakaian terasa kaku.' },
    { type: 'tip', title: 'Pengering Mesin: Musuh yang Halus', html: 'Serat halus yang Anda lihat di filter pengering adalah bagian dari pakaian Anda yang terlepas karena gesekan dan panas.' },
    { type: 'tip', title: 'Cuci dengan Posisi Terbalik', html: 'Melindungi warna dan sulaman dari gesekan dengan drum mesin cuci dan pakaian lainnya.' },
    { type: 'paragraph', html: '"Beli lebih sedikit, pilih lebih baik, dan buat bertahan lama." — Alat analisis ini adalah langkah pertama Anda menuju lemari pakaian yang sadar dan berkualitas tinggi.' },
  ],
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'FTC - Panduan Pelabelan Tekstil',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'Komisi Eropa - Regulasi Tekstil',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Simbol Perawatan Tekstil',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
