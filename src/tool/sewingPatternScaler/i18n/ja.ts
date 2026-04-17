import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'sewing-pattern-scaler';
const title = 'オンライン型紙サイズ調整（グレーディング）ツール';
const description = 'お手持ちの型紙をご自身の実際のサイズに合わせて調整します。差分計算と更新後の型紙プレビュー機能を備えたスケーリングシミュレーター。';

const faqData = [
  {
    question: 'なぜ肩幅は胸囲と同じ比率で大きくならないのですか？',
    answer: '人体は単純な球体ではないからです。胴体のボリュームが大幅に変わる一方で、骨格や関節（肩など）は比較的サイズが固定されています。プロのグレーディングでは、服のバランスを崩さないよう、部位ごとに異なる係数を適用します。',
  },
  {
    question: '「ゆとり（イーズ）」とは何ですか？',
    answer: 'イーズとは、体と布の間の余白のことです。ゆとりがなければ、体を動かすことができません。当ツールではこのゆとりを維持し、デザイナーが意図したシルエットを保ちながら、お客様の体型にピッタリ合うよう調整します。',
  },
  {
    question: 'ニットやジャージー用の型紙もスケーリングできますか？',
    answer: 'はい。ただし、収縮性のある生地（ストレッチ素材）は「マイナスのゆとり（負のイーズ）」を持つことが多い点に注意してください。非常にタイトなパターンの場合は、新しい生地の伸縮率が元の生地と同じであることを確認してください。',
  },
];

const howToData = [
  {
    name: 'パターンを計測',
    text: '元の型紙（紙の状態）の主要な水平ライン（バスト、ウエスト、ヒップ）を、縫い目から縫い目まで測ります。',
  },
  {
    name: '元の値を設定',
    text: '計ったサイズ、または型紙の号数をツールの「元のサイズ（Origin）」列に入力します。',
  },
  {
    name: '目標値を入力',
    text: 'ご自身の実際のサイズ、または作成したいサイズを入力します。ツールが各部位の正確な差分を算出します。',
  },
  {
    name: '裁断台で反映',
    text: '「裁断作業指示」に従って、パターンの脇や裾のセンチ数を増やしたり減らしたりして調整します。',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
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
      text: '型紙サイズの補正・調整（スケーリング）：技術と実践ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '型紙の<strong>スケーリング（グレーディング）</strong>は、服作りにおいて最も重要なスキルの一つです。単に図面を比例させて拡大・縮小するのではなく、二次元の構造を、直線的には成長しない複雑な人体の曲線や比率に適応させる作業です。',
    },
    {
      type: 'stats',
      items: [
        { value: 'オフライン', label: 'ブラウザで計算', icon: 'mdi:calculator' },
        { value: '部位別', label: '比例スケーリング', icon: 'mdi:resize' },
        { value: '100%', label: '安全・非公開', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '「型紙スケーリング」とは正確には何ですか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'スケーリング（グレーディング）とは、基本となるパターンを拡大または縮小し、異なるサイズのシリーズを作成する技術的プロセスのことです。単純なズームとは異なり、体の一部が他よりも大きく変化することを考慮します。例えば、肩幅や着丈の変化よりも、バスト周りの変化の方がサイズ間で大きくなるのが一般的です。',
    },
    {
      type: 'title',
      text: '成功の秘訣：ゆとり（イーズ / Ease）',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>運動ゆとり：</strong> 呼吸、着席、腕の動きなどを妨げず、生地が破れないために必要な余分のセンチメートル。',
        '<strong>デザインゆとり：</strong> 特徴的なシルエット（オーバーサイズコートやふんわりしたブラウスなど）を作るためにデザイナーが付加したセンチメートル。',
      ],
    },
    {
      type: 'title',
      text: '水平スケーリング vs 垂直スケーリング',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>水平軸（周り）：</strong> バスト、ウエスト、ヒップ。最も調整が必要な部分。各パーツを4分の1に分割して計算します。',
        '<strong>垂直軸（丈）：</strong> 前丈、後ろ丈、総丈。ダーツの位置やウエストラインに影響します。隣接するサイズ間の変化は比較的小さいです。',
      ],
    },
    {
      type: 'title',
      text: 'パターンスケーラーの使い方',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>型紙を測る：</strong> 紙のパーツを用意し、バスト、ウエスト、ヒップのラインを端から端まで測ります。',
        '<strong>元の数値を入力：</strong> ツールの左側の列に計測値を入力し、その型紙が何号サイズかを選択します。',
        '<strong>目標値を入力：</strong> 右側の列に、ご自身の実際のサイズ、または目標のサイズを入力します。',
        '<strong>結果を解釈：</strong> ツールが各部位で何センチ追加したり削ったりすべきかを表示します。',
      ],
    },
    {
      type: 'tip',
      title: 'プロの補正アドバイス',
      html: '<p><strong>3サイズ以上の差がある調整は避けましょう：</strong> 9号から17号へ調整しようとすると、袖ぐり（アームホール）が歪んだり、襟ぐりが極端に大きくなったりする可能性が高いです。その場合は、ご自身のサイズで基礎パターン（原型）から引き直すことをお勧めします。</p>',
    },
    {
      type: 'title',
      text: 'デジタルスケーリングのメリット',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'オリジナルデザインの正確な比率を維持できます。',
          con: '袖ぐりのラインなどは、手作業で微調整（なじませ）が必要な場合があります。',
        },
        {
          pro: '必要な「ゆとり」を瞬時に算出可能です。',
          con: '型紙に縫い代が含まれているかどうかは自動判別されません。',
        },
        {
          pro: 'パーツの拡大・縮小を視覚的なグラフィックで確認できます。',
          con: '正確な初期計測が必要となります。',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'ディファレンシャル', definition: '隣接する2つのサイズ間の寸法の差。' },
        { term: 'アンカーポイント', definition: '型紙の中で動かさない基準点（通常は前中心や後ろ中心）。' },
        { term: 'グレーディングネス', definition: 'スケーリングされた全サイズを重ね合わせた図。' },
        { term: '原型（マスターパターン）', definition: 'デザインやゆとりがない、体の寸法にぴったりの基本テンプレート。' },
      ],
    },
  ],
  ui: {
    labelSystem: 'システム選択',
    modeStandard: '標準サイズ',
    modeCustom: '実際のサイズ入力',
    labelPatternSize: '型紙サイズ',
    labelTargetSize: '目標サイズ',
    labelOriginMeasures: '元の計測値',
    labelTargetMeasures: 'ご自身のサイズ',
    labelEase: '現在のゆとり (Ease)',
    labelChest: 'バスト',
    labelWaist: 'ウエスト',
    labelHips: 'ヒップ',
    labelLength: '着丈',
    resBust: 'バスト',
    resWaist: 'ウエスト',
    resHips: 'ヒップ',
    resLength: '着丈',
    actionLatAdd: '増やす',
    actionLatRemove: '削る',
    actionLatSuffix: '（パーツの脇で調整）',
    actionLatNote: '※パターン4分の1あたりの調整量',
    actionLenExtend: '丈を伸ばす',
    actionLenShorten: '丈を詰める',
    actionLenNote: '裾ラインでの調整',
    legendOriginal: '元の型紙',
    legendUpdated: '補正後',
    warnText: '3サイズ以上のスケーリングです。アームホールの歪みに注意してください。',
    sizePrefix: '号',
  },
};
