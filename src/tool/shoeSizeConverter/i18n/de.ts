import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'schuhgroessen-umrechner';
const title = 'Schuhgrößen Umrechner';
const description = 'Konvertieren Sie Schuhgrößen zwischen den Systemen der USA (US), Europas (EU), Großbritanniens (UK) und Zentimetern (CM). Leitfaden für Herren- und Damenschuhe.';

const faqData = [
  {
    question: 'Wie finde ich meine US-Schuhgröße heraus?',
    answer: 'Bei Herren ist die US-Größe in der Regel eine Einheit höher als die UK-Größe. Bei Damen ist die Skala anders. Am genauesten ist es, den Fuß in Zentimetern zu messen und unseren Umrechner zu verwenden, um die exakte US-Nummer zu erhalten.',
  },
  {
    question: 'Was ist der Unterschied zwischen UK- und US-Schuhgrößen?',
    answer: 'Obwohl beide das imperiale System verwenden, unterscheiden sich ihre Ausgangspunkte. Im Allgemeinen entspricht eine UK-Größe 8 einer US-Größe 9 bei Herrenschuhen.',
  },
  {
    question: 'Wie messe ich meinen Fuß für die CM-Größe?',
    answer: 'Stellen Sie die Ferse gegen eine Wand, markieren Sie das Ende Ihres längsten Zehs und messen Sie den Abstand. Dieses Maß in Zentimetern (CM) ist am zuverlässigsten für den Kauf von Schuhen internationaler Marken.',
  },
];

const howToData = [
  {
    name: 'Geschlecht wählen',
    text: 'Wählen Sie aus, ob Sie Größen für Herren oder Damen suchen, da die Skalen variieren.',
  },
  {
    name: 'Region wählen',
    text: 'Geben Sie das Größensystem an, das Sie kennen (EU, US, UK oder CM).',
  },
  {
    name: 'Nummer wählen',
    text: 'Nutzen Sie den Wähler oder klicken Sie direkt in das Raster der europäischen Größen.',
  },
  {
    name: 'Entsprechungen sehen',
    text: 'Erhalten Sie sofort die entsprechende Nummer in den anderen Regionen der Welt.',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Literaturhinweise',
  bibliography: [
    { name: 'Schuhgröße - Wikipedia', url: 'https://de.wikipedia.org/wiki/Schuhgröße' },
    { name: 'ISO 9407: Shoe sizes - Mondopoint system', url: 'https://www.iso.org/standard/17157.html' },
    { name: 'Shoe size conversion - Zappos', url: 'https://www.zappos.com/c/shoe-size-conversion' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Schuhgrößen-Umrechner: Vollständiger internationaler Leitfaden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Kauf von Schuhen in internationalen Geschäften kann eine logistische Herausforderung sein. Der <strong>Schuhgrößen-Umrechner</strong> ist ein unverzichtbares Werkzeug, um unnötige Rücksendungen zu vermeiden und sicherzustellen, dass jeder Kauf, sei es bei Amazon, AliExpress oder in einem spezialisierten Sportgeschäft, ein Erfolg ist.',
    },
    {
      type: 'title',
      text: 'Wie funktionieren die Schuhgrößen-Entsprechungen?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Welt der Schuhe ist nicht vereinheitlicht. Historisch gesehen hat jede Region ihr eigenes System entwickelt, das auf lokalen Maßeinheiten wie Zoll oder dem "Pariser Stich" basiert.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU-Größen (Europa):</strong> Basieren auf dem "Pariser Stich", der 2/3 Zentimeter entspricht. Es ist das gängigste System in Deutschland.</span>',
        '<span><strong>US-Größen (USA):</strong> Verwenden Zoll mit unterschiedlichen Ausgangspunkten für Herren und Damen.</span>',
        '<span><strong>UK-Größen (Großbritannien):</strong> Ebenfalls im imperialen System, aber mit Skalen, die eine Einheit niedriger sind als die der USA.</span>',
        '<span><strong>CM-Größe / Mondopoint:</strong> Die präziseste Angabe. Verwendet direkt die Fußlänge in Zentimetern.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Leitfaden zum Messen Ihres Fußes für die exakte Größe',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bevor Sie den Umrechner verwenden, ist es wichtig, das tatsächliche Maß Ihres Fußes zu kennen. Bei Schuhen ist das grundlegende Maß die Länge des Fußes von der Ferse bis zum längsten Zeh.',
    },
    {
      type: 'tip',
      title: 'Profi Tipp',
      html: 'Messen Sie Ihre Füße am Ende des Tages. Füße neigen dazu, durch Aktivität und Wärme anzuschwellen, sodass ein morgendliches Maß zu Schuhen führen könnte, die am Nachmittag drücken.',
    },
    {
      type: 'title',
      text: 'Warum Größen zwischen verschiedenen Marken variieren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Warum haben Sie bei Nike eine 42, aber bei Adidas eine 41 1/3? Marken verwenden ihre eigenen Leisten. Einige Sportmarken schneiden tendenziell klein aus, was dazu führt, dass man eine halbe Nummer größer als üblich kaufen muss.',
    },
  ],
  ui: {
    genderMenTitle: 'Herrenschuhe',
    genderWomenTitle: 'Damenschuhe',
    regionLabel: 'Ihr Größensystem',
    regionEU: 'Europa (EU)',
    regionUS: 'USA (US)',
    regionUK: 'Großbritannien (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Größe wählen',
    gridDesc: 'Klicken, um internationale Entsprechungen zu sehen',
    labelEU: 'Europa (EU)',
    labelUS: 'USA (US)',
    labelUK: 'Großbritannien (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: 'Die <strong>CM-Größe</strong> repräsentiert die physische Länge des Fußes. Es ist die zuverlässigste Methode für den Kauf von Schuhen internationaler Marken.',
    menData: [
      { EU: '39', US: '6.5', UK: '6', CM: '24.5' },
      { EU: '40', US: '7.5', UK: '7', CM: '25.0' },
      { EU: '40.5', US: '8', UK: '7.5', CM: '25.5' },
      { EU: '41', US: '8.5', UK: '8', CM: '26.0' },
      { EU: '42', US: '9', UK: '8.5', CM: '26.5' },
      { EU: '42.5', US: '9.5', UK: '9', CM: '27.0' },
      { EU: '43', US: '10', UK: '9.5', CM: '27.5' },
      { EU: '44', US: '10.5', UK: '10', CM: '28.0' },
      { EU: '44.5', US: '11', UK: '10.5', CM: '28.5' },
      { EU: '45', US: '11.5', UK: '11', CM: '29.0' },
      { EU: '46', US: '12', UK: '11.5', CM: '30.0' },
    ],
    womenData: [
      { EU: '35', US: '5', UK: '3', CM: '22.0' },
      { EU: '36', US: '6', UK: '4', CM: '22.5' },
      { EU: '37', US: '6.5', UK: '4.5', CM: '23.5' },
      { EU: '37.5', US: '7', UK: '5', CM: '23.8' },
      { EU: '38', US: '7.5', UK: '5.5', CM: '24.0' },
      { EU: '38.5', US: '8', UK: '6', CM: '24.5' },
      { EU: '39', US: '8.5', UK: '6.5', CM: '25.0' },
      { EU: '40', US: '9', UK: '7', CM: '25.5' },
      { EU: '41', US: '10', UK: '8', CM: '26.5' },
      { EU: '42', US: '11', UK: '9', CM: '27.0' },
    ],
  },
};
