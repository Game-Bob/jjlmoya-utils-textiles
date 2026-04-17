import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'knitting-gauge-calculator';
const title = '编织密度与张力计算器';
const description =
  '轻松重新计算任何棒针或钩针图解的针数和行数。支持根据花样倍数和缩放比例调整密度，获得专业成品。';

const faqData = [
  {
    question: '什么是编织中的张力或密度（Gauge）？',
    answer:
      '它是衡量在特定区域（通常为 10x10 厘米）内包含多少针和多少行的指标。这是基础，因为它决定了根据所用针号和毛线制成的成衣最终尺寸。',
  },
  {
    question: '密度变化如何影响尺寸？',
    answer:
      '如果您的张力比图解每厘米的针数多，衣服就会变小。如果针数少，衣服就会变大。因此，重新计算针数或更换针号至关重要。',
  },
  {
    question: '为什么按倍数调整很重要？',
    answer:
      '许多图解都有花样（镂空、麻花、图案），需要特定的针数才能完成。我们的计算器会将总针数调整到最接近的倍数，以确保不破坏设计完整性。',
  },
  {
    question: '测量前我应该洗样片吗？',
    answer:
      '是的，必须洗。 “定型”（洗涤并定型）能让纤维放松，并展示出成衣在第一次穿戴和洗涤后所具有的真实张力。',
  },
];

