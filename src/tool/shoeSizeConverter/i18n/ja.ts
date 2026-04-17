import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'shoe-size-converter';
const title = '靴サイズ計算・変換ツール';
const description = '米国 (US)、欧州 (EU)、英国 (UK)、およびセンチメートル (CM) の間で靴のサイズを変換します。メンズおよびレディース用の国際サイズガイド。';

const faqData = [
  {
    question: '米国の靴サイズ (US) はどうやって調べればよいですか？',
    answer: '男性用の場合、USサイズは通常、UKサイズより1つ大きい数値になります。女性用はスケールが異なります。最も正確な方法は、足をセンチメートルで計測し、当ツールの変換機能を使用して正確なUS番号を確認することです。',
  },
  {
    question: '英国 (UK) サイズと米国 (US) サイズの違いは何ですか？',
    answer: 'どちらも「インチ」に基づいたヤード・ポンド法を使用していますが、基準点が異なります。一般的に、メンズシューズではUKサイズ8がUSサイズ9に相当します。',
  },
  {
    question: 'CMサイズを知るために、どうやって足を測ればよいですか？',
    answer: 'かかとを壁に付け、最も長い指の先端に印を付け、その距離を測ります。このセンチメートル (CM) 単位の数値は、海外ブランドのスニーカーを購入する際、最も信頼できる指標となります。',
  },
];

const howToData = [
  {
    name: '性別を選択',
    text: 'メンズ（男性用）またはレディース（女性用）を選択してください。サイズ体系が異なります。',
  },
  {
    name: '地域（規格）を選択',
    text: '現在わかっているサイズ体系（EU、US、UK、または CM）を指定します。',
  },
  {
    name: 'サイズ（数値）を選択',
    text: 'セレクターを使用するか、欧州サイズの一覧表から直接クリックして選択します。',
  },
  {
    name: '変換結果を確認',
    text: '世界の他地域の対応するサイズが瞬時に表示されます。',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
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
      text: '靴サイズ変換ツール：国際サイズ比較・完全ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '海外のオンラインショップで靴を購入するのは、サイズ選びが難しい場合があります。この<strong>靴サイズ変換ツール</strong>は、不要な返品を避け、AmazonやAliExpress、あるいは専門のスポーツショップでの買い物を成功させるために不可欠なツールです。',
    },
    {
      type: 'title',
      text: '靴サイズの国際規格はどう決まっている？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '靴のサイズは世界で統一されていません。歴史的に各地域が、インチや「パリポイント」といった独自の測定単位に基づいてシステムを発展させてきたためです。',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU サイズ（欧州）:</strong> 2/3センチメートルに相当する「パリポイント」に基づいています。欧州大陸で最も一般的な体系です。</span>',
        '<span><strong>US サイズ（米国）:</strong> インチを使用し、男女で基準点が異なります。</span>',
        '<span><strong>UK サイズ（英国）:</strong> 米国と同じくヤード・ポンド法ですが、数値が米国より1つ小さくなるよう設定されています。</span>',
        '<span><strong>CM サイズ / モンドポイント:</strong> 最も正確な指標です。足の実際の長さをセンチメートルで直接表します。</span>',
      ],
    },
    {
      type: 'title',
      text: '正確なサイズを見つけるための足の測り方ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '変換ツールを使用する前に、自分の足の本当の長さを知ることが重要です。靴選びにおける基本は、かかとから一番長い指の先までの長さです。',
    },
    {
      type: 'tip',
      title: 'プロのアドバイス',
      html: '足の計測は一日の終わりに行ってください。足は活動や熱によってむくむ傾向があるため、朝の計測値で選ぶと、午後にはきつく感じてしまうことがあります。',
    },
    {
      type: 'title',
      text: 'ブランドによってサイズが微妙に異なる理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nikeでは27cmなのに、Adidasでは26.5cm（あるいは27.5cm）なのはなぜでしょうか？ ブランドはそれぞれ独自の「木型（ラスト）」を使用しているためです。スポーツブランドによっては小さめに作られていることもあり、通常より0.5cm大きめを選ぶのが正解な場合もあります。',
    },
  ],
  ui: {
    genderMenTitle: 'メンズ（男性用）',
    genderWomenTitle: 'レディース（女性用）',
    regionLabel: '現在のサイズ体系',
    regionEU: '欧州 (EU)',
    regionUS: '米国 (US)',
    regionUK: '英国 (UK)',
    regionCM: 'センチ (CM)',
    gridTitle: 'サイズを選択',
    gridDesc: 'クリックして国際サイズを確認',
    labelEU: '欧州 (EU)',
    labelUS: '米国 (US)',
    labelUK: '英国 (UK)',
    labelCM: 'モンドポイント',
    unitCM: 'cm',
    infoBannerHtml: '<strong>CM サイズ</strong>は足の物理的な長さを表します。海外ブランドのスニーカーを購入する際、最も間違いの少ない方法です。',
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
