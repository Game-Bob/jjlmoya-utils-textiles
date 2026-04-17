import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'calculadora-gauge-tensao-tricot';
const title = 'Calculadora de Gauge e Tensão de Tricô';
const description =
  'Recalcula facilmente os pontos e as voltas de qualquer padrão de tricot ou ganchilho (crochê). Ajusta o gauge por múltiplos e fator de escala para um resultado profissional.';

const faqData = [
  {
    question: 'O que é a tensão ou gauge no tricot?',
    answer:
      'É a medida de quantos pontos e voltas cabem numa área determinada (usualmente 10x10 cm). É fundamental porque determina o tamanho final da peça segundo a agulha e o fio utilizado.',
  },
  {
    question: 'Como é que a mudança de gauge afeta o tamanho?',
    answer:
      'Se a sua tensão tiver mais pontos por centímetro do que o padrão, a peça será mais pequena. Se tiver menos pontos, a peça será maior. Por isso é vital recalcular os pontos ou mudar de agulhas.',
  },
  {
    question: 'Porque é que o ajuste por múltiplos é importante?',
    answer:
      'Muitos padrões têm motivos (rendados, tranças, desenhos) que requerem um número específico de pontos para serem completados. A nossa calculadora ajusta o total ao múltiplo mais próximo para não quebrar o design.',
  },
  {
    question: 'Devo lavar a amostra antes de medir?',
    answer:
      'Sim, sempre. O "bloqueio" (lavar e dar forma) relaxa as fibras e mostra a tensão real que a peça terá após o seu primeiro uso e lavagem.',
  },
];

