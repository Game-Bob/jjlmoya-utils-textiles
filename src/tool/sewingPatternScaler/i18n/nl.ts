import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'naaipatroon-skalierer';
const title = 'Online Naaipatroon Skalierer';
const description = 'Pas elk naaipatroon aan je werkelijke maten aan. Calculator voor differentiële schaling met een voorbeeld van het bijgewerkte patroon.';

const faqData = [
  {
    question: 'Waarom groeit de schouder niet evenzeer als de borst?',
    answer: 'Het menselijk lichaam is geen bol. Terwijl het volume van de romp aanzienlijk kan variëren, zijn het skelet en de gewrichtspunten zoals de schouder veel statischer. Een professionele schaling (grading) past gedifferentieerde factoren toe om het kledingstuk niet uit balans te brengen.',
  },
  {
    question: 'Wat is "overwijdte" of "ease"?',
    answer: 'Het is de extra ruimte tussen je lichaam en de stof. Zonder overwijdte zou je niet kunnen bewegen. Onze calculator behoudt deze overwijdte zodat het kledingstuk je past zoals de ontwerper het heeft bedoeld, maar aangepast aan je werkelijke contouren.',
  },
  {
    question: 'Kan ik een patroon voor breiwerk of jersey schalen?',
    answer: 'Ja, maar houd er rekening mee dat elastische stoffen vaak een negatieve overwijdte hebben. Als het patroon erg strak zit, zorg er dan voor dat de elasticiteitsfactor van de nieuwe stof die je kiest hetzelfde is als die van de originele stof.',
  },
];

