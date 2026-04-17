import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'internationaler-konverter-konfektionsgroessen';
const title = 'Internationaler Konverter für Konfektionsgrößen';
const description =
  'Konvertieren Sie Kleidergrößen zwischen EU-, US-, UK- und IT-Systemen. T-Shirts, Hosen, Kleider und Jacken für Herren, Damen und Unisex. Inklusive Maßtabellen und Markenempfehlungen.';

const faqData = [
  {
    question: 'Was ist der Unterschied zwischen EU- und US-Kleidergrößen?',
    answer:
      'Europäische Größen (EU) verwenden oft fortlaufende Nummern oder Buchstaben (XS-XXL oder 32-52), während US-Größen oft Buchstaben oder spezifische Nummern für Hosen verwenden. Im Allgemeinen entspricht eine EU-Größe 36 einer US-Größe 4 bei Damenbekleidung.',
  },
  {
    question: 'Ändern sich die Größen bei Herren- und Damenbekleidung?',
    answer:
      'Ja, absolut. Selbst im selben Land ist eine Herrengröße 40 nicht dasselbe wie eine Damengröße 40. Männer haben andere Proportionen (breitere Schultern), daher variiert die Größenberechnung.',
  },
  {
    question: 'Wie weiß ich, ob ich bei einer Marke eine Nummer größer oder kleiner wählen sollte?',
    answer:
      'Am besten schauen Sie sich die Bewertungen anderer Kunden an. Sätze wie "fällt klein aus" oder "groß geschnitten" sind sehr hilfreich. Konsultieren Sie auch die spezifische Maßtabelle der jeweiligen Marke.',
  },
  {
    question: 'Wie genau ist die Größenumrechnungstabelle?',
    answer:
      'Die Umrechnungstabelle ist ein Richtwert. Obwohl sie im Allgemeinen präzise ist, hat jede Marke eigene Spezifikationen. Überprüfen Sie vor dem Kauf immer die Größentabelle des jeweiligen Shops.',
  },
  {
    question: 'Läuft Kleidung nach dem Waschen ein?',
    answer:
      'Das hängt vom Material ab. 100% Baumwolle kann um 5-10% einlaufen, wenn sie heiß gewaschen und im Trockner getrocknet wird. Synthetikfasern behalten ihre Form besser bei. Beachten Sie immer die Pflegehinweise.',
  },
];

const howToData = [
  {
    name: 'Kleidungsstück und Geschlecht wählen',
    text: 'Wählen Sie die Art der Kleidung (T-Shirt, Hose, Kleid, Jacke) und das entsprechende Geschlecht aus.',
  },
  {
    name: 'Größensystem wählen',
    text: 'Wählen Sie das System aus, das Sie kennen: EU, US, UK oder IT.',
  },
  {
    name: 'Größe auswählen',
    text: 'Wählen Sie Ihre Größe im Menü oder klicken Sie auf das Raster. Die Entsprechungen werden sofort angezeigt.',
  },
  {
    name: 'Markenleitfaden konsultieren',
    text: 'Prüfen Sie, ob die Marke klein, normal oder groß ausfällt, um Ihre Auswahl anzupassen.',
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
  inLanguage: 'de',
};

const shirtsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '44' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '46' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '42' },
  ],
  unisex: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '34' },
    { EU: 'S', US: 'S', UK: 'S', IT: '36' },
    { EU: 'M', US: 'M', UK: 'M', IT: '38' },
    { EU: 'L', US: 'L', UK: 'L', IT: '40' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '42' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '44' },
  ],
};

const pantsData = {
  men: [
    { EU: '30', US: '30', UK: '30', IT: '44' },
    { EU: '32', US: '32', UK: '32', IT: '46' },
    { EU: '34', US: '34', UK: '34', IT: '48' },
    { EU: '36', US: '36', UK: '36', IT: '50' },
    { EU: '38', US: '38', UK: '38', IT: '52' },
    { EU: '40', US: '40', UK: '40', IT: '54' },
  ],
  women: [
    { EU: '32', US: '0', UK: '4', IT: '36' },
    { EU: '34', US: '2', UK: '6', IT: '38' },
    { EU: '36', US: '4', UK: '8', IT: '40' },
    { EU: '38', US: '6', UK: '10', IT: '42' },
    { EU: '40', US: '8', UK: '12', IT: '44' },
    { EU: '42', US: '10', UK: '14', IT: '46' },
  ],
  unisex: [],
};

