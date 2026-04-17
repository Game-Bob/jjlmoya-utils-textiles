import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'knitting-needle-converter';
const title = '棒针与钩针尺寸转换器';
const description = '在公制 (mm)、美标 (US) 和英标 (UK) 系统之间转换针号尺寸，并提供建议的线材和 WPI 建议。';

const faqData = [
  {
    question: '为什么会有不同的针号尺寸系统？',
    answer: '由于历史上每个国家都开发了自己的系统。公制系统 (mm) 是最精确的国际标准。美标系统使用递增编号 (0-50)，而英标系统使用反向编号：数字越大，针就越细。',
  },
  {
    question: '在美标系统中，钩针和棒针的尺寸是一样的吗？',
    answer: '不完全一样。美标钩针通常带有一个关联的字母（例如 H-8），而且在较细的规格中存在特定的变体。此外，用于细线的蕾丝钢钩针使用完全不同的编号系统。',
  },
  {
    question: '如果图案要求的尺寸没有完全对应的针号，我该如何选择？',
    answer: '如果图案要求例如 7.0mm，而您的系统中只有 6.5mm 或 8.0mm，建议务必制作织片（Gauge Swatch）。0.5mm 的差异可能会显著改变服装的最终尺寸。',
  },
  {
    question: '什么是 WPI (Wraps Per Inch)？',
    answer: '它是指一英寸（2.54 厘米）内可以缠绕的线圈数。这是识别没有标签的毛线粗细，并确定最适合编织该毛线的针号的最可靠方法。',
  },
];

