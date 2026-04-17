import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'protocolo-quimico-manchas-texteis';
const title = 'Protocolo Químico de Manchas Têxteis';
const description =
  'Protocolos científicos para eliminar manchas segundo o tipo de fibra e a natureza química da mancha. Percarbonato, enzimas, solventes: o método correto para cada caso.';

const faqData = [
  {
    question: 'Posso usar lixívia em vez de percarbonato?',
    answer:
      'A lixívia (hipoclorito de sódio) é altamente corrosiva. Degrada as fibras tornando-as amareladas e quebradiças. O percarbonato branqueia por oxigénio activo, respeitando a estrutura molecular natural.',
  },
  {
    question: 'Porque é que o vinagre ajuda com os cheiros?',
    answer:
      'Os odores corporais costumam ser alcalinos. O ácido acético do vinagre neutraliza-os, transformando-os em sais inodoros que são eliminados completamente no enxaguamento.',
  },
  {
    question: 'Devo usar sempre água fria para o sangue?',
    answer:
      'Sim. O calor coagula as proteínas do sangue, fixando-o à fibra de forma permanente. A água fria mantém a mancha em estado solúvel e permite que os agentes enzimáticos actuem eficazmente.',
  },
  {
    question: 'O que acontece se eu aplicar acetona numa peça de acetato?',
    answer:
      'A acetona dissolve o triacetato e o acetato. As fibras de acetato são celulose esterificada com ácido acético e são completamente solúveis em acetona. O resultado seria a destruição irreversível do tecido.',
  },
];

