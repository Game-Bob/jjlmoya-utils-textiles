import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'protocole-chimique-taches';
const title = 'Protocole Chimique des Taches Textiles';
const description =
  'Protocoles scientifiques pour éliminer les taches selon le type de fibre et la nature chimique de la tache. Percarbonate, enzymes, solvants : la bonne méthode pour chaque cas.';

const faqData = [
  {
    question: 'Puis-je utiliser de la javel à la place du percarbonate ?',
    answer:
      'La javel (hypochlorite de sodium) est très corrosive. Elle dégrade les fibres, les rendant jaunâtres et cassantes. Le percarbonate blanchit grâce à l\'oxygène actif, respectant la structure moléculaire naturelle.',
  },
  {
    question: 'Pourquoi le vinaigre aide-t-il contre les odeurs ?',
    answer:
      'Les odeurs corporelles sont généralement alcalines. L\'acide acétique du vinaigre les neutralise, les transformant en sels inodores qui sont complètement éliminés lors du rinçage.',
  },
  {
    question: 'Dois-je toujours utiliser de l\'eau froide pour le sang ?',
    answer:
      'Oui. La chaleur coagule les protéines du sang, les liant définitivement à la fibre. L\'eau froide maintient la tache dans un état soluble et permet aux agents enzymatiques d\'agir efficacement.',
  },
  {
    question: 'Que se passe-t-il si j\'applique de l\'acétone sur un vêtement en acétate ?',
    answer:
      'L\'acétone dissout le triacétate et l\'acétate. Les fibres d\'acétate sont de la cellulose estérifiée avec de l\'acide acétique et sont totalement solubles dans l\'acétone. Le résultat serait la destruction irréversible du tissu.',
  },
];

