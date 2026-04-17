import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'stoffverbrauchsrechner-projekt';
const title = 'Stoffverbrauchsrechner pro Kleidungsstück';
const description =
  'Berechnen Sie ganz einfach, wie viel Stoff Sie zum Nähen eines Rocks, einer Hose, eines Kleides oder eines Hemdes benötigen. Anpassbar nach Stoffbreite und Größe für einen professionellen Zuschnitt.';

const faqData = [
  {
    question: 'Wie viel Stoff benötige ich für einen Rock?',
    answer:
      'Das hängt von der Stoffbreite ab. Für einen geraden Rock bei einer Stoffbreite von 140-150 cm reichen in der Regel 1,20 Meter aus. Bei einer Breite von 90-110 cm benötigen Sie 2,00 Meter.',
  },
  {
    question: 'Wie beeinflusst die Stoffbreite den Verbrauch?',
    answer:
      'Bei geringerer Breite passen die Schnittmusterteile nicht nebeneinander (parallel), sodass sich der Verbrauch oft verdoppelt, da sie untereinander platziert werden müssen.',
  },
  {
    question: 'Ist es besser, mehr Stoff zu kaufen?',
    answer:
      'Ja, es wird eine Zugabe von 10% (ca. 20 cm) empfohlen, um Einlaufen, Webfehler oder unerwartete Nahtzugaben auszugleichen.',
  },
  {
    question: 'Was ist der Fadenlauf und wie beeinflusst er das Nähen?',
    answer:
      'Der Fadenlauf verläuft parallel zur Webkante des Stoffes. Schnittmuster müssen an diesem Faden ausgerichtet werden, damit sich das Kleidungsstück beim Tragen nicht verzieht.',
  },
];

