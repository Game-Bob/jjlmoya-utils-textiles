import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'textile-burn-test';
const title = '繊維燃焼試験';
const description =
  '燃焼挙動を分析することで、あらゆる生地の本当の組成を特定します。綿、ウール、シルク、合成繊維を科学的に見分けます。';

const faqData = [
  {
    question: '自宅で燃焼試験を行っても安全ですか？',
    answer:
      'はい、細心の注意を払えば安全です。金属製のピンセットを使用し、耐火性の表面（セラミックや金属）の上で作業し、近くに水を用意して、換気の良い場所で試験を行ってください。1x1cm程度の小さなサンプルか、数本の糸があれば十分です。',
  },
  {
    question: '綿は燃えるとどんな臭いがしますか？',
    answer:
      '綿は純粋なセルロースです。燃えると、紙や乾いた葉が燃えるのとまったく同じ臭いがします。残った灰は灰色で非常に細かく、触れると崩れます。',
  },
  {
    question: '繊維の先端に硬い黒い粒ができるのは何を示していますか？',
    answer:
      'これは、ポリエステルやナイロンなどの合成繊維（プラスチック）の紛れもない兆候です。溶ける際、ポリマーが凝集してプラスチックの粒になり、天然繊維の灰とは異なり、崩れることはありません。',
  },
  {
    question: 'なぜウールは燃えると嫌な臭いがするのですか？',
    answer:
      'ウールとシルクは、硫黄を含む動物性タンパク質です。火に触れると、髪の毛や羽が燃えるような刺激臭を発します。これが植物繊維と見分ける最も簡単な方法です。',
  },
];

