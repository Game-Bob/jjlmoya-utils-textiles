import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'preparacao-fibras-tingimento';
const title = 'Preparação de Fibras para Tingimento';
const description =
  'Calculadora de WOF, protocolos de mordentagem e rampas térmicas para preparar lã, seda e algodão antes do tingimento natural.';

const faqData = [
  {
    question: 'O que é o WOF (Weight of Fiber)?',
    answer:
      'O WOF é o sistema padrão para calcular a quantidade necessária de pigmento ou mordente. Baseia-se no peso seco da fibra. Por exemplo, um 100% de WOF em cascas de cebola para 100g de lã significa que precisa de 100g de cascas de cebola.',
  },
  {
    question: 'Por que é necessária a mordentagem?',
    answer:
      'O mordente (como o alúmen) atua como uma ponte química entre a fibra têxtil e o pigmento natural. Sem ele, a maioria dos corantes não se fixaria e desapareceria na primeira lavagem (baixa solidez à luz e à fricção).',
  },
  {
    question: 'Qual é a diferença entre preparar fibras animais e vegetais?',
    answer:
      'As fibras animais (proteicas como a lã) aceitam muito bem o alúmen sozinho. As fibras vegetais (celulósicas como o algodão ou o linho) requerem um passo prévio de taninos para "enganar" a fibra e fazer com que aceite o mordente metálico.',
  },
  {
    question: 'O que é a rampa térmica no tingimento?',
    answer:
      'É o aumento gradual da temperatura (aprox. 1-2°C por minuto) do banho de tingimento. É crucial para evitar o choque térmico, especialmente na lã, que pode feltrear se as mudanças de temperatura forem bruscas.',
  },
];

