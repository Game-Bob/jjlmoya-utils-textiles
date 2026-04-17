import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'knitting-needle-converter';
const title = '編み針・かぎ針サイズ変換ツール';
const description = 'メトリック（mm）、US、UKの各システム間で編み針のサイズを変換します。推奨糸やWPIの確認も可能です。';

const faqData = [
  {
    question: 'なぜ編み針のサイズシステムは複数あるのですか？',
    answer: '歴史的に、各国が独自にシステムを開発したためです。メトリック（mm）は最も正確な国際標準です。USシステムは0から50までの累進番号を使用し、UKシステムは逆番号を使用します（数字が大きいほど針は細くなります）。',
  },
  {
    question: 'USのシステムでは、かぎ針と棒針のサイズは同じですか？',
    answer: '正確には異なります。USのかぎ針には通常アルファベットが付随しており（例：H-8）、細いサイズでは独自のバリエーションがあります。また、レース糸用のスチール製かぎ針は全く異なる番号体系を使用しています。',
  },
  {
    question: 'パターンに記載されている正確なサイズがない場合、どの針を選べばよいですか？',
    answer: '例えばパターンで7.0mmが指定されており、手元に6.5mmと8.0mmしかない場合は、必ずゲージ（スワッチ）を編んで確認することを推奨します。0.5mmの差でも、作品の最終的なサイズが大幅に変わる可能性があります。',
  },
  {
    question: 'WPI（Wraps Per Inch）とは何ですか？',
    answer: '1インチ（2.54cm）の間に糸を何回巻き付けられるかという数値です。ラベルのない糸の太さを特定し、編むのに最適な針を決定するための最も信頼性の高い方法です。',
  },
];

