import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'knitting-gauge-calculator';
const title = '編み物のゲージとテンション計算機';
const description =
  'あらゆる編み図の目数と段数を簡単に再計算します。モチーフの倍率やスケーリングファクターを調整して、プロのように仕上げましょう。';

const faqData = [
  {
    question: '編み物の「ゲージ（テンション）」とは何ですか？',
    answer:
      '特定の範囲（通常 10x10 cm）の中に、何目・何段入るかという指標のことです。使用する針や毛糸によって決まるため、完成品のサイズを左右する非常に重要な要素です。',
  },
  {
    question: 'ゲージが変わるとサイズにどう影響しますか？',
    answer:
      '自分のゲージが編み図よりも 1cm あたりの目数が多い場合、仕上がりは小さくなります。目数が少ない場合は大きくなります。そのため、目数を再計算するか、針の号数を変える必要があります。',
  },
  {
    question: '倍数（モチーフ）の調整が重要なのはなぜですか？',
    answer:
      '透かし編み、縄編みなどは、模様を完成させるために特定の目数（倍数）が必要です。この計算機は、デザインを崩さないように、最も近い倍数に合わせて合計目数を調整します。',
  },
  {
    question: '計測する前にスワッチ（試し編み）を洗うべきですか？',
    answer:
      'はい、必ずそうしてください。「ブロッキング（水通しして形を整える）」をすることで繊維が落ち着き、実際に着用・洗濯した後の正確なゲージを知ることができます。',
  },
];

