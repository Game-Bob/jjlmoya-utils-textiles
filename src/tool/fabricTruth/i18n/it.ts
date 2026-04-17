import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'veridicita-tessile-analisi-fibre';
const title = 'Veridicità Tessile: Analisi della Qualità delle Fibre';
const description = 'Scopri la vera qualità dei tuoi capi analizzandone la composizione. È vero cotone o plastica costosa? Analisi scientifica delle fibre.';

const faqData = [
  {
    question: 'Cos\'è il "Greenwashing" nella moda?',
    answer: 'È una tecnica di marketing in cui i marchi usano termini come "Ecologico" o "Sostenibile" senza prove reali. Analizzare la reale composizione delle fibre è l\'unico modo per verificare se un capo è davvero naturale o sintetico.',
  },
  {
    question: 'Perché il poliestere è spesso di qualità inferiore rispetto al cotone?',
    answer: 'Il poliestere è una plastica (PET). Sebbene sia durevole, non traspira, favorisce il cattivo odore dovuto ai batteri e genera microplastiche a ogni lavaggio. Le fibre naturali come il cotone o il lino offrono una migliore regolazione termica.',
  },
  {
    question: 'È un male se i miei vestiti contengono elastan?',
    answer: 'In piccole quantità (1-5%), l\'elastan (Lycra) conferisce comfort e vestibilità. Tuttavia, rende estremamente difficile il riciclo del capo mescolando plastica con fibre naturali, il che spesso indica un capo di "fast fashion".',
  },
  {
    question: 'Come individuare un capo di alta qualità dall\'etichetta?',
    answer: 'Cerca composizioni monomateriale (100% Cotone, 100% Lana). Le miscele complesse sono spesso usate per ridurre i costi di produzione e nascondono fibre sintetiche sotto nomi commerciali accattivanti.',
  },
];

