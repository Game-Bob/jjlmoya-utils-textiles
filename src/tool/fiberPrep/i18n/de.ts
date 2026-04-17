import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'faservorbereitung-pigmentierung';
const title = 'Faservorbereitung für die Pigmentierung';
const description =
  'WOF-Rechner, Beizprotokolle und thermische Rampen zur Vorbereitung von Wolle, Seide und Baumwolle vor dem natürlichen Färben.';

const faqData = [
  {
    question: 'Was ist WOF (Weight of Fiber)?',
    answer:
      'WOF ist das Standardsystem zur Berechnung der Menge an benötigtem Pigment oder Beizmittel. Es basiert auf dem Trockengewicht der Faser. Zum Beispiel bedeutet 100% WOF Zwiebelschalen für 100g Wolle, dass Sie 100g Zwiebelschalen benötigen.',
  },
  {
    question: 'Warum ist das Beizen notwendig?',
    answer:
      'Das Beizmittel (wie Alaun) fungiert als chemische Brücke zwischen der Textilfaser und dem natürlichen Pigment. Ohne dieses würden die meisten Farbstoffe nicht fixiert und beim ersten Waschen ausgewaschen werden (geringe Licht- und Reibechtheit).',
  },
  {
    question: 'Was ist der Unterschied zwischen der Vorbereitung von tierischen und pflanzlichen Fasern?',
    answer:
      'Tierische Fasern (Proteinfasern wie Wolle) nehmen Alaun allein sehr gut an. Pflanzliche Fasern (Zellulosefasern wie Baumwolle oder Leinen) erfordern einen vorherigen Schritt mit Tanninen, um die Faser "auszutricksen", damit sie das metallische Beizmittel annimmt.',
  },
  {
    question: 'Was ist die thermische Rampe beim Färben?',
    answer:
      'Es handelt sich um den schrittweisen Temperaturanstieg (ca. 1-2°C pro Minute) des Färbebads. Dies ist entscheidend, um einen Thermoschock zu vermeiden, insbesondere bei Wolle, die verfilzen kann, wenn sich die Temperatur zu abrupt ändert.',
  },
];

