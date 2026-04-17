import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'yarn-calculator';
const title = '毛线计算器：我需要准备多少米、多少团线？';
const description = '根据织物图解和尺寸，精确计算编织（棒针或钩针）项目所需的羊毛或毛线总量（米/团）。';

const faqData = [
  {
    question: '为什么钩针（crochet）比棒针（knit）更费线？',
    answer:
      '钩针编织依靠创建层叠的结和环，这使得每平方厘米的织物更加紧密且厚实。平均而言，钩针项目比使用双针（平针织法）编织的相同项目多消耗 25% 到 35% 的毛线。',
  },
  {
    question: '如果我购买不同缸号（Dye Lot）的线会怎样？',
    answer:
      '即使在商店里看起来颜色完全一致，染色过程中极细微的化学差异也可能导致成品编织在一起时出现可见的“色差带”。强烈建议务必一次性买齐所需毛线，并确保批次代码（缸号）完全相同。',
  },
  {
    question: '织片密度（gauge）如何影响最终耗线量？',
    answer:
      '如果织得较松，每一针消耗的线长度（米）就会增加。如果你的试样密度比图解要求的大（例如标准是 15 针，你由于织得松变成了 13 针），你的毛线消耗量将大幅增加。提前编织密度试样至关重要。',
  },
  {
    question: '如果我只有毛线团重量，该如何计算米数？',
    answer:
      '缺少长度数据很难准确计算。大多数线团都会在标签上标注长度。如果没有标注，可以在 Ravelry 等数据库中根据线材名称搜索，查找每 50 克或 100 克的准确长度。',
  },
];

