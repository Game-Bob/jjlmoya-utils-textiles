import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'sewing-pattern-scaler';
const title = '在线缝纫纸样放码（调节）工具';
const description = '根据您的实际尺寸调整任何缝纫纸样。具有放码差值计算和更新纸样预览功能的差异化缩放计算器。';

const faqData = [
  {
    question: '为什么肩寬的增长不像胸围那样快？',
    answer: '人体并不是一个球体。虽然躯干的体积会有显著变化，但骨架和关节（如肩膀）是相对固定的。专业的放码（grading）会应用不同的系数，以确保不会破坏服装的平衡。',
  },
  {
    question: '什么是“松量”或“ease”？',
    answer: '它是指您的身体与面料之间的额外空间。没有松量，您将无法活动。我们的计算器会保持这种松量，使服装既符合设计师的构思，又适应您的实际轮廓。',
  },
  {
    question: '我可以对针织或针织平针织物的纸样进行缩放吗？',
    answer: '可以，但请注意，弹力面料通常具有负松量。如果纸样非常紧身，请确保您选择的新面料的弹性系数与原始面料相同。',
  },
];

const howToData = [
  {
    name: '测量您的纸样',
    text: '在原始纸样（纸样稿）的关键水平线上（胸围、腰围和臀围）进行测量，从一侧缝线量到另一侧。',
  },
  {
    name: '配置源数据',
    text: '在工具的“源尺寸”列中输入纸样的尺码或您量得的尺寸。',
  },
  {
    name: '输入目标数据',
    text: '输入您的实际尺寸或您想要达到的目标尺码。工具将计算每个区域的精确差值。',
  },
  {
    name: '在裁床上应用',
    text: '按照“裁床操作”说明，在纸样块的侧面和底部增加或减少厘米数。',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    {
      name: 'Patronaje: Las Bases - Teresa Gilewska',
      url: 'https://www.scribd.com/document/696165843/patronaje-las-bases-by-teresa-gilewska',
    },
    {
      name: 'Metric Pattern Cutting for Women\'s Wear - Winifred Aldrich',
      url: 'https://download.e-bookshelf.de/download/0000/5989/88/L-G-0000598988-0002339537.pdf',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '如何进行缝纫纸样放码：技术与实践指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>纸样放码</strong> (pattern grading) 是服装制作界最关键的技能之一。这不仅仅是按比例放大或缩小图稿；而是要将二维结构调整以适应非线性生长的复杂人体曲线和比例。',
    },
    {
      type: 'stats',
      items: [
        { value: '离线', label: '本地计算', icon: 'mdi:calculator' },
        { value: '差异化', label: '比例缩放', icon: 'mdi:resize' },
        { value: '100%', label: '安全私密', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '纸样放码到底是什么？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '所谓放码（或称 <em>grading</em>），是指为了创建一系列不同尺码而增加或减少基本纸样尺寸的技术过程。与简单的缩放不同，放码考虑到身体的某些部位比其他部位增长更多。例如，胸围在各尺码间的变化通常比肩宽或背长更大。',
    },
    {
      type: 'title',
      text: '成功的秘密：松量 (Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>活动松量：</strong> 为了让您能够呼吸、坐下以及活动手臂而又不至于撕裂面料所需的额外厘米数。',
        '<strong>设计松量：</strong> 设计师为了创造特定廓形（例如廓形大衣或飘逸的上衣）而增加的厘米数。',
      ],
    },
    {
      type: 'title',
      text: '水平放码 vs 垂直放码',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>水平轴（围度）：</strong> 胸围、腰围、臀围。需要最大的调整。每个纸样块被分为四分之一进行计算。',
        '<strong>垂直轴（长度）：</strong> 前衣长、背长、总长。影响省道位置和腰线。相邻尺码间的变化量较小。',
      ],
    },
    {
      type: 'title',
      text: '如何使用纸样缩放工具',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>测量您的纸样：</strong> 拿着纸样块，测量胸围、腰围和臀围线上的边缘到边缘距离。',
        '<strong>输入源数据尺寸：</strong> 在左列写下这些测量值，并指明该纸样代表的尺码。',
        '<strong>输入您的尺寸或目标尺码：</strong> 在右列中输入您的实际测量值或您想要达到的尺码。',
        '<strong>翻译结果：</strong> 计算器将向您显示在每个特定区域应增加或减少的数值。',
      ],
    },
    {
      type: 'tip',
      title: '专业放码建议',
      html: '<p><strong>放码范围不要超过两到三个尺码：</strong> 如果您尝试从 36 码跨越到 52 码，袖窿（挂肩）极有可能会变形，领口也会变得巨大。在这种情况下，最好根据您的尺寸重新绘制基本原型。</p>',
    },
    {
      type: 'title',
      text: '数字放码的优势',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '保持原始设计的精确比例。',
          con: '袖窿处可能需要轻微的手动修顺。',
        },
        {
          pro: '瞬间计算所需的松量。',
          con: '无法自动检测纸样是否已包含缝份。',
        },
        {
          pro: '通过图形可视化展示纸样块的增长。',
          con: '需要非常精准的初始测量。',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '插值（Diferencial）', definition: '两个连续尺码间的尺寸差。' },
        { term: '定锚点', definition: '纸样上不发生位移的区域（通常是前/后中心线）。' },
        { term: '放码巢图 (Grading Nest)', definition: '所有放码尺码重叠在一起的图。' },
        { term: '基本原形', definition: '没有任何设计和松量、符合人体净尺寸的模版。' },
      ],
    },
  ],
  ui: {
    labelSystem: '工作系统',
    modeStandard: '标准尺码',
    modeCustom: '实际尺寸',
    labelPatternSize: '纸样尺码',
    labelTargetSize: '目标尺码',
    labelOriginMeasures: '源数据测量',
    labelTargetMeasures: '您的尺寸',
    labelEase: '当前松量 (Ease)',
    labelChest: '胸围',
    labelWaist: '腰围',
    labelHips: '臀围',
    labelLength: '长度',
    resBust: '胸围',
    resWaist: '腰围',
    resHips: '臀围',
    resLength: '长度',
    actionLatAdd: '增加',
    actionLatRemove: '减少',
    actionLatSuffix: '于纸样侧缝',
    actionLatNote: '每四分之一纸样的调整量',
    actionLenExtend: '加长纸样',
    actionLenShorten: '缩短纸样',
    actionLenNote: '于底边线调整',
    legendOriginal: '原始级',
    legendUpdated: '更新级',
    warnText: '放码跨度超过 3 个尺码。袖窿处存在变形风险。',
    sizePrefix: '码',
  },
};
