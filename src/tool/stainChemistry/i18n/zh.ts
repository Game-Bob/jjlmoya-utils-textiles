import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'stain-chemical-protocol';
const title = '纺织品除渍化学方案';
const description = '根据纤维类型和污渍的化学性质，提供科学的去污方案。过碳酸盐、酶、溶剂：为每种情况提供正确的方法。';

const faqData = [
  {
    question: '我可以用漂白水代替过碳酸钠吗？',
    answer:
      '漂白水（次氯酸钠）具有高度腐蚀性。它会降解纤维，使衣物变黄变脆。过碳酸盐通过活性氧进行漂白，能在保护纤维自然分子结构的同时达到去污效果。',
  },
  {
    question: '为什么醋有助于除味？',
    answer: '由于人体的异味通常呈碱性，醋中的乙酸能中和这些异味，将其转化为无味的盐类，从而在漂洗过程中彻底清除。',
  },
  {
    question: '处理血渍一定要用冷水吗？',
    answer:
      '是的。热量会使血红蛋白凝固，从而使其永久固定在纤维上。冷水能保持污渍处于可溶状态，有利于酶制剂发挥作用。',
  },
  {
    question: '如果我把丙酮用在醋酯纤维（acetate）衣物上会怎样？',
    answer:
      '丙酮会溶解三醋酯纤维和醋酯纤维。醋酯纤维是纤维素与乙酸酯化而成的，完全溶于丙酮。使用丙酮会导致织物发生不可逆的损毁。',
  },
];

