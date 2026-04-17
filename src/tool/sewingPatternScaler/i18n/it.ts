import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'sviluppo-taglie-cartamodelli';
const title = 'Sviluppo Taglie Cartamodelli Online';
const description = 'Adatta qualsiasi cartamodello alle tue misure reali. Calcolatrice di sviluppo differenziale con anteprima del modello aggiornato.';

const faqData = [
  {
    question: 'Perché la spalla non cresce quanto il torace?',
    answer: "Il corpo umano non è una sfera. Mentre il volume del busto può variare in modo significativo, lo scheletro e i punti di articolazione come la spalla sono molto più statici. Uno sviluppo professionale applica fattori differenziati per non sbilanciare il capo.",
  },
  {
    question: "Cos'è la vestibilità o 'ease'?",
    answer: "È lo spazio extra tra il tuo corpo e il tessuto. Senza vestibilità, non potresti muoverti. La nostra calcolatrice mantiene questa vestibilità affinché il capo ti stia come il designer l'ha concepito, ma adattato ai tuoi contorni reali.",
  },
  {
    question: 'Posso sviluppare un modello di maglieria o jersey?',
    answer: 'Sì, ma tieni presente che i tessuti elastici hanno solitamente una vestibilità negativa. Se il modello è molto aderente, assicurati che il fattore di elasticità del nuovo tessuto che scegli sia lo stesso di quello originale.',
  },
];