const howToData = [
  {
    name: '确定图解密度',
    text: '在图解说明中查找 10x10 厘米或 4x4 英寸样片所标示的针数和行数。',
  },
  {
    name: '编织并测量您自己的样片',
    text: '用您的线和针织一个样片，进行定型，然后测量您在相同区域内的针数和行数。',
  },
  {
    name: '配置计算器',
    text: '输入图解样片数据和您的实际样片数据。添加您尺码的总针数，以及花样的倍数（如有）。',
  },
  {
    name: '获取结果',
    text: '查看建议起针的新针数和缩放比例，以了解是否也需要调整衣长。',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献',
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
      text: '在线编织密度与张力计算器：技术指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '如果您曾经完成过一件看起来像是为巨型人设计的毛衣，或者一个几乎遮不住头顶的小帽，那么您就已经体会到了<strong>密度（Gauge）或张力</strong>的重要性。在棒针和钩针的世界里，张力是线材粗细、针号大小以及每位编织者拉线力度之间的相互关系。没有两位编织者是完全相同的，因此，也没有两个完全相同的张力。',
    },
    {
      type: 'title',
      text: '为什么密度或张力对编织至关重要？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '这款编织密度计算器是一款技术工具，旨在消除数学推测，让您专注于创意。通过输入图解样片数据和您自己的样片数据，您将获得精确的针数和行数调整，确保您的成品尺寸正是您所期望的。',
    },
    {
      type: 'title',
      text: '如何使用编织张力计算器',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>织一个样片：</strong> 不要局限于 10x10 厘米。至少织一个 15x15 厘米的样片，以免边缘干扰中心测量。',
        '<strong>定型样片：</strong> 像处理成衣一样洗涤并晾干样片。许多羊毛纤维在弄湿后会膨胀或变长。',
        '<strong>精确测量：</strong> 使用硬尺或 10 厘米密度测量器。数一数水平方向有多少针，垂直方向有多少行。',
        '<strong>输入数据：</strong> 在左列放入图解数值，在右列放入您的实际数值。该工具将自动重新计算达到所需宽度所需的针数。',
      ],
    },
    {
      type: 'title',
      text: '结果解读：缩放比例 (Scale Factor)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '缩放比例是我们应用于图解中每条指令的乘数。如果您的张力是 22 针，而图解要求 20 针，您的缩放比例就是 1.1。这意味着为了获得相同的物理宽度，您需要多出 10% 的针数。 0-2% 的偏差是理想的， 2-10% 是中等的， 10-25% 必须重新计算，超过 25% 则存在结构性风险。',
    },
    {
      type: 'title',
      text: '花样倍数处理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '重新计算图解时最大的挑战之一是保持镂空、麻花或图案的完整性。如果设计是每 8 针重复一次，您不能简单地添加 3 针；您必须调整总针数，使其仍然是 8 的倍数。此计算器的<strong>倍数调整</strong>功能会建议最接近且符合花样结构的针数。',
    },
    {
      type: 'tip',
      title: '专家建议',
      html: '<p>通常最好使用此计算器并按照您毛线的自然张力工作，通过调整针数来适配，而不是通过剧烈改变针号来强行适配张力，因为后者可能会改变织物的垂坠感和柔软度。</p>',
    },
    {
      type: 'title',
      text: '使用我们调整工具的优势',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '通过精确的缩放比例自动调整针数和行数。',
        '支持复杂的倍数 (X + Y)，以保持图案完整性。',
        '预估整个项目所需的毛线克数。',
        '动态可视化样片，实时显示织物密度。',
      ],
    },
    {
      type: 'card',
      title: '密度 / 张力 (Gauge)',
      icon: 'mdi:ruler',
      html: '<strong>10x10 厘米</strong>或<strong>4x4 英寸</strong>正方形内包含的针数和行数。它是所有编织图解的通用参考。',
    },
    {
      type: 'card',
      title: '定型 (Blocking)',
      icon: 'mdi:water',
      html: '浸湿并为成衣定型的过程，使针脚平整。展示成衣在第一次穿戴和洗涤后所具有的<strong>真实张力</strong>。',
    },
    {
      type: 'card',
      title: '缩放比例 (Scale Factor)',
      icon: 'mdi:scale',
      html: '图解样片与编织者实际样片之间的数学比例。决定需要调整多少针数和行数以保持<strong>正确的尺寸</strong>。',
    },
  ],
  ui: {
    sectionOriginalGauge: '原始张力',
    sectionMyGauge: '您当前的样片',
    sectionProject: '项目结构',
    labelStitches: '针数',
    labelRows: '行数',
    labelWidth: '宽度',
    labelLength: '长度',
    labelUnit: '计量单位',
    labelNeedle: '针号',
    labelNeedleMm: '针号 (mm)',
    labelWeight: '重量 (g)',
    labelWeightOptional: '选填',
    labelPatternSts: '图解起针数',
    labelPatternRows: '图解总行数',
    labelMultiples: '倍数',
    labelMultiplesExample: '如: 10 + 2',
    labelMultiplesPlaceholder: '倍数 + 边缘针',
    unitEU: '10 x 10 cm (欧盟标准)',
    unitUS: '4 x 4 英寸 (美国标准)',
    btnClear: '清空',
    btnShare: '分享',
    btnCopied: '已复制！',
    resSuggestedSts: '建议的起针针数',
    resNewRows: '调整后的行数',
    resNewRowsTooltip: '按照您当前的密度，达到原始图解长度所需的行数。',
    resScaleFactor: '缩放比例',
    resScaleFactorTooltip: '您的织物与图解之间的尺寸关系。负值表示您的织物更致密。',
    resSuggestion: '建议',
    resSuggestionTooltip: '无需重新计算图解每一针即可调整张力的技术建议。',
    suggestionIdeal: '理想',
    suggestionDown: '减小针号',
    suggestionUp: '加大针号',
    suggestionDownDetail: '请使用 {n}mm 或更细的针号。',
    suggestionUpDetail: '请使用 {n}mm 或更粗的针号。',
    multiplesNoteFormat: '已调整为 {n} 针 (倍数 {m})',
    yarnTitle: '项目用线预估',
    yarnResultFormat: '预估用线量: <strong>{g}g</strong>',
    yarnSafetyFormat: '(含 +{s}g 损耗)',
    alertDanger: '差异极大 (>25%)。成衣的垂坠感和结构将受明显影响。',
  },
};
