import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'calculadora-tecido-projeto';
const title = 'Calculadora de Consumo de Tecido por Peça';
const description =
  'Calcule facilmente quanto tecido precisa para coser uma saia, umas calças, um vestido ou uma camisa. Ajuste consoante a largura do tecido e o tamanho para um corte profissional.';

const faqData = [
  {
    question: 'Quanto tecido preciso para uma saia?',
    answer:
      'Depende da largura do tecido. Para uma saia reta em tecido de 140-150 cm costuma bastar 1.20 metros. Se o tecido for de 90-110 cm, precisará de 2.00 metros.',
  },
  {
    question: 'Como é que a largura do tecido afeta o consumo?',
    answer:
      'Com uma largura menor, as peças do molde não cabem uma ao lado da outra (em paralelo), pelo que o consumo costuma duplicar ao ter de as colocar uma por baixo da outra.',
  },
  {
    question: 'É melhor comprar tecido a mais?',
    answer:
      'Sim, recomenda-se uma margem de 10% (cerca de 20 cm) para compensar encolhimento, falhas no tecido ou margens de costura inesperadas.',
  },
  {
    question: 'O que é o fio do tecido e como influencia?',
    answer:
      'É a direção paralela às ourelas do tecido. Os moldes devem alinhar-se com este fio para que a peça não se deforme com o uso.',
  },
];

