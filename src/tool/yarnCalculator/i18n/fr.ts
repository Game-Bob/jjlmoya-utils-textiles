import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'calculateur-laine';
const title = 'Calculateur de Laine : Combien de mètres et de pelotes ?';
const description =
  'Calculez avec précision la quantité de laine nécessaire pour vos projets de tricot et crochet en fonction du patron et de la taille.';

const faqData = [
  {
    question: 'Pourquoi le crochet utilise-t-il plus de laine que le tricot ?',
    answer:
      'Le crochet crée des nœuds et des boucles superposés, ce qui produit un tissu plus dense et épais par centimètre carré. En moyenne, un projet au crochet consomme 25 à 35% de fil de plus que le même projet tricoté à plat.',
  },
  {
    question: 'Que se passe-t-il si j\'achète de la laine de différents lots de teinture ?',
    answer:
      'Même si la couleur semble identique en magasin, les variations chimiques minimes lors de la teinture peuvent créer des "rayures" visibles dans le vêtement terminé. Il est fortement recommandé d\'acheter toute la laine en une fois en vérifiant que le code de lot est identique.',
  },
  {
    question: 'Comment la tension affecte-t-elle la consommation finale ?',
    answer:
      'Si vous tricotez de façon lâche, chaque point utilise plus de mètres de fil. Si votre échantillon de tension est plus grand que ce qu\'indique le patron, votre consommation de laine augmentera considérablement. Il est essentiel de réaliser un échantillon de tension au préalable.',
  },
  {
    question: 'Comment calculer les mètres si je n\'ai que le poids de la pelote ?',
    answer:
      'Sans la donnée de métrage, c\'est difficile. La plupart des pelotes indiquent les mètres sur leur étiquette. Si ce n\'est pas le cas, recherchez le nom de la laine dans des bases de données comme Ravelry pour trouver la longueur exacte par 50g ou 100g.',
  },
];