const howToData = [
  {
    name: 'Kleidungsstück auswählen',
    text: 'Wählen Sie das Modell aus, das Sie anfertigen möchten (Rock, Hose usw.), um die entsprechende Verbrauchtabelle zu laden.',
  },
  {
    name: 'Stoffbreite eingeben',
    text: 'Messen Sie die Breite des Stoffes von Webkante zu Webkante (90, 115, 140 oder 150 cm).',
  },
  {
    name: 'Größe auswählen',
    text: 'Passen Sie das Volumen des Kleidungsstücks an die Größe an (XS-S, M-L, XL-XXL), um den Multiplikationsfaktor neu zu berechnen.',
  },
  {
    name: 'Gesamtmeter erhalten',
    text: 'Überprüfen Sie das Endergebnis mit und ohne Nahtzugabe, um genau zu wissen, wie viel Sie im Laden bestellen müssen.',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'Fabric Estimation Guide - Threads Magazine',
      url: 'https://www.threadsmagazine.com/forum/measuring-fabric',
    },
    {
      name: 'How much fabric do I need? - Seamwork',
      url: 'https://www.seamwork.com/sewing-tutorials/the-anatomy-of-a-sewing-pattern',
    },
    {
      name: 'Standard Fabric Consumption Charts - Textile School',
      url: 'https://www.textileschool.com/209/fabric-consumption-in-garment-making/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Stoffmengenrechner für die Schneiderei: Verbrauchsleitfaden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine der häufigsten Fragen im Nähatelier ist die Bestimmung der Stoffmenge für ein bestimmtes Projekt. Der Stoffverbrauch hängt radikal von drei Faktoren ab: dem Modell des Kleidungsstücks, der Größe der Person und vor allem der Breite des Stoffstücks (die in der Regel zwischen 90 cm und 150 cm liegt). Dieser technische Rechner systematisiert die Berechnung, damit Sie weder zu viel kaufen noch mitten im Zuschnitt zu wenig haben.',
    },
    {
      type: 'title',
      text: 'Wie viel Stoff benötige ich für ein Kleid oder eine Hose?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die traditionelle Berechnung basiert auf der Länge des Kleidungsstücks plus der Ärmellänge, zuzüglich einer Zugabe für Belege und Saum. Wenn der Stoff jedoch schmal ist (90-110 cm), passen die Teile oft nicht nebeneinander, was den Kauf der doppelten Länge erforderlich macht. Unser Tool berücksichtigt diese Variationen automatisch nach dem Standard der Textilindustrie.',
    },
    {
      type: 'title',
      text: 'Geschätzter Verbrauch nach Stoffbreite (Größe M-L)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Gerader Rock:</strong> 2,00 m bei 90 cm Breite · 1,20 m bei 140/150 cm Breite.',
        '<strong>Lange Hose:</strong> 2,50 m bei 90 cm Breite · 1,50 m bei 140/150 cm Breite.',
        '<strong>Langarmhemd:</strong> 2,20 m bei 90 cm Breite · 1,40 m bei 140/150 cm Breite.',
        '<strong>Einfaches Kleid:</strong> 3,50 m bei 90 cm Breite · 2,20 m bei 140/150 cm Breite.',
      ],
    },
    {
      type: 'title',
      text: 'Faktoren, die den Stoffverbrauch verändern',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Musterrichtung (Rapport):</strong> Wenn der Stoff ein Muster mit einer klaren Richtung oder Karos hat, die zusammenpassen müssen, benötigen Sie zwischen 15% und 20% zusätzlich Material.',
        '<strong>Fadenlauf (Schrägschnitt):</strong> Schräg- oder Kreisschnitte (wie Tellerröcke) verbrauchen aufgrund des Verschnitts in den Winkeln deutlich mehr Stoff.',
        '<strong>Strichrichtung (Strich):</strong> Bei Stoffen wie Samt oder Cord müssen alle Teile in dieselbe Richtung zugeschnitten werden, was die Platzoptimierung einschränkt.',
        '<strong>Einlaufen:</strong> Viele Naturstoffe (Baumwolle, Leinen, Wolle) laufen nach der ersten Wäsche ein. Es ist wichtig, den Stoff vor dem Zuschneiden vorzuwaschen.',
      ],
    },
    {
      type: 'tip',
      title: 'Tipp des Schneiders',
      html: '<p>Wenn Sie einen Stoff mit einem großen Muster oder Karos (Plaids) verwenden, verlassen Sie sich nicht nur auf das Standardmaß. Addieren Sie immer eine vollständige Musterwiederholung (den Rapport) zu der berechneten Gesamtmeterzahl, um sicherzustellen, dass die Muster an den Seitennähten übereinstimmen.</p>',
    },
    {
      type: 'title',
      text: 'Vorteile und Grenzen dieses Rechners',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sofortige Berechnung für verschiedene Stoffbreiten mit Größenanpassung.',
        'Inklusive anpassbarer Schätzung der Nahtzugabe.',
        'Visuelle Anleitung zur Anordnung der Teile auf dem Stoff.',
        'Ersetzt keinen realen Schnittplan. Plus-Größen können zusätzliche manuelle Anpassungen erfordern.',
      ],
    },
    {
      type: 'card',
      title: 'Stoffbreite',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'Das Querschnittsmaß des Stoffes von <strong>Webkante zu Webkante</strong>. Bestimmt, ob die Teile nebeneinander passen oder nacheinander platziert werden müssen.',
    },
    {
      type: 'card',
      title: 'Nahtzugabe',
      icon: 'mdi:tape-measure',
      html: 'Der Abstand zwischen der Kante des Schnittmusters und der <strong>endgültigen Nahtlinie</strong>. Ein Standardwert für Kleidung ist 1,5 cm.',
    },
    {
      type: 'card',
      title: 'Webkante',
      icon: 'mdi:content-cut',
      html: 'Die verstärkten Seitenränder des Stoffes, die <strong>nicht ausfransen</strong>. Sie geben den Fadenlauf an und dienen als Referenz für den Zuschnitt.',
    },
  ],
  ui: {
    sectionProject: 'Projekt',
    sectionMaterial: 'Material',
    labelGarmentType: 'Kleidungsstück',
    labelSize: 'Größe',
    labelFabricWidth: 'Stoffbreite (cm)',
    labelSeamAllowance: 'Nahtzugabe (cm)',
    garmentSkirt: 'Rock (Gerade/A-Linie)',
    garmentPants: 'Hose',
    garmentDress: 'Kleid',
    garmentShirt: 'Hemd / Bluse',
    garmentCoat: 'Mantel / Jacke',
    garmentTote: 'Einkaufstasche (Tote Bag)',
    garmentMerceria: {
      skirt: '1 Reißverschl. 20cm, 1 Knopf',
      pants: '1 Reißverschl. 20cm, 1 Knopf, 30cm Einlage',
      dress: '1 Reißverschl. 60cm, 50cm Einlage',
      shirt: '7 Knöpfe, 1m feine Einlage',
      coat: '3 große Knöpfe, 1,5m Einlage, Futter',
      tote: '2m Gurtband für Griffe',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Schmal)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (EU Standard)',
    width150: '150 cm (Polsterung)',
    btnClear: 'Leeren',
    btnShare: 'Teilen',
    btnCopied: 'Kopiert!',
    btnCopyList: 'Liste kopieren',
    resultLabel: 'Sie benötigen:',
    resultUnit: 'Meter',
    shopAdviceFormat: 'Bestellen Sie {m}m im Laden',
    boardEmpty: 'Wählen Sie ein Projekt aus, um den Plan zu sehen',
    boardDescFormat: 'Breite: {w}cm | Länge: {m}m',
    merchTitle: 'Kurzwaren und Materialien',
    checklistThread: 'Passendes Garn',
    warningSerialFormat: 'Bei Stoffen von {w}cm passen die Teile in Ihrer Größe nicht nebeneinander. Verbrauch für seriellen Zuschnitt angepasst.',
    foldLabel: '⊟ Stoffbruch',
    pieceNames: {
      front: 'Vorderteil',
      back: 'Rückenteil',
      waistband: 'Bund',
      waistbelt: 'Taillengürtel',
      sleeve: 'Ärmel',
      collar: 'Kragen',
      cuffs: 'Manschetten',
      facings: 'Belege',
      lapels: 'Revers/Besatz',
      pocket: 'Tasche',
      body: 'Körper',
      handleA: 'Henkel A',
      handleB: 'Henkel B',
    },
  },
};