const howToData = [
  {
    name: 'Identifier le type de fibre',
    text: 'Consultez l\'étiquette intérieure du vêtement pour savoir s\'il s\'agit d\'une fibre naturelle, synthétique ou noble (laine, soie, cachemire).',
  },
  {
    name: 'Sélectionner la fibre dans l\'outil',
    text: 'Choisissez le matériau correspondant dans le premier sélecteur.',
  },
  {
    name: 'Sélectionner le type de tache',
    text: 'Indiquez si la tache est organique (vin, fruit), protéique (sang), grasse ou synthétique (encre).',
  },
  {
    name: 'Appliquer le protocole indiqué',
    text: 'Suivez les instructions d\'agent, de température et de méthode. Prêtez une attention particulière aux avertissements de précaution critique.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Protocole Chimique des Taches',
    fiberLabel: '1. Fibre',
    selectFiberPlaceholder: 'Sélectionnez le tissu...',
    stainLabel: '2. Tache',
    selectStainPlaceholder: 'Que s\'est-il passé ?',
    molecularDiagnosis: 'Diagnostic Moléculaire',
    requiredAgent: 'Agent Requis',
    thermalCondition: 'Condition Thermique',
    temperature: 'Température',
    cleaningInstructions: 'Instructions de Nettoyage',
    criticalWarning: 'Précaution Critique',
    criticalWarningLabel: 'ATTENTION',
    technicalNote: 'Note technique',
    technicalNoteText:
      'Validez toujours la solidité du colorant sur une zone non visible avant de procéder au traitement chimique complet.',
    systemDiagnosis: 'Système de Diagnostic',
    systemDiagnosisDesc:
      'Configurez les paramètres textiles pour obtenir la feuille de route de nettoyage',
    delicatePercarbonateWarning:
      'RISQUE DE DÉGRADATION MOLÉCULAIRE. Les fibres animales sont très sensibles au percarbonate. Testez sur une zone cachée au préalable.',
    fiberData: {
      cotton: { name: 'Coton', family: 'natural', isNoble: false },
      linen: { name: 'Lin', family: 'natural', isNoble: true },
      wool: { name: 'Laine / Mérinos', family: 'natural', isNoble: true },
      silk: { name: 'Soie', family: 'natural', isNoble: true },
      cashmere: { name: 'Cachemire', family: 'natural', isNoble: true },
      mohair: { name: 'Mohair', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpaga', family: 'natural', isNoble: true },
      polyester: { name: 'Polyester', family: 'synthetic', isNoble: false },
      viscose: { name: 'Viscose / Rayonne', family: 'artificial', isNoble: false },
      nylon: { name: 'Nylon (Polyamide)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Acrylique', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Percarbonate de Sodium',
        description:
          'Blanchissant oxygéné biodégradable. Libère de l\'oxygène actif en se dissolvant.',
        warning: 'À éviter sur les fibres protéiques (soie, laine) à fortes concentrations.',
      },
      isopropyl: {
        name: 'Alcool Isopropylique',
        description: 'Solvant efficace pour les pigments et les graisses légères.',
        warning:
          'Peut altérer le lustre de la soie et dissoudre certains acryliques s\'il n\'est pas dilué.',
      },
      acetone: {
        name: 'Acétone',
        description: 'Solvant puissant pour les vernis et les adhésifs.',
        warning: 'INTERDIT sur les acétates et triacétates (dissout la fibre).',
      },
      enzyme: {
        name: 'Détergent Enzymatique',
        description: 'Contient des protéases qui dégradent les taches biologiques.',
        warning: 'À utiliser avec précaution sur la laine et la soie (ce sont des protéines).',
      },
      vinegar: {
        name: 'Vinaigre Blanc',
        description: 'Acide acétique doux pour neutraliser les odeurs et fixer les couleurs.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Vin Rouge / Fruit',
        protocols: {
          natural: {
            agentId: 'percarbonate',
            temperature: '40–60°C',
            method: 'Trempage prolongé',
          },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Pâte directe' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Froide',
            method: 'Rinçage à l\'eau gazeuse et vinaigre',
            notes: 'Ne pas frotter',
          },
        },
      },
      {
        id: 'blood',
        name: 'Sang',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Froide',
            method: 'Trempage en eau salée puis enzyme',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Froide', method: 'Application directe' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Froide',
            method: 'Rinçage immédiat, éviter la chaleur',
          },
        },
      },
      {
        id: 'grease',
        name: 'Graisse / Huile',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Dissoudre à l\'alcool puis laver',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Placer du papier absorbant en dessous',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Froide',
            method: 'Diluer l\'alcool à 50%',
          },
        },
      },
      {
        id: 'ink',
        name: 'Encre / Marqueur',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Ambiante',
            method: 'Tamponner de l\'extérieur vers l\'intérieur',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Ambiante',
            method: 'Attention à la dispersion',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Froide',
            method: 'Diluer et tester sur une zone cachée',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'La Chimie Derrière le Nettoyage des Textiles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Toutes les taches ne sont pas identiques, et toutes les fibres ne réagissent pas de la même manière aux mêmes agents chimiques. La différence entre sauver un vêtement et le détruire réside dans la compréhension de la nature moléculaire de la tache et de la structure de la fibre.',
    },
    {
      type: 'card',
      title: '01 — Oxydation Contrôlée',
      icon: 'mdi:atom',
      html: 'Le <strong>percarbonate de sodium</strong> libère de l\'oxygène actif qui brise les doubles liaisons des chromophores (les molécules responsables de la couleur de la tache), les rendant incolores et solubles dans l\'eau. C\'est la méthode la plus efficace pour les taches organiques.',
    },
    {
      type: 'card',
      title: '02 — Solubilisation par Solvants',
      icon: 'mdi:flask-outline',
      html: 'Les taches comme l\'huile ou l\'encre ne sont pas solubles dans l\'eau. Des solvants tels que l\'<strong>alcool isopropylique</strong> ou l\'<strong>acétone</strong> réduisent la tension de surface et attirent les molécules apolaires de la tache, leur permettant d\'être transférées sur un support.',
    },
    {
      type: 'title',
      text: 'La Souveraineté des Fibres : Pourquoi le Type de Fibre Compte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Toutes les fibres ne "mangent" pas de la même façon. La <strong>soie et la laine</strong> sont des protéines (fibroïne et kératine). Si vous appliquez un détergent enzymatique conçu pour "digérer les protéines" (taches de sang ou d\'œuf) sans contrôle, le détergent commencera à dégrader la fibre elle-même, détruisant son éclat et la structure du tissu.',
    },
    {
      type: 'title',
      text: 'Le Danger de la Chaleur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'une des erreurs les plus courantes est d\'utiliser de l\'eau chaude pour "ramollir" une tache de sang. Chimiquement, la chaleur provoque la <strong>coagulation des protéines</strong> de la tache, les fixant définitivement à la structure poreuse de la fibre. Les taches protéiques doivent toujours être traitées à l\'eau froide.',
    },
    {
      type: 'tip',
      title: 'Protocole d\'Urgence : Vin Rouge',
      html: '<strong>A. Absorption passive :</strong> Tamponner avec du papier absorbant, ne jamais frotter pour éviter l\'expansion mécanique.<br><strong>B. Neutralisation osmotique :</strong> Couvrir de sel fin pour attirer le liquide vers l\'extérieur du noyau de la fibre.<br><strong>C. Action chimique :</strong> Appliquer une pâte de percarbonate et d\'eau à 40°C si la fibre supporte la chaleur.',
    },
    {
      type: 'title',
      text: 'Solvants Spécifiques et Précautions',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>acétone</strong> est un solvant exceptionnel pour le vernis à ongles ou les adhésifs, mais elle est destructrice pour l\'<strong>acétate</strong>. En tant que fibres dérivées de la cellulose mais traitées chimiquement, l\'acétone dissout littéralement le tissu.',
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>alcool isopropylique</strong> est plus stable, mais sur les synthétiques teints, il peut entraîner le pigment lui-même. Nous recommandons toujours le "test de l\'ourlet" sur une zone cachée avant le traitement principal.',
    },
  ],
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'AATCC — Association for Advancing Color Technology and Chemistry',
      url: 'https://www.aatcc.org',
    },
    {
      name: 'Kissa, E. — Textile Auxiliaries',
      url: 'https://www.springer.com/gp/book/9783642057328',
    },
    {
      name: 'ISO 105 — Tests de solidité des coloris',
      url: 'https://www.iso.org/standard/72682.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
