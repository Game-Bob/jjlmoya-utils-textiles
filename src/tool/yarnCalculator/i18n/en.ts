import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'yarn-calculator';
const title = 'Yarn Calculator: How many metres and balls do I need?';
const description =
  'Accurately calculate the amount of yarn needed for your knitting and crochet projects based on pattern and size.';

const faqData = [
  {
    question: 'Why does crochet use more yarn than knitting?',
    answer:
      'Crochet creates overlapping knots and loops, resulting in a denser, thicker fabric per square centimetre. On average, a crochet project uses 25-35% more yarn than the same project knitted flat.',
  },
  {
    question: 'What happens if I buy yarn from different dye lots?',
    answer:
      'Even if the colour looks identical in the shop, minimal chemical variations during dyeing can create visible "stripes" in the finished garment when knitted together. It is strongly recommended to buy all yarn at once, checking that the lot code is the same.',
  },
  {
    question: 'How does tension (gauge) affect final yarn consumption?',
    answer:
      'If you knit loosely, each stitch uses more metres of yarn. If your gauge swatch is larger than the pattern specifies (e.g. 13 stitches instead of 15), your yarn consumption will increase substantially. It is vital to make a gauge swatch first.',
  },
  {
    question: 'How do I calculate metres if I only have the ball weight?',
    answer:
      'Without the yardage data, it is difficult. Most balls indicate metres on their label. If they do not, search for the yarn name in databases like Ravelry to find the exact length per 50g or 100g.',
  },
];

