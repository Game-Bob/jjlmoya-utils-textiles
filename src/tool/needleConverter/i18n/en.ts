import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'knitting-needle-converter';
const title = 'Knitting and Crochet Needle Converter';
const description =
  'Convert needle sizes between Metric (mm), US and UK systems with yarn weight recommendations and WPI.';

const faqData = [
  {
    question: 'Why are there different needle sizing systems?',
    answer:
      'Historically, each country developed its own system. The metric system (mm) is the most precise international standard. The US system uses progressive numbering (0-50), while the UK system uses reverse numbering: the higher the number, the finer the needle.',
  },
  {
    question: 'Are crochet and knitting US sizes the same?',
    answer:
      'Not exactly. US crochet hooks usually have an associated letter (e.g. H-8) and there are specific variations for small sizes. Additionally, steel hooks for fine threads use a completely different numbering system.',
  },
  {
    question: 'What needle should I choose if my pattern uses a size with no exact equivalent?',
    answer:
      'If a pattern calls for a size like 7.0mm and your system only goes from 6.5mm to 8.0mm, it is always recommended to make a gauge swatch. A 0.5mm difference can significantly alter the final size of the garment.',
  },
  {
    question: 'What is WPI (Wraps Per Inch)?',
    answer:
      'It is the number of yarn wraps that fit in one inch. It is the most reliable method to identify the weight of an unlabelled yarn and determine the most suitable needle for it.',
  },
];

const howToData = [
  {
    name: 'Select the craft type',
    text: 'Choose between knitting or crochet to see the correct US system equivalences.',
  },
  {
    name: 'Pick the size on the visual selector',
    text: 'Tap the circle corresponding to your needle size. The holes have a real mathematical proportion to the millimetre value.',
  },
  {
    name: 'Read the equivalences',
    text: 'Check the real-time results: millimetres, US size and UK size, along with the recommended yarn category and its WPI.',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Technical Guide to Knitting and Crochet Needles: Systems, Gauges and Equivalences',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The globalisation of digital patterns has made it essential to understand the differences between the <strong>metric decimal system</strong>, the <strong>US standard</strong> and the <strong>UK imperial system</strong>. This tool converts between all three systems and offers yarn weight recommendations using the WPI method.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Works Offline', icon: 'mdi:wifi-off' },
        { value: 'Triple', label: 'Full Sync', icon: 'mdi:sync' },
        { value: 'WPI', label: 'Yarn Analysis', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'The Complexity of International Systems',
      level: 3,
    },
    {
      type: 'table',
      headers: ['System', 'Basis', 'Main Region', 'Technical Characteristics'],
      rows: [
        ['<strong>Metric (mm)</strong>', 'Exact diameter in mm', 'Europe / International', 'The most reliable ISO standard. Constant increments of 0.25mm or 0.50mm.'],
        ['<strong>US</strong>', 'Progressive Numbering', 'North America', 'Uses numbers from 0 to 50. For crochet, numbers are associated with letters (B-1, G-6).'],
        ['<strong>UK (Imperial)</strong>', 'Reverse Numbering', 'UK / Australia', 'Based on wire drawing gauge. Higher number means finer needle (14 is fine, 0 is thick).'],
      ],
    },
    {
      type: 'title',
      text: 'Yarn Identification Using the WPI Method',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace (18-22+ WPI):</strong> Ultra-fine threads for silk or mohair lace. Needles from 1.5mm to 2.5mm.',
        '<strong>Fingering / Baby (14-16 WPI):</strong> The standard for socks and baby garments. Optimal needles 2.75mm to 3.25mm.',
        '<strong>Sport / Fine (12-14 WPI):</strong> Medium-fine weight, ideal for lightweight jackets. Needles 3.5mm to 3.75mm.',
        '<strong>DK / Light Worsted (11-13 WPI):</strong> The most versatile weight. Needles 4.0mm or 4.5mm.',
        '<strong>Worsted / Aran (9-10 WPI):</strong> Heavy yarn for winter jumpers. Needles 5.0mm to 5.5mm.',
        '<strong>Bulky / Chunky (7-8 WPI):</strong> Large gauge yarns for quick projects. Needles 6.0mm to 8.0mm.',
        '<strong>Super Bulky (5-6 WPI):</strong> Giant fibres for home décor or scarves. Needles 9.0mm to 15.0mm.',
      ],
    },
    {
      type: 'tip',
      title: 'Pro Tip: Steel Crochet Hooks',
      html: '<p>There is a special family of hooks for extremely fine mercerised cotton thread. These are <strong>Steel Hooks</strong>. Unlike aluminium hooks, their numbering is specific and reverse: a #14 steel hook (0.6mm) is much finer than a #00 (3.5mm). Never use the standard crochet table for these gauges.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Checklist for Getting the Right Gauge',
      icon: 'mdi:check-circle-outline',
      badge: 'Technical Validation',
      html: '<p>Follow these steps before starting a long-term project:</p><ul><li><strong>Personal Tension:</strong> If you knit tightly, go up 0.5mm. If loosely, go down 0.5mm.</li><li><strong>Needle Material:</strong> Bamboo for slippery yarns; Metal for rough wools.</li><li><strong>Fibre Type:</strong> Cotton does not give; Merino wool expands with blocking.</li><li><strong>Gauge Swatch:</strong> Knit a 10x10cm square and wash it before measuring the final gauge.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'The Metric system is universal and avoids rounding errors between manufacturers.',
          con: 'Many old and historical patterns do not include millimetre measurements.',
        },
        {
          pro: 'The US system makes it easy to memorise standard sizes for American patterns.',
          con: 'Crochet letters are not always consistent between brands (e.g. US G can be 4mm or 4.25mm).',
        },
        {
          pro: 'The WPI system allows unlabelled yarns to be recycled in a technical and professional way.',
          con: 'Requires very meticulous manual measurement to avoid skewing the result.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'A sample square (typically 10x10cm) knitted before starting a project to validate the real gauge.' },
        { term: 'Hook Throat', definition: 'The throat of the crochet hook. Its depth determines how much yarn load the hook can handle.' },
        { term: 'Block Testing', definition: 'Process of wetting and stretching knitted fabric so fibres relax and reveal their true final size.' },
      ],
    },
    {
      type: 'summary',
      title: 'Critical Factors for Project Success',
      items: [
        'The right needle will dictate not only size but the durability of the garment against friction.',
        'Use our converter to validate patterns from American or British magazines in seconds.',
        'If you cannot find the exact equivalent, opt for the higher or lower gauge based on your tension swatch.',
        'Crochet uses approximately 30% more yarn than knitting with the same needle.',
        'Clean metal needles regularly to maintain optimal sliding speed.',
      ],
    },
  ],
  ui: {
    labelSystem: 'WORKING SYSTEM',
    modeKnitting: 'Knitting',
    modeCrochet: 'Crochet',
    calibratorLabel: 'PRECISION GAUGE (REAL SCALE)',
    calibratorDesc: 'Select a diameter to see equivalences in real time. The holes have a real mathematical proportion to the millimetre value.',
    tagMetric: 'Metric (mm)',
    tagUS: 'US System',
    tagUK: 'UK System',
    yarnLabel: 'IDEAL YARN WEIGHT',
    wpiFormat: '{wpi} WPI (Wraps per inch)',
    tableSectionLabel: 'TECHNICAL EQUIVALENCE CATALOGUE',
    tableMetric: 'METRIC',
    tableUS: 'US SIZE',
    tableUK: 'UK / IMPERIAL',
    tableYarn: 'YARN CATEGORY',
  },
};
