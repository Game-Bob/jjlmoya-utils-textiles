import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'calcolatrice-lana-filato';
const title = 'Calcolatrice della Lana: Quanti metri e gomitoli mi servono?';
const description =
  'Calcola con precisione metrica la quantità di lana o filato necessaria per i tuoi progetti ai ferri o all\'uncinetto in base al modello e alla taglia.';

const faqData = [
  {
    question: 'Perché l\'uncinetto consuma più lana della maglia ai ferri?',
    answer:
      'L\'uncinetto si basa sulla creazione di nodi e asole sovrapposte, il che genera un tessuto più denso e spesso per centimetro quadrato. Mediamente, un progetto all\'uncinetto consuma tra il 25% e il 35% di filato in più rispetto allo stesso progetto realizzato ai ferri (maglia rasata).',
  },
  {
    question: 'Cosa succede se compro lana di lotti di tintura (Dye Lot) diversi?',
    answer:
      'Anche se il colore sembra identico in negozio, le minime variazioni chimiche durante la tintura possono creare "striature" visibili nel capo finito quando vengono lavorati insieme. Si raccomanda vivamente di acquistare tutta la lana in una volta sola verificando che il codice del lotto sia lo stesso.',
  },
  {
    question: 'In che modo la tensione (gauge) influisce sul consumo finale?',
    answer:
      'Se lavori in modo lento, ogni punto consuma più metri di filato. Se il tuo campione di tensione è più grande di quello indicato nel modello (es. 13 punti invece di 15), il tuo consumo di lana aumenterà sostanzialmente. È vitale realizzare un campione di tensione preventivo.',
  },
  {
    question: 'Come calcolo i metri se ho solo il peso del gomitolo?',
    answer:
      'Senza il dato del metraggio, è difficile. La maggior parte dei gomitoli indica i metri sull\'etichetta. Se non lo fanno, cerca il nome della lana in database come Ravelry per trovare la lunghezza esatta per ogni 50g o 100g.',
  },
];

