import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'test-combustione-tessile';
const title = 'Test di Combustione Tessile';
const description =
  'Identifica la reale composizione di qualsiasi tessuto analizzando il suo comportamento alla fiamma. Differenzia cotone, lana, seta e sintetici con rigore scientific.';

const faqData = [
  {
    question: 'È sicuro eseguire un test di combustione a casa?',
    answer:
      'Sì, a condizione di prendere precauzioni estreme: usa pinzette metalliche, lavora su una superficie ignifuga (ceramica o metallo), tieni dell\'acqua vicina ed esegui il test in un luogo ventilato. Ti serve solo un piccolo campione di 1x1 cm o alcuni fili.',
  },
  {
    question: 'Che odore ha il cotone quando brucia?',
    answer:
      'Il cotone è pura cellulosa. Quando brucia, emana un odore identico a quello della carta bruciata o delle foglie secche. La cenere risultante è grigia, molto fine e si sgretola al tatto.',
  },
  {
    question: 'Cosa indica una pallina nera e dura alla fine della fibra?',
    answer:
      'È il segno inequivocabile di una fibra sintetica (plastica), come il poliestere o il nylon. Fondendosi, il polimero si aggrega in una perla plastica che non si sbriciola, a differenza delle ceneri delle fibre naturali.',
  },
  {
    question: 'Perché la lana puzza quando brucia?',
    answer:
      'La lana e la seta sono proteine animali che contengono zolfo. A contatto con il fuoco, emettono un odore penetrante di capelli o piume bruciate. È il modo più semplice per differenziarle dalle fibre vegetali.',
  },
];

