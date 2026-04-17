import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'wollrechner-garnverbrauch';
const title = 'Wollrechner: Wie viele Meter und Knäuel benötige ich?';
const description =
  'Berechnen Sie präzise die benötigte Menge an Wolle oder Garn für Ihre Strick- und Häkelprojekte basierend auf Muster und Größe.';

const faqData = [
  {
    question: 'Warum verbraucht Häkeln mehr Wolle als Stricken?',
    answer:
      'Häkeln basiert auf der Erstellung von Knoten und überlappenden Schlaufen, was zu einem dichteren und dickeren Gewebe pro Quadratzentimeter führt. Im Durchschnitt verbraucht ein Häkelprojekt zwischen 25% und 35% mehr Garn als das gleiche Projekt, wenn es gestrickt würde.',
  },
  {
    question: 'Was passiert, wenn ich Wolle aus verschiedenen Partien (Dye Lot) kaufe?',
    answer:
      'Auch wenn die Farbe im Laden identisch aussieht, können minimale chemische Abweichungen beim Färben sichtbare Streifen im fertigen Kleidungsstück erzeugen. Es wird dringend empfohlen, die gesamte Wolle auf einmal zu kaufen und sicherzustellen, dass die Partienummer identisch ist.',
  },
  {
    question: 'Wie beeinflusst die Maschenprobe (Gauge) den Verbrauch?',
    answer:
      'Wenn Sie locker stricken, verbraucht jede Masche mehr Meter Garn. Wenn Ihre Maschenprobe größer ist als in der Anleitung angegeben (z. B. 13 statt 15 Maschen), erhöht sich der Wollverbrauch erheblich. Eine vorherige Maschenprobe ist daher unerlässlich.',
  },
  {
    question: 'Wie berechne ich die Meterzahl, wenn ich nur das Gewicht des Knäuels habe?',
    answer:
      'Ohne Angabe der Lauflänge ist es schwierig. Die meisten Knäuel geben die Meter auf der Banderole an. Falls nicht, suchen Sie nach dem Namen der Wolle in Datenbanken wie Ravelry, um die exakte Länge pro 50g oder 100g zu finden.',
  },
];

