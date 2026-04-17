import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'convertitore-taglie-abbigliamento-internazionale';
const title = 'Convertitore di Taglie Abbigliamento Internazionale';
const description =
  'Converti taglie di abbigliamento tra sistemi EU, US, UK e IT. Magliette, pantaloni, vestiti e giacche per uomo, donna e unisex. Include guida alle misure e suggerimenti per marca.';

const faqData = [
  {
    question: 'Qual è la differenza tra taglia EU e taglia US nell\'abbigliamento?',
    answer:
      'Le taglie europee (EU) utilizzano numeri progressivi o lettere (XS-XXL o 32-52), mentre quelle statunitensi (US) usano spesso lettere o numeri specifici per i pantaloni. In generale, una taglia 36 EU equivale a una 4 US nell\'abbigliamento femminile.',
  },
  {
    question: 'Le taglie cambiano tra abbigliamento maschile e femminile?',
    answer:
      'Sì, assolutamente. Anche nello stesso paese, una taglia 40 da uomo non è uguale a una 40 da donna. Gli uomini hanno proporzioni diverse (spalle più larghe), quindi il calcolo della taglia varia.',
  },
  {
    question: 'Come capisco se devo scegliere una taglia in più o in meno per una marca?',
    answer:
      'Il modo migliore è controllare le recensioni degli altri clienti. Frasi come "veste piccolo" o "veste grande" sono molto utili. Consulta anche la tabella specifica delle misure di quella marca.',
  },
  {
    question: 'Quanto è precisa la tabella di conversione delle taglie?',
    answer:
      'La tabella di conversione è una guida. Sebbene sia generalmente precisa, ogni marca ha le proprie specifiche. Verifica sempre la tabella delle taglie del negozio specifico prima di acquistare.',
  },
  {
    question: 'I capi si restringono dopo il lavaggio?',
    answer:
      'Dipende dal materiale. Il cotone 100% può restringersi del 5-10% se lavato in acqua calda e asciugato in asciugatrice. I materiali sintetici mantengono meglio la forma. Controlla sempre le istruzioni di lavaggio.',
  },
];

const howToData = [
  {
    name: 'Seleziona Capo e Genere',
    text: 'Scegli il tipo di abbigliamento (maglietta, pantaloni, vestito, giacca) e il genere corrispondente.',
  },
  {
    name: 'Scegli il Tuo Sistema di Taglie',
    text: 'Seleziona il sistema che conosci: EU, US, UK o IT.',
  },
  {
    name: 'Seleziona la Tua Taglia',
    text: 'Scegli la tua taglia nel selettore o clicca sulla griglia. Vedrai le equivalenze all\'istante.',
  },
  {
    name: 'Consulta la Guida alle Marche',
    text: 'Controlla se quella marca veste piccolo, regolare o grande per regolare il tuo acquisto.',
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

const shirtsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '44' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '46' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '42' },
  ],
  unisex: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '34' },
    { EU: 'S', US: 'S', UK: 'S', IT: '36' },
    { EU: 'M', US: 'M', UK: 'M', IT: '38' },
    { EU: 'L', US: 'L', UK: 'L', IT: '40' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '42' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '44' },
  ],
};

const pantsData = {
  men: [
    { EU: '30', US: '30', UK: '30', IT: '44' },
    { EU: '32', US: '32', UK: '32', IT: '46' },
    { EU: '34', US: '34', UK: '34', IT: '48' },
    { EU: '36', US: '36', UK: '36', IT: '50' },
    { EU: '38', US: '38', UK: '38', IT: '52' },
    { EU: '40', US: '40', UK: '40', IT: '54' },
  ],
  women: [
    { EU: '32', US: '0', UK: '4', IT: '36' },
    { EU: '34', US: '2', UK: '6', IT: '38' },
    { EU: '36', US: '4', UK: '8', IT: '40' },
    { EU: '38', US: '6', UK: '10', IT: '42' },
    { EU: '40', US: '8', UK: '12', IT: '44' },
    { EU: '42', US: '10', UK: '14', IT: '46' },
  ],
  unisex: [],
};