const howToData = [
  {
    name: 'Sélectionnez le projet',
    text: 'Choisissez parmi un pull, une écharpe, un bonnet, des chaussettes ou une couverture pour charger les bases de consommation spécifiques.',
  },
  {
    name: 'Définissez la taille et l\'épaisseur',
    text: 'Indiquez les dimensions finales (S, M, L, XL) et l\'épaisseur du fil que vous utiliserez (Fingering, DK, Worsted, Bulky).',
  },
  {
    name: 'Activez les multiplicateurs',
    text: 'Si votre patron comporte des torsades ou des textures complexes, activez le commutateur de textures pour ajouter le supplément nécessaire.',
  },
  {
    name: 'Obtenez la liste d\'achats',
    text: 'Entrez les mètres par pelote de votre laine choisie pour voir exactement combien d\'unités vous devez acheter.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'Craft Yarn Council: Standard Yarn Weights & Yardages',
      url: 'https://www.craftyarncouncil.com/standards/yarn-weight-system',
    },
    {
      name: 'Interweave Essentials: Yarn Substitution and Estimation',
      url: 'https://www.interweave.com/article/knitting/yarn-substitution-angelina-take-two/',
    },
    {
      name: 'The Woolery: Fibers and Calculation of Yarn Usage',
      url: 'https://woolery.com/blogs/the-woolery-blog/yarn-weight-charts-helpful-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide de Consommation de Laine : Comment Calculer Mètres et Pelotes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Maîtrisez la logistique du tricot et évitez de manquer de fil grâce à notre calculateur technique de précision pour le tricot et le crochet. L\'une des plus grandes craintes des tricoteurs est le <strong>"Yarn Chicken"</strong> : ce moment critique en fin de projet où le fil semble vouloir se terminer avant de fermer les dernières mailles. Ce calculateur a été développé pour vous offrir des estimations basées sur les standards industriels de métrage et de grammage.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Marge de Sécurité', icon: 'mdi:security' },
        { value: 'Métrique', label: 'Calcul en Mètres', icon: 'mdi:ruler' },
        { value: 'Hors ligne', label: 'Base de Données Locale', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Pourquoi le Poids des Pelotes est Trompeur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beaucoup de débutants font l\'erreur d\'acheter de la laine en se basant exclusivement sur le poids (ex. "6 pelotes de 100g"). Cependant, le poids est une unité de masse, pas de longueur. Deux laines de 100g peuvent avoir des longueurs radicalement différentes : une laine <strong>Bulky</strong> peut n\'avoir que 80 mètres, tandis qu\'une <strong>Fingering / Lace</strong> peut dépasser 450 mètres pour le même poids.',
    },
    {
      type: 'paragraph',
      html: 'C\'est pourquoi notre calculateur priorise toujours les <strong>mètres totaux</strong>. Une fois que vous connaissez la longueur nécessaire pour votre taille et projet, divisez-la par le métrage indiqué sur l\'étiquette de votre pelote pour obtenir le nombre exact d\'unités à acheter.',
    },
    {
      type: 'title',
      text: 'Tableau de Métrages Standard par Épaisseur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si vous n\'avez pas l\'étiquette sous la main, utilisez ces métrages de référence (pour 100g de fibre) pour vos estimations :',
    },
    {
      type: 'table',
      headers: ['Épaisseur (Weight)', 'Mètres approx. / 100g', 'Utilisation Recommandée', 'Aiguilles Suggérées'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Châles dentelle, ajourés', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Chaussettes, layette', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Vestes légères', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Pulls, bonnets', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Couvertures, manteaux', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'Écharpes XXL, couvertures', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Le Facteur Tension (Gauge)',
      html: '<p>Rappellez-vous que si vous tricotez très lâchement, vos mailles seront plus grandes et consommeront plus de fil. Notre calculateur applique une marge de sécurité, mais si vous savez que votre tension est extrêmement lâche, ajoutez 5-10% supplémentaires pour éviter les surprises.</p>',
    },
    {
      type: 'title',
      text: 'Variables qui Augmentent la Consommation de Fil',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tous les points ne consomment pas la même quantité de fibre. Lors du choix de votre design, tenez compte de ces facteurs multiplicateurs :',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Jersey / Point Endroit',
          description: 'Représente la consommation de base et l\'efficacité maximale de fil pour tout vêtement.',
          icon: 'mdi:minus-circle-outline',
          points: ['Idéal pour les débutants', 'Tombé naturel du tissu'],
        },
        {
          title: 'Torsades / Câbles',
          description: 'Le croisement des fibres "raccourcit" la pièce, augmentant la consommation de 25%.',
          icon: 'mdi:texture-box',
          points: ['Nécessite plus de mètres', 'Tissu plus dense et lourd'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Crochet',
          description: 'Les nœuds du crochet utilisent 30% de fil de plus que le tricot plat.',
          icon: 'mdi:hook',
          points: ['Consommation rapide des pelotes', 'Texture tridimensionnelle'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Côtes',
          description: 'La structure endroit/envers accumule plus de laine par cm carré.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Consommation intermédiaire (+15%)', 'Haute récupération élastique'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Glossaire du Tricoteur Prévoyant',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (Lot de teinture)',
          definition:
            'Numéro identifiant la cuve de teinture dans laquelle la laine a été teinte. Différents lots peuvent présenter des variations de couleur imperceptibles dans la pelote mais très visibles dans le vêtement terminé.',
        },
        {
          term: 'Stash (Réserve)',
          definition:
            'La collection personnelle de fils d\'un tricoteur. Identifier le poids des restes de fils sans étiquette est essentiel pour calculer les petits projets.',
        },
        {
          term: 'Put-up (Conditionnement)',
          definition:
            'La forme sous laquelle le fil est présenté (écheveau, pelote ou cône), ce qui détermine s\'il doit être mis en pelote avant utilisation.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'Le défi de tenter de terminer une section de tricot avec une quantité de fil apparemment insuffisante.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment Utiliser les Résultats de ce Calculateur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une fois que l\'outil vous donne le nombre de mètres et de pelotes, nous recommandons ces étapes de vérification manuelle :',
    },
    {
      type: 'list',
      items: [
        '<strong>Vérifiez le métrage réel de votre pelote :</strong> Toutes les pelotes de 100g n\'ont pas 200m. Vérifiez sur l\'étiquette pour ajuster le calcul final.',
        '<strong>Ajoutez le métrage des détails :</strong> Si vous ajoutez des franges à une écharpe ou des pompons à un bonnet, ajoutez 50-80 mètres supplémentaires au total.',
        '<strong>Échantillon de tension :</strong> Tricotez un carré de 10x10 cm. Pesez-le sur une balance de précision. S\'il pèse 20g et votre couverture fait 100x100cm (100 carrés), vous aurez besoin exactement de 2kg de laine.',
        '<strong>Achetez toujours du même lot :</strong> Si le calcul indique 7 pelotes, achetez-en 8 si elles sont de lots différents pour avoir une marge ou pour les pièces cachées comme les coutures.',
      ],
    },
    {
      type: 'summary',
      title: 'Conseils Stratégiques pour l\'Achat de Laine',
      items: [
        'Priorisez les mètres sur les grammes pour assurer la longueur nécessaire.',
        'Le crochet consomme beaucoup plus de laine que le tricot ; ajustez le sélecteur de type.',
        'Les textures denses (torsades) nécessitent une augmentation de 25% du budget de fil.',
        'Conservez toujours une étiquette de chaque lot au cas où vous auriez besoin de commander la même couleur.',
        'Utilisez la marge de sécurité de 10% pour tricoter l\'échantillon de tension obligatoire.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. TYPE DE PROJET',
    sectionSize: '2. DIMENSIONS / TAILLE',
    sectionWeight: '3. ÉPAISSEUR DU FIL',
    sectionPattern: '4. CARACTÉRISTIQUES DU PATRON',
    sectionBall: '5. DONNÉES DE LA PELOTE',
    labelCables: 'Torsades ou textures denses ?',
    labelGrams: 'GRAMMES / PELOTE',
    labelMeters: 'MÈTRES / PELOTE',
    weightFine: 'Fin',
    weightMedium: 'Moyen',
    weightThick: 'Épais',
    weightXXL: 'XXL',
    projectSweater: 'PULL',
    projectScarf: 'ÉCHARPE',
    projectHat: 'BONNET',
    projectSocks: 'CHAUSSETTES',
    projectBlanket: 'COUVERTURE',
    projectCardigan: 'GILET',
    statPrefix: 'CONSOMMATION TOTALE ESTIMÉE',
    statSuffix: 'M',
    statNote: 'Métrage final calculé avec une réserve de sécurité de 10%.',
    ballsFormatSingular: 'Achetez {n} pelote',
    ballsFormatPlural: 'Achetez {n} pelotes',
    ballsDetailFormat: 'Pelotes de {w}g / {m}m chacune.',
    alertTitle: 'Sécurité stratégique :',
    alertText:
      'Ce calcul garantit déjà que vous ne manquerez pas de fil. N\'oubliez pas de vérifier le numéro de lot lors de l\'achat de vos pelotes pour éviter les sauts de couleur.',
    schemeSleeveLabel: 'Manches',
    schemeSleeveEach: 'ch.',
    schemeBodyLabel: 'Corps',
    schemeTotalHat: 'Total Bonnet',
    schemeTotalFlat: 'Total Pièce',
    schemeTotalSocks: 'Total Paire',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Enfant', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Grand', 'Maxi'],
      socks: ['Enfant', 'Ad. S', 'Ad. M', 'Ad. L'],
      blanket: ['Bébé', 'Canapé', '1 pers.', '2 pers.'],
    },
  },
};