const howToData = [
  {
    name: 'Projekt auswählen',
    text: 'Wählen Sie zwischen Pullover, Schal, Mütze, Socken oder Decke, um die spezifischen Verbrauchsdaten zu laden.',
  },
  {
    name: 'Größe und Dicke definieren',
    text: 'Geben Sie die Endmaße (S, M, L, XL) und die Stärke des verwendeten Garns an (Fingering, DK, Worsted, Bulky).',
  },
  {
    name: 'Multiplikatoren aktivieren',
    text: 'Falls Ihr Muster Zöpfe oder komplexe Strukturen aufweist, aktivieren Sie den Schalter für Texturen, um den nötigen Aufschlag hinzuzufügen.',
  },
  {
    name: 'Einkaufsliste erhalten',
    text: 'Geben Sie die Meter pro Knäuel Ihrer gewählten Wolle ein, um genau zu sehen, wie viele Einheiten Sie kaufen müssen.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Literaturhinweise',
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
      text: 'Leitfaden zum Wollverbrauch: So berechnen Sie Meter und Knäuel für Ihre Projekte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Meistern Sie die Logistik des Handarbeitens und vermeiden Sie, dass Ihnen das Garn ausgeht, mit unserem technischen Wollrechner für Stricken und Häkeln. Die größte Angst beim Handarbeiten ist das <strong>"Yarn Chicken"</strong>: der kritische Moment am Ende eines Projekts, wenn es so aussieht, als würde das Garn ausgehen, bevor die letzten Maschen abgekettet sind. Dieser Rechner wurde entwickelt, um Schätzungen basierend auf Industriestandards für Lauflänge und Gewicht zu liefern.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Sicherheitsmarge', icon: 'mdi:security' },
        { value: 'Metrisch', label: 'Meter-Berechnung', icon: 'mdi:ruler' },
        { value: 'Offline', label: 'Lokale Datenbank', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Warum das Gewicht von Wollknäueln irreführend ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Viele Anfänger begehen den Fehler, Wolle ausschließlich nach Gewicht zu kaufen (z. B. "6 Knäuel zu je 100g"). Das Gewicht ist jedoch eine Einheit der Masse, nicht der Länge. Zwei Wollarten, die jeweils 100g wiegen, können radikal unterschiedliche Lauflängen haben: Eine Wolle vom Typ <strong>Bulky</strong> kann nur 80 Meter haben, während eine <strong>Fingering / Lace</strong> Wolle bei gleichem Gewicht über 450 Meter lang sein kann.',
    },
    {
      type: 'paragraph',
      html: 'Daher priorisiert unser Rechner immer die <strong>Gesamt-Meterzahl</strong>. Sobald Sie die benötigte Länge für Ihre Größe und Ihr Projekt kennen, können Sie diese durch die Lauflänge auf der Banderole teilen, um die exakte Anzahl der benötigten Knäuel zu erhalten.',
    },
    {
      type: 'title',
      text: 'Standard-Lauflängen-Tabelle nach Garnstärke',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Falls Sie die Banderole nicht zur Hand haben, können Sie diese Referenzwerte (pro 100g Faser) für Ihre Schätzung nutzen:',
    },
    {
      type: 'table',
      headers: ['Stärke (Weight)', 'Meter ca. / 100g', 'Empfohlene Nutzung', 'Empf. Nadelstärke'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Spitzenschals, Ajourmuster', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Socken, Babykleidung', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Leichte Jacken', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Pullover, Mützen', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Decken, Mäntel', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'XXL-Schals, Decken', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Der Faktor der Maschenprobe (Gauge)',
      html: '<p>Denken Sie daran: Wenn Sie sehr locker stricken, werden Ihre Maschen größer und verbrauchen mehr Garn als bei festem Stricken. Unser Rechner wendet eine Sicherheitsmarge an. Wenn Sie jedoch wissen, dass Sie extrem locker stricken, sollten Sie 5-10% zusätzlich einplanen.</p>',
    },
    {
      type: 'title',
      text: 'Variablen, die den Garnverbrauch erhöhen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nicht alle Muster verbrauchen die gleiche Menge an Fasern. Beachten Sie bei der Wahl Ihres Designs diese Multiplikationsfaktoren:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Glatt rechts / Jersey',
          description: 'Stellt den Basisverbrauch und die maximale Garneffizienz für jedes Kleidungsstück dar.',
          icon: 'mdi:minus-circle-outline',
          points: ['Ideal für Anfänger', 'Natürlicher Fall des Gewebes'],
        },
        {
          title: 'Zöpfe / Struktur',
          description: 'Die Kreuzung der Fasern "verkürzt" das Stück und erhöht den Verbrauch um ca. 25%.',
          icon: 'mdi:texture-box',
          points: ['Benötigt mehr Meter', 'Dichteres und schwereres Gewebe'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Häkeln (Crochet)',
          description: 'Häkelknoten verbrauchen ca. 30% mehr Garn als das Stricken.',
          icon: 'mdi:hook',
          points: ['Höherer Knäuelverbrauch', 'Dreidimensionale Textur'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Rippenmuster',
          description: 'Die Rechts/Links-Struktur sammelt mehr Wolle pro Quadratzentimeter an.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Mittlerer Verbrauch (+15%)', 'Hohe Elastizität'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Glossar für vorausschauende Handarbeiter',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (Farbpartie)',
          definition:
            'Nummer, die das Färbebad identifiziert. Verschiedene Partien können Farbunterschiede aufweisen, die am Knäuel kaum, im fertigen Kleidungsstück aber deutlich sichtbar sind.',
        },
        {
          term: 'Stash (Vorrat)',
          definition:
            'Die persönliche Garnsammlung. Das Gewicht von Restgarn ohne Banderole zu kennen, ist wichtig für kleine Projekte.',
        },
        {
          term: 'Aufmachung',
          definition:
            'Die Form des Garns (Strang, Knäuel oder Konus), was beeinflusst, ob es vor der Verwendung gewickelt werden muss.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'Die Herausforderung, einen Abschnitt zu beenden, wenn die Garnmenge unzureichend erscheint.',
        },
      ],
    },
    {
      type: 'title',
      text: 'So nutzen Sie die Ergebnisse dieses Rechners',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sobald das Tool Ihnen die Anzahl an Metern und Knäueln ausgibt, empfehlen wir folgende manuelle Überprüfungsschritte:',
    },
    {
      type: 'list',
      items: [
        '<strong>Lauflänge Ihres Knäuels prüfen:</strong> Nicht jedes 100g-Knäuel hat 200m. Überprüfen Sie dies auf der Banderole.',
        '<strong>Extras dazurechnen:</strong> Wenn Sie Fransen für einen Schal oder Pompons für eine Mütze planen, rechnen Sie 50-80 Meter extra dazu.',
        '<strong>Maschenprobe:</strong> Stricken Sie ein 10x10 cm Quadrat. Wiegen Sie es genau. Wenn es 20g wiegt und Ihre Decke 100x100 cm groß ist (100 Quadrate), benötigen Sie genau 2kg Wolle.',
        '<strong>Immer aus der gleichen Partie kaufen:</strong> Wenn die Berechnung 7 Knäuel ergibt, kaufen Sie lieber 8, um Puffer für Nähte zu haben.',
      ],
    },
    {
      type: 'summary',
      title: 'Strategische Tipps für den Wollkauf',
      items: [
        'Priorisieren Sie Meter gegenüber Gramm, um die benötigte Länge sicherzustellen.',
        'Häkeln verbraucht wesentlich mehr Wolle als Stricken; passen Sie die Auswahl entsprechend an.',
        'Dichte Texturen (Zöpfe) erfordern einen Aufschlag von 25% beim Garnbudget.',
        'Bewahren Sie immer eine Banderole jeder Partie auf, falls Sie Wolle nachbestellen müssen.',
        'Nutzen Sie den 10%-Sicherheitspuffer für die obligatorische Maschenprobe.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. PROJEKTART',
    sectionSize: '2. ABMESSUNGEN / GRÖSSE',
    sectionWeight: '3. GARNSTÄRKE',
    sectionPattern: '4. MUSTER-MERKMALE',
    sectionBall: '5. KNÄUEL-DATEN',
    labelCables: 'Zöpfe oder dichte Strukturen?',
    labelGrams: 'GRAMM / KNÄUEL',
    labelMeters: 'METER / KNÄUEL',
    weightFine: 'Fein',
    weightMedium: 'Mittel',
    weightThick: 'Dick',
    weightXXL: 'XXL',
    projectSweater: 'PULLOVER',
    projectScarf: 'SCHAL',
    projectHat: 'MÜTZE',
    projectSocks: 'SOCKEN',
    projectBlanket: 'DECKE',
    projectCardigan: 'STRICKJACKE',
    statPrefix: 'GESCHÄTZTER VERBRAUCH',
    statSuffix: 'M',
    statNote: 'Endgültige Lauflänge berechnet mit 10% Sicherheitsreserve.',
    ballsFormatSingular: 'Kaufen Sie {n} Knäuel',
    ballsFormatPlural: 'Kaufen Sie {n} Knäuel',
    ballsDetailFormat: 'Knäuel zu je {w}g / {m}m.',
    alertTitle: 'Strategische Sicherheit:',
    alertText:
      'Diese Berechnung stellt sicher, dass Ihnen das Garn nicht ausgeht. Achten Sie beim Kauf auf die gleiche Farbpartie (Dye Lot).',
    schemeSleeveLabel: 'Ärmel',
    schemeSleeveEach: 'je',
    schemeBodyLabel: 'Körper',
    schemeTotalHat: 'Gesamt Mütze',
    schemeTotalFlat: 'Gesamt Stück',
    schemeTotalSocks: 'Gesamt Paar',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Kind', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Groß', 'Maxi'],
      socks: ['Kind', 'Erw. S', 'Erw. M', 'Erw. L'],
      blanket: ['Baby', 'Sofa', 'Bett 90', 'Bett 150'],
    },
  },
};
