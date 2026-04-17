import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'clothing-size-converter';
const title = '国际服装尺码换算器';
const description =
  '在 EU、US、UK 和 IT 系统之间转换服装尺码。支持男士、女士和中性款 T 恤、裤子、连衣裙和夹克。包含测量指南和品牌建议。';

const faqData = [
  {
    question: '服装的 EU 尺码和 US 尺码有什么区别？',
    answer:
      '欧洲（EU）尺码通常使用递增数字或字母（XS-XXL 或 32-52），而美国（US）尺码通常使用字母或特定的裤子数字。一般来说，在女装中，EU 36 码相当于 US 4 码。',
  },
  {
    question: '男装或女装的尺码会发生变化吗？',
    answer:
      '是的，绝对会。即使在同一个国家，男士 40 码也不等同于女士 40 码。男性的体型比例不同（肩膀更宽），因此尺码计算方式也不同。',
  },
  {
    question: '我如何知道在某个品牌中应该买大一码还是买小一码？',
    answer:
      '最好的方法是查看其他顾客的评价。诸如“我觉得偏小”或“版型偏大”之类的短语非常有帮助。同时请参考该品牌的具体尺寸测量表。',
  },
  {
    question: '此尺码换算表准确吗？',
    answer:
      '换算表仅供指南。虽然通常准确，但每个品牌都有自己的规格。购买前务必检查特定店铺的尺码表。',
  },
  {
    question: '衣物洗涤后会缩水吗？',
    answer:
      '这取决于材质。100% 棉如果用热水洗涤并烘干，可能会缩水 5-10%。合成材料能更好地保持形状。请务必查看洗涤说明。',
  },
];

const howToData = [
  {
    name: '选择品类和性别',
    text: '选择服装类型（T 恤、裤子、连衣裙、夹克）和相应的性别。',
  },
  {
    name: '选择您的尺码体系',
    text: '选择您熟悉的体系：EU、US、UK 或 IT。',
  },
  {
    name: '选择您的尺码',
    text: '在选择器中选择您的码数或点击表格。您将立即看到对应的换算结果。',
  },
  {
    name: '参考品牌指南',
    text: '检查该品牌的版型是偏小、正常还是偏大，以调整您的购买选择。',
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

const shirtsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '44' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '46' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '42' },
  ],
  unisex: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '34' },
    { EU: 'S', US: 'S', UK: 'S', IT: '36' },
    { EU: 'M', US: 'M', UK: 'M', IT: '38' },
    { EU: 'L', US: 'L', UK: 'L', IT: '40' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '42' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '44' },
  ],
};

const pantsData = {
  men: [
    { EU: '30', US: '30', UK: '30', IT: '44' },
    { EU: '32', US: '32', UK: '32', IT: '46' },
    { EU: '34', US: '34', UK: '34', IT: '48' },
    { EU: '36', US: '36', UK: '36', IT: '50' },
    { EU: '38', US: '38', UK: '38', IT: '52' },
    { EU: '40', US: '40', UK: '40', IT: '54' },
  ],
  women: [
    { EU: '32', US: '0', UK: '4', IT: '36' },
    { EU: '34', US: '2', UK: '6', IT: '38' },
    { EU: '36', US: '4', UK: '8', IT: '40' },
    { EU: '38', US: '6', UK: '10', IT: '42' },
    { EU: '40', US: '8', UK: '12', IT: '44' },
    { EU: '42', US: '10', UK: '14', IT: '46' },
  ],
  unisex: [],
};

const dressesData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
  ],
  women: [
    { EU: 'XS', US: '0-2', UK: '4-6', IT: '32-34' },
    { EU: 'S', US: '4-6', UK: '8-10', IT: '36-38' },
    { EU: 'M', US: '8-10', UK: '12-14', IT: '40-42' },
    { EU: 'L', US: '12-14', UK: '16-18', IT: '44-46' },
    { EU: 'XL', US: '16-18', UK: '20-22', IT: '48-50' },
  ],
  unisex: [],
};

const jacketsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '44' },
    { EU: 'S', US: 'S', UK: 'S', IT: '46' },
    { EU: 'M', US: 'M', UK: 'M', IT: '48' },
    { EU: 'L', US: 'L', UK: 'L', IT: '50' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '52' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
  ],
  unisex: [],
};

const measurementRanges = {
  shirts: [
    { size: 'XS', chest: 84, waist: 76, hip: 84 },
    { size: 'S', chest: 92, waist: 84, hip: 92 },
    { size: 'M', chest: 100, waist: 92, hip: 100 },
    { size: 'L', chest: 108, waist: 100, hip: 108 },
    { size: 'XL', chest: 116, waist: 108, hip: 116 },
    { size: 'XXL', chest: 124, waist: 116, hip: 124 },
  ],
  pants: [
    { size: '30', chest: 80, waist: 76, hip: 89 },
    { size: '32', chest: 85, waist: 81, hip: 94 },
    { size: '34', chest: 90, waist: 86, hip: 99 },
    { size: '36', chest: 95, waist: 91, hip: 104 },
    { size: '38', chest: 100, waist: 96, hip: 109 },
    { size: '40', chest: 105, waist: 101, hip: 114 },
  ],
  dresses: [
    { size: 'XS', chest: 80, waist: 72, hip: 88 },
    { size: 'S', chest: 88, waist: 80, hip: 96 },
    { size: 'M', chest: 96, waist: 88, hip: 104 },
    { size: 'L', chest: 104, waist: 96, hip: 112 },
    { size: 'XL', chest: 112, waist: 104, hip: 120 },
  ],
  jackets: [
    { size: 'XS', chest: 84, waist: 76, hip: 88 },
    { size: 'S', chest: 92, waist: 84, hip: 96 },
    { size: 'M', chest: 100, waist: 92, hip: 104 },
    { size: 'L', chest: 108, waist: 100, hip: 112 },
    { size: 'XL', chest: 116, waist: 108, hip: 120 },
  ],
};