const howToData = [
  {
    name: 'Misura il tuo modello',
    text: 'Misura le linee orizzontali chiave (torace, vita e fianchi) sui pezzi di carta del tuo cartamodello originale, da cucitura a cucitura.',
  },
  {
    name: "Configura l'origine",
    text: "Inserisci la taglia del modello o le misure che hai preso nella colonna 'Origine' del nostro strumento.",
  },
  {
    name: 'Inserisci la destinazione',
    text: 'Metti le tue misure reali o la taglia che vuoi raggiungere. Lo strumento calcolerà la differenza esatta per zona.',
  },
  {
    name: 'Applica al tavolo da taglio',
    text: "Segui le istruzioni 'Azioni sul Tavolo da Taglio' per aggiungere o togliere centimetri sui laterali e sugli orli dei tuoi pezzi.",
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Patronaje: Las Bases - Teresa Gilewska',
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
      text: 'Come Sviluppare le Taglie dei Cartamodelli: Guida Tecnica e Pratica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Lo <strong>sviluppo delle taglie</strong> (o <em>grading</em>) è una delle competenze più critiche nel mondo della confezione. Non si tratta semplicemente di ingrandire o ridurre un disegno in modo proporzionale; si tratta di adattare una struttura bidimensionale alle complesse curve e proporzioni del corpo umano, che non cresce in modo lineare.",
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Calcoli Locali', icon: 'mdi:calculator' },
        { value: 'Differenziale', label: 'Sviluppo Proporzionale', icon: 'mdi:resize' },
        { value: '100%', label: 'Sicuro e Privato', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: "Cos'è esattamente lo sviluppo delle taglie?",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Lo sviluppo (o <em>grading</em>) è il processo tecnico di aumentare o diminuire la dimensione di un modello base per creare una serie di taglie differenti. A differenza di un semplice zoom, lo sviluppo tiene conto del fatto che certe parti del corpo crescono più di altre. Ad esempio, la circonferenza del torace di solito varia più tra le taglie rispetto alla larghezza delle spalle o alla lunghezza del busto.",
    },
    {
      type: 'title',
      text: 'Il Segreto del Successo: La Vestibilità (Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Vestibilità di movimento:</strong> i centimetri extra necessari per respirare, sedersi e muovere le braccia senza che il tessuto si rompa.",
        "<strong>Vestibilità di design:</strong> i centimetri che il designer ha aggiunto per creare una silhouette specifica (ad esempio, un cappotto oversize o una blusa vaporosa).",
      ],
    },
    {
      type: 'title',
      text: 'Sviluppo Orizzontale vs. Verticale',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Asse Orizzontale (Circonferenze):</strong> Torace, Vita, Fianchi. Richiede maggiore regolazione. Si divide in quarti per ogni pezzo del cartamodello.",
        "<strong>Asse Verticale (Lunghezze):</strong> Lunghezza davanti, lunghezza schiena, lunghezza totale. Influisce sulla posizione delle riprese e sulla linea della vita. Minore variazione tra taglie contigue.",
      ],
    },
    {
      type: 'title',
      text: 'Come usare lo Sviluppatore di Cartamodelli',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Misura il tuo modello:</strong> prendi il pezzo di carta e misura da bordo a bordo sulle linee di torace, vita e fianchi.",
        "<strong>Inserisci le misure d'origine:</strong> scrivi quelle misure nella colonna di sinistra e indica quale taglia rappresenta quel cartamodello.",
        "<strong>Inserisci le tue misure o la taglia di destinazione:</strong> nella colonna di destra, metti le tue misure reali o la taglia che vuoi raggiungere.",
        "<strong>Interpreta i risultati:</strong> la calcolatrice ti mostrerà quanto devi aggiungere o togliere in ogni zona specifica.",
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio per uno Sviluppo Professionale',
      html: "<p><strong>Non sviluppare oltre due o tre taglie:</strong> se provi a passare da una taglia 36 a una 52, è molto probabile che il giromanica si deformi e il collo diventi enorme. In quei casi, è meglio ridisegnare il modello base usando le tue misure da zero.</p>",
    },
    {
      type: 'title',
      text: 'Vantaggi dello sviluppo digitale',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Mantiene la proporzione esatta del design originale.',
          con: 'I giromanica possono richiedere una leggera sfumatura manuale.',
        },
        {
          pro: 'Calcolo istantaneo della vestibilità necessaria.',
          con: 'Non rileva automaticamente se il modello include già il margine di cucitura.',
        },
        {
          pro: 'Visualizzazione grafica della crescita del pezzo.',
          con: 'Richiede una presa misure iniziale molto precisa.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Differenziale', definition: 'Differenza di misura tra due taglie consecutive.' },
        { term: 'Punti di Ancoraggio', definition: 'Zone del modello che non si muovono (solitamente il centro del davanti/schiena).' },
        { term: 'Nido di Sviluppo', definition: 'Disegno sovrapposto di tutte le taglie sviluppate.' },
        { term: 'Cartamodello Base', definition: 'Sagoma senza design né vestibilità che corrisponde alle misure del corpo.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'SISTEMA DI LAVORO',
    modeStandard: 'Taglie Standard',
    modeCustom: 'Misure Reali',
    labelPatternSize: 'Taglia Modello',
    labelTargetSize: 'Taglia Destino',
    labelOriginMeasures: 'MISURE ORIGINE',
    labelTargetMeasures: 'LE TUE MISURE',
    labelEase: 'Vestibilità Attuale (Ease)',
    labelChest: 'Torace',
    labelWaist: 'Vita',
    labelHips: 'Fianchi',
    labelLength: 'Lunghezza',
    resBust: 'Busto',
    resWaist: 'Vita',
    resHips: 'Fianchi',
    resLength: 'Lunghezza',
    actionLatAdd: 'Aggiungi',
    actionLatRemove: 'Togli',
    actionLatSuffix: 'al laterale del pezzo',
    actionLatNote: 'Regolazione per quarto di modello',
    actionLenExtend: 'Allunga il modello',
    actionLenShorten: 'Accorcia il modello',
    actionLenNote: "Regolazione sulla linea dell'orlo",
    legendOriginal: 'Originale',
    legendUpdated: 'Aggiornato',
    warnText: 'Sviluppo superiore a 3 taglie. Rischio di deformazione nel giromanica.',
    sizePrefix: 'Taglia',
  },
};
