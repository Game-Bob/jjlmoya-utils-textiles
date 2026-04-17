import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'protocollo-chimico-macchie-tessili';
const title = 'Protocollo Chimico di Rimozione Macchie Tessili';
const description =
  'Protocolli scientifici per eliminare le macchie in base al tipo di fibra e alla natura chimica della macchia. Percarbonato, enzimi, solventi: il metodo corretto per ogni caso.';

const faqData = [
  {
    question: 'Posso usare la candeggina al posto del percarbonato?',
    answer:
      "La candeggina (ipoclorito di sodio) è altamente corrosiva. Degrada le fibre rendendole ingiallite e fragili. Il percarbonato sbianca tramite l'ossigeno attivo, rispettando la struttura molecolare naturale.",
  },
  {
    question: "Perché l'aceto aiuta con gli odori?",
    answer:
      "Gli odori corporei sono solitamente alcalini. L'acido acetico dell'aceto li neutralizza, trasformandoli in sali inodori che vengono eliminati completamente durante il risciacquo.",
  },
  {
    question: "Devo sempre usare acqua fredda per il sangue?",
    answer:
      "Sì. Il calore coagula le proteine del sangue, fissandolo alla fibra in modo permanente. L'acqua fredda mantiene la macchia in uno stato solubile e permette agli agenti enzimatici di agire efficacemente.",
  },
  {
    question: 'Cosa succede se applico acetone su un capo in acetato?',
    answer:
      "L'acetone scioglie il triacetato e l'acetato. Le fibre di acetato sono cellulosa esterificata con acido acetico e sono completamente solubili in acetone. Il risultato sarebbe la distruzione irreversibile del tessuto.",
  },
];

