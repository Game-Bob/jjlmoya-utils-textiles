import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'test-combustion-textile';
const title = 'Test de Combustion Textile';
const description =
  "Identifiez la composition réelle de n'importe quel tissu en analysant son comportement à la combustion. Différenciez scientifiquement le coton, la laine, la soie et les synthétiques.";

const faqData = [
  {
    question: 'Est-il sûr d\'effectuer un test de combustion à la maison?',
    answer:
      "Oui, à condition de prendre des précautions extrêmes : utilisez des pinces métalliques, travaillez sur une surface ignifuge (céramique ou métal), gardez de l'eau à portée et effectuez le test dans un endroit ventilé. Vous n'avez besoin que d'un petit échantillon de 1x1 cm ou de quelques fils.",
  },
  {
    question: 'Comment sent le coton quand il brûle?',
    answer:
      'Le coton est de la cellulose pure. En brûlant, il sent exactement comme du papier brûlé ou des feuilles sèches. La cendre résultante est grise, très fine et s\'effrite au toucher.',
  },
  {
    question: 'Qu\'indique une bille noire et dure à l\'extrémité de la fibre?',
    answer:
      'C\'est le signe indéniable d\'une fibre synthétique (plastique), comme le polyester ou le nylon. En fondant, le polymère s\'agglomère en une perle plastique qui ne s\'émiette pas, contrairement aux cendres des fibres naturelles.',
  },
  {
    question: 'Pourquoi la laine sent-elle mauvais quand elle brûle?',
    answer:
      'La laine et la soie sont des protéines animales qui contiennent du soufre. Au contact du feu, elles émettent une odeur pénétrante de cheveux brûlés ou de plumes brûlées. C\'est le moyen le plus simple de les différencier des fibres végétales.',
  },
];

