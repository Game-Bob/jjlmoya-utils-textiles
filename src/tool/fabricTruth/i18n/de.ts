import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'textil-wahrheit-faseranalyse';
const title = 'Textil Wahrheit: Analyse der Faserqualität';
const description = 'Entdecken Sie die wahre Qualität Ihrer Kleidung durch Analyse der Zusammensetzung. Echtes Baumwolle oder teures Plastik? Wissenschaftliche Faseranalyse.';

const faqData = [
  {
    question: 'Was ist "Greenwashing" in der Mode?',
    answer: 'Es ist eine Marketingtechnik, bei der Marken Begriffe wie "Ökologisch" oder "Nachhaltig" ohne echte Beweise verwenden. Die Analyse der tatsächlichen Faserzusammensetzung ist der einzige Weg, um zu überprüfen, ob ein Kleidungsstück wirklich natürlich oder synthetisch ist.',
  },
  {
    question: 'Warum ist Polyester oft von geringerer Qualität als Baumwolle?',
    answer: 'Polyester ist ein Kunststoff (PET). Er ist zwar langlebig, aber nicht atmungsaktiv, fördert schlechte Gerüche durch Bakterien und erzeugt bei jeder Wäsche Mikroplastik. Naturfasern wie Baumwolle oder Leinen bieten eine bessere Wärmeregulierung.',
  },
  {
    question: 'Ist es schlimm, wenn meine Kleidung Elasthan enthält?',
    answer: 'In kleinen Mengen (1-5%) sorgt Elasthan (Lycra) für Komfort und Passform. Es erschwert jedoch das Recycling des Kleidungsstücks erheblich, da Kunststoff mit Naturfasern gemischt wird, was oft ein Hinweis auf "Fast Fashion" ist.',
  },
  {
    question: 'Wie erkennt man hochwertige Kleidung am Etikett?',
    answer: 'Suchen Sie nach Monomaterial-Zusammensetzungen (100% Baumwolle, 100% Wolle). Komplexe Mischungen werden oft verwendet, um Produktionskosten zu senken und verstecken synthetische Fasern unter attraktiven Handelsnamen.',
  },
];

