import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'convertisseur-aiguilles-tricot';
const title = 'Convertisseur d\'Aiguilles de Tricot et Crochet';
const description =
  'Convertissez les tailles d\'aiguilles entre les systèmes Métrique (mm), US et UK avec recommandations de fils et WPI.';

const faqData = [
  {
    question: 'Pourquoi existe-t-il différents systèmes de tailles d\'aiguilles ?',
    answer:
      'Historiquement, chaque pays a développé son propre système. Le système métrique (mm) est la norme internationale la plus précise. Le système US utilise une numérotation progressive (0-50), tandis que le système UK utilise une numérotation inverse : plus le numéro est élevé, plus l\'aiguille est fine.',
  },
  {
    question: 'Les tailles de crochet et de tricot en US sont-elles les mêmes ?',
    answer:
      'Pas exactement. Les crochets US portent généralement une lettre associée (ex. H-8) et il existe des variations spécifiques pour les petites tailles. De plus, les crochets en acier pour fils fins utilisent une numérotation totalement différente.',
  },
  {
    question: 'Quelle aiguille choisir si mon patron utilise une taille sans équivalent exact ?',
    answer:
      'Si un patron demande une taille comme 7.0mm et que votre système ne va que de 6.5mm à 8.0mm, il est toujours recommandé de faire un échantillon de tension (gauge). Une différence de 0.5mm peut modifier significativement la taille finale du vêtement.',
  },
  {
    question: 'Qu\'est-ce que le WPI (Wraps Per Inch) ?',
    answer:
      'C\'est le nombre de tours de fil qui tiennent dans un pouce. C\'est la méthode la plus fiable pour identifier l\'épaisseur d\'une laine sans étiquette et déterminer quelle aiguille lui convient le mieux.',
  },
];

