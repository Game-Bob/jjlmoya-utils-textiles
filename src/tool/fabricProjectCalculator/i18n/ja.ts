import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'fabric-project-calculator';
const title = 'アイテム別生地必要量計算機';
const description =
  'スカート、パンツ、ドレス、シャツを縫うために必要な生地の量を簡単に計算します。生地幅やサイズに合わせて、プロ仕様の裁断プランを提案します。';

const faqData = [
  {
    question: 'スカートにはどのくらいの生地が必要ですか？',
    answer:
      '生地幅によって異なります。140〜150cm幅の生地でタイトスカートを作る場合、通常1.20メートルで十分です。90〜110cm幅の場合は、2.00メートル必要になります。',
  },
  {
    question: '生地幅は必要量にどのように影響しますか？',
    answer:
      '生地幅が狭いと、型紙のパーツを横に並べて配置できないため、パーツを縦に並べる必要があり、通常は2倍の長さが必要になります。',
  },
  {
    question: '生地は多めに買ったほうがいいですか？',
    answer:
      'はい、洗濯による縮みや織りキズ、予期せぬ縫い代などを考慮して、10%（約20cm）程度の余裕を持つことが推奨されます。',
  },
  {
    question: '地の目（布目）とは何ですか？',
    answer:
      '生地の耳に対して平行な方向のことです。着用時に型崩れを防ぐために、型紙はこの地の目に沿って配置する必要があります。',
  },
];

