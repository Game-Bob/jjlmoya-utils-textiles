import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'stricknadel-umrechner';
const title = 'Stricknadel und Häkelnadel Umrechner';
const description = 'Konvertieren Sie Nadelstärken zwischen metrischen (mm), US- und UK-Systemen mit Empfehlungen für Garne und WPI.';

const faqData = [
  {
    question: 'Warum gibt es verschiedene Größensysteme für Nadeln?',
    answer: 'Historisch gesehen hat jedes Land sein eigenes System entwickelt. Das metrische System (mm) ist der präziseste internationale Standard. Das US-System verwendet eine progressive Nummerierung (0-50), während das britische System eine inverse Nummerierung verwendet: Je höher die Zahl, desto feiner ist die Nadel.',
  },
  {
    question: 'Sind die Größen für Häkelnadeln und Stricknadeln in den USA gleich?',
    answer: 'Nicht ganz. Häkelnadeln in den USA haben oft einen Buchstaben (z. B. H-8), und es gibt spezifische Variationen bei kleinen Stärken. Außerdem verwenden Stahlhäkelnadeln für feine Garne eine völlig andere Nummerierung.',
  },
  {
    question: 'Welche Nadel soll ich wählen, wenn meine Anleitung eine Größe ohne exakte Entsprechung verwendet?',
    answer: 'Wenn eine Anleitung beispielsweise 7,0 mm verlangt und Ihr System nur 6,5 mm bis 8,0 mm abdeckt, wird dringend empfohlen, eine Maschenprobe zu machen. Ein Unterschied von 0,5 mm kann die Endgröße des Kleidungsstücks erheblich verändern.',
  },
  {
    question: 'Was ist WPI (Wraps Per Inch)?',
    answer: 'Es ist die Anzahl der Garnwicklungen, die auf einen Zoll (2,54 cm) passen. Dies ist die zuverlässigste Methode, um die Stärke einer Wolle ohne Etikett zu bestimmen und die am besten geeignete Nadel auszuwählen.',
  },
];

