import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'conversor-agulhas-tricot';
const title = 'Conversor de Agulhas de Tricô e Crochê';
const description = 'Converta tamanhos de agulhas entre sistemas Métrico (mm), US e UK com recomendação de fios e WPI.';

const faqData = [
  {
    question: 'Por que existem diferentes sistemas de tamanhos de agulhas?',
    answer: 'Historicamente, cada país desenvolveu o seu próprio sistema. O sistema métrico (mm) é o padrão internacional mais preciso. O sistema US usa numeração progressiva (0-50), enquanto o sistema UK usa numeração inversa: quanto mais alto o número, mais fina é a aguja.',
  },
  {
    question: 'Os tamanhos de crochê e tricô em US são iguais?',
    answer: 'Não exatamente. As agulhas de crochê nos US costumam levar uma letra associada (ex. H-8) e existem variações específicas em espessuras pequenas. Além disso, as agulhas de aço para fios finos usam uma numeração totalmente diferente.',
  },
  {
    question: 'Que agulha devo escolher se o meu padrão usa uma medida sem equivalente exato?',
    answer: 'Se um padrão pede uma medida como 7.0mm e o seu sistema só chega de 6.5mm a 8.0mm, recomenda-se fazer sempre uma amostra de tensão (gauge). A diferença de 0.5mm pode alterar significativamente o tamanho final da peça.',
  },
  {
    question: 'O que é o WPI (Wraps Per Inch)?',
    answer: 'É o número de voltas de fio que cabem numa polegada (2.54 cm). É o método mais fiável para identificar a espessura de uma lã sem etiqueta e determinar que agulha é a mais adequada para tecê-la.',
  },
];