const howToData = [
  {
    name: 'Extraire un échantillon représentatif',
    text: 'Coupez un petit carré du tissu ou, mieux encore, extrayez quelques fils de la chaîne (vertical) et de la trame (horizontal).',
  },
  {
    name: "Observer l'approche de la flamme",
    text: 'Approchez lentement la fibre du feu sans le toucher. Observez si elle rétrécit, fond ou prend feu immédiatement.',
  },
  {
    name: 'Analyser le type de flamme et de fumée',
    text: 'Notez si la flamme est constante ou s\'éteint seule, et si la fumée est blanche, noire ou inexistante.',
  },
  {
    name: 'Évaluer le résidu et l\'odeur',
    text: "Une fois refroidi, touchez la cendre ou la perle résultante et percevez l'odeur (papier, cheveux ou chimique) pour confirmer la famille de la fibre.",
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
  inLanguage: 'fr',
};

const flame = {
  cellulosic: 'Brûle VITE et avec ÉCLAT (flamme jaune). Ne fond pas. Continue de brûler à l\'écart.',
  protein: 'Brûle LENTEMENT, crépite et SE RÉTRACTE loin de la flamme. S\'éteint seule à l\'écart.',
  synthetic: 'FOND et se contracte rapidement, goutte comme du plastique fondu. Flamme fumeuse.',
};

const odor = {
  paper: 'Papier brûlé, bois, feuilles sèches.',
  hair: 'Cheveux brûlés, corne brûlée, plumes.',
  chemical_sweet: 'Chimique AROMATIQUE (doux, fruité).',
  chemical_fishy: 'Chimique AIGRE (poisson, viande rôtie).',
  vegetable: 'Légumes cuits (céleri).',
};

const residue = {
  ash_soft: 'Cendre GRISE/NOIRE fine, douce et volatile (se désintègre au toucher).',
  ash_shape: 'Cendre GRISE conservant la forme de la fibre (friable).',
  bead_crushable: "Masse noire creuse/friable (s'écrase facilement avec les doigts).",
  bead_hard: 'Perle DURE et vitreuse. Impossible à briser avec les doigts.',
  bead_irregular: 'Masse noire DURE et irrégulière.',
};

const smoke = {
  white_gray: 'Blanc / Gris clair.',
  gray: 'Gris moyen.',
  black: 'Noir DENSE et sombre.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
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
      text: 'La Science Forensique du Filament',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Le test de combustion est la méthode analytique la plus rapide et précise pour différencier les polymères naturels des synthétiques sans recourir au microscope électronique. En soumettant une fibre à la chaleur, son comportement moléculaire révèle son origine : depuis la cellulose végétale jusqu'aux protéines animales ou aux dérivés du pétrole.",
    },
    {
      type: 'card',
      title: 'Fibres Cellulosiques',
      icon: 'mdi:leaf',
      html: 'Le <strong>Coton</strong> et le <strong>Lin</strong> brûlent rapidement sans fondre. Ils sentent le papier brûlé car ils proviennent du bois ou des plantes, laissant une cendre grise volatile qui se disperse en soufflant.',
    },
    {
      type: 'card',
      title: 'Fibres Protéiques',
      icon: 'mdi:sheep',
      html: 'La <strong>Laine</strong> et la <strong>Soie</strong> s\'éloignent de la flamme. Leur odeur caractéristique de cheveux brûlés indique la présence de soufre et de kératine. Le résidu est une perle noire qui se pulvérise au toucher.',
    },
    {
      type: 'card',
      title: 'Fibres Synthétiques',
      icon: 'mdi:bottle-soda-classic',
      html: 'Le <strong>Polyester</strong> et le <strong>Nylon</strong> sont essentiellement des plastiques. Ils fondent en formant une goutte chaude qui durcit en une perle vitreuse impossible à briser, avec une odeur chimique piquante.',
    },
    {
      type: 'title',
      text: 'Matrice de Preuves Chimiques',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Une analyse précise nécessite de croiser au moins trois preuves. L'odeur est l'indicateur le plus fiable pour identifier les mélanges : si un tissu de \"lin\" dégage un léger arôme plastique et laisse des résidus durs, cela indique un mélange polyester non déclaré.",
    },
    {
      type: 'tip',
      title: 'Protocole de Sécurité de Laboratoire',
      html: '<strong>Ventilation critique :</strong> Les fibres synthétiques libèrent des gaz toxiques en brûlant. Ne jamais effectuer ce test dans des espaces fermés.<br><strong>Extinction immédiate :</strong> Toujours garder un récipient d\'eau à portée. Certaines fibres synthétiques peuvent fondre et adhérer à la peau.',
    },
  ],
  ui: {
    investigationLabel: 'INVESTIGATION',
    stepPrefix: 'ÉTAPE',
    stepCompleted: 'ANALYSE COMPLÈTE',
    resetLabel: 'RECOMMENCER',
    positiveId: 'IDENTIFICATION POSITIVE',
    flameLabel: 'Comportement Flamme',
    odorLabel: 'Trace Olfactive',
    residueLabel: 'Résidu',
    identifiedAs: 'Échantillon identifié positivement comme',
    safetyTitle: 'Protocole de Sécurité',
    safetyText:
      "Effectuez ce test dans un endroit ventilé, sur une surface ignifuge. Utilisez des pinces métalliques et gardez de l'eau à portée.",
    questions: {
      flame: 'Comportement face à la flamme ?',
      odor: 'Odeur caractéristique ?',
      residue: 'Résidu final ?',
      smoke: 'Type de fumée ?',
    },
    fiberData: {
      cotton: { name: 'Coton', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Fibre végétale naturelle, douce et respirante. La reine des basiques.' },
      linen: { name: 'Lin', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Fibre végétale très résistante, fraîche et caractéristiquement froissée.' },
      wool: { name: 'Laine / Mérinos', icon: 'mdi:sheep', color: '#FCD34D', description: 'Fibre animale protéique, excellent isolant thermique et élastique.' },
      silk: { name: 'Soie', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Fibre animale à filament continu. Éclat naturel et toucher sec.' },
      cashmere: { name: 'Cachemire', icon: 'mdi:crown', color: '#F59E0B', description: 'Fibre de luxe de la chèvre de Cachemire. Extrêmement douce et légère.' },
      mohair: { name: 'Mohair', icon: 'mdi:shimmer', color: '#14B8A6', description: 'La "fibre diamant" de la chèvre d\'Angora. Éclat naturel et élastique.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Poil du lapin angora. Effet "halo" duveteux et légèreté extrême.' },
      alpaca: { name: 'Alpaga', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Trésor des Andes. Fibre creuse, thermique, hypoallergénique et soyeuse.' },
      polyester: { name: 'Polyester', icon: 'mdi:oil', color: '#94A3B8', description: 'Fibre synthétique dérivée du pétrole. Résistante, infroissable, non respirante.' },
      nylon: { name: 'Nylon (Polyamide)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Fibre synthétique très résistante à la traction et à l\'abrasion.' },
      acrylic: { name: 'Acrylique', icon: 'mdi:resize', color: '#450A0A', description: 'Imitation laine synthétique. Douce, chaude, fait facilement des boulettes.' },
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
