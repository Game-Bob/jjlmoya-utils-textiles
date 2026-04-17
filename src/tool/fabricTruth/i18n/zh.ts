import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'fabric-truthfulness';
const title = '织物真相：纤维质量分析';
const description = '通过分析衣服的成分，探索其真实的品质。是天然棉还是昂贵的塑料？科学进行纤维分析。';

const faqData = [
  {
    question: '时尚界的“洗绿”（Greenwashing）是指什么？',
    answer:
      '这是一种营销手法，品牌在没有真实证据的情况下使用“环保”或“可持续”等词汇。分析纤维的实际成分是验证一件衣服究竟是天然的还是合成的唯一方法。',
  },
  {
    question: '为什么涤纶（聚酯纤维）的品质通常被认为低于棉？',
    answer:
      '涤纶本质上是塑料（PET）。虽然耐穿，但不透气，容易由于细菌滋生而产生异味，且每次洗涤都会产生微塑料。而棉或亚麻等天然纤维具有更好的体温调节功能。',
  },
  {
    question: '我的衣服里含有氨纶（弹性纤维）坏处大吗？',
    answer:
      '少量（1-5%）的氨纶（莱卡）可以提供舒适度和合身感。然而，它使衣物的回收变得极其困难，因为它将塑料与天然纤维混合在一起，这通常是“快时尚”产品的标志。',
  },
  {
    question: '如何通过标签识别高品质衣物？',
    answer:
      '寻找单一材料成分（如 100% 棉、100% 羊毛）。复杂的混纺通常是为了降低生产成本，并在动听的商业名称下隐藏合成纤维。',
  },
];

