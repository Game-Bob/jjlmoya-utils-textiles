import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'preparazione-fibre-tintura';
const title = 'Preparazione delle Fibre per la Tintura';
const description =
  'Calcolatrice WOF, protocolli di mordenzatura e rampe termiche per preparare lana, seta e cotone prima della tintura naturale.';

const faqData = [
  {
    question: 'Cos\'è il WOF (Weight of Fiber)?',
    answer:
      'Il WOF è il sistema standard per calcolare la quantità di pigmento o mordente necessaria. Si basa sul peso a secco della fibra. Ad esempio, un 100% di WOF in bucce di cipolla per 100g di lana significa che avrai bisogno di 100g di bucce di cipolla.',
  },
  {
    question: 'Perché è necessaria la mordenzatura?',
    answer:
      'Il mordente (come l\'allume) agisce come un ponte chimico tra la fibra tessile e il pigmento naturale. Senza di esso, la maggior parte delle tinture non si fisserebbe e svanirebbe al primo lavaggio (scarsa solidità alla luce e allo sfregamento).',
  },
  {
    question: 'Qual è la differenza tra preparare fibre animali e vegetali?',
    answer:
      'Le fibre animali (proteiche come la lana) accettano molto bene l\'allume da solo. Le fibre vegetali (cellulosiche come il cotone o il lino) richiedono un passaggio preliminare di tannini per "ingannare" la fibra e farle accettare il mordente metallico.',
  },
  {
    question: 'Cos\'è la rampa termica nella tintura?',
    answer:
      'È l\'aumento graduale della temperatura (circa 1-2°C al minuto) del bagno di tintura. È fondamentale per evitare lo shock termico, specialmente nella lana, che può infeltrire se i cambi di temperatura sono bruschi.',
  },
];

