import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'clothing-size-converter';
const title = 'International Clothing Size Converter';
const description =
  'Convert clothing sizes between EU, US, UK and IT systems. Shirts, pants, dresses and jackets for men, women and unisex. Includes measurement guide and brand fit recommendations.';

const faqData = [
  {
    question: 'What is the difference between EU and US clothing sizes?',
    answer:
      'European (EU) sizes use progressive numbers (XS, S, M, L or 32, 34, 36, 38) while US sizes use letters (XS, S, M, L) or numbers for women\'s pants (0, 2, 4, 6). Generally, EU 36 is approximately US 4 in women\'s clothing.',
  },
  {
    question: 'Do sizes change for men\'s vs women\'s clothing?',
    answer:
      'Yes, absolutely. Even in the same country, a size 40 for men is not the same as a 40 for women. Men have different proportions (broader shoulders), so the size calculation varies.',
  },
  {
    question: 'How do I know if I should size up or down for a brand?',
    answer:
      'The best approach is to check reviews from other customers. Phrases like "runs small" or "runs large" are very helpful. Also consult the brand\'s specific measurement chart.',
  },
  {
    question: 'Is the size conversion chart accurate?',
    answer:
      'The conversion chart is a guide. While generally accurate, each brand has its own specifications. Always verify the store\'s specific size chart before purchasing.',
  },
  {
    question: 'Do clothes shrink after washing?',
    answer:
      '100% cotton can shrink 5–10% if washed in hot water and tumble dried. Synthetic materials hold their shape better. Always check the care label instructions.',
  },
];

const howToData = [
  {
    name: 'Select Garment and Gender',
    text: 'Choose the garment type (shirt, pants, dress, jacket) and the corresponding gender.',
  },
  {
    name: 'Choose Your Size System',
    text: 'Select the system you know: EU, US, UK or IT.',
  },
  {
    name: 'Select Your Size',
    text: 'Pick your size from the selector or click the grid. You will see equivalences instantly.',
  },
  {
    name: 'Check the Brand Guide',
    text: 'See whether that brand runs small, regular or large to adjust your purchase.',
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

const shirtsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '44' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '46' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '42' },
  ],
  unisex: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '34' },
    { EU: 'S', US: 'S', UK: 'S', IT: '36' },
    { EU: 'M', US: 'M', UK: 'M', IT: '38' },
    { EU: 'L', US: 'L', UK: 'L', IT: '40' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '42' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '44' },
  ],
};

const pantsData = {
  men: [
    { EU: '30', US: '30', UK: '30', IT: '44' },
    { EU: '32', US: '32', UK: '32', IT: '46' },
    { EU: '34', US: '34', UK: '34', IT: '48' },
    { EU: '36', US: '36', UK: '36', IT: '50' },
    { EU: '38', US: '38', UK: '38', IT: '52' },
    { EU: '40', US: '40', UK: '40', IT: '54' },
  ],
  women: [
    { EU: '32', US: '0', UK: '4', IT: '36' },
    { EU: '34', US: '2', UK: '6', IT: '38' },
    { EU: '36', US: '4', UK: '8', IT: '40' },
    { EU: '38', US: '6', UK: '10', IT: '42' },
    { EU: '40', US: '8', UK: '12', IT: '44' },
    { EU: '42', US: '10', UK: '14', IT: '46' },
  ],
  unisex: [],
};

const dressesData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
  ],
  women: [
    { EU: 'XS', US: '0-2', UK: '4-6', IT: '32-34' },
    { EU: 'S', US: '4-6', UK: '8-10', IT: '36-38' },
    { EU: 'M', US: '8-10', UK: '12-14', IT: '40-42' },
    { EU: 'L', US: '12-14', UK: '16-18', IT: '44-46' },
    { EU: 'XL', US: '16-18', UK: '20-22', IT: '48-50' },
  ],
  unisex: [],
};

const jacketsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '44' },
    { EU: 'S', US: 'S', UK: 'S', IT: '46' },
    { EU: 'M', US: 'M', UK: 'M', IT: '48' },
    { EU: 'L', US: 'L', UK: 'L', IT: '50' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '52' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
  ],
  unisex: [],
};

const measurementRanges = {
  shirts: [
    { size: 'XS', chest: 84, waist: 76, hip: 84 },
    { size: 'S', chest: 92, waist: 84, hip: 92 },
    { size: 'M', chest: 100, waist: 92, hip: 100 },
    { size: 'L', chest: 108, waist: 100, hip: 108 },
    { size: 'XL', chest: 116, waist: 108, hip: 116 },
    { size: 'XXL', chest: 124, waist: 116, hip: 124 },
  ],
  pants: [
    { size: '30', chest: 80, waist: 76, hip: 89 },
    { size: '32', chest: 85, waist: 81, hip: 94 },
    { size: '34', chest: 90, waist: 86, hip: 99 },
    { size: '36', chest: 95, waist: 91, hip: 104 },
    { size: '38', chest: 100, waist: 96, hip: 109 },
    { size: '40', chest: 105, waist: 101, hip: 114 },
  ],
  dresses: [
    { size: 'XS', chest: 80, waist: 72, hip: 88 },
    { size: 'S', chest: 88, waist: 80, hip: 96 },
    { size: 'M', chest: 96, waist: 88, hip: 104 },
    { size: 'L', chest: 104, waist: 96, hip: 112 },
    { size: 'XL', chest: 112, waist: 104, hip: 120 },
  ],
  jackets: [
    { size: 'XS', chest: 84, waist: 76, hip: 88 },
    { size: 'S', chest: 92, waist: 84, hip: 96 },
    { size: 'M', chest: 100, waist: 92, hip: 104 },
    { size: 'L', chest: 108, waist: 100, hip: 112 },
    { size: 'XL', chest: 116, waist: 108, hip: 120 },
  ],
};

