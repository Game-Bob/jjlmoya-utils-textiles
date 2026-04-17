import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'textilflecken-chemie-protokoll';
const title = 'Chemisches Protokoll zur Entfernung von Textilflecken';
const description =
  'Wissenschaftliche Protokolle zur Fleckentfernung basierend auf Faserart und chemischer Natur des Flecks. Percarbonat, Enzyme, Lösungsmittel: Die richtige Methode für jeden Fall.';

const faqData = [
  {
    question: 'Kann ich Bleichmittel anstelle von Percarbonat verwenden?',
    answer:
      'Bleichmittel (Natriumhypochlorit) ist hochgradig korrosiv. Es baut die Fasern ab, wodurch sie vergilben und brüchig werden. Percarbonat bleicht durch Aktivsauerstoff und schont dabei die natürliche Molekularstruktur.',
  },
  {
    question: 'Warum hilft Essig gegen Gerüche?',
    answer:
      'Körpergerüche sind meist alkalisch. Die Essigsäure im Essig neutralisiert sie und wandelt sie in geruchlose Salze um, die beim Ausspülen vollständig entfernt werden.',
  },
  {
    question: 'Sollte ich bei Blut immer kaltes Wasser verwenden?',
    answer:
      'Ja. Hitze bringt die Blutproteine zum Gerinnen, wodurch sie sich dauerhaft an die Faser binden. Kaltes Wasser hält den Fleck in einem löslichen Zustand und ermöglicht es enzymatischen Wirkstoffen, effektiv zu arbeiten.',
  },
  {
    question: 'Was passiert, wenn ich Aceton auf ein Kleidungsstück aus Acetat auftrage?',
    answer:
      'Aceton löst Triacetat und Acetat auf. Acetatfasern sind mit Essigsäure veresterte Cellulose und in Aceton vollständig löslich. Das Ergebnis wäre die irreversible Zerstörung des Gewebes.',
  },
];