const howToData = [
  {
    name: '代表的なサンプルを抽出する',
    text: '生地から小さな正方形を切り取るか、さらに良いのは、経糸（垂直）と緯糸（水平）の両方から数本の糸を抜き取ります。',
  },
  {
    name: '炎への接近を観察する',
    text: '繊維を炎に触れさせずにゆっくりと近づけます。繊維が縮むか、溶けるか、あるいはすぐに発火するかを観察します。',
  },
  {
    name: '炎の種類と煙を分析する',
    text: '炎が安定しているか、自然に消えるか、そして煙が白か黒か、あるいは出ないかに注目します。',
  },
  {
    name: '残留物と臭いを評価する',
    text: '冷めたら、残った灰や粒に触れ、臭い（紙、髪、または化学薬品）を嗅いで、繊維の種類を確認します。',
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
  inLanguage: 'ja',
};

const flame = {
  cellulosic: '速く明るく燃える（黄色の炎）。溶けない。炎から離しても燃え続ける。',
  protein: 'ゆっくり燃え、パチパチ音を立て、炎から遠ざかるように縮む。炎から離すと自然に消える。',
  synthetic: '溶けて急速に収縮し、溶けたプラスチックのように滴り落ちる。すすの多い炎。',
};

const odor = {
  paper: '燃えた紙、木、乾いた葉。',
  hair: '燃えた髪の毛、燃えた角質、羽。',
  chemical_sweet: '芳香族化学臭（甘い、フルーティー）。',
  chemical_fishy: '酸っぱい化学臭（魚、焼肉）。',
  vegetable: '調理された野菜（セロリ）。',
};

const residue = {
  ash_soft: '細かい灰色/黒色の灰。柔らかく揮発性（触れると崩れる）。',
  ash_shape: '灰色の灰。繊維の形を維持する（もろい）。',
  bead_crushable: '中空/もろい黒色の塊（指で簡単に潰れる）。',
  bead_hard: '硬いガラス状の粒。指で割ることは不可能。',
  bead_irregular: '硬く不規則な黒色の塊。',
};

const smoke = {
  white_gray: '白 / 薄い灰色。',
  gray: '中程度の灰色。',
  black: '濃く暗い黒色。',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
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
      text: 'フィラメントの科学捜査',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '燃焼試験は、電子顕微鏡を使わずに天然ポリマーと合成ポリマーを区別するための、最も迅速かつ正確な分析方法です。繊維に熱を加えることで、その分子の挙動が、植物セルロースから動物性タンパク質、あるいは石油誘導体に至るまでの起源を明らかにします。',
    },
    {
      type: 'card',
      title: 'セルロース繊維',
      icon: 'mdi:leaf',
      html: '<strong>綿</strong>と<strong>リネン</strong>は、溶けずに素早く燃えます。木や植物に由来するため、燃えた紙のような臭いがし、吹けば飛ぶような揮発性の灰色の灰が残ります。',
    },
    {
      type: 'card',
      title: 'タンパク質繊維',
      icon: 'mdi:sheep',
      html: '<strong>ウール</strong>と<strong>シルク</strong>は炎から遠ざかります。特有の髪の毛が燃えたような臭いは、硫黄とケラチンの存在を示しています。残留物は、触れると潰れる黒い粒です。',
    },
    {
      type: 'card',
      title: '合成繊維',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>ポリエステル</strong>と<strong>ナイロン</strong>は、本質的にプラスチックです。溶けて熱い滴になり、割ることが不可能なガラス状の粒に固まります。刺激的な化学臭がします。',
    },
    {
      type: 'title',
      text: '化学的証拠マトリックス',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '正確な分析には、少なくとも3つの証拠をクロスチェックする必要があります。臭いは混紡素材を特定するための最も信頼できる指標です。もし「リネン」生地からわずかなプラスチックの香りがし、硬い残留物が残るなら、それは未申告のポリエステル混紡であることを示しています。',
    },
    {
      type: 'tip',
      title: 'ラボ安全プロトコル',
      html: '<strong>換気が重要：</strong>合成繊維は燃焼時に有毒ガスを放出します。閉め切った場所でこの試験を行わないでください。<br><strong>直ちに消火：</strong>常に近くに水の入った容器を用意してください。合成繊維の中には、溶けて皮膚に付着するものがあります。',
    },
  ],
  ui: {
    investigationLabel: '調査',
    stepPrefix: 'ステップ',
    stepCompleted: '分析完了',
    resetLabel: '再スタート',
    positiveId: '陽性特定',
    flameLabel: '炎の挙動',
    odorLabel: '臭いの痕跡',
    residueLabel: '残留物',
    identifiedAs: 'サンプルは以下のものと陽性に特定されました：',
    safetyTitle: '安全プロトコル',
    safetyText:
      'この試験は、換気の良い場所で耐火性の表面 の上で行ってください。金属製のピンセットを使用し、近くに水を用意してください。',
    questions: {
      flame: '炎の中での挙動は？',
      odor: '特有の臭いは？',
      residue: '最終的な残留物は？',
      smoke: '煙の種類は？',
    },
    fiberData: {
      cotton: { name: '綿 (コットン)', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: '天然植物繊維。柔らかく通気性に優れる。基本素材の王様。' },
      linen: { name: 'リネン', icon: 'mdi:leaf', color: '#A7F3D0', description: '非常に強い植物繊維。涼しく、特有のシワ感がある。' },
      wool: { name: 'ウール / メリノ', icon: 'mdi:sheep', color: '#FCD34D', description: '動物性タンパク質繊維。優れた断熱性と弾力性。' },
      silk: { name: 'シルク (絹)', icon: 'mdi:ticket-percent', color: '#F472B6', description: '動物性長繊維。自然な光沢とドライな質感。' },
      cashmere: { name: 'カシミヤ', icon: 'mdi:crown', color: '#F59E0B', description: 'カシミヤ山羊の高級繊維。非常に柔らかく、軽く、暖かい。' },
      mohair: { name: 'モヘア', icon: 'mdi:shimmer', color: '#14B8A6', description: 'アンゴラ山羊の「ダイヤモンド繊維」。自然な光沢があり、非常に丈夫。' },
      angora: { name: 'アンゴラ', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'アンゴラうさぎの毛。ふわふわした「ハロー」効果と究極の軽さで知られる。' },
      alpaca: { name: 'アルパカ', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'アンデスの宝。中空構造で保温性が高く、低刺激でしなやかな繊維。' },
      polyester: { name: 'ポリエステル', icon: 'mdi:oil', color: '#94A3B8', description: '石油由来の合成繊維。丈夫でシワになりにくく、通気性は低い。' },
      nylon: { name: 'ナイロン (ポリアミド)', icon: 'mdi:parachute', color: '#2DD4BF', description: '引っ張りや摩擦に非常に強い合成繊維。' },
      acrylic: { name: 'アクリル', icon: 'mdi:resize', color: '#450A0A', description: 'ウールに似せた合成繊維。柔らかく暖かいが、毛玉ができやすい。' },
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