export const content: ToolLocaleContent<ClothingSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    { name: 'ISO 3635: Clothing Sizes - Official Standard', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Clothing Size Standards - Wikipedia', url: 'https://en.wikipedia.org/wiki/Clothing_size' },
    {
      name: 'International Clothing Size Conversion - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Clothing Size Converter: Complete International Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Buying clothes from international stores can be confusing when sizes do not match. The <strong>clothing size converter</strong> helps you find your perfect size across EU, US, UK and IT systems, for shirts, pants, dresses and jackets.',
    },
    {
      type: 'title',
      text: 'Why do clothing sizes vary between countries?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'There is no single international standard for clothing sizes. Each region developed its own system, creating confusion when shopping from foreign stores or platforms like Amazon.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU sizes (Europe):</strong> Use progressive numbers (XS, S, M, L or 32, 34, 36...). The most common system in Spain and Italy.</span>',
        '<span><strong>US sizes (United States):</strong> Use letters (XS, S, M, L) or numbers for women\'s pants (0, 2, 4, 6).</span>',
        '<span><strong>UK sizes (United Kingdom):</strong> Similar to EU but with its own numbering, generally lower than US.</span>',
        '<span><strong>IT sizes (Italy):</strong> Italian numbering with variations from the general EU system.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Professional Tip',
      html: 'Sizes vary significantly between brands. A size 38 in Zara can be different from a 38 in H&amp;M. Always check the store\'s specific size chart before purchasing.',
    },
    {
      type: 'title',
      text: 'How to measure your body correctly',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To guarantee the right size, measure your body with a flexible tape measure. Measure at the end of the day, when your body is at its maximum expansion.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Chest:</strong> Measure around the widest part of your chest, passing the tape under your arms.</span>',
        '<span><strong>Waist:</strong> Measure at navel height without artificially holding in your stomach.</span>',
        '<span><strong>Hip:</strong> Measure around the widest part of your hips, keeping the tape parallel to the floor.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Brand fit guide',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Regular sizing. A 36 in Zara is generally reliable for standard measurements.</span>',
        '<span><strong>H&amp;M:</strong> Tends to run large. Consider sizing down from your usual size.</span>',
        '<span><strong>Uniqlo:</strong> Runs small, especially in basics. Sizing up is recommended.</span>',
        '<span><strong>Nike / Adidas:</strong> Athletic, close-fitting cuts. Consider going up half a size.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Garment Type',
    categoryShirts: 'Shirts',
    categoryPants: 'Pants',
    categoryDresses: 'Dresses',
    categoryJackets: 'Jackets',
    genderLabel: 'Gender',
    genderMen: 'Men',
    genderWomen: 'Women',
    genderUnisex: 'Unisex',
    tabBySize: 'By Size',
    tabByMeasurements: 'By Measurements',
    regionLabel: 'Your Size System',
    sizeLabel: 'Select Your Size',
    regionEU: 'Europe (EU)',
    regionUS: 'United States (US)',
    regionUK: 'United Kingdom (UK)',
    regionIT: 'Italy (IT)',
    labelEU: 'Europe',
    labelUS: 'United States',
    labelUK: 'United Kingdom',
    labelIT: 'Italy',
    quickGridTitle: 'Quick Reference (EU)',
    tableTitle: 'Full Conversion Table',
    measurementsTitle: 'Enter Your Measurements',
    chestLabel: 'Chest (cm)',
    waistLabel: 'Waist (cm)',
    hipLabel: 'Hip (cm)',
    chestPlaceholder: 'E.g. 95',
    waistPlaceholder: 'E.g. 85',
    hipPlaceholder: 'E.g. 95',
    recommendBtnLabel: 'Recommend Size',
    tipsTitle: 'Measurement Tips',
    tipOverClothes: 'Over clothes',
    tipStraight: 'Straight and parallel',
    tipNoTight: 'Without pulling tight',
    tipEndOfDay: 'At the end of the day',
    recommendationTitle: 'Recommended Size',
    recommendedSizePrefix: 'We recommend size:',
    measuredBy: 'Based on your measurements:',
    chestShort: 'Chest',
    waistShort: 'Waist',
    hipShort: 'Hip',
    recommendationError: 'Please fill in all measurements to get a recommendation.',
    recommendationNoData: 'No data available for this category.',
    fitGuideTitle: 'Brand Fit Guide',
    fitSmall: 'Small Fit',
    fitRegular: 'Regular Fit',
    fitLarge: 'Large Fit',
    fitInfoDefault: 'Click a brand to get specific recommendations.',
    fitNotif1: ' usually fits ',
    fitNotifSmall: 'small',
    fitNotifRegular: 'regular',
    fitNotifLarge: 'large',
    fitNotif2: 'Consider',
    fitNotif3: "if it's your first time buying from this brand.",
    fitAdviceSmall: 'sizing up by one',
    fitAdviceRegular: 'sticking with your usual size',
    fitAdviceLarge: 'sizing down by one',
    fitSelectedSuffix: 'selected. Select another brand to compare.',
    infoBannerTitle: 'Pro Tip:',
    infoBannerText:
      "Clothing sizes vary significantly between brands. Always check the store's specific size chart before purchasing.",
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
