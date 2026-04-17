import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'elyaflarin-boyamaya-hazirlanmasi';
const title = 'Elyafların Boyamaya Hazırlanması';
const description =
  'Doğal boyama öncesinde yün, ipek ve pamuğu hazırlamak için WOF hesaplayıcı, mordanlama protokolleri ve termal rampalar.';

const faqData = [
  {
    question: 'WOF (Weight of Fiber) nedir?',
    answer:
      'WOF, gerekli pigment veya mordan miktarını hesaplamak için kullanılan standart sistemdir. Elyafın kuru ağırlığına dayanır. Örneğin, 100g yün için soğan kabuğunda %100 WOF, 100g soğan kabuğuna ihtiyacınız olduğu anlamına gelir.',
  },
  {
    question: 'Mordanlama neden gereklidir?',
    answer:
      'Mordan (şap gibi), tekstil elyafı ile doğal pigment arasında kimyasal bir köprü görevi görür. Bu köprü olmadan, çoğu boya sabitlenmez ve ilk yıkamada akar (düşük ışık ve sürtünme haslığı).',
  },
  {
    question: 'Hayvansal ve bitkisel elyafları hazırlamak arasındaki fark nedir?',
    answer:
      'Hayvansal elyaflar (yün gibi protein lifleri) tek başına şapı çok iyi kabul eder. Bitkisel elyaflar (pamuk veya keten gibi selülozik lifler), elyafı metalik mordanı kabul etmesi için "kandırmak" amacıyla önceden bir tanen adımı gerektirir.',
  },
  {
    question: 'Boyamadaki termal rampa nedir?',
    answer:
      'Boyama banyosunun sıcaklığının kademeli olarak (dakikada yaklaşık 1-2°C) artırılmasıdır. Özellikle yün için hayati önem taşır; sıcaklık değişimleri ani olursa yün keçeleşebilir veya "çekebilir".',
  },
];

