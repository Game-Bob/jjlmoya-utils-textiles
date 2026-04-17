import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'garnkalkylator-stickning-virkning';
const title = 'Garnkalkylator: Hur många meter och nystan behöver jag?';
const description =
  'Beräkna noggrant mängden garn som behövs för dina sticknings- och virkningsprojekt baserat på mönster och storlek.';

const faqData = [
  {
    question: 'Varför drar virkning mer garn än stickning?',
    answer:
      'Virkning bygger på att skapa knutar och överlappande öglor, vilket skapar ett tätare och tjockare tyg per kvadratcentimeter. I genomsnitt förbrukar ett virkprojekt mellan 25% och 35% mer garn än samma projekt stickat med två stickor (rätstickning).',
  },
  {
    question: 'Vad händer om jag köper garn från olika färgbadsnummer (Dye Lot)?',
    answer:
      'Även om färgen ser identisk ut i butiken kan små kemiska variationer under färgningen skapa synliga ränder i det färdiga plagget. Det rekommenderas starkt att köpa allt garn på en gång och kontrollera att färgbadsnumret är detsamma.',
  },
  {
    question: 'Hur påverkar stickfastheten (gauge) den slutliga förbrukningen?',
    answer:
      'Om du stickar löst drar varje maska fler meter garn. Om din stickfasthet är större än vad mönstret anger (t.ex. 13 maskor istället för 15), kommer din garnåtgång att öka väsentligt. Det är livsviktigt att sticka en provlapp först.',
  },
  {
    question: 'Hur beräknar jag meter om jag bara har nystanets vikt?',
    answer:
      'Utan uppgift om meteryta är det svårt. De flesta nystan anger meter på etiketten. Om de inte gör det, sök på garnets namn i databaser som Ravelry för att hitta den exakta längden per 50g eller 100g.',
  },
];