const howToData = [
  {
    name: 'Meet je patroon',
    text: 'Meet de belangrijkste horizontale lijnen (borst, taille en heup) op de papieren delen van je originele patroon, van naad tot naad.',
  },
  {
    name: 'Stel de oorsprong in',
    text: 'Voer de maat van het patroon of de maten die je hebt gemeten in de kolom "Oorsprong" van onze tool in.',
  },
  {
    name: 'Voer de bestemming in',
    text: 'Voer je werkelijke maten in of de maat die je wilt bereiken. De tool berekent het exacte verschil per zone.',
  },
  {
    name: 'Toepassen op de kniptafel',
    text: 'Volg de instructies van "Acties op de Kniptafel" om centimeters toe te voegen of te verwijderen aan de zijkanten en onderkanten van je panden.',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
  bibliography: [
    {
      name: 'Patronaje: Las Bases - Teresa Gilewska',
      url: 'https://www.scribd.com/document/696165843/patronaje-las-bases-by-teresa-gilewska',
    },
    {
      name: 'Metric Pattern Cutting for Women\'s Wear - Winifred Aldrich',
      url: 'https://download.e-bookshelf.de/download/0000/5989/88/L-G-0000598988-0002339537.pdf',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Hoe naaipatronen te schalen: Technische en praktische gids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het <strong>schalen van patronen</strong> is een van de meest kritische vaardigheden in de modewereld. Het gaat niet alleen om het proportioneel vergroten of verkleinen van een tekening; het gaat om het aanpassen van een tweedimensionale structuur aan de complexe rondingen und proporties van het menselijk lichaam, dat niet lineair groeit.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Lokale Berekeningen', icon: 'mdi:calculator' },
        { value: 'Differentieel', label: 'Proportionele Schaling', icon: 'mdi:resize' },
        { value: '100%', label: 'Veilig en Privé', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Wat is patronen schalen precies?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Schalen (of <em>grading</em>) is het technische proces van het vergroten of verkleinen van een basispatroon om een reeks verschillende maten te creëren. In tegenstelling tot een gewone zoom houdt schaling rekening met het feit dat bepaalde lichaamsdelen meer groeien dan andere. De boratomtrek varieert bijvoorbeeld meestal meer tussen maten dan de schouderbreedte of de ruglengte.',
    },
    {
      type: 'title',
      text: 'Het geheim van succes: De overwijdte (Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bewegingsruimte:</strong> de extra centimeters die nodig zijn zodat je kunt ademen, zitten en je armen kunt bewegen zonder dat de stof scheurt.',
        '<strong>Designoverwijdte:</strong> de centimeters die de ontwerper heeft toegevoegd om een specifiek silhouet te creëren (bijvoorbeeld een oversized jas of een zwierige bloes).',
      ],
    },
    {
      type: 'title',
      text: 'Horizontale vs. Verticale Schaling',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Horizontale as (Omtrekken):</strong> Borst, Taille, Heup. Vereist de meeste aanpassing. Wordt in vieren gedeeld voor elk patroondeel.',
        '<strong>Verticale as (Lengtes):</strong> Voorlengte, ruglengte, totale lengte. Beïnvloedt de positie van coupenaden en de taillelijn. Minder variatie tussen opeenvolgende maten.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe de Patroon Skalierer te gebruiken',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Meet je patroon:</strong> neem het papieren deel en meet van rand tot rand op de lijnen van borst, taille en heup.',
        '<strong>Voer de oorsprongmaten in:</strong> schrijf die maten in de linker kolom en geef aan welke maat dat patroon vertegenwoordigt.',
        '<strong>Voer je eigen maten of doelmaat in:</strong> in de rechter kolom voer je je werkelijke maten in of de maat die je wilt bereiken.',
        '<strong>Interpreteer de resultaten:</strong> de calculator laat zien hoeveel je moet toevoegen of verwijderen in elke specifieke zone.',
      ],
    },
    {
      type: 'tip',
      title: 'Advies voor Professionele Schaling',
      html: '<p><strong>Schaal niet meer dan twee of drie maten:</strong> als je probeert van maat 36 naar 52 te gaan, is de kans groot dat het armsgat vervormt en de hals veel te groot wordt. In die gevallen is het beter om het basispatroon opnieuw te tekenen met je eigen maten vanaf nul.</p>',
    },
    {
      type: 'title',
      text: 'Voordelen van digitaal schalen',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Behoudt de exacte proportie van het originele ontwerp.',
          con: 'De armsgaten kunnen een lichte handmatige aanpassing vereisen.',
        },
        {
          pro: 'Directe berekening van de benodigde overwijdte.',
          con: 'Detecteert niet automatisch of het patroon al naadwaarde bevat.',
        },
        {
          pro: 'Grafische weergave van de groei van het pand.',
          con: 'Vereist een zeer nauwkeurige initiële meting.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Differentieel', definition: 'Maatverschil tussen twee opeenvolgende maten.' },
        { term: 'Ankerpunten', definition: 'Delen van het patroon die niet bewegen (meestal het middenvoor/middenachter).' },
        { term: 'Grading Nest', definition: 'Overlappende tekening van alle geschaalde maten.' },
        { term: 'Basispatroon', definition: 'Sjabloon zonder ontwerp of overwijdte dat overeenkomet met de lichaamsmaten.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'WERKSYSTEEM',
    modeStandard: 'Standaardmaten',
    modeCustom: 'Werkelijke Maten',
    labelPatternSize: 'Patroonmaat',
    labelTargetSize: 'Doelmaat',
    labelOriginMeasures: 'OORSPRONGMATEN',
    labelTargetMeasures: 'JOUW MATEN',
    labelEase: 'Huidige Overwijdte (Ease)',
    labelChest: 'Borst',
    labelWaist: 'Taille',
    labelHips: 'Heup',
    labelLength: 'Lengte',
    resBust: 'Buste',
    resWaist: 'Taille',
    resHips: 'Heup',
    resLength: 'Lengte',
    actionLatAdd: 'Voeg toe',
    actionLatRemove: 'Verwijder',
    actionLatSuffix: 'aan de zijkant van het pand',
    actionLatNote: 'Aanpassing per kwart patroon',
    actionLenExtend: 'Verleng het patroon',
    actionLenShorten: 'Verkort het patroon',
    actionLenNote: 'Aanpassing op de zoomlijn',
    legendOriginal: 'Origineel',
    legendUpdated: 'Bijgewerkt',
    warnText: 'Schaling groter dan 3 maten. Risico op vervorming in het armsgat.',
    sizePrefix: 'Maat',
  },
};
