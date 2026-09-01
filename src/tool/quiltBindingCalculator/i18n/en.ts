import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { QuiltBindingCalculatorUI } from '../ui';

const slug = 'quilt-binding-length-and-strip-calculator';
const title = 'Quilt Binding Length and Strip Calculator';
const description = 'Calculate the binding length, strip count, fabric cut size, and joining plan for a rectangular quilt with a visible waste allowance.';

const faq = [
  {
    question: 'What measurements do I need for quilt binding?',
    answer: 'Enter the finished quilt width and length, the number of corners, the strip width you will cut, the usable fabric width, and your seam allowance. Choose diagonal or straight joins and a safety allowance.',
  },
  {
    question: 'How is the binding length calculated?',
    answer: 'The calculator starts with the rectangular perimeter, adds a reserve for each corner and the final join, then adds the selected safety allowance. It keeps the reserves visible so you can inspect the plan.',
  },
  {
    question: 'Why does the number of strips change with the joining method?',
    answer: 'A diagonal join crosses the full width of a binding strip and consumes more length than a straight join. The model subtracts that joining loss from each connection before counting the strips.',
  },
  {
    question: 'What should I enter for fabric width?',
    answer: 'Enter the usable cuttable width after removing selvedges. For quilting cotton this is often close to 110 cm or 42 inches, but measure your fabric instead of relying on a nominal width.',
  },
  {
    question: 'Can this calculator handle curved or irregular quilts?',
    answer: 'It is designed for a measured perimeter represented by a width, length, and corner count. Curves, scallops, directional fabric, and unusual corners need a larger manual allowance and a final tape measurement.',
  },
];