const howToData = [
  {
    name: 'Faserart identifizieren',
    text: 'Überprüfen Sie das Etikett im Kleidungsstück, um festzustellen, ob es sich um Naturfasern, Synthetik oder Edelfasern (Wolle, Seide, Kaschmir) handelt.',
  },
  {
    name: 'Faser im Tool auswählen',
    text: 'Wählen Sie das entsprechende Material im ersten Auswahlmenü.',
  },
  {
    name: 'Fleckentyp auswählen',
    text: 'Geben Sie an, ob der Fleck organisch (Wein, Obst), proteinhaltig (Blut), fettig oder synthetisch (Tinte) ist.',
  },
  {
    name: 'Angegebenes Protokoll anwenden',
    text: 'Folgen Sie den Anweisungen zu Wirkstoff, Temperatur und Methode. Achten Sie besonders auf die kritischen Warnhinweise.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Chemisches Fleckenprotokoll',
    fiberLabel: '1. Faser',
    selectFiberPlaceholder: 'Gewebe auswählen...',
    stainLabel: '2. Fleck',
    selectStainPlaceholder: 'Was ist passiert?',
    molecularDiagnosis: 'Molekulare Diagnose',
    requiredAgent: 'Benötigter Wirkstoff',
    thermalCondition: 'Thermische Bedingung',
    temperature: 'Temperatur',
    cleaningInstructions: 'Reinigungsanweisungen',
    criticalWarning: 'Kritische Vorsicht',
    criticalWarningLabel: 'VORSICHT',
    technicalNote: 'Technischer Hinweis',
    technicalNoteText:
      'Prüfen Sie vor der vollständigen chemischen Behandlung immer die Farbechtheit an einer unauffälligen Stelle.',
    systemDiagnosis: 'Diagnosesystem',
    systemDiagnosisDesc:
      'Konfigurieren Sie die Textilparameter, um den Reinigungsleitfaden zu erhalten',
    delicatePercarbonateWarning:
      'RISIKO DES MOLEKULAREN ABBAUS. Tierische Fasern reagieren hochsensibel auf Percarbonat. Test an unauffälliger Stelle durchführen.',
    fiberData: {
      cotton: { name: 'Baumwolle', family: 'natural', isNoble: false },
      linen: { name: 'Leinen', family: 'natural', isNoble: true },
      wool: { name: 'Wolle / Merino', family: 'natural', isNoble: true },
      silk: { name: 'Seide', family: 'natural', isNoble: true },
      cashmere: { name: 'Kaschmir', family: 'natural', isNoble: true },
      mohair: { name: 'Mohair', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpaka', family: 'natural', isNoble: true },
      polyester: { name: 'Polyester', family: 'synthetic', isNoble: false },
      viscose: { name: 'Viskose / Rayon', family: 'artificial', isNoble: false },
      nylon: { name: 'Nylon (Polyamid)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Acryl', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Natriumpercarbonat',
        description: 'Biologisch abbaubares Sauerstoffbleichmittel. Setzt beim Auflösen Aktivsauerstoff frei.',
        warning: 'Bei Proteinfasern (Seide, Wolle) hohe Konzentrationen vermeiden.',
      },
      isopropyl: {
        name: 'Isopropylalkohol',
        description: 'Effektives Lösungsmittel für Pigmente und leichte Fette.',
        warning: 'Kann bei Seide den Glanz beeinträchtigen und einige Kunststoffe lösen, wenn nicht verdünnt.',
      },
      acetone: {
        name: 'Aceton',
        description: 'Starkes Lösungsmittel für Lacke und Klebstoffe.',
        warning: 'VERBOTEN bei Acetat und Triacetat (löst die Faser auf).',
      },
      enzyme: {
        name: 'Enzymatisches Waschmittel',
        description: 'Enthält Proteasen, die biologische Flecken aufspalten.',
        warning: 'Mit Vorsicht bei Wolle und Seide verwenden (diese bestehen aus Protein).',
      },
      vinegar: {
        name: 'Weißer Essig',
        description: 'Milde Essigsäure zur Neutralisierung von Gerüchen und Fixierung von Farben.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Rotwein / Obst',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Langes Einweichen' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Direktes Auftragen als Paste' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Kalt',
            method: 'Spülen mit Sprudelwasser und Essig',
            notes: 'Nicht reiben',
          },
        },
      },
      {
        id: 'blood',
        name: 'Blut',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Kalt',
            method: 'Einweichen in Salzwasser, dann Enzymreiniger',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Kalt', method: 'Direktes Auftragen' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Kalt',
            method: 'Sofortiges Ausspülen, Hitze vermeiden',
          },
        },
      },
      {
        id: 'grease',
        name: 'Fett / Öl',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Mit Alkohol lösen, dann waschen',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Saugfähiges Papier unterlegen',
          },
          delicate: { agentId: 'isopropyl', temperature: 'Kalt', method: 'Alkohol zu 50% verdünnen' },
        },
      },
      {
        id: 'ink',
        name: 'Tinte / Marker',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Raumtemp.',
            method: 'Von außen nach innen abtupfen',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Raumtemp.',
            method: 'Vorsicht vor Ausbreitung',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Kalt',
            method: 'Verdünnen und an verdeckter Stelle testen',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Die Chemie hinter der Textilreinigung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nicht alle Flecken sind gleich, und nicht alle Fasern reagieren gleich auf dieselben chemischen Wirkstoffe. Der Unterschied zwischen der Rettung eines Kleidungsstücks und seiner Zerstörung liegt im Verständnis der molekularen Natur des Flecks und der Faserstruktur.',
    },
    {
      type: 'card',
      title: '01 — Kontrollierte Oxidation',
      icon: 'mdi:atom',
      html: '<strong>Natriumpercarbonat</strong> setzt Aktivsauerstoff frei, der die Doppelbindungen der Chromophore (die Moleküle, die für die Farbe des Flecks verantwortlich sind) aufbricht, wodurch sie farblos und wasserlöslich werden. Es ist die effektivste Methode für organische Flecken.',
    },
    {
      type: 'card',
      title: '02 — Lösung durch Lösungsmittel',
      icon: 'mdi:flask-outline',
      html: 'Flecken wie Öl oder Tinte sind nicht wasserlöslich. Lösungsmittel wie <strong>Isopropylalkohol</strong> oder <strong>Aceton</strong> verringern die Oberflächenspannung und ziehen die unpolaren Moleküle des Flecks an, sodass sie auf ein Trägermedium übertragen werden können.',
    },
    {
      type: 'title',
      text: 'Faserhoheit: Warum die Faserart entscheidend ist',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nicht alle Fasern "verdauen" gleich. <strong>Seide und Wolle</strong> bestehen aus Proteinen (Fibroin und Keratin). Wenn Sie ein enzymatisches Waschmittel verwenden, das darauf ausgelegt ist, Proteine abzubauen (wie bei Blut oder Ei), wird das Waschmittel unkontrolliert anfangen, die Faser selbst anzugreifen und Glanz sowie Struktur des Gewebes zu zerstören.',
    },
    {
      type: 'title',
      text: 'Die Gefahr der Hitze',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Einer der häufigsten Fehler ist die Verwendung von heißem Wasser, um einen Blutfleck "aufzuweichen". Chemisch gesehen führt Hitze zur <strong>Koagulation der Proteine</strong> im Fleck, wodurch sie sich dauerhaft in der porösen Struktur der Faser festsetzen. Proteinflecken müssen immer mit kaltem Wasser behandelt werden.',
    },
    {
      type: 'tip',
      title: 'Notfallprotokoll: Rotwein',
      html: '<strong>A. Passive Absorption:</strong> Mit saugfähigem Papier abtupfen, niemals reiben, um mechanische Ausbreitung zu verhindern.<br><strong>B. Osmotische Neutralisierung:</strong> Mit feinem Salz bedecken, um die Flüssigkeit aus dem Faserkern zu ziehen.<br><strong>C. Chemische Aktion:</strong> Eine Paste aus Percarbonat und Wasser bei 40°C auftragen, wenn die Faser hitzebeständig ist.',
    },
    {
      type: 'title',
      text: 'Spezifische Lösungsmittel und Vorsichtsmaßnahmen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Aceton</strong> ist ein hervorragendes Lösungsmittel für Nagellack oder Klebstoff, aber zerstörerisch für <strong>Acetat</strong>. Da es sich um aus Cellulose gewonnene, aber chemisch behandelte Fasern handelt, löst Aceton das Gewebe buchstäblich auf.',
    },
    {
      type: 'paragraph',
      html: '<strong>Isopropylalkohol</strong> ist stabiler, kann aber bei gefärbten Synthetikfasern die Pigmente mitreißen. Wir empfehlen vor der Hauptbehandlung immer den "Saum-Test" an einer unauffälligen Stelle.',
    },
  ],
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Literaturhinweise',
  bibliography: [
    {
      name: 'AATCC - Association for Advancing Color Technology and Chemistry',
      url: 'https://www.aatcc.org',
    },
    {
      name: 'Kissa, E. — Textile Auxiliaries',
      url: 'https://www.springer.com/gp/book/9783642057328',
    },
    {
      name: 'ISO 105 — Textiles: Tests for Colour Fastness',
      url: 'https://www.iso.org/standard/72682.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