const dressesData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
  ],
  women: [
    { EU: 'XS', US: '0-2', UK: '4-6', IT: '32-34' },
    { EU: 'S', US: '4-6', UK: '8-10', IT: '36-38' },
    { EU: 'M', US: '8-10', UK: '12-14', IT: '40-42' },
    { EU: 'L', US: '12-14', UK: '16-18', IT: '44-46' },
    { EU: 'XL', US: '16-18', UK: '20-22', IT: '48-50' },
  ],
  unisex: [],
};

const jacketsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '44' },
    { EU: 'S', US: 'S', UK: 'S', IT: '46' },
    { EU: 'M', US: 'M', UK: 'M', IT: '48' },
    { EU: 'L', US: 'L', UK: 'L', IT: '50' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '52' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
  ],
  unisex: [],
};

const measurementRanges = {
  shirts: [
    { size: 'XS', chest: 84, waist: 76, hip: 84 },
    { size: 'S', chest: 92, waist: 84, hip: 92 },
    { size: 'M', chest: 100, waist: 92, hip: 100 },
    { size: 'L', chest: 108, waist: 100, hip: 108 },
    { size: 'XL', chest: 116, waist: 108, hip: 116 },
    { size: 'XXL', chest: 124, waist: 116, hip: 124 },
  ],
  pants: [
    { size: '30', chest: 80, waist: 76, hip: 89 },
    { size: '32', chest: 85, waist: 81, hip: 94 },
    { size: '34', chest: 90, waist: 86, hip: 99 },
    { size: '36', chest: 95, waist: 91, hip: 104 },
    { size: '38', chest: 100, waist: 96, hip: 109 },
    { size: '40', chest: 105, waist: 101, hip: 114 },
  ],
  dresses: [
    { size: 'XS', chest: 80, waist: 72, hip: 88 },
    { size: 'S', chest: 88, waist: 80, hip: 96 },
    { size: 'M', chest: 96, waist: 88, hip: 104 },
    { size: 'L', chest: 104, waist: 96, hip: 112 },
    { size: 'XL', chest: 112, waist: 104, hip: 120 },
  ],
  jackets: [
    { size: 'XS', chest: 84, waist: 76, hip: 88 },
    { size: 'S', chest: 92, waist: 84, hip: 96 },
    { size: 'M', chest: 100, waist: 92, hip: 104 },
    { size: 'L', chest: 108, waist: 100, hip: 112 },
    { size: 'XL', chest: 116, waist: 108, hip: 120 },
  ],
};