const howToData = [
  {
    name: 'Seleccione o tipo de trabalho',
    text: 'Escolha entre tricô (knitting) ou crochê (crochet) para ver as equivalências correctas no sistema US.',
  },
  {
    name: 'Escolha o calibre no selector visual',
    text: 'Clique sobre o círculo que corresponde ao tamanho da sua agulha. Os orifícios guardam proporção matemática real com a medida em milímetros.',
  },
  {
    name: 'Leia as equivalências',
    text: 'Consulte os resultados em tempo real: milímetros, tamanho US e tamanho UK, junto com a categoria de fio recomendada e o seu WPI.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
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
      text: 'Guia Técnico de Agulhas de Tricô e Crochê: Sistemas, Calibres e Equivalências',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A globalização dos padrões digitais tornou imprescindível entender as diferenças entre o <strong>sistema métrico decimal</strong>, o <strong>padrão dos Estados Unidos (US)</strong> e o <strong>sistema imperial do Reino Unido (UK)</strong>. Esta ferramenta converte entre os três sistemas e oferece recomendação de fio através do método WPI.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Funciona sem Rede', icon: 'mdi:wifi-off' },
        { value: 'Triplo', label: 'Sincronização Total', icon: 'mdi:sync' },
        { value: 'WPI', label: 'Análise de Fio', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'La Complexidade dos Sistemas Internacionais',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sistema', 'Base de Cálculo', 'Região Predominante', 'Características Técnicas'],
      rows: [
        ['<strong>Métrico (mm)</strong>', 'Diâmetro exacto em mm', 'Europa / Internacional', 'O padrão ISO mais fiável. Incrementos constantes de 0.25mm ou 0.50mm.'],
        ['<strong>US (EUA)</strong>', 'Numeração Progressiva', 'América do Norte', 'Usa números do 0 ao 50. No crochê, os números associam-se a letras (B-1, G-6).'],
        ['<strong>UK (Imperial)</strong>', 'Numeração Inversa', 'Reino Unido / Austrália', 'Baseado no calibre de trefilagem. Quanto maior o número, mais fina é a agulha (14 é fino, 0 é grosso).'],
      ],
    },
    {
      type: 'title',
      text: 'Identificação de Fios através do Método WPI',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / Renda (18-22+ WPI):</strong> Fios ultrafinos para rendas de seda ou mohair. Agulhas de 1.5mm a 2.5mm.',
        '<strong>Fingering / Baby (14-16 WPI):</strong> O padrão para meias e roupa de bebé. Agulhas óptimas de 2.75mm a 3.25mm.',
        '<strong>Sport / Fine (12-14 WPI):</strong> Fio de espessura média-baixa, ideal para jaquetas leves. Agulhas de 3.5mm a 3.75mm.',
        '<strong>DK / Light Worsted (11-13 WPI):</strong> A espessura mais versátil do mercado. Agulhas de 4.0mm ou 4.5mm.',
        '<strong>Worsted / Aran (9-10 WPI):</strong> Fio grosso para camisolas de Inverno. Agulhas de 5.0mm a 5.5mm.',
        '<strong>Bulky / Chunky (7-8 WPI):</strong> Lãs de grande calibre para projectos rápidos. Agulhas de 6.0mm a 8.0mm.',
        '<strong>Super Bulky (5-6 WPI):</strong> Fibras gigantes para decoração ou cachecóis. Agulhas de 9.0mm a 15.0mm.',
      ],
    },
    {
      type: 'tip',
      title: 'Técnica Profissional: A Agulha de Aço',
      html: '<p>Existe uma família de agulhas para fios de algodão mercerizado extremamente finos. São as <strong>Steel Hooks (Agulhas de Aço)</strong>. A sua numeração é específica e inversa: uma agulha de aço #14 (0.6mm) é muito mais fina do que uma de #00 (3.5mm). Nunca use a tabela padrão para estes calibres.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Checklist para acertar com o calibre',
      icon: 'mdi:check-circle-outline',
      badge: 'Validação Técnica',
      html: '<p>Siga estes passos antes de iniciar um projecto de longa duração:</p><ul><li><strong>Tensão Pessoal:</strong> Se costuma tecer apertado, suba 0.5mm. Se tece folgado, desça 0.5mm.</li><li><strong>Material da Agulha:</strong> Bambu para fios escorregadios; Metal para lãs rugosas.</li><li><strong>Tipo de Fibra:</strong> O algodão não cede; a lã merino expande com o bloqueio.</li><li><strong>Amostra de Tensão:</strong> Teça um quadrado de 10x10cm e lave-o antes de medir o calibre final.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'O sistema Métrico é universal e evita erros de arredondamento entre fabricantes.',
          con: 'Muitos padrões antigos e históricos não incluem medidas em milímetros.',
        },
        {
          pro: 'O sistema US facilita a memorização de tamanhos padrão para padrões americanos.',
          con: 'As letras no crochê nem sempre são consistentes entre marcas.',
        },
        {
          pro: 'O sistema WPI permite reciclar fios sem etiqueta de forma técnica e profissional.',
          con: 'Requer uma medição manual muito meticulosa para não falsear o resultado.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'Quadrado de amostra (10x10cm) tecido antes de iniciar o projecto para validar o calibre real.' },
        { term: 'Hook Throat', definition: 'A garganta da agulha de crochê. A sua profundidade determina quanta carga de fio pode manejar a aguja.' },
        { term: 'Block Testing', definition: 'Processo de humedecer e esticar o tecido para que as fibras relaxem e revelem o seu tamanho final verdadeiro.' },
      ],
    },
    {
      type: 'summary',
      title: 'Factores Críticos para o Sucesso do seu Projecto Têxtil',
      items: [
        'A agulha correcta ditará não só o tamanho, mas a durabilidade da peça contra o roçamento.',
        'Use o nosso conversor para validar padrões de revistas americanas ou inglesas em segundos.',
        'Se não encontrar o equivalente exacto, opte pelo calibre superior ou inferior baseando-se na sua amostra de tensão.',
        'O crochê consome aprox. 30% mais fio do que o tricô com a mesma agulha.',
        'Limpe as suas agulhas de metal regularmente para manter a velocidade de deslizamento óptima.',
      ],
    },
  ],
  ui: {
    labelSystem: 'SISTEMA DE TRABALHO',
    modeKnitting: 'Tricô',
    modeCrochet: 'Crochê',
    calibratorLabel: 'CALIBRADOR DE PRECISÃO (ESCALA REAL)',
    calibratorDesc: 'Seleccione um diâmetro para ver as equivalências em tempo real. Os orifícios guardam uma proporção matemática real em relação à medida em milímetros.',
    tagMetric: 'Métrico (mm)',
    tagUS: 'Sistema US',
    tagUK: 'Sistema UK',
    yarnLabel: 'ESPESSURA DE FIO IDEAL',
    wpiFormat: '{wpi} WPI (Volta por polegada)',
    tableSectionLabel: 'CATÁLOGO TÉCNICO DE EQUIVALÊNCIAS',
    tableMetric: 'MÉTRICO',
    tableUS: 'TAMANHO US',
    tableUK: 'UK / IMPERIAL',
    tableYarn: 'CATEGORIA FIO',
  },
};
