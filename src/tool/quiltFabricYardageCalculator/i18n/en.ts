import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { QuiltFabricYardageCalculatorUI } from '../ui';

const slug = 'quilt-fabric-yardage-calculator';
const title = 'Quilt Fabric Yardage Calculator for Blocks and Backing';
const description = 'Estimate fabric for square quilt blocks and backing panels with seam allowance, cutting waste, metric and imperial units, and an efficient backing layout.';

const faq = [
  {
    question: 'What fabric does this quilt yardage calculator estimate?',
    answer: 'It estimates one fabric used for all square blocks in the quilt top and a separate fabric for the backing. It does not combine several colorways or calculate batting and binding.',
  },
  {
    question: 'Why is the cut square larger than the finished block?',
    answer: 'A finished block is the visible size after sewing. The cut square adds the selected seam allowance to both edges, so its cut dimension is the finished size plus two seam allowances.',
  },
  {
    question: 'How are backing panels calculated?',
    answer: 'The calculator adds the selected overhang around the quilt, accounts for fabric lost in panel seams, and compares lengthwise and crosswise layouts. It shows the orientation that consumes less fabric length.',
  },
  {
    question: 'Can I calculate several fabrics in one patchwork design?',
    answer: 'Use the result for one fabric at a time. Enter the number of blocks represented by that fabric through a compatible grid or calculate each color group separately from the same cut square size.',
  },
  {
    question: 'Should I buy exactly the displayed amount?',
    answer: 'Use it as a cutting estimate and round up to the increment sold by your shop. Directional prints, large repeats, fussy cutting, shrinkage, cutting errors, and pattern instructions can require more fabric.',
  },
];

