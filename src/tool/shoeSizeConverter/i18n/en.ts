import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'shoe-size-converter';
const title = 'International Shoe Size Converter';
const description =
  'Convert shoe sizes between US, European (EU), UK and centimetre (CM) systems. Size guide for men and women.';

const faqData = [
  {
    question: 'How do I find my shoe size in the United States (US)?',
    answer:
      'For men, the US size is usually one unit larger than the UK. For women, the scale is different. The most accurate method is to measure your foot in centimetres and use our converter to get your exact US number.',
  },
  {
    question: 'What is the difference between UK and US shoe sizes?',
    answer:
      'Although both use the imperial system, their starting points differ. Generally, a size 8 UK equals a size 9 US in men\'s footwear.',
  },
  {
    question: 'How do I measure my foot to find the CM size?',
    answer:
      'Place your heel against a wall, mark where your longest toe ends and measure the distance. That measurement in centimetres (CM) is the most reliable for buying shoes from international brands.',
  },
];

const howToData = [
  {
    name: 'Choose Gender',
    text: 'Select whether you are looking for men\'s or women\'s sizes, as the scales differ.',
  },
  {
    name: 'Select Region',
    text: 'Indicate the size system you know (EU, US, UK or CM).',
  },
  {
    name: 'Pick Your Number',
    text: 'Use the selector or click directly on the size grid.',
  },
  {
    name: 'View Equivalences',
    text: 'Instantly get the corresponding number in all other world regions.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
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
      text: 'Shoe Size Converter: Complete International Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Buying footwear from international stores can be a logistical challenge. The <strong>shoe size converter</strong> is an essential tool to avoid unnecessary returns and ensure every purchase is a success.',
    },
    {
      type: 'title',
      text: 'How do shoe size equivalences work?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The world of footwear is not unified. Historically, each region developed its own system based on local units of measurement such as inches or the "Paris point".',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU sizes (Europe):</strong> Based on the "Paris point", equivalent to 2/3 of a centimetre. The most common system in Spain and much of the continent.</span>',
        '<span><strong>US sizes (United States):</strong> Use inches with a different starting point for men\'s and women\'s shoes.</span>',
        '<span><strong>UK sizes (United Kingdom):</strong> Also imperial-based, but with scales that are typically one unit smaller than US for the same foot.</span>',
        '<span><strong>CM / Mondopoint size:</strong> The most precise. Uses the actual foot length in centimetres directly.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Guide to measuring your foot and finding your exact size',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Before using the converter, it is vital to know your actual foot measurement. The fundamental measurement is the length from your heel to your longest toe.',
    },
    {
      type: 'tip',
      title: 'Professional Tip',
      html: 'Measure your feet at the end of the day. Feet tend to swell with activity and heat, so a morning measurement could result in shoes that feel tight in the afternoon.',
    },
    {
      type: 'title',
      text: 'Why sizes vary between sneaker brands',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Why are you a 42 in Nike but a 41 1/3 in Adidas? Brands use their own "lasts" (3D foot models). Some sports brands tend to run small, requiring you to size up by half a number.',
    },
  ],
  ui: {
    genderMenTitle: "Men's Footwear",
    genderWomenTitle: "Women's Footwear",
    regionLabel: 'Your Size System',
    regionEU: 'Europe (EU)',
    regionUS: 'United States (US)',
    regionUK: 'United Kingdom (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Select Your Size',
    gridDesc: 'Click to see international equivalences',
    labelEU: 'Europe (EU)',
    labelUS: 'United States (US)',
    labelUK: 'United Kingdom (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: 'The <strong>CM</strong> size represents the physical length of the foot. It is the most reliable method for buying shoes from international brands.',
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
