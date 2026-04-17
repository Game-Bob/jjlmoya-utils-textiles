import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'calcolatrice-gauge-tensione-maglia';
const title = 'Calcolatrice di Gauge e Tensione della Maglia';
const description =
  'Ricalcola facilmente i punti e i ferri di qualsiasi modello ai ferri o all\'uncinetto. Regola il gauge per multipli e fattore di scala per un risultato professionale.';

const faqData = [
  {
    question: 'Cos\'è la tensione o gauge nel lavoro a maglia?',
    answer:
      'È la misura di quanti punti e ferri entrano in un\'area determinata (solitamente 10x10 cm). È fondamentale perché determina la dimensione finale del capo in base al ferro e al filato utilizzato.',
  },
  {
    question: 'In che modo il cambio di gauge influenza la dimensione?',
    answer:
      'Se la tua tensione ha più punti per centimetro rispetto al modello, il capo sarà più piccolo. Se hai meno punti, il capo sarà più grande. Per questo è vitale ricalcolare i punti o cambiare ferri.',
  },
  {
    question: 'Perché è importante la regolazione per multipli?',
    answer:
      'Molti modelli hanno motivi (traforati, trecce, disegni) che richiedono un numero specifico di punti per essere completati. La nostra calcolatrice regola il totale al multiplo più vicino per non rompere il design.',
  },
  {
    question: 'Devo lavare il campione prima di misurare?',
    answer:
      'Sì, sempre. Il "bloccaggio" (lavare e mettere in forma) rilassa le fibre e mostra la tensione reale che avrà il capo dopo il suo primo utilizzo e lavaggio.',
  },
];