const howTo = [
  {
    name: 'Set the finished quilt size',
    text: 'Choose a preset or enter the finished width and length of the quilt top in the active unit system.',
  },
  {
    name: 'Describe the blocks and fabric',
    text: 'Enter the finished square block size, usable fabric width after removing selvedges, and the seam allowance used on each edge.',
  },
  {
    name: 'Set backing and cutting allowances',
    text: 'Enter the extra backing required on every side and choose a cutting waste allowance of five, ten, or fifteen percent.',
  },
  {
    name: 'Read the two purchase amounts',
    text: 'Use the top yardage for the square blocks and the backing yardage for the selected panel layout. Round each amount up to the shop selling increment.',
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

const ui: QuiltFabricYardageCalculatorUI = {
  unitLabel: 'Measurement system',
  metricLabel: 'Metric cm',
  imperialLabel: 'Imperial in',
  stageLabel: 'Cutting map',
  controlsLabel: 'Plan the quilt',
  presetLabel: 'Common quilt sizes',
  customPreset: 'Custom',
  cribPreset: 'Crib',
  throwPreset: 'Throw',
  twinPreset: 'Twin',
  queenPreset: 'Queen',
  kingPreset: 'King',
  quiltWidthLabel: 'Finished width',
  quiltLengthLabel: 'Finished length',
  blockSizeLabel: 'Finished square block',
  fabricWidthLabel: 'Usable fabric width',
  seamAllowanceLabel: 'Seam allowance',
  backingExtraLabel: 'Backing extra per side',
  wasteLabel: 'Top cutting allowance',
  widthHint: 'finished edge to edge',
  lengthHint: 'finished edge to edge',
  blockHint: 'visible block size',
  fabricHint: 'after selvedges',
  seamHint: 'on every block edge',
  backingHint: 'extra on all four sides',
  wasteFive: '5 percent',
  wasteTen: '10 percent',
  wasteFifteen: '15 percent',
  resultLabel: 'Fabric purchase plan',
  emptyResult: 'Enter positive measurements to draw the cutting map.',
  blocksLabel: 'Blocks to cut',
  gridLabel: 'Block grid',
  cutSquareLabel: 'Cut square',
  piecesAcrossLabel: 'Squares across fabric',
  topYardageLabel: 'Fabric for top',
  backingYardageLabel: 'Fabric for backing',
  backingPanelsLabel: 'Backing panels',
  backingLayoutLabel: 'Backing orientation',
  lengthwiseLabel: 'Lengthwise panels',
  crosswiseLabel: 'Crosswise panels',
  totalYardageLabel: 'Top and backing total',
  readyBadge: 'Cutting plan ready',
  reviewBadge: 'Review the plan',
  warningPartialBlocks: 'The finished dimensions are not whole multiples of the block size. The outside row or column needs trimmed blocks or a border plan.',
  warningNarrowFabric: 'Only one square fits across the usable fabric. A wider fabric or smaller block may reduce the top yardage.',
  invalidMessage: 'Use positive dimensions and fabric wide enough to hold at least one cut square.',
  reset: 'Reset example',
  copyPlan: 'Copy purchase plan',
  copied: 'Purchase plan copied',
  formulaTitle: 'Open the calculation notes',
  formulaText: 'Columns and rows are rounded up from finished quilt dimensions divided by finished block size. The cut square adds two seam allowances. The top length is the number of cutting passes times the cut square, plus the selected waste allowance. The backing compares two panel orientations after seam losses.',
  boundaryTitle: 'Planning boundary.',
  boundaryText: 'This model assumes equal square blocks cut from one top fabric. It does not model sashing, borders, multiple colorways, directional repeats, fussy cutting, batting, or binding.',
  canvasAlt: 'A patchwork grid sits beside the most efficient backing panel layout.',
};

export const content: ToolLocaleContent<QuiltFabricYardageCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Estimate quilt fabric before choosing the bolt length', level: 2 },
    {
      type: 'paragraph',
      html: 'A quilt top and its backing answer two different cutting questions. The top needs enough rows of cut squares to supply every block, while the backing may need several full length panels joined together. This calculator keeps those purchases separate, then shows their combined total for budgeting.',
    },
    { type: 'title', text: 'How square block yardage is calculated', level: 3 },
    {
      type: 'paragraph',
      html: 'The finished block size is not the cutting size. Seam allowance is added on both sides before the calculator checks how many squares fit across the usable fabric width. The total block count is divided by that capacity and rounded up to a whole number of cutting passes. A visible waste allowance is applied only after this cut layout is known.',
    },
    {
      type: 'table',
      headers: ['Input', 'What it controls', 'Measure this way'],
      rows: [
        ['Finished quilt size', 'Rows and columns in the top', 'Use the intended sewn size'],
        ['Finished square block', 'Number of blocks and cut square size', 'Exclude seam allowance'],
        ['Usable fabric width', 'Squares per cutting pass and backing panels', 'Remove selvedges first'],
        ['Backing extra', 'Working space around the quilt top', 'Enter the extra required on every side'],
      ],
    },
    { type: 'title', text: 'Why the backing layout can rotate', level: 3 },
    {
      type: 'paragraph',
      html: 'A backing wider than the fabric must be pieced. The calculator tests panels running with the quilt length and panels rotated across it, subtracting the selected seam allowance where panels join. It chooses the option that consumes less length from the bolt, but the displayed orientation remains a suggestion rather than a construction rule.',
    },
    {
      type: 'list',
      items: [
        'Measure usable width after removing selvedges instead of trusting the nominal bolt width.',
        'Round each purchase amount up to the fraction of a yard or metre sold by your shop.',
        'Increase the allowance for directional prints, large repeats, shrinkage, or fussy cutting.',
        'Review any warning about partial edge blocks before buying fabric or cutting the first square.',
      ],
    },
    { type: 'title', text: 'Separate the estimate from the final pattern', level: 3 },
    {
      type: 'paragraph',
      html: 'This estimate is strongest for a simple grid made from equal square blocks and one fabric. A real pattern may distribute several fabrics across the same grid, add sashing or borders, or specify a backing seam placement for strength and appearance. Use the calculator to test quantities, then reconcile the result with the pattern cut list.',
    },
    {
      type: 'tip',
      title: 'What this result cannot promise',
      html: 'Fabric behaves differently after washing and printing, shops sell in different increments, and motifs may force inefficient cuts. The result does not replace a pattern specific cutting diagram. It gives a transparent baseline so you can see where extra fabric enters the plan.',
    },
  ],
};