export const content: ToolLocaleContent<ClothingSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'ISO 3635: 服装尺码 — 官方标准', url: 'https://www.iso.org/standard/68644.html' },
    { name: '服装尺码标准 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E8%A1%A3%E7%89%A9%E5%B0%BA%E7%A2%BC' },
    {
      name: '国际服装尺码换算 - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '服装尺码换算器：完整指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在国际商店购买衣服时，如果尺码不匹配，可能会让人感到困惑。<strong>尺码换算器</strong>可帮助您在 EU、US、UK 和 IT 系统中找到最适合您的 T 恤、裤子、连衣裙和夹克的尺码。',
    },
    {
      type: 'title',
      text: '为什么不同国家的服装尺码会有差异？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '目前还没有统一的国际标准。每个地区都开发了自己的系统，这在跨境电商或 Amazon、AliExpress 等平台购物时会带来困扰。',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU 尺码（欧洲）：</strong> 使用递增数字（32, 34, 36...）或字母。这是德国、法国和大多数欧洲大陆国家最常用的系统。</span>',
        '<span><strong>US 尺码（美国）：</strong> 使用字母（XS, S, M, L）或女士裤子的数字（0, 2, 4, 6...）。</span>',
        '<span><strong>UK 尺码（英国）：</strong> 与 EU 系统类似，但有自己的编号，通常低于美国编号。</span>',
        '<span><strong>IT 尺码（意大利）：</strong> 意大利编号，与通用的 EU 系统略有不同。</span>',
      ],
    },
    {
      type: 'tip',
      title: '专业建议',
      html: '不同品牌的尺码差异很大。Zara 的 38 码可能与 H&amp;M 的 38 码不同。购买前务必参考商店的具体尺码表。',
    },
    {
      type: 'title',
      text: '如何正确测量您的身体数据',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '为确保尺码正确，请使用柔软的卷尺测量您的身体。建议在一天结束时测量，此时身体处于最大伸展状态。',
    },
    {
      type: 'list',
      items: [
        '<span><strong>胸围：</strong> 测量胸部最宽部分的周围，卷尺通过腋下。</span>',
        '<span><strong>腰围：</strong> 在肚脐高度测量，不要刻意收腹。</span>',
        '<span><strong>臀围：</strong> 测量臀部最宽部分的周围，卷尺与地面平行。</span>',
      ],
    },
    {
      type: 'title',
      text: '品牌版型指南',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara：</strong> 尺码较正。Zara 的 36 码对于标准身材通常比较可靠。</span>',
        '<span><strong>H&amp;M：</strong> 版型偏大。考虑选择比平时小一号的尺码。</span>',
        '<span><strong>Uniqlo：</strong> 码数通常偏小，尤其是基础款。建议买大一码。</span>',
        '<span><strong>Nike / Adidas：</strong> 运动版型，通常比较修身。考虑买大半码。</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: '服装类型',
    categoryShirts: 'T 恤',
    categoryPants: '裤子',
    categoryDresses: '连衣裙',
    categoryJackets: '夹克',
    genderLabel: '性别',
    genderMen: '男士',
    genderWomen: '女士',
    genderUnisex: '中性/情侣',
    tabBySize: '按尺码',
    tabByMeasurements: '按测量值',
    regionLabel: '您的尺码体系',
    sizeLabel: '选择您的尺码',
    regionEU: '欧洲 (EU)',
    regionUS: '美国 (US)',
    regionUK: '英国 (UK)',
    regionIT: '意大利 (IT)',
    labelEU: '欧洲',
    labelUS: '美国',
    labelUK: '英国',
    labelIT: '意大利',
    quickGridTitle: '快捷快速换算 (EU)',
    tableTitle: '详细换算表',
    measurementsTitle: '输入您的测量值',
    chestLabel: '胸围 (cm)',
    waistLabel: '腰围 (cm)',
    hipLabel: '臀围 (cm)',
    chestPlaceholder: '例: 95',
    waistPlaceholder: '例: 85',
    hipPlaceholder: '例: 95',
    recommendBtnLabel: '推荐尺码',
    tipsTitle: '测量技巧',
    tipOverClothes: '由于穿着衣服',
    tipStraight: '卷尺保持水平',
    tipNoTight: '不要拉得太紧',
    tipEndOfDay: '在一天结束时',
    recommendationTitle: '推荐尺码',
    recommendedSizePrefix: '为您推荐的尺码：',
    measuredBy: '基于您的身体数据：',
    chestShort: '胸围',
    waistShort: '腰围',
    hipShort: '臀围',
    recommendationError: '请填写所有测量值以获取推荐。',
    recommendationNoData: '该品类暂无可用数据。',
    fitGuideTitle: '品牌版型指南',
    fitSmall: '偏小码',
    fitRegular: '标准码',
    fitLarge: '偏大码',
    fitInfoDefault: '点击品牌获取具体建议。',
    fitNotif1: ' 通常版型 ',
    fitNotifSmall: '偏小',
    fitNotifRegular: '正常',
    fitNotifLarge: '偏大',
    fitNotif2: '。如果您是第一次购买该品牌，请考虑 ',
    fitNotif3: '。',
    fitAdviceSmall: '买大一码',
    fitAdviceRegular: '按常规码购买',
    fitAdviceLarge: '买小一码',
    fitSelectedSuffix: ' 已选择。选择其他品牌进行对比。',
    infoBannerTitle: '专业提示：',
    infoBannerText:
      '服装尺码在品牌之间差异很大。购买前请务必确认商店的具体尺寸表。',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