const howToData = [
  {
    name: 'Seleziona il progetto',
    text: 'Scegli tra un maglione, una sciarpa, un cappello, calze o una coperta per caricare le basi di consumo specifiche.',
  },
  {
    name: 'Definisci la taglia e lo spessore',
    text: 'Indica le dimensioni finali (S, M, L, XL) e lo spessore del filato che utilizzerai (Fingering, DK, Worsted, Bulky).',
  },
  {
    name: 'Attiva i moltiplicatori',
    text: 'Se il tuo modello ha trecce o texture complesse, attiva l\'opzione texture per aggiungere il supplemento necessario.',
  },
  {
    name: 'Ottieni la lista della spesa',
    text: 'Inserisci i metri per gomitolo della lana scelta per vedere esattamente quante unità devi mettere nel carrello.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
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
      text: 'Guida al Consumo della Lana: Come Calcolare metri e gomitoli per i tuoi progetti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Domina la logistica del lavoro a maglia ed evita di rimanere senza filo con la nostra calcolatrice tecnica di precisione per maglia e uncinetto. Una delle più grandi paure di chiunque lavori a maglia è lo <strong>"Yarn Chicken"</strong>: quel momento critico alla fine di un progetto in cui sembra che il filo finirà prima di chiudere gli ultimi punti. Questa calcolatrice è stata sviluppata per offrirti stime basate sugli standard industriali di metraggio e grammatura.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Margine di Sicurezza', icon: 'mdi:security' },
        { value: 'Metrico', label: 'Calcolo in Metri', icon: 'mdi:ruler' },
        { value: 'Offline', label: 'Database Locale', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Perché la grammatura dei gomitoli è ingannevole?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Molti principianti commettono l\'errore di acquistare la lana basandosi esclusivamente sul peso (es. "6 gomitoli da 100g"). Tuttavia, il peso è un\'unità di massa, non di lunghezza. Due lane che pesano 100g possono avere lunghezze radicalmente diverse: una lana tipo <strong>Bulky</strong> può avere solo 80 metri, mentre una <strong>Fingering / Lace</strong> può superare i 450 metri a parità di peso.',
    },
    {
      type: 'paragraph',
      html: 'Per questo motivo, la nostra calcolatrice dà sempre la priorità ai <strong>metri totali</strong>. Una volta nota la lunghezza necessaria per la tua taglia e il tuo progetto, puoi dividerla per il metraggio indicato sull\'etichetta del tuo gomitolo specifico per ottenere il numero esatto di unità da acquistare.',
    },
    {
      type: 'title',
      text: 'Tabella dei Metraggi Standard per Spessore',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se non hai l\'etichetta sottomano, puoi usare questi metraggi di riferimento (per ogni 100g di fibra) per le tue stime:',
    },
    {
      type: 'table',
      headers: ['Spessore (Weight)', 'Metri ca. / 100g', 'Uso Raccomandato', 'Ferri Suggeriti'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Scialli traforati, pizzi', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Calze, abbigliamento bebè', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Giacchette leggere', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Maglioni, cappelli', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Coperte, cappotti', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'Sciarpe XXL, coperte', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Il Fattore della Tensione (Gauge)',
      html: '<p>Ricorda che se lavori in modo molto morbido, i tuoi punti saranno più grandi e consumeranno più filo rispetto a un lavoro stretto. La nostra calcolatrice applica un margine di sicurezza, ma se sai che la tua tensione è estremamente lenta, considera di aggiungere un 5-10% extra ai risultati per evitare sorprese.</p>',
    },
    {
      type: 'title',
      text: 'Variabili che aumentano il consumo di filo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Non tutti i punti consumano la stessa quantità di fibra. Quando scegli il tuo design, tieni conto di questi fattori moltiplicatori:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Maglia Rasata / Jersey',
          description: 'Rappresenta il consumo base e la massima efficienza del filo per qualsiasi capo.',
          icon: 'mdi:minus-circle-outline',
          points: ['Ideale per principianti', 'Caduta naturale del tessuto'],
        },
        {
          title: 'Trecce / Texture',
          description: 'L\'incrocio delle fibre "accorcia" il pezzo, aumentando il consumo del 25% circa.',
          icon: 'mdi:texture-box',
          points: ['Richiede più metri', 'Tessuto più denso e pesante'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Uncinetto (Crochet)',
          description: 'I nodi dell\'uncinetto usano il 30% di filo in più rispetto alla maglia ai ferri.',
          icon: 'mdi:hook',
          points: ['Consumo accelerato di gomitoli', 'Consistenza tridimensionale'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Costa (Ribbing)',
          description: 'La struttura diritto/rovescio accumula più lana per cm quadrato.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Consumo intermedio (+15%)', 'Alta resa elastica'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Glossario del Lavoratore Previdente',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (Lotto di Tintura)',
          definition:
            'Numero che identifica il bagno di colore in cui è stata tinta la lana. Lotti diversi possono avere variazioni di colore impercettibili nel gomitolo ma molto visibili nel capo finito.',
        },
        {
          term: 'Stash (Scorta)',
          definition:
            'La collezione personale di filati. Identificare il peso degli avanzi senza etichetta è vitale per calcolare progetti piccoli.',
        },
        {
          term: 'Put-up',
          definition:
            'La forma in cui viene presentato il filo (matassa, gomitolo o cono), che influisce se debba essere appallottolato prima dell\'uso.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'La sfida di tentare di finire una sezione di lavoro con una quantità di filo che sembra insufficiente.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Come usare i risultati di questa calcolatrice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una volta che lo strumento ti restituisce il numero di metri e gomitoli, ti raccomandiamo di eseguire i seguenti passaggi di verifica manuale:',
    },
    {
      type: 'list',
      items: [
        '<strong>Controlla il metraggio del tuo gomitolo reale:</strong> Non tutti i gomitoli da 100g hanno 200m. Verifica questo dato sull\'etichetta per regolare il calcolo finale.',
        '<strong>Somma il metraggio dei dettagli:</strong> Se aggiungerai frange a una sciarpa o pompon a un cappello, aggiungi 50-80 metri extra al totale.',
        '<strong>Campione di tensione:</strong> Lavora un quadrato di 10x10 cm. Pesalo su una bilancia di precisione. Se pesa 20g e la tua coperta misura 100x100 (100 quadrati), avrai bisogno di esattamente 2kg di lana.',
        '<strong>Acquista sempre dallo stesso lotto:</strong> Se il calcolo dice 7 gomitoli, acquistane 8 se sono di lotti diversi per avere margine di manovra o per parti nascoste come le cuciture.',
      ],
    },
    {
      type: 'summary',
      title: 'Consigli Strategici per l\'Acquisto della Lana',
      items: [
        'Dai priorità ai metri rispetto ai grammi per assicurare la lunghezza necessaria.',
        'L\'uncinetto consuma sostanzialmente più lana della maglia; regola il selettore del tipo.',
        'Le texture dense (trecce) richiedono un aumento del 25% nel budget del filato.',
        'Conserva sempre un\'etichetta di ogni lotto nel caso ti serva un ricambio di colore.',
        'Usa il 10% di margine di sicurezza per lavorare il campione di tensione obbligatorio.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. TIPO DI PROGETTO',
    sectionSize: '2. DIMENSIONI / TAGLIA',
    sectionWeight: '3. SPESSORE DEL FILATO',
    sectionPattern: '4. CARATTERISTICHE DEL MODELLO',
    sectionBall: '5. DATI DEL GOMITOLO',
    labelCables: 'Trecce o texture dense?',
    labelGrams: 'GRAMMI / GOMITOLO',
    labelMeters: 'METRI / GOMITOLO',
    weightFine: 'Fine',
    weightMedium: 'Medio',
    weightThick: 'Grosso',
    weightXXL: 'XXL',
    projectSweater: 'MAGLIONE',
    projectScarf: 'SCIARPA',
    projectHat: 'CAPPELLO',
    projectSocks: 'CALZE',
    projectBlanket: 'COPERTA',
    projectCardigan: 'GIACCA',
    statPrefix: 'CONSUMO ESTIMATO TOTALE',
    statSuffix: 'M',
    statNote: 'Metraggio finale calcolato con scorta di riserva del 10%.',
    ballsFormatSingular: 'Acquista {n} gomitolo',
    ballsFormatPlural: 'Acquista {n} gomitoli',
    ballsDetailFormat: 'Gomitoli da {w}g / {m}m ciascuno.',
    alertTitle: 'Sicurezza strategica:',
    alertText:
      'Questo calcolo garantisce già che non rimarrai senza filo. Ricorda di validare il numero del lotto (dye lot) al momento dell\'acquisto per evitare sbalzi di colore.',
    schemeSleeveLabel: 'Maniche',
    schemeSleeveEach: 'cad.',
    schemeBodyLabel: 'Corpo',
    schemeTotalHat: 'Totale Cappello',
    schemeTotalFlat: 'Totale Pezzo',
    schemeTotalSocks: 'Totale Paio',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Bimbo', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Grande', 'Maxi'],
      socks: ['Bimbo', 'Ad. S', 'Ad. M', 'Ad. L'],
      blanket: ['Neonat', 'Divano', 'Letto 90', 'Letto 150'],
    },
  },
};
