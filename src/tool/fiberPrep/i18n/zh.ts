import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'fiber-preparation-natural-dyeing';
const title = '染前纤维预处理';
const description =
  '天然染色前的 WOF 计算器、媒染方案和升温程序，适用于羊毛、丝绸和棉纤维的预准备。';

const faqData = [
  {
    question: '什么是 WOF (Weight of Fiber)？',
    answer:
      'WOF 是计算所需染料或媒染剂量的标准系统。它基于纤维的干重。例如，对于 100 克羊毛，使用 100% WOF 的洋葱皮意味着您需要 100 克洋葱皮。',
  },
  {
    question: '为什么必须进行媒染？',
    answer:
      '媒染剂（如明矾）在纺织纤维和天然色素之间起着化学桥梁的作用。没有这种桥梁，大多数染料将无法固着，并在第一次洗涤时消失（日晒牢度和摩擦牢度较差）。',
  },
  {
    question: '处理动物纤维和植物纤维有什么区别？',
    answer:
      '动物纤维（羊毛等蛋白质纤维）单独使用明矾的效果非常好。植物纤维（棉或麻等纤维素纤维）则需要先经过单宁处理，以“诱导”纤维接受金属媒染剂。',
  },
  {
    question: '染色中的“升温程序（Thermal Ramp）”是什么？',
    answer:
      '它是指染浴温度的逐渐升高（约每分钟 1-2°C）。这对避免热冲击至关重要，特别是对于羊毛，如果温度变化过快，会发生缩绒（毡化），导致纤维板结。',
  },
];

const howToData = [
  {
    name: '精炼与清洗',
    text: '使用中性洗涤剂清洗纤维，去除阻碍媒染剂均匀渗透的油脂、蜡质或工业浆料。',
  },
  {
    name: '称量干纤维重量',
    text: '获取干燥材料的准确重量。该值是所有 WOF (Weight of Fiber) 计算的基础。',
  },
  {
    name: '计算与媒染浴',
    text: '将媒染剂（如 15% WOF 的明矾）溶解在热水中并浸入纤维，按照方案保持恒温。',
  },
  {
    name: '熟成与漂洗',
    text: '让媒染后的纤维静置（最好是 24 小时），使金属离子在进入最终染浴前深度固着。',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - 纺织艺术家与天然染色',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '媒染背后的科学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '为染色准备纤维不仅仅是清洗。这是一个分子水平上的化学工程过程，称为媒染。这个词源于拉丁语 <i>mordere</i>（咬），其功能是充当纤维和色素之间的化学桥梁。没有这座桥梁，大多数天然染料只会在第一次漂洗时就被冲掉。',
    },
    {
      type: 'card',
      title: '核心概念',
      icon: 'mdi:molecule',
      html: '媒染剂具有可用的价态，可以同时抓紧纤维聚合物和染料分子。',
    },
    {
      type: 'title',
      text: '纤维差异化',
      level: 2,
    },
    {
      type: 'card',
      title: '蛋白质纤维：羊毛与丝绸',
      icon: 'mdi:sheep',
      html: '这些纤维由氨基酸链组成，对金属具有极高的天然亲和力。热量使纤维鳞片张开，允许明矾盐深度渗透。使用<strong>酒石粉（Cream of Tartar）</strong>至关重要，它可以维持酸性 pH 值，从而保持纤维的柔软度。',
    },
    {
      type: 'card',
      title: '纤维素纤维：棉与麻',
      icon: 'mdi:leaf',
      html: '纤维素没有容易结合的位点。这就是为什么我们使用<strong>两步法方案</strong>：首先是附着在纤维素上的单宁，然后是附着在单宁上的明矾。如果没有这种预处理，颜色会显得苍白且不耐洗。',
    },
    {
      type: 'title',
      text: '染浴控制：WOF、温度与 pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '为了获得专业且可重复的结果，<strong>WOF (Weight of Fabric)</strong> 概念是准则。一切都按纤维干重的百分比来衡量。过量的媒染剂会使纤维饱和，使其变得粗糙或留下金属沉积物，从而改变最终颜色。',
    },
    {
      type: 'tip',
      title: '升温程序',
      html: '热量起着催化剂的作用，加速化学反应。然而，羊毛温度的突然变化会导致鳞片永久性地相互勾连，导致织物毡化和缩水。',
    },
    {
      type: 'tip',
      title: 'pH 因素',
      html: '许多天然染料都是活的 pH 指示剂。pH 值影响盐类的溶解度和纤维的保存。如果染浴过于碱性，丝绸可能会失去光泽。使用柠檬酸或碳酸钙调节 pH 值是基础性的工作。',
    },
    {
      type: 'title',
      text: '物质与安全',
      level: 2,
    },
    {
      type: 'card',
      title: '明矾（钾明矾）',
      icon: 'mdi:bottle-tonic-skull',
      html: '通用媒染剂，无色且高效。蛋白质纤维的参考媒染剂。',
    },
    {
      type: 'card',
      title: '酒石粉 (Cream of Tartar)',
      icon: 'mdi:spoon-sugar',
      html: '助剂，可提高动物纤维的固着力和柔软度。保持酸性 pH 值。',
    },
    {
      type: 'tip',
      title: '安全守则',
      html: '染色锅具需专用，严禁用于烹饪食物。<br>处理粉末状媒染剂时请佩戴手套和口罩。<br>确保持续通风以避免蒸汽积聚。',
    },
  ],
  ui: {
    profileTitle: '选择类型',
    profileDesc: '化学方案根据纤维的分子来源进行划分',
    proteinTitle: '蛋白质纤维',
    proteinOrigin: '动物来源',
    proteinDesc: '羊毛、丝绸、羊驼毛、马海毛或羊绒。需要控制温度和酸性 pH 环境。',
    cellulosicTitle: '纤维素纤维',
    cellulosicOrigin: '植物来源',
    cellulosicDesc: '棉、麻、大麻或黄麻。需要使用单宁进行预媒染以固着色素。',
    wofTitle: 'WOF 计算器',
    weightLabel: '干衣重量 (g)',
    weightUnit: 'g',
    wofEmptyMsg: '选择一个类型以启用计算',
    alumLabel: '明矾',
    cremLabel: '酒石粉',
    ironLabel: '铁剂（慎用）',
    rampTitle: '升温程序',
    rampEmptyTitle: '等待选择',
    rampEmptyDesc: '选择一种纤维以查看热循环',
    phTitle: 'pH 稳定剂',
    phDesc: '颜色饱和度的关键因素',
    phVolumeLabel: '染浴体积 (L)',
    phSliderLabel: '当前 pH',
    phAcidLabel: '酸性 (1)',
    phAlkalineLabel: '碱性 (14)',
    phEmptyMsg: '选择一个类型以启用稳定剂',
    phStrings: {
      optimal: '最佳 pH',
      raisePrefix: '添加碳酸钙或纯碱。约',
      raiseSuffix: 'g 以升高至',
      lowerPrefix: '添加柠檬酸或醋。约',
      lowerSuffix: 'ml 以降低至',
    },
    proteinFibers: [
      { id: 'wool', name: '羊毛 / 美利奴', icon: 'mdi:sheep' },
      { id: 'silk', name: '丝绸', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: '羊绒', icon: 'mdi:crown' },
      { id: 'mohair', name: '马海毛', icon: 'mdi:shimmer' },
      { id: 'angora', name: '安哥拉免毛', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: '羊驼毛', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: '棉', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: '亚麻', icon: 'mdi:leaf' },
    ],
  },
};