const howToData = [
  {
    name: 'Sélectionnez le type de travail',
    text: 'Choisissez entre tricot (knitting) ou crochet pour voir les équivalences correctes dans le système US.',
  },
  {
    name: 'Choisissez le calibre dans le sélecteur visuel',
    text: 'Appuyez sur le cercle correspondant à la taille de votre aiguille. Les orifices ont une proportion mathématique réelle par rapport au millimétrage.',
  },
  {
    name: 'Lisez les équivalences',
    text: 'Consultez les résultats en temps réel : millimètres, taille US et taille UK, ainsi que la catégorie de fil recommandée et son WPI.',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide Technique des Aiguilles à Tricoter et Crochets : Systèmes, Calibres et Équivalences',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La mondialisation des patrons numériques a rendu indispensable la compréhension des différences entre le <strong>système métrique décimal</strong>, la <strong>norme américaine (US)</strong> et le <strong>système impérial britannique (UK)</strong>. Cet outil convertit entre les trois systèmes et offre des recommandations de fil via la méthode WPI.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Fonctionne Hors Ligne', icon: 'mdi:wifi-off' },
        { value: 'Triple', label: 'Synchronisation Totale', icon: 'mdi:sync' },
        { value: 'WPI', label: 'Analyse du Fil', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'La Complexité des Systèmes Internationaux',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Système', 'Base de Calcul', 'Région Principale', 'Caractéristiques Techniques'],
      rows: [
        ['<strong>Métrique (mm)</strong>', 'Diamètre exact en mm', 'Europe / International', 'La norme ISO la plus fiable. Incréments constants de 0,25mm ou 0,50mm.'],
        ['<strong>US (États-Unis)</strong>', 'Numérotation Progressive', 'Amérique du Nord', 'Utilise des numéros de 0 à 50. Pour le crochet, les numéros sont associés à des lettres (B-1, G-6).'],
        ['<strong>UK (Impérial)</strong>', 'Numérotation Inverse', 'Royaume-Uni / Australie', 'Basé sur le calibre de tréfilage. Plus le numéro est grand, plus l\'aiguille est fine (14 est fin, 0 est épais).'],
      ],
    },
    {
      type: 'title',
      text: 'Identification des Fils par la Méthode WPI',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / Dentelle (18-22+ WPI) :</strong> Fils ultra-fins pour dentelles en soie ou mohair. Aiguilles de 1,5mm à 2,5mm.',
        '<strong>Fingering / Baby (14-16 WPI) :</strong> La norme pour les chaussettes et la layette. Aiguilles optimales de 2,75mm à 3,25mm.',
        '<strong>Sport / Fin (12-14 WPI) :</strong> Fil de grosse moyenne-fine, idéal pour les vestes légères. Aiguilles de 3,5mm à 3,75mm.',
        '<strong>DK / Light Worsted (11-13 WPI) :</strong> L\'épaisseur la plus polyvalente. Aiguilles de 4,0mm ou 4,5mm.',
        '<strong>Worsted / Aran (9-10 WPI) :</strong> Fil épais pour pulls d\'hiver. Aiguilles de 5,0mm à 5,5mm.',
        '<strong>Bulky / Chunky (7-8 WPI) :</strong> Laines de grand calibre pour projets rapides. Aiguilles de 6,0mm à 8,0mm.',
        '<strong>Super Bulky (5-6 WPI) :</strong> Fibres géantes pour décoration ou écharpes. Aiguilles de 9,0mm à 15,0mm.',
      ],
    },
    {
      type: 'tip',
      title: 'Technique Professionnelle : Les Crochets en Acier',
      html: '<p>Il existe une famille de crochets pour les fils de coton mercerisé extrêmement fins. Ce sont les <strong>Steel Hooks (Crochets en Acier)</strong>. Contrairement aux crochets en aluminium, leur numérotation est spécifique et inverse : un crochet en acier #14 (0,6mm) est beaucoup plus fin qu\'un #00 (3,5mm). N\'utilisez jamais le tableau standard pour ces calibres.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Checklist pour Réussir le Calibre',
      icon: 'mdi:check-circle-outline',
      badge: 'Validation Technique',
      html: '<p>Suivez ces étapes avant de commencer un projet de longue durée :</p><ul><li><strong>Tension Personnelle :</strong> Si vous tricotez serré, montez de 0,5mm. Si vous tricotez lâche, descendez de 0,5mm.</li><li><strong>Matériau de l\'Aiguille :</strong> Bambou pour les fils glissants ; Métal pour les laines rugueuses.</li><li><strong>Type de Fibre :</strong> Le coton ne cède pas ; La laine mérinos se dilate au blocage.</li><li><strong>Échantillon de Tension :</strong> Tricotez un carré de 10x10cm et lavez-le avant de mesurer le calibre final.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Le système Métrique est universel et évite les erreurs d\'arrondi entre fabricants.',
          con: 'De nombreux patrons anciens n\'incluent pas de mesures en millimètres.',
        },
        {
          pro: 'Le système US facilite la mémorisation des tailles standard pour les patrons américains.',
          con: 'Les lettres des crochets ne sont pas toujours cohérentes entre les marques.',
        },
        {
          pro: 'Le système WPI permet de recycler des fils sans étiquette de façon technique et professionnelle.',
          con: 'Nécessite une mesure manuelle très méticuleuse pour ne pas fausser le résultat.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'Carré d\'échantillon (10x10cm) tricoté avant de commencer le projet pour valider le calibre réel.' },
        { term: 'Hook Throat', definition: 'La gorge du crochet. Sa profondeur détermine la charge de fil que l\'aiguille peut gérer.' },
        { term: 'Block Testing', definition: 'Processus de mouillage et d\'étirement du tricot pour que les fibres se détendent et révèlent leur taille finale réelle.' },
      ],
    },
    {
      type: 'summary',
      title: 'Facteurs Critiques pour la Réussite de Votre Projet Textile',
      items: [
        'La bonne aiguille déterminera non seulement la taille, mais aussi la durabilité du vêtement contre le frottement.',
        'Utilisez notre convertisseur pour valider des patrons de magazines américains ou anglais en quelques secondes.',
        'Si vous ne trouvez pas l\'équivalent exact, optez pour le calibre supérieur ou inférieur basé sur votre échantillon de tension.',
        'Le crochet consomme environ 30% plus de fil que le tricot avec la même aiguille.',
        'Nettoyez régulièrement vos aiguilles en métal pour maintenir une vitesse de glissement optimale.',
      ],
    },
  ],
  ui: {
    labelSystem: 'SYSTÈME DE TRAVAIL',
    modeKnitting: 'Tricot',
    modeCrochet: 'Crochet',
    calibratorLabel: 'CALIBRATEUR DE PRÉCISION (ÉCHELLE RÉELLE)',
    calibratorDesc: 'Sélectionnez un diamètre pour voir les équivalences en temps réel. Les orifices ont une proportion mathématique réelle par rapport au millimétrage.',
    tagMetric: 'Métrique (mm)',
    tagUS: 'Système US',
    tagUK: 'Système UK',
    yarnLabel: 'GROSSEUR DE FIL IDÉALE',
    wpiFormat: '{wpi} WPI (Tours par pouce)',
    tableSectionLabel: 'CATALOGUE TECHNIQUE D\'ÉQUIVALENCES',
    tableMetric: 'MÉTRIQUE',
    tableUS: 'TAILLE US',
    tableUK: 'UK / IMPÉRIAL',
    tableYarn: 'CATÉGORIE DE FIL',
  },
};
