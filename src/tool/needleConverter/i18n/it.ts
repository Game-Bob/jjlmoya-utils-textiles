import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'convertitore-aghi-maglia';
const title = 'Convertitore di Aghi da Maglia e Uncinetto';
const description = 'Converti le dimensioni degli aghi tra i sistemi Metrico (mm), US e UK con consigli su filati e WPI.';

const faqData = [
  {
    question: 'Perché esistono diversi sistemi di taglie per gli aghi?',
    answer: "Storicamente, ogni paese ha sviluppato il proprio sistema. Il sistema metrico (mm) è lo standard internazionale più preciso. Il sistema US utilizza una numerazione progressiva (0-50), mentre il sistema UK utilizza una numerazione inversa: più alto è il numero, più fine è l'ago.",
  },
  {
    question: 'Le taglie di uncinetto e maglia US sono uguali?',
    answer: "Non esattamente. Gli uncinetti negli US portano solitamente una lettera associata (es. H-8) ed esistono variazioni specifiche negli spessori piccoli. Inoltre, gli uncinetti in acciaio per filati fini utilizzano una numerazione totalmente diversa.",
  },
  {
    question: "Quale ago devo scegliere se il mio schema usa una misura senza un equivalente esatto?",
    answer: "Se un modello richiede una misura come 7.0mm e il tuo sistema arriva solo da 6.5mm a 8.0mm, si raccomanda di fare sempre un campione di tensione (gauge). La differenza di 0.5mm può alterare significativamente la dimensione finale del capo.",
  },
  {
    question: 'Cos\'è il WPI (Wraps Per Inch)?',
    answer: "È il numero di giri di filo che entrano in un pollice (2.54 cm). È il metodo più affidabile per identificare lo spessore di una lana senza etichetta e determinare quale ago sia il più adatto per lavorarla.",
  },
];

