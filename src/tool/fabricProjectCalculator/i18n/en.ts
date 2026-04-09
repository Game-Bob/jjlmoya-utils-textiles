import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'fabric-project-calculator';
const title = 'Fabric Consumption Calculator by Garment';
const description =
  'Easily calculate how much fabric you need to sew a skirt, trousers, a dress or a shirt. Adjust by fabric width and size for a professional cut.';

const faqData = [
  {
    question: 'How much fabric do I need for a skirt?',
    answer:
      'It depends on the fabric width. For a straight skirt in 140-150 cm fabric, 1.20 metres is usually enough. If the fabric is 90-110 cm wide, you will need 2.00 metres.',
  },
  {
    question: 'How does fabric width affect consumption?',
    answer:
      'The narrower the fabric, the less likely pattern pieces can lie side by side (in parallel), so consumption often doubles as pieces must be placed one below the other.',
  },
  {
    question: 'Is it better to buy extra fabric?',
    answer:
      'Yes, a 10% margin (about 20 cm) is recommended to compensate for shrinkage, fabric flaws, or unexpected seam allowances.',
  },
  {
    question: 'What is the grain line and how does it affect cutting?',
    answer:
      'It is the direction parallel to the selvedges of the fabric. Patterns must be aligned with this grain so the garment does not distort during wear.',
  },
];