export const content: ToolLocaleContent<ClothingSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    { name: 'ISO 3635: Taglie di Abbigliamento - Standard Ufficiale', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Standard Taglie Abbigliamento - Wikipedia', url: 'https://it.wikipedia.org/wiki/Taglia_(abbigliamento)' },
    {
      name: 'Conversione Taglie Internazionali - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Convertitore Taglie Abbigliamento: Guida Completa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Acquistare vestiti in negozi internazionali può essere confuso quando le taglie non corrispondono. Il <strong>convertitore di taglie</strong> ti aiuta a trovare la tua taglia perfetta nei sistemi EU, US, UK e IT, per magliette, pantaloni, vestiti e giacche.',
    },
    {
      type: 'title',
      text: 'Perché le taglie variano tra i paesi?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Non esiste un unico standard internazionale. Ogni regione ha sviluppato il proprio sistema, il che genera confusione quando si acquista in negozi stranieri o su piattaforme come Amazon o AliExpress.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Taglie EU (Europa):</strong> Utilizzano numeri progressivi (32, 34, 36...) o lettere. È il sistema più comune in Germania e Francia.</span>',
        '<span><strong>Taglie US (Stati Uniti):</strong> Utilizzano lettere (XS, S, M, L) o numeri per i pantaloni da donna (0, 2, 4, 6...).</span>',
        '<span><strong>Taglie UK (Regno Unito):</strong> Simile al sistema EU ma con numerazione propria, generalmente inferiore a quella US.</span>',
        '<span><strong>Taglie IT (Italia):</strong> Numerazione italiana, storicamente diversa dal sistema EU generalizzato.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio Professionale',
      html: 'Le taglie variano significativamente tra le marche. Una 38 da Zara può essere diversa da una 38 da H&amp;M. Consulta sempre la tabella specifica delle taglie del negozio prima di acquistare.',
    },
    {
      type: 'title',
      text: 'Come misurare il corpo correttamente',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Per garantire la taglia corretta, misura il tuo corpo con un metro a nastro flessibile. Misura a fine giornata, quando il corpo è alla sua massima espansione.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Petto:</strong> Misura intorno alla parte più larga del torace, passando il metro sotto le braccia.</span>',
        '<span><strong>Vita:</strong> Misura all\'altezza dell\'ombelico senza comprimere l\'addome artificialmente.</span>',
        '<span><strong>Fianchi:</strong> Misura intorno alla parte più larga dei fianchi, con il metro parallelo al suolo.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Guida alla vestibilità per marca',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Taglie regolari. Una 36 da Zara è solitamente affidabile per misure standard.</span>',
        '<span><strong>H&amp;M:</strong> Tende a vestire grande. Considera di scendere di una taglia rispetto al solito.</span>',
        '<span><strong>Uniqlo:</strong> Spesso veste piccolo, specialmente per i capi base. Si consiglia di salire di una taglia.</span>',
        '<span><strong>Nike / Adidas:</strong> Tagli sportivi spesso aderenti. Valuta di salire di mezza taglia.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Tipo di Capo',
    categoryShirts: 'Magliette',
    categoryPants: 'Pantaloni',
    categoryDresses: 'Vestiti',
    categoryJackets: 'Giacche',
    genderLabel: 'Genere',
    genderMen: 'Uomo',
    genderWomen: 'Donna',
    genderUnisex: 'Unisex',
    tabBySize: 'Per Taglia',
    tabByMeasurements: 'Per Misure',
    regionLabel: 'Il Tuo Sistema di Taglie',
    sizeLabel: 'Seleziona la Tua Taglia',
    regionEU: 'Europa (EU)',
    regionUS: 'Stati Uniti (US)',
    regionUK: 'Regno Unito (UK)',
    regionIT: 'Italia (IT)',
    labelEU: 'Europa',
    labelUS: 'Stati Uniti',
    labelUK: 'Regno Unito',
    labelIT: 'Italia',
    quickGridTitle: 'Equivalenze Rapide (EU)',
    tableTitle: 'Tabella di Conversione Completa',
    measurementsTitle: 'Inserisci le Tue Misure',
    chestLabel: 'Petto (cm)',
    waistLabel: 'Vita (cm)',
    hipLabel: 'Fianchi (cm)',
    chestPlaceholder: 'Es: 95',
    waistPlaceholder: 'Es: 85',
    hipPlaceholder: 'Es: 95',
    recommendBtnLabel: 'Suggerisci Taglia',
    tipsTitle: 'Consigli per la Misura',
    tipOverClothes: 'Sopra i vestiti',
    tipStraight: 'Metro dritto e parallelo',
    tipNoTight: 'Senza stringere',
    tipEndOfDay: 'A fine giornata',
    recommendationTitle: 'Taglia Consigliata',
    recommendedSizePrefix: 'Ti consigliamo la taglia:',
    measuredBy: 'In base alle tue misure:',
    chestShort: 'Petto',
    waistShort: 'Vita',
    hipShort: 'Fianchi',
    recommendationError: 'Per favore completa tutte le misure per ottenere un suggerimento.',
    recommendationNoData: 'Nessun dato disponibile per questa categoria.',
    fitGuideTitle: 'Guida alle Marche',
    fitSmall: 'Veste Piccolo',
    fitRegular: 'Veste Regolare',
    fitLarge: 'Veste Grande',
    fitInfoDefault: 'Clicca su una marca per suggerimenti specifici.',
    fitNotif1: ' solitamente veste ',
    fitNotifSmall: 'piccolo',
    fitNotifRegular: 'regolare',
    fitNotifLarge: 'grande',
    fitNotif2: '. Considera di ',
    fitNotif3: ' se è la prima volta che acquisti questa marca.',
    fitAdviceSmall: 'salire di una taglia',
    fitAdviceRegular: 'mantenere la tua taglia abituale',
    fitAdviceLarge: 'scendere di una taglia',
    fitSelectedSuffix: ' selezionata. Scegli un\'altra marca per confrontare.',
    infoBannerTitle: 'Consiglio Pro:',
    infoBannerText:
      'Le taglie variano significativamente tra le marche. Controlla sempre la tabella specifica del negozio prima di acquistare.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