const howToData = [
  {
    name: 'Temizleme ve Pişirme (Degumming)',
    text: 'Mordanın homojen bir şekilde nüfuz etmesini engelleyen yağları, mumları veya endüstriyel kolaları gidermek için elyafı nötr deterjanla yıkayın.',
  },
  {
    name: 'Kuru Elyafı Tartma',
    text: 'Kuru malzemenin tam ağırlığını ölçün. Bu değer, tüm WOF (Weight of Fiber) hesaplamalarının temelidir.',
  },
  {
    name: 'Hesaplama ve Mordan Banyosu',
    text: 'Mordanı (örneğin %15 WOF potasyum şapı) sıcak suda eritin ve elyafı daldırın, sıcaklığı protokole göre sabit tutun.',
  },
  {
    name: 'Olgunlaştırma ve Durulama',
    text: 'Metalin derinlemesine sabitlenmesi için mordanlanmış elyafı (tercihen 24 saat) dinlendirin ve ardından asıl boyama banyosuna geçin.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Tekstil Sanatçısı ve Doğal Boyalar',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mordanlamanın Arkasındaki Bilim',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir elyafı boyamaya hazırlamak sadece onu yıkamak değildir. Bu, "mordanlama" adı verilen moleküler düzeyde bir kimya mühendisliği sürecidir. Kelime Latince <i>mordere</i> (ısırmak) kökünden gelir ve işlevi elyaf ile pigment arasında kimyasal bir köprü görevi görmektir. Bu köprü olmadan, çoğu doğal boya ilk durulamada akar gider.',
    },
    {
      type: 'card',
      title: 'Ana Kavram',
      icon: 'mdi:molecule',
      html: 'Mordan, elyafın polimerlerine ve boyar maddeye aynı anda tutunan boş valanslara (bağ kurma kapasitesine) sahiptir.',
    },
    {
      type: 'title',
      text: 'Elyaf Ayırımı',
      level: 2,
    },
    {
      type: 'card',
      title: 'Protein Lifleri: Yün ve İpek',
      icon: 'mdi:sheep',
      html: 'Bu lifler, metallere karşı doğal ilgisi çok yüksek olan amino asit zincirlerinden oluşur. Isı, lifin pullarını açarak şap tuzlarının derinlere nüfuz etmesini sağlar. Yumuşaklığı koruyan asidik pH\'ı sürdürmek için <strong>Krem Tartar</strong> kullanımı hayati önem taşır.',
    },
    {
      type: 'card',
      title: 'Selülozik Lifler: Pamuk ve Keten',
      icon: 'mdi:leaf',
      html: 'Selülozda kolayca erişilebilir bağ noktaları yoktur. Bu nedenle <strong>iki aşamalı protokol</strong> kullanırız: önce selüloza tutunan tanenler, ardından bu tanenlere tutunan şap. Bu ön işlem olmadan renk soluk ve dayanıksız olacaktır.',
    },
    {
      type: 'title',
      text: 'Banyo Kontrolü: WOF, Sıcaklık ve pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Profesyonel ve tekrarlanabilir sonuçlar elde etmek için <strong>WOF (Weight of Fabric)</strong> kavramı yasadır. Her şey elyafın kuru ağırlığının yüzdesi olarak ölçülür. Aşırı mordan elyafı doyurabilir ve sertleşmesine veya nihai rengi değiştiren metalik birikintilere neden olabilir.',
    },
    {
      type: 'tip',
      title: 'Termal Rampa',
      html: 'Isı, kimyasal reaksiyonu hızlandıran bir katalizör görevi görür. Bununla birlikte, yünde ani bir sıcaklık değişimi, pulların birbirine kalıcı olarak kilitlenmesine neden olarak keçeleşmiş ve çekmiş bir doku ile sonuçlanabilir.',
    },
    {
      type: 'tip',
      title: 'pH Faktörü',
      html: 'Pek çok doğal boya, canlı pH göstergeleridir. pH, tuzların çözünürlüğünü ve elyafın korunmasını etkiler. İpek, banyo çok alkali olursa parlaklığını kaybedebilir. pH\'ı sitrik asit veya kalsiyum karbonat ile ayarlamak temeldir.',
    },
    {
      type: 'title',
      text: 'Maddeler ve Güvenlik',
      level: 2,
    },
    {
      type: 'card',
      title: 'Potasyum Şapı',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Evrensel mordan, renksiz ve son derece etkilidir. Protein lifleri için referans maddedir.',
    },
    {
      type: 'card',
      title: 'Krem Tartar',
      icon: 'mdi:spoon-sugar',
      html: 'Hayvansal liflerde sabitlemeyi ve yumuşaklığı artıran yardımcı madde. pH\'ı asidik tutar.',
    },
    {
      type: 'tip',
      title: 'Güvenlik Protokolü',
      html: 'Tencereleri özel olarak boyama için kullanın, asla yemek için kullanmayın.<br>Toz mordanlarla çalışırken eldiven ve maske kullanın.<br>Buhar birikmesini önlemek için sürekli havalandırma sağlayın.',
    },
  ],
  ui: {
    profileTitle: 'Profil Seçimi',
    profileDesc: 'Kimyasal protokol, elyafın moleküler kökenine göre ayrılır',
    proteinTitle: 'Protein Lifleri',
    proteinOrigin: 'Hayvansal Köken',
    proteinDesc: 'Yün, ipek, alpaka, tiftik veya kaşmir. Kontrollü sıcaklık ve asidik pH gerektirir.',
    cellulosicTitle: 'Selülozik Lifler',
    cellulosicOrigin: 'Bitkisel Köken',
    cellulosicDesc: 'Pamuk, keten, kenevir veya jüt. Pigmenti sabitlemek için tanenlerle ön mordanlama gerektirir.',
    wofTitle: 'WOF Hesaplayıcı',
    weightLabel: 'Kuru Giysi Ağırlığı (g)',
    weightUnit: 'gr',
    wofEmptyMsg: 'Hesaplamaları etkinleştirmek için bir profil seçin',
    alumLabel: 'Şap',
    cremLabel: 'Krem Tartar',
    ironLabel: 'Demir (Dikkat)',
    rampTitle: 'Termal Rampa',
    rampEmptyTitle: 'Seçim Bekleniyor',
    rampEmptyDesc: 'Termal döngüyü görmek için bir elyaf seçin',
    phTitle: 'pH Stabilizatörü',
    phDesc: 'Renk doygunluğu için kritik faktör',
    phVolumeLabel: 'Banyo Hacmi (L)',
    phSliderLabel: 'Mevcut pH',
    phAcidLabel: 'Asidik (1)',
    phAlkalineLabel: 'Alkali (14)',
    phEmptyMsg: 'Stabilizatörü etkinleştirmek için bir profil seçin',
    phStrings: {
      optimal: 'pH optimal',
      raisePrefix: 'Kalsiyum Karbonat veya Soda Külü ekleyin. Yaklaşık',
      raiseSuffix: 'g, şuna yükseltmek için:',
      lowerPrefix: 'Sitrik Asit veya Sirke ekleyin. Yaklaşık',
      lowerSuffix: 'ml, şuna düşürmek için:',
    },
    proteinFibers: [
      { id: 'wool', name: 'Yün / Merino', icon: 'mdi:sheep' },
      { id: 'silk', name: 'İpek', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Kaşmir', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Tiftik (Mohair)', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaka', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Pamuk', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Keten', icon: 'mdi:leaf' },
    ],
  },
};