const howToData = [
  {
    name: 'Select the project',
    text: 'Choose from a sweater, scarf, hat, socks or blanket to load the specific consumption baselines.',
  },
  {
    name: 'Set size and weight',
    text: 'Specify the final dimensions (S, M, L, XL) and the yarn weight you will use (Fingering, DK, Worsted, Bulky).',
  },
  {
    name: 'Enable multipliers',
    text: 'If your pattern has cables, twists or complex textures, enable the texture switch to add the required supplement.',
  },
  {
    name: 'Get your shopping list',
    text: 'Enter the metres per ball of your chosen yarn to see exactly how many units to add to your cart.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'Craft Yarn Council: Standard Yarn Weights & Yardages',
      url: 'https://www.craftyarncouncil.com/standards/yarn-weight-system',
    },
    {
      name: 'Interweave Essentials: Yarn Substitution and Estimation',
      url: 'https://www.interweave.com/article/knitting/yarn-substitution-angelina-take-two/',
    },
    {
      name: 'The Woolery: Fibers and Calculation of Yarn Usage',
      url: 'https://woolery.com/blogs/the-woolery-blog/yarn-weight-charts-helpful-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Yarn Consumption Guide: How to Calculate Metres and Balls for Your Projects',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Master knitting logistics and avoid running out of yarn with our technical precision calculator for knitting and crochet. One of the biggest fears for any knitter is <strong>"Yarn Chicken"</strong>: that critical moment at the end of a project where the yarn seems about to run out before casting off the last stitches. This calculator was developed to offer estimations based on industrial yardage and weight standards.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Safety Margin', icon: 'mdi:security' },
        { value: 'Metric', label: 'Calculated in Metres', icon: 'mdi:ruler' },
        { value: 'Offline', label: 'Local Database', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Why Ball Weight Is Misleading',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Many beginners make the mistake of buying yarn based solely on weight (e.g. "6 balls of 100g"). However, weight is a unit of mass, not length. Two yarns weighing 100g can have radically different lengths: a <strong>Bulky</strong> yarn may have only 80 metres, while a <strong>Fingering / Lace</strong> yarn can exceed 450 metres for the same weight.',
    },
    {
      type: 'paragraph',
      html: 'That is why our calculator always prioritises <strong>total metres</strong>. Once you know the length required for your size and project, divide it by the yardage on your specific ball label to get the exact number of units to purchase.',
    },
    {
      type: 'title',
      text: 'Standard Yardage Table by Weight',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If you do not have the label to hand, use these reference yardages (per 100g of fibre) for your estimates:',
    },
    {
      type: 'table',
      headers: ['Weight', 'Approx. Metres / 100g', 'Recommended Use', 'Suggested Needles'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Lace shawls, openwork', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Socks, baby garments', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Light jackets', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Sweaters, hats', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Blankets, coats', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'XXL scarves, blankets', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'The Tension (Gauge) Factor',
      html: '<p>Remember that if you knit very loosely, your stitches will be larger and use more yarn than if you knit tightly. Our calculator applies a safety margin, but if you know your tension is extremely loose, consider adding an additional 5-10% to the results to avoid surprises.</p>',
    },
    {
      type: 'title',
      text: 'Variables That Increase Yarn Consumption',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Not all stitch patterns use the same amount of fibre. When choosing your design, consider these multiplier factors:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Stocking Stitch / Jersey',
          description: 'Represents the baseline consumption and maximum yarn efficiency for any garment.',
          icon: 'mdi:minus-circle-outline',
          points: ['Ideal for beginners', 'Natural drape of fabric'],
        },
        {
          title: 'Cables / Aran',
          description: 'Crossing fibres "shortens" the piece, increasing consumption by 25%.',
          icon: 'mdi:texture-box',
          points: ['Requires more metres', 'Denser and heavier fabric'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Crochet',
          description: 'Crochet knots use 30% more yarn than flat knitting.',
          icon: 'mdi:hook',
          points: ['Faster ball consumption', 'Three-dimensional texture'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Ribbing',
          description: 'The knit/purl structure accumulates more yarn per square centimetre.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Intermediate consumption (+15%)', 'High elastic recovery'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Glossary for the Prepared Knitter',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot',
          definition:
            'Number identifying the dye vat in which the yarn was dyed. Different lots may have colour variations invisible in the ball but very visible in the finished garment.',
        },
        {
          term: 'Stash',
          definition:
            'A knitter\'s personal yarn collection. Identifying the weight of unlabelled yarn remnants is vital for calculating small projects.',
        },
        {
          term: 'Put-up',
          definition:
            'The form in which yarn is presented (hank, ball or cone), which affects whether it needs to be wound before use.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'The challenge of trying to finish a section of knitting with an apparently insufficient amount of yarn.',
        },
      ],
    },
    {
      type: 'title',
      text: 'How to Use the Results of This Calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Once the tool returns the number of metres and balls, we recommend the following manual verification steps:',
    },
    {
      type: 'list',
      items: [
        '<strong>Check the actual ball yardage:</strong> Not all 100g balls have 200m. Verify this on the label to adjust the final calculation.',
        '<strong>Add yardage for details:</strong> If you are adding fringe to a scarf or pompoms to a hat, add 50-80 extra metres to the total.',
        '<strong>Gauge swatch:</strong> Knit a 10x10cm square. Weigh it on a precision scale. If it weighs 20g and your blanket is 100x100cm (100 squares), you will need exactly 2kg of yarn.',
        '<strong>Always buy from the same lot:</strong> If the calculation says 7 balls, buy 8 if they are from different lots to have a safety margin or for hidden pieces like seams.',
      ],
    },
    {
      type: 'summary',
      title: 'Strategic Tips for Buying Yarn',
      items: [
        'Prioritise metres over grams to ensure the required length.',
        'Crochet uses substantially more yarn than knitting; adjust the type selector accordingly.',
        'Dense textures (cables) require a 25% increase in the yarn budget.',
        'Always keep a label from each lot in case you need to reorder the same colour.',
        'Use the 10% safety margin to knit the mandatory gauge swatch.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. PROJECT TYPE',
    sectionSize: '2. DIMENSIONS / SIZE',
    sectionWeight: '3. YARN WEIGHT',
    sectionPattern: '4. PATTERN FEATURES',
    sectionBall: '5. BALL DETAILS',
    labelCables: 'Cables or dense textures?',
    labelGrams: 'GRAMS / BALL',
    labelMeters: 'METRES / BALL',
    weightFine: 'Fine',
    weightMedium: 'Medium',
    weightThick: 'Thick',
    weightXXL: 'XXL',
    projectSweater: 'SWEATER',
    projectScarf: 'SCARF',
    projectHat: 'HAT',
    projectSocks: 'SOCKS',
    projectBlanket: 'BLANKET',
    projectCardigan: 'CARDIGAN',
    statPrefix: 'ESTIMATED TOTAL CONSUMPTION',
    statSuffix: 'M',
    statNote: 'Final yardage calculated with a 10% reserve stock.',
    ballsFormatSingular: 'Buy {n} ball',
    ballsFormatPlural: 'Buy {n} balls',
    ballsDetailFormat: 'Balls of {w}g / {m}m each.',
    alertTitle: 'Strategic safety:',
    alertText:
      'This calculation already guarantees you will not run out of yarn. Remember to check the dye lot number when buying your balls to avoid colour jumps.',
    schemeSleeveLabel: 'Sleeves',
    schemeSleeveEach: 'ea.',
    schemeBodyLabel: 'Body',
    schemeTotalHat: 'Hat Total',
    schemeTotalFlat: 'Piece Total',
    schemeTotalSocks: 'Pair Total',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Child', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Large', 'Maxi'],
      socks: ['Child', 'Ad. S', 'Ad. M', 'Ad. L'],
      blanket: ['Baby', 'Sofa', 'Single', 'Double'],
    },
  },
};
