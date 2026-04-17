import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'schoenmaat-omrekenen';
const title = 'Schoenmaat Omrekentabel';
const description = 'Reken schoenmaten om tussen de systemen van de Verenigde Staten (US), Europa (EU), het Verenigd Koninkrijk (UK) en centimeters (CM). Maatgids voor dames en heren.';

const faqData = [
  {
    question: 'Hoe weet ik mijn Amerikaanse schoenmaat (US)?',
    answer: 'Voor heren is de Amerikaanse maat (US) meestal één eenheid groter dan de Britse maat (UK). Voor dames is de schaal anders. De meest nauwkeurige manier is om je voet in centimeters te meten en onze calculator te gebruiken om je exacte Amerikaanse maat te bepalen.',
  },
  {
    question: 'Wat is het verschil tussen UK- en US-schoenmaten?',
    answer: 'Hoewel beide het imperiale systeem gebruiken, verschillen hun startpunten. Over het algemeen komt een Britse maat (UK) 8 overeen met een Amerikaanse maat (US) 9 voor herenschoenen.',
  },
  {
    question: 'Hoe meet ik mijn voet om de CM-maat te bepalen?',
    answer: 'Plaats je hiel tegen een muur, markeer waar je langste teen eindigt en meet de afstand. Deze maat in centimeters (CM) is het meest betrouwbaar voor het kopen van schoenen van internationale merken.',
  },
];

const howToData = [
  {
    name: 'Kies Geslacht',
    text: 'Selecteer of je maten zoekt voor heren of dames, aangezien de schalen variëren.',
  },
  {
    name: 'Selecteer Regio',
    text: 'Geef het maatsysteem aan dat je kent (EU, US, UK of CM).',
  },
  {
    name: 'Kies je Maat',
    text: 'Gebruik de kiezer of klik rechtstreeks in het raster van de Europese maten.',
  },
  {
    name: 'Bekijk Equivalenten',
    text: 'Krijg direct de bijbehorende maat in de andere regio\'s van de wereld.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
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
      text: 'Schoenmaat Omrekentabel: Volledige Internationale Gids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Schoenen kopen in internationale winkels kan een logistieke uitdaging zijn. De <strong>schoenmaat calculator</strong> is een essentieel hulpmiddel om onnodige retourneringen te voorkomen en ervoor te zorgen dat elke aankoop, of het nu op Amazon, AliExpress of bij een gespecialiseerde sportwinkel is, een succes is.',
    },
    {
      type: 'title',
      text: 'Hoe werken de schoenmaat equivalenten?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De wereld van schoenen is niet eenduidig. Historisch gezien heeft elke regio zijn eigen systeem ontwikkeld op basis van lokale meeteenheden zoals inches of de "Franse maat" (Paris point).',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU Maten (Europa):</strong> Gebaseerd op de "Franse maat", die gelijk is aan 2/3 van een centimeter. Dit is het meest voorkomende systeem in Nederland.</span>',
        '<span><strong>US Maten (Verenigde Staten):</strong> Gebruiken inches met een verschillend startpunt voor heren en dames.</span>',
        '<span><strong>UK Maten (Verenigd Koninkrijk):</strong> Ook in het imperiale systeem, maar met schalen die één eenheid lager liggen dan die van de VS.</span>',
        '<span><strong>CM Maat / Mondopoint:</strong> De meest nauwkeurige. Gebruikt rechtstreeks de lengte van de voet in centimeters.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Gids voor het meten van je voet voor je exacte maat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Voordat je de calculator gebruikt, is het van vitaal belang om de werkelijke maat van je voet te kennen. Voor schoenen is de fundamentele maat de lengte van de voet van de hiel tot de langste teen.',
    },
    {
      type: 'tip',
      title: 'Professioneel Advies',
      html: 'Meet je voeten aan het einde van de dag. Voeten hebben de neiging op te zwellen door activiteit en warmte, waardoor een meting in de ochtend kan resulteren in schoenen die in de middag te strak zitten.',
    },
    {
      type: 'title',
      text: 'Waarom maten variëren tussen verschillende sneakermerken',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Waarom heb je maat 42 bij Nike maar 41 1/3 bij Adidas? Merken gebruiken hun eigen "leesten". Sommige sportmerken vallen klein uit, waardoor je een halve maat groter moet kopen dan gebruikelijk.',
    },
  ],
  ui: {
    genderMenTitle: 'Herenschoenen',
    genderWomenTitle: 'Damesschoenen',
    regionLabel: 'Jouw Maatsysteem',
    regionEU: 'Europa (EU)',
    regionUS: 'Verenigde Staten (US)',
    regionUK: 'Verenigd Koninkrijk (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Selecteer je Maat',
    gridDesc: 'Klik om internationale equivalenten te zien',
    labelEU: 'Europa (EU)',
    labelUS: 'VS (US)',
    labelUK: 'Verenigd Koninkrijk (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: 'De <strong>CM-maat</strong> vertegenwoordigt de fysieke lengte van de voet. Het is de meest betrouwbare methode om sneakers van internationale merken te kopen.',
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