const howToData = [
  {
    name: 'Identificar a tensão do padrão',
    text: 'Procure nas instruções do padrão quantos pontos e voltas indicam para uma amostra de 10x10 cm ou 4x4 polegadas.',
  },
  {
    name: 'Tricotar e medir a sua própria amostra',
    text: 'Tricote uma amostra com o seu fio e agulhas, bloqueie-a e meça quantos pontos e voltas tem nessa mesma área.',
  },
  {
    name: 'Configurar a calculadora',
    text: 'Introduza os dados da amostra do padrão e os da sua amostra real. Adicione o total de pontos do seu tamanho e os múltiplos do motivo, se existirem.',
  },
  {
    name: 'Obter resultados',
    text: 'Reveja o novo número de pontos a montar e o fator de escala para saber se precisa de ajustar também o comprimento da peça.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Gauge e Tensão de Tricot Online: Guia Técnico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se alguma vez terminou uma camisola que parecia desenhada para um gigante ou um gorro que mal cobria o topo da cabeça, já conhece a importância do <strong>gauge ou tensão</strong>. No mundo do tricot e do crochê, a tensão é a relação entre a espessura do fio, o tamanho das agulhas e a força com que cada pessoa que tricota manipula a hebra. Não há duas pessoas iguais a tricotar e, por isso, não há duas tensões idênticas.',
    },
    {
      type: 'title',
      text: 'Porque é vital a Tensão ou Gauge no Tricot?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora de gauge para tricot é uma ferramenta técnica desenhada para eliminar as suposições matemáticas e permitir que se foque na criatividade. Ao introduzir os dados da amostra do padrão e os da sua própria amostra, obterá ajustes precisos de pontos e voltas, assegurando que a sua peça final tenha exatamente as medidas que espera.',
    },
    {
      type: 'title',
      text: 'Como usar a calculadora de tensão de tricot',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tricote uma amostra:</strong> Não se limite a 10x10 cm. Tricote pelo menos 15x15 cm para que as bordas não falseiem a medida central.',
        '<strong>Bloqueie a sua amostra:</strong> Lave e seque a amostra tal como faria com a peça terminada. Muitas fibras de lã expandem ou crescem ao molharem-se.',
        '<strong>Meça com precisão:</strong> Utilize uma régua rígida ou um medidor de 10 cm. Conte quantos pontos entram horizontalmente e quantas voltas verticalmente.',
        '<strong>Introduza os dados:</strong> Coloque os valores do padrão na coluna esquerda e os seus valores reais na direita. A ferramenta recalculará automaticamente quantos pontos precisa para alcançar a largura desejada.',
      ],
    },
    {
      type: 'title',
      text: 'Interpretação dos Resultados: O Fator de Escala',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O fator de escala é o multiplicador que aplicamos a cada instrução do padrão. Se a sua tensão for de 22 pontos e o padrão pedir 20, o seu fator de escala é de 1.1. Isto significa que para obter a mesma largura física, precisa de mais 10% de pontos. Um desvio de 0-2% é o ideal, de 2-10% é moderado, de 10-25% requer recálculo obrigatório e mais de 25% supõe um risco estrutural.',
    },
    {
      type: 'title',
      text: 'Tratamento de Múltiplos e Motivos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um dos maiores desafios ao recalcular um padrão é manter a integridade dos rendados, tranças ou motivos. Se o design se repete a cada 8 pontos, não pode simplesmente adicionar 3 pontos adicionais; deve ajustar o total para que continue a ser múltiplo de 8. A função de <strong>ajuste por múltiplos</strong> desta calculadora sugere o número de pontos mais próximo que respeita a arquitetura do design.',
    },
    {
      type: 'tip',
      title: 'Conselho para Especialistas',
      html: '<p>Costuma ser preferível usar esta calculadora e trabalhar com a tensão natural do seu fio, adaptando o número de pontos em vez de forçar a tensão mudando radicalmente o tamanho das agulhas, já que esta última opção pode alterar o cair e a suavidade do tecido.</p>',
    },
    {
      type: 'title',
      text: 'Vantagens de usar a nossa ferramenta de ajuste',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ajuste automático de pontos e voltas com fator de escala preciso.',
        'Suporte para múltiplos complexos (X + Y) para manter a integridade do motivo.',
        'Estimativa de gramas de lã necessários para o projeto completo.',
        'Visualizador dinâmico da swatch que mostra a densidade do tecido em tempo real.',
      ],
    },
    {
      type: 'card',
      title: 'Gauge / Tensão',
      icon: 'mdi:ruler',
      html: 'Número de pontos e voltas contidos num quadrado de <strong>10x10 cm</strong> ou <strong>4x4 polegadas</strong>. É a referência universal de todos os padrões de tricot.',
    },
    {
      type: 'card',
      title: 'Bloqueio',
      icon: 'mdi:water',
      html: 'Processo de humedecer e dar forma à peça para assentar os pontos. Revela a <strong>tensão real</strong> que a peça terá após o seu primeiro uso e lavagem.',
    },
    {
      type: 'card',
      title: 'Fator de Escala',
      icon: 'mdi:scale',
      html: 'Proporção matemática entre a amostra do padrão e a amostra real de quem tricota. Determina quantos pontos e voltas ajustar para manter as <strong>medidas corretas</strong>.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Tensão Original',
    sectionMyGauge: 'A Sua Amostra Atual',
    sectionProject: 'Estrutura do Projeto',
    labelStitches: 'Pontos',
    labelRows: 'Voltas',
    labelWidth: 'Largura',
    labelLength: 'Comprimento',
    labelUnit: 'Unidade de Medida',
    labelNeedle: 'Agulha',
    labelNeedleMm: 'Agulha (mm)',
    labelWeight: 'Peso (g)',
    labelWeightOptional: 'opcional',
    labelPatternSts: 'Pontos Padrão',
    labelPatternRows: 'Voltas Padrão',
    labelMultiples: 'Múltiplos',
    labelMultiplesExample: 'Ex: 10 + 2',
    labelMultiplesPlaceholder: 'Múltiplo + Borda',
    unitEU: '10 x 10 cm (Padrão EU)',
    unitUS: '4 x 4 polegadas (Padrão US)',
    btnClear: 'Limpar',
    btnShare: 'Partilhar',
    btnCopied: 'Copiado!',
    resSuggestedSts: 'Pontos sugeridos a montar',
    resNewRows: 'Novas Voltas',
    resNewRowsTooltip: 'Número de voltas necessárias para igualar o comprimento do padrão original com a sua tensão atual.',
    resScaleFactor: 'Fator Escala',
    resScaleFactorTooltip: 'Relação de tamanho entre o seu tricot e o padrão. Um valor negativo indica que o seu tricot é mais denso.',
    resSuggestion: 'Sugestão',
    resSuggestionTooltip: 'Recomendação técnica para ajustar a sua tensão sem ter de recalcular cada ponto do padrão.',
    suggestionIdeal: 'Ideal',
    suggestionDown: 'Baixe a Agulha',
    suggestionUp: 'Suba a Agulha',
    suggestionDownDetail: 'Use agulha {n}mm ou tamanho inferior.',
    suggestionUpDetail: 'Use agulha {n}mm ou tamanho superior.',
    multiplesNoteFormat: 'Ajustado de {n} pontos (Múlt. {m})',
    yarnTitle: 'Estimativa de Lã para o Projeto',
    yarnResultFormat: 'Lã estimada: <strong>{g}g</strong>',
    yarnSafetyFormat: '(+{s}g de segurança)',
    alertDanger: 'Diferença extrema (>25%). O cair e a estrutura da peça serão alterados.',
  },
};