const howToData = [
  {
    name: 'Identificare il tipo di fibra',
    text: "Consulta l'etichetta interna del capo per sapere se si tratta di fibra naturale, sintetica o nobile (lana, seta, cashmere).",
  },
  {
    name: 'Selezionare la fibra nello strumento',
    text: 'Scegli il materiale corrispondente nel primo selettore.',
  },
  {
    name: 'Selezionare il tipo di macchia',
    text: 'Indica se la macchia è organica (vino, frutta), proteica (sangue), grassa o sintetica (inchiostro).',
  },
  {
    name: 'Applicare il protocollo indicato',
    text: 'Segui le istruzioni su agente, temperatura e metodo. Presta particolare attenzione alle avvertenze di cautela critica.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Protocollo Chimico Macchie',
    fiberLabel: '1. Fibra',
    selectFiberPlaceholder: 'Seleziona il tessuto...',
    stainLabel: '2. Macchia',
    selectStainPlaceholder: 'Cosa è successo?',
    molecularDiagnosis: 'Diagnosi Molecolare',
    requiredAgent: 'Agente Richiesto',
    thermalCondition: 'Condizione Termale',
    temperature: 'Temperatura',
    cleaningInstructions: 'Istruzioni di Pulizia',
    criticalWarning: 'Cautela Critica',
    criticalWarningLabel: 'ATTENZIONE',
    technicalNote: 'Nota tecnica',
    technicalNoteText:
      'Valida sempre la solidità della tintura in una zona non visibile prima di procedere con il trattamento chimico completo.',
    systemDiagnosis: 'Sistema di Diagnosi',
    systemDiagnosisDesc:
      'Configura i parametri tessili per ottenere la tabella di marcia per la pulizia',
    delicatePercarbonateWarning:
      'RISCHIO DI DEGRADAZIONE MOLECOLARE. Fibre animali altamente sensibili al percarbonato. Effettuare test in zona non visibile.',
    fiberData: {
      cotton: { name: 'Cotone', family: 'natural', isNoble: false },
      linen: { name: 'Lino', family: 'natural', isNoble: true },
      wool: { name: 'Lana / Merino', family: 'natural', isNoble: true },
      silk: { name: 'Seta', family: 'natural', isNoble: true },
      cashmere: { name: 'Cashmere', family: 'natural', isNoble: true },
      mohair: { name: 'Mohair', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpaca', family: 'natural', isNoble: true },
      polyester: { name: 'Poliestere', family: 'synthetic', isNoble: false },
      viscose: { name: 'Viscosa / Rayon', family: 'artificial', isNoble: false },
      nylon: { name: 'Nylon (Poliammide)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Acrilico', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Percarbonato di Sodio',
        description: 'Sbiancante ossigenato biodegradabile. Rilascia ossigeno attivo quando si scioglie.',
        warning: 'Evitare su fibre proteiche (seta, lana) ad alte concentrazioni.',
      },
      isopropyl: {
        name: 'Alcol Isopropilico',
        description: 'Solvente efficace per pigmenti e grassi leggeri.',
        warning: 'Può danneggiare la lucentezza delle sete e sciogliere alcuni acrilici se non diluito.',
      },
      acetone: {
        name: 'Acetone',
        description: 'Solvente potente per lacche e colle.',
        warning: 'PROIBITO su acetati e triacetati (scioglie la fibra).',
      },
      enzyme: {
        name: 'Detergente Enzimatico',
        description: 'Contiene proteasi che rompono le macchie biologiche.',
        warning: 'Usare con cautela su lana e seta (sono proteine).',
      },
      vinegar: {
        name: 'Aceto Bianco',
        description: 'Acido acetico blando per neutralizzare gli odori e fissare i colori.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Vino Rosso / Frutta',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Ammollo prolungato' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Pasta diretta' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Fredda',
            method: 'Risciacquo con acqua gasata e aceto',
            notes: 'Non strofinare',
          },
        },
      },
      {
        id: 'blood',
        name: 'Sangue',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Fredda',
            method: 'Ammollo in acqua salata e poi enzima',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Fredda', method: 'Applicazione diretta' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Fredda',
            method: 'Risciacquo immediato, evitare calore',
          },
        },
      },
      {
        id: 'grease',
        name: 'Grasso / Olio',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Sciogliere con alcol e poi lavare',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Mettere carta assorbente sotto',
          },
          delicate: { agentId: 'isopropyl', temperature: 'Fredda', method: 'Diluire alcol al 50%' },
        },
      },
      {
        id: 'ink',
        name: 'Inchiostro / Pennarello',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Ambiente',
            method: 'Tamponare dall\'esterno verso l\'interno',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Ambiente',
            method: 'Cautela con la dispersione',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Fredda',
            method: 'Diluire e provare in zona nascosta',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'La Chimica Dietro la Pulizia Tessile',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Non tutte le macchie sono uguali, e non tutte le fibre reagiscono allo stesso modo agli stessi agenti chimici. La differenza tra salvare un capo e distruggerlo sta nel capire la natura molecolare della macchia e la struttura della fibra.',
    },
    {
      type: 'card',
      title: '01 — Ossidazione Controllata',
      icon: 'mdi:atom',
      html: 'Il <strong>percarbonato di sodio</strong> rilascia ossigeno attivo che rompe i doppi legami dei cromofori (le molecole responsabili del colore della macchia), rendendoli incolori e solubili in acqua. È il metodo più efficace per le macchie organiche.',
    },
    {
      type: 'card',
      title: '02 — Solubilizzazione tramite Solventi',
      icon: 'mdi:flask-outline',
      html: "Macchie come l'olio o l'inchiostro non sono solubili in acqua. Solventi come l'<strong>alcol isopropilico</strong> o l'<strong>acetone</strong> riducono la tensione superficiale e attirano le molecole non polari della macchia, permettendo loro di trasferirsi su un mezzo di supporto.",
    },
    {
      type: 'title',
      text: 'Sovranità sulle Fibre: Perché il Tipo Conta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Non tutte le fibre "mangiano" allo stesso modo. La <strong>seta e la lana</strong> sono proteine (fibroina e cheratina). Se applichi un detergente enzimatico progettato per "mangiare proteine" (macchie di sangue o uovo) senza controllo, il detergente inizierà a degradare la fibra stessa, distruggendo la lucentezza e la struttura del tessuto.',
    },
    {
      type: 'title',
      text: 'Il Pericolo del Calore',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uno degli errori più comuni è usare acqua calda per "ammorbidire" una macchia di sangue. Chimicamente, il calore produce la <strong>coagulazione delle proteine</strong> della macchia, fissandole permanentemente alla struttura porosa della fibra. Le macchie di proteine devono essere trattate sempre con acqua fredda.',
    },
    {
      type: 'tip',
      title: 'Protocollo di Emergenza: Vino Rosso',
      html: "<strong>A. Assorbimento passivo:</strong> Tamponare con carta assorbente, mai strofinare per evitare l'espansione meccanica.<br><strong>B. Neutralizzazione osmotica:</strong> Coprire con sale fino per attirare il liquido verso l'esterno del nucleo della fibra.<br><strong>C. Azione chimica:</strong> Applicare una pasta di percarbonato e acqua a 40°C se la fibra è resistente al calore.",
    },
    {
      type: 'title',
      text: 'Solventi Specifici e Precauzioni',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'<strong>acetone</strong> è un solvente eccezionale per lacche per unghie o colle, ma è distruttivo per l'<strong>acetato</strong>. Essendo fibre derivate dalla cellulosa ma trattate chimicamente, l'acetone letteralmente scioglie il tessuto.",
    },
    {
      type: 'paragraph',
      html: "L'<strong>alcol isopropilico</strong> è più stabile, ma sui sintetici tinti può trascinare il pigmento stesso. Raccomandiamo sempre la 'prova dell'orlo' in una zona non visibile prima del trattamento principale.",
    },
  ],
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
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
