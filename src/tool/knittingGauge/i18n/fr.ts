import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'calculateur-tension-tricot';
const title = 'Calculateur de Tension de Tricot';
const description =
  'Recalculez facilement les mailles et les rangs de n\'importe quel patron de tricot ou crochet. Ajustez la tension par multiples et facteur d\'échelle pour un résultat professionnel.';

const faqData = [
  {
    question: 'Qu\'est-ce que la tension ou gauge en tricot?',
    answer:
      'C\'est la mesure du nombre de mailles et de rangs qui tiennent dans une surface donnée (généralement 10x10 cm). Elle est fondamentale car elle détermine la taille finale du vêtement selon l\'aiguille et le fil utilisés.',
  },
  {
    question: 'Comment le changement de tension affecte-t-il la taille?',
    answer:
      'Si votre tension a plus de mailles par centimètre que le patron, le vêtement sera plus petit. S\'il a moins de mailles, le vêtement sera plus grand. C\'est pourquoi il est vital de recalculer les mailles ou de changer d\'aiguilles.',
  },
  {
    question: 'Pourquoi l\'ajustement par multiples est-il important?',
    answer:
      'De nombreux patrons ont des motifs (dentelles, torsades, dessins) qui nécessitent un nombre spécifique de mailles pour se compléter. Notre calculateur ajuste le total au multiple le plus proche pour ne pas briser le design.',
  },
  {
    question: 'Dois-je laver l\'échantillon avant de mesurer?',
    answer:
      'Oui, toujours. Le "blocage" (laver et mettre en forme) détend les fibres et montre la tension réelle que le vêtement aura après sa première utilisation et son lavage.',
  },
];

