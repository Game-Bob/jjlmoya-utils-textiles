import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'verite-textile';
const title = 'Analyse de la Qualité Textile | Vérité Textile';
const description = 'Découvrez la qualité réelle de vos vêtements en analysant leur composition. Est-ce du vrai coton ou du plastique coûteux ? Analyse scientifique des fibres.';

const faqData = [
  {
    question: 'Qu\'est-ce que le "Greenwashing" dans la mode ?',
    answer: 'C\'est une technique de marketing où les marques utilisent des termes comme "Éco-responsable" ou "Durable" sans preuve réelle. Analyser la composition réelle des fibres est le seul moyen de vérifier si un vêtement est vraiment naturel ou synthétique.',
  },
  {
    question: 'Pourquoi le polyester est-il généralement de moins bonne qualité que le coton ?',
    answer: 'Le polyester est du plastique (PET). Bien que durable, il ne respire pas, favorise les odeurs dues aux bactéries et libère des microplastiques à chaque lavage. Les fibres naturelles comme le coton ou le lin offrent une meilleure régulation thermique.',
  },
  {
    question: 'Est-ce mauvais si mes vêtements contiennent de l\'élasthanne ?',
    answer: 'En petites quantités (1-5 %), l\'élasthanne (Lycra) apporte confort et ajustement. Cependant, il complique énormément le recyclage du vêtement en mélangeant du plastique avec des fibres naturelles, ce qui indique généralement un vêtement de "fast fashion".',
  },
  {
    question: 'Comment repérer un vêtement de haute qualité grâce à son étiquette ?',
    answer: 'Recherchez des compositions mono-matières (100 % Coton, 100 % Laine). Les mélanges complexes sont généralement utilisés pour réduire les coûts de production et cachent des fibres synthétiques sous des noms de marque attrayants.',
  },
];

