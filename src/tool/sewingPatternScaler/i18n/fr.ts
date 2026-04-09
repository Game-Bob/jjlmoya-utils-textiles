import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'dimensionneur-patron-couture';
const title = 'Dimensionneur de Patron de Couture en Ligne';
const description =
  'Ajustez n\'importe quel patron de couture à vos mesures réelles. Calculateur de mise à l\'échelle différentielle avec prévisualisation du patron mis à jour.';

const faqData = [
  {
    question: 'Pourquoi l\'épaule ne grandit-elle pas autant que la poitrine ?',
    answer:
      'Le corps humain n\'est pas une sphère. Alors que le volume du torse peut varier significativement, le squelette et les points d\'articulation comme l\'épaule sont beaucoup plus statiques. Une mise à l\'échelle professionnelle applique des facteurs différenciés pour ne pas déséquilibrer le vêtement.',
  },
  {
    question: 'Qu\'est-ce que l\'aisance ?',
    answer:
      'C\'est l\'espace supplémentaire entre votre corps et le tissu. Sans aisance, vous ne pourriez pas vous déplacer. Notre calculateur maintient cette aisance pour que le vêtement vous aille exactement comme le designer l\'a conçu, mais adapté à vos contours réels.',
  },
  {
    question: 'Puis-je mettre à l\'échelle un patron en maille ou jersey ?',
    answer:
      'Oui, mais gardez à l\'esprit que les tissus extensibles ont généralement une aisance négative. Si le patron est très ajusté, assurez-vous que le facteur d\'élasticité est le même dans le nouveau tissu que vous choisissez.',
  },
];

const howToData = [
  {
    name: 'Mesurez votre patron',
    text: 'Mesurez les lignes horizontales clés (poitrine, taille et hanches) sur les pièces en papier de votre patron original, couture à couture.',
  },
  {
    name: 'Configurez l\'origine',
    text: 'Entrez la taille du patron ou les mesures que vous avez prises dans la colonne "Origine" de notre outil.',
  },
  {
    name: 'Entrez la destination',
    text: 'Mettez vos mesures réelles ou la taille que vous souhaitez atteindre. L\'outil calculera la différence exacte par zone.',
  },
  {
    name: 'Appliquez à la table',
    text: 'Suivez les instructions "Actions à la Table de Coupe" pour ajouter ou retirer des centimètres sur les côtés et les ourlets de vos pièces.',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'Patronaje: Las Bases - Teresa Gilewska',
      url: 'https://www.scribd.com/document/696165843/patronaje-las-bases-by-teresa-gilewska',
    },
    {
      name: 'Metric Pattern Cutting for Women\'s Wear - Winifred Aldrich',
      url: 'https://download.e-bookshelf.de/download/0000/5989/88/L-G-0000598988-0002339537.pdf',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Comment Mettre à l\'Échelle des Patrons de Couture : Guide Technique et Pratique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>mise à l\'échelle des patrons</strong> est l\'une des compétences les plus critiques dans le monde de la couture. Il ne s\'agit pas simplement d\'agrandir ou de réduire un dessin de façon proportionnelle ; il s\'agit d\'adapter une structure bidimensionnelle aux courbes complexes et aux proportions du corps humain, qui ne grandit pas de façon linéaire.',
    },
    {
      type: 'title',
      text: 'La Clé du Succès : L\'Aisance',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Aisance de mouvement :</strong> Les centimètres supplémentaires nécessaires pour respirer, s\'asseoir et bouger les bras sans que le tissu ne se déchire.',
        '<strong>Aisance de design :</strong> Les centimètres que le designer a ajoutés pour créer une silhouette spécifique (par exemple, un manteau oversize ou un chemisier vaporeux).',
      ],
    },
    {
      type: 'tip',
      title: 'Conseil pour une Mise à l\'Échelle Professionnelle',
      html: '<p><strong>Ne mettez pas à l\'échelle plus de deux ou trois tailles :</strong> Si vous essayez de passer d\'une taille 36 à une taille 52, l\'emmanchure va probablement se déformer et l\'encolure sera énorme. Dans ces cas, il vaut mieux redessiner le patron de base en utilisant vos mesures depuis le début.</p>',
    },
    {
      type: 'title',
      text: 'Avantages de la mise à l\'échelle numérique',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Maintient la proportion exacte du design original.',
          con: 'Les emmanchures peuvent nécessiter un léger lissage manuel.',
        },
        {
          pro: 'Calcul instantané de l\'aisance nécessaire.',
          con: 'Ne détecte pas automatiquement si le patron inclut déjà la marge de couture.',
        },
        {
          pro: 'Visualisation graphique de la croissance de la pièce.',
          con: 'Nécessite une prise de mesures initiale très précise.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Différentiel', definition: 'Différence de mesure entre deux tailles consécutives.' },
        { term: 'Points d\'Ancrage', definition: 'Zones du patron qui ne bougent pas (généralement le centre devant/dos).' },
        { term: 'Nid de Gradation', definition: 'Dessin superposé de toutes les tailles mises à l\'échelle.' },
        { term: 'Patron de Base', definition: 'Gabarit sans design ni aisance qui correspond aux mesures du corps.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'SYSTÈME DE TRAVAIL',
    modeStandard: 'Tailles Standard',
    modeCustom: 'Mesures Réelles',
    labelPatternSize: 'Taille du Patron',
    labelTargetSize: 'Taille Cible',
    labelOriginMeasures: 'MESURES D\'ORIGINE',
    labelTargetMeasures: 'VOS MESURES',
    labelEase: 'Aisance Actuelle',
    labelChest: 'Poitrine',
    labelWaist: 'Taille',
    labelHips: 'Hanches',
    labelLength: 'Longueur',
    resBust: 'Buste',
    resWaist: 'Taille',
    resHips: 'Hanches',
    resLength: 'Longueur',
    actionLatAdd: 'Ajoutez',
    actionLatRemove: 'Retirez',
    actionLatSuffix: 'au côté de la pièce',
    actionLatNote: 'Ajustement au quart du patron',
    actionLenExtend: 'Allongez le patron',
    actionLenShorten: 'Raccourcissez le patron',
    actionLenNote: 'Ajustement à la ligne d\'ourlet',
    legendOriginal: 'Original',
    legendUpdated: 'Mis à jour',
    warnText: 'Mise à l\'échelle supérieure à 3 tailles. Risque de déformation de l\'emmanchure.',
    sizePrefix: 'Taille',
  },
};
