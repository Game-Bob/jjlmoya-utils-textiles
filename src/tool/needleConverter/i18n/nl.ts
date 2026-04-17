import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'breinaalden-omzetter';
const title = 'Omzetter voor Breinaalden en Haaknaalden';
const description = 'Converteer naaldmaten tussen metrische (mm), Amerikaanse (US) en Britse (UK) systemen met aanbevelingen voor garen en WPI.';

const faqData = [
  {
    question: 'Waarom zijn er verschillende maten voor naalden?',
    answer: 'Historisch gezien heeft elk land zijn eigen systeem ontwikkeld. Het metrische systeem (mm) is de meest nauwkeurige internationale standaard. Het Amerikaanse systeem (US) gebruikt een oplopende nummering (0-50), terwijl het Britse systeem (UK) een omgekeerde nummering gebruikt: hoe hoger het nummer, hoe dunner de naald.',
  },
  {
    question: 'Zijn de maten voor haaknaalden en breinaalden gelijk in de VS?',
    answer: 'Niet precies. Haaknaalden in de VS hebben meestal een bijbehorende letter (bijv. H-8) en er zijn specifieke variaties in kleine diktes. Bovendien hebben stalen haaknaalden voor fijn garen een totaal andere nummering.',
  },
  {
    question: 'Welke naald moet ik kiezen als mijn patroon een maat gebruikt zonder exacte tegenhanger?',
    answer: 'Als een patroon om een maat als 7,0 mm vraagt en uw systeem heeft alleen 6,5 mm of 8,0 mm, wordt aanbevolen om altijd een proeflapje (gauge) te maken. Een verschil van 0,5 mm kan de uiteindelijke grootte van het kledingstuk aanzienlijk veranderen.',
  },
  {
    question: 'Wat is WPI (Wraps Per Inch)?',
    answer: 'Het is het aantal wikkelingen van garen dat in één inch (2,54 cm) past. Het is de meest betrouwbare methode om de dikte van garen zonder label te identificeren en te bepalen welke naald het meest geschikt is.',
  },
];