const howToData = [
  {
    name: 'Seleziona il tipo di lavoro',
    text: 'Scegli tra maglia (knitting) o uncinetto (crochet) per vedere le equivalenze corrette nel sistema US.',
  },
  {
    name: 'Scegli il calibro nel selettore visuale',
    text: 'Clicca sul cerchio che corrisponde alla dimensione del tuo ago. I fori mantengono una proporzione matematica reale con la misura in millimetri.',
  },
  {
    name: 'Leggi le equivalenze',
    text: 'Consulta i risultati in tempo reale: millimetri, taglia US e taglia UK, insieme alla categoria di filato raccomandata e al suo WPI.',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida Tecnica di Aghi da Maglia e Uncinetto: Sistemi, Calibri ed Equivalenze',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La globalizzazione dei modelli digitali ha reso indispensabile comprendere le differenze tra il <strong>sistema metrico decimale</strong>, lo <strong>standard degli Stati Uniti (US)</strong> e il <strong>sistema imperiale del Regno Unito (UK)</strong>. Questo strumento converte tra i tre sistemi e offre consigli sui filati tramite il metodo WPI.",
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Funziona senza rete', icon: 'mdi:wifi-off' },
        { value: 'Tripla', label: 'Sincronizzazione Totale', icon: 'mdi:sync' },
        { value: 'WPI', label: 'Analisi del Filo', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'La Complessità dei Sistemi Internazionali',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sistema', 'Base di Calcolo', 'Regione Predominante', 'Caratteristiche Tecniche'],
      rows: [
        ['<strong>Metrico (mm)</strong>', 'Diametro esatto in mm', 'Europa / Internazionale', 'Lo standard ISO più affidabile. Incrementi costanti di 0.25mm o 0.50mm.'],
        ['<strong>US (USA)</strong>', 'Numerazione Progressiva', 'Nord America', 'Usa numeri dallo 0 al 50. Nell\'uncinetto, i numeri sono associati a lettere (B-1, G-6).'],
        ['<strong>UK (Imperiale)</strong>', 'Numerazione Inversa', 'Regno Unito / Australia', 'Basato sul calibro di trafilatura. Maggiore è il numero, più fine è l\'ago (14 è fine, 0 è grosso).'],
      ],
    },
    {
      type: 'title',
      text: 'Identificazione dei Filati tramite il Metodo WPI',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / Encaje (18-22+ WPI):</strong> Fili ultrafini per pizzi di seta o mohair. Aghi da 1.5mm a 2.5mm.',
        '<strong>Fingering / Baby (14-16 WPI):</strong> Lo standard per calze e abbigliamento per neonati. Aghi ottimali da 2.75mm a 3.25mm.',
        '<strong>Sport / Fine (12-14 WPI):</strong> Filato di spessore medio-basso, ideale per giacche leggere. Aghi da 3.5mm a 3.75mm.',
        '<strong>DK / Light Worsted (11-13 WPI):</strong> Lo spessore più versatile sul mercato. Aghi da 4.0mm o 4.5mm.',
        '<strong>Worsted / Aran (9-10 WPI):</strong> Filo grosso per maglioni invernali. Aghi da 5.0mm a 5.5mm.',
        '<strong>Bulky / Chunky (7-8 WPI):</strong> Lane di grande calibro per progetti veloci. Aghi da 6.0mm a 8.0mm.',
        '<strong>Super Bulky (5-6 WPI):</strong> Fibre giganti per decorazione o sciarpe. Aghi da 9.0mm a 15.0mm.',
      ],
    },
    {
      type: 'tip',
      title: 'Tecnica Professionale: L\'Uncinetto in Acciaio',
      html: '<p>Esiste una famiglia di aghi per filati di cotone mercerizzato estremamente fini. Sono gli <strong>Steel Hooks (Uncinetti in Acciaio)</strong>. La loro numerazione è specifica e inversa: un uncinetto in acciaio #14 (0.6mm) è molto più fine di uno di #00 (3.5mm). Non usare mai la tabella standard per questi calibri.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Checklist per scegliere il calibro corretto',
      icon: 'mdi:check-circle-outline',
      badge: 'Validazione Tecnica',
      html: '<p>Segui questi passaggi prima di iniziare un progetto a lungo termine:</p><ul><li><strong>Tensione Personale:</strong> Se lavori in modo stretto, aumenta di 0.5mm. Se lavori in modo allentato, scendi di 0.5mm.</li><li><strong>Materiale dell\'Ago:</strong> Bambù per filati scivolosi; Metallo per lane ruvide.</li><li><strong>Tipo di Fibra:</strong> Il cotone non cede; la lana merino si espande con il bloccaggio.</li><li><strong>Campione di Tensione:</strong> Lavora un quadrato di 10x10cm e lavalo prima di misurare il calibro finale.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Il sistema Metrico è universale ed evita errori di arrotondamento tra produttori.',
          con: 'Molti schemi antichi e storici non includono misure in millimetri.',
        },
        {
          pro: 'Il sistema US facilita la memorizzazione delle taglie standard per schemi americani.',
          con: 'Le lettere nell\'uncinetto non sono sempre coerenti tra le marche.',
        },
        {
          pro: 'Il sistema WPI permette di riciclare filati senza etichetta in modo tecnico e professionale.',
          con: 'Richiede una misurazione manuale molto meticolosa per non falsare il risultato.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'Quadrato di campione (10x10cm) lavorato prima di iniziare il progetto per convalidare il calibro reale.' },
        { term: 'Hook Throat', definition: 'La gola dell\'uncinetto. La sua profondità determina quanto carico di filo può gestire l\'ago.' },
        { term: 'Block Testing', definition: 'Processo di inumidimento e stiratura del tessuto affinché le fibre si rilassino e rivelino la loro vera dimensione finale.' },
      ],
    },
    {
      type: 'summary',
      title: 'Fattori Critici per il Successo del tuo Progetto Tessile',
      items: [
        "L'ago corretto detterà non solo la dimensione, ma la durata del capo contro lo sfregamento.",
        'Usa il nostro convertitore per convalidare schemi di riviste americane o inglesi in pochi secondi.',
        'Se non trovi l\'equivalente esatto, opta per il calibro superiore o inferiore basandoti sul tuo campione di tensione.',
        "L'uncinetto consuma circa il 30% di filo in più rispetto alla maglia con lo stesso ago.",
        'Pulisci i tuoi aghi di metallo regolarmente per mantenere la velocità di scorrimento ottimale.',
      ],
    },
  ],
  ui: {
    labelSystem: 'SISTEMA DI LAVORO',
    modeKnitting: 'Maglia',
    modeCrochet: 'Uncinetto',
    calibratorLabel: 'CALIBRATORE DI PRECISIONE (SCALA REALE)',
    calibratorDesc: 'Seleziona un diametro per vedere le equivalenze in tempo reale. I fori mantengono una proporzione matematica reale rispetto alla misura in millimetri.',
    tagMetric: 'Metrico (mm)',
    tagUS: 'Sistema US',
    tagUK: 'Sistema UK',
    yarnLabel: 'SPESSORE DI FILO IDEALE',
    wpiFormat: '{wpi} WPI (Giri per pollice)',
    tableSectionLabel: 'CATALOGO TECNICO DELLE EQUIVALENZE',
    tableMetric: 'METRICO',
    tableUS: 'TAGLIA US',
    tableUK: 'UK / IMPERIALE',
    tableYarn: 'CATEGORIA FILATO',
  },
};
