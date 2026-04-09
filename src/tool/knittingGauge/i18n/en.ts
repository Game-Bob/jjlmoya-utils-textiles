import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'knitting-gauge-calculator';
const title = 'Knitting Gauge Calculator';
const description =
  'Easily recalculate stitches and rows for any knitting or crochet pattern. Adjust gauge by multiples and scale factor for a professional result.';

const faqData = [
  {
    question: 'What is gauge or tension in knitting?',
    answer:
      'It is the measure of how many stitches and rows fit in a given area (usually 10x10 cm or 4x4 in). It is fundamental because it determines the final size of the garment based on the needle and yarn used.',
  },
  {
    question: 'How does a gauge change affect size?',
    answer:
      'If your tension has more stitches per centimeter than the pattern, the garment will be smaller. If it has fewer stitches, the garment will be larger. That is why it is vital to recalculate stitches or change needle size.',
  },
  {
    question: 'Why is multiples adjustment important?',
    answer:
      'Many patterns have motifs (lace, cables, designs) that require a specific number of stitches to complete. Our calculator adjusts the total to the nearest multiple so the design is not broken.',
  },
  {
    question: 'Should I wash the swatch before measuring?',
    answer:
      'Yes, always. "Blocking" (washing and shaping) relaxes the fibers and shows the real tension the garment will have after its first use and wash.',
  },
];