const howToData = [
  {
    name: 'Välj projekt',
    text: 'Välj mellan tröja, halsduk, mössa, sockor eller filt för att ladda specifika förbrukningsdata.',
  },
  {
    name: 'Definiera storlek och tjocklek',
    text: 'Ange slutliga mått (S, M, L, XL) och tjockleken på garnet du ska använda (Fingering, DK, Worsted, Bulky).',
  },
  {
    name: 'Aktivera multiplikatorer',
    text: 'Om ditt mönster har flätor eller komplexa strukturer, aktivera struktur-switchen för att lägga till det nödvändiga tillägget.',
  },
  {
    name: 'Få inköpslistan',
    text: 'Skriv in meter per nystan för ditt valda garn för att se exakt hur många enheter du behöver lägga i kundvagnen.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'Craft Yarn Council: Standard Yarn Weights & Yardages',
      url: 'https://www.craftyarncouncil.com/standards/yarn-weight-system',
    },
    {
      name: 'Interweave Essentials: Yarn Substitution and Estimation',
      url: 'https://www.interweave.com/article/knitting/yarn-substitution-angelina-take-two/',
    },
    {
      name: 'The Woolery: Fibers and Calculation of Yarn Usage',
      url: 'https://woolery.com/blogs/the-woolery-blog/yarn-weight-charts-helpful-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Garnåtgångsguide: Hur man beräknar meter och nystan för dina projekt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bemästra handarbetets logistik och undvik att garnet tar slut med vår tekniska precisionskalkylator för stickning och virkning. En av de största rädslorna hos någon som stickar är <strong>"Yarn Chicken"</strong>: det där kritiska ögonblicket i slutet av ett projekt när det verkar som att tråden ska ta slut innan de sista maskorna är avmaskade. Denna kalkylator har utvecklats för att erbjuda uppskattningar baserade på branschstandarder för meteryta och vikt.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Säkerhetsmarginal', icon: 'mdi:security' },
        { value: 'Metrisk', label: 'Beräkning i Meter', icon: 'mdi:ruler' },
        { value: 'Offline', label: 'Lokal Databas', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Varför vikten på nystan är missledande',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Många nybörjare gör misstaget att köpa garn baserat enbart på vikt (t.ex. "6 nystan på 100g"). Vikt är dock en enhet för massa, inte längd. Två garner som väger 100g kan ha radikalt olika längder: ett <strong>Bulky-garn</strong> kan bara ha 80 meter, medan ett <strong>Fingering / Lace</strong> kan överstiga 450 meter vid samma vikt.',
    },
    {
      type: 'paragraph',
      html: 'Därför prioriterar vår kalkylator alltid <strong>totala meter</strong>. När du väl vet den längd som krävs för din storlek och ditt projekt kan du dela den med den meterlängd som anges på etiketten för ditt specifika garn för att få det exakta antalet nystan du bör köpa.',
    },
    {
      type: 'title',
      text: 'Tabell över Standardmeterytor per Tjocklek',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om du inte har etiketten till hands kan du använda dessa referensmeter (per 100g fiber) för dina uppskattningar:',
    },
    {
      type: 'table',
      headers: ['Tjocklek (Weight)', 'Meter ca / 100g', 'Rekommenderad Användning', 'Föreslagna Stickor'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Spetssjalar, hålmönster', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Sockor, babykläder', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Lätta jackor', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Tröjor, mössor', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Filtar, kappor', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'XXL-halsdukar, filtar', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Faktorn Stickfasthet (Gauge)',
      html: '<p>Kom ihåg att om du stickar mycket löst blir dina maskor större och drar mer tråd än om du stickar fast. Vår kalkylator tillämpar en säkerhetsmarginal, men om du vet att din stickfasthet är extremt lös bör du överväga att lägga till 5-10% extra på resultaten för att undvika överraskningar.</p>',
    },
    {
      type: 'title',
      text: 'Variabler som ökar garnförbrukningen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Inte alla maskor drar samma mängd fiber. När du väljer din design bör du ta hänsyn till dessa multiplikatorfaktorer:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Slätstickning / Jersey',
          description: 'Representerar basförbrukningen och maximal garneffektivitet för alla plagg.',
          icon: 'mdi:minus-circle-outline',
          points: ['Idealisk för nybörjare', 'Naturligt fall i tyget'],
        },
        {
          title: 'Flätor / Struktur',
          description: 'Korsning av fibrer "förkortar" stycket, vilket ökar förbrukningen med ca 25%.',
          icon: 'mdi:texture-box',
          points: ['Kräver fler meter', 'Tätare och tyngre tyg'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Virkning (Crochet)',
          description: 'Virkade knutar drar ca 30% mer garn än stickning.',
          icon: 'mdi:hook',
          points: ['Garnet går åt snabbare', 'Tredimensionell textur'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Resårstickning',
          description: 'Strukturen med räta/aviga samlar mer ull per kvadratcentimeter.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Mellanförbrukning (+15%)', 'Hög elasticitet'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Ordlista för den Förutseende Handarbetaren',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (Färgbadsnummer)',
          definition:
            'Nummer som identifierar det färgbad som garnet färgades i. Olika bad kan ha färgvariationer som är osynliga i nystanet men mycket synliga i det färdiga plagget.',
        },
        {
          term: 'Stash (Garnförråd)',
          definition:
            'En handarbetares personliga samling av garner. Att veta vikten på restgarner utan etikett är viktigt för att beräkna små projekt.',
        },
        {
          term: 'Uppläggning',
          definition:
            'Sättet som garnet presenteras på (härva, nystan eller kon), vilket påverkar om det behöver nystas innan användning.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'Utmaningen i att försöka avsluta en sektion med en mängd garn som verkar otillräcklig.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Hur man använder resultaten från kalkylatorn',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När verktyget har gett dig antalet meter och nystan rekommenderar vi att du utför följande manuella verifieringssteg:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kontrollera meterytan på ditt faktiska nystan:</strong> Inte alla 100g nystan har 200m. Verifiera detta på etiketten för att justera den slutliga beräkningen.',
        '<strong>Lägg till meter för detaljer:</strong> Om du ska lägga till fransar på en halsduk eller tofsar på en mössa, lägg till 50-80 meter extra till totalen.',
        '<strong>Provlapp:</strong> Sticka en kvadrat på 10x10 cm. Väg den på en precisionsvåg. Om den väger 20g och din filt är 100x100 (100 kvadrater), behöver du exakt 2kg garn.',
        '<strong>Köp alltid från samma färgbad:</strong> Om beräkningen säger 7 nystan, köp 8 om de är från olika bad för att ha marginal för sömmar.',
      ],
    },
    {
      type: 'summary',
      title: 'Strategiska Råd för Inköp av Garn',
      items: [
        'Prioritera meter framför gram för att säkerställa den längd som behövs.',
        'Virkning drar betydligt mer garn än stickning; justera typsvittchen.',
        'Täta strukturer (flätor) kräver en ökning med 25% i garnbudgeten.',
        'Spara alltid en etikett från varje färgbad om du behöver beställa mer av samma färg.',
        'Använd 10% säkerhetsmarginal för att sticka den obligatoriska provlappen.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. TYP AV PROJEKT',
    sectionSize: '2. DIMENSIONER / STORLEK',
    sectionWeight: '3. GARNTJOCKLEK',
    sectionPattern: '4. MÖNSTEREGENSKAPER',
    sectionBall: '5. NYSTAN-DATA',
    labelCables: 'Flätor eller täta strukturer?',
    labelGrams: 'GRAM / NYSTAN',
    labelMeters: 'METER / NYSTAN',
    weightFine: 'Fint',
    weightMedium: 'Medium',
    weightThick: 'Tjockt',
    weightXXL: 'XXL',
    projectSweater: 'TRÖJA',
    projectScarf: 'HALSDUK',
    projectHat: 'MÖSSA',
    projectSocks: 'SOCKOR',
    projectBlanket: 'FILT',
    projectCardigan: 'KOFTA',
    statPrefix: 'BERÄKNAD TOTALFÖRBRUKNING',
    statSuffix: 'M',
    statNote: 'Slutliga meter beräknat med 10% reservlager.',
    ballsFormatSingular: 'Köp {n} nystan',
    ballsFormatPlural: 'Kup {n} nystan',
    ballsDetailFormat: 'Nystan på {w}g / {m}m vardera.',
    alertTitle: 'Strategisk säkerhet:',
    alertText:
      'Denna beräkning garanterar att garnet inte tar slut. Kom ihåg att kontrollera färgbadsnumret (dye lot) när du köper dina nystan.',
    schemeSleeveLabel: 'Ärmar',
    schemeSleeveEach: 'st',
    schemeBodyLabel: 'Bål',
    schemeTotalHat: 'Totalt Mössa',
    schemeTotalFlat: 'Totalt Stycke',
    schemeTotalSocks: 'Totalt Par',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Barn', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Stor', 'Maxi'],
      socks: ['Barn', 'Vux S', 'Vux M', 'Vux L'],
      blanket: ['Baby', 'Soffa', 'Säng 90', 'Säng 150'],
    },
  },
};
