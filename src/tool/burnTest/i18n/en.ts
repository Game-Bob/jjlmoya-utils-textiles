import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'textile-burn-test';
const title = 'Textile Burn Test';
const description =
  'Identify the real composition of any fabric by analyzing its burning behavior. Scientifically differentiate cotton, wool, silk and synthetics.';

const faqData = [
  {
    question: 'Is it safe to perform a burn test at home?',
    answer:
      'Yes, as long as you take extreme precautions: use metal tweezers, work on a fire-proof surface (ceramic or metal), keep water nearby and perform the test in a ventilated area. You only need a small 1x1 cm sample or a few threads.',
  },
  {
    question: 'How does cotton smell when burned?',
    answer:
      'Cotton is pure cellulose. When burned, it smells exactly like burnt paper or dry leaves. The resulting ash is gray, very fine and crumbles when touched.',
  },
  {
    question: 'What does a hard black bead at the end of the fiber indicate?',
    answer:
      'It is the unmistakable sign of a synthetic fiber (plastic), such as polyester or nylon. As it melts, the polymer agglomerates into a plastic bead that does not crumble, unlike the ash from natural fibers.',
  },
  {
    question: 'Why does wool smell bad when burned?',
    answer:
      'Wool and silk are animal proteins that contain sulfur. When exposed to fire, they emit a penetrating smell of burnt hair or burnt feathers. This is the easiest way to differentiate them from plant fibers.',
  },
];