const howToData = [
  {
    name: 'Identifier la tension du patron',
    text: 'Cherchez dans les instructions du patron combien de mailles et de rangs sont indiqués pour un échantillon de 10x10 cm ou 4x4 pouces.',
  },
  {
    name: 'Tricoter et mesurer votre propre échantillon',
    text: 'Tricotez un échantillon avec votre fil et vos aiguilles, bloquez-le et mesurez combien de mailles et de rangs vous avez dans cette même zone.',
  },
  {
    name: 'Configurer le calculateur',
    text: 'Entrez les données de l\'échantillon du patron et de votre propre échantillon. Ajoutez le total de mailles pour votre taille et les multiples du motif s\'il y en a.',
  },
  {
    name: 'Obtenir les résultats',
    text: 'Vérifiez le nouveau nombre de mailles à monter et le facteur d\'échelle pour savoir si vous devez également ajuster la longueur du vêtement.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculateur de Tension de Tricot en Ligne: Guide Technique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si vous avez déjà terminé un pull qui semblait conçu pour un géant ou un bonnet qui couvrait à peine le sommet du crâne, vous connaissez déjà l\'importance de la <strong>tension ou gauge</strong>. Dans le monde du tricot et du crochet, la tension est la relation entre l\'épaisseur du fil, la taille des aiguilles et la force avec laquelle chaque tricoteur manipule la pelote.',
    },
    {
      type: 'title',
      text: 'Pourquoi la Tension est-elle Vitale en Tricot?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ce calculateur de tension pour tricot est un outil technique conçu pour éliminer les conjectures mathématiques et vous permettre de vous concentrer sur la créativité. En saisissant les données de l\'échantillon du patron et de votre propre échantillon, vous obtiendrez des ajustements précis de mailles et de rangs.',
    },
    {
      type: 'title',
      text: 'Comment utiliser le calculateur de tension',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tricotez un échantillon:</strong> Ne vous limitez pas à 10x10 cm. Tricotez au moins 15x15 cm pour que les bords ne faussent pas la mesure centrale.',
        '<strong>Bloquez votre échantillon:</strong> Lavez et séchez l\'échantillon comme vous le feriez avec le vêtement terminé. De nombreuses fibres de laine s\'étendent ou grossissent lorsqu\'elles sont mouillées.',
        '<strong>Mesurez avec précision:</strong> Utilisez une règle rigide ou un gabarit de 10 cm. Comptez combien de mailles entrent horizontalement et combien de rangs verticalement.',
        '<strong>Entrez les données:</strong> Placez les valeurs du patron à gauche et vos valeurs réelles à droite. L\'outil recalculera automatiquement combien de mailles vous avez besoin.',
      ],
    },
    {
      type: 'title',
      text: 'Interprétation des Résultats: Le Facteur d\'Échelle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le facteur d\'échelle est le multiplicateur que nous appliquons à chaque instruction du patron. Si votre tension est de 22 mailles et que le patron en demande 20, votre facteur d\'échelle est de 1.1. Une déviation de 0-2% est idéale, de 2-10% est modérée, de 10-25% nécessite un recalcul obligatoire, et plus de 25% représente un risque structurel.',
    },
    {
      type: 'title',
      text: 'Traitement des Multiples et Motifs',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'un des plus grands défis lors du recalcul d\'un patron est de maintenir l\'intégrité des dentelles, torsades ou motifs. La fonction d\'<strong>ajustement par multiples</strong> de ce calculateur suggère le nombre de mailles le plus proche qui respecte l\'architecture du design.',
    },
    {
      type: 'tip',
      title: 'Conseil d\'Expert',
      html: '<p>Il est généralement préférable d\'utiliser ce calculateur et de travailler avec la tension naturelle de votre fil, en adaptant le nombre de mailles plutôt que de forcer la tension en changeant radicalement la taille des aiguilles.</p>',
    },
    {
      type: 'title',
      text: 'Avantages de notre outil d\'ajustement',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ajustement automatique des mailles et des rangs avec facteur d\'échelle précis.',
        'Support pour les multiples complexes (X + Y) pour maintenir l\'intégrité du motif.',
        'Estimation des grammes de laine nécessaires pour le projet complet.',
        'Visualiseur dynamique de l\'échantillon montrant la densité du tissu en temps réel.',
      ],
    },
    {
      type: 'card',
      title: 'Tension / Gauge',
      icon: 'mdi:ruler',
      html: 'Nombre de mailles et de rangs contenus dans un carré de <strong>10x10 cm</strong> ou <strong>4x4 pouces</strong>. C\'est la référence universelle de tous les patrons de tricot.',
    },
    {
      type: 'card',
      title: 'Blocage',
      icon: 'mdi:water',
      html: 'Processus de mouillage et de mise en forme du vêtement pour fixer les mailles. Révèle la <strong>tension réelle</strong> que le vêtement aura après sa première utilisation et son lavage.',
    },
    {
      type: 'card',
      title: 'Facteur d\'Échelle',
      icon: 'mdi:scale',
      html: 'Proportion mathématique entre l\'échantillon du patron et l\'échantillon réel du tricoteur. Détermine combien de mailles et de rangs ajuster pour maintenir les <strong>mesures correctes</strong>.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Tension du Patron',
    sectionMyGauge: 'Mon Échantillon Actuel',
    sectionProject: 'Structure du Projet',
    labelStitches: 'Mailles',
    labelRows: 'Rangs',
    labelWidth: 'Largeur',
    labelLength: 'Longueur',
    labelUnit: 'Unité de Mesure',
    labelNeedle: 'Aiguille',
    labelNeedleMm: 'Aiguille (mm)',
    labelWeight: 'Poids (g)',
    labelWeightOptional: 'optionnel',
    labelPatternSts: 'Mailles Patron',
    labelPatternRows: 'Rangs Patron',
    labelMultiples: 'Multiples',
    labelMultiplesExample: 'Ex: 10 + 2',
    labelMultiplesPlaceholder: 'Multiple + Lisière',
    unitEU: '10 x 10 cm (Standard EU)',
    unitUS: '4 x 4 pouces (Standard US)',
    btnClear: 'Effacer',
    btnShare: 'Partager',
    btnCopied: 'Copié!',
    resSuggestedSts: 'Mailles suggérées à monter',
    resNewRows: 'Nouveaux Rangs',
    resNewRowsTooltip: 'Nombre de rangs nécessaires pour égaler la longueur du patron original avec votre tension actuelle.',
    resScaleFactor: 'Facteur d\'Échelle',
    resScaleFactorTooltip: 'Rapport de taille entre votre tricot et le patron. Une valeur négative indique que votre tricot est plus dense.',
    resSuggestion: 'Suggestion',
    resSuggestionTooltip: 'Recommandation technique pour ajuster votre tension sans recalculer chaque maille du patron.',
    suggestionIdeal: 'Idéal',
    suggestionDown: 'Descendre une Taille',
    suggestionUp: 'Monter une Taille',
    suggestionDownDetail: 'Utilisez une aiguille de {n}mm ou taille inférieure.',
    suggestionUpDetail: 'Utilisez une aiguille de {n}mm ou taille supérieure.',
    multiplesNoteFormat: 'Ajusté de {n} mailles (Mult. {m})',
    yarnTitle: 'Estimation de Laine pour le Projet',
    yarnResultFormat: 'Laine estimée: <strong>{g}g</strong>',
    yarnSafetyFormat: '(+{s}g de marge de sécurité)',
    alertDanger: 'Différence extrême (>25%). La chute et la structure du vêtement seront altérées.',
  },
};
