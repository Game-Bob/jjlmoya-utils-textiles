import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'textiel-brandproef';
const title = 'Textiel Brandproef';
const description =
  'Identificeer de werkelijke samenstelling van elke stof door het brandgedrag te analyseren. Maak een wetenschappelijk onderscheid tussen katoen, wol, zijde en synthetische stoffen.';

const faqData = [
  {
    question: 'Is het veilig om thuis een brandproef uit te voeren?',
    answer:
      'Ja, zolang je extreme voorzorgsmaatregelen neemt: gebruik een metalen pincet, werk op een vuurvaste ondergrond (keramiek of metaal), houd water in de buurt en voer de test uit in een geventileerde ruimte. Je hebt slechts een klein monster van 1x1 cm of een paar draadjes nodig.',
  },
  {
    question: 'Hoe ruikt katoen als het brandt?',
    answer:
      'Katoen is pure cellulose. Als het brandt, ruikt het precies naar brandend papier of droge bladeren. De resulterende as is grijs, zeer fijn en valt uit elkaar bij aanraking.',
  },
  {
    question: 'Wat betekent een hard zwart bolletje aan het uiteinde van de vezel?',
    answer:
      'Dit is het onmiskenbare teken van een synthetische vezel (plastic), zoals polyester of nylon. Terwijl het smelt, klontert het polymeer samen tot een plastic bolletje dat niet verkruimelt, in tegenstelling tot de as van natuurlijke vezels.',
  },
  {
    question: 'Waarom ruikt wol vies als het brandt?',
    answer:
      'Wol en zijde zijn dierlijke eiwitten die zwavel bevatten. Bij contact met vuur verspreiden ze een indringende geur van verbrand haar of verbrande veren. Dit is de makkelijkste manier om ze te onderscheiden van plantaardige vezels.',
  },
];

