import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'convertisseur-tailles-vetements';
const title = 'Convertisseur de Tailles de Vêtements International';
const description =
  'Convertissez les tailles de vêtements entre les systèmes EU, US, UK et IT. T-shirts, pantalons, robes et vestes pour homme, femme et unisexe. Guide de mesures et recommandations par marque.';

const faqData = [
  {
    question: 'Quelle est la différence entre les tailles EU et US en vêtements ?',
    answer:
      'Les tailles européennes (EU) utilisent des numéros progressifs (XS, S, M, L ou 32, 34, 36, 38) tandis que les tailles américaines (US) utilisent des lettres ou des numéros pour les pantalons féminins (0, 2, 4, 6). En général, un EU 36 correspond à un US 4 pour les femmes.',
  },
  {
    question: 'Les tailles varient-elles selon le genre ?',
    answer:
      'Oui, absolument. Même dans le même pays, une taille 40 pour homme n\'est pas la même que pour femme. Les hommes ont des proportions différentes (épaules plus larges), donc le calcul de taille varie.',
  },
  {
    question: 'Comment savoir si je dois prendre une taille au-dessus ou en dessous ?',
    answer:
      'Le meilleur moyen est de lire les avis d\'autres clients. Des expressions comme « taille petit » ou « taille grand » sont très utiles. Consultez aussi le guide des tailles spécifique de la marque.',
  },
  {
    question: 'La table de conversion des tailles est-elle exacte ?',
    answer:
      'La table de conversion est un guide. Bien qu\'elle soit généralement précise, chaque marque a ses propres spécifications. Vérifiez toujours le guide des tailles du magasin avant d\'acheter.',
  },
  {
    question: 'Les vêtements rétrécissent-ils après le lavage ?',
    answer:
      'Le coton 100% peut rétrécir de 5 à 10% si lavé à l\'eau chaude et séché en machine. Les matières synthétiques gardent mieux leur forme. Vérifiez toujours les instructions d\'entretien.',
  },
];

const howToData = [
  {
    name: 'Sélectionner le Vêtement et le Genre',
    text: 'Choisissez le type de vêtement (t-shirt, pantalon, robe, veste) et le genre correspondant.',
  },
  {
    name: 'Choisir votre Système de Taille',
    text: 'Sélectionnez le système que vous connaissez : EU, US, UK ou IT.',
  },
  {
    name: 'Sélectionner votre Taille',
    text: 'Choisissez votre taille dans le sélecteur ou cliquez sur la grille. Vous verrez les équivalences instantanément.',
  },
  {
    name: 'Consulter le Guide des Marques',
    text: 'Vérifiez si cette marque taille petit, normal ou grand pour ajuster votre achat.',
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

const shirtsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '44' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '46' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '42' },
  ],
  unisex: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '34' },
    { EU: 'S', US: 'S', UK: 'S', IT: '36' },
    { EU: 'M', US: 'M', UK: 'M', IT: '38' },
    { EU: 'L', US: 'L', UK: 'L', IT: '40' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '42' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '44' },
  ],
};

const pantsData = {
  men: [
    { EU: '30', US: '30', UK: '30', IT: '44' },
    { EU: '32', US: '32', UK: '32', IT: '46' },
    { EU: '34', US: '34', UK: '34', IT: '48' },
    { EU: '36', US: '36', UK: '36', IT: '50' },
    { EU: '38', US: '38', UK: '38', IT: '52' },
    { EU: '40', US: '40', UK: '40', IT: '54' },
  ],
  women: [
    { EU: '32', US: '0', UK: '4', IT: '36' },
    { EU: '34', US: '2', UK: '6', IT: '38' },
    { EU: '36', US: '4', UK: '8', IT: '40' },
    { EU: '38', US: '6', UK: '10', IT: '42' },
    { EU: '40', US: '8', UK: '12', IT: '44' },
    { EU: '42', US: '10', UK: '14', IT: '46' },
  ],
  unisex: [],
};

const dressesData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
  ],
  women: [
    { EU: 'XS', US: '0-2', UK: '4-6', IT: '32-34' },
    { EU: 'S', US: '4-6', UK: '8-10', IT: '36-38' },
    { EU: 'M', US: '8-10', UK: '12-14', IT: '40-42' },
    { EU: 'L', US: '12-14', UK: '16-18', IT: '44-46' },
    { EU: 'XL', US: '16-18', UK: '20-22', IT: '48-50' },
  ],
  unisex: [],
};

const jacketsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '44' },
    { EU: 'S', US: 'S', UK: 'S', IT: '46' },
    { EU: 'M', US: 'M', UK: 'M', IT: '48' },
    { EU: 'L', US: 'L', UK: 'L', IT: '50' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '52' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
  ],
  unisex: [],
};

const measurementRanges = {
  shirts: [
    { size: 'XS', chest: 84, waist: 76, hip: 84 },
    { size: 'S', chest: 92, waist: 84, hip: 92 },
    { size: 'M', chest: 100, waist: 92, hip: 100 },
    { size: 'L', chest: 108, waist: 100, hip: 108 },
    { size: 'XL', chest: 116, waist: 108, hip: 116 },
    { size: 'XXL', chest: 124, waist: 116, hip: 124 },
  ],
  pants: [
    { size: '30', chest: 80, waist: 76, hip: 89 },
    { size: '32', chest: 85, waist: 81, hip: 94 },
    { size: '34', chest: 90, waist: 86, hip: 99 },
    { size: '36', chest: 95, waist: 91, hip: 104 },
    { size: '38', chest: 100, waist: 96, hip: 109 },
    { size: '40', chest: 105, waist: 101, hip: 114 },
  ],
  dresses: [
    { size: 'XS', chest: 80, waist: 72, hip: 88 },
    { size: 'S', chest: 88, waist: 80, hip: 96 },
    { size: 'M', chest: 96, waist: 88, hip: 104 },
    { size: 'L', chest: 104, waist: 96, hip: 112 },
    { size: 'XL', chest: 112, waist: 104, hip: 120 },
  ],
  jackets: [
    { size: 'XS', chest: 84, waist: 76, hip: 88 },
    { size: 'S', chest: 92, waist: 84, hip: 96 },
    { size: 'M', chest: 100, waist: 92, hip: 104 },
    { size: 'L', chest: 108, waist: 100, hip: 112 },
    { size: 'XL', chest: 116, waist: 108, hip: 120 },
  ],
};