const howToData = [
  {
    name: 'Estrarre un campione rappresentativo',
    text: 'Taglia un piccolo quadrato di tessuto o, meglio ancora, estrai alcuni fili sia dall\'ordito (verticale) che dalla trama (orizzontale).',
  },
  {
    name: 'Osservare l\'avvicinamento alla fiamma',
    text: 'Avvicina lentamente la fibra al fuoco senza toccarlo. Osserva se si restringe, si fonde o se prende fuoco immediatamente.',
  },
  {
    name: 'Analizzare il tipo di fiamma e fumo',
    text: 'Fai attenzione se la fiamma è costante o si spegne da sola, e se il fumo è bianco, nero o assente.',
  },
  {
    name: 'Valutare il residuo e l\'odore',
    text: 'Una volta freddo, tocca la cenere o la perla risultante e percepisci l\'odore (carta, capelli o chimico) per confermare la famiglia della fibra.',
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
  inLanguage: 'it',
};

const flame = {
  cellulosic: 'Brucia RAPIDAMENTE e con LUMINOSITÀ (fiamma gialla). Non fonde. Continua a bruciare dopo la rimozione.',
  protein: 'Brucia LENTAMENTE, scoppietta e si RESTRINGE allontanandosi dalla fiamma. Si autoestingue dopo la rimozione.',
  synthetic: 'FONDE e si contrae rapidamente, gocciola come plastica fusa. Fiamma fuligginosa.',
};

const odor = {
  paper: 'Carta bruciata, legno, foglie secche.',
  hair: 'Capelli bruciati, corno bruciato, piume.',
  chemical_sweet: 'Chimico AROMATICO (dolce, fruttato).',
  chemical_fishy: 'Chimico ACIDO (pesce, carne arrostita).',
  vegetable: 'Verdure cotte (sedano).',
};

const residue = {
  ash_soft: 'Cenere GRIGIA/NERA fine, soffice e volatile (si sgretola al tocco).',
  ash_shape: 'La cenere GRIGIA mantiene la forma della fibra (friabile).',
  bead_crushable: 'Massa nera cava/fragile (si polverizza facilmente con le dita).',
  bead_hard: 'Perla DURA e vitrea. Impossibile da rompere con le dita.',
  bead_irregular: 'Massa nera DURA e irregolare.',
};

const smoke = {
  white_gray: 'Bianco / Grigio chiaro.',
  gray: 'Grigio medio.',
  black: 'Nero DENSO e scuro.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
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
      text: 'La Scienza Forense del Filamento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il test di combustione è il metodo analitico più rapido e preciso per differenziare i polimeri naturali da quelli sintetici senza ricorrere al microscopio elettronico. Sottoponendo una fibra al calore, il suo comportamento molecolare rivela l\'origine: dalla cellulosa vegetale alle proteine animali o ai derivati del petrolio.',
    },
    {
      type: 'card',
      title: 'Fibre Cellulosiche',
      icon: 'mdi:leaf',
      html: 'Il <strong>Cotone</strong> e il <strong>Lino</strong> bruciano rapidamente senza fondere. Odorano di carta bruciata perché derivano dal legno o dalle piante, lasciando una cenere grigia volatile che si disperde soffiando.',
    },
    {
      type: 'card',
      title: 'Fibre Proteiche',
      icon: 'mdi:sheep',
      html: 'La <strong>Lana</strong> e la <strong>Seta</strong> si allontanano dalla fiamma. Il loro odore caratteristico di capelli bruciati indica la presenza di zolfo e cheratina. Il residuo è una pallina nera che si polverizza al tatto.',
    },
    {
      type: 'card',
      title: 'Fibre Sintetiche',
      icon: 'mdi:bottle-soda-classic',
      html: 'Il <strong>Poliestere</strong> e il <strong>Nylon</strong> sono essenzialmente plastiche. Si fondono formando una goccia calda che si indurisce in una perla vitrea impossibile da rompere, con un odore chimico pungente.',
    },
    {
      type: 'title',
      text: 'Matrice di Evidenza Chimica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un\'analisi precisa richiede l\'incrocio di almeno tre evidenze. L\'odore è l\'indicatore più affidabile per identificare le miscele: se un tessuto di "lino" emana un leggero aroma plastico e lascia residui duri, indica una miscela con poliestere non dichiarata.',
    },
    {
      type: 'tip',
      title: 'Protocollo di Sicurezza di Laboratorio',
      html: '<strong>Ventilazione critica:</strong> Le fibre sintetiche rilasciano gas tossici durante la combustione. Non eseguire mai questo test in spazi chiusi.<br><strong>Estinzione immediata:</strong> Tieni sempre un contenitore con acqua accanto. Alcune fibre sintetiche possono fondersi e aderire alla pelle.',
    },
  ],
  ui: {
    investigationLabel: 'INVESTIGAZIONE',
    stepPrefix: 'PASSO',
    stepCompleted: 'ANALISI COMPLETATA',
    resetLabel: 'REINIZIA',
    positiveId: 'IDENTIFICAZIONE POSITIVA',
    flameLabel: 'Comportamento Fiamma',
    odorLabel: 'Traccia Olfattiva',
    residueLabel: 'Residuo',
    identifiedAs: 'Campione identificato positivamente come',
    safetyTitle: 'Protocollo di Sicurezza',
    safetyText:
      'Esegui questo test in un luogo ventilato, su una superficie ignifuga. Usa pinzette metalliche e tieni dell\'acqua vicina.',
    questions: {
      flame: 'Comportamento alla fiamma?',
      odor: 'Odore caratteristico?',
      residue: 'Residuo finale?',
      smoke: 'Tipo di fumo?',
    },
    fiberData: {
      cotton: { name: 'Cotone', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Fibra vegetale naturale, morbida e traspirante. Il re dei basic.' },
      linen: { name: 'Lino', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Fibra vegetale molto resistente, fresca e con la caratteristica stropicciatura.' },
      wool: { name: 'Lana / Merino', icon: 'mdi:sheep', color: '#FCD34D', description: 'Fibra proteica animale, eccellente isolante termico ed elastica.' },
      silk: { name: 'Seta', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Fibra animale a filamento continuo. Lucentezza naturale e mano secca.' },
      cashmere: { name: 'Cashmere', icon: 'mdi:crown', color: '#F59E0B', description: 'Pregiata fibra di capra del Kashmir. Estremamente morbida, leggera e calda.' },
      mohair: { name: 'Mohair', icon: 'mdi:shimmer', color: '#14B8A6', description: 'La "fibra diamante" della capra d\'Angora. Lucentezza naturale, molto resistente.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Pelo del coniglio d\'Angora. Noto per il suo effetto "halo" soffice ed estrema leggerezza.' },
      alpaca: { name: 'Alpaca', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Tesoro delle Ande. Fibra cava, termica, ipoallergenica e setosa.' },
      polyester: { name: 'Poliestere', icon: 'mdi:oil', color: '#94A3B8', description: 'Fibra sintetica derivata dal petrolio. Resistente, non si gualcisce, non traspira.' },
      nylon: { name: 'Nylon (Poliammide)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Sintetica molto resistente alla trazione e all\'abrasione.' },
      acrylic: { name: 'Acrilico', icon: 'mdi:resize', color: '#450A0A', description: 'Imitazione sintetica della lana. Morbida, calda, tende a fare pallini.' },
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