const howToData = [
  {
    name: '选择项目类型',
    text: '从毛衣、围巾、帽子、袜子或毯子中选择，以加载特定的耗线基础数据。',
  },
  {
    name: '定义尺寸与粗细',
    text: '指明成品尺寸（S, M, L, XL）以及你要使用的毛线粗细（蕾丝线、中细线、合股线、粗线等）。',
  },
  {
    name: '启用修正系数',
    text: '如果你的图解中有麻花、辫子或复杂的纹理，请开启纹理开关以增加必要的预留量。',
  },
  {
    name: '获取购买清单',
    text: '输入你所选毛线每团的米数，即可看到确切需要放入购物车的数量。',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献',
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
      text: '毛线耗量指南：如何为你的项目计算米数和线团数',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '掌握编织物流管理，使用我们的棒针与钩针高精度技术计算器，避免“断线”尴尬。每一位编织者最大的恐惧莫过于 <strong>“绝望的最后几米（Yarn Chicken）”</strong>：在项目的末尾，似乎线就要在收掉最后几针前用完了。本计算器旨在基于工业标准的长度和克重数据为你提供准确的预估。',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: '备用系数', icon: 'mdi:security' },
        { value: '公制', label: '计算单位（米）', icon: 'mdi:ruler' },
        { value: '离线', label: '本地数据库', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '为什么线团的“重量”具有欺骗性？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '许多初学者在购买毛线时会犯专注于重量（例如“买 6 团 100 克的线”）的错误。然而，重量是质量单位，而非长度单位。两款同样重 100 克的线，其长度可能截然不同：一款 <strong>Bulky（粗线）</strong> 类型可能只有 80 米，而同样重量的一款 <strong>Fingering / Lace（蕾丝线）</strong> 长度可能超过 450 米。',
    },
    {
      type: 'paragraph',
      html: '因此，我们的计算器始终优先考虑 <strong>总米数</strong>。一旦你知道了自己的尺寸和项目所需的总长度，只需将其除以特定线团标签上标注的长度，即可得到应购买的确切团数。',
    },
    {
      type: 'title',
      text: '按粗细分类的标准米数参考表',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果你手边没有线材标签，可以参考以下数值（按每 100 克纤维计）进行估算：',
    },
    {
      type: 'table',
      headers: ['粗细 (Weight)', '约计米数 / 100g', '推荐用途', '推荐针号'],
      rows: [
        ['<strong>Lace / 0 (蕾丝)</strong>', '600 - 900m', '蕾丝披肩，镂空花样', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1 (超细)</strong>', '360 - 450m', '袜子，婴儿服饰', '2.25 - 3.25mm'],
        ['<strong>Sport / 2 (细)</strong>', '270 - 320m', '轻便外套', '3.25 - 3.75mm'],
        ['<strong>DK / 3 (中细)</strong>', '200 - 250m', '毛衣，帽子', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4 (中粗)</strong>', '180 - 220m', '毯子，大衣', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5 (粗)</strong>', '100 - 140m', 'XXL 围巾，厚毯子', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: '密度系数（Gauge）',
      html: '<p>请记住，如果你织得非常松，你的针脚会更大，消耗的线量会比织得紧时更多。我们的计算器应用了一个安全裕度，但如果你知道自己的织法极其松散，请考虑在结果的基础上额外增加 5-10% 的线量以防万一。</p>',
    },
    {
      type: 'title',
      text: '增加耗线量的变量',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '并非所有针法消耗的纤维量都相同。在选择设计时，请考虑以下倍数因素：',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '下针 / 平针',
          description: '代表任何服装的基础消耗量和最大用线效率。',
          icon: 'mdi:minus-circle-outline',
          points: ['初学者的理想选择', '织物自然垂坠'],
        },
        {
          title: '麻花 / 纹理',
          description: '纤维的交叉会使织片“缩短”，使消耗量增加约 25%。',
          icon: 'mdi:texture-box',
          points: ['需要更多米数', '织物更紧密、更沉重'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: '钩针 (Crochet)',
          description: '钩针编织的结节比棒针编织多消耗约 30% 的线量。',
          icon: 'mdi:hook',
          points: ['线团消耗极快', '三维立体质感'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: '罗纹针',
          description: '正反针的结构使每平方厘米积聚了更多羊毛。',
          icon: 'mdi:unfold-more-horizontal',
          points: ['中等消耗 (+15%)', '高弹性恢复能力'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '精明编织者名词解释',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (缸号)',
          definition:
            '标识染色锅次的编号。不同缸号的线在团装状态下可能看不出差别，但在成品中色差会非常明显。',
        },
        {
          term: 'Stash (囤线)',
          definition:
            '编织者个人的线材收藏。了解没有标签的余线克重对于计算小型项目至关重要。',
        },
        {
          term: 'Put-up',
          definition:
            '线材的呈现形式（绞、团或锥），这决定了使用前是否需要重新绕团。',
        },
        {
          term: 'Yarn Chicken (最后几米挑战)',
          definition:
            '挑战在似乎不足的线量下完成一段工艺。',
        },
      ],
    },
    {
      type: 'title',
      text: '如何使用此计算器的结果',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '一旦工具返回了所需的米数和团数，我们建议执行以下手动核对步骤：',
    },
    {
      type: 'list',
      items: [
        '<strong>核对实际线团长度：</strong> 并非所有 100 克的线团都是 200 米。请根据包装标签上的实际数据调整最终计算。',
        '<strong>累加细节用线量：</strong> 如果你要为围巾添加流苏或为帽子添加绒球，请在总量上额外增加 50-80 米。',
        '<strong>密度试样：</strong> 编织一个 10x10 厘米的正方形。使用精密电子秤称重。如果重 20 克，你的毯子是 100x100（即 100 个正方形），那么你一共需要 2 公斤线。',
        '<strong>务必购买同批次缸号：</strong> 如果计算结果是 7 团，如果批次不同，请购买 8 团以留出余地或用于接缝等隐蔽部位。',
      ],
    },
    {
      type: 'summary',
      title: '购线策略建议',
      items: [
        '优先考虑米数而非克重，以确保长度充足。',
        '钩针消耗的线量远高于棒针；请准确调整类型选择。',
        '紧密纹理（麻花等）需要在线材预算上增加 25%。',
        '务必保留每缸毛线的一张标签，以备需要补色或查号时使用。',
        '预留 10% 的安全边际用于编织强制要求的密度试样。',
      ],
    },
  ],
  ui: {
    sectionProject: '1. 项目类型',
    sectionSize: '2. 尺寸 / 尺码',
    sectionWeight: '3. 线材粗细',
    sectionPattern: '4. 图解特征',
    sectionBall: '5. 线团数据',
    labelCables: '是否有麻花或紧密纹理？',
    labelGrams: '克 / 团',
    labelMeters: '米 / 团',
    weightFine: '细线',
    weightMedium: '中量',
    weightThick: '粗线',
    weightXXL: '超粗',
    projectSweater: '毛衣',
    projectScarf: '围巾',
    projectHat: '帽子',
    projectSocks: '袜子',
    projectBlanket: '毯子',
    projectCardigan: '开衫',
    statPrefix: '预计总耗线量',
    statSuffix: 'M',
    statNote: '包含 10% 保守预留量的最终计算长度。',
    ballsFormatSingular: '购买 {n} 团',
    ballsFormatPlural: '购买 {n} 团',
    ballsDetailFormat: '每团 {w}g / {m}m',
    alertTitle: '战略安全提示：',
    alertText:
      '此计算已确保你不会断线。购买线团时，请务必核对缸号（dye lot）是否一致，以避免织物出现色偏。',
    schemeSleeveLabel: '袖子',
    schemeSleeveEach: '每只',
    schemeBodyLabel: '正身',
    schemeTotalHat: '帽子合计',
    schemeTotalFlat: '部位合计',
    schemeTotalSocks: '每双合计',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['童款', 'S', 'M', 'L'],
      scarf: ['迷你', '中等', '大款', '加大'],
      socks: ['童款', '成人 S', '成人 M', '成人 L'],
      blanket: ['婴儿', '沙发', '单人床', '双人床'],
    },
  },
};