const howToData = [
  {
    name: 'Choose the garment type',
    text: 'Select the style you are making (skirt, trousers, etc.) to load its base consumption table.',
  },
  {
    name: 'Enter the fabric width',
    text: 'Measure the width from selvedge to selvedge of the fabric you plan to buy (90, 115, 140 or 150 cm).',
  },
  {
    name: 'Select the size',
    text: 'Adjust the garment volume by size (XS-S, M-L, XL-XXL) to recalculate the size multiplier.',
  },
  {
    name: 'Get the total metres',
    text: 'Check the final result with and without seam allowance to know exactly how much to order at the shop.',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'Fabric Estimation Guide - Threads Magazine',
      url: 'https://www.threadsmagazine.com/forum/measuring-fabric',
    },
    {
      name: 'How much fabric do I need? - Seamwork',
      url: 'https://www.seamwork.com/sewing-tutorials/the-anatomy-of-a-sewing-pattern',
    },
    {
      name: 'Standard Fabric Consumption Charts - Textile School',
      url: 'https://www.textileschool.com/209/fabric-consumption-in-garment-making/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Fabric Metres Calculator for Sewing: Consumption Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'One of the most frequent questions in the sewing workshop is how much fabric to buy for a specific project. Fabric consumption depends radically on three factors: the garment style, the person\'s size, and above all, the fabric width (which usually ranges between 90 cm and 150 cm). This technical calculator systematises the calculation so you do not buy too much or run short mid-cut.',
    },
    {
      type: 'title',
      text: 'How much fabric do I need for a dress or trousers?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The traditional calculation is based on the garment length plus sleeve length, adding a margin for facings and hems. However, with narrow fabric (90-110 cm), pieces often cannot lie side by side, requiring twice the length. Our tool accounts for these variations automatically according to textile industry standards.',
    },
    {
      type: 'title',
      text: 'Estimated Consumption by Fabric Width (size M-L)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Straight Skirt:</strong> 2.00 m in 90 cm fabric · 1.20 m in 140/150 cm fabric.',
        '<strong>Long Trousers:</strong> 2.50 m in 90 cm fabric · 1.50 m in 140/150 cm fabric.',
        '<strong>Long-Sleeve Shirt:</strong> 2.20 m in 90 cm fabric · 1.40 m in 140/150 cm fabric.',
        '<strong>Basic Dress:</strong> 3.50 m in 90 cm fabric · 2.20 m in 140/150 cm fabric.',
      ],
    },
    {
      type: 'title',
      text: 'Factors that Affect Fabric Consumption',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Print direction (Rapport):</strong> If the fabric has a directional print or plaids that must match, you will need 15-20% extra material.',
        '<strong>Bias cut:</strong> Circular cuts (like circle skirts) consume significantly more fabric due to waste at the angles.',
        '<strong>Nap direction:</strong> In pile fabrics like velvet or corduroy, all pieces must be cut in the same direction, limiting space optimisation.',
        '<strong>Shrinkage:</strong> Many natural fibres (cotton, linen, wool) shrink after the first wash. Pre-washing the fabric before cutting is essential.',
      ],
    },
    {
      type: 'tip',
      title: 'Sewer\'s Tip',
      html: '<p>If you are using a fabric with a large print or plaids, do not rely solely on the standard measurement. Always add one full pattern repeat (the rapport) to the total metres calculated to ensure patterns match at the side seams.</p>',
    },
    {
      type: 'title',
      text: 'Advantages and Limitations of this Calculator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Instant calculation for multiple fabric widths with size adjustment.',
        'Includes customisable seam allowance estimation.',
        'Visual guide of pattern piece layout on the cloth.',
        'Does not replace a real pattern layout (marking). Plus sizes may require additional manual adjustments.',
      ],
    },
    {
      type: 'card',
      title: 'Fabric Width',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'The transverse measurement of the fabric from <strong>selvedge to selvedge</strong>. Determines whether pattern pieces can lie in parallel or must be placed in series.',
    },
    {
      type: 'card',
      title: 'Seam Allowance',
      icon: 'mdi:tape-measure',
      html: 'The distance between the edge of the pattern and the <strong>final seam line</strong>. A standard value is 1.5 cm for clothing seams.',
    },
    {
      type: 'card',
      title: 'Selvedge',
      icon: 'mdi:content-cut',
      html: 'The reinforced side edges of the fabric that <strong>do not fray</strong>. They indicate the grain direction and serve as a reference for cutting.',
    },
  ],
  ui: {
    sectionProject: 'Project',
    sectionMaterial: 'Material',
    labelGarmentType: 'Garment type',
    labelSize: 'Size',
    labelFabricWidth: 'Fabric width (cm)',
    labelSeamAllowance: 'Seam allowance (cm)',
    garmentSkirt: 'Skirt (Straight/A-line)',
    garmentPants: 'Trousers',
    garmentDress: 'Dress',
    garmentShirt: 'Shirt / Blouse',
    garmentCoat: 'Coat / Jacket',
    garmentTote: 'Tote Bag',
    garmentMerceria: {
      skirt: '1 zip 20cm, 1 button',
      pants: '1 zip 20cm, 1 button, 30cm interfacing',
      dress: '1 zip 60cm, 50cm interfacing',
      shirt: '7 buttons, 1m light interfacing',
      coat: '3 large buttons, 1.5m interfacing, lining',
      tote: '2m webbing for handles',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Narrow)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (EU Standard)',
    width150: '150 cm (Upholstery)',
    btnClear: 'Clear',
    btnShare: 'Share',
    btnCopied: 'Copied!',
    btnCopyList: 'Copy list',
    resultLabel: 'You need:',
    resultUnit: 'Metres',
    shopAdviceFormat: 'Order {m}m at the shop',
    boardEmpty: 'Select a project to see the layout',
    boardDescFormat: 'Width: {w}cm | Length: {m}m',
    merchTitle: 'Notions & Materials',
    checklistThread: 'Matching thread',
    warningSerialFormat: 'In {w}cm fabric, pieces for your size cannot lie in parallel. Consumption adjusted for series cutting.',
    foldLabel: '⊟ fold',
    pieceNames: {
      front: 'Front',
      back: 'Back',
      waistband: 'Waistband',
      waistbelt: 'Waistbelt',
      sleeve: 'Sleeve',
      collar: 'Collar',
      cuffs: 'Cuffs',
      facings: 'Facings',
      lapels: 'Lapels',
      pocket: 'Pocket',
      body: 'Body',
      handleA: 'Handle A',
      handleB: 'Handle B',
    },
  },
};