const howToData = [
  {
    name: 'Escolher o tipo de peça',
    text: 'Selecione o modelo que vai confecionar (saia, calças, etc.) para carregar a sua tabela de consumo base.',
  },
  {
    name: 'Introduzir largura do tecido',
    text: 'Meça a largura de ourela a ourela do tecido que planeia comprar (90, 115, 140 ou 150 cm).',
  },
  {
    name: 'Selecionar o tamanho',
    text: 'Ajuste o volume da peça consoante o tamanho (XS-S, M-L, XL-XXL) para recalcular o fator multiplicativo.',
  },
  {
    name: 'Obter metros totais',
    text: 'Reveja o resultado final com e sem margem de costura para saber exatamente quanto pedir na loja.',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
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
      text: 'Calculadora de Metros de Tecido para Confeção: Guia de Consumo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma das dúvidas mais frequentes na oficina de costura é determinar quanto tecido comprar para um projeto específico. O consumo de tecido depende radicalmente de três fatores: o modelo da peça, o tamanho da pessoa e, sobretudo, a largura da peça de tecido (que costuma oscilar entre 90 cm e 150 cm). Esta calculadora técnica sistematiza o cálculo para que não compre a mais nem fique sem material a meio do corte.',
    },
    {
      type: 'title',
      text: 'Quanto tecido preciso para um vestido ou umas calças?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O cálculo tradicional baseia-se no comprimento da peça mais o comprimento das mangas, adicionando uma margem para as vistas e a bainha. No entanto, quando o tecido é estreito (90-110 cm), as peças não costumam caber uma ao lado da outra, o que obriga a comprar o dobro do comprimento. A nossa ferramenta contempla estas variações automaticamente de acordo com o padrão da indústria têxtil.',
    },
    {
      type: 'title',
      text: 'Consumo Estimado consoante a Largura do Tecido (tamanho M-L)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Saia Reta:</strong> 2.00 m em tecido de 90 cm · 1.20 m em tecido de 140/150 cm.',
        '<strong>Calças Compridas:</strong> 2.50 m em tecido de 90 cm · 1.50 m em tecido de 140/150 cm.',
        '<strong>Camisa de Manga Comprida:</strong> 2.20 m em tecido de 90 cm · 1.40 m em tecido de 140/150 cm.',
        '<strong>Vestido Básico:</strong> 3.50 m em tecido de 90 cm · 2.20 m em tecido de 140/150 cm.',
      ],
    },
    {
      type: 'title',
      text: 'Fatores que Alteram o Consumo de Tecido',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Direção do padrão (Rapport):</strong> Se o tecido tiver um desenho com uma direção clara ou quadrados que devam casar, precisará de entre 15% e 20% extra de material.',
        '<strong>Sentido do fio (Em viés):</strong> Os cortes em viés ou circulares (como as saias de capa) consomem significativamente mais tecido devido ao desperdício nos ângulos.',
        '<strong>Sentido do pelo:</strong> Em tecidos como o veludo ou a bombazina, todas as peças devem ser cortadas na mesma direção, o que limita a otimização do espaço.',
        '<strong>Encolhimento:</strong> Muitos tecidos naturais (algodão, linho, lã) encolhem após a primeira lavagem. É vital lavar o tecido antes de cortar.',
      ],
    },
    {
      type: 'tip',
      title: 'Conselho do Costureiro',
      html: '<p>Se vai usar um tecido com um padrão grande ou quadrados (plaids), não confie apenas na medida padrão. Some sempre uma repetição completa do desenho (o rapport) ao total de metros calculado para garantir que os moldes coincidam nas costuras laterais.</p>',
    },
    {
      type: 'title',
      text: 'Vantagens e Limitações desta Calculadora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Cálculo instantâneo para múltiplas larguras de tecido com ajuste de tamanho.',
        'Inclui estimativa de margem de costura personalizável.',
        'Guia visual de disposição de peças no pano.',
        'Não substitui uma disposição de moldes real (marcada). Os tamanhos Plus podem requerer ajustes manuais adicionais.',
      ],
    },
    {
      type: 'card',
      title: 'Largura da peça',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'A medida transversal do tecido de <strong>ourela a ourela</strong>. Determina se as peças do molde cabem em paralelo ou devem ser colocadas em série.',
    },
    {
      type: 'card',
      title: 'Margem de costura',
      icon: 'mdi:tape-measure',
      html: 'A distância entre a borda do molde e a <strong>linha de costura final</strong>. Um valor padrão é 1.5 cm para costuras de roupa.',
    },
    {
      type: 'card',
      title: 'Ourela',
      icon: 'mdi:content-cut',
      html: 'As bordas laterais reforçadas do tecido que <strong>não se desfiam</strong>. Indicam a direção do fio e servem como referência para o corte.',
    },
  ],
  ui: {
    sectionProject: 'Projeto',
    sectionMaterial: 'Material',
    labelGarmentType: 'Tipo de peça',
    labelSize: 'Tamanho',
    labelFabricWidth: 'Largura de tecido (cm)',
    labelSeamAllowance: 'Margem de costura (cm)',
    garmentSkirt: 'Saia (Reta/A-line)',
    garmentPants: 'Calças',
    garmentDress: 'Vestido',
    garmentShirt: 'Camisa / Blusa',
    garmentCoat: 'Casaco / Jaqueta',
    garmentTote: 'Tote Bag',
    garmentMerceria: {
      skirt: '1 ferm. 20cm, 1 botão',
      pants: '1 ferm. 20cm, 1 botão, 30cm entretela',
      dress: '1 ferm. 60cm, 50cm entretela',
      shirt: '7 botões, 1m entretela fina',
      coat: '3 botões grandes, 1.5m entretela, forro',
      tote: '2m fita para pegas',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Estreita)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (Padrão EU)',
    width150: '150 cm (Tapeçaria)',
    btnClear: 'Limpar',
    btnShare: 'Partilhar',
    btnCopied: 'Copiado!',
    btnCopyList: 'Copiar lista',
    resultLabel: 'Necessita de:',
    resultUnit: 'Metros',
    shopAdviceFormat: 'Peça {m}m na loja',
    boardEmpty: 'Selecione um projeto para ver a disposição',
    boardDescFormat: 'Largura: {w}cm | Comprimento: {m}m',
    merchTitle: 'Retrosaria e Materiais',
    checklistThread: 'Linha a condizer',
    warningSerialFormat: 'Em tecidos de {w}cm as peças do seu tamanho não cabem em paralelo. Consumo ajustado para corte em série.',
    foldLabel: '⊟ dobra',
    pieceNames: {
      front: 'Dianterio',
      back: 'Costas',
      waistband: 'Cós',
      waistbelt: 'Passador',
      sleeve: 'Manga',
      collar: 'Gola',
      cuffs: 'Punhos',
      facings: 'Vistas',
      lapels: 'Lapelas',
      pocket: 'Bolso',
      body: 'Corpo',
      handleA: 'Pega A',
      handleB: 'Pega B',
    },
  },
};
