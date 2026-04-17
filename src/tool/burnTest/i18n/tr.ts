import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'tekstil-yakma-testi';
const title = 'Tekstil Yakma Testi';
const description =
  'Yanma davranışını analiz ederek herhangi bir kumaşın gerçek bileşimini belirleyin. Pamuk, yün, ipek ve sentetiği bilimsel titizlikle ayırt edin.';

const faqData = [
  {
    question: 'Evde yakma testi yapmak güvenli midir?',
    answer:
      'Evet, aşırı önlemler aldığınız sürece güvenlidir: metal cımbız kullanın, ateşe dayanıklı bir yüzeyde (seramik veya metal) çalışın, yakınınızda su bulundurun ve testi havalandırılan bir yerde yapın. Sadece 1x1 cm\'lik küçük bir numuneye veya birkaç ipliğe ihtiyacınız var.',
  },
  {
    question: 'Pamuk yanarken nasıl kokar?',
    answer:
      'Pamuk saf selülozdur. Yanarken tam olarak yanmış kağıt veya kuru yaprak gibi kokar. Ortaya çıkan kül gri, çok ince ve dokunulduğunda dağılan yapıdadır.',
  },
  {
    question: 'Elyafın ucundaki sert siyah boncuk ne anlama gelir?',
    answer:
      'Bu, polyester veya naylon gibi sentetik bir elyafın (plastik) tartışılmaz işaretidir. Erirken, polimer doğal elyafların külünün aksine ufalanmayan plastik bir boncuk haline gelir.',
  },
  {
    question: 'Yün yanarken neden kötü kokar?',
    answer:
      'Yün ve ipek, kükürt içeren hayvansal proteinlerdir. Ateşle temas ettiklerinde keskin bir yanmış saç veya tüy kokusu yayarlar. Bu, onları bitkisel liflerden ayırt etmenin en kolay yoludur.',
  },
];

