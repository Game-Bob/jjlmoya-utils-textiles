import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'stain-chemical-protocol';
const title = 'Stain Chemical Protocol for Textiles';
const description =
  'Scientific protocols to remove stains based on fiber type and the chemical nature of the stain. Percarbonate, enzymes, solvents: the right method for every case.';

const faqData = [
  {
    question: 'Can I use bleach instead of percarbonate?',
    answer:
      'Bleach (sodium hypochlorite) is highly corrosive. It degrades fibers, turning them yellow and brittle. Percarbonate bleaches via active oxygen, preserving the natural molecular structure.',
  },
  {
    question: 'Why does vinegar help with odors?',
    answer:
      'Body odors are typically alkaline. The acetic acid in vinegar neutralizes them, converting them into odorless salts that are completely removed during rinsing.',
  },
  {
    question: 'Should I always use cold water for blood?',
    answer:
      'Yes. Heat coagulates the proteins in blood, permanently bonding them to the fiber. Cold water keeps the stain in a soluble state and allows enzymatic agents to work effectively.',
  },
  {
    question: 'What happens if I apply acetone to an acetate garment?',
    answer:
      'Acetone dissolves triacetate and acetate. Acetate fibers are cellulose esterified with acetic acid and are completely soluble in acetone. The result would be irreversible destruction of the fabric.',
  },
];