const howToData = [
  {
    name: '編み図のゲージを確認',
    text: '編み図の指示にある、10x10cm または 4x4インチのスワッチに必要な目数と段数を確認します。',
  },
  {
    name: '自分のスワッチを編んで測る',
    text: '使う予定の毛糸と針で試し編みをし、ブロッキングをしてから、同じ範囲の中に何目・何段あるか測定します。',
  },
  {
    name: '計算機を設定',
    text: '編み図のデータと、実際に測った自分のデータを入力します。必要に応じて、サイズごとの合計目数や模様の倍数を追加します。',
  },
  {
    name: '結果を確認',
    text: '新しく作り目をする数とスケーリングファクターを確認します。丈の調整が必要かどうかも分かります。',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
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
      text: '編み物ゲージ計算機オンライン：技術ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '編み上げたセーターが巨人用のように見えたり、帽子が頭に全然入らなかったりした経験があるなら、<strong>ゲージ（テンション）</strong>がいかに重要かをご存知でしょう。編み物の世界では、ゲージは毛糸の太さ、針のサイズ、そして編み手それぞれの力加減の相関関係で決まります。同じ編み手は二人といません。そのため、全く同じゲージというのも存在しないのです。',
    },
    {
      type: 'title',
      text: 'なぜ編み物においてゲージはそれほど重要なのか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'この編み物ゲージ計算機は、数学的な推測を排除し、あなたがクリエイティブな作業に集中できるように設計されたテクニカルツールです。編み図のデータと自分のスワッチのデータを入力するだけで、目数と段数の正確な調整値が得られ、完成品が期待通りのサイズになることを保証します。',
    },
    {
      type: 'title',
      text: 'ゲージ計算機の使い方',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>スワッチを編む:</strong> 10x10cm ぴったりではなく、少なくとも 15x15cm は編むようにしましょう。端の部分が中央の正確な計測を妨げないようにするためです。',
        '<strong>ブロッキングをする:</strong> 完成品を扱うときと同じように、スワッチを水通しして乾かします。ウールなどの繊維は、濡れると伸びたり広がったりすることがよくあります。',
        '<strong>正確に測る:</strong> 硬い定規やゲージカウンターを使用します。水平方向に入る目数と、垂直方向に入る段数を数えます。',
        '<strong>データを入力する:</strong> 左側の列に編み図の値を、右側の列に自分の実際の値を入力します。ツールが、理想の幅にするために必要な目数を自動で再計算します。',
      ],
    },
    {
      type: 'title',
      text: '結果の解釈：スケーリングファクター',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'スケーリングファクターは、編み図の指示に適用する倍率です。自分のゲージが 22 目で、編み図が 20 目を求めている場合、ファクターは 1.1 になります。これは、同じ幅を得るために 10% 多くの目数が必要であることを意味します。0-2% の誤差は理想的、2-10% は許容範囲、10-25% は再計算が必須、25% 以上は構造的にリスクがあると考えられます。',
    },
    {
      type: 'title',
      text: '倍数とモチーフの扱い',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '編み図を再計算する際の最大の課題の一つは、透かし編みや縄編みなどの模様の整合性を保つことです。模様が 8 目ごとに繰り返される場合、単に 3 目追加するわけにはいきません。合計が 8 の倍数になるように調整する必要があります。この計算機の<strong>倍数調整機能</strong>は、デザインを尊重しつつ、最も近い適切な目数を提案します。',
    },
    {
      type: 'tip',
      title: 'エキスパートへのアドバイス',
      html: '<p>針のサイズを劇的に変えて無理にテンションを合わせるのではなく、この計算機を使って、自分の手の自然な力加減に合わせた目数に調整することをお勧めします。無理なテンション調整は、編み地の落ち感や柔らかさを損なう原因になるからです。</p>',
    },
    {
      type: 'title',
      text: '当ツールのメリット',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '正確なスケーリングファクターによる目数・段数の自動調整。',
        '模様の整合性を保つための、複雑な倍数（X + Y）への対応。',
        'プロジェクト全体に必要な毛糸の重さ（グラム）の推定。',
        '編み地の密度をリアルタイムで確認できる動的スワッチビジュアライザー。',
      ],
    },
    {
      type: 'card',
      title: 'ゲージ / テンション',
      icon: 'mdi:ruler',
      html: '<strong>10x10 cm</strong> または <strong>4x4 インチ</strong>の正方形の中に含まれる目数と段数。すべての編み図における世界共通の基準です。',
    },
    {
      type: 'card',
      title: 'ブロッキング',
      icon: 'mdi:water',
      html: '編み地を濡らして形を整え、目を落ち着かせるプロセス。着用・洗濯後の<strong>本当のゲージ</strong>を明らかにします。',
    },
    {
      type: 'card',
      title: 'スケーリングファクター',
      icon: 'mdi:scale',
      html: '編み図のゲージと編み手の実測ゲージの数学的な比率。<strong>正しいサイズ</strong>を維持するために調整すべき目数と段数を決定します。',
    },
  ],
  ui: {
    sectionOriginalGauge: '編み図のゲージ',
    sectionMyGauge: '現在の実測ゲージ',
    sectionProject: 'プロジェクト構造',
    labelStitches: '目数',
    labelRows: '段数',
    labelWidth: '幅',
    labelLength: '丈',
    labelUnit: '計測単位',
    labelNeedle: '使用針',
    labelNeedleMm: '針のサイズ (mm)',
    labelWeight: '重さ (g)',
    labelWeightOptional: '任意',
    labelPatternSts: '編み図の指定目数',
    labelPatternRows: '編み図の指定段数',
    labelMultiples: '倍数',
    labelMultiplesExample: '例: 10 + 2',
    labelMultiplesPlaceholder: '模様の倍数 + 端の目',
    unitEU: '10 x 10 cm (EU標準)',
    unitUS: '4 x 4 インチ (US標準)',
    btnClear: 'クリア',
    btnShare: '共有',
    btnCopied: 'コピーしました',
    resSuggestedSts: '推奨する作り目の数',
    resNewRows: '変更後の段数',
    resNewRowsTooltip: '指定の丈にするために必要な、現在のゲージでの段数です。',
    resScaleFactor: 'スケール比',
    resScaleFactorTooltip: '編み図とのサイズ比です。マイナスの値は、編み地が指定より詰まっていることを示します。',
    resSuggestion: 'アドバイス',
    resSuggestionTooltip: '一目ずつ計算し直さずにゲージを調整するための、技術的な推奨事項です。',
    suggestionIdeal: '理想的',
    suggestionDown: '針を細く',
    suggestionUp: '針を太く',
    suggestionDownDetail: '{n}mm またはそれ以下のサイズの針を使用してください。',
    suggestionUpDetail: '{n}mm またはそれ以上のサイズの針を使用してください。',
    multiplesNoteFormat: '{n} 目に調整済み (倍数 {m})',
    yarnTitle: '必要毛糸量の推定',
    yarnResultFormat: '推定使用量: <strong>{g}g</strong>',
    yarnSafetyFormat: '(予備 +{s}g 含む)',
    alertDanger: '差が大きすぎます（>25%）。編み地の質感や構造が大きく変わる可能性があります。',
  },
};