const howTo = [
  {
    name: 'Measure the finished quilt',
    text: 'Measure the top after quilting or trimming. Enter the width and length in the active unit system and use the corner count to describe the edge you will bind.',
  },
  {
    name: 'Describe the binding strips',
    text: 'Enter the strip width you plan to cut, the usable fabric width, and the seam allowance used to join and attach the binding.',
  },
  {
    name: 'Choose the joining reserve',
    text: 'Use diagonal joins for the common low-bulk mitered connection or straight joins when that is your construction method. Select five, ten, or fifteen percent safety allowance.',
  },
  {
    name: 'Read and check the cutting plan',
    text: 'Cut the displayed number of strips at the displayed width by usable fabric width. Compare the joined length and surplus with your actual fabric before cutting.',
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

const ui: QuiltBindingCalculatorUI = {
  unitLabel: 'Measurement system',
  metricLabel: 'Metric cm',
  imperialLabel: 'Imperial in',
  stageLabel: 'The binding route',
  controlsLabel: 'Set the cut',
  dimensionsLabel: 'Finished quilt',
  fabricLabel: 'Binding fabric',
  methodLabel: 'Join method',
  safetyLabel: 'Safety allowance',
  widthLabel: 'Quilt width',
  lengthLabel: 'Quilt length',
  cornersLabel: 'Corners',
  stripWidthLabel: 'Strip width',
  fabricWidthLabel: 'Usable fabric width',
  seamAllowanceLabel: 'Seam allowance',
  diagonalLabel: 'Diagonal join',
  straightLabel: 'Straight join',
  safetyFive: '5 percent',
  safetyTen: '10 percent',
  safetyFifteen: '15 percent',
  widthHint: 'edge to edge',
  lengthHint: 'edge to edge',
  cornersHint: 'usually 4',
  stripWidthHint: 'width to cut',
  fabricWidthHint: 'after selvedges',
  seamAllowanceHint: 'per sewn edge',
  resultLabel: 'Your cutting plan',
  emptyResult: 'Enter positive measurements to draw the route.',
  perimeterLabel: 'Quilt perimeter',
  requiredLabel: 'Binding to prepare',
  stripsLabel: 'Strips to cut',
  cutSizeLabel: 'Each strip',
  joinedLengthLabel: 'Joined length',
  surplusLabel: 'Surplus after joins',
  joinsLabel: 'Joins to sew',
  cuttingPlanLabel: 'Cutting plan',
  readyBadge: 'Plan is ready to check',
  reviewBadge: 'Review the allowance',
  warningLargeWaste: 'The selected allowance is generous. Check whether your fabric needs that much reserve.',
  warningSmallSurplus: 'The final surplus is close to one joining loss. Measure the quilt again before cutting.',
  invalidMessage: 'Use positive dimensions, a usable fabric width wider than the strip, and a valid corner count.',
  reset: 'Reset example',
  copySummary: 'Copy cutting plan',
  copied: 'Cutting plan copied',
  formulaTitle: 'Open the method notes',
  formulaText: 'Perimeter is 2 x (width + length). The model adds two seam allowances for every corner, a joining reserve based on the selected method, and the chosen safety percentage. Strip count is the smallest whole number whose joined length reaches the required binding length.',
  noteTitle: 'Planning boundary.',
  noteText: 'This is a transparent plan for straight edged quilts. It does not replace measuring an irregular edge, checking directional fabric, or testing the actual binding on your project.',
  canvasAlt: 'A continuous binding ribbon wraps the quilt and shows the strips that will be joined.',
};

export const content: ToolLocaleContent<QuiltBindingCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Calculate quilt binding before you cut', level: 2 },
    {
      type: 'paragraph',
      html: 'Binding is a small finishing step with a surprisingly unforgiving failure mode. If the joined strip runs short at the last corner, the whole preparation has to stop. This calculator turns the finished quilt perimeter into a cut list that includes the corners, the final join, joining losses, and a safety allowance you can inspect.',
    },
    {
      type: 'title',
      text: 'What the calculator measures',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The width and length describe the finished edge, not the backing or the batting. The corner count lets the plan reserve extra handling length for each turn. The strip width and usable fabric width then convert the required continuous binding into a whole number of strips cut across the fabric.',
    },
    {
      type: 'table',
      headers: ['Input', 'Changes in the plan', 'Check before cutting'],
      rows: [
        ['Finished width and length', 'The perimeter around the quilt', 'Measure after trimming and quilting'],
        ['Corner count', 'The handling reserve for turns', 'Add more for scallops or unusual corners'],
        ['Strip and fabric width', 'The number and size of cut strips', 'Remove selvedges from usable width'],
        ['Join method and seam allowance', 'Length lost at each connection', 'Use the allowance you will actually sew'],
      ],
    },
    {
      type: 'title',
      text: 'How to read the cutting plan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Binding to prepare is the target continuous length after the perimeter and reserves are combined. Strips to cut is rounded up to a whole strip because fabric cannot provide a fraction of a crosswise cut. Joined length shows what those strips provide after the model removes the length consumed by each join.',
    },
    {
      type: 'list',
      items: [
        'Measure the finished edge again if the quilt is not square or the result has only a small surplus.',
        'Use usable fabric width after selvedges, not the number printed on the bolt.',
        'Match the seam allowance in the calculator to the seam allowance you will sew.',
        'Increase the safety allowance for directional fabric, many scrappy joins, curves, or a first attempt.',
      ],
    },
    {
      type: 'tip',
      title: 'What this result cannot promise',
      html: 'The model is intentionally conservative but it cannot see scallops, waves, fabric stretch, directional motifs, or a quilt that is not truly rectangular. Treat the plan as a cutting decision aid, then lay the joined strip around the project before trimming the final connection.',
    },
    {
      type: 'title',
      text: 'Diagonal joins and straight joins',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A diagonal connection is common because it spreads bulk across the strip. The calculator treats that seam as consuming the strip width, while a straight connection consumes two seam allowances. These are visible planning assumptions rather than universal sewing laws, so the final surplus is part of the result and not hidden inside a magic constant.',
    },
  ],
};
