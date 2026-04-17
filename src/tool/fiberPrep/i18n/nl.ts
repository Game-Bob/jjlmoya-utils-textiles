import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'vezelvoorbereiding-verven';
const title = 'Voorbereiding van Vezels voor Verven';
const description =
  'WOF-calculator, beitserprotocollen en thermische hellingen om wol, zijde und katoen voor te bereiden voor natuurlijk verven.';

const faqData = [
  {
    question: 'Wat is WOF (Weight of Fiber)?',
    answer:
      'WOF is het standaardsysteem om de benodigde hoeveelheid pigment of beitsmiddel te berekenen. Het is gebaseerd op het droge gewicht van de vezel. Bijvoorbeeld, 100% WOF uienschillen voor 100g wol betekent dat je 100g uienschillen nodig hebt.',
  },
  {
    question: 'Waarom is beitsen noodzakelijk?',
    answer:
      'Het beitsmiddel (zoals aluin) fungeert als een chemische brug tussen de textielvezel en het natuurlijke pigment. Zonder deze brug zouden de meeste kleurstoffen niet hechten en bij de eerste wasbeurt verdwijnen (slechte licht- en wrijfechtheid).',
  },
  {
    question: 'Wat is het verschil tussen het voorbereiden van dierlijke en plantaardige vezels?',
    answer:
      'Dierlijke vezels (proteïnevezels zoals wol) accepteren aluin alleen heel goed. Plantaardige vezels (cellulosevezels zoals katoen of linnen) vereisen een voorstap met tannines om de vezel te "misleiden" zodat deze het metalen beitsmiddel accepteert.',
  },
  {
    question: 'Wat is de thermische helling bij het verven?',
    answer:
      'Dit is de geleidelijke temperatuurstijging (ca. 1-2°C per minuut) van het verfbad. Het is cruciaal om thermische schokken te vermijden, vooral bij wol, die kan vilten als de temperatuur te abrupt verandert.',
  },
];

