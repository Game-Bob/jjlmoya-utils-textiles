import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'veracidade-textil-analise-fibras';
const title = 'Veracidade Têxtil: Análise de Qualidade de Fibras';
const description = 'Descubra a qualidade real das suas roupas analisando a sua composição. É algodão real ou plástico caro? Análise científica de fibras.';

const faqData = [
  {
    question: 'O que é o "Greenwashing" na moda?',
    answer: 'É uma técnica de marketing onde as marcas usam termos como "Ecológico" ou "Sustentável" sem provas reais. Analisar a composição real das fibras é a única forma de verificar se uma peça é realmente natural ou sintética.',
  },
  {
    question: 'Porque é que o poliéster costuma ser de menor qualidade do que o algodão?',
    answer: 'O poliéster é um plástico (PET). Embora seja durável, não transpira, favorece o mau odor por bactérias e gera microplásticos em cada lavagem. As fibras naturais como o algodão ou o linho oferecem melhor regulação térmica.',
  },
  {
    question: 'É mau que a minha roupa tenha elastano?',
    answer: 'Em pequenas quantidades (1-5%), o elastano (Lycra) proporciona conforto e ajuste. No entanto, dificulta enormemente a reciclagem da peça ao misturar plástico com fibras naturais, o que costuma indicar uma peça de "fast fashion".',
  },
  {
    question: 'Como detetar uma peça de alta qualidade pela sua etiqueta?',
    answer: 'Procure composições monomateriais (100% Algodão, 100% Lã). As misturas complexas costumam ser usadas para baratear custos de produção e ocultam fibras sintéticas sob nomes comerciais atrativos.',
  },
];