const howToData = [
  {
    name: '編み方を選択',
    text: '棒針編み（knitting）かかぎ針編み（crochet）を選択して、USシステムでの正しい対応サイズを確認します。',
  },
  {
    name: 'ビジュアルセレクターでサイズを選択',
    text: '針のサイズに対応する円をクリックします。表示される穴は、ミリメートル数に対して実際の数学的比率で再現されています。',
  },
  {
    name: '対応サイズを確認',
    text: 'ミリメートル、USサイズ、UKサイズの変換結果をリアルタイムで確認できます。推奨される糸のカテゴリーやWPIも表示されます。',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '編み針・かぎ針テクニカルガイド：システム、口径、対応表',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'デジタルパターンの普及に伴い、<strong>メトリック（ミリメートル）法</strong>、<strong>米国標準（US）</strong>、<strong>英国帝国（UK）システム</strong>の違いを理解することが不可欠になっています。このツールは3つのシステム間を変換し、WPIメソッドによる推奨糸を提供します。',
    },
    {
      type: 'stats',
      items: [
        { value: 'オフライン', label: 'ネットなしで動作', icon: 'mdi:wifi-off' },
        { value: '3対応', label: '完全同期変換', icon: 'mdi:sync' },
        { value: 'WPI', label: '糸の太さ分析', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '国際的なシステム体系の複雑さ',
      level: 3,
    },
    {
      type: 'table',
      headers: ['システム', '計算基準', '主な使用地域', '技術的特徴'],
      rows: [
        ['<strong>メトリック (mm)</strong>', '正確な直径(mm)', 'ヨーロッパ / 国際', '最も信頼性の高いISO標準。0.25mmまたは0.50mm間隔。'],
        ['<strong>US (米国)</strong>', '累進番号', '北米', '0から50の数字を使用。かぎ針では数字にアルファベットが付きます（B-1, G-6等）。'],
        ['<strong>UK (英国)</strong>', '逆番号', '英国 / オーストラリア', 'ワイヤーゲージ（線の太さ）に基づく。数字が大きいほど針は細い（14は細、0は太）。'],
      ],
    },
    {
      type: 'title',
      text: 'WPIメソッドによる糸の特定',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / 極細 (18-22+ WPI):</strong> シルクやモヘアのレース編み用。1.5mmから2.5mmの針。',
        '<strong>Fingering / 合太・中細 (14-16 WPI):</strong> 靴下やベビー服の標準。2.75mmから3.25mmの針が最適。',
        '<strong>Sport / 中細 (12-14 WPI):</strong> やや細めの糸、軽いジャケットに最適。3.5mmから3.75mmの針。',
        '<strong>DK / 並太 (11-13 WPI):</strong> 市場で最も汎用性の高い太さ。4.0mmまたは4.5mmの針。',
        '<strong>Worsted / 極太 (9-10 WPI):</strong> 冬用セーター用の太い糸。5.0mmから5.5mmの針。',
        '<strong>Bulky / 超極太 (7-8 WPI):</strong> 早く編み上がる太いウール。6.0mmから8.0mmの針。',
        '<strong>Super Bulky / 超々極太 (5-6 WPI):</strong> インテリアやマフラー用の巨大な繊維。9.0mmから15.0mmの針。',
      ],
    },
    {
      type: 'tip',
      title: 'プロの予備知識：レース用スチールかぎ針',
      html: '<p>非常に細いマーセライズド・コットン糸を編むための針のファミリーが存在します。それが<strong>スチールかぎ針（Steel Hooks）</strong>です。その番号体系は特殊で逆順になっており、#14（0.6mm）のスチールかぎ針は#00（3.5mm）よりもはるかに細いです。これらの口径には標準の表を使用しないでください。</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: '最適な口径を選ぶためのチェックリスト',
      icon: 'mdi:check-circle-outline',
      badge: '技術検証',
      html: '<p>長期プロジェクトを開始する前に、以下のステップを確認してください：</p><ul><li><strong>個人の編み癖：</strong> 編み目がきつい方は0.5mm上げ、緩い方は0.5mm下げて調整します。</li><li><strong>針の材質：</strong> 滑りやすい糸には竹製を、摩擦のあるウールには金属製を使用します。</li><li><strong>繊維の種類：</strong> コットンは伸びにくく、メリノウールはブロッキング（水通し）で広がります。</li><li><strong>ゲージ確認：</strong> 10x10cmの正方形を編み、計測前に一度洗って乾かしてください。</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'メトリック法は世界共通であり、メーカー間の丸め誤差を防げます。',
          con: '古いパターンや歴史的な資料には、ミリメートル表記がないものが多いです。',
        },
        {
          pro: 'USシステムは、アメリカのパターンの標準サイズを覚えやすいです。',
          con: 'かぎ針のアルファベットは、ブランド間で必ずしも一貫していません。',
        },
        {
          pro: 'WPIシステムにより、ラベルのない糸を技術的かつプロフェッショナルに再利用できます。',
          con: '結果を誤らないために、非常に細心の注意を払った手動測定が必要です。',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: '実際の口径を確認するために、プロジェクト開始前に編む試し編み（10x10cm）のこと。' },
        { term: 'Hook Throat', definition: 'かぎ針の首（スロート）部分。その深さが、針が扱える糸の量を左右します。' },
        { term: 'Block Testing', definition: '編み地を湿らせて伸ばし、繊維を落ち着かせて最終的なサイズを確定させるプロセスのこと。' },
      ],
    },
    {
      type: 'summary',
      title: 'テキスタイルプロジェクト成功のための重要ポイント',
      items: [
        '正しい針の選択は、サイズだけでなく、摩擦に対する衣類の耐久性も左右します。',
        '当変換ツールを使えば、米国や英国の雑誌のパターンを数秒で検証できます。',
        '正確な一致がない場合は、自身のゲージに基づいて一つ上または下のサイズを選択してください。',
        'かぎ針編みは、同じ針を使用した棒針編みよりも約30%多くの糸を消費します。',
        '最適な滑りを維持するために、金属製の針は定期的に清掃してください。',
      ],
    },
  ],
  ui: {
    labelSystem: 'システム選択',
    modeKnitting: '棒針',
    modeCrochet: 'かぎ針',
    calibratorLabel: '精密キャリブレーター（実寸スケール）',
    calibratorDesc: '直径を選択すると対応サイズがリアルタイムで表示されます。表示される穴はミリメートルに対して実際の数学的比率に基づいています。',
    tagMetric: 'メトリック (mm)',
    tagUS: 'USシステム',
    tagUK: 'UKシステム',
    yarnLabel: '理想的な糸の太さ',
    wpiFormat: '{wpi} WPI (インチあたりの巻き数)',
    tableSectionLabel: '技術対応表カタログ',
    tableMetric: 'メトリック',
    tableUS: 'USサイズ',
    tableUK: 'UK / インペリアル',
    tableYarn: '糸カテゴリー',
  },
};
