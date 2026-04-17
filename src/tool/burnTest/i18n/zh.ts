import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'textile-burn-test';
const title = '纺织品燃烧试验';
const description =
  '通过分析燃烧行为来识别任何织物的真实成分。科学区分棉、羊毛、丝绸和合成纤维。';

const faqData = [
  {
    question: '在家进行燃烧试验安全吗？',
    answer:
      '是的，只要你采取极端预防措施：使用金属镊子，在耐火表面（陶瓷或金属）上操作，在附近准备好水，并在通风良好的地方进行测试。你只需要一个 1x1 厘米的小样品或几根线。',
  },
  {
    question: '棉花燃烧时是什么味道？',
    answer:
      '棉花是纯纤维素。燃烧时，它的气味与燃烧的纸张或干叶子完全相同。产生的灰烬是灰色的，非常细，触之即碎。',
  },
  {
    question: '纤维末端的黑色硬珠表示什么？',
    answer:
      '这是聚酯或尼龙等合成纤维（塑料）的明确迹象。熔化时，聚合物会聚集成塑料珠，不会像天然纤维的灰烬那样破碎。',
  },
  {
    question: '为什么羊毛燃烧时很难闻？',
    answer:
      '羊毛和丝绸是含有硫的动物蛋白质。接触火源时，它们会散发出刺鼻的烧焦头发或羽毛的气味。这是将它们与植物纤维区分开的最简单方法。',
  },
];

