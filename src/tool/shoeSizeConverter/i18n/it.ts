import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'convertitore-taglie-scarpe';
const title = 'Convertitore di Taglie di Scarpe';
const description = 'Converti le taglie delle scarpe tra i sistemi di Stati Uniti (US), Europa (EU), Regno Unito (UK) e centimetri (CM). Guida alle calzature per uomo e donna.';

const faqData = [
  {
    question: 'Come conoscere la mia taglia di scarpe negli Stati Uniti (US)?',
    answer: "Per gli uomini, la taglia US è solitamente un'unità in più rispetto a quella UK. Per le donne, la scala è diversa. Il modo più preciso è misurare il piede in centimetri e usare il nostro convertitore per ottenere il tuo numero US esatto.",
  },
  {
    question: 'Qual è la differenza tra la taglia di scarpe UK e quella US?',
    answer: "Sebbene entrambi usino il sistema imperiale, i loro punti di partenza differiscono. Generalmente, una taglia 8 UK equivale a una taglia 9 US nelle calzature maschili.",
  },
  {
    question: 'Come misurare il mio piede per conoscere la taglia CM?',
    answer: "Posiziona il tallone contro una parete, segna dove finisce il dito più lungo e misura la distanza. Quella misura in centimetri (CM) è la più affidabile per acquistare scarpe di marchi internazionali.",
  },
];

const howToData = [
  {
    name: 'Scegli il Genere',
    text: 'Seleziona se cerchi taglie da uomo o donna, poiché le scale variano.',
  },
  {
    name: 'Seleziona la Regione',
    text: 'Indica il sistema di taglie che conosci (EU, US, UK o CM).',
  },
  {
    name: 'Scegli il tuo Numero',
    text: 'Usa il selettore o clicca direttamente sulla griglia delle taglie europee.',
  },
  {
    name: 'Vedi le Equivalenze',
    text: 'Ottieni istantaneamente il numero corrispondente nelle altre regioni del mondo.',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    { name: 'Shoe size conversion - Wikipedia', url: 'https://en.wikipedia.org/wiki/Shoe_size' },
    { name: 'ISO 9407: Shoe sizes - Mondopoint system', url: 'https://www.iso.org/standard/17157.html' },
    { name: 'Shoe size conversion - Zappos', url: 'https://www.zappos.com/c/shoe-size-conversion' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Convertitore Taglie Scarpe: Guida Internazionale Completa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Acquistare calzature in negozi internazionali può essere una sfida logistica. Il <strong>convertitore di taglie di scarpe</strong> è uno strumento essenziale per evitare resi non necessari e garantire che ogni acquisto, sia su Amazon, AliExpress o in un negozio di sport specializzato, sia un successo.",
    },
    {
      type: 'title',
      text: 'Come funzionano le equivalenze delle taglie di calzature?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il mondo delle calzature non è unificato. Storicamente, ogni regione ha sviluppato il proprio sistema basato su unità di misura locali come i pollici o il "punto di Parigi".',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Taglie EU (Europa):</strong> basate sul "Punto di Parigi", che equivale a 2/3 di centimetro. È il sistema più comune in Italia.</span>',
        '<span><strong>Taglie US (Stati Uniti):</strong> utilizzano i pollici con un punto di partenza diverso per uomini e donne.</span>',
        '<span><strong>Taglie UK (Regno Unito):</strong> anch\'esse nel sistema imperiale, ma con scale un\'unità inferiori rispetto a quelle degli Stati Uniti.</span>',
        '<span><strong>Taglia CM / Mondopoint:</strong> la più precisa. Utilizza direttamente la lunghezza del piede in centimetri.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Guida per misurare il tuo piede e trovare la tua taglia esatta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prima di usare il convertitore, è fondamentale conoscere la misura reale del tuo piede. Per le scarpe, la misura fondamentale è la lunghezza del piede dal tallone fino al dito più lungo.',
    },
    {
      type: 'tip',
      title: 'Consiglio Professionale',
      html: 'Misura i tuoi piedi alla fine della giornata. I piedi tendono a gonfiarsi con l\'attività e il calore, quindi una misura mattutina potrebbe risultare in scarpe che ti stringono nel pomeriggio.',
    },
    {
      type: 'title',
      text: 'Perché le taglie variano tra le marche di sneakers',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Perché porti un 42 in Nike ma un 41 1/3 in Adidas? I marchi utilizzano le proprie "forme". Alcune marche sportive tendono a calzare piccolo, il che obbliga ad acquistare mezzo numero in più rispetto al solito.',
    },
  ],
  ui: {
    genderMenTitle: 'Calzature da Uomo',
    genderWomenTitle: 'Calzature da Donna',
    regionLabel: 'Il Tuo Sistema di Taglia',
    regionEU: 'Europa (EU)',
    regionUS: 'Stati Uniti (US)',
    regionUK: 'Regno Unito (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Seleziona la tua Taglia',
    gridDesc: 'Clicca per vedere le equivalenze internazionali',
    labelEU: 'Europa (EU)',
    labelUS: 'USA (US)',
    labelUK: 'Regno Unito (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: 'La taglia <strong>CM</strong> rappresenta la lunghezza fisica del piede. È il metodo più affidabile per acquistare sneakers di marchi internazionali.',
    menData: [
      { EU: '39', US: '6.5', UK: '6', CM: '24.5' },
      { EU: '40', US: '7.5', UK: '7', CM: '25.0' },
      { EU: '40.5', US: '8', UK: '7.5', CM: '25.5' },
      { EU: '41', US: '8.5', UK: '8', CM: '26.0' },
      { EU: '42', US: '9', UK: '8.5', CM: '26.5' },
      { EU: '42.5', US: '9.5', UK: '9', CM: '27.0' },
      { EU: '43', US: '10', UK: '9.5', CM: '27.5' },
      { EU: '44', US: '10.5', UK: '10', CM: '28.0' },
      { EU: '44.5', US: '11', UK: '10.5', CM: '28.5' },
      { EU: '45', US: '11.5', UK: '11', CM: '29.0' },
      { EU: '46', US: '12', UK: '11.5', CM: '30.0' },
    ],
    womenData: [
      { EU: '35', US: '5', UK: '3', CM: '22.0' },
      { EU: '36', US: '6', UK: '4', CM: '22.5' },
      { EU: '37', US: '6.5', UK: '4.5', CM: '23.5' },
      { EU: '37.5', US: '7', UK: '5', CM: '23.8' },
      { EU: '38', US: '7.5', UK: '5.5', CM: '24.0' },
      { EU: '38.5', US: '8', UK: '6', CM: '24.5' },
      { EU: '39', US: '8.5', UK: '6.5', CM: '25.0' },
      { EU: '40', US: '9', UK: '7', CM: '25.5' },
      { EU: '41', US: '10', UK: '8', CM: '26.5' },
      { EU: '42', US: '11', UK: '9', CM: '27.0' },
    ],
  },
};