const howToData = [
  {
    name: 'Localizar a etiqueta interna',
    text: 'Procure a etiqueta branca de composição que costuma estar na lateral interior ou na gola da sua peça.',
  },
  {
    name: 'Identificar os componentes',
    text: 'Leia as percentagens de cada fibra (ex. 70% Algodão, 30% Poliéster).',
  },
  {
    name: 'Introduzir os dados no analisador',
    text: 'Escreva as proporções das fibras na nossa ferramenta para obter uma pontuação técnica de qualidade.',
  },
  {
    name: 'Interpretar o diagnóstico',
    text: 'Reveja o relatório gerado para entender se a sua peça é respirável, duradoura ou se requer cuidados especiais pela sua composição sintética.',
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
  description: description,
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
  description: description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Veracidade Têxtil',
    addFiber: 'Adicionar Fibra',
    total: 'Total',
    composition: 'Análise de Composição',
    description: 'Adicione as percentagens tal como aparecem na etiqueta da sua peça para descobrir a verdade sobre a sua qualidade.',
    verdict: 'Veredito',
    breathability: 'Respirabilidade',
    durability: 'Durabilidade',
    warmth: 'Calidez',
    careWarning: 'Aviso de Cuidados Especiais',
    specialCareWarning: 'LAVAGEM PADRÃO: Siga sempre as instruções da etiqueta física.',
    validationError: 'A composição deve somar exatamente 100% para ver o veredito',
    actualTotal: 'Atual',
    missingLabel: 'faltam',
    disclaimer: 'Os dados de respirabilidade, durabilidade e calidez são estimativas baseadas em médias da indústria para cada tipo de fibra.',
    careWarnings: {
      delicate: 'MUITO DELICADO: Lavar à mão em frio. Não usar secadora. Evitar espremer com força.',
      wool: 'LÃS / PELO NOBRE: Lavar em frio com programa especial. Secar em plano para evitar deformações. Não usar secadora.',
      linen: 'LINHO: Tende a amassar muito. Passar a ferro ligeiramente húmido para melhores resultados.',
      semisynthetic: 'SEMISSINTÉTICOS: Enfraquece quando molhado. Tratar com cuidado e não centrifugar forte.',
      standard: 'LAVAGEM PADRÃO: Siga sempre as instruções da etiqueta física.',
    },
    fiberData: {
      cotton: {
        name: 'Algodão',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Linho',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Lã / Merino',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'Seda',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Caxemira',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: 'Mohair',
        family: 'natural',
        breathability: 8,
        durability: 9,
        warmth: 9,
        isNoble: true,
      },
      angora: {
        name: 'Angorá',
        family: 'natural',
        breathability: 8,
        durability: 4,
        warmth: 10,
        isNoble: true,
      },
      alpaca: {
        name: 'Alpaca',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: 'Poliéster',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: 'Viscose / Raion',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'Nylon (Poliamida)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: 'Acrílico',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: 'Plástico Caro',
        description: 'A maioria desta peça é petróleo. Prepare-se para suar e para que apareçam borbotos rápido.',
      },
      hook: {
        label: 'Isco de Marketing',
        description: 'Essa pequena percentagem de fibra nobre está lá apenas para colocar na etiqueta. Não notará os seus benefícios.',
      },
      fragile: {
        label: 'Suave mas Frágil',
        description: 'Muito agradável ao toque, mas cuidado ao lavar: tende a deformar-se e encolher com facilidade.',
      },
      natural: {
        label: 'Qualidade Natural',
        description: 'Peça respirável e duradoura. Ideal para peles sensíveis e uso prolongado.',
      },
      technical: {
        label: 'Peça Técnica / Ultrassintética',
        description: 'A menos que seja roupa de desporto específica, está a pagar por plástico puro.',
      },
      luxury: {
        label: 'Luxo Real',
        description: 'Um investimento em conforto e durabilidade. Trate-a com o respeito que merece.',
      },
      balanced: {
        label: 'Mistura Equilibrada',
        description: 'Uma combinação funcional, provavelmente procura balancear custo e durabilidade.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'A Verdade por Trás da Etiqueta: Guia Mestre de Composição Têxtil', level: 2 },
    { type: 'paragraph', html: 'Já se perguntou por que aquela t-shirt de marca o faz suar tanto, ou por que aquele camisolão "de lã" pica insuportavelmente? A resposta não está no design, mas na química das suas fibras.' },
    { type: 'paragraph', html: 'Num mundo dominado pelo <strong>Fast Fashion</strong>, a qualidade dos tecidos passou para segundo plano face à estética efémera. No entanto, entender a composição têxtil é a única forma de realizar uma compra inteligente, duradoura e respeitadora da sua pele. A nossa ferramenta de <strong>Veracidade Têxtil</strong> analisa as percentagens oficiais para lhe revelar se está perante uma peça de qualidade ou um simples bloco de plástico processado.' },
    { type: 'title', text: 'A Nossa Metodologia', level: 2 },
    { type: 'paragraph', html: 'Utilizamos um algoritmo ponderado baseado em três pilares fundamentais extraídos de padrões industriais europeus e norte-americanos:' },
    { type: 'list', items: ['<strong>Respirabilidade:</strong> Capacidade da fibra para permitir a passagem do vapor de água e ar.', '<strong>Durabilidade:</strong> Resistência à abrasão, tração e formação de <strong>pilling</strong> (borbotos).', '<strong>Eficiência Térmica:</strong> Capacidade de retenção de calor ou frescura mecânica.'] },
    { type: 'tip', title: 'Importante', html: 'A lei exige que todas as peças vendidas na UE e EUA listem os seus componentes por ordem decrescente de percentagem. Se uma peça não tem etiqueta ou esta é ilegível, desconfie: é provável que não cumpra os padrões mínimos de segurança têxtil.' },
    { type: 'title', text: 'Os "Enganos" Comuns no Retalho', level: 2 },
    { type: 'paragraph', html: 'Existem técnicas de marketing muito refinadas desenhadas para elevar o valor percebido de uma peça medíocre. Aqui ensinamos a detetá-las:' },
    { type: 'card', title: 'O Isco da Fibra Nobre', icon: 'mdi:alert', html: 'Verá etiquetas que dizem "COM CAXEMIRA" ou "COM SEDA" em letras grandes. Ao olhar para a composição, descobre 3% de seda e 97% de poliéster. Esse 3% não aporta suavidade, nem brilho, nem calidez; só serve para que a marca possa subir o preço 20%.' },
    { type: 'card', title: 'O Mito da "Viscose Ecológica"', icon: 'mdi:leaf', html: 'Embora a viscose provenha da celulose (madeira), o seu processo de fabrico atual costuma ser altamente poluente e o resultado final é uma fibra que enfraquece drasticamente ao molhar-se. A menos que seja <strong>Lyocell</strong> ou <strong>Tencel</strong>, a sua durabilidade é limitada.' },
    { type: 'title', text: 'Análise Profunda por Categorias', level: 2 },
    { type: 'title', text: '1. Fibras Naturais (Orgulhosamente Orgânicas)', level: 3 },
    { type: 'paragraph', html: 'São o padrão de ouro. O <strong>Algodão</strong> de fibra longa (como o Pima ou Egípcio) oferece uma suavidade eterna. O <strong>Linho</strong> é, cientificamente, a melhor fibra para o calor devido à sua estrutura molecular que repele o calor e absorve a humidade. A <strong>Lã</strong> e o <strong>Cânhamo</strong> (Hemp) são antibacterianos naturais; não precisam de ser lavados com tanta frequência porque não retêm odores.' },
    { type: 'title', text: '2. Fibras Semissintéticas (O Híbrido)', level: 3 },
    { type: 'paragraph', html: 'Aqui encontramos a <strong>Viscose</strong>, o <strong>Raion</strong> e o <strong>Modal</strong>. Sentem-se como seda mas custam como algodão. São excelentes para peças com muito caimento, mas são "sedentas": absorvem muita água e demoram a secar, o que pode favorecer o aparecimento de bolor se não forem cuidadas. O <strong>Lyocell (Tencel)</strong> é a versão premium e sustentável deste grupo, com um ciclo de produção fechado e maior resistência.' },
    { type: 'title', text: '3. Fibras Sintéticas (Plásticos Fiados)', level: 3 },
    { type: 'paragraph', html: 'O <strong>Poliéster</strong> é o rei do mercado. É barato, não amassa e é eterno (literalmente, levará 200 anos a decompor-se). O problema é que não respira. Cria um microclima húmido entre o tecido e a sua pele, o caldo de cultura ideal para bactérias. O <strong>Acrílico</strong> é a imitação barata da lã: aquece, mas gera muita eletricidade estática e enche-se de borbotos em duas lavagens.' },
    { type: 'title', text: 'Conselhos de Sobrevivência Têxtil', level: 2 },
    { type: 'paragraph', html: 'Mesmo a melhor peça do mundo pode arruinar-se numa única lavagem inadequada. Aqui tem as regras de ouro universais:' },
    { type: 'tip', title: 'Água Fria é a sua Amiga', html: '90% das peças não precisam de mais de 30°C. O calor degrada as fibras elásticas e encolhe as naturais.' },
    { type: 'tip', title: 'Menos é Mais (Detergente)', html: 'O excesso de sabão deixa resíduos que atraem sujidade e fazem com que a roupa se sinta rígida.' },
    { type: 'tip', title: 'Secadora: O Inimigo Subtil', html: 'O cotão que vê no filtro da secadora são pedaços da sua roupa que se desprenderam pela fricção e pelo calor.' },
    { type: 'tip', title: 'Lavagem do Avesso', html: 'Protege a cor e os bordados do roce com o tambor e outras peças.' },
    { type: 'paragraph', html: '"Comprar menos, escolher melhor e fazê-lo durar." — Esta calculadora é o seu primeiro passo para um armário consciente e de alta qualidade.' },
  ],
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'FTC - Guia de Etiquetagem Têxtil',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'Comissão Europeia - Regulação Têxtil',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Símbolos de Cuidado Têxtil',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
