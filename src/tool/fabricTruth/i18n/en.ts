import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'fabric-truthfulness';
const title = 'Fabric Truthfulness: Textile Quality Analysis';
const description = 'Discover the real quality of your garments by analyzing their composition. Is it real cotton or expensive plastic? Scientific fiber analysis.';

const faqData = [
  {
    question: 'What is "Greenwashing" in fashion?',
    answer: 'It\'s a marketing technique where brands use terms like "Eco-Friendly" or "Sustainable" without real proof. Analyzing the actual composition of fibers is the only way to verify if a garment is truly natural or synthetic.',
  },
  {
    question: 'Why is polyester usually lower quality than cotton?',
    answer: 'Polyester is plastic (PET). While durable, it doesn\'t breathe, promotes odor from bacteria, and sheds microplastics with every wash. Natural fibers like cotton or linen offer better thermal regulation.',
  },
  {
    question: 'Is it bad if my clothes have elastane?',
    answer: 'In small amounts (1-5%), elastane (Lycra) provides comfort and fit. However, it greatly complicates garment recycling by mixing plastic with natural fibers, which usually indicates a "fast fashion" garment.',
  },
  {
    question: 'How to spot a high-quality garment by its label?',
    answer: 'Look for single-material compositions (100% Cotton, 100% Wool). Complex blends are usually used to cut production costs and hide synthetic fibers under attractive brand names.',
  },
];

