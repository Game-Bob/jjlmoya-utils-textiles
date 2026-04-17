import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'escalador-molde-costura';
const title = 'Escalador de Moldes de Costura Online';
const description = 'Ajuste qualquer molde de costura às suas medidas reais. Calculadora de escalonamento diferencial com pré-visualização do molde actualizado.';

const faqData = [
  {
    question: 'Porque é que o ombro não cresce igual ao peito?',
    answer: 'O corpo humano não é uma esfera. Enquanto o volume do tronco pode variar significativamente, o esqueleto e os pontos de articulação como o ombro são muito mais estáticos. Um escalonamento profissional aplica factores diferenciados para não desequilibrar a peça.',
  },
  {
    question: 'O que é a "folga" ou "ease"?',
    answer: 'É o espaço extra entre o seu corpo e o tecido. Sem folga, não conseguiria mover-se. A nossa calculadora mantém esta folga para que a peça lhe assente tal como o designer a concebeu, mas adaptada aos seus contornos reais.',
  },
  {
    question: 'Posso escalar um molde de malha ou jersey?',
    answer: 'Sim, mas tenha em conta que os tecidos elásticos costumam ter folga negativa. Se o molde for muito ajustado, certifique-se de que o factor de elasticidade do novo tecido que escolher seja o mesmo do tecido original.',
  },
];

