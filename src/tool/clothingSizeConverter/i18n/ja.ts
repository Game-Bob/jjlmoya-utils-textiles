import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'clothing-size-converter';
const title = '海外・国内服サイズ換算ツール';
const description =
  'EU、US、UK、ITの各システム間で服のサイズを換算します。メンズ、レディース、ユニセックスのTシャツ、パンツ、ワンピース、ジャケットに対応。サイズガイドとブランド別推奨付き。';

const faqData = [
  {
    question: 'EUサイズとUSサイズの服の違いは何ですか？',
    answer:
      '欧州（EU）サイズはアルファベット（XS-XXL）や連続した数字（32-52）を使用しますが、米国（US）サイズはアルファベットやパンツ用の特定の数字を使用します。一般的に、女性用ではEU36サイズがUS4サイズに相当します。',
  },
  {
    question: 'メンズとレディースでサイズは変わりますか？',
    answer:
      'はい、大きく異なります。同じ国であっても、メンズの40サイズとレディースの40サイズは同じではありません。男性は肩幅が広いなど体型が異なるため、サイズの算出方法が異なります。',
  },
  {
    question: '特定のブランドでサイズを上げるべきか下げるべきか、どうすれば分かりますか？',
    answer:
      '他の顧客のレビューを確認するのが一番です。「小さめだった」「作りが大きい」といった言葉は非常に役立ちます。また、そのブランドの具体的なサイズ表も参照してください。',
  },
  {
    question: 'このサイズ換算表は正確ですか？',
    answer:
      '換算表はあくまで目安です。一般的には正確ですが、ブランドごとに独自の仕様があります。購入前に必ず特定のショップのサイズ表を確認してください。',
  },
  {
    question: '洗濯後に衣類は縮みますか？',
    answer:
      '素材によります。綿100%の場合、お湯で洗って乾燥機にかけると5〜10%縮むことがあります。合成素材は形を維持しやすいです。常に洗濯表示を確認してください。',
  },
];

const howToData = [
  {
    name: 'アイテムと性別を選択',
    text: '衣類の種類（Tシャツ、パンツ、ワンピース、ジャケット）と性別を選択します。',
  },
  {
    name: 'サイズ体系を選択',
    text: '使い慣れたサイズ体系（EU、US、UK、IT、または日本サイズに相当するもの）を選択します。',
  },
  {
    name: 'サイズを選択',
    text: '選択メニューでサイズを選ぶか、グリッドをクリックします。瞬時に他の体系との対応が表示されます。',
  },
  {
    name: 'ブランドガイドを確認',
    text: 'そのブランドのサイズ感が小さめか、標準か、あるいは大きいかを確認して調整します。',
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

const shirtsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '44' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '46' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '42' },
  ],
  unisex: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '34' },
    { EU: 'S', US: 'S', UK: 'S', IT: '36' },
    { EU: 'M', US: 'M', UK: 'M', IT: '38' },
    { EU: 'L', US: 'L', UK: 'L', IT: '40' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '42' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '44' },
  ],
};

const pantsData = {
  men: [
    { EU: '30', US: '30', UK: '30', IT: '44' },
    { EU: '32', US: '32', UK: '32', IT: '46' },
    { EU: '34', US: '34', UK: '34', IT: '48' },
    { EU: '36', US: '36', UK: '36', IT: '50' },
    { EU: '38', US: '38', UK: '38', IT: '52' },
    { EU: '40', US: '40', UK: '40', IT: '54' },
  ],
  women: [
    { EU: '32', US: '0', UK: '4', IT: '36' },
    { EU: '34', US: '2', UK: '6', IT: '38' },
    { EU: '36', US: '4', UK: '8', IT: '40' },
    { EU: '38', US: '6', UK: '10', IT: '42' },
    { EU: '40', US: '8', UK: '12', IT: '44' },
    { EU: '42', US: '10', UK: '14', IT: '46' },
  ],
  unisex: [],
};

const dressesData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
  ],
  women: [
    { EU: 'XS', US: '0-2', UK: '4-6', IT: '32-34' },
    { EU: 'S', US: '4-6', UK: '8-10', IT: '36-38' },
    { EU: 'M', US: '8-10', UK: '12-14', IT: '40-42' },
    { EU: 'L', US: '12-14', UK: '16-18', IT: '44-46' },
    { EU: 'XL', US: '16-18', UK: '20-22', IT: '48-50' },
  ],
  unisex: [],
};

const jacketsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '44' },
    { EU: 'S', US: 'S', UK: 'S', IT: '46' },
    { EU: 'M', US: 'M', UK: 'M', IT: '48' },
    { EU: 'L', US: 'L', UK: 'L', IT: '50' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '52' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
  ],
  unisex: [],
};

const measurementRanges = {
  shirts: [
    { size: 'XS', chest: 84, waist: 76, hip: 84 },
    { size: 'S', chest: 92, waist: 84, hip: 92 },
    { size: 'M', chest: 100, waist: 92, hip: 100 },
    { size: 'L', chest: 108, waist: 100, hip: 108 },
    { size: 'XL', chest: 116, waist: 108, hip: 116 },
    { size: 'XXL', chest: 124, waist: 116, hip: 124 },
  ],
  pants: [
    { size: '30', chest: 80, waist: 76, hip: 89 },
    { size: '32', chest: 85, waist: 81, hip: 94 },
    { size: '34', chest: 90, waist: 86, hip: 99 },
    { size: '36', chest: 95, waist: 91, hip: 104 },
    { size: '38', chest: 100, waist: 96, hip: 109 },
    { size: '40', chest: 105, waist: 101, hip: 114 },
  ],
  dresses: [
    { size: 'XS', chest: 80, waist: 72, hip: 88 },
    { size: 'S', chest: 88, waist: 80, hip: 96 },
    { size: 'M', chest: 96, waist: 88, hip: 104 },
    { size: 'L', chest: 104, waist: 96, hip: 112 },
    { size: 'XL', chest: 112, waist: 104, hip: 120 },
  ],
  jackets: [
    { size: 'XS', chest: 84, waist: 76, hip: 88 },
    { size: 'S', chest: 92, waist: 84, hip: 96 },
    { size: 'M', chest: 100, waist: 92, hip: 104 },
    { size: 'L', chest: 108, waist: 100, hip: 112 },
    { size: 'XL', chest: 116, waist: 108, hip: 120 },
  ],
};

