import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'textil-branntest';
const title = 'Textilt Bränntest';
const description =
  'Identifiera den verkliga sammansättningen hos vilket tyg som helst genom att analysera dess brännbeteende. Skilj vetenskapligt mellan bomull, ull, silke och syntet.';

const faqData = [
  {
    question: 'Är det säkert att utföra ett bränntest hemma?',
    answer:
      'Ja, så länge du vidtar extrema försiktighetsåtgärder: använd metallpincett, arbeta på en eldfast yta (keramik eller metall), ha vatten i närheten och utför testet i ett ventilerat utrymme. Du behöver bara ett litet prov på 1x1 cm eller några trådar.',
  },
  {
    question: 'Hur luktar bomull när det brinner?',
    answer:
      'Bomull är ren cellulosa. När det brinner luktar det exakt som bränt papper eller torra löv. Den resulterande askan är grå, mycket fin och faller sönder vid beröring.',
  },
  {
    question: 'Vad indikerar en hård svart pärla i änden av fibern?',
    answer:
      'Det är det omisskännliga tecknet på en syntetfiber (plast), som polyester eller nylon. När den smälter klumpar polymeren ihop sig till en plastpärla som inte smular, till skillnad från askan från naturfibrer.',
  },
  {
    question: 'Varför luktar ull illa när det brinner?',
    answer:
      'Ull och silke är animaliska proteiner som innehåller svavel. Vid kontakt med eld avger de en genomträngande lukt av bränt hår eller brända fjädrar. Detta är det enklaste sättet att skilja dem från växtfibrer.',
  },
];

