import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'textielvlekken-chemisch-protocol';
const title = 'Chemisch Protocol voor Textielvlekken';
const description =
  'Wetenschappelijke protocollen voor vlekverwijdering op basis van vezeltype en de chemische aard van de vlek. Percarbonaat, enzymen, oplosmiddelen: de juiste methode voor elk geval.';

const faqData = [
  {
    question: 'Kan ik bleekmiddel gebruiken in plaats van percarbonaat?',
    answer:
      'Bleekmiddel (natriumhypochloriet) is zeer corrosief. Het tast de vezels aan, waardoor ze gelig en broos worden. Percarbonaat bleekt met actieve zuurstof en respecteert de natuurlijke moleculaire structuur.',
  },
  {
    question: 'Waarom helpt azijn tegen geurtjes?',
    answer:
      'Lichaamsgeuren zijn meestal alkalisch. Het azijnzuur in azijn neutraliseert ze en zet ze om in geurloze zouten die tijdens het spoelen volledig worden verwijderd.',
  },
  {
    question: 'Moet ik altijd koud water gebruiken voor bloed?',
    answer:
      'Ja. Warmte stolt de eiwitten in het bloed, waardoor de vlek permanent aan de vezel hecht. Koud water houdt de vlek vloeibaar en stelt enzymatische middelen in staat effectief te werken.',
  },
  {
    question: 'Wat gebeurt er als ik aceton op een kledingstuk van acetaat aanbreng?',
    answer:
      'Aceton lost triacetaat en acetaat op. Acetaatvezels zijn cellulose veresterd met azijnzuur en zijn volledig oplosbaar in aceton. Het resultaat is de onherstelbare vernietiging van de stof.',
  },
];