const howToData = [
  {
    name: '找到内侧洗标',
    text: '寻找衣服内侧边缝或衣领处的白色成分洗标。',
  },
  {
    name: '识别成分名称',
    text: '读取每种纤维的百分比（例如：70% 棉，30% 聚酯纤维）。',
  },
  {
    name: '在分析工具中输入数据',
    text: '将纤维比例输入我们的工具，以获取技术质量评分。',
  },
  {
    name: '解读诊断报告',
    text: '查看生成的报告，了解您的衣服是否透气、耐穿，或者由于含有合成成分是否需要特殊护理。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: '织物真相',
    addFiber: '添加纤维',
    total: '总计',
    composition: '成分分析',
    description: '照实输入您衣服标签上的百分比，揭开其品质的真相。',
    verdict: '诊断结论',
    breathability: '透气性',
    durability: '耐用度',
    warmth: '保暖性',
    careWarning: '特殊护理提示',
    specialCareWarning: '标准洗涤：请始终遵循实物标签上的说明。',
    validationError: '成分总和必须恰好为 100% 才能查看结论',
    actualTotal: '当前比例',
    missingLabel: '尚欠',
    disclaimer: '透气性、耐用度和保暖性数据是基于每种纤维类型的行业平均值的估算。',
    careWarnings: {
      delicate: '非常娇贵：冷水手洗。不可烘干。避免用力拧干。',
      wool: '羊毛 / 高级兽毛：使用专用程序冷水洗涤。平铺晾干以防变形。不可烘干。',
      linen: '亚麻：极易起皱。洗后微湿时熨烫效果最佳。',
      semisynthetic: '半合成纤维：湿润时强力下降。请小心洗涤，不可强力脱水。',
      standard: '标准洗涤：请始终遵循实物标签上的说明。',
    },
    fiberData: {
      cotton: {
        name: '棉',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: '亚麻',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: '羊毛 / 美利奴',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: '真丝',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: '羊绒',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: '马海毛',
        family: 'natural',
        breathability: 8,
        durability: 9,
        warmth: 9,
        isNoble: true,
      },
      angora: {
        name: '安哥拉兔毛',
        family: 'natural',
        breathability: 8,
        durability: 4,
        warmth: 10,
        isNoble: true,
      },
      alpaca: {
        name: '羊驼毛',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: '聚酯纤维 (涤纶)',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: '粘胶纤维 / 人造棉',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: '尼龙 (锦纶)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: '腈纶 (人造羊毛)',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: '昂贵的塑料',
        description: '这件衣服的大部分成分是石油。请做好出汗和快速起球的心理准备。',
      },
      hook: {
        label: '营销噱头',
        description: '那一点点百分比的高级纤维仅仅是为了写在标签上。你几乎感受不到它的任何好处。',
      },
      fragile: {
        label: '柔软但娇弱',
        description: '触感非常舒适，但洗涤时需格外小心：它极易变形和缩水。',
      },
      natural: {
        label: '天然品质',
        description: '透气且耐穿的衣物。非常适合敏感性肌肤及长期穿着。',
      },
      technical: {
        label: '功能性 / 超合成衣物',
        description: '除非是专门的运动服，否则你是在为纯塑料买单。',
      },
      luxury: {
        label: '真材实料',
        description: '这是一项对舒适与耐用的投资。请给予它应有的妥善护理。',
      },
      balanced: {
        label: '平衡混纺',
        description: '一种功能性的组合，通常旨在平衡生产成本与耐穿性。',
      },
    },
  },
  seo: [
    { type: 'title', text: '洗标背后的真相：面料成分大师指南', level: 2 },
    { type: 'paragraph', html: '您是否曾经纳闷，为什么那件名牌 T 恤会让您流这么多汗？或者为什么那件“羊毛”毛衣扎得让人无法忍受？答案不在于设计，而在于其纤维的化学成分。' },
    { type: 'paragraph', html: '在<strong>快时尚</strong>（Fast Fashion）主导的世界里，面料的高品质往往在短暂的美学面前退居其次。然而，了解面料成分是进行智能、耐用且亲肤消费的唯一途径。我们的<strong>织物真相</strong>工具通过分析官方百分比，揭示您面对的是一件高品质衣物，还是一块经过加工的塑料。' },
    { type: 'title', text: '我们的分析方法', level: 2 },
    { type: 'paragraph', html: '我们采用基于欧洲和北美行业标准的加权算法，从三个核心维度进行评估：' },
    { type: 'list', items: ['<strong>透气性：</strong> 纤维允许水蒸气和空气通过的能力。', '<strong>耐用度：</strong> 抗磨损、抗拉伸以及抗<strong>起球</strong>（pilling）的能力。', '<strong>热效率：</strong> 保温或提供机械凉爽感的能力。'] },
    { type: 'tip', title: '重要提示', html: '法律要求在欧盟和美国销售的所有衣物必须按百分比由高到低列出其成分。如果一件衣服没有标签或标签模糊不清，请务必保持警惕：它很可能不符合最低的面料安全标准。' },
    { type: 'title', text: '零售业中的常见“套路”', level: 2 },
    { type: 'paragraph', html: '为了提高平庸衣物的感知价值，存在着非常老练的营销技巧。在这里，我们教您如何识别它们：' },
    { type: 'card', title: '高级纤维诱饵', icon: 'mdi:alert', html: '您会看到大字写着“含羊绒”或“含真丝”的标签。查看成分表时，却发现含有 3% 的真丝和 97% 的聚酯纤维。这 3% 既不提供柔软度，也不提供光泽或保暖性；它唯一的用途就是让品牌能够提价 20%。' },
    { type: 'card', title: '“环保粘胶”的神话', icon: 'mdi:leaf', html: '尽管粘胶纤维来源于纤维素（木材），但其目前的制造过程通常具有高度污染性，最终产出的纤维在变湿后强度会剧烈下降。除非是 <strong>莱赛尔（Lyocell）</strong> 或 <strong>天丝（Tencel）</strong>，否则其耐用性非常有限。' },
    { type: 'title', text: '按分类深度分析', level: 2 },
    { type: 'title', text: '1. 天然纤维（引以为傲的有机物）', level: 3 },
    { type: 'paragraph', html: '这些是行业的金标准。长绒<strong>棉</strong>（如皮马棉或埃及棉）提供恒久的柔软。<strong>亚麻</strong>从科学角度而言是炎热天气的最佳选择，因为其分子结构可以排斥热量并吸收湿气。<strong>羊毛</strong>和<strong>工业大麻</strong>（Hemp）是天然抗菌剂，不容易保留异味，因此不需要频繁洗涤。' },
    { type: 'title', text: '2. 半合成纤维（混合体）', level: 3 },
    { type: 'paragraph', html: '这包括 <strong>粘胶纤维</strong>、<strong>人造丝</strong> 和 <strong>莫代尔</strong>。它们的手感像丝绸，但价格接近棉花。它们非常适合垂坠感强的衣物，但非常“吸水”：吸收大量水分且干燥缓慢，如果不注意护理，可能会滋生霉菌。<strong>莱赛尔（天丝）</strong> 是该组中的高端环保版本，具有闭环生产周期和更高的抗性。' },
    { type: 'title', text: '3. 合成纤维（纺制塑料）', level: 3 },
    { type: 'paragraph', html: '<strong>聚酯纤维</strong>（涤纶）是市场之王。它价格便宜，不皱，而且是永恒的（字面意思，需要 200 年才能分解）。问题在于它不透气。它在面料和您的皮肤之间创造了一个潮湿的微气候，是细菌繁殖的理想温床。<strong>腈纶</strong>是羊毛的廉价仿制品：虽然保暖，但会产生大量静电，且洗两次就会起满球。' },
    { type: 'title', text: '面料持久建议', level: 2 },
    { type: 'paragraph', html: '即使是世界上最好的衣服，也可能在一次不当洗涤中毁掉。以下是通用的黄金法则：' },
    { type: 'tip', title: '冷水是您的好朋友', html: '90% 的衣物不需要超过 30°C 的水温。高温会降解弹性纤维并使天然纤维缩水。' },
    { type: 'tip', title: '少即是多（洗涤剂）', html: '过多的洗涤剂会留下残留物，从而吸附污垢并使衣物变硬。' },
    { type: 'tip', title: '烘干机：微妙的敌人', html: '您在烘干机滤网中看到的毛絮，实际上是由于摩擦和热量从您衣服上脱落下来的纤维碎片。' },
    { type: 'tip', title: '反面洗涤', html: '保护颜色和绣花免受滚筒和其他衣物的磨擦。' },
    { type: 'paragraph', html: '“买得少一点，选得好一点，穿得久一点。” —— 这个分析工具是您迈向理性、高品质衣橱的第一步。' },
  ],
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'FTC - 纺织纤维产品指南',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: '欧盟委员会 - 纺织品法规',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - 纺织品维护标签符号',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
