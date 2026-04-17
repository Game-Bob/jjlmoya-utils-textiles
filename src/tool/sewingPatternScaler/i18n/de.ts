import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'schnittmuster-skalierer';
const title = 'Online Schnittmuster Skalierer für Näharbeiten';
const description = 'Passen Sie jedes Schnittmuster an Ihre realen Maße an. Rechner für differenzielle Skalierung mit Vorschau des aktualisierten Musters.';

const faqData = [
  {
    question: 'Warum wächst die Schulter nicht so stark wie die Brust?',
    answer: 'Der menschliche Körper ist keine Kugel. Während das Volumen des Torsos erheblich variieren kann, sind das Skelett und die Artikulationspunkte wie die Schulter viel statischer. Eine professionelle Gradierung wendet differenzierte Faktoren an, um das Gleichgewicht des Kleidungsstücks nicht zu stören.',
  },
  {
    question: 'Was ist "Bequemlichkeitszugabe" oder "Ease"?',
    answer: 'Es ist der zusätzliche Raum zwischen Ihrem Körper und dem Stoff. Ohne diese Zugabe könnten Sie sich nicht bewegen. Unser Rechner behält diese Zugabe bei, damit das Kleidungsstück so sitzt, wie es der Designer konzipiert hat, aber an Ihre tatsächlichen Konturen angepasst ist.',
  },
  {
    question: 'Kann ich ein Muster für Strickwaren oder Jersey skalieren?',
    answer: 'Ja, aber beachten Sie, dass elastische Stoffe oft eine negative Bequemlichkeitszugabe haben. Wenn das Muster sehr eng anliegt, stellen Sie sicher, dass der Elastizitätsfaktor des neuen Stoffes dem des Originals entspricht.',
  },
];