const howToData = [
  {
    name: 'Reinigung und Abkochen',
    text: 'Waschen Sie die Faser mit einem neutralen Reinigungsmittel, um Öle, Wachse oder industrielle Stärken zu entfernen, die das gleichmäßige Eindringen der Beize verhindern.',
  },
  {
    name: 'Wiegen der trockenen Faser',
    text: 'Ermitteln Sie das genaue Gewicht des trockenen Materials. Dieser Wert ist die Basis für alle WOF-Berechnungen (Weight of Fiber).',
  },
  {
    name: 'Berechnung und Beizbad',
    text: 'Lösen Sie das Beizmittel (z.B. Kaliumalaun mit 15% WOF) in heißem Wasser auf und tauchen Sie die Faser ein, wobei die Temperatur gemäß Protokoll konstant gehalten wird.',
  },
  {
    name: 'Reifung und Spülen',
    text: 'Lassen Sie die gebeizte Faser ruhen (vorzugsweise 24 Stunden), damit sich das Metall tief fixieren kann, bevor Sie zum eigentlichen Färbebad übergehen.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Artista Textil y Tintes Naturales',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Die Wissenschaft hinter dem Beizen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Vorbereitung einer Faser für das Färben ist mehr als nur Waschen. Es ist ein chemischer Ingenieursprozess auf molekularer Ebene, der als Beizen bezeichnet wird. Das Wort stammt vom lateinischen <i>mordere</i> (beißen), und seine Funktion besteht darin, als chemische Brücke zwischen der Faser und dem Pigment zu fungieren. Ohne diese Brücke würden die meisten natürlichen Farbstoffe einfach beim ersten Spülen ausgewaschen werden.',
    },
    {
      type: 'card',
      title: 'Schlüsselkonzept',
      icon: 'mdi:molecule',
      html: 'Die Beize verfügt über freie Valenzen, die sich gleichzeitig an die Polymere der Faser und an den Farbstoff binden.',
    },
    {
      type: 'title',
      text: 'Differenzierung der Fasern',
      level: 2,
    },
    {
      type: 'card',
      title: 'Proteinfasern: Wolle und Seide',
      icon: 'mdi:sheep',
      html: 'Diese Fasern bestehen aus Aminosäureketten mit einer sehr hohen natürlichen Affinität zu Metallen. Die Wärme öffnet die Schuppenschicht, sodass Alaunsalze tief eindringen können. Die Verwendung von <strong>Weinstein</strong> ist entscheidend, um den sauren pH-Wert aufrechterhalten, der die Weichheit bewahrt.',
    },
    {
      type: 'card',
      title: 'Zellulosefasern: Baumwolle und Leinen',
      icon: 'mdi:leaf',
      html: 'Zellulose hat keine leicht verfügbaren Bindungsstellen. Daher verwenden wir das <strong>Zweistufenprotokoll</strong>: Zuerst binden sich Tannine an die Zellulose, dann bindet sich das Alaun an diese Tannine. Ohne diese Vorbehandlung wird die Farbe blass und wenig beständig ausfallen.',
    },
    {
      type: 'title',
      text: 'Die Kontrolle des Bades: WOF, Temperatur und pH-Wert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um professionelle und wiederholbare Ergebnisse zu erzielen, ist das Konzept des <strong>WOF (Weight of Fabric)</strong> das Gesetz. Alles wird als Prozentsatz des Trockengewichts der Faser gemessen. Ein Übermaß an Beizmittel kann die Faser sättigen und sie rau hinterlassen oder metallische Ablagerungen bilden, die die endgültige Farbe verändern.',
    },
    {
      type: 'tip',
      title: 'Die thermische Rampe',
      html: 'Wärme wirkt als Katalysator und beschleunigt die chemische Reaktion. Ein abrupter Temperaturwechsel bei Wolle kann jedoch dazu führen, dass sich die Schuppen dauerhaft ineinander verhaken, was zu einem verfilzten und geschrumpften Gewebe führt.',
    },
    {
      type: 'tip',
      title: 'Der pH Faktor',
      html: 'Viele natürliche Farbstoffe sind lebendige pH-Indikatoren. Der pH-Wert beeinflusst die Löslichkeit der Salze und den Erhalt der Faser. Seide kann ihren Glanz verlieren, wenn das Bad zu alkalisch ist. Die Einstellung des pH-Werts mit Zitronensäure oder Calciumcarbonat ist von grundlegender Bedeutung.',
    },
    {
      type: 'title',
      text: 'Substanzen und Sicherheit',
      level: 2,
    },
    {
      type: 'card',
      title: 'Kaliumalaun',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Universalbeize, farblos und hochwirksam. Die Referenz für Proteinfasern.',
    },
    {
      type: 'card',
      title: 'Weinstein (Cremor Tartari)',
      icon: 'mdi:spoon-sugar',
      html: 'Hilfsmittel, das die Fixierung und Weichheit in tierischen Fasern verbessert. Hält den pH-Wert im sauren Bereich.',
    },
    {
      type: 'tip',
      title: 'Sicherheitsprotokoll',
      html: 'Verwenden Sie Töpfe ausschließlich zum Färben, niemals für Lebensmittel.<br>Verwenden Sie Handschuhe und eine Maske beim Umgang mit Beizmitteln in Pulverform.<br>Sorgen Sie für ständige Belüftung, um die Ansammlung von Dämpfen zu vermeiden.',
    },
  ],
  ui: {
    profileTitle: 'Profilauswahl',
    profileDesc: 'Das chemische Protokoll unterteilt sich nach dem molekularen Ursprung der Faser',
    proteinTitle: 'Proteinfasern',
    proteinOrigin: 'Tierischer Ursprung',
    proteinDesc: 'Wolle, Seide, Alpaka, Mohair oder Kaschmir. Erfordern kontrollierte Temperaturen und sauren pH-Wert.',
    cellulosicTitle: 'Zellulosefasern',
    cellulosicOrigin: 'Pflanzlicher Ursprung',
    cellulosicDesc: 'Baumwolle, Leinen, Hanf oder Jute. Erfordern Vorbeizen mit Tanninen zur Fixierung des Pigments.',
    wofTitle: 'WOF-Rechner',
    weightLabel: 'Trockengewicht des Kleidungsstücks (g)',
    weightUnit: 'g',
    wofEmptyMsg: 'Wählen Sie ein Profil aus, um Berechnungen zu aktivieren',
    alumLabel: 'Alaun',
    cremLabel: 'Weinstein',
    ironLabel: 'Eisen (Vorsicht)',
    rampTitle: 'Thermische Rampe',
    rampEmptyTitle: 'Warten auf Auswahl',
    rampEmptyDesc: 'Wählen Sie eine Faser aus, um den thermischen Zyklus zu sehen',
    phTitle: 'pH-Stabilisator',
    phDesc: 'Kritischer Faktor für die Farbsättigung',
    phVolumeLabel: 'Badvolumen (L)',
    phSliderLabel: 'Aktueller pH-Wert',
    phAcidLabel: 'Sauer (1)',
    phAlkalineLabel: 'Alkalisch (14)',
    phEmptyMsg: 'Wählen Sie ein Profil aus, um den Stabilisator zu aktivieren',
    phStrings: {
      optimal: 'Optimaler pH-Wert',
      raisePrefix: 'Calciumcarbonat oder Soda Ash hinzufügen. Ca.',
      raiseSuffix: 'g zum Erhöhen auf',
      lowerPrefix: 'Zitronensäure oder Essig hinzufügen. Ca.',
      lowerSuffix: 'ml zum Senken auf',
    },
    proteinFibers: [
      { id: 'wool', name: 'Wolle / Merino', icon: 'mdi:sheep' },
      { id: 'silk', name: 'Seide', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Kaschmir', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Mohair', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaka', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Baumwolle', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Leinen', icon: 'mdi:leaf' },
    ],
  },
};
