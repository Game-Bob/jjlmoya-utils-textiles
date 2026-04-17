import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'fiber-preparation-natural-dyeing';
const title = '染色のための繊維の下準備';
const description =
  '天然染色の前に、ウール、シルク、コットンを準備するための WOF 計算機、媒染プロトコル、および昇温スケジュール。';

const faqData = [
  {
    question: 'WOF (Weight of Fiber) とは何ですか？',
    answer:
      'WOF は、必要な染料や媒染剤の量を計算するための標準的なシステムです。繊維の乾燥重量に基づいています。例えば、100g のウールに対してタマネギの皮 100% WOF とは、100g のタマネギの皮が必要であることを意味します。',
  },
  {
    question: 'なぜ媒染が必要なのですか？',
    answer:
      '媒染剤（ミョウバンなど）は、繊維と天然染料の間の化学的な橋渡しの役割を果たします。媒染なしでは、ほとんどの染料は定着せず、最初の洗濯で流れ落ちてしまいます（耐光性や摩擦堅牢度が低くなります）。',
  },
  {
    question: '動物性繊維と植物性繊維の下準備の違いは何ですか？',
    answer:
      '動物性繊維（ウールなどのタンパク質繊維）は、ミョウバンのみで非常によく染まります。植物性繊維（コットンやリネンなどのセルロース繊維）は、金属媒染剤を受け入れやすくするために、事前にタンニンで処理する工程が必要です。',
  },
  {
    question: '染色のにおける昇温スケジュール（サーマルランプ）とは何ですか？',
    answer:
      '染浴の温度を段階的に（毎分約 1〜2℃）上げていくことです。急激な温度変化による熱ショックを避けるために非常に重要です。特にウールは、急激な温度変化でフェルト化（硬く縮む）してしまうことがあります。',
  },
];

