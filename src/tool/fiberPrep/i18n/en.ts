import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'fiber-preparation-natural-dyeing';
const title = 'Fiber Preparation for Natural Dyeing';
const description =
  'WOF calculator, mordanting protocols and thermal ramps to prepare wool, silk and cotton before natural dyeing.';

const faqData = [
  {
    question: 'What is WOF (Weight of Fiber)?',
    answer:
      'WOF is the standard system for calculating the amount of pigment or mordant needed. It is based on the dry weight of the fiber. For example, 100% WOF of onion skins for 100g of wool means you need 100g of onion skins.',
  },
  {
    question: 'Why is mordanting necessary?',
    answer:
      'The mordant (such as alum) acts as a chemical bridge between the textile fiber and the natural pigment. Without it, most dyes would not fix and would disappear with the first wash (poor light and rub fastness).',
  },
  {
    question: 'What is the difference between preparing animal and plant fibers?',
    answer:
      'Animal fibers (protein fibers like wool) accept alum very well on their own. Plant fibers (cellulosic like cotton or linen) require a prior tannin step to "trick" the fiber into accepting the metallic mordant.',
  },
  {
    question: 'What is the thermal ramp in dyeing?',
    answer:
      'It is the gradual increase of temperature (approx. 1-2°C per minute) of the dye bath. It is crucial to avoid thermal shock, especially in wool, which can felt or shrink if temperature changes are sudden.',
  },
];

const howToData = [
  {
    name: 'Cleaning and scouring',
    text: 'Wash the fiber with neutral detergent to remove oils, waxes or industrial starches that prevent the mordant from penetrating uniformly.',
  },
  {
    name: 'Weigh the dry fiber',
    text: 'Obtain the exact weight of the dry material. This value is the basis for all WOF (Weight of Fiber) calculations.',
  },
  {
    name: 'Calculate and prepare mordant bath',
    text: 'Dissolve the mordant (e.g. potassium alum at 15% WOF) in hot water and submerge the fiber, maintaining constant temperature according to the protocol.',
  },
  {
    name: 'Maturing and rinsing',
    text: 'Let the mordanted fiber rest (preferably 24h) so the metal fixes deeply before moving to the final dye bath.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'La Escuela Artesana - Natural Dye Workshop on Wool',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Textile Artist and Natural Dyes',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Science Behind Mordanting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Preparing a fiber for dyeing is not simply washing it. It is a molecular-level chemical engineering process called mordanting. The word comes from the Latin <i>mordere</i> (to bite), and its function is to act as a chemical bridge between the fiber and the pigment. Without this bridge, most natural dyes would simply wash out in the first rinse.',
    },
    {
      type: 'card',
      title: 'Key Concept',
      icon: 'mdi:molecule',
      html: 'The mordant has available valences that simultaneously bond to the fiber polymers and the dye molecule.',
    },
    {
      type: 'title',
      text: 'Fiber Differentiation',
      level: 2,
    },
    {
      type: 'card',
      title: 'Protein Fibers: Wool and Silk',
      icon: 'mdi:sheep',
      html: 'These fibers are composed of amino acid chains with a naturally high affinity for metals. Heat opens the fiber scales allowing alum salts to penetrate deeply. <strong>Cream of Tartar</strong> is vital to maintain the acid pH that preserves softness.',
    },
    {
      type: 'card',
      title: 'Cellulosic Fibers: Cotton and Linen',
      icon: 'mdi:leaf',
      html: 'Cellulose does not have readily available bonding sites. That is why we use the <strong>two-step protocol</strong>: first tannins that bind to the cellulose, then alum binds to those tannins. Without this pre-treatment, the color will be pale and poorly wash-resistant.',
    },
    {
      type: 'title',
      text: 'Bath Control: WOF, Temperature and pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'For professional and repeatable results, the concept of <strong>WOF (Weight of Fabric)</strong> is the rule. Everything is measured as a percentage of the dry fiber weight. Excess mordant can saturate the fiber leaving it harsh or with metallic deposits that alter the final color.',
    },
    {
      type: 'tip',
      title: 'The Thermal Ramp',
      html: 'Heat acts as a catalyst, accelerating the chemical reaction. However, a sudden temperature change in wool can cause scales to permanently lock together, resulting in a felted and shrunken fabric.',
    },
    {
      type: 'tip',
      title: 'The pH Factor',
      html: 'Many natural dyes are living pH indicators. pH influences the solubility of salts and the preservation of the fiber. Silk can lose its sheen if the bath is too alkaline. Adjusting pH with citric acid or calcium carbonate is fundamental.',
    },
    {
      type: 'title',
      text: 'Substances and Safety',
      level: 2,
    },
    {
      type: 'card',
      title: 'Potassium Alum',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Universal mordant, colorless and highly effective. The reference for protein fibers.',
    },
    {
      type: 'card',
      title: 'Cream of Tartar',
      icon: 'mdi:spoon-sugar',
      html: 'Assistant that improves fixation and softness in animal fibers. Maintains acid pH.',
    },
    {
      type: 'tip',
      title: 'Safety Protocol',
      html: 'Use pots exclusively for dyeing, never for food preparation.<br>Wear gloves and a mask when handling powdered mordants.<br>Ensure constant ventilation to avoid vapor buildup.',
    },
  ],
  ui: {
    profileTitle: 'Profile Selection',
    profileDesc: 'The chemical protocol is divided according to the molecular origin of the fiber',
    proteinTitle: 'Protein Fibers',
    proteinOrigin: 'Animal Origin',
    proteinDesc: 'Wool, silk, alpaca, mohair or cashmere. Require controlled temperatures and acid pH.',
    cellulosicTitle: 'Cellulosic Fibers',
    cellulosicOrigin: 'Plant Origin',
    cellulosicDesc: 'Cotton, linen, hemp or jute. Require pre-mordanting with tannins to fix the pigment.',
    wofTitle: 'WOF Calculator',
    weightLabel: 'Dry Garment Weight (g)',
    weightUnit: 'g',
    wofEmptyMsg: 'Select a profile to enable calculations',
    alumLabel: 'Alum',
    cremLabel: 'Cream of Tartar',
    ironLabel: 'Iron (Caution)',
    rampTitle: 'Thermal Ramp',
    rampEmptyTitle: 'Awaiting Selection',
    rampEmptyDesc: 'Choose a fiber to see the thermal cycle',
    phTitle: 'pH Stabilizer',
    phDesc: 'Critical factor for color saturation',
    phVolumeLabel: 'Bath Volume (L)',
    phSliderLabel: 'Current pH',
    phAcidLabel: 'Acid (1)',
    phAlkalineLabel: 'Alkaline (14)',
    phEmptyMsg: 'Select a profile to enable stabilizer',
    phStrings: {
      optimal: 'Optimal pH',
      raisePrefix: 'Add Calcium Carbonate or Soda Ash. Approx.',
      raiseSuffix: 'g to raise to',
      lowerPrefix: 'Add Citric Acid or Vinegar. Approx.',
      lowerSuffix: 'ml to lower to',
    },
    proteinFibers: [
      { id: 'wool', name: 'Wool / Merino', icon: 'mdi:sheep' },
      { id: 'silk', name: 'Silk', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Cashmere', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Mohair', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaca', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Cotton', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Linen', icon: 'mdi:leaf' },
    ],
  },
};