const howToData = [
  {
    name: 'Ta ett representativt prov',
    text: 'Klipp en liten fyrkant från tyget eller, ännu bättre, dra ut några trådar från både varpen (vertikalt) och väften (horisontellt).',
  },
  {
    name: 'Observera närhet till lågan',
    text: 'För fibern långsamt mot elden utan att röra den. Observera om den krymper, smälter eller fattar eld omedelbart.',
  },
  {
    name: 'Analysera typ av låga och rök',
    text: 'Lägg märke till om lågan är stadig eller självslocknar, och om röken är vit, svart eller obefintlig.',
  },
  {
    name: 'Utvärdera rest och lukt',
    text: 'När det svalnat, rör vid den resulterande askan eller pärlan och känn efter lukten (papper, hår eller kemisk) för att bekräfta fiberfamiljen.',
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
  inLanguage: 'sv',
};

const flame = {
  cellulosic: 'Brinner SNABBT und LJUST (gul låga). Smälter inte. Fortsätter brinna när den tas bort.',
  protein: 'Brinner LÅNGSAMT, fräser och KRYMPER bort från lågan. Självslocknar när den tas bort.',
  synthetic: 'SMÄLTER och drar ihop sig snabbt, droppar som smält plast. Sotig låga.',
};

const odor = {
  paper: 'Bränt papper, trä, torra löv.',
  hair: 'Bränt hår, bränt horn, fjädrar.',
  chemical_sweet: 'AROMATISK kemisk (söt, fruktig).',
  chemical_fishy: 'SUR kemisk (fisk, stekt kött).',
  vegetable: 'Kokta grönsaker (selleri).',
};

const residue = {
  ash_soft: 'Fin GRÅ/SVART aska, mjuk och flyktig (smular vid beröring).',
  ash_shape: 'GRÅ aska bibehåller fiberform (spröd).',
  bead_crushable: 'Ihålig/skör svart massa (krossas lätt med fingrarna).',
  bead_hard: 'HÅRD och glasig pärla. Omöjlig att bryta med fingrarna.',
  bead_irregular: 'HÅRD och oregelbunden svart massa.',
};

const smoke = {
  white_gray: 'Vit / Ljusgrå.',
  gray: 'Mellangrå.',
  black: 'Tät mörk SVART rök.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
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
      text: 'Trådens kriminalteknik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bränntestet är den snabbaste och mest exakta analytiska metoden för att skilja naturliga polymerer från syntetiska utan att behöva använda elektronmikroskop. Genom att utsätta en fiber för värme avslöjar dess molekylära beteende dess ursprung: från växtcellulosa till animaliska proteiner eller petroleumderivat.',
    },
    {
      type: 'card',
      title: 'Cellulosafibrer',
      icon: 'mdi:leaf',
      html: '<strong>Bomull</strong> och <strong>Linne</strong> brinner snabbt utan att smälta. De luktar bränt papper eftersom de kommer från trä eller växter, och lämnar en flyktig grå aska som sprids när man blåser på den.',
    },
    {
      type: 'card',
      title: 'Proteinfibrer',
      icon: 'mdi:sheep',
      html: '<strong>Ull</strong> och <strong>Silke</strong> drar sig bort från lågan. Deras karakteristiska lukt av bränt hår indikerar närvaron av svavel och keratin. Resten är en svart kula som krossas vid beröring.',
    },
    {
      type: 'card',
      title: 'Syntetfibrer',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>Polyester</strong> och <strong>Nylon</strong> är i huvudsak plaster. De smälter och bildar en het droppe som härdar till en glasig pärla som är omöjlig att bryta, med en skarp kemisk lukt.',
    },
    {
      type: 'title',
      text: 'Kemisk bevis-matris',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En exakt analys kräver att man korsar minst tre bevis. Lukten är den mest tillförlitliga indikatorn för att identifiera blandningar: om ett "linne"-tyg avger en svag plastarom och efterlämnar hårda rester, tyder det på en odeklarerad polyesterblandning.',
    },
    {
      type: 'tip',
      title: 'Laboratoriets säkerhetsprotokoll',
      html: '<strong>Kritisk ventilation:</strong> Syntetfibrer frigör giftiga gaser vid förbränning. Utför aldrig detta test i slutna utrymmen.<br><strong>Omedelbar släckning:</strong> Ha alltid en behållare med vatten bredvid dig. Vissa syntetfibrer kan smälta och fastna på huden.',
    },
  ],
  ui: {
    investigationLabel: 'UNDERSÖKNING',
    stepPrefix: 'STEG',
    stepCompleted: 'ANALYS SLUTFÖRD',
    resetLabel: 'OMSTART',
    positiveId: 'POSITIV IDENTIFIERING',
    flameLabel: 'Flambeteende',
    odorLabel: 'Luktspår',
    residueLabel: 'Restprodukter',
    identifiedAs: 'Provet har identifierats som',
    safetyTitle: 'Säkerhetsprotokoll',
    safetyText:
      'Utför detta test i ett ventilerat utrymme, på en eldfast yta. Använd metallpincett och ha vatten i närheten.',
    questions: {
      flame: 'Beteende i lågan?',
      odor: 'Karakteristisk lukt?',
      residue: 'Slutlig rest?',
      smoke: 'Typ av rök?',
    },
    fiberData: {
      cotton: { name: 'Bomull', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Naturlig växtfiber, mjuk och andas. Kungen av basplagg.' },
      linen: { name: 'Linne', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Mycket stark växtfiber, sval och med karakteristiska skrynklor.' },
      wool: { name: 'Ull / Merino', icon: 'mdi:sheep', color: '#FCD34D', description: 'Animalisk proteinfiber, utmärkt värmeisolator och elastisk.' },
      silk: { name: 'Silke', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Animalisk fiber av kontinuerligt filament. Naturlig lyster och torr känsla.' },
      cashmere: { name: 'Kashmir', icon: 'mdi:crown', color: '#F59E0B', description: 'Lyxig fiber från kashmirget. Extremt mjuk, lätt och varm.' },
      mohair: { name: 'Mohair', icon: 'mdi:shimmer', color: '#14B8A6', description: 'Angorageitens "diamantfiber". Naturlig lyster, mycket tålig.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Hår från angorakanin. Känt för sin fluffiga "halo"-effekt och extrema lätthet.' },
      alpaca: { name: 'Alpacka', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Andernas skatt. Ihålig, termisk, hypoallergen och silkeslen fiber.' },
      polyester: { name: 'Polyester', icon: 'mdi:oil', color: '#94A3B8', description: 'Syntetisk petroleumbaserad fiber. Tålig, skrynkelfri, andas inte.' },
      nylon: { name: 'Nylon (Polyamid)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Mycket tålig syntetfiber för dragkraft och nötning.' },
      acrylic: { name: 'Akryl', icon: 'mdi:resize', color: '#450A0A', description: 'Syntetisk ullimitation. Mjuk, varm, noppar lätt.' },
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