const howToData = [
  {
    name: 'Selecteer het type handwerk',
    text: 'Kies tussen breien (knitting) of haken (crochet) om de juiste equivalenten in het Amerikaanse systeem te zien.',
  },
  {
    name: 'Kies de maat in de visuele selector',
    text: 'Klik op de cirkel die overeenkomt met de maat van uw naald. De gaten hebben een reële wiskundige verhouding tot de millimeters.',
  },
  {
    name: 'Lees de equivalenten',
    text: 'Bekijk de resultaten in real-time: millimeters, maat en UK maat, samen met de aanbevolen garencategorie en de WPI.',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Technische Gids voor Brei- en Haaknaalden: Systemen, Kalibers en Equivalenten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De globalisering van digitale patronen heeft het essentieel gemaakt om de verschillen te begrijpen tussen het <strong>metrische decimale systeem</strong>, de <strong>Amerikaanse standaard (US)</strong> en het <strong>Britse imperiale systeem (UK)</strong>. Deze tool converteert tussen de drie systemen en biedt garenadvies via de WPI-methode.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Werkt zonder netwerk', icon: 'mdi:wifi-off' },
        { value: 'Drievoudig', label: 'Totale Synchronisatie', icon: 'mdi:sync' },
        { value: 'WPI', label: 'Garenanalyse', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'De Complexiteit van de Internationale Systemen',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Systeem', 'Basis van Berekening', 'Overheersende Regio', 'Technische Kenmerken'],
      rows: [
        ['<strong>Metrisch (mm)</strong>', 'Exacte diameter in mm', 'Europa / Internationaal', 'De meest betrouwbare ISO-standaard. Constante verhogingen van 0,25 mm of 0,50 mm.'],
        ['<strong>US (VS)</strong>', 'Oplopende Nummering', 'Noord-Amerika', 'Gebruikt cijfers van 0 tot 50. Bij haken worden cijfers gekoppeld aan letters (B-1, G-6).'],
        ['<strong>UK (Imperiaal)</strong>', 'Omgekeerde Nummering', 'Groot-Brittannië / Australië', 'Gebaseerd op de draadtrekmaat. Hoe hoger het nummer, hoe dunner de naald (14 is fijn, 0 is dik).'],
      ],
    },
    {
      type: 'title',
      text: 'Identificatie van Garen via de WPI-methode',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / Kant (18-22+ WPI):</strong> Ultradunne garens voor zijden of mohair kant. Naalden van 1,5 mm tot 2,5 mm.',
        '<strong>Fingering / Baby (14-16 WPI):</strong> De standaard voor sokken en babykleding. Optimale naalden van 2,75 mm tot 3,25 mm.',
        '<strong>Sport / Fine (12-14 WPI):</strong> Garen met een middel-lage dikte, ideaal voor lichte jasjes. Naalden van 3,5 mm tot 3,75 mm.',
        '<strong>DK / Light Worsted (11-13 WPI):</strong> De meest veelzijdige dikte op de markt. Naalden van 4,0 mm of 4,5 mm.',
        '<strong>Worsted / Aran (9-10 WPI):</strong> Dik garen voor wintertruien. Naalden van 5,0 mm tot 5,5 mm.',
        '<strong>Bulky / Chunky (7-8 WPI):</strong> Grove wol voor snelle projecten. Naalden van 6,0 mm tot 8,0 mm.',
        '<strong>Super Bulky (5-6 WPI):</strong> Gigantische vezels voor decoratie of sjaals. Naalden van 9,0 mm tot 15,0 mm.',
      ],
    },
    {
      type: 'tip',
      title: 'Professionele Techniek: De Stalen Haaknaald',
      html: '<p>Er bestaat een familie naalden voor extreem fijne gemerceriseerde katoenen garens. Dit zijn de <strong>Steel Hooks (Stalen Haaknaalden)</strong>. Hun nummering is specifiek en omgekeerd: een stalen haaknaald #14 (0,6 mm) is veel dunner dan een #00 (3,5 mm). Gebruik nooit de standaardtabel voor deze maten.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Checklist voor de juiste naaldmaat',
      icon: 'mdi:check-circle-outline',
      badge: 'Technische Validatie',
      html: '<p>Volg deze stappen voordat u een groot project start:</p><ul><li><strong>Persoonlijke Spanning:</strong> Als u strak breit, neem dan 0,5 mm groter. Als u los breit, neem dan 0,5 mm kleiner.</li><li><strong>Naaldmateriaal:</strong> Bamboe voor glad garen; Metaal voor ruwe wol.</li><li><strong>Vezeltype:</strong> Katoen rekt niet mee; merinowol zet uit bij het blocken.</li><li><strong>Proeflapje:</strong> Brei een vierkant van 10x10 cm en was het voordat u de uiteindelijke maat meet.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Het metrische systeem is universeel en voorkomt afrondingsfouten tussen fabrikanten.',
          con: 'Veel oude en historische patronen bevatten geen maten in millimeters.',
        },
        {
          pro: 'Het Amerikaanse systeem vergemakkelijkt het onthouden van standaardmaten voor Amerikaanse patronen.',
          con: 'De letters bij haken zijn niet altijd consistent tussen merken.',
        },
        {
          pro: 'Het WPI-systeem maakt het mogelijk om garen zonder label technisch en professioneel toe te wijzen.',
          con: 'Vereist een zeer zorgvuldige handmatige meting om het resultaat niet te vervalsen.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'Proeflapje (10x10 cm) gebreid vóór het starten van het project om de werkelijke maat te valideren.' },
        { term: 'Hook Throat', definition: 'De keel van de haaknaald. De diepte bepaalt hoeveel garen de naald kan verwerken.' },
        { term: 'Block Testing', definition: 'Proces van bevochtigen en opspannen van het breiwerk zodat de vezels ontspannen en hun ware uiteindelijke grootte tonen.' },
      ],
    },
    {
      type: 'summary',
      title: 'Kritieke Factoren voor het Succes van uw Textielproject',
      items: [
        'De juiste naald bepaalt niet alleen de grootte, maar ook de duurzaamheid van het kledingstuk tegen wrijving.',
        'Gebruik onze omzetter om patronen uit Amerikaanse of Britse tijdschriften in enkele seconden te valideren.',
        'Als u geen exacte tegenhanger vindt, kies dan de maat erboven of eronder op basis van uw proeflapje.',
        'Haken verbruikt ca. 30% meer garen dan breien met dezelfde naald.',
        'Reinig uw metalen naalden regelmatig om de optimale glijsnelheid te behouden.',
      ],
    },
  ],
  ui: {
    labelSystem: 'WERKSYSTEEM',
    modeKnitting: 'Breien',
    modeCrochet: 'Haken',
    calibratorLabel: 'PRECISIE-KALIBRATOR (ECHTE SCHAAL)',
    calibratorDesc: 'Selecteer een diameter om de equivalenten in real-time te zien. De gaten hebben een reële wiskundige verhouding tot de millimeters.',
    tagMetric: 'Metrisch (mm)',
    tagUS: 'Systeem US',
    tagUK: 'Systeem UK',
    yarnLabel: 'IDEALE GARENDIKTE',
    wpiFormat: '{wpi} WPI (Wraps per inch)',
    tableSectionLabel: 'TECHNISCHE CATALOGUS VAN EQUIVALENTEN',
    tableMetric: 'METRISCH',
    tableUS: 'MAAT US',
    tableUK: 'UK / IMPERIAAL',
    tableYarn: 'GARENCATEGORIE',
  },
};