const howToData = [
  {
    name: '选择编织类型',
    text: '在棒针 (knitting) 或钩针 (crochet) 之间选择，以查看美标系统中的正确对应关系。',
  },
  {
    name: '在视觉选择器中选择规格',
    text: '点击对应于您针号尺寸的圆圈。这些孔洞与毫米读数保持了真实的数学比例。',
  },
  {
    name: '读取对应关系',
    text: '实时查看结果：毫米、美标尺寸和英标尺寸，以及推荐的线材类别及其 WPI。',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '棒针与钩针技术指南：系统、规格与对应表',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '随着数字图案的全球化，理解<strong>公制十进制系统</strong>、<strong>美国标准 (US)</strong> 和<strong>英国英制系统 (UK)</strong> 之间的差异已变得至关重要。本工具可在三个系统之间进行转换，并通过 WPI 方法提供线材建议。',
    },
    {
      type: 'stats',
      items: [
        { value: '离线', label: '无需网络即可使用', icon: 'mdi:wifi-off' },
        { value: '三重', label: '全系统同步', icon: 'mdi:sync' },
        { value: 'WPI', label: '线材粗细分析', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '国际系统的复杂性',
      level: 3,
    },
    {
      type: 'table',
      headers: ['系统', '计算基准', '主要流行区域', '技术特点'],
      rows: [
        ['<strong>公制 (mm)</strong>', '准确的毫米直径', '欧洲 / 国际', '最可靠的 ISO 标准。以 0.25mm 或 0.50mm 的恒定步长增加。'],
        ['<strong>US (美国)</strong>', '递增编号', '北美', '使用 0 到 50 的数字。在钩针中，数字与字母相关联（B-1, G-6）。'],
        ['<strong>UK (英制)</strong>', '反向编号', '英国 / 澳大利亚', '基于拉丝规格。数字越大，针号越细（14 是细，0 是粗）。'],
      ],
    },
    {
      type: 'title',
      text: '通过 WPI 方法识别线材',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / 蕾丝线 (18-22+ WPI):</strong> 用于丝绸或马海毛蕾丝的极细线。建议针号 1.5mm 至 2.5mm。',
        '<strong>Fingering / 袜子/婴儿线 (14-16 WPI):</strong> 袜子和婴儿服的标准。最佳针号 2.75mm 至 3.25mm。',
        '<strong>Sport / 细线 (12-14 WPI):</strong> 中低粗细的线，理想用于轻便外套。建议针号 3.5mm 至 3.75mm。',
        '<strong>DK / 中粗线 (11-13 WPI):</strong> 市场上最通用的粗细。建议针号 4.0mm 或 4.5mm。',
        '<strong>Worsted / 粗线 (9-10 WPI):</strong> 冬季毛衣用的厚线。建议针号 5.0mm 至 5.5mm。',
        '<strong>Bulky / 极粗线 (7-8 WPI):</strong> 适用于快速完成项目的粗毛线。建议针号 6.0mm 至 8.0mm。',
        '<strong>Super Bulky / 超极粗线 (5-6 WPI):</strong> 用于装饰或围巾的巨型纤维。建议针号 9.0mm 至 15.0mm。',
      ],
    },
    {
      type: 'tip',
      title: '专业技术：蕾丝钢钩针',
      html: '<p>有一类专门用于极细丝光棉线的针号。它们就是 <strong>Steel Hooks (蕾丝钢钩针)</strong>。它们的编号是特定的且反向的：一个 #14 (0.6mm) 的钢钩针比 #00 (3.5mm) 的精细得多。切勿将标准表用于这些规格。</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: '正确选择规格的核查清单',
      icon: 'mdi:check-circle-outline',
      badge: '技术验证',
      html: '<p>在开始长期项目之前，请按照以下步骤操作：</p><ul><li><strong>个人张力：</strong> 如果您织得较紧，请选择大 0.5mm 的针。如果较松，请选择小 0.5mm 的针。</li><li><strong>针号材质：</strong> 顺滑的线用竹针；粗糙的毛线用金属针。</li><li><strong>纤维类型：</strong> 棉线没有弹性；美利奴羊毛在定型（blocking）过程中会膨胀。</li><li><strong>制作织片：</strong> 编织一个 10x10 厘米的正方形，并在测量最终尺寸前进行清洗。</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '公制系统具有通用性，并可避免制造商之间的进位误差。',
          con: '许多旧的或具有历史意义的图案不包含毫米尺寸。',
        },
        {
          pro: '美标系统便于记忆美国图案的标准尺寸。',
          con: '钩针中的字母在不同品牌之间并不总是一致的。',
        },
        {
          pro: 'WPI 系统允许以技术和专业的方式重新利用没有标签的线材。',
          con: '需要非常细致的手动测量，以免产生误差。',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: '在开始项目前编织的样品块 (10x10cm)，用于验证实际规格。' },
        { term: 'Hook Throat', definition: '钩针的护喉部位。其深度决定了针号可以处理的线材负荷。' },
        { term: 'Block Testing', definition: '通过湿润和拉伸织物的过程，使纤维放松并显示其真实的最终尺寸。' },
      ],
    },
    {
      type: 'summary',
      title: '纺织项目成功的关键因素',
      items: [
        '正确的针号不仅决定了尺寸，还决定了服装对抗摩擦的耐用性。',
        '使用我们的转换器，在几秒钟内验证美国或英国杂志的图案。',
        '如果找不到完全一致的针号，请根据您的织片选择大一号或小一号。',
        '在相同针号的情况下，钩针编织比棒针编织多消耗约 30% 的线材。',
        '定期清洁您的金属针，以保持最佳的滑动速度。',
      ],
    },
  ],
  ui: {
    labelSystem: '工作系统',
    modeKnitting: '棒针',
    modeCrochet: '钩针',
    calibratorLabel: '精密校准器（真实比例）',
    calibratorDesc: '选择一个直径以实时查看对应关系。这些孔洞与毫米读数保持了真实的数学比例。',
    tagMetric: '公制 (mm)',
    tagUS: '美标系统',
    tagUK: '英标系统',
    yarnLabel: '理想的线材粗细',
    wpiFormat: '{wpi} WPI (每英寸绕圈数)',
    tableSectionLabel: '规格对应技术目录',
    tableMetric: '公制',
    tableUS: '美国尺寸',
    tableUK: '英国 / 英制',
    tableYarn: '线材类别',
  },
};