const howToData = [
  {
    name: 'Identify the fiber type',
    text: 'Check the inner label of the garment to know if it is a natural, synthetic, or noble fiber (wool, silk, cashmere).',
  },
  {
    name: 'Select the fiber in the tool',
    text: 'Choose the corresponding material in the first selector.',
  },
  {
    name: 'Select the stain type',
    text: 'Indicate whether the stain is organic (wine, fruit), protein-based (blood), greasy, or synthetic (ink).',
  },
  {
    name: 'Apply the indicated protocol',
    text: 'Follow the instructions for agent, temperature, and method. Pay special attention to critical warning notices.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Stain Chemical Protocol',
    fiberLabel: '1. Fiber',
    selectFiberPlaceholder: 'Select the fabric...',
    stainLabel: '2. Stain',
    selectStainPlaceholder: 'What happened?',
    molecularDiagnosis: 'Molecular Diagnosis',
    requiredAgent: 'Required Agent',
    thermalCondition: 'Thermal Condition',
    temperature: 'Temperature',
    cleaningInstructions: 'Cleaning Instructions',
    criticalWarning: 'Critical Warning',
    criticalWarningLabel: 'WARNING',
    technicalNote: 'Technical note',
    technicalNoteText:
      'Always validate dye fastness on a hidden area before proceeding with the full chemical treatment.',
    systemDiagnosis: 'Diagnosis System',
    systemDiagnosisDesc: 'Configure the textile parameters to get the cleaning roadmap',
    delicatePercarbonateWarning:
      'RISK OF MOLECULAR DEGRADATION. Animal fibers are highly sensitive to percarbonate. Test on a hidden area first.',
    fiberData: {
      cotton: { name: 'Cotton', family: 'natural', isNoble: false },
      linen: { name: 'Linen', family: 'natural', isNoble: true },
      wool: { name: 'Wool / Merino', family: 'natural', isNoble: true },
      silk: { name: 'Silk', family: 'natural', isNoble: true },
      cashmere: { name: 'Cashmere', family: 'natural', isNoble: true },
      mohair: { name: 'Mohair', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpaca', family: 'natural', isNoble: true },
      polyester: { name: 'Polyester', family: 'synthetic', isNoble: false },
      viscose: { name: 'Viscose / Rayon', family: 'artificial', isNoble: false },
      nylon: { name: 'Nylon (Polyamide)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Acrylic', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Sodium Percarbonate',
        description: 'Biodegradable oxygen-based bleach. Releases active oxygen when dissolved.',
        warning: 'Avoid on protein fibers (silk, wool) at high concentrations.',
      },
      isopropyl: {
        name: 'Isopropyl Alcohol',
        description: 'Effective solvent for pigments and light grease.',
        warning: 'Can damage the sheen of silk and dissolve some acrylics if not diluted.',
      },
      acetone: {
        name: 'Acetone',
        description: 'Powerful solvent for nail polish and adhesives.',
        warning: 'FORBIDDEN on acetates and triacetates (dissolves the fiber).',
      },
      enzyme: {
        name: 'Enzymatic Detergent',
        description: 'Contains proteases that break down biological stains.',
        warning: 'Use with caution on wool and silk (they are proteins).',
      },
      vinegar: {
        name: 'White Vinegar',
        description: 'Mild acetic acid to neutralize odors and fix colors.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Red Wine / Fruit',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Extended soak' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Direct paste' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Cold',
            method: 'Rinse with sparkling water and vinegar',
            notes: 'Do not rub',
          },
        },
      },
      {
        id: 'blood',
        name: 'Blood',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Cold',
            method: 'Soak in salted water then apply enzyme',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Cold', method: 'Direct application' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Cold',
            method: 'Immediate rinse, avoid heat',
          },
        },
      },
      {
        id: 'grease',
        name: 'Grease / Oil',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Dissolve with alcohol then wash',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Place absorbent paper underneath',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Cold',
            method: 'Dilute alcohol to 50%',
          },
        },
      },
      {
        id: 'ink',
        name: 'Ink / Marker',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Room temp',
            method: 'Dab from outside inward',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Room temp',
            method: 'Caution with spreading',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Cold',
            method: 'Dilute and test on hidden area',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'The Chemistry Behind Textile Cleaning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Not all stains are the same, and not all fibers react the same way to the same chemical agents. The difference between saving a garment and ruining it lies in understanding the molecular nature of the stain and the structure of the fiber.',
    },
    {
      type: 'card',
      title: '01 — Controlled Oxidation',
      icon: 'mdi:atom',
      html: '<strong>Sodium percarbonate</strong> releases active oxygen that breaks the double bonds of chromophores (the molecules responsible for the stain\'s color), rendering them colorless and water-soluble. It is the most effective method for organic stains.',
    },
    {
      type: 'card',
      title: '02 — Solubilization by Solvents',
      icon: 'mdi:flask-outline',
      html: 'Stains like oil or ink are not water-soluble. Solvents such as <strong>isopropyl alcohol</strong> or <strong>acetone</strong> reduce surface tension and attract the non-polar molecules of the stain, allowing them to be transferred to a support medium.',
    },
    {
      type: 'title',
      text: 'Fiber Sovereignty: Why Fiber Type Matters',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Not all fibers "eat" the same way. <strong>Silk and wool</strong> are proteins (fibroin and keratin). If you apply an enzymatic detergent designed to "eat proteins" (blood or egg stains) without control, the detergent will start to degrade the fiber itself, destroying its sheen and the fabric\'s structure.',
    },
    {
      type: 'title',
      text: 'The Danger of Heat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'One of the most common mistakes is using hot water to "soften" a blood stain. Chemically, heat causes the <strong>coagulation of the proteins</strong> in the stain, permanently bonding them to the porous structure of the fiber. Protein stains must always be treated with cold water.',
    },
    {
      type: 'tip',
      title: 'Emergency Protocol: Red Wine',
      html: '<strong>A. Passive absorption:</strong> Blot with absorbent paper, never rub to avoid mechanical spreading.<br><strong>B. Osmotic neutralization:</strong> Cover with fine salt to draw the liquid out from the core of the fiber.<br><strong>C. Chemical action:</strong> Apply a paste of percarbonate and water at 40°C if the fiber is heat-resistant.',
    },
    {
      type: 'title',
      text: 'Specific Solvents and Precautions',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Acetone</strong> is an exceptional solvent for nail polish or adhesives, but it is destructive to <strong>acetate</strong> fabric. As fibers derived from cellulose but chemically treated, acetone literally dissolves the fabric.',
    },
    {
      type: 'paragraph',
      html: '<strong>Isopropyl alcohol</strong> is more stable, but on dyed synthetics it can carry away the pigment itself. We always recommend the "hem test" on a hidden area before the main treatment.',
    },
  ],
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'AATCC - Association for Advancing Color Technology and Chemistry',
      url: 'https://www.aatcc.org',
    },
    {
      name: 'Kissa, E. — Textile Auxiliaries',
      url: 'https://www.springer.com/gp/book/9783642057328',
    },
    {
      name: 'ISO 105 — Textiles: Tests for Colour Fastness',
      url: 'https://www.iso.org/standard/72682.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
