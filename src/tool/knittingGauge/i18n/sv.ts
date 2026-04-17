import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'stickfasthet-gauge-kalkylator';
const title = 'Kalkylator för Stickfasthet och Gauge';
const description =
  'Räkna enkelt om maskor och varv för vilket stick- eller virkmönster som helst. Justera gauge efter mönsterrapporter och skalfaktor för ett professionellt resultat.';

const faqData = [
  {
    question: 'Vad är stickfasthet eller gauge?',
    answer:
      'Det är måttet på hur många maskor och varv som får plats på en viss yta (vanligtvis 10x10 cm). Det är grundläggande eftersom det avgör plaggets slutliga storlek baserat på stickan och garnet som används.',
  },
  {
    question: 'Hur påverkar ändring av gauge storleken?',
    answer:
      'Om din stickfasthet har fler maskor per centimeter än mönstret, blir plagget mindre. Om du har färre maskor blir plagget större. Därför är det livsviktigt att räkna om maskorna eller byta stickor.',
  },
  {
    question: 'Varför är justering efter rapporter (multipler) viktig?',
    answer:
      'Många mönster har motiv (hålstickning, flätor, mönster) som kräver ett visst antal maskor för att fullbordas. Vår kalkylator justerar totalen till närmaste mönsterrapport för att inte förstöra designen.',
  },
  {
    question: 'Ska jag tvätta provlappen innan jag mäter?',
    answer:
      'Ja, alltid. "Blockning" (tvätta och forma) får fibrerna att slappna av och visar den verkliga stickfastheten som plagget kommer att ha efter första användning och tvätt.',
  },
];