const howToData = [
  {
    name: '精錬と洗浄',
    text: '媒染剤が均一に浸透するのを妨げる油分、ワックス、または工業用糊を取り除くために、中性洗剤で繊維を洗います。',
  },
  {
    name: '乾燥重量の測定',
    text: '乾燥した状態の重量を正確に測定します。この値がすべての WOF（Weight of Fiber）計算の基準となります。',
  },
  {
    name: '計算と媒染浴',
    text: '媒染剤（例：15% WOF の生ミョウバン）をお湯に溶かし、繊維を浸します。プロトコルに従って温度を一定に保ちます。',
  },
  {
    name: '熟成とすすぎ',
    text: '媒染した繊維を（できれば 24 時間）休ませ、金属を芯まで定着させてから、最終的な染色の工程に進みます。',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Artista Textil y Tintes Naturales',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '媒染の背後にある科学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '染色に向けて繊維を準備することは、単に洗うことではありません。それは分子レベルでの化学プロセスであり、「媒染」と呼ばれます。この言葉はラテン語の <i>mordere</i>（噛む）に由来し、その役割は繊維と染料の間の化学的な架け橋となることです。この架け橋がなければ、ほとんどの天然染料は最初のすすぎで流れ落ちてしまいます。',
    },
    {
      type: 'card',
      title: '重要なコンセプト',
      icon: 'mdi:molecule',
      html: '媒染剤は、繊維のポリマーと染料の両方に同時に結びつくことができる「手（原子価）」を持っています。',
    },
    {
      type: 'title',
      text: '繊維による違い',
      level: 2,
    },
    {
      type: 'card',
      title: 'タンパク質繊維：ウールとシルク',
      icon: 'mdi:sheep',
      html: 'これらの繊維はアミノ酸鎖で構成されており、金属に対して非常に高い親和性を持っています。熱によって繊維の鱗（スケール）が開き、ミョウバンが深く浸透します。柔らかさを保つための酸性 pH を維持するために、<strong>酒石英（クリーム・オブ・ターター）</strong>の使用が不可欠です。',
    },
    {
      type: 'card',
      title: 'セルロース繊維：コットンとリネン',
      icon: 'mdi:leaf',
      html: 'セルロースには、結合しやすい箇所が少ありません。そのため、<strong>2 段階プロトコル</strong>を使用します。まずタンニンをセルロースに付着させ、次にミョウバンをそのタンニンに付着させます。この前処理なしでは、色は薄くなり、堅牢度も低くなります。',
    },
    {
      type: 'title',
      text: '染浴の管理：WOF、温度、pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'プロフェッショナルで再現性のある結果を得るためには、<strong>WOF (Weight of Fabric)</strong> の概念が基本となります。すべては繊維の乾燥重量に対するパーセンテージとして測定されます。媒染剤が過剰だと繊維が飽和し、手触りが悪くなったり、金属の沈着によって最終的な色が変わったりすることがあります。',
    },
    {
      type: 'tip',
      title: '昇温スケジュール',
      html: '熱は触媒として働き、化学反応を促進します。しかし、ウールの急激な温度変化は、繊維の鱗が互いに永久に引っかかり合う原因となり、フェルト化や縮みを引き起こします。',
    },
    {
      type: 'tip',
      title: 'pH 要因',
      html: '多くの天然染料は、生きた pH 指示薬です。pH は塩の溶解度や繊維の保存状態に影響します。シルクは、染浴がアルカリ性に寄りすぎると光沢を失うことがあります。クエン酸や炭酸カルシウムで pH を調整することが非常に重要です。',
    },
    {
      type: 'title',
      text: '物質と安全性',
      level: 2,
    },
    {
      type: 'card',
      title: '生ミョウバン',
      icon: 'mdi:bottle-tonic-skull',
      html: '汎用性の高い媒染剤で、無色で非常に効果的です。タンパク質繊維の基準となる薬剤です。',
    },
    {
      type: 'card',
      title: '酒石英（クリーム・オブ・ターター）',
      icon: 'mdi:spoon-sugar',
      html: '動物性繊維の定着と柔らかさを向上させる助剤です。pH を酸性に保ちます。',
    },
    {
      type: 'tip',
      title: '安全プロトコル',
      html: '染色のための鍋は専用のものを用意し、食品には絶対に使用しないでください。<br>粉末の媒染剤を扱う際は、手袋とマスクを着用してください。<br>蒸気がこもらないよう、常に換気を確保してください。',
    },
  ],
  ui: {
    profileTitle: 'プロファイルの選択',
    profileDesc: '化学プロトコルは繊維の分子の由来によって分けられます',
    proteinTitle: 'タンパク質繊維',
    proteinOrigin: '動物由来',
    proteinDesc: 'ウール、シルク、アルパカ、モヘア、カシミヤなど。温度管理と酸性 pH が必要です。',
    cellulosicTitle: 'セルロース繊維',
    cellulosicOrigin: '植物由来',
    cellulosicDesc: 'コットン、リネン、ヘンプ、ジュートなど。色素を定着させるためにタンニンによる事前媒染が必要です。',
    wofTitle: 'WOF 計算機',
    weightLabel: '乾燥時の重量 (g)',
    weightUnit: 'g',
    wofEmptyMsg: '計算を有効にするにはプロファイルを選択してください',
    alumLabel: 'ミョウバン',
    cremLabel: '酒石英',
    ironLabel: '鉄（注意）',
    rampTitle: '昇温スケジュール',
    rampEmptyTitle: '選択待ち',
    rampEmptyDesc: '繊維を選択して温度サイクルを表示します',
    phTitle: 'pH 安定剤',
    phDesc: '色の彩度に関わる重要な要因',
    phVolumeLabel: '液量 (L)',
    phSliderLabel: '現在の pH',
    phAcidLabel: '酸性 (1)',
    phAlkalineLabel: 'アルカリ性 (14)',
    phEmptyMsg: '安定剤を有効にするにはプロファイルを選択してください',
    phStrings: {
      optimal: '最適な pH',
      raisePrefix: '炭酸カルシウムまたはソーダ灰を追加してください。約',
      raiseSuffix: 'g で目標の pH に',
      lowerPrefix: 'クエン酸または酢を追加してください。約',
      lowerSuffix: 'ml で目標の pH に',
    },
    proteinFibers: [
      { id: 'wool', name: 'ウール / メリノ', icon: 'mdi:sheep' },
      { id: 'silk', name: 'シルク', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'カシミヤ', icon: 'mdi:crown' },
      { id: 'mohair', name: 'モヘア', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'アンゴラ', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'アルパカ', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'コットン', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'リネン', icon: 'mdi:leaf' },
    ],
  },
};
