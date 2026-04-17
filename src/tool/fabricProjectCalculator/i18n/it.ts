import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'calcolatrice-tessuto-progetto';
const title = 'Calcolatrice Consumo Tessuto per Capo';
const description =
  'Calcola facilmente quanto tessuto ti serve per cucire una gonna, un pantalone, un vestito o una camicia. Regola in base all\'altezza del tessuto e alla taglia per un taglio professionale.';

const faqData = [
  {
    question: 'Quanto tessuto mi serve per una gonna?',
    answer:
      'Dipende dall\'altezza del tessuto. Per una gonna dritta con tessuto alto 140-150 cm di solito bastano 1,20 metri. Se il tessuto è alto 90-110 cm, avrai bisogno di 2,00 metri.',
  },
  {
    question: 'In che modo l\'altezza del tessuto influenza il consumo?',
    answer:
      'Con un\'altezza minore, i pezzi del cartamodello non entrano uno accanto all\'altro (in parallelo), quindi il consumo di solito raddoppia dovendo posizionarli uno sotto l\'altro.',
  },
  {
    question: 'È meglio comprare tessuto in più?',
    answer:
      'Sì, si consiglia un margine del 10% (circa 20 cm) per compensare restringimenti, difetti nel tessuto o margini di cucitura inaspettati.',
  },
  {
    question: 'Cos\'è il drittofilo e come influisce?',
    answer:
      'È la direzione parallela alle cimose del tessuto. I cartamodelli devono essere allineati con questo filo affinché il capo non si deformi con l\'uso.',
  },
];

