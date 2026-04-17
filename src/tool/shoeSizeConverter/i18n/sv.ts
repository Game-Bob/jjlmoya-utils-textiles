import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'skostorleks-konverterare';
const title = 'Konverterare för Skostorlekar';
const description = 'Konvertera skostorlekar mellan system i USA (US), Europa (EU), Storbritannien (UK) och centimeter (CM). Storleksguide för herr- och damskor.';

const faqData = [
  {
    question: 'Hur vet jag min skostorlek i USA (US)?',
    answer: 'För herrar är US-storleken vanligtvis en enhet högre än UK-storleken. För damer är skalan annorlunda. Det mest exakta sättet är att mäta din fot i centimeter och använda vår konverterare för att få ditt exakta US-nummer.',
  },
  {
    question: 'Vad är skillnaden mellan UK- och US-storlekar på skor?',
    answer: 'Även om båda använder det brittiska måttsystemet (imperiala systemet), skiljer sig deras startpunkter. Generellt motsvarar en UK-storlek 8 en US-storlek 9 för herrskor.',
  },
  {
    question: 'Hur mäter jag min fot för att veta CM-storleken?',
    answer: 'Placera hälen mot en vägg, markera var din längsta tå slutar och mät avståndet. Det måttet i centimeter (CM) är det mest tillförlitliga när du köper skor från internationella märken.',
  },
];

const howToData = [
  {
    name: 'Välj kön',
    text: 'Välj om du letar efter storlekar för herrar eller damer, då skalorna varierar.',
  },
  {
    name: 'Välj region',
    text: 'Ange det storlekssystem du känner till (EU, US, UK eller CM).',
  },
  {
    name: 'Välj ditt nummer',
    text: 'Använd väljaren eller klicka direkt i rutnätet för europeiska storlekar.',
  },
  {
    name: 'Se motsvarigheter',
    text: 'Få omedelbart motsvarande nummer i resten av världens regioner.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
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
      text: 'Konverterare för skostorlekar: Komplett internationell guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att köpa skor i internationella butiker kan vara en logistisk utmaning. En <strong>skostorleks-konverterare</strong> är ett oumbärligt verktyg för att undvika onödiga returer och säkerställa att varje köp på Amazon, AliExpress eller i en specialiserad sportbutik blir lyckat.',
    },
    {
      type: 'title',
      text: 'Hur fungerar motsvarigheter för skostorlekar?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Skövärlden är inte enhetlig. Historiskt sett utvecklade varje region sitt eget system baserat på lokala måttenheter som tum eller "Parispunkten".',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU-storlekar (Europa):</strong> Baseras på "Parispunkten", som motsvarar 2/3 centimeter. Det är det vanligaste systemet i Sverige.</span>',
        '<span><strong>US-storlekar (USA):</strong> Använder tum med olika startpunkter för herrar och damer.</span>',
        '<span><strong>UK-storlekar (Storbritannien):</strong> Också i det imperiala systemet, men med skalor som ligger en enhet lägre än de i USA.</span>',
        '<span><strong>CM-storlek / Mondopoint:</strong> Det mest exakta. Använder direkt fotens längd i centimeter.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Guide för att mäta din fot och hitta din exakta storlek',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Innan du använder konverteraren är det viktigt att känna till fotens verkliga mått. För skor är det grundläggande måttet längden på foten från hälen till den längsta tån.',
    },
    {
      type: 'tip',
      title: 'Proffsråd',
      html: 'Mät dina fötter i slutet av dagen. Fötter tenderar att svullna med aktivitet och värme, så ett mått på morgonen kan resultera i skor som klämmer på eftermiddagen.',
    },
    {
      type: 'title',
      text: 'Varför storlekar varierar mellan olika märken på sneakers',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Varför har du 42 i Nike men 41 1/3 i Adidas? Märken använder sina egna läster. Vissa sportmärken tenderar att ha små storlekar, vilket tvingar fram köp av ett halvt nummer större än vanligt.',
    },
  ],
  ui: {
    genderMenTitle: 'Herrskor',
    genderWomenTitle: 'Damskor',
    regionLabel: 'Ditt storlekssystem',
    regionEU: 'Europa (EU)',
    regionUS: 'USA (US)',
    regionUK: 'Storbritannien (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Välj din storlek',
    gridDesc: 'Klicka för att se internationella motsvarigheter',
    labelEU: 'Europa (EU)',
    labelUS: 'USA (US)',
    labelUK: 'Storbritannien (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: 'Storleken <strong>CM</strong> representerar den fysiska längden på foten. Det är den mest tillförlitliga metoden för att köpa sneakers från internationella märken.',
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