const howToData = [
  {
    name: 'Identifiera mönstrets stickfasthet',
    text: 'Leta i mönsterinstruktionerna efter hur många maskor och varv som anges för en provlapp på 10x10 cm eller 4x4 tum.',
  },
  {
    name: 'Sticka och mät din egen provlapp',
    text: 'Sticka en provlapp med ditt garn och dina stickor, blocka den och mät hur många maskor och varv du har på samma yta.',
  },
  {
    name: 'Konfigurera kalkylatorn',
    text: 'Ange mönstrets provlappsdata och din faktiska provlappsdata. Lägg till det totala antalet maskor för din storlek och eventuella mönsterrapporter.',
  },
  {
    name: 'Få resultat',
    text: 'Kontrollera det nya antalet maskor att lägga upp och skalfaktorn för att se om du även behöver justera plaggets längd.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Onlinekalkylator för Stickfasthet och Gauge: Teknisk guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om du någonsin har avslutat en tröja som verkade designad för en jätte eller en mössa som knappt täckte hjässan, vet du redan vikten av <strong>gauge eller stickfasthet</strong>. Inom stickning och virkning är fastheten relationen mellan garnets grovlek, stickornas storlek och den kraft med vilken varje stickare hanterar tråden. Inga två stickare är lika, och därför finns det inga två identiska fastheter.',
    },
    {
      type: 'title',
      text: 'Varför är fasthet eller gauge avgörande vid stickning?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Denna gauge-kalkylator för stickning är ett tekniskt verktyg designat för att eliminera matematiska gissningar och låta dig fokusera på kreativiteten. Genom att ange mönstrets provlappsdata och din egen provlappsdata får du precisa justeringar av maskor och varv, vilket säkerställer att ditt slutliga plagg får exakt de mått du förväntar dig.',
    },
    {
      type: 'title',
      text: 'Så använder du kalkylatorn för stickfasthet',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sticka en provlapp:</strong> Begränsa dig inte till 10x10 cm. Sticka minst 15x15 cm så att kanterna inte förfalskar det centrala måttet.',
        '<strong>Blocka din provlapp:</strong> Tvätta och torka provlappen precis som du skulle göra med det färdiga plagget. Många ullfibrer expanderar eller växer när de blir blöta.',
        '<strong>Mät med precision:</strong> Använd en styv linjal eller en 10 cm stickmätare. Räkna hur många maskor som går på bredden och hur många varv på höjden.',
        '<strong>Ange data:</strong> Placera mönstrets värden i den vänstra kolumnen och dina faktiska värden i den högra. Verktyget räknar automatiskt om hur många maskor du behöver för att nå önskad bredd.',
      ],
    },
    {
      type: 'title',
      text: 'Tolkning av resultaten: Skalfaktorn',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skalfaktorn är den multiplikator vi tillämpar på varje instruktion i mönstret. Om din fasthet är 22 maskor och mönstret kräver 20, är din skalfaktor 1.1. Det betyder att för att få samma fysiska bredd behöver du 10 % fler maskor. En avvikelse på 0-2 % är idealisk, 2-10 % är måttlig, 10-25 % kräver obligatorisk omräkning, och mer än 25 % innebär en strukturell risk.',
    },
    {
      type: 'title',
      text: 'Hantering av multipler och rapporter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En av de största utmaningarna vid omräkning av ett mönster är att bibehålla integriteten hos hålstickning, flätor eller motiv. Om designen upprepas var 8:e maska kan du inte bara lägga till 3 extra maskor; du måste justera totalen så att den fortfarande är en multipel av 8. Funktionen för <strong>justering efter multipler</strong> i denna kalkylator föreslår det närmaste antalet maskor som respekterar designens arkitektur.',
    },
    {
      type: 'tip',
      title: 'Tips för experter',
      html: '<p>Det är oftast att föredra att använda denna kalkylator och arbeta med garnets naturliga fasthet, genom att anpassa antalet maskor istället för att tvinga fram fastheten genom att radikalt byta stickstorlek, eftersom det sistnämnda kan förändra tygets fall och mjukhet.</p>',
    },
    {
      type: 'title',
      text: 'Fördelar med att använda vårt justeringsverktyg',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Automatisk justering av maskor och varv med precis skalfaktor.',
        'Stöd för komplexa multipler (X + Y) för att bibehålla motivets integritet.',
        'Uppskattning av gram ull som behövs för hela projektet.',
        'Dynamisk visualisering av provlappen som visar tygets densitet i realtid.',
      ],
    },
    {
      type: 'card',
      title: 'Gauge / Fasthet',
      icon: 'mdi:ruler',
      html: 'Antal maskor och varv som ryms i en kvadrat på <strong>10x10 cm</strong> eller <strong>4x4 tum</strong>. Det är den universella referensen i alla stickmönster.',
    },
    {
      type: 'card',
      title: 'Blockning',
      icon: 'mdi:water',
      html: 'Processen att fukta och forma plagget för att sätta maskorna. Avslöjar den <strong>verkliga fastheten</strong> som plagget kommer att ha efter första användning och tvätt.',
    },
    {
      type: 'card',
      title: 'Skalfaktor',
      icon: 'mdi:scale',
      html: 'Matematisk proportion mellan mönstrets provlapp och stickarens faktiska provlapp. Avgör hur många maskor och varv som ska justeras för att bibehålla <strong>korrekta mått</strong>.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Originalfasthet',
    sectionMyGauge: 'Din nuvarande provlapp',
    sectionProject: 'Projektstruktur',
    labelStitches: 'Maskor',
    labelRows: 'Varv',
    labelWidth: 'Bredd',
    labelLength: 'Längd',
    labelUnit: 'Måttenhet',
    labelNeedle: 'Sticka',
    labelNeedleMm: 'Sticka (mm)',
    labelWeight: 'Vikt (g)',
    labelWeightOptional: 'valfritt',
    labelPatternSts: 'Maskor Mönster',
    labelPatternRows: 'Varv Mönster',
    labelMultiples: 'Multipler',
    labelMultiplesExample: 'Ex: 10 + 2',
    labelMultiplesPlaceholder: 'Multipel + Kant',
    unitEU: '10 x 10 cm (EU-standard)',
    unitUS: '4 x 4 tum (US-standard)',
    btnClear: 'Rensa',
    btnShare: 'Dela',
    btnCopied: 'Kopierat!',
    resSuggestedSts: 'Föreslagna maskor att lägga upp',
    resNewRows: 'Nya Varv',
    resNewRowsTooltip: 'Antal varv som behövs för att motsvara originallängden med din nuvarande fasthet.',
    resScaleFactor: 'Skalfaktor',
    resScaleFactorTooltip: 'Storleksrelation mellan din stickning och mönstret. Ett negativt värde indikerar att din stickning är tätare.',
    resSuggestion: 'Förslag',
    resSuggestionTooltip: 'Teknisk rekommendation för att justera din fasthet utan att behöva räkna om varje maska i mönstret.',
    suggestionIdeal: 'Idealisk',
    suggestionDown: 'Gå ner i sticka',
    suggestionUp: 'Gå upp i sticka',
    suggestionDownDetail: 'Använd sticka {n}mm eller en storlek mindre.',
    suggestionUpDetail: 'Använd sticka {n}mm oder en storlek större.',
    multiplesNoteFormat: 'Justerad från {n} maskor (Mult. {m})',
    yarnTitle: 'Uppskattning av ull för projektet',
    yarnResultFormat: 'Uppskattad ull: <strong>{g}g</strong>',
    yarnSafetyFormat: '(+{s}g säkerhetsmarginal)',
    alertDanger: 'Extrem skillnad (>25%). Plaggets fall och struktur kommer att påverkas.',
  },
};