const howToData = [
  {
    name: 'Temsili bir numune alın',
    text: 'Kumaştan küçük bir kare kesin veya daha iyisi, hem çözgüden (dikey) hem de atkıdan (yatay) birkaç iplik çekin.',
  },
  {
    name: 'Aleve yaklaşmayı gözlemleyin',
    text: 'Elyafı ateşe değdirmeden yavaşça yaklaştırın. Büzülüp büzülmediğini, eriyip erimediğini veya hemen alev alıp almadığını gözlemleyin.',
  },
  {
    name: 'Alev türünü ve dumanı analiz edin',
    text: 'Alevin sabit mi yoksa kendiliğinden mi söndüğüne ve dumanın beyaz, siyah mı yoksa hiç mi olmadığına dikkat edin.',
  },
  {
    name: 'Kalıntı ve kokuyu değerlendirin',
    text: 'Soğuduktan sonra ortaya çıkan küle veya boncuğa dokunun ve elyaf ailesini doğrulamak için kokuyu (kağıt, saç veya kimyasal) hissedin.',
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

const flame = {
  cellulosic: 'HIZLI ve PARLAK yanar (sarı alev). Erimez. Uzaklaştırıldığında yanmaya devam eder.',
  protein: 'YAVAŞ yanar, cızırdar ve alevden uzağa doğru BÜZÜLÜR. Uzaklaştırıldığında kendiliğinden söner.',
  synthetic: 'ERİR ve hızla kasılır, erimiş plastik gibi damlar. Kurumlu alev.',
};

const odor = {
  paper: 'Yanmış kağıt, odun, kuru yaprak.',
  hair: 'Yanmış saç, yanmış boynuz, tüy.',
  chemical_sweet: 'AROMATİK kimyasal (tatlı, meyvemsi).',
  chemical_fishy: 'EKŞİ kimyasal (balık, kızarmış et).',
  vegetable: 'Pişmiş sebze (kereviz).',
};

const residue = {
  ash_soft: 'İnce GRİ/SİYAH kül, yumuşak ve uçucu (dokunulduğunda dağılır).',
  ash_shape: 'GRİ kül elyaf şeklini korur (gevrek).',
  bead_crushable: 'İçi boş/kırılgan siyah kütle (parmaklarla kolayca ezilir).',
  bead_hard: 'SERT ve camsı boncuk. Parmaklarla kırmak imkansızdır.',
  bead_irregular: 'SERT ve düzensiz siyah kütle.',
};

const smoke = {
  white_gray: 'Beyaz / Açık gri.',
  gray: 'Orta gri.',
  black: 'Yoğun koyu SİYAH duman.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça',
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
      text: 'Filamentin Adli Bilimi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Yakma testi, elektron mikroskobuna başvurmadan doğal polimerleri sentetiklerden ayırmak için en hızlı ve en kesin analitik yöntemdir. Bir elyafı ısıya maruz bırakarak, moleküler davranışı kökenini ortaya çıkarır: bitkisel selülozdan hayvansal proteinlere veya petrol türevlerine kadar.',
    },
    {
      type: 'card',
      title: 'Selülozik Lifler',
      icon: 'mdi:leaf',
      html: '<strong>Pamuk</strong> ve <strong>Keten</strong> erimeden hızlı bir şekilde yanar. Kağıt yanığı gibi kokarlar çünkü odun veya bitkiden gelirler, üflendiğinde dağılan uçucu gri bir kül bırakırlar.',
    },
    {
      type: 'card',
      title: 'Protein Lifler',
      icon: 'mdi:sheep',
      html: '<strong>Yün</strong> ve <strong>İpek</strong> alevden uzaklaşır. Karakteristik yanmış saç kokuları kükürt ve keratin varlığını gösterir. Kalıntı, dokunulduğunda ufalanan siyah bir boncuktur.',
    },
    {
      type: 'card',
      title: 'Sentetik Lifler',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>Polyester</strong> ve <strong>Naylon</strong> esasen plastiktir. Erirler ve kırılması imkansız camsı bir boncuk halinde sertleşen sıcak bir damla oluştururlar, keskin bir kimyasal koku yayarlar.',
    },
    {
      type: 'title',
      text: 'Kimyasal Kanıt Matrisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Doğru bir analiz, en az üç kanıtın çapraz kontrolünü gerektirir. Koku, karışımları tanımlamak için en güvenilir göstergedir: Eğer bir "keten" kumaş hafif bir plastik aroması veriyor ve sert kalıntılar bırakıyorsa, bu beyan edilmemiş bir polyester karışımına işaret eder.',
    },
    {
      type: 'tip',
      title: 'Laboratuvar Güvenlik Protokolü',
      html: '<strong>Kritik havalandırma:</strong> Sentetik lifler yanarken toksik gazlar salar. Bu testi asla kapalı alanlarda yapmayın.<br><strong>Anında söndürme:</strong> Her zaman yanınızda su dolu bir kap bulundurun. Bazı sentetik lifler eriyip cilde yapışabilir.',
    },
  ],
  ui: {
    investigationLabel: 'İNCELEME',
    stepPrefix: 'ADIM',
    stepCompleted: 'ANALİZ TAMAMLANDI',
    resetLabel: 'YENİDEN BAŞLAT',
    positiveId: 'POZİTİF TANIMLAMA',
    flameLabel: 'Alev Davranışı',
    odorLabel: 'Koku İzi',
    residueLabel: 'Kalıntı',
    identifiedAs: 'Numune pozitif olarak şu şekilde tanımlandı:',
    safetyTitle: 'Güvenlik Protokolü',
    safetyText:
      'Bu testi havalandırılan bir yerde, ateşe dayanıklı bir yüzeyde yapın. Metal cımbız kullanın ve yanınızda su bulundurun.',
    questions: {
      flame: 'Alevdeki davranışı?',
      odor: 'Karakteristik kokusu?',
      residue: 'Nihai kalıntısı?',
      smoke: 'Duman türü?',
    },
    fiberData: {
      cotton: { name: 'Pamuk', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Doğal bitkisel lif, yumuşak ve nefes alabilir. Temel parçaların kralı.' },
      linen: { name: 'Keten', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Çok güçlü bitkisel lif, serin ve karakteristik kırışıklığa sahip.' },
      wool: { name: 'Yün / Merinos', icon: 'mdi:sheep', color: '#FCD34D', description: 'Hayvansal protein lifi, mükemmel ısı yalıtkanı ve esnektir.' },
      silk: { name: 'İpek', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Hayvansal sürekli filament lifi. Doğal parlaklık ve kuru dokunuş.' },
      cashmere: { name: 'Kaşmir', icon: 'mdi:crown', color: '#F59E0B', description: 'Kaşmir keçisinden elde edilen lüks lif. Son derece yumuşak, hafif ve sıcaktır.' },
      mohair: { name: 'Tiftik (Mohair)', icon: 'mdi:shimmer', color: '#14B8A6', description: 'Ankara keçisinin "elmas lifi". Doğal parlaklık, çok dayanıklı.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Ankara tavşanı tüyü. Kabarık "halo" etkisi ve aşırı hafifliği ile bilinir.' },
      alpaca: { name: 'Alpaka', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'And Dağları\'nın hazinesi. İçi boş, termal, hipoalerjenik ve ipeksi lif.' },
      polyester: { name: 'Polyester', icon: 'mdi:oil', color: '#94A3B8', description: 'Petrol bazlı sentetik lif. Dayanıklı, kırışmaz, nefes almaz.' },
      nylon: { name: 'Naylon (Poliamid)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Çekme ve aşınmaya karşı çok dirençli sentetik.' },
      acrylic: { name: 'Akrilik', icon: 'mdi:resize', color: '#450A0A', description: 'Sentetik yün taklidi. Yumuşak, sıcak, tüylenme (pilling) eğilimlidir.' },
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
