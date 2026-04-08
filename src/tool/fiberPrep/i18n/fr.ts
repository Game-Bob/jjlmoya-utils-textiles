import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'preparation-fibres-teinture-naturelle';
const title = 'Préparation des Fibres pour la Teinture Naturelle';
const description =
  'Calculateur WOF, protocoles de mordançage et rampes thermiques pour préparer la laine, la soie et le coton avant la teinture naturelle.';

const faqData = [
  {
    question: 'Qu\'est-ce que le WOF (Weight of Fiber) ?',
    answer:
      'Le WOF est le système standard pour calculer la quantité de pigment ou de mordant nécessaire. Il se base sur le poids sec de la fibre. Par exemple, 100% de WOF d\'écorces d\'oignon pour 100g de laine signifie que vous avez besoin de 100g d\'écorces d\'oignon.',
  },
  {
    question: 'Pourquoi le mordançage est-il nécessaire ?',
    answer:
      'Le mordant (comme l\'alun) agit comme un pont chimique entre la fibre textile et le pigment naturel. Sans lui, la plupart des teintures ne se fixeraient pas et disparaîtraient au premier lavage (faible solidité à la lumière et au frottement).',
  },
  {
    question: 'Quelle est la différence entre préparer des fibres animales et végétales ?',
    answer:
      'Les fibres animales (protéiques comme la laine) acceptent très bien l\'alun seul. Les fibres végétales (cellulosiques comme le coton ou le lin) nécessitent une étape préalable de tanins pour "tromper" la fibre et lui faire accepter le mordant métallique.',
  },
  {
    question: 'Qu\'est-ce que la rampe thermique en teinture ?',
    answer:
      'C\'est l\'augmentation graduelle de la température (env. 1-2°C par minute) du bain de teinture. C\'est crucial pour éviter le choc thermique, notamment avec la laine, qui peut feutrer ou rétrécir si les changements de température sont brusques.',
  },
];

