import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'strickrechner-maschenprobe-spannung';
const title = 'Maschenprobe und Strickspannungsrechner';
const description =
  'Berechnen Sie ganz einfach Maschen und Reihen für jedes Strick- oder Häkelmuster neu. Passen Sie die Maschenprobe durch Vielfache und Skalierungsfaktoren für ein professionelles Ergebnis an.';

const faqData = [
  {
    question: 'Was ist die Spannung oder Maschenprobe beim Stricken?',
    answer:
      'Es ist das Maß dafür, wie viele Maschen und Reihen in einen bestimmten Bereich (meist 10x10 cm) passen. Sie ist grundlegend, da sie die endgültige Größe des Kleidungsstücks basierend auf der verwendeten Nadel und Wolle bestimmt.',
  },
  {
    question: 'Wie beeinflusst eine Änderung der Maschenprobe die Größe?',
    answer:
      'Wenn Ihre Spannung mehr Maschen pro Zentimeter aufweist als die Anleitung, wird das Kleidungsstück kleiner. Wenn Sie weniger Maschen haben, wird es größer. Daher ist es wichtig, die Maschen neu zu berechnen oder die Nadelstärke zu ändern.',
  },
  {
    question: 'Warum ist die Anpassung nach Vielfachen wichtig?',
    answer:
      'Viele Muster haben Motive (Lochmuster, Zöpfe, Zeichnungen), die eine bestimmte Anzahl von Maschen erfordern. Unser Rechner passt die Gesamtzahl an das nächste Vielfache an, um das Design nicht zu zerstören.',
  },
  {
    question: 'Sollte ich die Strickprobe vor dem Messen waschen?',
    answer:
      'Ja, immer. Das "Spannen" oder "Blocken" (Waschen und in Form bringen) entspannt die Fasern und zeigt die tatsächliche Spannung, die das Kleidungsstück nach dem ersten Tragen und Waschen haben wird.',
  },
];