const howToData = [
  {
    name: 'Reiniging en ontvetten',
    text: 'Was de vezel met een neutraal wasmiddel om oliën, wassen of industriële stijfsel te verwijderen die verhinderen dat de beits gelijkmatig binnendringt.',
  },
  {
    name: 'Droge vezel wegen',
    text: 'Bepaal het exacte gewicht van het droge materiaal. Deze waarde is de basis voor alle WOF-berekeningen (Weight of Fiber).',
  },
  {
    name: 'Berekening en beitsbad',
    text: 'Los het beitsmiddel op (bijv. kaliumaluin op 15% WOF) in warm water en dompel de vezel onder, waarbij de temperatuur constant wordt gehouden volgens het protocol.',
  },
  {
    name: 'Rijping en spoelen',
    text: 'Laat de gebeitste vezel rusten (bij voorkeur 24 uur) zodat het metaal zich diep kan hechten voordat je overgaat naar het definitieve verfbad.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Artista Textil y Tintes Naturales',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'De Wetenschap achter Beitsen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het voorbereiden van een vezel voor het verven is meer dan alleen wassen. Het is een chemisch proces op moleculair niveau dat beitsen wordt genoemd. Het woord komt van het Latijnse <i>mordere</i> (bijten), en de functie ervan is om te dienen als een chemische brug tussen de vezel en het pigment. Zonder deze brug zouden de meeste natuurlijke kleurstoffen simpelweg wegspoelen bij de eerste spoelbeurt.',
    },
    {
      type: 'card',
      title: 'Kernbegrip',
      icon: 'mdi:molecule',
      html: 'De beits heeft beschikbare valenties die zich tegelijkertijd vastgrijpen aan de polymeren van de vezel en aan de kleurstof.',
    },
    {
      type: 'title',
      text: 'Differentiatie van Vezels',
      level: 2,
    },
    {
      type: 'card',
      title: 'Proteïnevezels: Wol en Zijde',
      icon: 'mdi:sheep',
      html: 'Deze vezels bestaan uit aminozuurketens met een zeer hoge natuurlijke affiniteit voor metalen. De hitte opent de schubben, waardoor aluinsmouten diep kunnen doordringen. Het gebruik van <strong>Wijnsteen</strong> is essentieel om de zure pH te behouden die de zachtheid bewaart.',
    },
    {
      type: 'card',
      title: 'Cellulosevezels: Katoen en Linnen',
      icon: 'mdi:leaf',
      html: 'Cellulose heeft geen direct beschikbare bindingsplaatsen. Daarom gebruiken we het <strong>tweestappenprotocol</strong>: eerst tannines die zich aan de cellulose hechten, daarna de aluin die zich aan die tannines hecht. Zonder deze voorbehandeling zal de kleur bleek en weinig resistent uitvallen.',
    },
    {
      type: 'title',
      text: 'Controle van het Bad: WOF, Temperatuur en pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om professionele en herhaalbare resultaten te behalen, is het concept van <strong>WOF (Weight of Fabric)</strong> de wet. Alles wordt gemeten als een percentage van het droge gewicht van de vezel. Een teveel aan beitsmiddel kan de vezel verzadigen en deze ruw maken of metaalafzettingen achterlaten die de uiteindelijke kleur veranderen.',
    },
    {
      type: 'tip',
      title: 'De Thermische Helling',
      html: 'Hitte werkt als katalysator en versnelt de chemische reactie. Een abrupte temperatuurverandering bij wol kan er echter toe leiden dat de schubben permanent in elkaar haken, wat resulteert in een vervilte en gekrompen stof.',
    },
    {
      type: 'tip',
      title: 'De pH factor',
      html: 'Veel natuurlijke kleurstoffen zijn levende pH-indicatoren. De pH beïnvloedt de oplosbaarheid van de zouten en het behoud van de vezel. Zijde kan zijn glans verliezen als het bad te alkalisch is. Het aanpassen van de pH met citroenzuur of calciumcarbonaat is fundamenteel.',
    },
    {
      type: 'title',
      text: 'Stoffen en Veiligheid',
      level: 2,
    },
    {
      type: 'card',
      title: 'Kaliumaluin',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Universele beits, kleurloos en zeer effectief. De referentie voor proteïnevezels.',
    },
    {
      type: 'card',
      title: 'Wijnsteen (Cremor Tartari)',
      icon: 'mdi:spoon-sugar',
      html: 'Assistent die de fixatie en zachtheid in dierlijke vezels verbetert. Behoudt de zure pH.',
    },
    {
      type: 'tip',
      title: 'Veiligheidsprotocol',
      html: 'Gebruik pannen uitsluitend voor verven, nooit voor voedsel.<br>Gebruik handschoenen en een masker bij het hanteren van beitsmiddelen in poederform.<br>Zorg voor constante ventilatie om ophoping van dampen te voorkomen.',
    },
  ],
  ui: {
    profileTitle: 'Profielselectie',
    profileDesc: 'Het chemische protocol is verdeeld volgens de moleculaire oorsprong van de vezel',
    proteinTitle: 'Proteïnevezels',
    proteinOrigin: 'Dierlijke Oorsprong',
    proteinDesc: 'Wol, zijde, alpaca, mohair of kasjmier. Vereisen gecontroleerde temperaturen en een zure pH.',
    cellulosicTitle: 'Cellulosevezels',
    cellulosicOrigin: 'Plantaardige Oorsprong',
    cellulosicDesc: 'Katoen, linnen, hennep of jute. Vereisen voormanueren met tannines om het pigment te fixeren.',
    wofTitle: 'WOF-calculator',
    weightLabel: 'Gewicht van het Droge Kledingstuk (g)',
    weightUnit: 'g',
    wofEmptyMsg: 'Selecteer een profiel om berekeningen in te schakelen',
    alumLabel: 'Aluin',
    cremLabel: 'Wijnsteen',
    ironLabel: 'IJzer (Voorzichtig)',
    rampTitle: 'Thermische Helling',
    rampEmptyTitle: 'Wachten op Selectie',
    rampEmptyDesc: 'Kies een vezel om de thermische cyclus te zien',
    phTitle: 'pH-stabilisator',
    phDesc: 'Kritieke factor voor kleurverzadiging',
    phVolumeLabel: 'Badvolume (L)',
    phSliderLabel: 'Huidige pH',
    phAcidLabel: 'Zuur (1)',
    phAlkalineLabel: 'Alkalisch (14)',
    phEmptyMsg: 'Selecteer een profiel om de stabilisator in te schakelen',
    phStrings: {
      optimal: 'Optimale pH',
      raisePrefix: 'Voeg calciumcarbonaat of soda ash toe. Ca.',
      raiseSuffix: 'g om te verhogen naar',
      lowerPrefix: 'Voeg citroenzuur of azijn toe. Ca.',
      lowerSuffix: 'ml om te verlagen naar',
    },
    proteinFibers: [
      { id: 'wool', name: 'Wol / Merino', icon: 'mdi:sheep' },
      { id: 'silk', name: 'Zijde', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Kasjmier', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Mohair', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaka', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Katoen', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Linnen', icon: 'mdi:leaf' },
    ],
  },
};