const howToData = [
  {
    name: 'Localiser l\'étiquette interne',
    text: 'Trouvez l\'étiquette de composition blanche qui se trouve généralement sur la couture intérieure ou au col de votre vêtement.',
  },
  {
    name: 'Identifier les composants',
    text: 'Lisez les pourcentages de chaque fibre (ex: 70 % Coton, 30 % Polyester).',
  },
  {
    name: 'Saisir les données dans l\'analyseur',
    text: 'Tapez les proportions des fibres dans notre outil pour obtenir un score de qualité technique.',
  },
  {
    name: 'Interpréter le diagnostic',
    text: 'Consultez le rapport généré pour comprendre si votre vêtement est respirant, durable ou s\'il nécessite des soins particuliers en raison de sa composition synthétique.',
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Vérité Textile',
    addFiber: 'Ajouter une Fibre',
    total: 'Total',
    composition: 'Analyse de la Composition',
    description: 'Ajoutez les pourcentages tels qu\'ils apparaissent sur l\'étiquette de votre vêtement pour découvrir la vérité sur sa qualité.',
    verdict: 'Verdict',
    breathability: 'Respirabilité',
    durability: 'Durabilité',
    warmth: 'Chaleur',
    careWarning: 'Avertissement de Soins Spéciaux',
    specialCareWarning: 'LAVAGE STANDARD : Suivez toujours les instructions de l\'étiquette physique.',
    validationError: 'La composition doit totaliser exactement 100 % pour voir le verdict',
    actualTotal: 'Actuel',
    missingLabel: 'manquant',
    disclaimer: 'Les données de respirabilité, durabilité et chaleur sont des estimations basées sur les moyennes de l\'industrie pour chaque type de fibre.',
    careWarnings: {
      delicate: 'TRÈS DÉLICAT : Lavage à la main à froid. Ne pas utiliser de sèche-linge. Éviter d\'essorer.',
      wool: 'LAINE / POILS NOBLES : Laver à froid avec un programme spécial. Sécher à plat pour éviter les déformations. Ne pas utiliser de sèche-linge.',
      linen: 'LIN : A tendance à beaucoup se froisser. Repasser légèrement humide pour de meilleurs résultats.',
      semisynthetic: 'SEMI-SYNTHÉTIQUES : Se fragilise lorsqu\'il est mouillé. Manipuler avec soin et ne pas essorer fort.',
      standard: 'LAVAGE STANDARD : Suivez toujours les instructions de l\'étiquette physique.',
    },
    fiberData: {
      cotton: {
        name: 'Coton',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Lin',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Laine / Mérinos',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'Soie',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Cachemire',
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
        name: 'Viscose / Rayonne',
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
        name: 'Acrylique',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: 'Plastique Coûteux',
        description: 'La majeure partie de ce vêtement est du pétrole. Préparez-vous à transpirer et à voir des bouloches rapidement.',
      },
      hook: {
        label: 'Accroche Marketing',
        description: 'Ce faible pourcentage de fibre noble n\'est là que pour l\'étiquette. Vous ne remarquerez pas ses bienfaits.',
      },
      fragile: {
        label: 'Doux mais Fragile',
        description: 'Très agréable au toucher, mais attention au lavage : a tendance à se déformer et à rétrécir facilement.',
      },
      natural: {
        label: 'Qualité Naturelle',
        description: 'Vêtement respirant et durable. Idéal pour les peaux sensibles et un usage prolongé.',
      },
      technical: {
        label: 'Technique / Ultra-Synthétique',
        description: 'À moins qu\'il ne s\'agisse de vêtements de sport spécifiques, vous payez pour du plastique pur.',
      },
      luxury: {
        label: 'Luxe Réel',
        description: 'Un investissement dans le confort et la durabilité. Traitez-le avec le respect qu\'il mérite.',
      },
      balanced: {
        label: 'Mélange Équilibré',
        description: 'Une combinaison fonctionnelle, cherchant probablement à équilibrer coût et durabilité.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'La Vérité Derrière l\'Étiquette : Guide Maître de la Composition Textile', level: 2 },
    { type: 'paragraph', html: 'Vous êtes-vous déjà demandé pourquoi ce t-shirt de marque vous fait tant transpirer, ou pourquoi ce pull "en laine" gratte insupportablement ? La réponse n\'est pas dans le design, mais dans la chimie de ses fibres.' },
    { type: 'paragraph', html: 'Dans un monde dominé par la <strong>Fast Fashion</strong>, la qualité des tissus est passée au second plan derrière l\'esthétique éphémère. Cependant, comprendre la composition textile est le seul moyen de faire un achat intelligent, durable et respectueux de votre peau. Notre outil de <strong>Vérité Textile</strong> analyse les pourcentages officiels pour vous révéler si vous êtes face à un vêtement de qualité ou simplement à un bloc de plastique traité.' },
    { type: 'title', text: 'Notre Méthodologie', level: 2 },
    { type: 'paragraph', html: 'Nous utilisons un algorithme pondéré basé sur trois piliers fondamentaux tirés des normes industrielles européennes et nord-américaines :' },
    { type: 'list', items: ['<strong>Respirabilité :</strong> Capacité de la fibre à laisser passer la vapeur d\'eau et l\'air.', '<strong>Durabilité :</strong> Résistance à l\'abrasion, à la traction et à la formation de <strong>pilling</strong> (bouloches).', '<strong>Efficacité Thermique :</strong> Capacité de rétention de chaleur ou de fraîcheur mécanique.'] },
    { type: 'tip', title: 'Important', html: 'La loi exige que tous les vêtements vendus dans l\'UE et aux États-Unis listent leurs composants par ordre décroissant de pourcentage. Si un vêtement n\'a pas d\'étiquette ou si celle-ci est illisible, méfiez-vous : il ne répond probablement pas aux normes minimales de sécurité textile.' },
    { type: 'title', text: 'Les "Tromperies" Communes dans le Commerce', level: 2 },
    { type: 'paragraph', html: 'Il existe des techniques de marketing sophistiquées conçues pour élever la valeur perçue d\'un vêtement médiocre. Voici comment les repérer :' },
    { type: 'card', title: 'L\'Accroche de la Fibre Noble', icon: 'mdi:alert', html: 'Vous verrez des étiquettes indiquant "AVEC CACHEMIRE" ou "AVEC SOIE" en grosses lettres. En regardant la composition, vous découvrez 3 % de soie et 97 % de polyester. Ces 3 % n\'apportent ni douceur, ni brillance, ni chaleur ; ils ne servent qu\'à permettre à la marque d\'augmenter le prix de 20 %.' },
    { type: 'card', title: 'Le Mythe de la "Viscose Écologique"', icon: 'mdi:leaf', html: 'Bien que la viscose provienne de la cellulose (bois), son processus de fabrication actuel est souvent très polluant et le résultat final est une fibre qui se fragilise considérablement lorsqu\'elle est mouillée. À moins qu\'il ne s\'agisse de <strong>Lyocell</strong> ou de <strong>Tencel</strong>, sa durabilité est limitée.' },
    { type: 'title', text: 'Analyse Approfondie par Catégories', level: 2 },
    { type: 'title', text: '1. Fibres Naturelles (Fièrement Organiques)', level: 3 },
    { type: 'paragraph', html: 'Ce sont la référence absolue. Le coton à fibres longues (comme le Pima ou l\'Égyptien) offre une douceur éternelle. Le lin est scientifiquement la meilleure fibre pour la chaleur en raison de sa structure moléculaire qui repousse la chaleur et absorbe l\'humidité. La laine et le chanvre sont des antibactériens naturels ; ils n\'ont pas besoin de lavages fréquents car ils ne retiennent pas les odeurs.' },
    { type: 'title', text: '2. Fibres Semi-Synthétiques (L\'Hybride)', level: 3 },
    { type: 'paragraph', html: 'On trouve ici la viscose, la rayonne et le modal. Ils ressemblent à de la soie mais coûtent comme du coton. Ils sont excellents pour les vêtements avec beaucoup de drapé, mais ils sont "assoiffés" : ils absorbent beaucoup d\'eau et mettent longtemps à sécher, ce qui peut favoriser la moisissure s\'ils ne sont pas soignés. Le Lyocell (Tencel) est la version premium et durable de ce groupe, avec un cycle de production fermé et une plus grande résistance.' },
    { type: 'title', text: '3. Fibres Synthétiques (Plastiques Filés)', level: 3 },
    { type: 'paragraph', html: 'Le polyester est le roi du marché. Il est bon marché, ne se froisse pas et est éternel (littéralement, il mettra 200 ans à se décomposer). Le problème est qu\'il ne respire pas. Il crée un microclimat humide entre le tissu et votre peau, le terrain fertile idéal pour les bactéries. L\'acrylique est l\'imitation bon marché de la laine : il réchauffe, mais génère beaucoup d\'électricité statique et se couvre de bouloches en deux lavages.' },
    { type: 'title', text: 'Conseils de Survie Textile', level: 2 },
    { type: 'paragraph', html: 'Même le meilleur vêtement au monde peut être ruiné par un seul lavage inapproprié. Voici les règles d\'or universelles :' },
    { type: 'tip', title: 'L\'Eau Froide est Votre Amie', html: '90 % des vêtements n\'ont pas besoin de plus de 30°C. La chaleur dégrade les fibres élastiques et rétrécit les fibres naturelles.' },
    { type: 'tip', title: 'Moins, c\'est Mieux (Detergent)', html: 'L\'excès de savon laisse des résidus qui attirent la saleté et rendent les vêtements raides.' },
    { type: 'tip', title: 'Sèche-linge : L\'Ennemi Subtil', html: 'Les peluches que vous voyez dans le filtre du sèche-linge sont des morceaux de vos vêtements qui se sont détachés par friction et chaleur.' },
    { type: 'tip', title: 'Lavage à l\'envers', html: 'Protège la couleur et les broderies du frottement avec le tambour et d\'autres vêtements.' },
    { type: 'paragraph', html: '"Acheter moins, choisir mieux et faire durer." — Ce calculateur est votre première étape vers une garde-robe consciente et de haute qualité.' },
  ],
  faqTitle: 'Foire Aux Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'FTC - Guide d\'Étiquetage Textile',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'Commission Européenne - Réglementation Textile',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Symboles d\'Entretien Textile',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