const howToData = [
  {
    name: 'アイテムの種類を選択',
    text: '製作するモデル（スカート、パンツなど）を選択して、基本の必要量テーブルを読み込みます。',
  },
  {
    name: '生地幅を入力',
    text: '購入予定の生地の耳から耳までの幅（90、115、140、150cm）を測定します。',
  },
  {
    name: 'サイズを選択',
    text: 'サイズ（XS-S、M-L、XL-XXL）に合わせてボリュームを調整し、乗数を再計算します。',
  },
  {
    name: '合計メーター数を確認',
    text: '縫い代を含めた最終的な結果を確認し、ショップで注文する正確な量を把握します。',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
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
      text: '洋裁用生地必要量計算機：コンシュームガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ソーイングにおいて最も多い悩みの一つが、特定のプロジェクトのためにどれくらいの生地を買えばいいかを判断することです。生地の必要量は、アイテムのデザイン、個人のサイズ、そして何よりも生地の幅（通常90cm〜150cm）という3つの要素によって大きく変わります。この計算機は、買いすぎや裁断途中の生地不足を防ぐために、計算を体系化しています。',
    },
    {
      type: 'title',
      text: 'ドレスやパンツにはどれくらいの生地が必要ですか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '伝統的な計算方法は、着丈に袖丈を加え、見返しや裾の余裕を持たせるというものです。しかし、生地幅が狭い（90〜110cm）場合、パーツを横に並べることができず、2倍の長さを購入する必要があります。当ツールは、繊維業界の標準に従って、これらのバリエーションを自動的に計算に入れます。',
    },
    {
      type: 'title',
      text: '生地幅別の推定必要量（サイズM-Lの場合）',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>タイトスカート:</strong> 90cm幅で2.00m ・ 140/150cm幅で1.20m',
        '<strong>ロングパンツ:</strong> 90cm幅で2.50m ・ 140/150cm幅で1.50m',
        '<strong>長袖シャツ:</strong> 90cm幅で2.20m ・ 140/150cm幅で1.40m',
        '<strong>ベーシックドレス:</strong> 90cm幅で3.50m ・ 140/150cm幅で2.20m',
      ],
    },
    {
      type: 'title',
      text: '生地必要量に影響を与える要因',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>柄の方向（リピート）:</strong> 生地に向きのある柄やチェック柄（柄合わせが必要なもの）がある場合、材料を15%から20%余分に用意する必要があります。',
        '<strong>裁断の向き（バイアス）:</strong> バイアス裁断やサーキュラースカート（全円スカート）などは、角度による無駄が多く出るため、大幅に多くの生地を消費します。',
        '<strong>毛並みの向き:</strong> ベルベットやコーデュロイのような生地では、すべてのパーツを同じ方向に裁断する必要があり、パズルのような効率的な配置が制限されます。',
        '<strong>縮み:</strong> 多くの天然繊維（綿、リネン、ウール）は最初の洗濯で縮みます。裁断前に水通しをすることが不可欠です。',
      ],
    },
    {
      type: 'tip',
      title: '仕立て屋のヒント',
      html: '<p>大きな柄やチェック柄（格子）を使用する場合は、標準の寸法だけに頼らないでください。計算された合計メーター数に、必ず柄の1リピート分（ラポール）を加えて、脇の縫い目で柄が合うように調整してください。</p>',
    },
    {
      type: 'title',
      text: 'この計算機のメリットと注意点',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'サイズ調整可能な、複数の生地幅に対応した即時計算。',
        'カスタマイズ可能な縫い代の見積もりを含む。',
        '生地上のパーツ配置（マーキング）の視覚的なガイド。',
        '実際の型紙配置の代わりにはなりません。プラスサイズの場合は、手動での追加調整が必要になる場合があります。',
      ],
    },
    {
      type: 'card',
      title: '生地幅',
      icon: 'mdi:arrow-expand-horizontal',
      html: '生地の<strong>耳から耳まで</strong>の横方向の寸法です。型紙のパーツを並べて配置できるか、縦に並べる必要があるかを決定します。',
    },
    {
      type: 'card',
      title: '縫い代',
      icon: 'mdi:tape-measure',
      html: '型紙の端から<strong>出来上がり線（縫い目）</strong>までの距離です。衣料品の場合、標準的な値は1.5cmです。',
    },
    {
      type: 'card',
      title: '耳（セルビッジ）',
      icon: 'mdi:content-cut',
      html: '生地の両端にある、<strong>ほつれない</strong>補強された部分です。地の目の方向を示し、裁断の基準となります。',
    },
  ],
  ui: {
    sectionProject: 'プロジェクト',
    sectionMaterial: '材料',
    labelGarmentType: 'アイテムの種類',
    labelSize: 'サイズ',
    labelFabricWidth: '生地幅 (cm)',
    labelSeamAllowance: '縫い代 (cm)',
    garmentSkirt: 'スカート (タイト/Aライン)',
    garmentPants: 'パンツ',
    garmentDress: 'ドレス',
    garmentShirt: 'シャツ / ブラウス',
    garmentCoat: 'コート / ジャケット',
    garmentTote: 'トートバッグ',
    garmentMerceria: {
      skirt: '20cmファスナーx1、ボタンx1',
      pants: '20cmファスナーx1、ボタンx1、芯地30cm',
      dress: '60cmファスナーx1、芯地50cm',
      shirt: 'ボタンx7、薄手芯地1m',
      coat: '大きめボタンx3、芯地1.5m、裏地',
      tote: '持ち手用テープ2m',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (小幅/シングル)',
    width115: '115 cm (パッチワーク/US)',
    width140: '140 cm (EU標準)',
    width150: '150 cm (広幅/インテリア)',
    btnClear: 'リセット',
    btnShare: '共有',
    btnCopied: 'コピーしました',
    btnCopyList: 'リストをコピー',
    resultLabel: '必要な量:',
    resultUnit: 'メートル',
    shopAdviceFormat: 'ショップで「{m}m」と注文してください',
    boardEmpty: 'アイテムを選択して配置図を表示',
    boardDescFormat: '幅: {w}cm | 長さ: {m}m',
    merchTitle: '手芸用品と副資材',
    checklistThread: '対応するミシン糸',
    warningSerialFormat: '{w}cm幅の生地では、このサイズのパーツを横に並べられません。縦に並べる裁断プランに変更しました。',
    foldLabel: '⊟ わ（折り目）',
    pieceNames: {
      front: '前身頃',
      back: '後身頃',
      waistband: 'ウエストバンド',
      waistbelt: 'ベルト',
      sleeve: '袖',
      collar: '襟',
      cuffs: 'カフス',
      facings: '見返し',
      lapels: 'ラペル',
      pocket: 'ポケット',
      body: '本体',
      handleA: '持ち手A',
      handleB: '持ち手B',
    },
  },
};