const howToData = [
  {
    name: 'Internes Etikett finden',
    text: 'Suchen Sie nach dem weißen Zusammensetzungsetikett, das sich meist an der Innenseite oder am Kragen Ihres Kleidungsstücks befindet.',
  },
  {
    name: 'Komponenten identifizieren',
    text: 'Lesen Sie die Prozentsätze jeder Faser ab (z. B. 70% Baumwolle, 30% Polyester).',
  },
  {
    name: 'Daten in den Analysator eingeben',
    text: 'Geben Sie die Faseranteile in unser Tool ein, um eine technische Qualitätsbewertung zu erhalten.',
  },
  {
    name: 'Diagnose interpretieren',
    text: 'Prüfen Sie den erstellten Bericht, um zu verstehen, ob Ihr Kleidungsstück atmungsaktiv, langlebig ist oder aufgrund seiner synthetischen Zusammensetzung besondere Pflege benötigt.',
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
  description: description,
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
  description: description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Textil-Wahrheit',
    addFiber: 'Faser hinzufügen',
    total: 'Gesamt',
    composition: 'Zusammensetzungs-Analyse',
    description: 'Geben Sie die Prozentsätze so ein, wie sie auf dem Etikett Ihres Kleidungsstücks stehen, um die Wahrheit über dessen Qualität zu erfahren.',
    verdict: 'Urteil',
    breathability: 'Atmungsaktivität',
    durability: 'Langlebigkeit',
    warmth: 'Wärme',
    careWarning: 'Besonderer Pflegehinweis',
    specialCareWarning: 'STANDARDWÄSCHE: Befolgen Sie immer die Anweisungen auf dem physischen Etikett.',
    validationError: 'Die Zusammensetzung muss genau 100% ergeben, um das Urteil zu sehen',
    actualTotal: 'Aktuell',
    missingLabel: 'fehlen',
    disclaimer: 'Die Daten zu Atmungsaktivität, Langlebigkeit und Wärme sind Schätzungen basierend auf Branchendurchschnitten für jeden Fasertyp.',
    careWarnings: {
      delicate: 'SEHR EMPFINDLICH: Kalt von Hand waschen. Nicht im Trockner trocknen. Starkes Auswringen vermeiden.',
      wool: 'WOLLE / EDELHAAR: Kalt mit Spezialprogramm waschen. Liegend trocknen, um Verformungen zu vermeiden. Nicht im Trockner trocknen.',
      linen: 'LEINEN: Neigt stark zum Knittern. Für beste Ergebnisse leicht feucht bügeln.',
      semisynthetic: 'SEMI-SYNTHETIK: Wird im nassen Zustand schwächer. Vorsichtig behandeln und nicht stark schleudern.',
      standard: 'STANDARDWÄSCHE: Befolgen Sie immer die Anweisungen auf dem physischen Etikett.',
    },
    fiberData: {
      cotton: {
        name: 'Baumwolle',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Leinen',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Wolle / Merino',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'Seide',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Kaschmir',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: 'Mohair',
        family: 'natural',
        breathability: 8,
        durability: 9,
        warmth: 9,
        isNoble: true,
      },
      angora: {
        name: 'Angora',
        family: 'natural',
        breathability: 8,
        durability: 4,
        warmth: 10,
        isNoble: true,
      },
      alpaca: {
        name: 'Alpaka',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: 'Polyester',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: 'Viskose / Rayon',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'Nylon (Polyamid)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: 'Acryl',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: 'Teures Plastik',
        description: 'Dieses Kleidungsstück besteht größtenteils aus Erdöl. Stellen Sie sich auf Schwitzen und schnelles Pilling ein.',
      },
      hook: {
        label: 'Marketing-Falle',
        description: 'Der geringe Anteil an Edelfasern dient nur dazu, ihn auf das Etikett zu schreiben. Sie werden keinen Nutzen davon spüren.',
      },
      fragile: {
        label: 'Weich aber zerbrechlich',
        description: 'Fühlt sich sehr gut an, aber Vorsicht beim Waschen: Es neigt dazu, sich leicht zu verformen und einzulaufen.',
      },
      natural: {
        label: 'Natürliche Qualität',
        description: 'Atmungsaktives und langlebiges Kleidungsstück. Ideal für sensible Haut und langen Gebrauch.',
      },
      technical: {
        label: 'Technisches / Ultra-synthetisches Teil',
        description: 'Außer bei spezieller Sportkleidung zahlen Sie hier für reines Plastik.',
      },
      luxury: {
        label: 'Echter Luxus',
        description: 'Eine Investition in Komfort und Langlebigkeit. Behandeln Sie es mit dem Respekt, den es verdient.',
      },
      balanced: {
        label: 'Ausgewogene Mischung',
        description: 'Eine funktionale Kombination, die wahrscheinlich Kosten und Langlebigkeit ausbalanciert.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'Die Wahrheit hinter dem Etikett: Meisterleitfaden zur Textilzusammensetzung', level: 2 },
    { type: 'paragraph', html: 'Haben Sie sich jemals gefragt, warum Sie in diesem Marken-T-Shirt so stark schwitzen oder warum dieser "Wollpulli" unerträglich kratzt? Die Antwort liegt nicht im Design, sondern in der Chemie seiner Fasern.' },
    { type: 'paragraph', html: 'In einer von <strong>Fast Fashion</strong> dominierten Welt ist die Stoffqualität gegenüber der flüchtigen Ästhetik in den Hintergrund getreten. Das Verständnis der Textilzusammensetzung ist jedoch der einzige Weg, um einen intelligenten, langlebigen und hautschonenden Kauf zu tätigen. Unser Tool <strong>Textil-Wahrheit</strong> analysiert die offiziellen Prozentsätze, um Ihnen zu zeigen, ob Sie ein Qualitätsteil oder einen einfachen Block aus verarbeitetem Kunststoff vor sich haben.' },
    { type: 'title', text: 'Unsere Methodik', level: 2 },
    { type: 'paragraph', html: 'Wir verwenden einen gewichteten Algorithmus, der auf drei grundlegenden Säulen basiert, die aus europäischen und nordamerikanischen Industriestandards abgeleitet wurden:' },
    { type: 'list', items: ['<strong>Atmungsaktivität:</strong> Fähigkeit der Faser, Wasserdampf und Luft durchzulassen.', '<strong>Langlebigkeit:</strong> Widerstand gegen Abrieb, Zugkraft und die Bildung von <strong>Pilling</strong> (Knötchen).', '<strong>Thermische Effizienz:</strong> Fähigkeit zur Wärmespeicherung oder mechanischen Kühlung.'] },
    { type: 'tip', title: 'Wichtig', html: 'Das Gesetz schreibt vor, dass alle in der EU und den USA verkauften Kleidungsstücke ihre Komponenten in absteigender Reihenfolge der Prozentsätze auflisten müssen. Wenn ein Kleidungsstück kein Etikett hat oder dieses unleserlich ist, seien Sie vorsichtig: Es entspricht wahrscheinlich nicht den Mindeststandards für Textilsicherheit.' },
    { type: 'title', text: 'Gängige "Tricks" im Einzelhandel', level: 2 },
    { type: 'paragraph', html: 'Es gibt raffinierte Marketingtechniken, um den wahrgenommenen Wert eines mittelmäßigen Kleidungsstücks zu erhöhen. Hier erfahren Sie, wie Sie diese erkennen:' },
    { type: 'card', title: 'Die Edelfaser Falle', icon: 'mdi:alert', html: 'Sie sehen Etiketten mit der Aufschrift "MIT KASCHMIR" oder "MIT SEIDE" in großen Buchstaben. Beim Blick auf die Zusammensetzung entdecken Sie 3% Seide und 97% Polyester. Diese 3% tragen weder zu Weichheit noch zu Glanz oder Wärme bei; sie dienen nur dazu, dass die Marke den Preis um 20% erhöhen kann.' },
    { type: 'card', title: 'Der Mythos der "ökologischen Viskose"', icon: 'mdi:leaf', html: 'Obwohl Viskose aus Zellulose (Holz) gewonnen wird, ist ihr heutiger Herstellungsprozess oft stark umweltbelastend und das Endergebnis ist eine Faser, die im nassen Zustand drastisch an Festigkeit verliert. Sofern es sich nicht um <strong>Lyocell</strong> oder <strong>Tencel</strong> handelt, ist die Haltbarkeit begrenzt.' },
    { type: 'title', text: 'Tiefenanalyse nach Kategorien', level: 2 },
    { type: 'title', text: '1. Naturfasern (Stolz organisch)', level: 3 },
    { type: 'paragraph', html: 'Sie sind der Goldstandard. Langstapelige <strong>Baumwolle</strong> (wie Pima oder ägyptische Baumwolle) bietet ewige Weichheit. <strong>Leinen</strong> ist wissenschaftlich gesehen die beste Faser für Hitze aufgrund seiner molekularen Struktur, die Wärme abweist und Feuchtigkeit absorbiert. <strong>Wolle</strong> und <strong>Hanf</strong> sind natürliche antibakterielle Stoffe; sie müssen nicht so oft gewaschen werden, da sie Gerüche kaum annehmen.' },
    { type: 'title', text: '2. Halbsynthetische Fasern (Die Hybride)', level: 3 },
    { type: 'paragraph', html: 'Hier finden wir <strong>Viskose</strong>, <strong>Rayon</strong> und <strong>Modal</strong>. Sie fühlen sich wie Seide an, kosten aber wie Baumwolle. Sie eignen sich hervorragend für fließende Kleidungsstücke, sind aber "durstig": Sie absorbieren viel Wasser und trocknen langsam, was bei mangelnder Pflege Schimmelbildung begünstigen kann. <strong>Lyocell (Tencel)</strong> ist die Premium-Version dieser Gruppe mit einem geschlossenen Produktionskreislauf und höherer Festigkeit.' },
    { type: 'title', text: '3. Synthetische Fasern (Gesponnenes Plastik)', level: 3 },
    { type: 'paragraph', html: '<strong>Polyester</strong> ist der König des Marktes. Er ist billig, knittert nicht und ist ewig (wörtlich: es dauert 200 Jahre, bis er sich zersetzt). Das Problem ist, dass er nicht atmet. Er schafft ein feuchtes Mikroklima zwischen Stoff und Haut, der ideale Nährboden für Bakterien. <strong>Acryl</strong> ist die billige Imitation von Wolle: Es wärmt zwar, erzeugt aber viel statische Elektrizität und bildet nach zwei Wäschen Knötchen.' },
    { type: 'title', text: 'Tipps zum Überleben der Textilien', level: 2 },
    { type: 'paragraph', html: 'Selbst das beste Kleidungsstück der Welt kann durch eine einzige falsche Wäsche ruiniert werden. Hier sind die universellen goldenen Regeln:' },
    { type: 'tip', title: 'Kaltes Wasser ist Ihr Freund', html: '90% der Kleidungsstücke brauchen nicht mehr als 30°C. Hitze greift elastische Fasern an und lässt natürliche Fasern einlaufen.' },
    { type: 'tip', title: 'Weniger ist mehr (Waschmittel)', html: 'Zu viel Seife hinterlässt Rückstände, die Schmutz anziehen und die Kleidung steif machen.' },
    { type: 'tip', title: 'Trockner: Der subtile Feind', html: 'Die Flusen, die Sie im Trocknerfilter sehen, sind Teile Ihrer Kleidung, die sich durch Reibung und Hitze gelöst haben.' },
    { type: 'tip', title: 'Auf links waschen', html: 'Schützt Farben und Stickereien vor der Reibung mit der Trommel und anderen Kleidungsstücken.' },
    { type: 'paragraph', html: '"Weniger kaufen, besser wählen und langlebig machen." — Dieser Analysator ist Ihr erster Schritt zu einem bewussten und hochwertigen Kleiderschrank.' },
  ],
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Literaturhinweise',
  bibliography: [
    {
      name: 'FTC - Leitfaden zur Textilkennzeichnung',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'Europäische Kommission - Textilregulierung',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Textilpflegesymbole',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