const howToData = [
  {
    name: 'Meça o seu molde',
    text: 'Meça as linhas horizontais chave (peito, cintura e anca) nas peças de papel do seu molde original, de costura a costura.',
  },
  {
    name: 'Configure a origem',
    text: 'Introduza o tamanho do molde ou as medidas que tirou na coluna de "Origem" da nossa ferramenta.',
  },
  {
    name: 'Introduza o destino',
    text: 'Coloque as suas medidas reais ou o tamanho que pretende atingir. A ferramenta calculará a diferença exacta por zona.',
  },
  {
    name: 'Aplique na mesa de corte',
    text: 'Siga as instruções de "Acções na Mesa de Corte" para adicionar ou retirar centímetros nas laterais e bainhas das suas peças.',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Patronaje: Las Bases - Teresa Gilewska',
      url: 'https://www.scribd.com/document/696165843/patronaje-las-bases-by-teresa-gilewska',
    },
    {
      name: 'Metric Pattern Cutting for Women\'s Wear - Winifred Aldrich',
      url: 'https://download.e-bookshelf.de/download/0000/5989/88/L-G-0000598988-0002339537.pdf',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Como Escalar Moldes de Costura: Guia Técnico e Prático',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O <strong>escalonamento de moldes</strong> (ou <em>grading</em>) é uma das competências mais críticas no mundo da confecção. Não se trata simplesmente de aumentar ou reduzir um desenho de forma proporcional; trata-se de adaptar uma estrutura bidimensional às complexas curvas e proporções do corpo humano, que não cresce de forma linear.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Cálculos Locais', icon: 'mdi:calculator' },
        { value: 'Diferencial', label: 'Escalado Proporcional', icon: 'mdi:resize' },
        { value: '100%', label: 'Seguro e Privado', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'O que é exactamente o escalonamento de moldes?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O escalonamento (ou <em>grading</em> em inglês) é o processo técnico de aumentar ou diminuir o tamanho de um molde base para criar uma série de tamanhos diferentes. Ao contrário de um simples zoom, o escalonamento tem em conta que certas partes do corpo crescem mais do que outras. Por exemplo, o contorno do peito costuma variar mais entre tamanhos do que a largura do ombro ou o comprimento do tronco.',
    },
    {
      type: 'title',
      text: 'O Segredo do Sucesso: A Folga (Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Folga de movimento:</strong> os centímetros extra necessários para que possa respirar, sentar-se e mover os braços sem que o tecido se rasgue.',
        '<strong>Folga de design:</strong> os centímetros que o designer adicionou para criar uma silhueta específica (por exemplo, um casaco oversize ou uma blusa vaporosa).',
      ],
    },
    {
      type: 'title',
      text: 'Escalonamento Horizontal vs. Vertical',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Eixo Horizontal (Contornos):</strong> Peito, Cintura, Anca. Requer maior ajuste. Divide-se em quartos para cada peça do molde.',
        '<strong>Eixo Vertical (Comprimentos):</strong> Comprimento frente, comprimento costas, comprimento total. Afecta a posição de pinças e linha de cintura. Menor variação entre tamanhos contíguos.',
      ],
    },
    {
      type: 'title',
      text: 'Como usar o Escalador de Moldes',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Meça o seu molde:</strong> pegue na peça de papel e meça de borda a borda nas linhas de peito, cintura e anca.',
        '<strong>Introduza as medidas origem:</strong> escreva essas medidas na coluna esquerda e indique que tamanho representa esse molde.',
        '<strong>Introduza as suas medidas ou tamanho destino:</strong> na coluna direita, coloque as suas medidas reais ou o tamanho que pretende atingir.',
        '<strong>Interprete os resultados:</strong> a calculadora mostrar-lhe-á quanto deve adicionar ou retirar em cada zona específica.',
      ],
    },
    {
      type: 'tip',
      title: 'Conselho para um Escalonamento Profissional',
      html: '<p><strong>Não escale mais de dois ou três tamanhos:</strong> se tentar passar de um tamanho 36 para um 52, é muito provável que a cava se deforme e o decote fique enorme. Nesses casos, é melhor redesenhar o molde base usando as suas medidas do zero.</p>',
    },
    {
      type: 'title',
      text: 'Vantagens do escalonamento digital',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Mantém a proporção exacta do design original.',
          con: 'As cavas podem requerer um ligeiro suavizado manual.',
        },
        {
          pro: 'Cálculo instantâneo da folga necessária.',
          con: 'Não detecta automaticamente se o molde já inclui costura.',
        },
        {
          pro: 'Visualização gráfica do crescimento da peça.',
          con: 'Requer uma recolha de medidas inicial muito precisa.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diferencial', definition: 'Diferença de medida entre dois tamanhos consecutivos.' },
        { term: 'Pontos de Ancoragem', definition: 'Zonas do molde que não se movem (normalmente o centro da frente/costas).' },
        { term: 'Ninho de Escalonamento', definition: 'Desenho sobreposto de todos os tamanhos escalados.' },
        { term: 'Molde Base', definition: 'Modelo sem design nem folga que corresponde às medidas do corpo.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'SISTEMA DE TRABALHO',
    modeStandard: 'Tamanhos Padrão',
    modeCustom: 'Medidas Reais',
    labelPatternSize: 'Tamanho Molde',
    labelTargetSize: 'Tamanho Destino',
    labelOriginMeasures: 'MEDIDAS ORIGEM',
    labelTargetMeasures: 'AS SUAS MEDIDAS',
    labelEase: 'Folga Actual (Ease)',
    labelChest: 'Peito',
    labelWaist: 'Cintura',
    labelHips: 'Anca',
    labelLength: 'Comprimento',
    resBust: 'Busto',
    resWaist: 'Cintura',
    resHips: 'Anca',
    resLength: 'Comprimento',
    actionLatAdd: 'Adicione',
    actionLatRemove: 'Retire',
    actionLatSuffix: 'na lateral da peça',
    actionLatNote: 'Ajuste por quarto de molde',
    actionLenExtend: 'Alongue o molde',
    actionLenShorten: 'Encurte o molde',
    actionLenNote: 'Ajuste na linha da bainha',
    legendOriginal: 'Original',
    legendUpdated: 'Actualizado',
    warnText: 'Escalonamento superior a 3 tamanhos. Risco de deformação na cava.',
    sizePrefix: 'Tamanho',
  },
};