const howToData = [
  {
    name: '提取代表性样品',
    text: '从织物上剪下一个小正方形，或者更好的是，从经纱（垂直）和纬纱（水平）中抽出几根线。',
  },
  {
    name: '观察接近火焰时的反应',
    text: '将纤维缓慢靠近火源而不接触。观察它是否收缩、熔化或立即着火。',
  },
  {
    name: '分析火焰类型和烟雾',
    text: '注意火焰是稳定的还是自行熄灭的，以及烟雾是白色的、黑色的还是没有。',
  },
  {
    name: '评估残留物和气味',
    text: '冷却后，触摸产生的灰烬或珠子并感受气味（纸味、头发味或化学味）以确认识别纤维类别。',
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

const flame = {
  cellulosic: '燃烧迅速且明亮（黄色火焰）。不熔化。离开火源后继续燃烧。',
  protein: '燃烧缓慢，发出噼啪声，并收缩远离火焰。离开火源后自行熄灭。',
  synthetic: '熔化并迅速收缩，像熔化的塑料一样滴落。火焰带烟尘。',
};

const odor = {
  paper: '烧焦的纸、木头、干叶。',
  hair: '烧焦的头发、烧焦的角质、羽毛。',
  chemical_sweet: '芳香族化学味（甜味、果味）。',
  chemical_fishy: '酸性化学味（鱼味、烤肉味）。',
  vegetable: '煮熟的蔬菜（芹菜）。',
};

const residue = {
  ash_soft: '细腻的灰色/黑色灰烬，柔软且易挥发（触之即碎）。',
  ash_shape: '灰色灰烬保持纤维形状（易碎）。',
  bead_crushable: '中空/脆弱的黑色物质（用手指容易压碎）。',
  bead_hard: '坚硬如玻璃般的珠子。用手指无法破碎。',
  bead_irregular: '坚硬且不规则的黑色物质。',
};

const smoke = {
  white_gray: '白色 / 浅灰色。',
  gray: '中灰色。',
  black: '浓密的深黑色。',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'AATCC TM20: Fiber Analysis - Qualitative',
      url: 'https://members.aatcc.org/store/tm20/485/',
    },
    {
      name: 'Textile Fibers: Identification and Testing - NIST',
      url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/circ/nbscircular41e3.pdf',
    },
    {
      name: 'Burn Test Chart for Fiber Identification - Fabric Mart',
      url: 'https://fabricmartfabrics.com/pages/burn-test-chart',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '长丝的法医科学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '燃烧试验是无需电子显微镜即可区分天然聚合物与合成聚合物的最快速、最精确的分析方法。通过将纤维暴露在热源下，其分子行为揭示了其起源：从植物纤维素到动物蛋白质或石油衍生物。',
    },
    {
      type: 'card',
      title: '纤维素纤维',
      icon: 'mdi:leaf',
      html: '<strong>棉</strong>和<strong>亚麻</strong>燃烧迅速且不熔化。由于源自木材或植物，它们闻起来像烧焦的纸，留下挥发性的灰色灰烬，一吹即散。',
    },
    {
      type: 'card',
      title: '蛋白质纤维',
      icon: 'mdi:sheep',
      html: '<strong>羊毛</strong>和<strong>丝绸</strong>会远离火焰。其特有的烧焦头发味表明存在硫和角蛋白。残留物是触之即碎的黑色珠子。',
    },
    {
      type: 'card',
      title: '合成纤维',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>聚酯纤维</strong>和<strong>尼龙</strong>本质上是塑料。它们熔化形成热滴，凝固成无法破碎的玻璃状珠子，散发出刺鼻的化学味。',
    },
    {
      type: 'title',
      text: '化学证据矩阵',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '精确的分析需要交叉验证至少三个证据。气味是识别混纺最可靠的指标：如果一种“亚麻”织物散发出轻微的塑料香味并留下坚硬的残留物，这表明其含有未声明的聚酯成分。',
    },
    {
      type: 'tip',
      title: '实验室安全协议',
      html: '<strong>关键通风：</strong>合成纤维在燃烧时会释放有毒气体。切勿在密闭空间进行此测试。<br><strong>立即灭火：</strong>务必在身边准备一容器水。某些合成纤维可能会熔化并粘在皮肤上。',
    },
  ],
  ui: {
    investigationLabel: '调查',
    stepPrefix: '步骤',
    stepCompleted: '分析完成',
    resetLabel: '重新开始',
    positiveId: '阳性识别',
    flameLabel: '火焰行为',
    odorLabel: '气味痕迹',
    residueLabel: '残留物',
    identifiedAs: '样品确认为',
    safetyTitle: '安全协议',
    safetyText:
      '请在通风良好的地方、耐火表面上进行此测试。使用金属镊子并准备好水。',
    questions: {
      flame: '在火焰中的反应？',
      odor: '特有气味？',
      residue: '最终残留物？',
      smoke: '烟雾类型？',
    },
    fiberData: {
      cotton: { name: '棉', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: '天然植物纤维，柔软透气。基础面料之王。' },
      linen: { name: '亚麻', icon: 'mdi:leaf', color: '#A7F3D0', description: '非常坚固的植物纤维，凉爽且具有特有的褶皱。' },
      wool: { name: '羊毛 / 羊绒', icon: 'mdi:sheep', color: '#FCD34D', description: '动物蛋白质纤维，优异的绝热体，具有弹性。' },
      silk: { name: '丝绸 (真丝)', icon: 'mdi:ticket-percent', color: '#F472B6', description: '动物长丝纤维。天然光泽，手感干爽。' },
      cashmere: { name: '山羊绒', icon: 'mdi:crown', color: '#F59E0B', description: '昂贵的克什米尔山羊纤维。极其柔软、轻盈、保暖。' },
      mohair: { name: '马海毛', icon: 'mdi:shimmer', color: '#14B8A6', description: '安哥拉山羊的“钻石纤维”。天然光泽，非常耐磨。' },
      angora: { name: '安哥拉兔毛', icon: 'mdi:rabbit', color: '#F9FAFB', description: '安哥拉兔的毛。以其蓬松的“光环”效果和极致轻盈著称。' },
      alpaca: { name: '阿尔パカ (羊驼毛)', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: '安第斯山的珍宝。中空纤维，保暖、防过敏、丝滑。' },
      polyester: { name: '聚酯纤维 (涤纶)', icon: 'mdi:oil', color: '#94A3B8', description: '石油基合成纤维。耐用、抗皱、不透气。' },
      nylon: { name: '尼龙 (锦纶)', icon: 'mdi:parachute', color: '#2DD4BF', description: '抗拉和耐磨性极强的合成纤维。' },
      acrylic: { name: '腈纶', icon: 'mdi:resize', color: '#450A0A', description: '人造羊毛合成纤维。柔软保暖，容易起球。' },
    },
    burnTestData: [
      { fiberId: 'cotton', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_soft },
      { fiberId: 'linen', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_shape },
      { fiberId: 'wool', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'silk', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'cashmere', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'mohair', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'angora', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'alpaca', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'polyester', flame: flame.synthetic, odor: odor.chemical_sweet, smoke: smoke.black, residue: residue.bead_hard },
      { fiberId: 'nylon', flame: flame.synthetic, odor: odor.vegetable, smoke: smoke.white_gray, residue: residue.bead_hard },
      { fiberId: 'acrylic', flame: flame.synthetic, odor: odor.chemical_fishy, smoke: smoke.black, residue: residue.bead_irregular },
    ],
  },
};