const howToData = [
  {
    name: 'Pulizia e sgrassaggio',
    text: 'Lava la fibra con un detergente neutro per eliminare oli, cere o amidi industriali che impediscono al mordente di penetrare uniformemente.',
  },
  {
    name: 'Pesare la fibra asciutta',
    text: 'Ottieni il peso esatto del materiale asciutto. Questo valore è la base per tutti i calcoli di WOF (Weight of Fiber).',
  },
  {
    name: 'Calcolo e bagno di mordenzatura',
    text: 'Sciogli il mordente (ad es. allume di potassio al 15% WOF) in acqua calda e immergi la fibra, mantenendo la temperatura costante secondo il protocollo.',
  },
  {
    name: 'Maturazione e risciacquo',
    text: 'Lascia riposare la fibra mordenzata (preferibilmente 24 ore) affinché il metallo si fissi profondamente prima di passare al bagno di tintura definitivo.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Artista Textil y Tintes Naturales',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Scienza dietro la Mordenzatura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Preparare una fibra per la tintura non significa semplicemente lavarla. È un processo di ingegneria chimica a livello molecolare chiamato mordenzatura. La parola deriva dal latino <i>mordere</i>, e la sua funzione è agire come un ponte chimico tra la fibra e il pigmento. Senza questo ponte, la maggior parte delle tinture naturali verrebbe semplicemente via al primo risciacquo.',
    },
    {
      type: 'card',
      title: 'Concetto Chiave',
      icon: 'mdi:molecule',
      html: 'Il mordente ha valenze disponibili che si aggrappano simultaneamente ai polimeri della fibra e al colorante.',
    },
    {
      type: 'title',
      text: 'Differenziazione delle Fibre',
      level: 2,
    },
    {
      type: 'card',
      title: 'Fibre Proteiche: Lana e Seta',
      icon: 'mdi:sheep',
      html: 'Queste fibre sono composte da catene di amminoacidi con un\'affinità naturale molto alta per i metalli. Il calore apre le scaglie permettendo ai sali di allume di penetrare profondamente. L\'uso del <strong>Cremor Tartaro</strong> è vitale per mantenere il pH acido che ne preserva la morbidezza.',
    },
    {
      type: 'card',
      title: 'Fibre Cellulosiche: Cotone e Lino',
      icon: 'mdi:leaf',
      html: 'La cellulosa non ha siti di legame facilmente disponibili. Per questo usiamo il <strong>protocollo a due passaggi</strong>: prima i tannini che aderiscono alla cellulosa, poi l\'allume che aderisce a quei tannini. Senza questo pre-trattamento, il colore risulterà pallido e poco resistente.',
    },
    {
      type: 'title',
      text: 'Il Controllo del Bagno: WOF, Temperatura e pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Per ottenere risultati professionali e ripetibili, il concetto di <strong>WOF (Weight of Fabric)</strong> è la legge. Tutto si misura come percentuale del peso a secco della fibra. Un eccesso di mordente può saturare la fibra e lasciarla ruvida o con depositi metallici che alterano il colore finale.',
    },
    {
      type: 'tip',
      title: 'La Rampa Termica',
      html: 'Il calore agisce come catalizzatore, accelerando la reazione chimica. Tuttavia, un cambio brusco di temperatura nella lana può causare l\'aggancio permanente delle scaglie tra loro, con conseguente infeltrimento e restringimento del tessuto.',
    },
    {
      type: 'tip',
      title: 'Il Fattore pH',
      html: 'Molte tinture naturali sono indicatori di pH vivi. Il pH influenza la solubilità dei sali e la conservazione della fibra. La seta può perdere la sua brillantezza se il bagno è troppo alcalino. Regolare il pH con acido citrico o carbonato di calcio è fondamentale.',
    },
    {
      type: 'title',
      text: 'Sostanze e Sicurezza',
      level: 2,
    },
    {
      type: 'card',
      title: 'Allume di Potassio',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Mordente universale, incolore e altamente efficace. Il riferimento per le fibre proteiche.',
    },
    {
      type: 'card',
      title: 'Cremor Tartaro',
      icon: 'mdi:spoon-sugar',
      html: 'Assistente che migliora il fissaggio e la morbidezza nelle fibre animali. Mantiene il pH acido.',
    },
    {
      type: 'tip',
      title: 'Protocollo di Sicurezza',
      html: 'Usa pentole esclusivamente per la tintura, mai per alimenti.<br>Utilizza guanti e mascherina nel manipolare mordenti in polvere.<br>Assicura una ventilazione costante per evitare l\'accumulo di vapori.',
    },
  ],
  ui: {
    profileTitle: 'Selezione del Profilo',
    profileDesc: 'Il protocollo chimico si divide in base all\'origine molecolare della fibra',
    proteinTitle: 'Fibre Proteiche',
    proteinOrigin: 'Origine Animale',
    proteinDesc: 'Lana, seta, alpaca, mohair o cashmere. Richiedono temperature controllate e pH acido.',
    cellulosicTitle: 'Fibre Cellulosiche',
    cellulosicOrigin: 'Origine Vegetale',
    cellulosicDesc: 'Cotone, lino, canapa o juta. Richiedono pre-mordenzatura con tannini per fissare il pigmento.',
    wofTitle: 'Calcolatrice WOF',
    weightLabel: 'Peso del Capo Asciutto (g)',
    weightUnit: 'g',
    wofEmptyMsg: 'Seleziona un profilo per abilitare i calcoli',
    alumLabel: 'Allume',
    cremLabel: 'Cremor Tartaro',
    ironLabel: 'Ferro (Attenzione)',
    rampTitle: 'Rampa Termica',
    rampEmptyTitle: 'In attesa di selezione',
    rampEmptyDesc: 'Scegli una fibra per vedere il ciclo termico',
    phTitle: 'Stabilizzatore di pH',
    phDesc: 'Fattore critico per la saturazione del colore',
    phVolumeLabel: 'Volume del Bagno (L)',
    phSliderLabel: 'pH Attuale',
    phAcidLabel: 'Acido (1)',
    phAlkalineLabel: 'Alcalino (14)',
    phEmptyMsg: 'Seleziona un profilo per abilitare lo stabilizzatore',
    phStrings: {
      optimal: 'pH ottimale',
      raisePrefix: 'Aggiungere Carbonato di Calcio o Soda Ash. Circa',
      raiseSuffix: 'g per salire a',
      lowerPrefix: 'Aggiungere Acido Citrico o Aceto. Circa',
      lowerSuffix: 'ml per scendere a',
    },
    proteinFibers: [
      { id: 'wool', name: 'Lana / Merino', icon: 'mdi:sheep' },
      { id: 'silk', name: 'Seta', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Cashmere', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Mohair', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaca', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Cotone', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Lino', icon: 'mdi:leaf' },
    ],
  },
};
