import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'calculadora-la-tricot-crochet';
const title = 'Calculadora de Lã: Quantos metros e novelos preciso?';
const description =
  'Calcule com precisão métrica a quantidade de lã ou fio necessária para os seus projetos de tricot e crochet a partir do padrão e do tamanho.';

const faqData = [
  {
    question: 'Porque é que o crochet gasta mais lã do que o tricot?',
    answer:
      'O crochet baseia-se na criação de nós e laçadas sobrepostas, o que gera um tecido mais denso e espesso por centímetro quadrado. Em média, um projeto de crochet consome entre 25% a 35% mais fio do que o mesmo projeto tecido em tricot (ponto jersey).',
  },
  {
    question: 'O que acontece se eu comprar lã de diferentes lotes de tingimento (Dye Lot)?',
    answer:
      'Mesmo que a cor pareça idêntica na loja, as variações químicas mínimas durante o tingimento podem criar "riscas" visíveis na peça terminada quando tecidas juntas. Recomenda-se vivamente comprar toda a lã de uma só vez, verificando que o código do lote é o mesmo.',
  },
  {
    question: 'Como é que a tensão (gauge) afecta o consumo final?',
    answer:
      'Se tecer de forma folgada, cada ponto consome mais metros de fio. Se a sua amostra de tensão for maior do que o indicado no padrão (ex. 13 pontos em vez de 15), o seu consumo de lã aumentará substancialmente. É vital realizar uma amostra de tensão prévia.',
  },
  {
    question: 'Como calculo os metros se apenas tenho o peso do novelo?',
    answer:
      'Sem o dado da metragem, é difícil. A maioria dos novelos indica na sua etiqueta os metros. Se não o indicarem, procure pelo nome da lã em bases de dados como Ravelry para encontrar a longitude exacta por cada 50g ou 100g.',
  },
];