const howToData = [
  {
    name: 'Neem een representatief monster',
    text: 'Knip een klein vierkantje uit de stof of, nog beter, trek een paar draadjes uit zowel de schering (verticaal) als de inslag (horizontaal).',
  },
  {
    name: 'Observeer de benadering van de vlam',
    text: 'Breng de vezel langzaam naar de vlam zonder deze aan te raken. Observeer of het krimpt, smelt of onmiddellijk vlam vat.',
  },
  {
    name: 'Analyseer het type vlam en rook',
    text: 'Let op of de vlam constant is of vanzelf uitgaat, und of de rook wit, zwart of afwezig is.',
  },
  {
    name: 'Evalueer het residu en de geur',
    text: 'Raak na afkoeling de resulterende as of het bolletje aan en neem de geur waar (papier, haar of chemisch) om de vezelfamilie te bevestigen.',
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
  inLanguage: 'nl',
};

const flame = {
  cellulosic: 'Brandt SNEL en HELDER (gele vlam). Smelt niet. Blijft branden na verwijdering.',
  protein: 'Brandt LANGZAAM, knettert en KRIMP weg van de vlam. Dooft vanzelf na verwijdering.',
  synthetic: 'SMELT en trekt snel samen, druipt als gesmolten plastic. Roetige vlam.',
};

const odor = {
  paper: 'Verbrand papier, hout, droge bladeren.',
  hair: 'Verbrand haar, verbrand hoorn, veren.',
  chemical_sweet: 'AROMATISCH chemisch (zoet, fruitig).',
  chemical_fishy: 'ZUUR chemisch (vis, gebraden vlees).',
  vegetable: 'Gekookte groenten (selderij).',
};

const residue = {
  ash_soft: 'Fijne GRIJZE/ZWARTE as, zacht en vluchtig (verkruimelt bij aanraking).',
  ash_shape: 'GRIJZE as behoudt vezelvorm (broos).',
  bead_crushable: 'Holle/gebrekkige zwarte massa (gemakkelijk te pletten met vingers).',
  bead_hard: 'HARDE en glasachtige kraal. Onmogelijk te breken met de vingers.',
  bead_irregular: 'HARDE en onregelmatige zwarte massa.',
};

const smoke = {
  white_gray: 'Wit / Lichtgrijs.',
  gray: 'Middelgrijs.',
  black: 'Dichte donkere ZWARTE rook.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
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
      text: 'De Forensische Wetenschap van de Draad',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De brandproef is de snelste en meest nauwkeurige analytische methode om natuurlijke polymeren van synthetische te onderscheiden zonder een elektronenmicroscoop te hoeven gebruiken. Door een vezel aan hitte bloot te stellen, onthult het moleculaire gedrag de oorsprong: van plantaardige cellulose tot dierlijke eiwitten of petroleumderivaten.',
    },
    {
      type: 'card',
      title: 'Cellulosevezels',
      icon: 'mdi:leaf',
      html: '<strong>Katoen</strong> und <strong>Linnen</strong> branden snel zonder te smelten. Ze ruiken naar verbrand papier omdat ze van hout of planten komen, en laten een vluchtige grijze as achter die wegwaait als je ertegen blaast.',
    },
    {
      type: 'card',
      title: 'Proteïnevezels',
      icon: 'mdi:sheep',
      html: '<strong>Wol</strong> und <strong>Zijde</strong> trekken weg van de vlam. Hun karakteristieke geur van verbrand haar duidt op de aanwezigheid van zwavel en keratine. Het residu is een zwart bolletje dat verpulvert bij aanraking.',
    },
    {
      type: 'card',
      title: 'Synthetische Vezels',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>Polyester</strong> und <strong>Nylon</strong> zijn in wezen plastics. Ze smelten en vormen een hete druppel die uithardt tot een glasachtig bolletje dat onmogelijk te breken is, met een scherpe chemische geur.',
    },
    {
      type: 'title',
      text: 'Chemische Bewijsmatrix',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een nauwkeurige analyse vereist het kruisen van ten minste drie bewijsstukken. Geur is de meest betrouwbare indicator voor het identificeren van mengsels: als een "linnen" stof een lichte plastic geur afgeeft en harde resten achterlaat, wijst dit op een niet-gedeclareerde polyestermix.',
    },
    {
      type: 'tip',
      title: 'Laboratoriumveiligheidsprotocol',
      html: '<strong>Kritieke ventilatie:</strong> Synthetische vezels laten giftige gassen los bij verbranding. Voer deze test nooit uit in gesloten ruimtes.<br><strong>Onmiddellijk blussen:</strong> Houd altijd een bak met water bij de hand. Sommige synthetische vezels kunnen smelten en aan de huid kleven.',
    },
  ],
  ui: {
    investigationLabel: 'ONDERZOEK',
    stepPrefix: 'STAP',
    stepCompleted: 'ANALYSE VOLTOOID',
    resetLabel: 'HERSTART',
    positiveId: 'POSITIEVE IDENTIFICATIE',
    flameLabel: 'Vlamgedrag',
    odorLabel: 'Geurspoor',
    residueLabel: 'Residu',
    identifiedAs: 'Monster positief geïdentificeerd als',
    safetyTitle: 'Veiligheidsprotocol',
    safetyText:
      'Voer deze test uit in een geventileerde ruimte, op een vuurvaste ondergrond. Gebruik een metalen pincet en houd water in de buurt.',
    questions: {
      flame: 'Gedrag in de vlam?',
      odor: 'Karakteristieke geur?',
      residue: 'Uiteindelijk residu?',
      smoke: 'Type rook?',
    },
    fiberData: {
      cotton: { name: 'Katoen', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Natuurlijke plantaardige vezel, zacht en ademend. De koning van de basics.' },
      linen: { name: 'Linnen', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Zeer sterke plantaardige vezel, koel en met de kenmerkende kreuk.' },
      wool: { name: 'Wol / Merino', icon: 'mdi:sheep', color: '#FCD34D', description: 'Dierlijke eiwitvezel, uitstekende thermische isolator en elastisch.' },
      silk: { name: 'Zijde', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Dierlijke continue filamentvezel. Natuurlijke glans en droog aanvoelend.' },
      cashmere: { name: 'Kasjmier', icon: 'mdi:crown', color: '#F59E0B', description: 'Luxe Kasjmiergeitvezel. Extreem zacht, licht en warm.' },
      mohair: { name: 'Mohair', icon: 'mdi:shimmer', color: '#14B8A6', description: 'De "diamantvezel" van de Angorageit. Natuurlijke glans, zeer resistent.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Haar van het Angorakonijn. Bekend om het pluizige "halo"-effect en extreme lichtheid.' },
      alpaca: { name: 'Alpaca', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Schat van de Andes. Holle, thermische, hypoallergene en zijdeachtige vezel.' },
      polyester: { name: 'Polyester', icon: 'mdi:oil', color: '#94A3B8', description: 'Synthetische vezel op petroleumbasis. Sterk, kreukvrij, ademt niet.' },
      nylon: { name: 'Nylon (Polyamide)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Zeer sterke synthetische vezel voor tractie en slijtage.' },
      acrylic: { name: 'Acryl', icon: 'mdi:resize', color: '#450A0A', description: 'Synthetische wolimitatie. Zacht, warm, pluist gemakkelijk.' },
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