const howToData = [
  {
    name: 'Locate the internal label',
    text: 'Find the white composition label that\'s usually on the inside seam or neck of your garment.',
  },
  {
    name: 'Identify the components',
    text: 'Read the percentages of each fiber (e.g., 70% Cotton, 30% Polyester).',
  },
  {
    name: 'Enter the data in the analyzer',
    text: 'Type the proportions of the fibers in our tool to get a technical quality score.',
  },
  {
    name: 'Interpret the diagnosis',
    text: 'Review the generated report to understand if your garment is breathable, durable, or if it requires special care due to its synthetic composition.',
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
  description: description,
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
  description: description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Fabric Truthfulness',
    addFiber: 'Add Fiber',
    total: 'Total',
    composition: 'Composition Analysis',
    description: 'Add the percentages as they appear on your garment label to discover the truth about its quality.',
    verdict: 'Verdict',
    breathability: 'Breathability',
    durability: 'Durability',
    warmth: 'Warmth',
    careWarning: 'Special Care Warning',
    specialCareWarning: 'STANDARD WASHING: Always follow the instructions on the physical label.',
    validationError: 'The composition must add up to exactly 100% to see the verdict',
    actualTotal: 'Actual',
    missingLabel: 'missing',
    disclaimer: 'Breathability, durability, and warmth data are estimates based on industry averages for each fiber type.',
    careWarnings: {
      delicate: 'VERY DELICATE: Hand wash in cold water. Do not use dryer. Avoid wringing.',
      wool: 'WOOL / NOBLE HAIR: Wash in cold water with special program. Dry flat to prevent deformation. Do not use dryer.',
      linen: 'LINEN: Tends to wrinkle greatly. Iron slightly damp for best results.',
      semisynthetic: 'SEMI-SYNTHETICS: Weakens when wet. Handle with care and do not spin hard.',
      standard: 'STANDARD WASHING: Always follow the instructions on the physical label.',
    },
    fiberData: {
      cotton: {
        name: 'Cotton',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Linen',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Wool / Merino',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'Silk',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Cashmere',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: 'Mohair',
        family: 'natural',
        breathability: 8,
        durability: 9,
        warmth: 9,
        isNoble: true,
      },
      angora: {
        name: 'Angora',
        family: 'natural',
        breathability: 8,
        durability: 4,
        warmth: 10,
        isNoble: true,
      },
      alpaca: {
        name: 'Alpaca',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: 'Polyester',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: 'Viscose / Rayon',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'Nylon (Polyamide)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: 'Acrylic',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: 'Expensive Plastic',
        description: 'Most of this garment is petroleum. Be prepared to sweat and see pilling quickly.',
      },
      hook: {
        label: 'Marketing Hook',
        description: 'That small percentage of noble fiber is only there for the label. You won\'t notice its benefits.',
      },
      fragile: {
        label: 'Soft but Fragile',
        description: 'Very pleasant to the touch, but be careful when washing: tends to deform and shrink easily.',
      },
      natural: {
        label: 'Natural Quality',
        description: 'Breathable and durable garment. Ideal for sensitive skin and prolonged use.',
      },
      technical: {
        label: 'Technical / Ultra-Synthetic',
        description: 'Unless it\'s specific sports clothing, you\'re paying for pure plastic.',
      },
      luxury: {
        label: 'Real Luxury',
        description: 'An investment in comfort and durability. Treat it with the respect it deserves.',
      },
      balanced: {
        label: 'Balanced Blend',
        description: 'A functional combination, probably seeking to balance cost and durability.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'The Truth Behind the Label: A Master Guide to Textile Composition', level: 2 },
    { type: 'paragraph', html: 'Ever wondered why that branded shirt makes you sweat so much, or why that "wool" sweater is unbearably itchy? The answer isn\'t in the design, but in the chemistry of its fibers.' },
    { type: 'paragraph', html: 'In a world dominated by <strong>Fast Fashion</strong>, the quality of fabrics has taken a back seat to ephemeral aesthetics. However, understanding textile composition is the only way to make a smart, durable, and skin-respecting purchase. Our <strong>Fabric Truthfulness</strong> tool analyzes official percentages to reveal whether you\'re facing a quality garment or just a block of processed plastic.' },
    { type: 'title', text: 'Our Methodology', level: 2 },
    { type: 'paragraph', html: 'We use a weighted algorithm based on three fundamental pillars drawn from European and North American industrial standards:' },
    { type: 'list', items: ['<strong>Breathability:</strong> The fiber\'s ability to allow water vapor and air to pass through.', '<strong>Durability:</strong> Resistance to abrasion, traction, and pilling formation.', '<strong>Thermal Efficiency:</strong> Capacity for heat retention or mechanical coolness.'] },
    { type: 'tip', title: 'Important', html: 'The law requires that all garments sold in the EU and US list their components in decreasing order of percentage. If a garment has no label or the label is illegible, be wary: it probably doesn\'t meet minimum textile safety standards.' },
    { type: 'title', text: 'Common "Deceptions" in Retail', level: 2 },
    { type: 'paragraph', html: 'There are sophisticated marketing techniques designed to elevate the perceived value of a mediocre garment. Here\'s how to spot them:' },
    { type: 'card', title: 'The Noble Fiber Hook', icon: 'mdi:alert', html: 'You\'ll see labels saying "WITH CASHMERE" or "WITH SILK" in large letters. Looking at the composition, you discover 3% silk and 97% polyester. That 3% adds no softness, shine, or warmth; it\'s just there so the brand can raise the price by 20%.' },
    { type: 'card', title: 'The "Eco-Friendly Viscose" Myth', icon: 'mdi:leaf', html: 'Although viscose comes from cellulose (wood), its current manufacturing process is often highly polluting, and the final result is a fiber that weakens drastically when wet. Unless it\'s Lyocell or Tencel, its durability is limited.' },
    { type: 'title', text: 'In-Depth Analysis by Categories', level: 2 },
    { type: 'title', text: '1. Natural Fibers (Proudly Organic)', level: 3 },
    { type: 'paragraph', html: 'These are the gold standard. Long-staple Cotton (like Pima or Egyptian) offers eternal softness. Linen is scientifically the best fiber for heat due to its molecular structure that repels heat and absorbs moisture. Wool and Hemp are natural antibacterials; they don\'t need frequent washing because they don\'t retain odors.' },
    { type: 'title', text: '2. Semi-Synthetic Fibers (The Hybrid)', level: 3 },
    { type: 'paragraph', html: 'Here we find Viscose, Rayon, and Modal. They feel like silk but cost like cotton. They\'re excellent for garments with lots of drape, but they\'re "thirsty": they absorb lots of water and take a long time to dry, which can promote mold growth if not cared for. Lyocell (Tencel) is the premium and sustainable version of this group, with a closed production cycle and greater resistance.' },
    { type: 'title', text: '3. Synthetic Fibers (Spun Plastics)', level: 3 },
    { type: 'paragraph', html: 'Polyester is the king of the market. It\'s cheap, doesn\'t wrinkle, and is eternal (literally, it will take 200 years to decompose). The problem is that it doesn\'t breathe. It creates a humid microclimate between the fabric and your skin, the ideal breeding ground for bacteria. Acrylic is the cheap imitation of wool: it warms, but generates lots of static electricity and fills with pills in two washes.' },
    { type: 'title', text: 'Textile Survival Tips', level: 2 },
    { type: 'paragraph', html: 'Even the best garment in the world can be ruined in a single improper wash. Here are the golden rules:' },
    { type: 'tip', title: 'Cold Water is Your Friend', html: '90% of garments don\'t need more than 30°C. Heat degrades elastic fibers and shrinks natural ones.' },
    { type: 'tip', title: 'Less is More (Detergent)', html: 'Excess soap leaves residue that attracts dirt and makes clothes feel stiff.' },
    { type: 'tip', title: 'Dryer: The Subtle Enemy', html: 'The lint you see in the dryer filter is pieces of your clothes that have come off due to friction and heat.' },
    { type: 'tip', title: 'Inside-Out Washing', html: 'Protects color and embroidery from rubbing against the drum and other garments.' },
    { type: 'paragraph', html: '"Buy less, choose better, and make it last." — This calculator is your first step towards a conscious and high-quality wardrobe.' },
  ],
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'FTC - Textile Labeling Guide',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'European Commission - Textile Regulation',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Textile Care Symbols',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