const howToData = [
  {
    name: 'Seleccione o projeto',
    text: 'Escolha entre uma camisola, cachecol, gorro, meias ou manta para carregar as bases de consumo específicas.',
  },
  {
    name: 'Defina o tamanho e espessura',
    text: 'Indique as dimensões finais (S, M, L, XL) e a espessura do fio que vai utilizar (Fingering, DK, Worsted, Bulky).',
  },
  {
    name: 'Active multiplicadores',
    text: 'Se o seu padrão tem tranças ou texturas complexas, active o switch de texturas para adicionar o suplemento necessário.',
  },
  {
    name: 'Obtenha a lista de compras',
    text: 'Escreva os metros por novelo da sua lã escolhida para ver exactamente quantas unidades deve colocar no carrinho.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
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
      text: 'Guia de Consumo de Lã: Como Calcular metros e novelos para os seus projetos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Domine a logística da tecelagem e evite ficar sem fio com a nossa calculadora técnica de precisão para tricot e crochet. Um dos maiores medos de qualquer pessoa que tece é o <strong>"Yarn Chicken"</strong>: aquele momento crítico no final de um projeto onde parece que o fio vai terminar antes de fechar os últimos pontos. Esta calculadora foi desenvolvida para oferecer estimativas baseadas em padrões industriais de metragem e gramagem.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Margem de Segurança', icon: 'mdi:security' },
        { value: 'Métrico', label: 'Cálculo em Metros', icon: 'mdi:ruler' },
        { value: 'Offline', label: 'Base de Dados Local', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Porque é que a gramagem dos novelos é enganadora?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muitos principiantes cometem o erro de comprar lã baseando-se exclusivamente no peso (ex. "6 novelos de 100g"). No entanto, o peso é uma unidade de massa, não de longitude. Duas lãs que pesem 100g podem ter longitudes radicalmente distintas: uma lã tipo <strong>Bulky</strong> pode ter apenas 80 metros, enquanto uma <strong>Fingering / Lace</strong> pode superar os 450 metros com o mesmo peso.',
    },
    {
      type: 'paragraph',
      html: 'Por isso, a nossa calculadora prioriza sempre os <strong>metros totais</strong>. Assim que conhecer a longitude necessária para o seu tamanho e projeto, pode dividi-la pela metragem que indica a etiqueta do seu novelo específico para obter o número exacto de unidades que deve adquirir.',
    },
    {
      type: 'title',
      text: 'Tabela de Metragens Padrão por Espessura',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se não tiver a etiqueta à mão, pode usar estas metragens de referência (por cada 100g de fibra) para as suas estimativas:',
    },
    {
      type: 'table',
      headers: ['Espessura (Weight)', 'Metros aprox. / 100g', 'Uso Recomendado', 'Agulhas Sugeridas'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Xales de renda, calados', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Meias, roupa de bebé', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Casacos leves', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Camisolas, gorros', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Mantas, casacos', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'Cachecóis XXL, mantas', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'O Factor da Tensão (Gauge)',
      html: '<p>Lembre-se que se tecer de forma muito folgada, os seus pontos serão maiores e consumirão mais fio do que se tecer de forma apertada. A nossa calculadora aplica uma margem de segurança, mas se sabe que a sua tensão é extremamente laxa, considere adicionar uns 5-10% adicionais aos resultados para evitar surpresas.</p>',
    },
    {
      type: 'title',
      text: 'Variáveis que aumentam o consumo de fio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nem todos os pontos consomem a mesma quantidade de fibra. Ao escolher o seu design, tenha em conta estes factores multiplicadores:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ponto Liso / Jersey',
          description: 'Representa o consumo base e a eficiência máxima de fio para qualquer peça.',
          icon: 'mdi:minus-circle-outline',
          points: ['Ideal para principiantes', 'Caimento natural do tecido'],
        },
        {
          title: 'Tranças / Textura',
          description: 'O cruzamento de fibras "encurta" a peça, aumentando o consumo em cerca de 25%.',
          icon: 'mdi:texture-box',
          points: ['Requer mais metros', 'Tecido mais denso e pesado'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Crochet',
          description: 'Os nós do crochet usam cerca de 30% mais fio do que o tricot.',
          icon: 'mdi:hook',
          points: ['Gasto acelerado de novelos', 'Textura tridimensional'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Ponto Elástico (Ribbing)',
          description: 'A estrutura de direito/avesso acumula mais lã por cm quadrado.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Consumo intermédio (+15%)', 'Alta recuperação elástica'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Glossário do Tecelão Prevenido',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (Lote de Tingimento)',
          definition:
            'Número que identifica a tina de tingimento em que a lã foi tingida. Diferentes lotes podem ter variações de cor imperceptíveis no novelo mas muito visíveis na peça terminada.',
        },
        {
          term: 'Stash (Reserva)',
          definition:
            'A colecção pessoal de fios de um tecelão. Identificar o peso dos restos de fios sem etiqueta é vital para calcular projetos pequenos.',
        },
        {
          term: 'Put-up',
          definition:
            'A forma como se apresenta o fio (em meada, em novelo ou em cone), o que afecta se necessita ser novelado antes de usar.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'O desafio de tentar terminar uma secção de tecelagem com uma quantidade de fio que parece insuficiente.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Como usar os resultados desta calculadora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Assim que a ferramenta lhe devolver o número de metros e novelos, recomendamos realizar os seguintes passos de verificação manual:',
    },
    {
      type: 'list',
      items: [
        '<strong>Verifique a metragem do seu novelo real:</strong> Nem todos os novelos de 100g têm 200m. Verifique este dado na etiqueta para ajustar o cálculo final.',
        '<strong>Some a metragem dos detalhes:</strong> Se vai adicionar franjas a um cachecol ou pompons a um gorro, some 50-80 metros extra ao total.',
        '<strong>Amostra de tensão:</strong> Teça um quadrado de 10x10 cm. Pese-o numa balança de precisão. Se pesa 20g e a sua manta mede 100x100 (100 quadrados), necessitará exactamente 2kg de lã.',
        '<strong>Compre sempre do mesmo lote:</strong> Se o cálculo diz 7 novelos, compre 8 se forem de lotes diferentes para ter margem de manobra ou para peças ocultas como as costuras.',
      ],
    },
    {
      type: 'summary',
      title: 'Conselhos Estratégicos para a Compra de Lã',
      items: [
        'Priorize os metros sobre os gramas para assegurar a longitude necessária.',
        'O crochet consome substancialmente mais lã do que o tricot; ajuste o selector de tipo.',
        'As texturas densas (tranças) requerem um aumento de 25% no orçamento de fio.',
        'Guarde sempre uma etiqueta de cada lote para o caso de precisar pedir reposição de cor.',
        'Use os 10% de margem de segurança para tecer a amostra de tensão obrigatória.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. TIPO DE PROJETO',
    sectionSize: '2. DIMENSÕES / TAMANHO',
    sectionWeight: '3. ESPESSURA DO FIO',
    sectionPattern: '4. CARACTERÍSTICAS DO PADRÃO',
    sectionBall: '5. DADOS DO NOVELO',
    labelCables: 'Tranças ou texturas densas?',
    labelGrams: 'GRAMAS / NOVELO',
    labelMeters: 'METROS / NOVELO',
    weightFine: 'Fino',
    weightMedium: 'Médio',
    weightThick: 'Grosso',
    weightXXL: 'XXL',
    projectSweater: 'CAMISOLA',
    projectScarf: 'CACHECOL',
    projectHat: 'GORRO',
    projectSocks: 'MEIAS',
    projectBlanket: 'MANTA',
    projectCardigan: 'CASACO',
    statPrefix: 'CONSUMO ESTIMADO TOTAL',
    statSuffix: 'M',
    statNote: 'Metragem final calculada com stock de reserva de 10%.',
    ballsFormatSingular: 'Compre {n} novelo',
    ballsFormatPlural: 'Compre {n} novelos',
    ballsDetailFormat: 'Novelos de {w}g / {m}m cada um.',
    alertTitle: 'Segurança estratégica:',
    alertText:
      'Este cálculo já garante que não ficará sem fio. Lembre-se de validar o número do lote (dye lot) ao comprar os seus novelos para evitar saltos de cor.',
    schemeSleeveLabel: 'Mangas',
    schemeSleeveEach: 'cada',
    schemeBodyLabel: 'Corpo',
    schemeTotalHat: 'Total Gorro',
    schemeTotalFlat: 'Total Peça',
    schemeTotalSocks: 'Total Par',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Criança', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Grande', 'Maxi'],
      socks: ['Criança', 'Ad. S', 'Ad. M', 'Ad. L'],
      blanket: ['Bebé', 'Sofá', 'Cama 90', 'Cama 150'],
    },
  },
};