const dressesData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
  ],
  women: [
    { EU: 'XS', US: '0-2', UK: '4-6', IT: '32-34' },
    { EU: 'S', US: '4-6', UK: '8-10', IT: '36-38' },
    { EU: 'M', US: '8-10', UK: '12-14', IT: '40-42' },
    { EU: 'L', US: '12-14', UK: '16-18', IT: '44-46' },
    { EU: 'XL', US: '16-18', UK: '20-22', IT: '48-50' },
  ],
  unisex: [],
};

const jacketsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '44' },
    { EU: 'S', US: 'S', UK: 'S', IT: '46' },
    { EU: 'M', US: 'M', UK: 'M', IT: '48' },
    { EU: 'L', US: 'L', UK: 'L', IT: '50' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '52' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
  ],
  unisex: [],
};

const measurementRanges = {
  shirts: [
    { size: 'XS', chest: 84, waist: 76, hip: 84 },
    { size: 'S', chest: 92, waist: 84, hip: 92 },
    { size: 'M', chest: 100, waist: 92, hip: 100 },
    { size: 'L', chest: 108, waist: 100, hip: 108 },
    { size: 'XL', chest: 116, waist: 108, hip: 116 },
    { size: 'XXL', chest: 124, waist: 116, hip: 124 },
  ],
  pants: [
    { size: '30', chest: 80, waist: 76, hip: 89 },
    { size: '32', chest: 85, waist: 81, hip: 94 },
    { size: '34', chest: 90, waist: 86, hip: 99 },
    { size: '36', chest: 95, waist: 91, hip: 104 },
    { size: '38', chest: 100, waist: 96, hip: 109 },
    { size: '40', chest: 105, waist: 101, hip: 114 },
  ],
  dresses: [
    { size: 'XS', chest: 80, waist: 72, hip: 88 },
    { size: 'S', chest: 88, waist: 80, hip: 96 },
    { size: 'M', chest: 96, waist: 88, hip: 104 },
    { size: 'L', chest: 104, waist: 96, hip: 112 },
    { size: 'XL', chest: 112, waist: 104, hip: 120 },
  ],
  jackets: [
    { size: 'XS', chest: 84, waist: 76, hip: 88 },
    { size: 'S', chest: 92, waist: 84, hip: 96 },
    { size: 'M', chest: 100, waist: 92, hip: 104 },
    { size: 'L', chest: 108, waist: 100, hip: 112 },
    { size: 'XL', chest: 116, waist: 108, hip: 120 },
  ],
};