const howToData = [
  {
    name: 'Arbeitsart auswählen',
    text: 'Wählen Sie zwischen Stricken (knitting) oder Häkeln (crochet), um die korrekten Entsprechungen im US-System zu sehen.',
  },
  {
    name: 'Größe im visuellen Wähler wählen',
    text: 'Klicken Sie auf den Kreis, der Ihrer Nadelgröße entspricht. Die Löcher sind im realen mathematischen Verhältnis zur Millimeterangabe skaliert.',
  },
  {
    name: 'Entsprechungen ablesen',
    text: 'Sehen Sie die Ergebnisse in Echtzeit: Millimeter, US-Größe und UK-Größe, zusammen mit der empfohlenen Garnkategorie und dem WPI.',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Literaturhinweise',
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
      text: 'Technischer Leitfaden für Strick- und Häkelnadeln: Systeme, Stärken und Entsprechungen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Globalisierung digitaler Anleitungen macht es unerlässlich, die Unterschiede zwischen dem <strong>metrischen Dezimalsystem</strong>, dem <strong>US-Standard (US)</strong> und dem <strong>britischen Imperialsystem (UK)</strong> zu verstehen. Dieses Tool konvertiert zwischen den drei Systemen und bietet Garnempfehlungen mittels der WPI-Methode.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Funktioniert ohne Netz', icon: 'mdi:wifi-off' },
        { value: 'Dreifach', label: 'Vollständige Synchronisation', icon: 'mdi:sync' },
        { value: 'WPI', label: 'Garnanalyse', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Die Komplexität internationaler Systeme',
      level: 3,
    },
    {
      type: 'table',
      headers: ['System', 'Berechnungsgrundlage', 'Vorherrschende Region', 'Technische Merkmale'],
      rows: [
        ['<strong>Metrisch (mm)</strong>', 'Exakter Durchmesser in mm', 'Europa / International', 'Der zuverlässigste ISO-Standard. Konstante Schritte von 0,25 mm oder 0,50 mm.'],
        ['<strong>US (USA)</strong>', 'Progressive Nummerierung', 'Nordamerika', 'Verwendet Zahlen von 0 bis 50. Beim Häkeln werden Zahlen mit Buchstaben kombiniert (B-1, G-6).'],
        ['<strong>UK (Imperial)</strong>', 'Inverse Nummerierung', 'Großbritannien / Australien', 'Basierend auf dem Drahtziehkaliber. Je höher die Zahl, desto feiner die Nadel (14 ist fein, 0 ist dick).'],
      ],
    },
    {
      type: 'title',
      text: 'Garnidentifikation durch die WPI-Methode',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / Encaje (18-22+ WPI):</strong> Ultrafine Garne für Seiden- oder Mohairspitzen. Nadeln von 1,5 mm bis 2,5 mm.',
        '<strong>Fingering / Baby (14-16 WPI):</strong> Der Standard für Socken und Babykleidung. Optimale Nadeln von 2,75 mm bis 3,25 mm.',
        '<strong>Sport / Fine (12-14 WPI):</strong> Garn mit geringer bis mittlerer Stärke, ideal für leichte Jacken. Nadeln von 3,5 mm bis 3,75 mm.',
        '<strong>DK / Light Worsted (11-13 WPI):</strong> Die vielseitigste Stärke auf dem Markt. Nadeln von 4,0 mm oder 4,5 mm.',
        '<strong>Worsted / Aran (9-10 WPI):</strong> Dickes Garn für Winterpullover. Nadeln von 5,0 mm bis 5,5 mm.',
        '<strong>Bulky / Chunky (7-8 WPI):</strong> Grobe Wolle für schnelle Projekte. Nadeln von 6,0 mm bis 8,0 mm.',
        '<strong>Super Bulky (5-6 WPI):</strong> Riesige Fasern für Dekoration oder Schals. Nadeln von 9,0 mm bis 15,0 mm.',
      ],
    },
    {
      type: 'tip',
      title: 'Profi Technik: Die Stahlhäkelnadel',
      html: '<p>Es gibt eine Familie von Nadeln für extrem feine merzerisierte Baumwollgarne. Das sind die <strong>Steel Hooks (Stahlhäkelnadeln)</strong>. Ihre Nummerierung ist spezifisch und umgekehrt: Eine Stahlhäkelnadel Nr. 14 (0,6 mm) ist viel feiner als eine Nr. 00 (3,5 mm). Verwenden Sie niemals die Standardtabelle für diese Stärken.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Checkliste für die richtige Nadelstärke',
      icon: 'mdi:check-circle-outline',
      badge: 'Technische Validierung',
      html: '<p>Folgen Sie diesen Schritten, bevor Sie ein größeres Projekt beginnen:</p><ul><li><strong>Persönliche Festigkeit:</strong> Wenn Sie fest stricken, wählen Sie eine 0,5 mm größere Nadel. Wenn Sie locker stricken, eine 0,5 mm kleinere.</li><li><strong>Nadelmaterial:</strong> Bambus für rutschige Garne; Metall für raue Wolle.</li><li><strong>Fasertyp:</strong> Baumwolle gibt nicht nach; Merinowolle dehnt sich beim Blocken aus.</li><li><strong>Maschenprobe:</strong> Stricken Sie ein Quadrat von 10x10 cm und waschen Sie es, bevor Sie das endgültige Maß nehmen.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Das metrische System ist universell und vermeidet Rundungsfehler zwischen Herstellern.',
          con: 'Viele alte und historische Anleitungen enthalten keine Angaben in Millimetern.',
        },
        {
          pro: 'Das US-System erleichtert das Merken von Standardgrößen für amerikanische Anleitungen.',
          con: 'Die Buchstaben beim Häkeln sind nicht immer konsistent zwischen den Marken.',
        },
        {
          pro: 'Das WPI-System ermöglicht es, Garne ohne Etikett technisch und professionell zuzuordnen.',
          con: 'Erfordert eine sehr sorgfältige manuelle Messung, um das Ergebnis nicht zu verfälschen.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'Maschenprobe (10x10 cm), die vor Projektbeginn gestrickt wird, um die tatsächliche Stärke zu validieren.' },
        { term: 'Hook Throat', definition: 'Der Hals der Häkelnadel. Seine Tiefe bestimmt, wie viel Garn die Nadel aufnehmen kann.' },
        { term: 'Block Testing', definition: 'Verfahren zum Befeuchten und Spannen des Gestricks, damit sich die Fasern entspannen und ihre wahre Endgröße zeigen.' },
      ],
    },
    {
      type: 'summary',
      title: 'Kritische Faktoren für den Erfolg Ihres Textilprojekts',
      items: [
        'Die richtige Nadel bestimmt nicht nur die Größe, sondern auch die Haltbarkeit des Kleidungsstücks gegen Abrieb.',
        'Nutzen Sie unseren Umrechner, um Anleitungen aus amerikanischen oder britischen Magazinen in Sekunden zu validieren.',
        'Wenn Sie keine exakte Entsprechung finden, wählen Sie die nächsthöhere oder -niedrigere Stärke basierend auf Ihrer Maschenprobe.',
        'Häkeln verbraucht ca. 30 % mehr Garn als Stricken bei gleicher Nadelstärke.',
        'Reinigen Sie Ihre Metallnadeln regelmäßig, um eine optimale Gleitfähigkeit zu erhalten.',
      ],
    },
  ],
  ui: {
    labelSystem: 'ARBEITSSYSTEM',
    modeKnitting: 'Stricken',
    modeCrochet: 'Häkeln',
    calibratorLabel: 'PRÄZISIONS-KALIBRATOR (ECHTGREÖSSE)',
    calibratorDesc: 'Wählen Sie einen Durchmesser, um die Entsprechungen in Echtzeit zu sehen. Die Löcher entsprechen mathematisch exakt dem Millimetermas.',
    tagMetric: 'Metrisch (mm)',
    tagUS: 'US-System',
    tagUK: 'UK-System',
    yarnLabel: 'IDEALE GARNSTÄRKE',
    wpiFormat: '{wpi} WPI (Wicklungen pro Zoll)',
    tableSectionLabel: 'TECHNISCHER KATALOG DER ENTSPRECHUNGEN',
    tableMetric: 'METRISCH',
    tableUS: 'US GRÖSSE',
    tableUK: 'UK / IMPERIAL',
    tableYarn: 'GARNKATEGORIE',
  },
};