const howToData = [
  {
    name: 'Individuare l\'etichetta interna',
    text: 'Cerca l\'etichetta bianca della composizione che di solito si trova sul lato interno o sul colletto del capo.',
  },
  {
    name: 'Identificare i componenti',
    text: 'Leggi le percentuali di ogni fibra (es. 70% Cotone, 30% Poliestere).',
  },
  {
    name: 'Inserire i dati nell\'analizzatore',
    text: 'Scrivi le proporzioni delle fibre nel nostro strumento per ottenere un punteggio tecnico di qualità.',
  },
  {
    name: 'Interpretare la diagnosi',
    text: 'Controlla il rapporto generato per capire se il tuo capo è traspirante, durevole o se richiede cure speciali per la sua composizione sintetica.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Veridicità Tessile',
    addFiber: 'Aggiungi Fibra',
    total: 'Totale',
    composition: 'Analisi della Composizione',
    description: 'Inserisci le percentuali così come appaiono sull\'etichetta del tuo capo per scoprire la verità sulla sua qualità.',
    verdict: 'Verdetto',
    breathability: 'Traspirabilità',
    durability: 'Durabilità',
    warmth: 'Calore',
    careWarning: 'Avviso di Cure Speciali',
    specialCareWarning: 'LAVAGGIO STANDARD: Segui sempre le istruzioni dell\'etichetta fisica.',
    validationError: 'La composizione deve sommare esattamente il 100% per vedere il verdetto',
    actualTotal: 'Attuale',
    missingLabel: 'mancano',
    disclaimer: 'I dati di traspirabilità, durabilità e calore sono stime basate su medie del settore per ogni tipo di fibra.',
    careWarnings: {
      delicate: 'MOLTO DELICATO: Lavare a mano in acqua fredda. Non usare l\'asciugatrice. Evitare di strizzare con forza.',
      wool: 'LANA / PELO PREGIATO: Lavare in acqua fredda con programma speciale. Asciugare in piano per evitare deformazioni. Non usare l\'asciugatrice.',
      linen: 'LINO: Tende a stropicciarsi molto. Stirare leggermente umido per risultati migliori.',
      semisynthetic: 'SEMISINTETICI: Si indebolisce se bagnato. Trattare con cura e non centrifugare forte.',
      standard: 'LAVAGGIO STANDARD: Segui sempre le istruzioni dell\'etichetta fisica.',
    },
    fiberData: {
      cotton: {
        name: 'Cotone',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Lino',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Lana / Merino',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'Seta',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Cashmere',
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
        name: 'Alpaca',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: 'Poliestere',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: 'Viscosa / Rayon',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'Nylon (Poliammide)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: 'Acrilico',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: 'Plastica Costosa',
        description: 'La maggior parte di questo capo è petrolio. Preparati a sudare e alla comparsa rapida di pallini (pilling).',
      },
      hook: {
        label: 'Esca di Marketing',
        description: 'Quella piccola percentuale di fibra pregiata è lì solo per essere scritta in etichetta. Non ne noterai i benefici.',
      },
      fragile: {
        label: 'Morbido ma Fragile',
        description: 'Molto piacevole al tatto, ma attenzione al lavaggio: tende a deformarsi e restringersi con facilità.',
      },
      natural: {
        label: 'Qualità Naturale',
        description: 'Capo traspirante e durevole. Ideale per pelli sensibili e uso prolungato.',
      },
      technical: {
        label: 'Capo Tecnico / Ultra-Sintetico',
        description: 'A meno che non sia abbigliamento sportivo specifico, stai pagando per pura plastica.',
      },
      luxury: {
        label: 'Lusso Reale',
        description: 'Un investimento in comfort e durabilità. Trattalo con il rispetto che merita.',
      },
      balanced: {
        label: 'Miscela Equilibrata',
        description: 'Una combinazione funzionale, probabilmente volta a bilanciare costi e durabilità.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'La Verità Dietro l\'Etichetta: Guida Maestra alla Composizione Tessile', level: 2 },
    { type: 'paragraph', html: 'Ti sei mai chiesto perché quella maglietta di marca ti fa sudare così tanto, o perché quel maglione "di lana" punge in modo insopportabile? La risposta non è nel design, ma nella chimica delle sue fibre.' },
    { type: 'paragraph', html: 'In un mondo dominato dal <strong>Fast Fashion</strong>, la qualità dei tessuti è passata in secondo piano rispetto all\'estetica effimera. Tuttavia, capire la composizione tessile è l\'unico modo per fare un acquisto intelligente, duraturo e rispettoso della tua pelle. Il nostro strumento di <strong>Veridicità Tessile</strong> analizza le percentuali ufficiali per rivelarti se sei di fronte a un capo di qualità o a un semplice blocco di plastica lavorata.' },
    { type: 'title', text: 'La Nostra Metodologia', level: 2 },
    { type: 'paragraph', html: 'Utilizziamo un algoritmo ponderato basato su tre pilastri fondamentali tratti dagli standard industriali europei e nordamericani:' },
    { type: 'list', items: ['<strong>Traspirabilità:</strong> Capacità della fibra di permettere il passaggio del vapore acqueo e dell\'aria.', '<strong>Durabilità:</strong> Resistenza all\'abrasione, alla trazione e alla formazione di <strong>pilling</strong> (pallini).', '<strong>Efficienza Termica:</strong> Capacità di ritensione del calore o freschezza meccanica.'] },
    { type: 'tip', title: 'Importante', html: 'La legge richiede che tutti i capi venduti in UE e USA elenchino i propri componenti in ordine decrescente di percentuale. Se un capo non ha l\'etichetta o questa è illeggibile, diffida: è probabile che non rispetti gli standard minimi di sicurezza tessile.' },
    { type: 'title', text: 'Gli "Inganni" Comuni nel Retail', level: 2 },
    { type: 'paragraph', html: 'Esistono tecniche di marketing molto raffinate progettate per elevare il valore percepito di un capo mediocre. Ecco come rilevarle:' },
    { type: 'card', title: 'L\'Esca della Fibra Pregiata', icon: 'mdi:alert', html: 'Vedrai etichette che dicono "CON CASHMERE" o "CON SETA" a grandi lettere. Guardando la composizione, scopri un 3% di seta e un 97% di poliestere. Quel 3% non apporta morbidezza, né lucentezza, né calore; serve solo perché il marchio possa alzare il prezzo del 20%.' },
    { type: 'card', title: 'Il Mito della "Viscosa Ecologica"', icon: 'mdi:leaf', html: 'Sebbene la viscosa provenga dalla cellulosa (legno), il suo attuale processo di fabbricazione è spesso altamente inquinante e il risultato finale è una fibra che si indebolisce drasticamente bagnandosi. A meno che non sia <strong>Lyocell</strong> o <strong>Tencel</strong>, la sua durabilità è limitata.' },
    { type: 'title', text: 'Analisi Approfondita per Categorie', level: 2 },
    { type: 'title', text: '1. Fibre Naturali (Orgogliosamente Organiche)', level: 3 },
    { type: 'paragraph', html: 'Sono lo standard di riferimento. Il <strong>Cotone</strong> a fibra lunga (come il Pima o l\'Egiziano) offre una morbidezza eterna. Il <strong>Lino</strong> è, scientificamente, la migliore fibra per il caldo grazie alla sua struttura molecolare che respinge il calore e assorbe l\'umidità. La <strong>Lana</strong> e la <strong>Canapa</strong> sono antibatterici naturali; non hanno bisogno di essere lavati così spesso perché non trattengono gli odori.' },
    { type: 'title', text: '2. Fibre Semi-Sintetiche (L\'Ibrido)', level: 3 },
    { type: 'paragraph', html: 'Qui troviamo la <strong>Viscosa</strong>, il <strong>Rayon</strong> e il <strong>Modal</strong>. Si sentono come seta ma costano come cotone. Sono eccellenti per capi con molto drappeggio, ma sono "assetati": assorbono molta acqua e impiegano tempo ad asciugare, il che può favorire la comparsa di muffa se non curati. Il <strong>Lyocell (Tencel)</strong> è la versione premium e sostenibile di questo gruppo, con un ciclo di produzione chiuso e maggiore resistenza.' },
    { type: 'title', text: '3. Fibre Sintetiche (Plastiche Filate)', level: 3 },
    { type: 'paragraph', html: 'Il <strong>Poliestere</strong> è il re del mercato. È economico, non si stropiccia ed è eterno (letteralmente, ci vorranno 200 anni per decomporsi). Il problema è che non respira. Crea un microclima umido tra il tessuto e la tua pelle, l\'ambiente ideale per i batteri. L\'<strong>Acrilico</strong> è l\'imitazione economica della lana: scalda, ma genera molta elettricità statica e si riempie di pallini in due lavaggi.' },
    { type: 'title', text: 'Consigli di Sopravvivenza Tessile', level: 2 },
    { type: 'paragraph', html: 'Persino il miglior capo al mondo può essere rovinato da un solo lavaggio inadeguato. Ecco le regole d\'oro universali:' },
    { type: 'tip', title: 'L\'Acqua Fredda è tua Amica', html: 'Il 90% dei capi non necessita di più di 30°C. Il calore degrada le fibre elastiche e restringe quelle naturali.' },
    { type: 'tip', title: 'Meno è Meglio (Detersivo)', html: 'L\'eccesso di sapone lascia residui che attirano sporco e rendono i vestiti rigidi.' },
    { type: 'tip', title: 'Asciugatrice: Il Nemico Sottile', html: 'I pelucchi che vedi nel filtro dell\'asciugatrice sono pezzi dei tuoi vestiti che si sono staccati per la frizione e il calore.' },
    { type: 'tip', title: 'Lavaggio al Rovescio', html: 'Protegge il colore e i ricami dallo sfregamento con il cestello e altri capi.' },
    { type: 'paragraph', html: '"Comprare meno, scegliere meglio e farlo durare." — Questo analizzatore è il tuo primo passo verso un armadio consapevole e di alta qualità.' },
  ],
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'FTC - Guida all\'Etichettatura Tessile',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'Commissione Europea - Regolamentazione Tessile',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Simboli di Manutenzione Tessile',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
