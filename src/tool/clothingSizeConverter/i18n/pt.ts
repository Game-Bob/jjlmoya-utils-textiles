import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'conversor-tamanhos-roupa-internacional';
const title = 'Conversor de Tamanhos de Roupa Internacional';
const description =
  'Converta tamanhos de roupa entre sistemas EU, US, UK e IT. T-shirts, calças, vestidos e casacos para homem, mulher e unisexo. Inclui guia de medidas e recomendador por marca.';

const faqData = [
  {
    question: 'Qual é a diferença entre o tamanho EU e o tamanho US em roupa?',
    answer:
      'Os tamanhos europeus (EU) usam números progressivos ou letras (XS-XXL ou 32-52), enquanto os norte-americanos (US) usam frequentemente letras ou números específicos para calças. Em geral, um tamanho 36 EU equivale a um 4 US em roupa de mulher.',
  },
  {
    question: 'Os tamanhos mudam se for roupa de homem ou mulher?',
    answer:
      'Sim, absolutamente. Mesmo no mesmo país, um tamanho 40 para homem não é o mesmo que um 40 para mulher. Os homens têm proporções diferentes (ombros mais largos), pelo que o cálculo do tamanho varia.',
  },
  {
    question: 'Como sei se devo subir ou descer um tamanho numa marca?',
    answer:
      'A melhor forma é rever as opiniões de outros clientes. Frases como "ficou-me pequeno" ou "tamanho grande" são muito úteis. Consulte também a tabela específica de medidas dessa marca.',
  },
  {
    question: 'A tabela de conversão de tamanhos é exata?',
    answer:
      'A tabela de conversão é uma guia. Embora seja geralmente precisa, cada marca tem as suas próprias especificações. Verifique sempre a tabela de tamanhos da loja específica antes de comprar.',
  },
  {
    question: 'As peças encolhem após a lavagem?',
    answer:
      'Depende do material. O algodão 100% pode encolher 5-10% se for lavado com água quente e seco na máquina de secar. Os materiais sintéticos mantêm melhor a sua forma. Reveja sempre as instruções de lavagem.',
  },
];