const howToData = [
  {
    name: 'Identificeer het vezeltype',
    text: 'Raadpleeg het label in het kledingstuk om te bepalen of het een natuurlijke vezel, synthetisch of een fijne vezel (wol, zijde, kasjmier) is.',
  },
  {
    name: 'Selecteer de vezel in de tool',
    text: 'Kies het overeenkomstige materiaal in de eerste kiezer.',
  },
  {
    name: 'Selecteer het type vlek',
    text: 'Geef aan of de vlek organisch (wijn, fruit), eiwitrijk (bloed), vet of synthetisch (inkt) is.',
  },
  {
    name: 'Pas het aangegeven protocol toe',
    text: 'Volg de instructies voor middel, temperatuur en methode. Let speciaal op de kritieke veiligheidswaarschuwingen.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Chemisch Vlekkenprotocol',
    fiberLabel: '1. Vezel',
    selectFiberPlaceholder: 'Selecteer stof...',
    stainLabel: '2. Vlek',
    selectStainPlaceholder: 'Wat is er gebeurd?',
    molecularDiagnosis: 'Moleculaire Diagnose',
    requiredAgent: 'Benodigd Middel',
    thermalCondition: 'Thermische Conditie',
    temperature: 'Temperatuur',
    cleaningInstructions: 'Reinigingsinstructies',
    criticalWarning: 'Kritieke Veiligheid',
    criticalWarningLabel: 'LET OP',
    technicalNote: 'Technische noot',
    technicalNoteText:
      'Valideer altijd de kleurvastheid op een onopvallende plek voordat je doorgaat met de volledige chemische behandeling.',
    systemDiagnosis: 'Diagnosesysteem',
    systemDiagnosisDesc:
      'Stel de textielparameters in om de reinigingsroutekaart te ontvangen',
    delicatePercarbonateWarning:
      'RISICO OP MOLECULAIRE DEGRADATIE. Dierlijke vezels zijn zeer gevoelig voor percarbonaat. Test uitvoeren op onopvallende plek.',
    fiberData: {
      cotton: { name: 'Katoen', family: 'natural', isNoble: false },
      linen: { name: 'Linnen', family: 'natural', isNoble: true },
      wool: { name: 'Wol / Merino', family: 'natural', isNoble: true },
      silk: { name: 'Zijde', family: 'natural', isNoble: true },
      cashmere: { name: 'Kasjmier', family: 'natural', isNoble: true },
      mohair: { name: 'Mohair', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpaca', family: 'natural', isNoble: true },
      polyester: { name: 'Polyester', family: 'synthetic', isNoble: false },
      viscose: { name: 'Viscose / Rayon', family: 'artificial', isNoble: false },
      nylon: { name: 'Nylon (Polyamide)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Acryl', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Natriumpercarbonaat',
        description: 'Biologisch afbreekbare zuurstofbleekmiddel. Geeft actieve zuurstof af bij het oplossen.',
        warning: 'Vermijd op eiwitvezels (zijde, wol) in hoge concentraties.',
      },
      isopropyl: {
        name: 'Isopropylalcohol',
        description: 'Effectief oplosmiddel voor pigmenten en lichte vetten.',
        warning: 'Kan de glans op zijde beschadigen en sommige acrylstoffen oplossen als het niet wordt verdund.',
      },
      acetone: {
        name: 'Aceton',
        description: 'Krachtig oplosmiddel voor lakken en lijmen.',
        warning: 'VERBODEN op acetaat en triacetaat (lost de vezel op).',
      },
      enzyme: {
        name: 'Enzymatisch Wasmiddel',
        description: 'Bevat proteasen die biologische vlekken afbreken.',
        warning: 'Gebruik met voorzichtigheid op wol en zijde (dit zijn eiwitten).',
      },
      vinegar: {
        name: 'Witte Azijn',
        description: 'Mild azijnzuur om geuren te neutraliseren en kleuren vast te leggen.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Rode Wijn / Fruit',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Langdurig weken' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Rechtstreekse pasta' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Koud',
            method: 'Spoelen met spuitwater en azijn',
            notes: 'Niet wrijven',
          },
        },
      },
      {
        id: 'blood',
        name: 'Bloed',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Koud',
            method: 'Weken in zout water en daarna enzym',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Koud', method: 'Directe applicatie' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Koud',
            method: 'Onmiddellijk spoelen, hitte vermijden',
          },
        },
      },
      {
        id: 'grease',
        name: 'Vet / Olie',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Oplossen met alcohol en dan wassen',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Absorberend papier eronder leggen',
          },
          delicate: { agentId: 'isopropyl', temperature: 'Koud', method: 'Alcohol verdunnen tot 50%' },
        },
      },
      {
        id: 'ink',
        name: 'Inkt / Marker',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Omgeving',
            method: 'Deppen van buiten naar binnen',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Omgeving',
            method: 'Voorzichtig met verspreiding',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Koud',
            method: 'Verdunnen en testen op verborgen plek',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'De Chemie Achter Textielreiniging',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Niet alle vlekken zijn gelijk, en niet alle vezels reageren hetzelfde op dezelfde chemische middelen. Het verschil tussen het redden van een kledingstuk en het vernietigen ervan ligt in het begrijpen van de moleculaire aard van de vlek en de vezelstructuur.',
    },
    {
      type: 'card',
      title: '01 — Gecontroleerde Oxidatie',
      icon: 'mdi:atom',
      html: '<strong>Natriumpercarbonaat</strong> geeft actieve zuurstof af die de dubbele bindingen van chromoforen (de moleculen die verantwoordelijk zijn voor de kleur van de vlek) breekt, waardoor ze kleurloos en in water oplosbaar worden. Het is de meest effectieve methode voor organische vlekken.',
    },
    {
      type: 'card',
      title: '02 — Oplosbaar maken door Oplosmiddelen',
      icon: 'mdi:flask-outline',
      html: 'Vlekken zoals olie of inkt zijn niet oplosbaar in water. Oplosmiddelen zoals <strong>isopropylalcohol</strong> of <strong>aceton</strong> verlagen de oppervlaktespanning en trekken de niet-polaire moleculen van de vlek aan, waardoor ze kunnen worden overgedragen op een drager.',
    },
    {
      type: 'title',
      text: 'Soevereiniteit over Vezels: Waarom het Type Uitmaakt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Niet alle vezels "eten" hetzelfde. <strong>Zijde en wol</strong> zijn eiwitten (fibroïne en keratine). Als je een enzymatisch wasmiddel aanbrengt dat is ontworpen om "eiwitten te eten" (zoals bloedvlekken of ei) zonder controle, zal het wasmiddel de vezel zelf gaan afbreken, waardoor de glans en de structuur van de stof worden vernietigd.',
    },
    {
      type: 'title',
      text: 'Het Gevaar van Hitte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een van de meest gemaakte fouten is het gebruik van warm water om een bloedvlek "zacht te maken". Chemisch gezien veroorzaakt hitte de <strong>stolling van de eiwitten</strong> van de vlek, waardoor ze permanent aan de poreuze structuur van de vezel worden gefixeerd. Eiwitvlekken moeten altijd met koud water worden behandeld.',
    },
    {
      type: 'tip',
      title: 'Noodprotocol: Rode Wijn',
      html: '<strong>A. Passieve absorptie:</strong> Deppen met absorberend papier, nooit wrijven om mechanische uitbreiding te voorkomen.<br><strong>B. Osmotische neutralisatie:</strong> Bedekken met fijn zout om de vloeistof uit de vezelkern te trekken.<br><strong>C. Chemische actie:</strong> Breng een pasta aan van percarbonaat en water op 40°C als de vezel hittebestendig is.',
    },
    {
      type: 'title',
      text: 'Specifieke Oplosmiddelen en Voorzorgsmaatregelen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Aceton</strong> is een uitzonderlijk oplosmiddel voor nagellak of lijm, maar is destructief voor <strong>acetaat</strong>. Omdat het vezels zijn die afgeleid zijn van cellulose maar chemisch behandeld, lost aceton het weefsel letterlijk op.',
    },
    {
      type: 'paragraph',
      html: '<strong>Isopropylalcohol</strong> is stabieler, maar op geverfde synthetische stoffen kan het het pigment zelf meeslepen. We raden altijd de "zoomtest" aan op een onopvallende plek voor de hoofdbehandeling.',
    },
  ],
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
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