const howToData = [
  {
    name: 'Identificare la tensione del modello',
    text: 'Cerca nelle istruzioni del modello quanti punti e ferri indicano per un campione di 10x10 cm o 4x4 pollici.',
  },
  {
    name: 'Lavorare e misurare il proprio campione',
    text: 'Lavora un campione con il tuo filato e i tuoi ferri, bloccalo e misura quanti punti e ferri hai in quella stessa area.',
  },
  {
    name: 'Configurare la calcolatrice',
    text: 'Inserisci i dati del campione del modello e quelli del tuo campione reale. Aggiungi il totale dei punti della tua taglia e i multipli del motivo se presenti.',
  },
  {
    name: 'Ottenere i risultati',
    text: 'Controlla il nuovo numero di punti da avviare e il fattore di scala per sapere se devi regolare anche la lunghezza del capo.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calcolatrice di Gauge e Tensione della Maglia Online: Guida Tecnica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se hai mai terminato un maglione che sembrava disegnato per un gigante o un berretto che copriva a malapena la sommità della testa, conosci già l\'importanza del <strong>gauge o tensione</strong>. Nel mondo della maglia e dell\'uncinetto, la tensione è il rapporto tra lo spessore del filato, la dimensione dei ferri e la forza con cui ogni sferruzzatore manipola il filo. Non esistono due sferruzzatori uguali, e per questo, non esistono due tensioni identiche.',
    },
    {
      type: 'title',
      text: 'Perché è vitale la Tensione o Gauge nel Lavoro a Maglia?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questa calcolatrice di gauge per maglia è uno strumento tecnico progettato per eliminare le congetture matematiche e permetterti di concentrarti sulla creatività. Inserendo i dati del campione del modello e quelli del tuo campione, otterrai regolazioni precise di punti e ferri, assicurando che il tuo capo finale abbia esattamente le misure che ti aspetti.',
    },
    {
      type: 'title',
      text: 'Come usare la calcolatrice di tensione maglia',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lavora un campione:</strong> Non limitarti a 10x10 cm. Lavora almeno 15x15 cm affinché i bordi non falsino la misura centrale.',
        '<strong>Blocca il tuo campione:</strong> Lava e asciuga il campione così come faresti con il capo finito. Molte fibre di lana si espandono o crescono quando si bagnano.',
        '<strong>Misura con precisione:</strong> Utilizza un righello rigido o un calibro da 10 cm. Conta quanti punti entrano orizzontalmente e quanti ferri verticalmente.',
        '<strong>Inserisci i dati:</strong> Inserisci i valori del modello nella colonna sinistra e i tuoi valori reali nella destra. Lo strumento ricalcolerà automaticamente quanti punti ti servono per raggiungere la larghezza desiderata.',
      ],
    },
    {
      type: 'title',
      text: 'Interpretazione dei Risultati: Il Fattore di Scala',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il fattore di scala è il moltiplicatore che applichiamo a ogni istruzione del modello. Se la tua tensione è di 22 punti e il modello ne richiede 20, il tuo fattore di scala è di 1.1. Ciò significa che per ottenere la stessa larghezza fisica, hai bisogno del 10% in più di punti. Una deviazione di 0-2% è ideale, del 2-10% è moderata, del 10-25% richiede un ricalcolo obbligatorio, e oltre il 25% comporta un rischio strutturale.',
    },
    {
      type: 'title',
      text: 'Trattamento di Multipli e Motivi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una delle sfide più grandi nel ricalcolare un modello è mantenere l\'integrità dei traforati, trecce o motivi. Se il design si ripete ogni 8 punti, non puoi semplicemente aggiungere 3 punti addizionali; devi regolare il totale affinché rimanga un multiplo di 8. La funzione di <strong>regolazione per multipli</strong> di questa calcolatrice suggerisce il numero di punti più vicino che rispetta l\'architettura del design.',
    },
    {
      type: 'tip',
      title: 'Consiglio per Esperti',
      html: '<p>Di solito è preferibile usare questa calcolatrice e lavorare con la tensione naturale del tuo filato, adattando il numero di punti invece di forzare la tensione cambiando radicalmente la dimensione dei ferri, poiché quest\'ultima scelta può alterare la caduta e la morbidezza del tessuto.</p>',
    },
    {
      type: 'title',
      text: 'Vantaggi dell\'uso del nostro strumento di regolazione',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Regolazione automatica di punti e ferri con fattore di scala preciso.',
        'Supporto per multipli complessi (X + Y) per mantenere l\'integrità del motivo.',
        'Stima dei grammi di lana necessari per il progetto completo.',
        'Visualizzatore dinamico dello swatch che mostra la densità del tessuto in tempo reale.',
      ],
    },
    {
      type: 'card',
      title: 'Gauge / Tensione',
      icon: 'mdi:ruler',
      html: 'Numero di punti e ferri contenuti in un quadrato di <strong>10x10 cm</strong> o <strong>4x4 pollici</strong>. È il riferimento universale di tutti i modelli di maglia.',
    },
    {
      type: 'card',
      title: 'Bloccaggio',
      icon: 'mdi:water',
      html: 'Processo di inumidire e dare forma al capo per assestare i punti. Rivela la <strong>tensione reale</strong> che avrà il capo dopo il suo primo utilizzo e lavaggio.',
    },
    {
      type: 'card',
      title: 'Fattore di Scala',
      icon: 'mdi:scale',
      html: 'Proporzione matematica tra il campione del modello e il campione reale dello sferruzzatore. Determina quanti punti e ferri regolare per mantenere le <strong>misure corrette</strong>.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Tensione Originale',
    sectionMyGauge: 'Il Tuo Campione Attuale',
    sectionProject: 'Struttura del Progetto',
    labelStitches: 'Punti',
    labelRows: 'Ferri',
    labelWidth: 'Larghezza',
    labelLength: 'Lunghezza',
    labelUnit: 'Unità di Misura',
    labelNeedle: 'Ferro',
    labelNeedleMm: 'Ferro (mm)',
    labelWeight: 'Peso (g)',
    labelWeightOptional: 'opzionale',
    labelPatternSts: 'Punti Modello',
    labelPatternRows: 'Ferri Modello',
    labelMultiples: 'Multipli',
    labelMultiplesExample: 'Es: 10 + 2',
    labelMultiplesPlaceholder: 'Multiplo + Bordo',
    unitEU: '10 x 10 cm (Standard EU)',
    unitUS: '4 x 4 pollici (Standard US)',
    btnClear: 'Pulisci',
    btnShare: 'Condividi',
    btnCopied: 'Copiato!',
    resSuggestedSts: 'Punti suggeriti da avviare',
    resNewRows: 'Nuovi Ferri',
    resNewRowsTooltip: 'Numero di ferri necessari per eguagliare la lunghezza del modello originale con la tua tensione attuale.',
    resScaleFactor: 'Fattore Scala',
    resScaleFactorTooltip: 'Rapporto di dimensione tra il tuo lavoro e il modello. Un valore negativo indica che il tuo lavoro è più denso.',
    resSuggestion: 'Suggerimento',
    resSuggestionTooltip: 'Raccomandazione tecnica per regolare la tua tensione senza dover ricalcolare ogni punto del modello.',
    suggestionIdeal: 'Ideale',
    suggestionDown: 'Scendi di Ferro',
    suggestionUp: 'Sali di Ferro',
    suggestionDownDetail: 'Usa ferro da {n}mm o taglia inferiore.',
    suggestionUpDetail: 'Usa ferro da {n}mm o taglia superiore.',
    multiplesNoteFormat: 'Regolato a {n} punti (Mult. {m})',
    yarnTitle: 'Stima della Lana per il Progetto',
    yarnResultFormat: 'Lana stimata: <strong>{g}g</strong>',
    yarnSafetyFormat: '(+{s}g di sicurezza)',
    alertDanger: 'Differenza estrema (>25%). La caduta e la struttura del capo saranno alterate.',
  },
};