export const content: ToolLocaleContent<ClothingSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    { name: 'ISO 3635: Clothing Sizes - Official Standard', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Clothing Size Standards - Wikipedia', url: 'https://en.wikipedia.org/wiki/Clothing_size' },
    {
      name: 'International Clothing Size Conversion - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Convertisseur de Tailles : Guide International Complet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Acheter des vêtements dans des boutiques internationales peut être déroutant lorsque les tailles ne correspondent pas. Le <strong>convertisseur de tailles de vêtements</strong> vous aide à trouver votre taille parfaite dans les systèmes EU, US, UK et IT.",
    },
    {
      type: 'title',
      text: 'Pourquoi les tailles de vêtements varient-elles selon les pays ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Il n'existe pas de norme internationale unique pour les tailles de vêtements. Chaque région a développé son propre système, créant une confusion lors des achats dans des boutiques étrangères.",
    },
    {
      type: 'list',
      items: [
        '<span><strong>Tailles EU (Europe) :</strong> Utilisent des numéros progressifs (XS, S, M, L ou 32, 34, 36...). Le système le plus courant en France et en Italie.</span>',
        '<span><strong>Tailles US (États-Unis) :</strong> Utilisent des lettres (XS, S, M, L) ou des numéros pour les pantalons féminins (0, 2, 4, 6).</span>',
        '<span><strong>Tailles UK (Royaume-Uni) :</strong> Similaires à EU mais avec sa propre numérotation, généralement inférieure à US.</span>',
        '<span><strong>Tailles IT (Italie) :</strong> Numérotation italienne avec des variations par rapport au système EU général.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Conseil Professionnel',
      html: "Les tailles varient considérablement selon les marques. Une taille 38 chez Zara peut être différente d'une 38 chez H&amp;M. Consultez toujours le guide des tailles spécifique du magasin avant d'acheter.",
    },
    {
      type: 'title',
      text: 'Comment mesurer votre corps correctement',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pour garantir la bonne taille, mesurez votre corps avec un ruban mètre souple. Mesurez en fin de journée, lorsque votre corps est à son expansion maximale.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Poitrine :</strong> Mesurez autour de la partie la plus large de votre poitrine, en passant le ruban sous les bras.</span>',
        '<span><strong>Taille :</strong> Mesurez à hauteur du nombril sans rentrer artificiellement le ventre.</span>',
        '<span><strong>Hanches :</strong> Mesurez autour de la partie la plus large des hanches, le ruban parallèle au sol.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Guide de coupe par marque',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara :</strong> Tailles normales. Un 36 chez Zara est généralement fiable pour des mesures standard.</span>',
        "<span><strong>H&amp;M :</strong> Tend à tailler grand. Envisagez de prendre une taille en dessous de votre taille habituelle.</span>",
        '<span><strong>Uniqlo :</strong> Taille petit, surtout pour les basiques. Il est recommandé de prendre une taille au-dessus.</span>',
        '<span><strong>Nike / Adidas :</strong> Coupes ajustées pour l\'activité physique. Envisagez de prendre une demi-taille de plus.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Type de Vêtement',
    categoryShirts: 'T-Shirts',
    categoryPants: 'Pantalons',
    categoryDresses: 'Robes',
    categoryJackets: 'Vestes',
    genderLabel: 'Genre',
    genderMen: 'Homme',
    genderWomen: 'Femme',
    genderUnisex: 'Unisexe',
    tabBySize: 'Par Taille',
    tabByMeasurements: 'Par Mesures',
    regionLabel: 'Votre Système de Taille',
    sizeLabel: 'Sélectionnez votre Taille',
    regionEU: 'Europe (EU)',
    regionUS: 'États-Unis (US)',
    regionUK: 'Royaume-Uni (UK)',
    regionIT: 'Italie (IT)',
    labelEU: 'Europe',
    labelUS: 'États-Unis',
    labelUK: 'Royaume-Uni',
    labelIT: 'Italie',
    quickGridTitle: 'Référence Rapide (EU)',
    tableTitle: 'Table de Conversion Complète',
    measurementsTitle: 'Entrez vos Mesures',
    chestLabel: 'Poitrine (cm)',
    waistLabel: 'Taille (cm)',
    hipLabel: 'Hanches (cm)',
    chestPlaceholder: 'Ex. : 95',
    waistPlaceholder: 'Ex. : 85',
    hipPlaceholder: 'Ex. : 95',
    recommendBtnLabel: 'Recommander une Taille',
    tipsTitle: 'Conseils de Mesure',
    tipOverClothes: 'Par-dessus les vêtements',
    tipStraight: 'Droite et parallèle',
    tipNoTight: 'Sans serrer',
    tipEndOfDay: 'En fin de journée',
    recommendationTitle: 'Taille Recommandée',
    recommendedSizePrefix: 'Nous recommandons la taille :',
    measuredBy: 'Sur la base de vos mesures :',
    chestShort: 'Poitrine',
    waistShort: 'Taille',
    hipShort: 'Hanches',
    recommendationError: 'Veuillez remplir toutes les mesures pour obtenir une recommandation.',
    recommendationNoData: 'Aucune donnée disponible pour cette catégorie.',
    fitGuideTitle: 'Guide de Coupe par Marque',
    fitSmall: 'Petite Taille',
    fitRegular: 'Taille Normale',
    fitLarge: 'Grande Taille',
    fitInfoDefault: 'Cliquez sur une marque pour obtenir des recommandations spécifiques.',
    fitNotif1: ' taille généralement ',
    fitNotifSmall: 'petit',
    fitNotifRegular: 'normal',
    fitNotifLarge: 'grand',
    fitNotif2: 'Prenez',
    fitNotif3: "si c'est la première fois que vous achetez dans cette marque.",
    fitAdviceSmall: 'une taille au-dessus',
    fitAdviceRegular: 'votre taille habituelle',
    fitAdviceLarge: 'une taille en dessous',
    fitSelectedSuffix: 'sélectionnée. Sélectionnez une autre marque pour comparer.',
    infoBannerTitle: 'Conseil Pro :',
    infoBannerText:
      "Les tailles de vêtements varient considérablement selon les marques. Consultez toujours le guide des tailles spécifique du magasin avant d'acheter.",
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
