import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'calculateur-tissu-projet';
const title = 'Calculateur de Consommation de Tissu par Vêtement';
const description =
  'Calculez facilement la quantité de tissu nécessaire pour coudre une jupe, un pantalon, une robe ou une chemise. Ajustez selon la largeur du tissu et la taille pour une coupe professionnelle.';

const faqData = [
  {
    question: 'Quelle quantité de tissu faut-il pour une jupe?',
    answer:
      'Cela dépend de la largeur du tissu. Pour une jupe droite en tissu de 140-150 cm, 1,20 mètre suffit généralement. Si le tissu fait 90-110 cm de large, vous aurez besoin de 2,00 mètres.',
  },
  {
    question: 'Comment la largeur du tissu affecte-t-elle la consommation?',
    answer:
      'Plus le tissu est étroit, moins les pièces du patron peuvent être placées côte à côte (en parallèle), ce qui double souvent la consommation car les pièces doivent être placées l\'une sous l\'autre.',
  },
  {
    question: 'Vaut-il mieux acheter plus de tissu?',
    answer:
      'Oui, une marge de 10% (environ 20 cm) est recommandée pour compenser le rétrécissement, les défauts du tissu ou les imprévus de couture.',
  },
  {
    question: 'Qu\'est-ce que le droit fil et comment influence-t-il la coupe?',
    answer:
      'C\'est la direction parallèle aux lisières du tissu. Les patrons doivent être alignés avec ce fil pour que le vêtement ne se déforme pas à l\'usage.',
  },
];

