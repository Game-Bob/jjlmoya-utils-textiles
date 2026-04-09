import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'sewing-pattern-scaler';
const title = 'Sewing Pattern Scaler Online';
const description =
  'Adjust any sewing pattern to your real measurements. Differential scaling calculator with updated pattern preview.';

const faqData = [
  {
    question: 'Why does the shoulder not grow as much as the chest?',
    answer:
      'The human body is not a sphere. While the torso volume can vary significantly, the skeleton and articulation points like the shoulder are much more static. Professional scaling applies differentiated factors to avoid unbalancing the garment.',
  },
  {
    question: 'What is "ease"?',
    answer:
      'It is the extra space between your body and the fabric. Without ease, you could not move. Our calculator maintains this ease so the garment fits exactly as the designer intended, but adapted to your real contours.',
  },
  {
    question: 'Can I scale a knit or jersey pattern?',
    answer:
      'Yes, but keep in mind that stretch fabrics usually have negative ease. If the pattern is very fitted, make sure the stretch factor is the same in the new fabric you choose.',
  },
];

const howToData = [
  {
    name: 'Measure your pattern',
    text: 'Measure the key horizontal lines (chest, waist and hips) on the paper pieces of your original pattern, seam to seam.',
  },
  {
    name: 'Set the origin',
    text: 'Enter the pattern size or the measurements you have taken in the "Origin" column of our tool.',
  },
  {
    name: 'Enter the target',
    text: 'Put your real measurements or the size you want to reach. The tool will calculate the exact difference per zone.',
  },
  {
    name: 'Apply at the table',
    text: 'Follow the "Cutting Table Actions" instructions to add or remove centimetres from the sides and hems of your pieces.',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
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
      text: 'How to Scale Sewing Patterns: Technical and Practical Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Pattern scaling</strong> is one of the most critical skills in the world of dressmaking. It is not simply about enlarging or reducing a drawing proportionally; it is about adapting a two-dimensional structure to the complex curves and proportions of the human body, which does not grow linearly.',
    },
    {
      type: 'title',
      text: 'What exactly is pattern scaling?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Scaling (or <em>grading</em>) is the technical process of increasing or decreasing the size of a base pattern to create a series of different sizes. Unlike a simple zoom, scaling takes into account that certain parts of the body grow more than others.',
    },
    {
      type: 'title',
      text: 'The Key to Success: Ease',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Movement ease:</strong> The extra centimetres needed to breathe, sit and move your arms without the fabric tearing.',
        '<strong>Design ease:</strong> The centimetres the designer added to create a specific silhouette (e.g. an oversized coat or a floaty blouse).',
      ],
    },
    {
      type: 'tip',
      title: 'Tip for Professional Scaling',
      html: '<p><strong>Do not scale more than two or three sizes:</strong> If you try to go from a size 36 to a size 52, the armhole will likely distort and the neckline will look enormous. In those cases, it is better to redraw the base pattern using your measurements from scratch.</p>',
    },
    {
      type: 'title',
      text: 'Advantages of digital scaling',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Maintains the exact proportion of the original design.',
          con: 'Armholes may require slight manual smoothing.',
        },
        {
          pro: 'Instant calculation of the required ease.',
          con: 'Does not automatically detect whether the pattern already includes seam allowance.',
        },
        {
          pro: 'Graphic visualisation of the piece growth.',
          con: 'Requires a very precise initial measurement.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Differential', definition: 'Measurement difference between two consecutive sizes.' },
        { term: 'Anchor Points', definition: 'Pattern zones that do not move (usually the centre front/back).' },
        { term: 'Grading Nest', definition: 'Overlapping drawing of all scaled sizes.' },
        { term: 'Base Pattern', definition: 'Template without design or ease that matches the body measurements.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'WORKING SYSTEM',
    modeStandard: 'Standard Sizes',
    modeCustom: 'Real Measurements',
    labelPatternSize: 'Pattern Size',
    labelTargetSize: 'Target Size',
    labelOriginMeasures: 'ORIGIN MEASUREMENTS',
    labelTargetMeasures: 'YOUR MEASUREMENTS',
    labelEase: 'Current Ease',
    labelChest: 'Chest',
    labelWaist: 'Waist',
    labelHips: 'Hips',
    labelLength: 'Length',
    resBust: 'Bust',
    resWaist: 'Waist',
    resHips: 'Hips',
    resLength: 'Length',
    actionLatAdd: 'Add',
    actionLatRemove: 'Remove',
    actionLatSuffix: 'to the side of the piece',
    actionLatNote: 'Quarter-pattern adjustment',
    actionLenExtend: 'Lengthen the pattern',
    actionLenShorten: 'Shorten the pattern',
    actionLenNote: 'Adjustment at the hem line',
    legendOriginal: 'Original',
    legendUpdated: 'Updated',
    warnText: 'Scaling more than 3 sizes. Risk of armhole distortion.',
    sizePrefix: 'Size',
  },
};
