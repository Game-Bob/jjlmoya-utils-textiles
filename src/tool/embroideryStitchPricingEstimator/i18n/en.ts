import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { EmbroideryStitchPricingEstimatorUI } from '../ui';

const slug = 'embroidery-stitch-count-pricing-estimator';
const title = 'Embroidery Stitch Count and Pricing Estimator';
const description = 'Estimate embroidery stitch count, production time, and a base price from design size, stitch density, colours, speed, and hourly rate.';

const faq = [
  {
    question: 'How does the embroidery stitch count estimate work?',
    answer: 'The estimator multiplies the design area by the square of the stitch density, then applies a stitch type factor. This creates an equivalent stitch count for comparing production effort, not a machine file prediction.',
  },
  {
    question: 'Why does the stitch type change the estimate?',
    answer: 'Running, satin, fill, and tatami stitches place thread differently. The tool uses a transparent relative factor so denser coverage shows a larger production estimate.',
  },
  {
    question: 'Does the colour count change the number of stitches?',
    answer: 'No. Colour count adds changeover time only. The current model allows 1.75 minutes for each change after the first colour, which you can treat as a planning assumption.',
  },
  {
    question: 'Is the calculated price a quote?',
    answer: 'No. It is a base labour estimate using the hourly rate you enter. Thread, stabiliser, digitising, machine setup, finishing, overhead, tax, and profit margin are not included.',
  },
];

const howTo = [
  {
    name: 'Measure the design',
    text: 'Enter the finished embroidery width and height in centimetres. Use the stitched area rather than the full hoop size.',
  },
  {
    name: 'Describe the stitch plan',
    text: 'Choose the dominant stitch type, enter the density in stitches per centimetre, and count the thread colours.',
  },
  {
    name: 'Add production assumptions',
    text: 'Enter the machine speed in stitches per minute and your labour rate per hour. Keep the rate in one consistent currency unit.',
  },
  {
    name: 'Read the planning estimate',
    text: 'Use the equivalent stitches, production time, setup time, and base price to compare designs before digitising or quoting.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

const ui: EmbroideryStitchPricingEstimatorUI = {
  intro: 'Shape a stitch plan on the embroidery hoop, then see the production effort and labour value it carries.',
  stageLabel: 'The stitch hoop',
  controlsLabel: 'Build the stitch plan',
  resultLabel: 'Base labour estimate',
  widthLabel: 'Design width',
  heightLabel: 'Design height',
  densityLabel: 'Stitch density',
  stitchLabel: 'Dominant stitch',
  coloursLabel: 'Thread colours',
  speedLabel: 'Machine speed',
  rateLabel: 'Hourly rate',
  widthHint: 'cm stitched area',
  heightHint: 'cm stitched area',
  densityHint: 'stitches per cm',
  coloursHint: 'first colour needs no changeover',
  speedHint: 'stitches per minute',
  rateHint: 'your currency per hour',
  stitchRunning: 'Running stitch',
  stitchSatin: 'Satin stitch',
  stitchFill: 'Fill stitch',
  stitchTatami: 'Tatami fill',
  stitchRunningNote: 'Light outlines and lettering with low coverage.',
  stitchSatinNote: 'Smooth columns and borders with a focused thread path.',
  stitchFillNote: 'Solid coverage that adds thread and production effort.',
  stitchTatamiNote: 'Layered fill with the highest planning factor in this model.',
  selectStitch: 'Choose a stitch type',
  emptyResult: 'Enter a stitch plan to wake the hoop.',
  stitchesUnit: 'equivalent stitches',
  minutesUnit: 'minutes',
  hoursUnit: 'hours',
  priceUnit: 'currency units',
  areaLabel: 'Stitched area',
  effectiveLabel: 'Equivalent stitches',
  stitchTimeLabel: 'Stitching time',
  productionLabel: 'Production time',
  setupLabel: 'Colour setup',
  changesLabel: 'Colour changes',
  basePriceLabel: 'Base labour estimate',
  estimateBadge: 'Estimate ready',
  attentionBadge: 'Review scale',
  warningHighVolume: 'Large stitch volume. Use a real machine sample before quoting.',
  warningLongRun: 'Long production run. Check hooping, breaks, and finishing time separately.',
  invalidMessage: 'Use positive values for size, density, speed, and hourly rate.',
  formulaTitle: 'What is counted',
  formulaText: 'Area x density squared gives a coverage baseline. The stitch factor turns it into equivalent stitches, while colour changes add 1.75 minutes each after the first colour.',
  noteTitle: 'Planning boundary',
  noteText: 'This is a transparent estimator, not a digitised machine file or a finished quote. Add materials, setup, finishing, overhead, tax, and margin yourself.',
  reset: 'Reset example',
  copied: 'Summary copied',
  copySummary: 'Copy summary',
  canvasAlt: 'A fabric embroidery hoop with thread lines showing the current density',
};

export const content: ToolLocaleContent<EmbroideryStitchPricingEstimatorUI> = {
  slug,
  title,
  description,
  ui,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'How to Estimate Embroidery Stitch Count and Labour Price', level: 2 },
    {
      type: 'paragraph',
      html: 'An embroidery design has two different planning questions: how much thread work the motif contains, and how long the machine and operator will be occupied. This estimator keeps those questions visible. It turns a stitched width, height, density, dominant stitch, colour count, speed, and hourly rate into a comparable planning figure.',
    },
    {
      type: 'title',
      text: 'The stitch count model',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The baseline is the stitched area multiplied by the square of the density in stitches per centimetre. A relative factor then accounts for the selected stitch family: running stitch is lighter, satin is the reference, and fill and tatami are progressively denser planning cases. This is an estimate of equivalent work, not the exact count exported by digitising software.',
    },
    {
      type: 'table',
      headers: ['Input', 'What it changes', 'What it does not promise'],
      rows: [
        ['Width and height', 'Coverage area and baseline stitch count', 'The exact outline of a digitised file'],
        ['Density and stitch type', 'Equivalent thread work and machine time', 'A universal quality setting for every fabric'],
        ['Colours', 'Changeover time after the first colour', 'The number of needle trims or thread breaks'],
        ['Speed and hourly rate', 'Production duration and labour value', 'A final customer quote'],
      ],
    },
    {
      type: 'title',
      text: 'Turn an estimate into a responsible price',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The displayed price is only labour time multiplied by your hourly rate. A real quote should add digitising or file preparation, thread, stabiliser, hooping, machine setup, test pieces, trims, rework, finishing, overhead, tax, and profit margin. Keep those additions explicit so a low stitch count does not hide a labour intensive preparation step.',
    },
    {
      type: 'tip',
      title: 'Test the plan before quoting',
      html: 'Run a representative sample on the intended fabric and stabiliser. Compare the sample time and thread behaviour with the estimate, then adjust your local speed and setup assumptions rather than pretending the calculator knows every machine.',
    },
    {
      type: 'title',
      text: 'Reading the production breakdown',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Equivalent stitches show the coverage workload after the stitch factor is applied.',
        'Production time is equivalent stitches divided by machine speed.',
        'Colour setup adds 1.75 minutes for each colour change after the first.',
        'Base labour estimate is total production time divided by 60 and multiplied by the hourly rate.',
      ],
    },
  ],
};