const howToData = [
  {
    name: 'Choisir le type de vêtement',
    text: 'Sélectionnez le modèle que vous allez confectionner (jupe, pantalon, etc.) pour charger son tableau de consommation de base.',
  },
  {
    name: 'Entrer la largeur du tissu',
    text: 'Mesurez la largeur de lisière en lisière du tissu que vous prévoyez d\'acheter (90, 115, 140 ou 150 cm).',
  },
  {
    name: 'Sélectionner la taille',
    text: 'Ajustez le volume du vêtement selon la taille (XS-S, M-L, XL-XXL) pour recalculer le facteur multiplicatif.',
  },
  {
    name: 'Obtenir les mètres totaux',
    text: 'Vérifiez le résultat final avec et sans marge de couture pour savoir exactement combien commander en magasin.',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'Fabric Estimation Guide - Threads Magazine',
      url: 'https://www.threadsmagazine.com/forum/measuring-fabric',
    },
    {
      name: 'How much fabric do I need? - Seamwork',
      url: 'https://www.seamwork.com/sewing-tutorials/the-anatomy-of-a-sewing-pattern',
    },
    {
      name: 'Standard Fabric Consumption Charts - Textile School',
      url: 'https://www.textileschool.com/209/fabric-consumption-in-garment-making/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculateur de Mètres de Tissu pour la Couture: Guide de Consommation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'une des questions les plus fréquentes dans l\'atelier de couture est de déterminer la quantité de tissu à acheter pour un projet spécifique. La consommation de tissu dépend radicalement de trois facteurs: le modèle du vêtement, la taille de la personne et surtout la largeur du tissu (qui oscille généralement entre 90 cm et 150 cm). Ce calculateur technique systématise le calcul pour que vous n\'achetiez ni trop ni trop peu.',
    },
    {
      type: 'title',
      text: 'Quelle quantité de tissu pour une robe ou un pantalon?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le calcul traditionnel est basé sur la longueur du vêtement plus la longueur des manches, avec une marge pour les parements et l\'ourlet. Cependant, avec un tissu étroit (90-110 cm), les pièces ne peuvent souvent pas se placer côte à côte, obligeant à acheter le double de longueur. Notre outil tient compte de ces variations automatiquement selon les normes de l\'industrie textile.',
    },
    {
      type: 'title',
      text: 'Consommation Estimée selon la Largeur du Tissu (taille M-L)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Jupe Droite:</strong> 2,00 m en tissu de 90 cm · 1,20 m en tissu de 140/150 cm.',
        '<strong>Pantalon Long:</strong> 2,50 m en tissu de 90 cm · 1,50 m en tissu de 140/150 cm.',
        '<strong>Chemise Manches Longues:</strong> 2,20 m en tissu de 90 cm · 1,40 m en tissu de 140/150 cm.',
        '<strong>Robe Basique:</strong> 3,50 m en tissu de 90 cm · 2,20 m en tissu de 140/150 cm.',
      ],
    },
    {
      type: 'title',
      text: 'Facteurs qui Modifient la Consommation de Tissu',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Direction du motif (Raccord):</strong> Si le tissu a un motif directionnel ou des carreaux à faire correspondre, vous aurez besoin de 15 à 20% de matière supplémentaire.',
        '<strong>Coupe en biais:</strong> Les coupes circulaires (comme les jupes cercle) consomment beaucoup plus de tissu à cause des pertes aux angles.',
        '<strong>Sens du poil:</strong> Dans les tissus à poils comme le velours ou le velours côtelé, toutes les pièces doivent être coupées dans le même sens.',
        '<strong>Rétrécissement:</strong> De nombreuses fibres naturelles (coton, lin, laine) rétrécissent après le premier lavage. Il est essentiel de pré-laver le tissu avant de couper.',
      ],
    },
    {
      type: 'tip',
      title: 'Conseil du Couturier',
      html: '<p>Si vous utilisez un tissu à grand motif ou à carreaux, ne vous fiez pas uniquement à la mesure standard. Ajoutez toujours une répétition complète du motif (le raccord) au total de mètres calculé pour garantir que les motifs correspondent aux coutures latérales.</p>',
    },
    {
      type: 'title',
      text: 'Avantages et Limites de ce Calculateur',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Calcul instantané pour plusieurs largeurs de tissu avec ajustement de taille.',
        'Inclut une estimation de marge de couture personnalisable.',
        'Guide visuel de disposition des pièces sur le tissu.',
        'Ne remplace pas une disposition de patron réelle (marquage). Les grandes tailles peuvent nécessiter des ajustements manuels supplémentaires.',
      ],
    },
    {
      type: 'card',
      title: 'Largeur du tissu',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'La mesure transversale du tissu de <strong>lisière en lisière</strong>. Détermine si les pièces du patron peuvent être placées en parallèle ou doivent être disposées en série.',
    },
    {
      type: 'card',
      title: 'Marge de couture',
      icon: 'mdi:tape-measure',
      html: 'La distance entre le bord du patron et la <strong>ligne de couture finale</strong>. Une valeur standard est de 1,5 cm pour les coutures de vêtements.',
    },
    {
      type: 'card',
      title: 'Lisière',
      icon: 'mdi:content-cut',
      html: 'Les bords latéraux renforcés du tissu qui <strong>ne s\'effilochent pas</strong>. Ils indiquent la direction du fil et servent de référence pour la coupe.',
    },
  ],
  ui: {
    sectionProject: 'Projet',
    sectionMaterial: 'Matière',
    labelGarmentType: 'Type de vêtement',
    labelSize: 'Taille',
    labelFabricWidth: 'Largeur du tissu (cm)',
    labelSeamAllowance: 'Marge de couture (cm)',
    garmentSkirt: 'Jupe (Droite/Évasée)',
    garmentPants: 'Pantalon',
    garmentDress: 'Robe',
    garmentShirt: 'Chemise / Blouse',
    garmentCoat: 'Manteau / Veste',
    garmentTote: 'Tote Bag',
    garmentMerceria: {
      skirt: '1 fermeture 20cm, 1 bouton',
      pants: '1 fermeture 20cm, 1 bouton, 30cm entoilage',
      dress: '1 fermeture 60cm, 50cm entoilage',
      shirt: '7 boutons, 1m entoilage léger',
      coat: '3 grands boutons, 1,5m entoilage, doublure',
      tote: '2m sangle pour anses',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Étroit)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (Standard EU)',
    width150: '150 cm (Ameublement)',
    btnClear: 'Effacer',
    btnShare: 'Partager',
    btnCopied: 'Copié!',
    btnCopyList: 'Copier la liste',
    resultLabel: 'Il vous faut:',
    resultUnit: 'Mètres',
    shopAdviceFormat: 'Commandez {m}m en magasin',
    boardEmpty: 'Sélectionnez un projet pour voir la disposition',
    boardDescFormat: 'Largeur: {w}cm | Longueur: {m}m',
    merchTitle: 'Mercerie et Matériaux',
    checklistThread: 'Fil assorti',
    warningSerialFormat: 'En tissu de {w}cm, les pièces de votre taille ne tiennent pas en parallèle. Consommation ajustée pour la coupe en série.',
    foldLabel: '⊟ pli',
    pieceNames: {
      front: 'Devant',
      back: 'Dos',
      waistband: 'Ceinture',
      waistbelt: 'Ceinture',
      sleeve: 'Manche',
      collar: 'Col',
      cuffs: 'Poignets',
      facings: 'Parements',
      lapels: 'Revers',
      pocket: 'Poche',
      body: 'Corps',
      handleA: 'Anse A',
      handleB: 'Anse B',
    },
  },
};