const howToData = [
  {
    name: 'Nettoyage et dégraissage',
    text: 'Lavez la fibre avec un détergent neutre pour éliminer les huiles, cires ou amidons industriels qui empêchent le mordant de pénétrer uniformément.',
  },
  {
    name: 'Peser la fibre sèche',
    text: 'Obtenez le poids exact du matériau sec. Cette valeur est la base de tous les calculs WOF (Weight of Fiber).',
  },
  {
    name: 'Calcul et bain de mordant',
    text: 'Dissolvez le mordant (ex. alun de potassium à 15% WOF) dans l\'eau chaude et immergez la fibre, en maintenant une température constante selon le protocole.',
  },
  {
    name: 'Maturation et rinçage',
    text: 'Laissez reposer la fibre mordancée (de préférence 24h) pour que le métal se fixe profondément avant de passer au bain de teinture définitif.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'La Escuela Artesana - Atelier de Teintures Naturelles sur Laine',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Artiste Textile et Teintures Naturelles',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Science derrière le Mordançage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Préparer une fibre pour la teinture n\'est pas simplement la laver. C\'est un processus d\'ingénierie chimique au niveau moléculaire appelé mordançage. Le mot vient du latin <i>mordere</i> (mordre), et sa fonction est d\'agir comme un pont chimique entre la fibre et le pigment. Sans ce pont, la plupart des teintures naturelles se laveraient simplement au premier rinçage.',
    },
    {
      type: 'card',
      title: 'Concept Clé',
      icon: 'mdi:molecule',
      html: 'Le mordant possède des valences disponibles qui se fixent simultanément aux polymères de la fibre et à la molécule colorante.',
    },
    {
      type: 'title',
      text: 'Différenciation des Fibres',
      level: 2,
    },
    {
      type: 'card',
      title: 'Fibres Protéiques : Laine et Soie',
      icon: 'mdi:sheep',
      html: 'Ces fibres sont composées de chaînes d\'acides aminés avec une affinité naturelle élevée pour les métaux. La chaleur ouvre les écailles de la fibre permettant aux sels d\'alun de pénétrer profondément. La <strong>Crème de Tartre</strong> est vitale pour maintenir le pH acide qui préserve la douceur.',
    },
    {
      type: 'card',
      title: 'Fibres Cellulosiques : Coton et Lin',
      icon: 'mdi:leaf',
      html: 'La cellulose n\'a pas de sites de liaison facilement disponibles. C\'est pourquoi nous utilisons le <strong>protocole en deux étapes</strong> : d\'abord des tanins qui se fixent à la cellulose, puis l\'alun se fixe à ces tanins. Sans ce pré-traitement, la couleur sera pâle et peu résistante au lavage.',
    },
    {
      type: 'title',
      text: 'Contrôle du Bain : WOF, Température et pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pour des résultats professionnels et reproductibles, le concept de <strong>WOF (Weight of Fabric)</strong> est la loi. Tout se mesure en pourcentage du poids sec de la fibre. Un excès de mordant peut saturer la fibre en la laissant rugueuse ou avec des dépôts métalliques qui altèrent la couleur finale.',
    },
    {
      type: 'tip',
      title: 'La Rampe Thermique',
      html: 'La chaleur agit comme catalyseur, accélérant la réaction chimique. Cependant, un changement brusque de température dans la laine peut provoquer que les écailles s\'accrochent définitivement, résultant en un tissu feutré et rétréci.',
    },
    {
      type: 'tip',
      title: 'Le Facteur pH',
      html: 'De nombreux teintures naturelles sont des indicateurs de pH vivants. Le pH influence la solubilité des sels et la conservation de la fibre. La soie peut perdre son éclat si le bain est trop alcalin. Ajuster le pH avec de l\'acide citrique ou du carbonate de calcium est fondamental.',
    },
    {
      type: 'title',
      text: 'Substances et Sécurité',
      level: 2,
    },
    {
      type: 'card',
      title: 'Alun de Potassium',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Mordant universel, incolore et très efficace. La référence pour les fibres protéiques.',
    },
    {
      type: 'card',
      title: 'Crème de Tartre',
      icon: 'mdi:spoon-sugar',
      html: 'Assistant qui améliore la fixation et la douceur des fibres animales. Maintient le pH acide.',
    },
    {
      type: 'tip',
      title: 'Protocole de Sécurité',
      html: 'Utilisez des casseroles exclusivement pour la teinture, jamais pour la préparation alimentaire.<br>Portez des gants et un masque lors de la manipulation de mordants en poudre.<br>Assurez une ventilation constante pour éviter l\'accumulation de vapeurs.',
    },
  ],
  ui: {
    profileTitle: 'Sélection du Profil',
    profileDesc: 'Le protocole chimique se divise selon l\'origine moléculaire de la fibre',
    proteinTitle: 'Fibres Protéiques',
    proteinOrigin: 'Origine Animale',
    proteinDesc: 'Laine, soie, alpaga, mohair ou cachemire. Nécessitent des températures contrôlées et un pH acide.',
    cellulosicTitle: 'Fibres Cellulosiques',
    cellulosicOrigin: 'Origine Végétale',
    cellulosicDesc: 'Coton, lin, chanvre ou jute. Nécessitent un pré-mordançage aux tanins pour fixer le pigment.',
    wofTitle: 'Calculateur WOF',
    weightLabel: 'Poids du Vêtement Sec (g)',
    weightUnit: 'g',
    wofEmptyMsg: 'Sélectionnez un profil pour activer les calculs',
    alumLabel: 'Alun',
    cremLabel: 'Crème de Tartre',
    ironLabel: 'Fer (Attention)',
    rampTitle: 'Rampe Thermique',
    rampEmptyTitle: 'En attente de sélection',
    rampEmptyDesc: 'Choisissez une fibre pour voir le cycle thermique',
    phTitle: 'Stabilisateur de pH',
    phDesc: 'Facteur critique pour la saturation de la couleur',
    phVolumeLabel: 'Volume du Bain (L)',
    phSliderLabel: 'pH Actuel',
    phAcidLabel: 'Acide (1)',
    phAlkalineLabel: 'Alcalin (14)',
    phEmptyMsg: 'Sélectionnez un profil pour activer le stabilisateur',
    phStrings: {
      optimal: 'pH optimal',
      raisePrefix: 'Ajouter Carbonate de Calcium ou Soude. Env.',
      raiseSuffix: 'g pour monter à',
      lowerPrefix: 'Ajouter Acide Citrique ou Vinaigre. Env.',
      lowerSuffix: 'ml pour descendre à',
    },
    proteinFibers: [
      { id: 'wool', name: 'Laine / Mérinos', icon: 'mdi:sheep' },
      { id: 'silk', name: 'Soie', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Cachemire', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Mohair', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaga', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Coton', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Lin', icon: 'mdi:leaf' },
    ],
  },
};