const howToData = [
  {
    name: 'Limpeza e desgomagem',
    text: 'Lave a fibra com detergente neutro para eliminar óleos, ceras ou gomas industriais que impedem o mordente de penetrar uniformemente.',
  },
  {
    name: 'Pesar a fibra seca',
    text: 'Obtenha o peso exato do material seco. Este valor é a base para todos os cálculos de WOF (Weight of Fiber).',
  },
  {
    name: 'Cálculo e banho de mordente',
    text: 'Dissolva o mordente (ex: alúmen de potássio a 15% WOF) em água quente e mergulhe a fibra, mantendo a temperatura constante de acordo com o protocolo.',
  },
  {
    name: 'Maturação e enxaguamento',
    text: 'Deixe repousar a fibra mordentada (preferivelmente 24h) para que o metal se fixe profundamente antes de passar ao banho de tingimento definitivo.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Artista Têxtil e Tintas Naturais',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'A Ciência por trás da Mordentagem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Preparar uma fibra para o tingimento não é simplesmente lavá-la. É um processo de engenharia química ao nível molecular chamado mordentagem. A palavra provém do latim <i>mordere</i> (morder), e a sua função é atuar como uma ponte química entre a fibra e o pigmento. Sem esta ponte, a maioria das tintas naturais simplesmente sairia no primeiro enxaguamento.',
    },
    {
      type: 'card',
      title: 'Conceito Chave',
      icon: 'mdi:molecule',
      html: 'O mordente tem valências disponíveis que se agarram simultaneamente aos polímeros da fibra e ao corante.',
    },
    {
      type: 'title',
      text: 'Diferenciação de Fibras',
      level: 2,
    },
    {
      type: 'card',
      title: 'Fibras Proteicas: Lã e Seda',
      icon: 'mdi:sheep',
      html: 'Estas fibras são compostas por cadeias de aminoácidos com afinidade natural muito alta pelos metais. O calor abre as escamas permitindo que os sais de alúmen penetrem profundamente. O uso de <strong>Cremor Tártaro</strong> é vital para manter o pH ácido que preserva a sua suavidade.',
    },
    {
      type: 'card',
      title: 'Fibras Celulósicas: Algodão e Linho',
      icon: 'mdi:leaf',
      html: 'A celulose não tem sítios de ligação facilmente disponíveis. Por isso usamos o <strong>protocolo de dois passos</strong>: primeiro taninos que se aderem à celulose, depois o alúmen adere a esses taninos. Sem este pré-tratamento, a cor resultará pálida e pouco resistente.',
    },
    {
      type: 'title',
      text: 'O Controlo do Banho: WOF, Temperatura e pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para obter resultados profissionais e repetíveis, o conceito de <strong>WOF (Weight of Fabric)</strong> é a lei. Tudo se mede como percentagem do peso seco da fibra. Um excesso de mordente pode saturar a fibra e deixá-la áspera ou com depósitos metálicos que alteram a cor final.',
    },
    {
      type: 'tip',
      title: 'A Rampa Térmica',
      html: 'O calor atua como catalisador, acelerando a reação química. No entanto, uma mudança brusca de temperatura na lã pode causar que as escamas se enganchem entre si permanentemente, resultando num tecido feltreado e encolhido.',
    },
    {
      type: 'tip',
      title: 'O Fator pH',
      html: 'Muitas tintas naturais são indicadores de pH vivos. O pH influencia a solubilidade dos sais e a conservação da fibra. A seda pode perder o seu brilho se o banho for demasiado alcalino. Ajustar o pH com ácido cítrico ou carbonato de cálcio é fundamental.',
    },
    {
      type: 'title',
      text: 'Substâncias e Segurança',
      level: 2,
    },
    {
      type: 'card',
      title: 'Alúmen de Potássio',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Mordente universal, incolor e altamente eficaz. A referência para fibras proteicas.',
    },
    {
      type: 'card',
      title: 'Cremor Tártaro',
      icon: 'mdi:spoon-sugar',
      html: 'Assistente que melhora a fixação e suavidade em fibras animais. Mantém o pH ácido.',
    },
    {
      type: 'tip',
      title: 'Protocolo de Segurança',
      html: 'Use panelas exclusivamente para tingimento, nunca para alimentos.<br>Utilize luvas e máscara ao manipular mordentes em pó.<br>Assegure ventilação constante para evitar a acumulação de vapores.',
    },
  ],
  ui: {
    profileTitle: 'Seleção de Perfil',
    profileDesc: 'O protocolo químico divide-se segundo a origem molecular da fibra',
    proteinTitle: 'Fibras Proteicas',
    proteinOrigin: 'Origem Animal',
    proteinDesc: 'Lã, seda, alpaca, mohair ou caxemira. Requerem temperaturas controladas e pH ácido.',
    cellulosicTitle: 'Fibras Celulósicas',
    cellulosicOrigin: 'Origem Vegetal',
    cellulosicDesc: 'Algodão, linho, cânhamo ou juta. Requerem pré-mordentagem com taninos para fixar o pigmento.',
    wofTitle: 'Calculadora WOF',
    weightLabel: 'Peso da Peça Seca (g)',
    weightUnit: 'gr',
    wofEmptyMsg: 'Selecione um perfil para habilitar cálculos',
    alumLabel: 'Alúmen',
    cremLabel: 'Cremor Tártaro',
    ironLabel: 'Ferro (Cuidado)',
    rampTitle: 'Rampa Térmica',
    rampEmptyTitle: 'Aguardando Seleção',
    rampEmptyDesc: 'Escolha uma fibra para ver o ciclo térmico',
    phTitle: 'Estabilizador de pH',
    phDesc: 'Fator crítico para a saturação da cor',
    phVolumeLabel: 'Volume do Banho (L)',
    phSliderLabel: 'pH Atual',
    phAcidLabel: 'Ácido (1)',
    phAlkalineLabel: 'Alcalino (14)',
    phEmptyMsg: 'Selecione um perfil para habilitar estabilizador',
    phStrings: {
      optimal: 'pH ótimo',
      raisePrefix: 'Adicionar Carbonato de Cálcio ou Soda Ash. Aprox.',
      raiseSuffix: 'g para subir para',
      lowerPrefix: 'Adicionar Ácido Cítrico ou Vinagre. Aprox.',
      lowerSuffix: 'ml para baixar para',
    },
    proteinFibers: [
      { id: 'wool', name: 'Lã / Merino', icon: 'mdi:sheep' },
      { id: 'silk', name: 'Seda', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Caxemira', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Mohair', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaca', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Algodão', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Linho', icon: 'mdi:leaf' },
    ],
  },
};