const howToData = [
  {
    name: 'Extract a representative sample',
    text: 'Cut a small square from the fabric or, even better, pull a few threads from both the warp (vertical) and weft (horizontal).',
  },
  {
    name: 'Observe the approach to the flame',
    text: 'Slowly bring the fiber toward the flame without touching it. Observe whether it shrinks, melts or ignites immediately.',
  },
  {
    name: 'Analyze the type of flame and smoke',
    text: 'Notice whether the flame is steady or self-extinguishes, and whether the smoke is white, black, or absent.',
  },
  {
    name: 'Evaluate the residue and smell',
    text: 'Once cool, touch the resulting ash or bead and perceive the smell (paper, hair or chemical) to confirm the fiber family.',
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

const flame = {
  cellulosic: 'Burns FAST and BRIGHT (yellow flame). Does not melt. Keeps burning when removed.',
  protein: 'Burns SLOWLY, sputters and SHRINKS away from flame. Self-extinguishes when removed.',
  synthetic: 'MELTS and contracts rapidly, drips like molten plastic. Sooty flame.',
};

const odor = {
  paper: 'Burnt paper, wood, dry leaves.',
  hair: 'Burnt hair, burnt horn, feathers.',
  chemical_sweet: 'AROMATIC chemical (sweet, fruity).',
  chemical_fishy: 'SOUR chemical (fish, roasted meat).',
  vegetable: 'Cooked vegetables (celery).',
};

const residue = {
  ash_soft: 'Fine GRAY/BLACK ash, soft and volatile (crumbles when touched).',
  ash_shape: 'GRAY ash maintains fiber shape (friable).',
  bead_crushable: 'Hollow/brittle black mass (easily crushed with fingers).',
  bead_hard: 'HARD and glassy bead. Impossible to break with fingers.',
  bead_irregular: 'HARD and irregular black mass.',
};

const smoke = {
  white_gray: 'White / Light gray.',
  gray: 'Medium gray.',
  black: 'Dense dark BLACK.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'AATCC TM20: Fiber Analysis - Qualitative',
      url: 'https://members.aatcc.org/store/tm20/485/',
    },
    {
      name: 'Textile Fibers: Identification and Testing - NIST',
      url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/circ/nbscircular41e3.pdf',
    },
    {
      name: 'Burn Test Chart for Fiber Identification - Fabric Mart',
      url: 'https://fabricmartfabrics.com/pages/burn-test-chart',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Forensic Science of the Filament',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The burn test is the fastest and most precise analytical method to differentiate natural polymers from synthetic ones without resorting to an electron microscope. By subjecting a fiber to heat, its molecular behavior reveals its origin: from plant cellulose to animal proteins or petroleum derivatives.',
    },
    {
      type: 'card',
      title: 'Cellulosic Fibers',
      icon: 'mdi:leaf',
      html: '<strong>Cotton</strong> and <strong>Linen</strong> burn quickly without melting. They smell like burnt paper because they come from wood or plants, leaving a volatile gray ash that scatters when blown.',
    },
    {
      type: 'card',
      title: 'Protein Fibers',
      icon: 'mdi:sheep',
      html: '<strong>Wool</strong> and <strong>Silk</strong> pull away from the flame. Their characteristic smell of burnt hair indicates the presence of sulfur and keratin. The residue is a black bead that crushes when touched.',
    },
    {
      type: 'card',
      title: 'Synthetic Fibers',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>Polyester</strong> and <strong>Nylon</strong> are essentially plastics. They melt forming a hot drop that hardens into a glassy bead impossible to break, with a sharp chemical smell.',
    },
    {
      type: 'title',
      text: 'Chemical Evidence Matrix',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A precise analysis requires crossing at least three pieces of evidence. Smell is the most reliable indicator for identifying blends: if a "linen" fabric gives off a slight plastic aroma and leaves hard residues, it indicates an undeclared polyester blend.',
    },
    {
      type: 'tip',
      title: 'Laboratory Safety Protocol',
      html: '<strong>Critical ventilation:</strong> Synthetic fibers release toxic gases when burning. Never perform this test in enclosed spaces.<br><strong>Immediate extinguishing:</strong> Always keep a container of water nearby. Some synthetic fibers can melt and adhere to skin.',
    },
  ],
  ui: {
    investigationLabel: 'INVESTIGATION',
    stepPrefix: 'STEP',
    stepCompleted: 'ANALYSIS COMPLETE',
    resetLabel: 'RESTART',
    positiveId: 'POSITIVE IDENTIFICATION',
    flameLabel: 'Flame Behavior',
    odorLabel: 'Olfactory Trace',
    residueLabel: 'Residue',
    identifiedAs: 'Sample positively identified as',
    safetyTitle: 'Safety Protocol',
    safetyText:
      'Perform this test in a ventilated area, on a fire-proof surface. Use metal tweezers and keep water nearby.',
    questions: {
      flame: 'Behavior in the flame?',
      odor: 'Characteristic smell?',
      residue: 'Final residue?',
      smoke: 'Type of smoke?',
    },
    fiberData: {
      cotton: { name: 'Cotton', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Natural vegetable fiber, soft and breathable. The king of basics.' },
      linen: { name: 'Linen', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Very strong vegetable fiber, cool and characteristically wrinkled.' },
      wool: { name: 'Wool / Merino', icon: 'mdi:sheep', color: '#FCD34D', description: 'Animal protein fiber, excellent thermal insulator and elastic.' },
      silk: { name: 'Silk', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Animal continuous filament fiber. Natural sheen and dry touch.' },
      cashmere: { name: 'Cashmere', icon: 'mdi:crown', color: '#F59E0B', description: 'Luxury Kashmir goat fiber. Extremely soft, lightweight and warm.' },
      mohair: { name: 'Mohair', icon: 'mdi:shimmer', color: '#14B8A6', description: 'The "diamond fiber" of the Angora goat. Natural sheen, very resistant.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Angora rabbit hair. Known for its fluffy "halo" effect and extreme lightness.' },
      alpaca: { name: 'Alpaca', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Treasure of the Andes. Hollow, thermal, hypoallergenic and silky fiber.' },
      polyester: { name: 'Polyester', icon: 'mdi:oil', color: '#94A3B8', description: 'Synthetic petroleum-based fiber. Resistant, wrinkle-free, non-breathable.' },
      nylon: { name: 'Nylon (Polyamide)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Highly resistant synthetic fiber for traction and abrasion.' },
      acrylic: { name: 'Acrylic', icon: 'mdi:resize', color: '#450A0A', description: 'Synthetic wool imitation. Soft, warm, pills easily.' },
    },
    burnTestData: [
      { fiberId: 'cotton', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_soft },
      { fiberId: 'linen', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_shape },
      { fiberId: 'wool', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'silk', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'cashmere', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'mohair', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'angora', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'alpaca', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'polyester', flame: flame.synthetic, odor: odor.chemical_sweet, smoke: smoke.black, residue: residue.bead_hard },
      { fiberId: 'nylon', flame: flame.synthetic, odor: odor.vegetable, smoke: smoke.white_gray, residue: residue.bead_hard },
      { fiberId: 'acrylic', flame: flame.synthetic, odor: odor.chemical_fishy, smoke: smoke.black, residue: residue.bead_irregular },
    ],
  },
};
