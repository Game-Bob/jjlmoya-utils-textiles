import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'fabric-project-calculator';
const title = '单件服装布料消耗计算器';
const description =
  '轻松计算缝制裙子、裤子、连衣裙或衬衫需要多少面料。根据布料宽度和尺码进行调整，实现专业裁剪。';

const faqData = [
  {
    question: '缝制一条裙子需要多少布料？',
    answer:
      '这取决于布料的宽度。对于 140-150 厘米宽的面料，缝制一条直筒裙通常 1.20 米就够了。如果面料宽度只有 90-110 厘米，则需要 2.00 米。',
  },
  {
    question: '布料宽度如何影响消耗量？',
    answer:
      '宽度较窄时，样板零件无法并排（平行）放置，因此消耗量通常会翻倍，因为零件必须一个放在另一个下面。',
  },
  {
    question: '买布料时多买一点更好吗？',
    answer:
      '是的，建议预留 10%（约 20 厘米）的余量，以补偿缩水、织物缺陷或意外的缝纫留边。',
  },
  {
    question: '什么是布料的经向（布纹），它有什么影响？',
    answer:
      '它是与布料幅宽边缘（布边）平行的方向。样板必须与该纹理对齐，这样服装在穿着时才不会变形。',
  },
];

const howToData = [
  {
    name: '选择服装类型',
    text: '选择您要制作的模型（裙子、裤子等）以加载其基础消耗表。',
  },
  {
    name: '输入布料宽度',
    text: '测量您打算购买的布料从布边到布边的宽度（90、115、140 或 150 厘米）。',
  },
  {
    name: '选择尺码',
    text: '根据尺码（XS-S、M-L、XL-XXL）调整服装体积，以重新计算乘数因子。',
  },
  {
    name: '获取总长度',
    text: '检查含缝份和不含缝份的最终结果，以便准确知道在商店里要买多少米。',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'Fabric Estimation Guide - Threads Magazine',
      url: 'https://www.threadsmagazine.com/forum/measuring-fabric',
    },
    {
      name: 'How much fabric do I need? - Seamwork',
      url: 'https://www.seamwork.com/sewing-tutorials/the-anatomy-of-a-sewing-pattern',
    },
    {
      name: 'Standard Fabric Consumption Charts - Textile School',
      url: 'https://www.textileschool.com/209/fabric-consumption-in-garment-making/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '服装制作布料长度计算器：消耗指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在缝纫工作室中，最常见的疑问之一是确定为一个特定项目购买多少布料。布料消耗量主要取决于三个因素：服装模型、个人尺寸，以及最核心的——布料幅宽（通常在 90 厘米到 150 厘米之间）。这款技术计算器使计算系统化，让您既不会买得太多，也不会在裁剪到一半时发现面料不够。',
    },
    {
      type: 'title',
      text: '缝制一件连衣裙或裤子需要多少布料？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '传统的计算方法是基于服装长度加上袖长，再增加见回（贴边）和下摆（折边）的余量。然而，当面料较窄（90-110 厘米）时，样板零件通常无法并排摆放，这就迫使您购买双倍的长度。我们的工具根据纺织工业标准自动考虑了这些变化。',
    },
    {
      type: 'title',
      text: '根据布料宽度估计的消耗量（M-L 尺码）',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>直筒裙：</strong> 90cm 宽幅需要 2.00m · 140/150cm 宽幅需要 1.20m。',
        '<strong>长裤：</strong> 90cm 宽幅需要 2.50m · 140/150cm 宽幅需要 1.50m。',
        '<strong>长袖衬衫：</strong> 90cm 宽幅需要 2.20m · 140/150cm 宽幅需要 1.40m。',
        '<strong>基础连衣裙：</strong> 90cm 宽幅需要 3.50m · 140/150cm 宽幅需要 2.20m。',
      ],
    },
    {
      type: 'title',
      text: '影响布料消耗的因素',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>图案方向（排版）：</strong> 如果布料有明显方向性的图案或需要对齐的格子，您将需要额外增加 15% 到 20% 的材料。',
        '<strong>斜纹方向（斜裁）：</strong> 斜裁或圆型裁剪（如圆裙）由于角度造成的损耗，消耗的面料会明显更多。',
        '<strong>顺毛方向：</strong> 在天鹅绒或灯芯绒等织物中，所有零件必须向同一个方向裁剪，这限制了空间的优化利用。',
        '<strong>缩水：</strong> 许多天然织物（棉、麻、羊毛）在第一次洗涤后会缩水。在裁剪前先对布料进行预缩（预洗）至关重要。',
      ],
    },
    {
      type: 'tip',
      title: '裁缝贴士',
      html: '<p>如果您打算使用大图案或格子（花呢）面料，请不要完全依赖标准尺寸。务必在计算出的总米数上加上一个完整的图案重复周期（花回），以确保样板在侧缝处能够图案对齐。</p>',
    },
    {
      type: 'title',
      text: '本计算器的优点与局限性',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '支持多种布料宽度及尺码调整的即时计算。',
        '包含可自定义的缝份估计值。',
        '提供布料零件排布的视觉指南。',
        '不能替代真实的排料（排样）。加大尺码可能需要额外的手动调整。',
      ],
    },
    {
      type: 'card',
      title: '幅宽',
      icon: 'mdi:arrow-expand-horizontal',
      html: '布料从<strong>布边到布边</strong>的横向尺寸。决定了样板零件是可以平行放置还是必须串联放置。',
    },
    {
      type: 'card',
      title: '缝份',
      icon: 'mdi:tape-measure',
      html: '样板边缘与<strong>最终缝纫线</strong>之间的距离。服装缝纫的标准值通常为 1.5 厘米。',
    },
    {
      type: 'card',
      title: '布边（Selvedge）',
      icon: 'mdi:content-cut',
      html: '布料两侧经过加固、<strong>不会散边</strong>的部分。它们标示了经向方向，并作为裁剪的参考。',
    },
  ],
  ui: {
    sectionProject: '项目',
    sectionMaterial: '面料',
    labelGarmentType: '服装类型',
    labelSize: '尺码',
    labelFabricWidth: '布料宽度 (cm)',
    labelSeamAllowance: '缝份 (cm)',
    garmentSkirt: '裙子 (直筒/A型)',
    garmentPants: '裤子',
    garmentDress: '连衣裙',
    garmentShirt: '衬衫 / 女衬衫',
    garmentCoat: '外套 / 夹克',
    garmentTote: '帆布包 (Tote Bag)',
    garmentMerceria: {
      skirt: '1 条 20cm 隐形拉链，1 颗纽扣',
      pants: '1 条 20cm 拉链，1 颗纽扣，30cm 粘合衬',
      dress: '1 条 60cm 拉链，50cm 粘合衬',
      shirt: '7 颗纽扣，1m 薄粘合衬',
      coat: '3 颗大纽扣，1.5m 粘合衬，里布',
      tote: '2m 提手织带',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (窄幅)',
    width115: '115 cm (拼布常用)',
    width140: '140 cm (欧洲标准幅)',
    width150: '150 cm (宽幅/装饰用)',
    btnClear: '清空',
    btnShare: '分享',
    btnCopied: '已复制！',
    btnCopyList: '复制清单',
    resultLabel: '您需要：',
    resultUnit: '米',
    shopAdviceFormat: '请在商店购买 {m} 米',
    boardEmpty: '选择一个项目以查看排布图',
    boardDescFormat: '宽度: {w}cm | 长度: {m}m',
    merchTitle: '辅料与材料',
    checklistThread: '配色缝纫线',
    warningSerialFormat: '在 {w}cm 宽的布料上，您该尺码的零件无法并排。消耗量已按串联裁剪调整。',
    foldLabel: '⊟ 折叠线',
    pieceNames: {
      front: '前片',
      back: '后片',
      waistband: '腰头',
      waistbelt: '腰带',
      sleeve: '袖子',
      collar: '领子',
      cuffs: '袖口',
      facings: '贴边',
      lapels: '挂面',
      pocket: '口袋',
      body: '包身',
      handleA: '提手 A',
      handleB: '提手 B',
    },
  },
};