const howToData = [
  {
    name: 'Identificar o tipo de fibra',
    text: 'Consulte a etiqueta interior da peça para saber se é fibra natural, sintética ou nobre (lã, seda, cashmere).',
  },
  {
    name: 'Seleccionar a fibra na ferramenta',
    text: 'Escolha o material correspondente no primeiro selector.',
  },
  {
    name: 'Seleccionar o tipo de mancha',
    text: 'Indique se a mancha é orgânica (vinho, fruta), proteica (sangue), gordura ou sintética (tinta).',
  },
  {
    name: 'Aplicar o protocolo indicado',
    text: 'Siga as instruções de agente, temperatura e método. Preste especial atenção às advertências de precaução crítica.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Protocolo Químico de Manchas',
    fiberLabel: '1. Fibra',
    selectFiberPlaceholder: 'Seleccione o tecido...',
    stainLabel: '2. Mancha',
    selectStainPlaceholder: 'O que aconteceu?',
    molecularDiagnosis: 'Diagnóstico Molecular',
    requiredAgent: 'Agente Requerido',
    thermalCondition: 'Condição Térmica',
    temperature: 'Temperatura',
    cleaningInstructions: 'Instruções de Limpeza',
    criticalWarning: 'Precaução Crítica',
    criticalWarningLabel: 'PRECAUÇÃO',
    technicalNote: 'Nota técnica',
    technicalNoteText:
      'Valide sempre a solidez do tingimento numa zona não visível antes de proceder com o tratamento químico completo.',
    systemDiagnosis: 'Sistema de Diagnóstico',
    systemDiagnosisDesc:
      'Configure os parâmetros têxteis para obter o guia de limpeza',
    delicatePercarbonateWarning:
      'RISCO DE DEGRADAÇÃO MOLECULAR. Fibras animais altamente sensíveis ao percarbonato. Realizar teste em zona não visível.',
    fiberData: {
      cotton: { name: 'Algodão', family: 'natural', isNoble: false },
      linen: { name: 'Linho', family: 'natural', isNoble: true },
      wool: { name: 'Lã / Merino', family: 'natural', isNoble: true },
      silk: { name: 'Seda', family: 'natural', isNoble: true },
      cashmere: { name: 'Cashmere', family: 'natural', isNoble: true },
      mohair: { name: 'Mohair', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpaca', family: 'natural', isNoble: true },
      polyester: { name: 'Poliéster', family: 'synthetic', isNoble: false },
      viscose: { name: 'Viscose / Rayon', family: 'artificial', isNoble: false },
      nylon: { name: 'Nailon (Poliamida)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Acrílico', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Percarbonato de Sódio',
        description: 'Branqueador oxigenado biodegradável. Liberta oxigénio activo ao dissolver-se.',
        warning: 'Evitar em fibras de proteína (seda, lã) em concentrações elevadas.',
      },
      isopropyl: {
        name: 'Álcool Isopropílico',
        description: 'Solvente eficaz para pigmentos e gorduras ligeiras.',
        warning: 'Pode danificar o brilho em sedas e dissolver alguns acrílicos se não for diluído.',
      },
      acetone: {
        name: 'Acetona',
        description: 'Solvente potente para lacas e colas.',
        warning: 'PROIBIDO em acetatos e triacetatos (dissolve a fibra).',
      },
      enzyme: {
        name: 'Detergente Enzimático',
        description: 'Contém proteases que rompem manchas biológicas.',
        warning: 'Uso com precaução em lã e seda (são proteínas).',
      },
      vinegar: {
        name: 'Vinagre Branco',
        description: 'Ácido acético suave para neutralizar odores e fixar cores.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Vinho Tinto / Fruta',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Demolha prolongada' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Pasta directa' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Fria',
            method: 'Enxaguamento com água com gás e vinagre',
            notes: 'Não esfregar',
          },
        },
      },
      {
        id: 'blood',
        name: 'Sangue',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Fria',
            method: 'Demolha em água salgada e depois enzima',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Fria', method: 'Aplicação directa' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Fria',
            method: 'Enxaguamento imediato, evitar calor',
          },
        },
      },
      {
        id: 'grease',
        name: 'Gordura / Óleo',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Dissolver com álcool e depois lavar',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Colocar papel absorvente por baixo',
          },
          delicate: { agentId: 'isopropyl', temperature: 'Fria', method: 'Diluir álcool a 50%' },
        },
      },
      {
        id: 'ink',
        name: 'Tinta / Marcador',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Ambiente',
            method: 'Esponjar de fora para dentro',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Ambiente',
            method: 'Precaução com a dispersão',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Fria',
            method: 'Diluir e testar em zona oculta',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'A Química por Trás da Limpeza Têxtil',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nem todas as manchas são iguais, e nem todas as fibras reagem da mesma forma aos mesmos agentes químicos. A diferença entre salvar uma peça e destruí-la está em entender a natureza molecular da mancha e a estrutura da fibra.',
    },
    {
      type: 'card',
      title: '01 — Oxidação Controlada',
      icon: 'mdi:atom',
      html: 'O <strong>percarbonato de sódio</strong> liberta oxigénio activo que quebra as duplas ligações dos cromóforos (as moléculas responsáveis pela cor da mancha), tornando-as incolores e solúveis em água. É o método mais eficaz para manchas orgânicas.',
    },
    {
      type: 'card',
      title: '02 — Solubilização por Solventes',
      icon: 'mdi:flask-outline',
      html: 'Manchas como o óleo ou a tinta não são solúveis em água. Solventes como o <strong>álcool isopropílico</strong> ou a <strong>acetona</strong> reduzem a tensão superficial e atraem as moléculas não polares da mancha, permitindo que se transfiram para um meio de suporte.',
    },
    {
      type: 'title',
      text: 'Soberania sobre as Fibras: Porque é que o tipo importa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nem todas as fibras "comem" da mesma forma. A <strong>seda e a lã</strong> são proteínas (fibroína e queratina). Se aplicar um detergente enzimático desenhado para "comer proteínas" (manchas de sangue ou ovo) sem controlo, o detergente começará a degradar a própria fibra, destruindo o brilho e a estrutura do tecido.',
    },
    {
      type: 'title',
      text: 'O Perigo do Calor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um dos erros mais comuns é usar água quente para "amolecer" uma mancha de sangue. Quimicamente, o calor produz a <strong>coagulação das proteínas</strong> da mancha, fixando-as permanentemente à estrutura porosa da fibra. As manchas de proteínas devem tratar-se sempre com água fria.',
    },
    {
      type: 'tip',
      title: 'Protocolo de Emergência: Vinho Tinto',
      html: '<strong>A. Absorção passiva:</strong> Tocar com papel absorvente, nunca esfregar para evitar a expansão mecânica.<br><strong>B. Neutralização osmótica:</strong> Cobrir com sal fino para atrair o líquido para o exterior do núcleo da fibra.<br><strong>C. Acção química:</strong> Aplicar uma pasta de percarbonato e água a 40°C se a fibra for resistente ao calor.',
    },
    {
      type: 'title',
      text: 'Solventes Específicos e Precauções',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>acetona</strong> é um solvente excepcional para vernizes de unhas ou colas, mas é destrutiva para o <strong>acetato</strong>. Ao serem fibras derivadas da celulose mas tratadas quimicamente, a acetona literalmente dissolve o tecido.',
    },
    {
      type: 'paragraph',
      html: 'O <strong>álcool isopropílico</strong> é mais estável, mas em sintéticos tingidos pode arrastar o próprio pigmento. Recomendamos sempre o "teste da bainha" numa zona não visível antes do tratamento principal.',
    },
  ],
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'AATCC - Association for Advancing Color Technology and Chemistry',
      url: 'https://www.aatcc.org',
    },
    {
      name: 'Kissa, E. — Textile Auxiliaries',
      url: 'https://www.springer.com/gp/book/9783642057328',
    },
    {
      name: 'ISO 105 — Textiles: Tests for Colour Fastness',
      url: 'https://www.iso.org/standard/72682.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