const howToData = [
  {
    name: 'Scegliere il tipo di capo',
    text: 'Seleziona il modello che intendi confezionare (gonna, pantalone, ecc.) per caricare la sua tabella di consumo base.',
  },
  {
    name: 'Inserire l\'altezza del tessuto',
    text: 'Misura l\'altezza da cimosa a cimosa del tessuto che intendi acquistare (90, 115, 140 o 150 cm).',
  },
  {
    name: 'Selezionare la taglia',
    text: 'Regola il volume del capo in base alla taglia (XS-S, M-L, XL-XXL) per ricalcolare il fattore moltiplicativo.',
  },
  {
    name: 'Ottenere i metri totali',
    text: 'Controlla il risultato finale con e senza margine di cucitura per sapere esattamente quanto chiedere in negozio.',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Fabric Estimation Guide - Threads Magazine',
      url: 'https://www.threadsmagazine.com/forum/measuring-fabric',
    },
    {
      name: 'How much fabric do I need? - Seamwork',
      url: 'https://www.seamwork.com/sewing-tutorials/the-anatomy-of-a-sewing-pattern',
    },
    {
      name: 'Standard Fabric Consumption Charts - Textile School',
      url: 'https://www.textileschool.com/209/fabric-consumption-in-garment-making/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calcolatrice Metri di Tessuto per Confezione: Guida al Consumo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uno dei dubbi più frequenti nel laboratorio di cucito è determinare quanto tessuto acquistare per un progetto specifico. Il consumo di tessuto dipende radicalmente da tre fattori: il modello del capo, la taglia della persona e, soprattutto, l\'altezza della pezza di tessuto (che di solito oscilla tra 90 cm e 150 cm). Questa calcolatrice tecnica sistematizza il calcolo affinché tu non compri troppo né rimanga a corto a metà del taglio.',
    },
    {
      type: 'title',
      text: 'Quanto tessuto mi serve per un vestito o un pantalone?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il calcolo tradizionale si basa sulla lunghezza del capo più la lunghezza delle maniche, aggiungendo un margine per i paramontura e l\'orlo. Tuttavia, quando il tessuto è stretto (90-110 cm), i pezzi non riescono a stare uno accanto all\'altro, obbligando ad acquistare il doppio della lunghezza. Il nostro strumento contempla queste variazioni automaticamente secondo lo standard dell\'industria tessile.',
    },
    {
      type: 'title',
      text: 'Consumo Stimato secondo l\'Altezza del Tessuto (taglia M-L)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Gonna Dritta:</strong> 2.00 m con tessuto da 90 cm · 1.20 m con tessuto da 140/150 cm.',
        '<strong>Pantalone Lungo:</strong> 2.50 m con tessuto da 90 cm · 1.50 m con tessuto da 140/150 cm.',
        '<strong>Camicia Manica Lunga:</strong> 2.20 m con tessuto da 90 cm · 1.40 m con tessuto da 140/150 cm.',
        '<strong>Vestito Base:</strong> 3.50 m con tessuto da 90 cm · 2.20 m con tessuto da 140/150 cm.',
      ],
    },
    {
      type: 'title',
      text: 'Fattori che Alterano il Consumo di Tessuto',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Direzione della fantasia (Rapport):</strong> Se il tessuto ha un disegno con una direzione chiara o quadri che devono combaciare, avrai bisogno tra il 15% e il 20% extra di materiale.',
        '<strong>Senso del filo (In sbieco):</strong> I tagli in sbieco o circolari (come le gonne a ruota) consumano significativamente più tessuto a causa dello spreco negli angoli.',
        '<strong>Senso del pelo:</strong> In tessuti come il velluto o la ciniglia, tutti i pezzi devono essere tagliati nella stessa direzione, il che limita l\'ottimizzazione dello spazio.',
        '<strong>Restringimento:</strong> Molti tessuti naturali (cotone, lino, lana) si restringono dopo il primo lavaggio. È vitale pre-lavare il tessuto prima di tagliarlo.',
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio del Sarto',
      html: '<p>Se utilizzerai un tessuto con una fantasia grande o a quadri (plaid), non fidarti unicamente della misura standard. Somma sempre una ripetizione completa del disegno (il rapport) al totale dei metri calcolati per garantire che i pattern coincidano nelle cuciture laterali.</p>',
    },
    {
      type: 'title',
      text: 'Vantaggi e Limitazioni di questa Calcolatrice',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Calcolo istantaneo per molteplici altezze di tessuto con regolazione della taglia.',
        'Include stima del margine di cucitura personalizzabile.',
        'Guida visuale della disposizione dei pezzi sulla stoffa.',
        'Non sostituisce una disposizione dei cartamodelli reale. Le taglie Plus possono richiedere ulteriori regolazioni manuali.',
      ],
    },
    {
      type: 'card',
      title: 'Altezza pezza',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'La misura trasversale del tessuto da <strong>cimosa a cimosa</strong>. Determina se i pezzi del cartamodello entrano in parallelo o devono essere posizionati in serie.',
    },
    {
      type: 'card',
      title: 'Margine di cucitura',
      icon: 'mdi:tape-measure',
      html: 'La distanza tra il bordo del cartamodello e la <strong>linea di cucitura finale</strong>. Un valore standard è 1.5 cm per cuciture di abbigliamento.',
    },
    {
      type: 'card',
      title: 'Cimosa',
      icon: 'mdi:content-cut',
      html: 'I bordi laterali rinforzati del tessuto che <strong>non si sfilacciano</strong>. Indicano la direzione del filo e servono come riferimento per il taglio.',
    },
  ],
  ui: {
    sectionProject: 'Progetto',
    sectionMaterial: 'Materiale',
    labelGarmentType: 'Tipo di capo',
    labelSize: 'Taglia',
    labelFabricWidth: 'Altezza tessuto (cm)',
    labelSeamAllowance: 'Margine di cucitura (cm)',
    garmentSkirt: 'Gonna (Dritta/A-line)',
    garmentPants: 'Pantalone',
    garmentDress: 'Vestito',
    garmentShirt: 'Camicia / Blusa',
    garmentCoat: 'Cappotto / Giacca',
    garmentTote: 'Tote Bag',
    garmentMerceria: {
      skirt: '1 cern. 20cm, 1 bottone',
      pants: '1 cern. 20cm, 1 bottone, 30cm interfodera',
      dress: '1 cern. 60cm, 50cm interfodera',
      shirt: '7 bottoni, 1m interfodera fine',
      coat: '3 bottoni grandi, 1.5m interfodera, fodera',
      tote: '2m nastro per manici',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Stretta)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (Standard EU)',
    width150: '150 cm (Tappezzeria)',
    btnClear: 'Pulisci',
    btnShare: 'Condividi',
    btnCopied: 'Copiato!',
    btnCopyList: 'Copia lista',
    resultLabel: 'Ti servono:',
    resultUnit: 'Metri',
    shopAdviceFormat: 'Chiedi {m}m in negozio',
    boardEmpty: 'Seleziona un progetto per vedere la disposizione',
    boardDescFormat: 'Altezza: {w}cm | Lunghezza: {m}m',
    merchTitle: 'Merceria e Materiali',
    checklistThread: 'Filo in tinta',
    warningSerialFormat: 'Con tessuti da {w}cm i pezzi della tua taglia non entrano in parallelo. Consumo regolato per taglio in serie.',
    foldLabel: '⊟ piega',
    pieceNames: {
      front: 'Davanti',
      back: 'Dietro',
      waistband: 'Cinturino',
      waistbelt: 'Passante',
      sleeve: 'Manica',
      collar: 'Colletto',
      cuffs: 'Polsini',
      facings: 'Paramonture',
      lapels: 'Revers',
      pocket: 'Tasca',
      body: 'Corpo',
      handleA: 'Manico A',
      handleB: 'Manico B',
    },
  },
};