const howToData = [
  {
    name: 'Selecione Peça e Género',
    text: 'Escolha o tipo de roupa (t-shirt, calças, vestido, casaco) e o género correspondente.',
  },
  {
    name: 'Escolha o Seu Sistema de Tamanho',
    text: 'Selecione o sistema que conhece: EU, US, UK ou IT.',
  },
  {
    name: 'Selecione o Seu Tamanho',
    text: 'Escolha o seu tamanho no seletor ou clique na grelha. Verá as equivalências instantaneamente.',
  },
  {
    name: 'Consulte o Guia de Marcas',
    text: 'Reveja se essa marca veste pequeno, regular ou grande para ajustar a sua compra.',
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
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    { name: 'ISO 3635: Tamanhos de Roupa - Norma Oficial', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Normas de Tamanho de Roupa - Wikipedia', url: 'https://pt.wikipedia.org/wiki/Tamanho_de_roupa' },
    {
      name: 'Conversão de Tamanhos Internacional - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Conversor de Tamanhos de Roupa: Guia Completo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Comprar roupa em lojas internacionais pode ser confuso quando os tamanhos não coincidem. O <strong>conversor de tamanhos de roupa</strong> ajuda-o a encontrar o seu tamanho perfeito nos sistemas EU, US, UK e IT, para t-shirts, calças, vestidos e casacos.',
    },
    {
      type: 'title',
      text: 'Porque é que os tamanhos de roupa variam entre países?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Não existe uma norma internacional única. Cada região desenvolveu o seu próprio sistema, o que gera confusão ao comprar em lojas estrangeiras ou em plataformas como Amazon ou AliExpress.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Tamanhos EU (Europa):</strong> Usam números progressivos (32, 34, 36...) ou letras. É o sistema mais comum em Portugal, Espanha e França.</span>',
        '<span><strong>Tamanhos US (Estados Unidos):</strong> Usam letras (XS, S, M, L) ou números para calças de mulher (0, 2, 4, 6...).</span>',
        '<span><strong>Tamanhos UK (Reino Unido):</strong> Semelhante ao sistema EU mas com numeração própria, geralmente inferior à US.</span>',
        '<span><strong>Tamanhos IT (Itália):</strong> Numeração italiana com variações em relação ao sistema EU geral.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Conselho Profissional',
      html: 'Os tamanhos variam significativamente entre marcas. Um tamanho 38 na Zara pode ser diferente de um 38 na H&amp;M. Consulte sempre a tabela de tamanhos específica da loja antes de comprar.',
    },
    {
      type: 'title',
      text: 'Como medir o seu corpo corretamente',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para garantir um tamanho correto, meça o seu corpo com uma fita métrica flexível. Meça ao final do dia, quando o corpo está na sua expansão máxima.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Peito:</strong> Meça em volta da parte mais larga do peito, passando a fita por baixo dos braços.</span>',
        '<span><strong>Cintura:</strong> Meça à altura do umbigo sem apertar o abdómen artificialmente.</span>',
        '<span><strong>Anca:</strong> Meça em volta da parte mais larga das ancas, com a fita paralela ao chão.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Guia de ajuste por marca',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Tamanhos regulares. Um 36 na Zara costuma ser confiável para medidas padrão.</span>',
        '<span><strong>H&amp;M:</strong> Tende a vestir grande. Considere baixar um tamanho em relação ao seu habitual.</span>',
        '<span><strong>Uniqlo:</strong> Veste pequeno, especialmente em básicos. Recomenda-se subir um tamanho.</span>',
        '<span><strong>Nike / Adidas:</strong> Cortes ajustados para atividade física. Valorize subir meio tamanho.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Tipo de Peça',
    categoryShirts: 'T-shirts',
    categoryPants: 'Calças',
    categoryDresses: 'Vestidos',
    categoryJackets: 'Casacos',
    genderLabel: 'Género',
    genderMen: 'Homem',
    genderWomen: 'Mulher',
    genderUnisex: 'Unisexo',
    tabBySize: 'Por Tamanho',
    tabByMeasurements: 'Por Medidas',
    regionLabel: 'O Seu Sistema de Tamanho',
    sizeLabel: 'Selecione o Seu Tamanho',
    regionEU: 'Europa (EU)',
    regionUS: 'Estados Unidos (US)',
    regionUK: 'Reino Unido (UK)',
    regionIT: 'Itália (IT)',
    labelEU: 'Europa',
    labelUS: 'Estados Unidos',
    labelUK: 'Reino Unido',
    labelIT: 'Itália',
    quickGridTitle: 'Equivalências Rápidas (EU)',
    tableTitle: 'Tabela de Conversão Completa',
    measurementsTitle: 'Insira as Suas Medidas',
    chestLabel: 'Peito (cm)',
    waistLabel: 'Cintura (cm)',
    hipLabel: 'Anca (cm)',
    chestPlaceholder: 'Ex: 95',
    waistPlaceholder: 'Ex: 85',
    hipPlaceholder: 'Ex: 95',
    recommendBtnLabel: 'Recomendar Tamanho',
    tipsTitle: 'Dicas de Medição',
    tipOverClothes: 'Sobre a roupa',
    tipStraight: 'Reta e paralela',
    tipNoTight: 'Sem apertar',
    tipEndOfDay: 'Ao final do dia',
    recommendationTitle: 'Tamanho Recomendado',
    recommendedSizePrefix: 'Recomendamos o tamanho:',
    measuredBy: 'Baseado nas suas medidas:',
    chestShort: 'Peito',
    waistShort: 'Cintura',
    hipShort: 'Anca',
    recommendationError: 'Por favor complete todas as medidas para obter uma recomendação.',
    recommendationNoData: 'Não existem dados disponíveis para esta categoria.',
    fitGuideTitle: 'Guia de Ajuste por Marca',
    fitSmall: 'Tamanho Pequeno',
    fitRegular: 'Tamanho Regular',
    fitLarge: 'Tamanho Grande',
    fitInfoDefault: 'Clique numa marca para obter recomendações específicas.',
    fitNotif1: ' costuma vestir ',
    fitNotifSmall: 'pequeno',
    fitNotifRegular: 'regular',
    fitNotifLarge: 'grande',
    fitNotif2: '. Considere ',
    fitNotif3: ' se for a sua primeira vez a comprar nesta marca.',
    fitAdviceSmall: 'subir um tamanho',
    fitAdviceRegular: 'manter o seu tamanho habitual',
    fitAdviceLarge: 'baixar um tamanho',
    fitSelectedSuffix: ' selecionada. Selecione outra marca para comparar.',
    infoBannerTitle: 'Dica Pro:',
    infoBannerText:
      'Os tamanhos de roupa variam significativamente entre marcas. Verifique sempre a tabela específica da loja antes de comprar.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
