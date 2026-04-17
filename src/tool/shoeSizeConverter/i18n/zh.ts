import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'shoe-size-converter';
const title = '鞋码尺寸转换器';
const description = '在美码 (US)、欧码 (EU)、英码 (UK) 和厘米 (CM) 系统之间转换鞋子尺码。男鞋和女鞋国际尺码指南。';

const faqData = [
  {
    question: '如何确定我的美国鞋码 (US)？',
    answer: '对于男性，美码 (US) 通常比英码 (UK) 大一个单位。对于女性，比例有所不同。最准确的方法是测量脚的厘米长度，并使用我们的转换器获取确切的美码数值。',
  },
  {
    question: '英码 (UK) 和美码 (US) 鞋号有什么区别？',
    answer: '虽然两者都使用英制系统，但它们的起点不同。通常情况下，男鞋的英码 8 号相当于美码 9 号。',
  },
  {
    question: '如何测量脚长以确定厘米 (CM) 尺码？',
    answer: '将脚后跟靠墙放置，标记最长脚趾结束的位置，然后测量距离。以厘米 (CM) 为单位的该测量值是购买国际品牌运动鞋最可靠的依据。',
  },
];

const howToData = [
  {
    name: '选择性别',
    text: '选择您是寻找男鞋还是女鞋尺码，因为比例会有所不同。',
  },
  {
    name: '选择地区/系统',
    text: '指明您所了解的尺码系统（欧码、美码、英码或厘米）。',
  },
  {
    name: '选择您的码数',
    text: '使用选择器或直接点击欧码对照表。',
  },
  {
    name: '查看对照结果',
    text: '立即获取世界其他地区对应的码数。',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    { name: 'Shoe size conversion - Wikipedia', url: 'https://en.wikipedia.org/wiki/Shoe_size' },
    { name: 'ISO 9407: Shoe sizes - Mondopoint system', url: 'https://www.iso.org/standard/17157.html' },
    { name: 'Shoe size conversion - Zappos', url: 'https://www.zappos.com/c/shoe-size-conversion' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '鞋码转换器：完整国际尺码指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在国际商店购买鞋类可能是一项物流挑战。<strong>鞋码转换器</strong>是避免不必要退货的关键工具，并确保无论是从 Amazon、AliExpress 还是专业运动商店购买，每一次购物都能成功。',
    },
    {
      type: 'title',
      text: '鞋码对照是如何运作的？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '鞋类世界并没有统一。从历史上看，每个地区都根据当地的测量单位（如英寸或“巴黎点”）开发了自己的系统。',
    },
    {
      type: 'list',
      items: [
        '<span><strong>欧码 EU (欧洲):</strong> 基于“巴黎点”，相当于 2/3 厘米。这是中国最常用的参考系统之一。</span>',
        '<span><strong>美码 US (美国):</strong> 使用英寸，且男女鞋的起点不同。</span>',
        '<span><strong>英码 UK (英国):</strong> 同样采用英制系统，但刻度比美国低一个单位。</span>',
        '<span><strong>厘米 CM / Mondopoint:</strong> 最精确的。直接使用以厘米为单位的脚长。</span>',
      ],
    },
    {
      type: 'title',
      text: '如何测量脚长并找到您的准确尺码指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在使用转换器之前，了解您脚的真实尺寸至关重要。对于鞋子来说，基本测量值是从脚后跟到最长脚趾的长度。',
    },
    {
      type: 'tip',
      title: '专家建议',
      html: '请在一天结束时测量脚长。脚部往往会随着活动和热量而膨胀，因此早晨的测量值可能会导致下午穿鞋时感到挤脚。',
    },
    {
      type: 'title',
      text: '为什么不同品牌的运动鞋尺码会有所不同',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '为什么 Nike 穿 42 码，而在 Adidas 却穿 41 1/3 码？品牌使用自己的“鞋楦”。有些运动品牌往往尺码偏小，这迫使人们不得不购买比平时大半号的鞋子。',
    },
  ],
  ui: {
    genderMenTitle: '男鞋',
    genderWomenTitle: '女鞋',
    regionLabel: '您的尺码系统',
    regionEU: '欧码 (EU)',
    regionUS: '美码 (US)',
    regionUK: '英码 (UK)',
    regionCM: '公分 (CM)',
    gridTitle: '选择您的尺码',
    gridDesc: '点击查看国际对照结果',
    labelEU: '欧码 (EU)',
    labelUS: '美码 (US)',
    labelUK: '英码 (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: '<strong>CM</strong> 尺码代表脚部的物理长度。这是购买国际品牌运动鞋最可靠的方法。',
    menData: [
      { EU: '39', US: '6.5', UK: '6', CM: '24.5' },
      { EU: '40', US: '7.5', UK: '7', CM: '25.0' },
      { EU: '40.5', US: '8', UK: '7.5', CM: '25.5' },
      { EU: '41', US: '8.5', UK: '8', CM: '26.0' },
      { EU: '42', US: '9', UK: '8.5', CM: '26.5' },
      { EU: '42.5', US: '9.5', UK: '9', CM: '27.0' },
      { EU: '43', US: '10', UK: '9.5', CM: '27.5' },
      { EU: '44', US: '10.5', UK: '10', CM: '28.0' },
      { EU: '44.5', US: '11', UK: '10.5', CM: '28.5' },
      { EU: '45', US: '11.5', UK: '11', CM: '29.0' },
      { EU: '46', US: '12', UK: '11.5', CM: '30.0' },
    ],
    womenData: [
      { EU: '35', US: '5', UK: '3', CM: '22.0' },
      { EU: '36', US: '6', UK: '4', CM: '22.5' },
      { EU: '37', US: '6.5', UK: '4.5', CM: '23.5' },
      { EU: '37.5', US: '7', UK: '5', CM: '23.8' },
      { EU: '38', US: '7.5', UK: '5.5', CM: '24.0' },
      { EU: '38.5', US: '8', UK: '6', CM: '24.5' },
      { EU: '39', US: '8.5', UK: '6.5', CM: '25.0' },
      { EU: '40', US: '9', UK: '7', CM: '25.5' },
      { EU: '41', US: '10', UK: '8', CM: '26.5' },
      { EU: '42', US: '11', UK: '9', CM: '27.0' },
    ],
  },
};
