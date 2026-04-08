import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'convertisseur-pointures-chaussures';
const title = 'Convertisseur de Pointures International';
const description =
  'Convertissez les pointures entre les systèmes américain (US), européen (EU), britannique (UK) et centimètres (CM). Guide pour homme et femme.';

const faqData = [
  {
    question: 'Comment connaître ma pointure aux États-Unis (US) ?',
    answer:
      'Pour les hommes, la taille US est généralement une unité supérieure à la UK. Pour les femmes, l\'échelle est différente. La méthode la plus précise est de mesurer votre pied en centimètres et d\'utiliser notre convertisseur.',
  },
  {
    question: 'Quelle est la différence entre la pointure UK et US ?',
    answer:
      'Bien que les deux utilisent le système impérial, leurs points de départ diffèrent. Généralement, une pointure 8 UK équivaut à une pointure 9 US en chaussures pour hommes.',
  },
  {
    question: 'Comment mesurer mon pied pour connaître la taille CM ?',
    answer:
      'Placez le talon contre un mur, marquez où se termine votre orteil le plus long et mesurez la distance. Cette mesure en centimètres (CM) est la plus fiable pour acheter des chaussures de marques internationales.',
  },
];

const howToData = [
  {
    name: 'Choisir le genre',
    text: 'Sélectionnez si vous cherchez des tailles pour homme ou femme, car les échelles varient.',
  },
  {
    name: 'Sélectionner la région',
    text: 'Indiquez le système de tailles que vous connaissez (EU, US, UK ou CM).',
  },
  {
    name: 'Choisir votre numéro',
    text: 'Utilisez le sélecteur ou cliquez directement sur la grille de tailles.',
  },
  {
    name: 'Voir les équivalences',
    text: 'Obtenez instantanément le numéro correspondant dans toutes les autres régions du monde.',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    { name: 'Shoe size conversion - Wikipedia', url: 'https://en.wikipedia.org/wiki/Shoe_size' },
    { name: 'ISO 9407: Pointures - Système Mondopoint', url: 'https://www.iso.org/standard/17157.html' },
    { name: 'Shoe size conversion - Zappos', url: 'https://www.zappos.com/c/shoe-size-conversion' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Convertisseur de Pointures : Guide International Complet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Acheter des chaussures dans des boutiques internationales peut être un défi logistique. Le <strong>convertisseur de pointures</strong> est un outil essentiel pour éviter les retours inutiles et s\'assurer que chaque achat est une réussite.',
    },
    {
      type: 'title',
      text: 'Comment fonctionnent les équivalences de pointures ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le monde de la chaussure n\'est pas unifié. Historiquement, chaque région a développé son propre système basé sur des unités de mesure locales comme les pouces ou le "point de Paris".',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Tailles EU (Europe) :</strong> Basées sur le "point de Paris", équivalant à 2/3 de centimètre. Le système le plus courant en France.</span>',
        '<span><strong>Tailles US (États-Unis) :</strong> Utilisent les pouces avec un point de départ différent pour hommes et femmes.</span>',
        '<span><strong>Tailles UK (Royaume-Uni) :</strong> Également en système impérial, mais généralement une unité inférieure aux US.</span>',
        '<span><strong>Taille CM / Mondopoint :</strong> La plus précise. Utilise directement la longueur du pied en centimètres.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Guide pour mesurer votre pied et trouver votre pointure exacte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Avant d\'utiliser le convertisseur, il est essentiel de connaître la mesure réelle de votre pied. La mesure fondamentale est la longueur du talon jusqu\'au bout du plus long orteil.',
    },
    {
      type: 'tip',
      title: 'Conseil Professionnel',
      html: 'Mesurez vos pieds en fin de journée. Les pieds ont tendance à gonfler avec l\'activité et la chaleur, une mesure matinale pourrait donner des chaussures trop serrées l\'après-midi.',
    },
    {
      type: 'title',
      text: 'Pourquoi les pointures varient selon les marques',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pourquoi portez-vous du 42 chez Nike mais du 41 1/3 chez Adidas ? Les marques utilisent leurs propres "formes". Certaines marques de sport ont tendance à tailler petit, obligeant à prendre une demi-pointure de plus.',
    },
  ],
  ui: {
    genderMenTitle: 'Chaussures Homme',
    genderWomenTitle: 'Chaussures Femme',
    regionLabel: 'Votre Système de Taille',
    regionEU: 'Europe (EU)',
    regionUS: 'États-Unis (US)',
    regionUK: 'Royaume-Uni (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Sélectionnez votre Pointure',
    gridDesc: 'Cliquez pour voir les équivalences internationales',
    labelEU: 'Europe (EU)',
    labelUS: 'États-Unis (US)',
    labelUK: 'Royaume-Uni (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: 'La taille <strong>CM</strong> représente la longueur physique du pied. C\'est la méthode la plus fiable pour acheter des chaussures de marques internationales.',
    menData: [
      { EU: '39', US: '6.5', UK: '6', CM: '24.5' },
      { EU: '40', US: '7.5', UK: '7', CM: '25.0' },
      { EU: '40.5', US: '8', UK: '7.5', CM: '25.5' },
      { EU: '41', US: '8.5', UK: '8', CM: '26.0' },
      { EU: '42', US: '9', UK: '8.5', CM: '26.5' },
      { EU: '42.5', US: '9.5', UK: '9', CM: '27.0' },
      { EU: '43', US: '10', UK: '9.5', CM: '27.5' },
      { EU: '44', US: '10.5', UK: '10', CM: '28.0' },
      { EU: '44.5', US: '11', UK: '10.5', CM: '28.5' },
      { EU: '45', US: '11.5', UK: '11', CM: '29.0' },
      { EU: '46', US: '12', UK: '11.5', CM: '30.0' },
    ],
    womenData: [
      { EU: '35', US: '5', UK: '3', CM: '22.0' },
      { EU: '36', US: '6', UK: '4', CM: '22.5' },
      { EU: '37', US: '6.5', UK: '4.5', CM: '23.5' },
      { EU: '37.5', US: '7', UK: '5', CM: '23.8' },
      { EU: '38', US: '7.5', UK: '5.5', CM: '24.0' },
      { EU: '38.5', US: '8', UK: '6', CM: '24.5' },
      { EU: '39', US: '8.5', UK: '6.5', CM: '25.0' },
      { EU: '40', US: '9', UK: '7', CM: '25.5' },
      { EU: '41', US: '10', UK: '8', CM: '26.5' },
      { EU: '42', US: '11', UK: '9', CM: '27.0' },
    ],
  },
};