const howToData = [
  {
    name: 'Identify the pattern gauge',
    text: 'Find in the pattern instructions how many stitches and rows are indicated for a 10x10 cm or 4x4 inch swatch.',
  },
  {
    name: 'Knit and measure your own swatch',
    text: 'Knit a swatch with your yarn and needles, block it and measure how many stitches and rows you have in that same area.',
  },
  {
    name: 'Configure the calculator',
    text: 'Enter the pattern swatch data and your real swatch data. Add the total stitches for your size and the pattern multiples if any.',
  },
  {
    name: 'Get results',
    text: 'Review the new number of cast-on stitches and the scale factor to know if you also need to adjust the garment length.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Knitting Gauge Calculator Online: Technical Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'If you have ever finished a sweater that seemed designed for a giant or a hat that barely covered the crown, you already know the importance of <strong>gauge or tension</strong>. In the world of knitting and crochet, tension is the relationship between yarn thickness, needle size and the force with which each knitter manipulates the yarn. No two knitters are alike, and therefore no two tensions are identical.',
    },
    {
      type: 'title',
      text: 'Why is Gauge or Tension Vital in Knitting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This knitting gauge calculator is a technical tool designed to eliminate mathematical guesswork and allow you to focus on creativity. By entering the pattern swatch data and your own swatch data, you will get precise stitch and row adjustments, ensuring your finished garment has exactly the measurements you expect.',
    },
    {
      type: 'title',
      text: 'How to use the knitting tension calculator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Knit a swatch:</strong> Do not limit yourself to 10x10 cm. Knit at least 15x15 cm so the edges do not skew the central measurement.',
        '<strong>Block your swatch:</strong> Wash and dry the swatch as you would the finished garment. Many wool fibers expand or grow when wet.',
        '<strong>Measure precisely:</strong> Use a rigid ruler or a 10 cm gauge. Count how many stitches fit horizontally and how many rows fit vertically.',
        '<strong>Enter the data:</strong> Place the pattern values on the left and your real values on the right. The tool will automatically recalculate how many stitches you need to reach the desired width.',
      ],
    },
    {
      type: 'title',
      text: 'Interpreting Results: The Scale Factor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The scale factor is the multiplier we apply to each pattern instruction. If your tension is 22 stitches and the pattern calls for 20, your scale factor is 1.1. This means that to get the same physical width, you need 10% more stitches. A deviation of 0-2% is ideal, 2-10% is moderate, 10-25% requires mandatory recalculation, and more than 25% poses a structural risk.',
    },
    {
      type: 'title',
      text: 'Handling Multiples and Motifs',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'One of the biggest challenges when recalculating a pattern is maintaining the integrity of lace, cables or motifs. If the design repeats every 8 stitches, you cannot simply add 3 extra stitches; you must adjust the total to remain a multiple of 8. The <strong>multiples adjustment</strong> function of this calculator suggests the nearest stitch count that respects the design architecture.',
    },
    {
      type: 'tip',
      title: 'Expert Tip',
      html: '<p>It is usually preferable to use this calculator and work with the natural tension of your yarn, adapting the stitch count rather than forcing the tension by radically changing the needle size, as the latter can alter the drape and softness of the fabric.</p>',
    },
    {
      type: 'title',
      text: 'Advantages of using our adjustment tool',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Automatic stitch and row adjustment with precise scale factor.',
        'Support for complex multiples (X + Y) to maintain motif integrity.',
        'Estimation of grams of yarn needed for the complete project.',
        'Dynamic swatch visualizer showing fabric density in real time.',
      ],
    },
    {
      type: 'card',
      title: 'Gauge / Tension',
      icon: 'mdi:ruler',
      html: 'Number of stitches and rows contained in a <strong>10x10 cm</strong> or <strong>4x4 inch</strong> square. It is the universal reference of all knitting patterns.',
    },
    {
      type: 'card',
      title: 'Blocking',
      icon: 'mdi:water',
      html: 'Process of wetting and shaping the garment to set the stitches. Reveals the <strong>real tension</strong> the garment will have after its first use and wash.',
    },
    {
      type: 'card',
      title: 'Scale Factor',
      icon: 'mdi:scale',
      html: 'Mathematical ratio between the pattern swatch and the knitter\'s real swatch. Determines how many stitches and rows to adjust to maintain the <strong>correct measurements</strong>.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Pattern Gauge',
    sectionMyGauge: 'My Actual Swatch',
    sectionProject: 'Project Structure',
    labelStitches: 'Stitches',
    labelRows: 'Rows',
    labelWidth: 'Width',
    labelLength: 'Length',
    labelUnit: 'Unit of Measure',
    labelNeedle: 'Needle',
    labelNeedleMm: 'Needle (mm)',
    labelWeight: 'Weight (g)',
    labelWeightOptional: 'optional',
    labelPatternSts: 'Pattern Stitches',
    labelPatternRows: 'Pattern Rows',
    labelMultiples: 'Multiples',
    labelMultiplesExample: 'E.g.: 10 + 2',
    labelMultiplesPlaceholder: 'Multiple + Border',
    unitEU: '10 x 10 cm (EU Standard)',
    unitUS: '4 x 4 inches (US Standard)',
    btnClear: 'Clear',
    btnShare: 'Share',
    btnCopied: 'Copied!',
    resSuggestedSts: 'Suggested cast-on stitches',
    resNewRows: 'New Rows',
    resNewRowsTooltip: 'Number of rows needed to match the length of the original pattern with your current tension.',
    resScaleFactor: 'Scale Factor',
    resScaleFactorTooltip: 'Size ratio between your knitting and the pattern. A negative value means your knitting is denser.',
    resSuggestion: 'Suggestion',
    resSuggestionTooltip: 'Technical recommendation to adjust your tension without recalculating every stitch of the pattern.',
    suggestionIdeal: 'Ideal',
    suggestionDown: 'Go Down a Needle',
    suggestionUp: 'Go Up a Needle',
    suggestionDownDetail: 'Use a {n}mm needle or smaller size.',
    suggestionUpDetail: 'Use a {n}mm needle or larger size.',
    multiplesNoteFormat: 'Adjusted from {n} stitches (Mult. {m})',
    yarnTitle: 'Yarn Estimation for the Project',
    yarnResultFormat: 'Estimated yarn: <strong>{g}g</strong>',
    yarnSafetyFormat: '(+{s}g safety margin)',
    alertDanger: 'Extreme difference (>25%). The drape and structure of the garment will be altered.',
  },
};