const howToData = [
  {
    name: 'Spannung der Anleitung identifizieren',
    text: 'Suchen Sie in der Anleitung nach der Angabe, wie viele Maschen und Reihen für ein 10x10 cm oder 4x4 Zoll großes Quadrat vorgesehen sind.',
  },
  {
    name: 'Eigene Probe stricken und messen',
    text: 'Stricken Sie eine Probe mit Ihrer Wolle und Ihren Nadeln, spannen Sie diese und messen Sie, wie viele Maschen und Reihen Sie auf der gleichen Fläche haben.',
  },
  {
    name: 'Rechner konfigurieren',
    text: 'Geben Sie die Daten der Anleitungsprobe und die Ihrer tatsächlichen Probe ein. Fügen Sie die Gesamtmaschenzahl für Ihre Größe und gegebenenfalls die Vielfachen des Muster-Motivs hinzu.',
  },
  {
    name: 'Ergebnisse erhalten',
    text: 'Überprüfen Sie die neue Anzahl der anzuschlagenden Maschen und den Skalierungsfaktor, um zu wissen, ob Sie auch die Länge des Kleidungsstücks anpassen müssen.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
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
      text: 'Online-Maschenproben- und Strickrechner: Technischer Leitfaden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie jemals einen Pullover fertiggestellt haben, der aussah, als wäre er für einen Riesen entworfen worden, oder eine Mütze, die kaum den Oberkopf bedeckte, dann kennen Sie die Bedeutung der <strong>Maschenprobe oder Spannung</strong>. In der Welt des Strickens und Häkelns ist die Spannung das Verhältnis zwischen der Garnstärke, der Nadelgröße und der Kraft, mit der jeder Stricker den Faden führt. Kein Stricker gleicht dem anderen, und daher gibt es keine zwei identischen Spannungen.',
    },
    {
      type: 'title',
      text: 'Warum ist die Spannung oder Maschenprobe beim Stricken so wichtig?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dieser Maschenprobenrechner ist ein technisches Hilfsmittel, das mathematische Vermutungen überflüssig macht und es Ihnen ermöglicht, sich auf die Kreativität zu konzentrieren. Durch die Eingabe der Daten aus der Anleitung und Ihrer eigenen Maschenprobe erhalten Sie präzise Anpassungen für Maschen und Reihen, um sicherzustellen, dass Ihr fertiges Kleidungsstück genau die Maße hat, die Sie erwarten.',
    },
    {
      type: 'title',
      text: 'So verwenden Sie den Maschenprobenrechner',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Stricken Sie eine Probe:</strong> Beschränken Sie sich nicht auf 10x10 cm. Stricken Sie mindestens 15x15 cm, damit die Ränder die Messung in der Mitte nicht verfälschen.',
        '<strong>Blocken Sie Ihre Probe:</strong> Waschen und trocknen Sie die Probe so, wie Sie es mit dem fertigen Kleidungsstück tun würden. Viele Wollfasern dehen sich aus oder wachsen, wenn sie nass werden.',
        '<strong>Messen Sie präzise:</strong> Verwenden Sie ein starres Lineal oder ein 10-cm-Maßband. Zählen Sie, wie viele Maschen waagerecht und wie viele Reihen senkrecht auf die Fläche kommen.',
        '<strong>Geben Sie die Daten ein:</strong> Tragen Sie die Werte der Anleitung in die linke Spalte und Ihre tatsächlichen Werte in die rechte ein. Das Tool berechnet automatisch neu, wie viele Maschen Sie benötigen, um die gewünschte Breite zu erreichen.',
      ],
    },
    {
      type: 'title',
      text: 'Interpretation der Ergebnisse: Der Skalierungsfaktor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Skalierungsfaktor ist der Multiplikator, den wir auf jede Anweisung in der Vorlage anwenden. Wenn Ihre Spannung 22 Maschen beträgt und die Anleitung 20 verlangt, liegt Ihr Skalierungsfaktor bei 1.1. Das bedeutet, dass Sie 10% mehr Maschen benötigen, um dieselbe physische Breite zu erhalten. Eine Abweichung von 0-2% ist ideal, 2-10% ist moderat, 10-25% erfordert eine zwingende Neuberechnung und mehr als 25% stellt ein strukturelles Risiko dar.',
    },
    {
      type: 'title',
      text: 'Umgang mit Vielfachen und Mustern',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine der größten Herausforderungen bei der Neuberechnung einer Anleitung besteht darin, die Integrität von Lochmustern, Zöpfen oder Motiven zu bewahren. Wenn sich das Design alle 8 Maschen wiederholt, können Sie nicht einfach 3 zusätzliche Maschen hinzufügen; Sie müssen die Gesamtzahl so anpassen, dass sie weiterhin ein Vielfaches von 8 bleibt. Die Funktion <strong>Anpassung nach Vielfachen</strong> dieses Rechners schlägt die nächstgelegene Maschenzahl vor, die die Architektur des Designs respektiert.',
    },
    {
      type: 'tip',
      title: 'Tipp für Experten',
      html: '<p>Es ist oft besser, diesen Rechner zu verwenden und mit der natürlichen Spannung Ihres Garns zu arbeiten und die Maschenzahl anzupassen, anstatt die Spannung durch eine radikale Änderung der Nadelgröße zu erzwingen, da dies den Fall und die Weichheit des Gewebes verändern kann.</p>',
    },
    {
      type: 'title',
      text: 'Vorteile unseres Anpassungstools',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Automatische Anpassung von Maschen und Reihen mit präzisem Skalierungsfaktor.',
        'Unterstützung für komplexe Vielfache (X + Y), um die Integrität des Motivs zu bewahren.',
        'Schätzung der benötigten Gramm Wolle für das gesamte Projekt.',
        'Dynamische Anzeige der Maschenprobe, die die Gewebedichte in Echtzeit zeigt.',
      ],
    },
    {
      type: 'card',
      title: 'Maschenprobe / Spannung',
      icon: 'mdi:ruler',
      html: 'Anzahl der Maschen und Reihen in einem Quadrat von <strong>10x10 cm</strong> oder <strong>4x4 Zoll</strong>. Die universelle Referenz aller Strickanleitungen.',
    },
    {
      type: 'card',
      title: 'Blocken / Spannen',
      icon: 'mdi:water',
      html: 'Prozess des Befeuchtens und Formens des Kleidungsstücks, um die Maschen zu setzen. Offenbart die <strong>tatsächliche Spannung</strong>, die das Kleidungsstück nach dem ersten Tragen und Waschen haben wird.',
    },
    {
      type: 'card',
      title: 'Skalierungsfaktor',
      icon: 'mdi:scale',
      html: 'Mathematisches Verhältnis zwischen der Maschenprobe der Anleitung und der tatsächlichen Probe des Strickers. Bestimmt, wie viele Maschen und Reihen angepasst werden müssen, um die <strong>korrekten Maße</strong> beizubehalten.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Original-Maschenprobe',
    sectionMyGauge: 'Ihre aktuelle Probe',
    sectionProject: 'Projektstruktur',
    labelStitches: 'Maschen',
    labelRows: 'Reihen',
    labelWidth: 'Breite',
    labelLength: 'Länge',
    labelUnit: 'Maßeinheit',
    labelNeedle: 'Nadel',
    labelNeedleMm: 'Nadel (mm)',
    labelWeight: 'Gewicht (g)',
    labelWeightOptional: 'optional',
    labelPatternSts: 'Maschen Anleitung',
    labelPatternRows: 'Reihen Anleitung',
    labelMultiples: 'Vielfache',
    labelMultiplesExample: 'Z.B.: 10 + 2',
    labelMultiplesPlaceholder: 'Vielfaches + Rand',
    unitEU: '10 x 10 cm (EU Standard)',
    unitUS: '4 x 4 Zoll (US Standard)',
    btnClear: 'Leeren',
    btnShare: 'Teilen',
    btnCopied: 'Kopiert!',
    resSuggestedSts: 'Empfohlene Maschen zum Anschlagen',
    resNewRows: 'Neue Reihenanzahl',
    resNewRowsTooltip: 'Anzahl der Reihen, die erforderlich sind, um die Länge der Originalanleitung mit Ihrer aktuellen Spannung zu erreichen.',
    resScaleFactor: 'Skalierungsfaktor',
    resScaleFactorTooltip: 'Größenverhältnis zwischen Ihrem Gestrick und der Anleitung. Ein negativer Wert zeigt an, dass Ihr Gestrick dichter ist.',
    resSuggestion: 'Empfehlung',
    resSuggestionTooltip: 'Technische Empfehlung zur Anpassung Ihrer Spannung, ohne jede Masche der Anleitung neu berechnen zu müssen.',
    suggestionIdeal: 'Ideal',
    suggestionDown: 'Nadelstärke verringern',
    suggestionUp: 'Nadelstärke erhöhen',
    suggestionDownDetail: 'Verwenden Sie eine Nadel mit {n} mm oder eine Nummer kleiner.',
    suggestionUpDetail: 'Verwenden Sie eine Nadel mit {n} mm oder eine Nummer größer.',
    multiplesNoteFormat: 'Angepasst auf {n} Maschen (Vielf. {m})',
    yarnTitle: 'Wolleschätzung für das Projekt',
    yarnResultFormat: 'Geschätzte Wolle: <strong>{g} g</strong>',
    yarnSafetyFormat: '(+{s} g Sicherheit)',
    alertDanger: 'Extreme Differenz (>25%). Fall und Struktur des Kleidungsstücks werden beeinträchtigt.',
  },
};