export const content: ToolLocaleContent<ClothingSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'ISO 3635: 衣料品サイズ - 公式標準', url: 'https://www.iso.org/standard/68644.html' },
    { name: '衣料品サイズ基準 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E8%A1%A3%E9%A1%9E%E3%81%AE%E3%82%B5%E3%82%A4%E3%82%BA' },
    {
      name: '国際的な服サイズ換算 - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '服サイズ換算：完全ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '海外のオンラインショップで買い物をする際、サイズが一致しないと戸惑うことがあります。この<strong>服サイズ換算ツール</strong>は、EU、US、UK、ITの各体系において、Tシャツ、パンツ、ワンピース、ジャケットの最適なサイズを見つけるのに役立ちます。',
    },
    {
      type: 'title',
      text: 'なぜ国によって服のサイズが異なるのですか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '単一の国際標準は存在しません。各地域が独自の体系を開発したため、海外のショップやAmazon、AliExpressなどのプラットフォームで購入する際に混乱が生じます。',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EUサイズ (欧州)：</strong> 連続した数字 (32, 34, 36...) またはアルファベットを使用します。ドイツ、フランス、イタリアなどで最も一般的な体系です。</span>',
        '<span><strong>USサイズ (米国)：</strong> アルファベット (XS, S, M, L) または女性用パンツの数字 (0, 2, 4, 6...) を使用します。</span>',
        '<span><strong>UKサイズ (英国)：</strong> EU体系に似ていますが独自の番号付けがあり、一般的にUSより小さい番号になります。</span>',
        '<span><strong>ITサイズ (イタリア)：</strong> 一般的なEU体系とは若干異なるイタリア独自の番号付けです。</span>',
      ],
    },
    {
      type: 'tip',
      title: 'プロのアドバイス',
      html: 'サイズはブランドによって大きく異なります。Zaraの38サイズはH&amp;Mの38サイズとは異なる場合があります。購入前に必ずそのショップの具体的なサイズ表を参照してください。',
    },
    {
      type: 'title',
      text: '体の正しい測り方',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '正しいサイズを保証するために、柔軟なメジャーで体を測ってください。体格が最大になる一日の終わりに測るのが最適です。',
    },
    {
      type: 'list',
      items: [
        '<span><strong>バスト/チェスト：</strong> 胸の最も高い部分の周囲を測ります。メジャーは脇の下を通します。</span>',
        '<span><strong>ウエスト：</strong> お腹を無理にへこませず、おへその高さで測ります。</span>',
        '<span><strong>ヒップ：</strong> お尻の最も広い部分の周囲を測ります。メジャーは地面と平行にします。</span>',
      ],
    },
    {
      type: 'title',
      text: 'ブランド別フィット感ガイド',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara：</strong> 標準的なサイズ感です。Zaraの36サイズは、標準体型なら概ね信頼できます。</span>',
        '<span><strong>H&amp;M：</strong> 大きめの傾向があります。普段よりワンサイズ下を検討することをお勧めします。</span>',
        '<span><strong>Uniqlo：</strong> 特にベーシックアイテムにおいて小さめの傾向があります。ワンサイズ上を選ぶのが推奨されます。</span>',
        '<span><strong>Nike / Adidas：</strong> 運動用にタイトなカットが多いです。ハーフサイズ上を検討してください。</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'アイテムの種類',
    categoryShirts: 'Tシャツ',
    categoryPants: 'パンツ',
    categoryDresses: 'ワンピース',
    categoryJackets: 'ジャケット',
    genderLabel: '性別',
    genderMen: 'メンズ',
    genderWomen: 'レディース',
    genderUnisex: 'ユニセックス',
    tabBySize: 'サイズから',
    tabByMeasurements: '寸法から',
    regionLabel: '元のサイズ体系',
    sizeLabel: 'サイズを選択',
    regionEU: '欧州 (EU)',
    regionUS: '米国 (US)',
    regionUK: '英国 (UK)',
    regionIT: 'イタリア (IT)',
    labelEU: '欧州',
    labelUS: '米国',
    labelUK: '英国',
    labelIT: 'イタリア',
    quickGridTitle: '簡易対応表 (EU基準)',
    tableTitle: '詳細換算表',
    measurementsTitle: '寸法を入力',
    chestLabel: 'チェスト/バスト (cm)',
    waistLabel: 'ウエスト (cm)',
    hipLabel: 'ヒップ (cm)',
    chestPlaceholder: '例: 95',
    waistPlaceholder: '例: 85',
    hipPlaceholder: '例: 95',
    recommendBtnLabel: 'サイズを推奨',
    tipsTitle: '測定のヒント',
    tipOverClothes: '薄着の状態で',
    tipStraight: 'メジャーを水平に',
    tipNoTight: 'きつく締めすぎない',
    tipEndOfDay: '一日の終わりに',
    recommendationTitle: '推奨サイズ',
    recommendedSizePrefix: '推奨されるサイズ：',
    measuredBy: '入力された寸法に基づく：',
    chestShort: 'バスト',
    waistShort: 'ウエスト',
    hipShort: 'ヒップ',
    recommendationError: '推奨を表示するには、すべての寸法を入力してください。',
    recommendationNoData: 'このカテゴリのデータは利用できません。',
    fitGuideTitle: 'ブランド別フィット感ガイド',
    fitSmall: '小さめ',
    fitRegular: '標準',
    fitLarge: '大きめ',
    fitInfoDefault: 'ブランド名をクリックすると詳細なアドバイスが表示されます。',
    fitNotif1: ' は一般的に ',
    fitNotifSmall: '小さめ',
    fitNotifRegular: '標準的',
    fitNotifLarge: '大きめ',
    fitNotif2: ' です。このブランドで初めて購入する場合は、',
    fitNotif3: ' を検討してください。',
    fitAdviceSmall: 'ワンサイズ上を選ぶこと',
    fitAdviceRegular: '普段通りのサイズを選ぶこと',
    fitAdviceLarge: 'ワンサイズ下を選ぶこと',
    fitSelectedSuffix: ' が選択されています。他のブランドと比較するか、閉じます。',
    infoBannerTitle: 'プロのアドバイス:',
    infoBannerText:
      'サイズはブランドによって大きく異なります。購入前に必ずショップ独自のサイズ表を確認してください。',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