export const content: ToolLocaleContent<ClothingSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    { name: 'ISO 3635: Kleidergrößen - Offizieller Standard', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Kleidernormen - Wikipedia', url: 'https://de.wikipedia.org/wiki/Konfektionsgr%C3%B6%C3%9Fe' },
    {
      name: 'Internationale Größenumrechnung - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Größenumrechner für Kleidung: Ein vollständiger Leitfaden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Einkauf von Kleidung in internationalen Online-Shops kann verwirrend sein, wenn die Größen nicht übereinstimmen. Der <strong>Größenumrechner für Kleidung</strong> hilft Ihnen, Ihre perfekte Größe in den Systemen EU, US, UK und IT für T-Shirts, Hosen, Kleider und Jacken zu finden.',
    },
    {
      type: 'title',
      text: 'Warum variieren Kleidergrößen zwischen den Ländern?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Es gibt keinen einheitlichen internationalen Standard. Jede Region hat ihr eigenes System entwickelt, was beim Kauf in ausländischen Shops oder auf Plattformen wie Amazon oder AliExpress zu Unsicherheiten führt.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU-Größen (Europa):</strong> Verwenden oft fortlaufende Nummern (32, 34, 36...) oder Buchstaben. Dies ist das gängigste System in Deutschland, Frankreich und den Benelux-Ländern.</span>',
        '<span><strong>US-Größen (USA):</strong> Verwenden Buchstaben (XS, S, M, L) oder spezielle Nummern für Damenhosen (0, 2, 4, 6...).</span>',
        '<span><strong>UK-Größen (Großbritannien):</strong> Ähnlich dem EU-System, aber mit eigener Nummerierung, die meist niedriger als die US-Nummerierung ist.</span>',
        '<span><strong>IT-Größen (Italien):</strong> Italienische Nummerierung mit Abweichungen zum allgemeinen EU-System.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Profi Tipp',
      html: 'Größen variieren erheblich zwischen den Marken. Eine 38 bei Zara kann sich von einer 38 bei H&amp;M unterscheiden. Konsultieren Sie immer die markenspezifische Größentabelle vor dem Kauf.',
    },
    {
      type: 'title',
      text: 'So messen Sie Ihren Körper richtig',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um eine korrekte Größe zu garantieren, messen Sie Ihren Körper mit einem flexiblen Maßband. Messen Sie am Ende des Tages, wenn der Körper seine maximale Ausdehnung erreicht hat.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Brustumfang:</strong> Messen Sie an der breitesten Stelle der Brust, wobei das Maßband unter den Armen durchgeführt wird.</span>',
        '<span><strong>Taillenumfang:</strong> Messen Sie auf Höhe des Bauchnabels, ohne den Bauch künstlich einzuziehen.</span>',
        '<span><strong>Hüftumfang:</strong> Messen Sie an der breitesten Stelle der Hüften, wobei das Maßband parallel zum Boden liegt.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Passform-Guide nach Marken',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Normale Größen. Eine 36 bei Zara ist für Standardmaße meist zuverlässig.</span>',
        '<span><strong>H&amp;M:</strong> Neigt dazu, groß auszufallen. Erwägen Sie eine Nummer kleiner als gewohnt.</span>',
        '<span><strong>Uniqlo:</strong> Fällt oft klein aus, besonders bei Basics. Hier wird empfohlen, eine Nummer größer zu wählen.</span>',
        '<span><strong>Nike / Adidas:</strong> Sportliche, oft engere Schnitte. Erwägen Sie eine halbe Nummer größer.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Art des Kleidungsstücks',
    categoryShirts: 'T-Shirts',
    categoryPants: 'Hosen',
    categoryDresses: 'Kleider',
    categoryJackets: 'Jacken',
    genderLabel: 'Geschlecht',
    genderMen: 'Herren',
    genderWomen: 'Damen',
    genderUnisex: 'Unisex',
    tabBySize: 'Nach Größe',
    tabByMeasurements: 'Nach Maßen',
    regionLabel: 'Ihr Größensystem',
    sizeLabel: 'Wählen Sie Ihre Größe',
    regionEU: 'Europa (EU)',
    regionUS: 'USA (US)',
    regionUK: 'Großbritannien (UK)',
    regionIT: 'Italien (IT)',
    labelEU: 'Europa',
    labelUS: 'USA',
    labelUK: 'Großbritannien',
    labelIT: 'Italien',
    quickGridTitle: 'Schnelle Entsprechungen (EU)',
    tableTitle: 'Vollständige Umrechnungstabelle',
    measurementsTitle: 'Maße eingeben',
    chestLabel: 'Brustumfang (cm)',
    waistLabel: 'Taille (cm)',
    hipLabel: 'Hüfte (cm)',
    chestPlaceholder: 'Z.B.: 95',
    waistPlaceholder: 'Z.B.: 85',
    hipPlaceholder: 'Z.B.: 95',
    recommendBtnLabel: 'Größe empfehlen',
    tipsTitle: 'Messtipps',
    tipOverClothes: 'Über der Kleidung',
    tipStraight: 'Gerade und parallel',
    tipNoTight: 'Nicht zu eng',
    tipEndOfDay: 'Am Ende des Tages',
    recommendationTitle: 'Empfohlene Größe',
    recommendedSizePrefix: 'Wir empfehlen Größe:',
    measuredBy: 'Basierend auf Ihren Maßen:',
    chestShort: 'Brust',
    waistShort: 'Taille',
    hipShort: 'Hüfte',
    recommendationError: 'Bitte füllen Sie alle Maße aus, um eine Empfehlung zu erhalten.',
    recommendationNoData: 'Für diese Kategorie sind keine Daten verfügbar.',
    fitGuideTitle: 'Passform-Guide nach Marken',
    fitSmall: 'Fällt klein aus',
    fitRegular: 'Normale Passform',
    fitLarge: 'Fällt groß aus',
    fitInfoDefault: 'Klicken Sie auf eine Marke für spezifische Empfehlungen.',
    fitNotif1: ' fällt in der Regel ',
    fitNotifSmall: 'klein',
    fitNotifRegular: 'normal',
    fitNotifLarge: 'groß',
    fitNotif2: ' aus. Erwägen Sie ',
    fitNotif3: ', wenn Sie zum ersten Mal bei dieser Marke kaufen.',
    fitAdviceSmall: 'eine Nummer größer zu wählen',
    fitAdviceRegular: 'Ihre gewohnte Größe beizubehalten',
    fitAdviceLarge: 'eine Nummer kleiner zu wählen',
    fitSelectedSuffix: ' ausgewählt. Wählen Sie eine andere Marke zum Vergleich.',
    infoBannerTitle: 'Pro-Tipp:',
    infoBannerText:
      'Kleidergrößen variieren erheblich zwischen den Marken. Überprüfen Sie immer die spezifische Tabelle des Shops vor dem Kauf.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