const howToData = [
  {
    name: 'Muster ausmessen',
    text: 'Messen Sie die wichtigsten horizontalen Linien (Brust, Taille und Hüfte) auf den Papierstücken Ihres Originalmusters von Naht zu Naht.',
  },
  {
    name: 'Ursprung konfigurieren',
    text: 'Geben Sie die Größe des Musters oder die von Ihnen gemessenen Maße in die Spalte "Ursprung" unseres Tools ein.',
  },
  {
    name: 'Ziel eingeben',
    text: 'Geben Sie Ihre realen Maße oder die gewünschte Zielgröße ein. Das Tool berechnet die exakte Differenz pro Zone.',
  },
  {
    name: 'Auf dem Zuschneidetisch anwenden',
    text: 'Folgen Sie den Anweisungen unter "Aktionen am Zuschneidetisch", um Zentimeter an den Seiten und Säumen Ihrer Teile hinzuzufügen oder zu entfernen.',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Literaturhinweise',
  bibliography: [
    {
      name: 'Schnittkonstruktion in der Mode: Grundmengen - Teresa Gilewska',
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
      text: 'Wie man Schnittmuster skaliert: Technischer und praktischer Leitfaden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das <strong>Skalieren von Schnittmustern</strong> ist eine der kritischsten Fähigkeiten in der Welt der Konfektion. Es geht nicht einfach darum, eine Zeichnung proportional zu vergrößern oder zu verkleinern; es geht darum, eine zweidimensionale Struktur an die komplexen Kurven und Proportionen des menschlichen Körpers anzupassen, der nicht linear wächst.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Lokale Berechnungen', icon: 'mdi:calculator' },
        { value: 'Differenziell', label: 'Proportionale Skalierung', icon: 'mdi:resize' },
        { value: '100%', label: 'Sicher und Privat', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Was genau ist Schnittmuster-Skalierung?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skalierung (oder <em>Gradieren</em>) ist der technische Prozess des Vergrößerns oder Verkleinerns eines Basismusters, um eine Reihe verschiedener Größen zu erstellen. Im Gegensatz zu einem einfachen Zoom berücksichtigt das Gradieren, dass bestimmte Körperteile mehr wachsen als andere. Zum Beispiel variiert der Brustumfang zwischen den Größen meist stärker als die Schulterbreite oder die Rumpflänge.',
    },
    {
      type: 'title',
      text: 'Das Geheimnis des Erfolgs: Die Bequemlichkeitszugabe (Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bewegungszugabe:</strong> Die zusätzlichen Zentimeter, die nötig sind, damit Sie atmen, sitzen und Ihre Arme bewegen können, ohne dass der Stoff reißt.',
        '<strong>Designzugabe:</strong> Die Zentimeter, die der Designer hinzugefügt hat, um eine bestimmte Silhouette zu kreieren (z. B. ein Oversize-Mantel oder eine duftige Bluse).',
      ],
    },
    {
      type: 'title',
      text: 'Horizontale vs. Vertikale Skalierung',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Horizontale Achse (Umfänge):</strong> Brust, Taille, Hüfte. Erfordert die meiste Anpassung. Wird für jedes Musterteil in Viertel unterteilt.',
        '<strong>Vertikale Achse (Längen):</strong> Vorderlänge, Rückenlänge, Gesamtlänge. Beeinflusst die Position von Abnähern und der Taillenlinie. Geringere Variation zwischen benachbarten Größen.',
      ],
    },
    {
      type: 'title',
      text: 'Anwendung des Schnittmuster-Skalierers',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Muster ausmessen:</strong> Nehmen Sie das Papierteil und messen Sie von Kante zu Kante an den Linien von Brust, Taille und Hüfte.',
        '<strong>Ursprungsmaße eingeben:</strong> Tragen Sie diese Maße in die linke Spalte ein und geben Sie an, welche Größe dieses Muster repräsentiert.',
        '<strong>Zielmaße oder Zielgröße eingeben:</strong> Tragen Sie in der rechten Spalte Ihre realen Maße oder die gewünschte Zielgröße ein.',
        '<strong>Ergebnisse interpretieren:</strong> Der Rechner zeigt Ihnen an, wie viel Sie in jedem spezifischen Bereich hinzufügen oder wegnehmen müssen.',
      ],
    },
    {
      type: 'tip',
      title: 'Tipp für professionelles Gradieren',
      html: '<p><strong>Skalieren Sie nicht über mehr als zwei oder drei Größen:</strong> Wenn Sie versuchen, von Größe 36 auf 52 zu springen, ist es sehr wahrscheinlich, dass sich das Armloch verformt und der Halsausschnitt viel zu groß wird. In solchen Fällen ist es besser, das Basismuster mit Ihren Maßen von Grund auf neu zu zeichnen.</p>',
    },
    {
      type: 'title',
      text: 'Vorteile der digitalen Skalierung',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Behält die exakten Proportionen des Originaldesigns bei.',
          con: 'Armlöcher erfordern möglicherweise ein leichtes manuelles Glätten.',
        },
        {
          pro: 'Sofortige Berechnung der erforderlichen Bequemlichkeitszugabe.',
          con: 'Erkennt nicht automatisch, ob das Muster bereits Nahtzugaben enthält.',
        },
        {
          pro: 'Grafische Visualisierung des Wachstums des Teils.',
          con: 'Erfordert eine sehr präzise initiale Maßeinnahme.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Differenzial', definition: 'Maßdifferenz zwischen zwei aufeinanderfolgenden Größen.' },
        { term: 'Ankerpunkte', definition: 'Bereiche des Musters, die sich nicht bewegen (normalerweise die vordere/hintere Mitte).' },
        { term: 'Gradiernest', definition: 'Übereinandergelegte Zeichnung aller skalierten Größen.' },
        { term: 'Basisschnitt', definition: 'Vorlage ohne Design oder Zugaben, die den Körpermaßen entspricht.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'ARBEITSSYSTEM',
    modeStandard: 'Standardgrößen',
    modeCustom: 'Reale Maße',
    labelPatternSize: 'Mustergröße',
    labelTargetSize: 'Zielgröße',
    labelOriginMeasures: 'URSPRUNGSMASSE',
    labelTargetMeasures: 'IHRE MASSE',
    labelEase: 'Aktuelle Zugabe (Ease)',
    labelChest: 'Brust',
    labelWaist: 'Taille',
    labelHips: 'Hüfte',
    labelLength: 'Länge',
    resBust: 'Brust',
    resWaist: 'Taille',
    resHips: 'Hüfte',
    resLength: 'Länge',
    actionLatAdd: 'Hinzufügen',
    actionLatRemove: 'Entfernen',
    actionLatSuffix: 'an der Seite des Teils',
    actionLatNote: 'Anpassung pro Viertelmuster',
    actionLenExtend: 'Muster verlängern',
    actionLenShorten: 'Muster kürzen',
    actionLenNote: 'Anpassung an der Saumlinie',
    legendOriginal: 'Original',
    legendUpdated: 'Aktualisiert',
    warnText: 'Skalierung über mehr als 3 Größen. Risiko von Verformungen am Armloch.',
    sizePrefix: 'Größe',
  },
};