const howToData = [
  {
    name: '确认纤维类型',
    text: '查看衣物洗涤标签，确认是天然纤维、合成纤维还是高档动物纤维（羊毛、真丝、羊绒）。',
  },
  {
    name: '在工具中选择纤维',
    text: '在第一个选项中选择对应的材质。',
  },
  {
    name: '选择污渍类型',
    text: '指明污渍是属于有机物（红酒、水果）、蛋白质（血液）、油脂还是合成物（墨水）。',
  },
  {
    name: '执行指定方案',
    text: '按照提供的溶剂类型、温度和方法说明进行操作。请特别留意“关键警示”部分。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: '除渍化学方案',
    fiberLabel: '1. 纤维',
    selectFiberPlaceholder: '选择织物材质...',
    stainLabel: '2. 污渍',
    selectStainPlaceholder: '发生了什么？',
    molecularDiagnosis: '分子诊断',
    requiredAgent: '所需药剂',
    thermalCondition: '温度条件',
    temperature: '温度',
    cleaningInstructions: '清洗说明',
    criticalWarning: '关键警示',
    criticalWarningLabel: '警告',
    technicalNote: '技术注释',
    technicalNoteText: '在进行完整化学预处理前，请务必在衣物隐蔽处进行色牢度测试。',
    systemDiagnosis: '诊断系统',
    systemDiagnosisDesc: '配置纺织品参数以获取清洗路线图',
    delicatePercarbonateWarning: '存在分子降解风险。动物纤维对过碳酸盐高度敏感。请在不显眼处进行测试。',
    fiberData: {
      cotton: { name: '棉', family: 'natural', isNoble: false },
      linen: { name: '亚麻', family: 'natural', isNoble: true },
      wool: { name: '羊毛 / 美利奴', family: 'natural', isNoble: true },
      silk: { name: '真丝', family: 'natural', isNoble: true },
      cashmere: { name: '羊绒', family: 'natural', isNoble: true },
      mohair: { name: '马海毛', family: 'natural', isNoble: true },
      angora: { name: '安哥拉兔毛', family: 'natural', isNoble: true },
      alpaca: { name: '羊驼毛', family: 'natural', isNoble: true },
      polyester: { name: '聚酯纤维（涤纶）', family: 'synthetic', isNoble: false },
      viscose: { name: '粘胶纤维 / 人造丝', family: 'artificial', isNoble: false },
      nylon: { name: '尼龙（聚酰胺纤维）', family: 'synthetic', isNoble: false },
      acrylic: { name: '腈纶', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonte: {
        name: '过碳酸钠',
        description: '可生物降解的氧系漂白剂。溶解时释放活性氧。',
        warning: '避免在高浓度下用于蛋白质纤维（真丝、羊毛）。',
      },
      isopropyl: {
        name: '异丙基酒精',
        description: '针对色素和轻度油脂的有效溶剂。',
        warning: '如果不稀释，可能会损伤真丝光泽或溶解某些腈纶织物。',
      },
      acetone: {
        name: '丙酮',
        description: '针对漆类和胶水的强力溶剂。',
        warning: '严禁用于醋酯纤维和三醋酯纤维（会溶解纤维）。',
      },
      enzyme: {
        name: '酶促洗涤剂',
        description: '含有能够分解生物污渍的蛋白酶。',
        warning: '在羊毛和真丝（本身也是蛋白质）上使用时需谨慎。',
      },
      vinegar: {
        name: '白醋',
        description: '用于中和异味和固色的温和乙酸。',
      },
    },
    stains: [
      {
        id: 'wine',
        name: '红酒 / 水果',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: '长时间浸泡' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: '直接涂抹糊状物' },
          delicate: {
            agentId: 'vinegar',
            temperature: '冷水性能',
            method: '用苏打水和醋冲洗',
            notes: '请勿搓揉',
          },
        },
      },
      {
        id: 'blood',
        name: '血液',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: '冷水性能',
            method: '先用盐水浸泡，再使用酶制剂',
          },
          synthetic: { agentId: 'enzyme', temperature: '冷水性能', method: '直接涂抹' },
          delicate: {
            agentId: 'vinegar',
            temperature: '冷水性能',
            method: '立即冲洗，避免受热',
          },
        },
      },
      {
        id: 'grease',
        name: '油脂 / 机油',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: '先用酒精溶解，再进行洗涤',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: '污渍下方垫吸水纸',
          },
          delicate: { agentId: 'isopropyl', temperature: '冷水性能', method: '将酒精稀释至 50%' },
        },
      },
      {
        id: 'ink',
        name: '墨水 / 马克笔',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '室温',
            method: '由外向内点蘸吸附',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '室温',
            method: '需特别小心污渍扩散',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: '冷水性能',
            method: '稀释并先在隐蔽处测试',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: '纺织品清洁背后的化学原理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '并非所有污渍都是一样的，不同纤维对同一化学药剂的反应也不尽相同。拯救一件衣物还是彻底毁掉它，关键在于理解污渍的分子本质和纤维结构。',
    },
    {
      type: 'card',
      title: '01 —— 受控氧化',
      icon: 'mdi:atom',
      html: '<strong>过碳酸钠</strong>释放出的活性氧能断裂发色团（污渍颜色的来源分子）的双键，使其变得无色并可溶于水。这是处理有机污渍最有效的方法。',
    },
    {
      type: 'card',
      title: '02 —— 溶剂增溶',
      icon: 'mdi:flask-outline',
      html: '油渍或墨水等污渍不溶于水。<strong>异丙基酒精</strong>或<strong>丙酮</strong>等溶剂能降低表面张力并吸引污渍中的非极性分子，使它们能够转移至承载媒介上。',
    },
    {
      type: 'title',
      text: '纤维的主宰：为什么材质很重要',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '并非所有纤维都能经受同样的“侵蚀”。<strong>真丝和羊毛</strong>属于蛋白质（丝蛋白和角蛋白）。如果你盲目使用专为“吞噬蛋白质”（用于处理血渍或蛋渍）设计的酶促洗涤剂，它会开始降解纤维本身，从而破坏织物的光泽和结构。',
    },
    {
      type: 'title',
      text: '热量的危险性',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '最常见的错误之一是使用热水来“软化”血渍。从化学角度看，热量会导致污渍中的<strong>蛋白质凝固</strong>，从而使其永久固定在纤维的多孔结构中。蛋白质类污渍必须始终使用冷水处理。',
    },
    {
      type: 'tip',
      title: '紧急处理方案：红酒渍',
      html: '<strong>A. 被动吸附：</strong>用吸水纸点蘸，严禁搓揉以防污渍发生机械性扩散。<br><strong>B. 渗透中和：</strong>覆盖细盐以将液体从纤维核心引出。<br><strong>C. 化学作用：</strong>如果纤维耐热，可使用 40°C 的过碳酸盐水糊。',
    },
    {
      type: 'title',
      text: '专用溶剂与预防措施',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>丙酮</strong>是处理指甲油或胶水的绝佳溶剂，但会对<strong>醋酯纤维</strong>产生毁灭性打击。由于此类纤维源自纤维素但经过了化学处理，丙酮会直接溶解织物。',
    },
    {
      type: 'paragraph',
      html: '<strong>异丙基酒精</strong>相对更稳定，但在染色的合成纤维上可能会带走色素本身。我们建议在正式处理前，始终先在“内锁边”等隐蔽区域进行测试。',
    },
  ],
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'AATCC - 美国纺织化学家与染色家协会',
      url: 'https://www.aatcc.org',
    },
    {
      name: 'Kissa, E. — 纺织助剂',
      url: 'https://www.springer.com/gp/book/9783642057328',
    },
    {
      name: 'ISO 105 — 纺织品：色牢度试验',
      url: 'https://www.iso.org/standard/72682.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
