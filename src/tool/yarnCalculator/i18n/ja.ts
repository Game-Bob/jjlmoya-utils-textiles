import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'yarn-calculator';
const title = '毛糸計算機：必要なメートル数と玉数は？';
const description =
  '編み図やサイズから、棒針編みやかぎ針編みのプロジェクトに必要な毛糸（ウールや糸）の量をメートル単位で正確に計算します。';

const faqData = [
  {
    question: 'なぜかぎ針編みは棒針編みよりも毛糸を多く使うのですか？',
    answer:
      'かぎ針編みは、結び目や重なり合うループを作ることで、1平方センチメートルあたりの密度が高く、厚みのある編み地になるためです。平均して、かぎ針編みのプロジェクトは、同じものを棒針（メリヤス編み）で編む場合よりも25%〜35%多く糸を消費します。',
  },
  {
    question: 'ロット（Dye Lot）が異なる毛糸を買うとどうなりますか？',
    answer:
      '店頭では全く同じ色に見えても、染色時のわずかな化学変化により、完成した作品を一緒に編むと目に見える「段差（色の違い）」が生じることがあります。ロット番号が同じであることを確認し、必要な分を一度に購入することを強くお勧めします。',
  },
  {
    question: 'ゲージ（編み目の密度）は最終的な消費量にどう影響しますか？',
    answer:
      'ゆるく編むと、一目あたりの糸の消費量が増えます。もし自身のゲージが編み図の指定よりも大きい場合（例：15目の指定に対して13目になるなど）、毛糸の消費量は大幅に増加します。事前にゲージを取ることは非常に重要です。',
  },
  {
    question: '毛糸玉の重さしかわからない場合、メートル数はどう計算すればいいですか？',
    answer:
      'メートル（長さ）のデータがないと正確な計算は困難です。ほとんどの毛糸玉のラベルには長さが記載されています。記載がない場合は、Ravelryなどのデータベースで毛糸名から検索し、50gまたは100gあたりの正確な長さを確認してください。',
  },
];

const howToData = [
  {
    name: 'プロジェクトを選択する',
    text: 'セーター、マフラー、帽子、靴下、ブランケットの中から選び、特定の消費ベースを読み込みます。',
  },
  {
    name: 'サイズと糸の太さを設定する',
    text: '仕上がりサイズ（S、M、L、XL）と、使用する糸の太さ（Fingering, DK, Worsted, Bulky）を指定します。',
  },
  {
    name: '補正値を有効にする',
    text: '編み図にアラン模様、交差編み、または複雑なテクスチャがある場合は、テクスチャスイッチをオンにして必要な増分を追加します。',
  },
  {
    name: '購入リストを確認する',
    text: '選んだ毛糸の1玉あたりのメートル数を入力すると、カートに入れるべき正確な個数が表示されます。',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'Craft Yarn Council: Standard Yarn Weights & Yardages',
      url: 'https://www.craftyarncouncil.com/standards/yarn-weight-system',
    },
    {
      name: 'Interweave Essentials: Yarn Substitution and Estimation',
      url: 'https://www.interweave.com/article/knitting/yarn-substitution-angelina-take-two/',
    },
    {
      name: 'The Woolery: Fibers and Calculation of Yarn Usage',
      url: 'https://woolery.com/blogs/the-woolery-blog/yarn-weight-charts-helpful-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '毛糸消費ガイド：プロジェクトに必要な長さと玉数の計算方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '編み物のロジスティクスをマスターし、棒針・かぎ針編み用の高精度なテクニカル計算機で糸不足を防ぎましょう。編み物をされる方にとって最大の恐怖の一つは<strong>「ヤーン・チキン（Yarn Chicken）」</strong>です。これは、プロジェクトの終盤に、最後の目を閉じる前に糸が足りなくなるのではないかとハラハラする瞬間のことです。この計算機は、業界標準の長さと重さのデータに基づいた見積もりを提供するために開発されました。',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'パニック・マージン', icon: 'mdi:security' },
        { value: 'メートル制', label: '長さで計算', icon: 'mdi:ruler' },
        { value: 'オフライン', label: 'ローカルDB', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'なぜ毛糸玉の「重さ」は紛らわしいのか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '初心者の多くは、重さ（例：「100gの玉を6玉」）だけで毛糸を購入する間違いを犯しがちです。しかし、重さは質量の単位であり、長さの単位ではありません。同じ100gの毛糸でも、長さは劇的に異なります。例えば、極太の<strong>Bulky</strong>タイプなら80メートルほどしかない一方、<strong>Fingering / Lace</strong>タイプなら同じ重さで450メートルを超えることもあります。',
    },
    {
      type: 'paragraph',
      html: 'そのため、私たちの計算機は常に<strong>「総メートル数」</strong>を優先します。自身のサイズとプロジェクトに必要な総距離が分かれば、使用する毛糸のラベルに記載されている長さで割ることで、購入すべき正確な個数を導き出すことができます。',
    },
    {
      type: 'title',
      text: '糸の太さ別標準メートル数表',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ラベルがお手元にない場合は、見積もりの参考にこちらの数値（繊維100gあたりの目安）を使用してください：',
    },
    {
      type: 'table',
      headers: ['糸の太さ (Weight)', '目安の長さ / 100g', '推奨される用途', '推奨される針'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'レースショール、透かし編み', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', '靴下、ベビー服', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', '軽いジャケット', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'セーター、帽子', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'ブランケット、コート', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', '超極太マフラー、ひざ掛け', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'ゲージ（Gauge）の重要性',
      html: '<p>ゆるく編むと、編み目が大きくなり、きつく編む場合よりも多くの糸を消費することを忘れないでください。この計算機は安全マージンを適用していますが、自身の手が極端にゆるい場合は、不足を防ぐために結果にさらに5〜10%加算することを検討してください。</p>',
    },
    {
      type: 'title',
      text: '糸の消費量を増大させる要因',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'すべての編み方が同じ量の繊維を消費するわけではありません。デザインを選ぶ際は、以下の割増要因を考慮してください：',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'メリヤス編み / 天竺編み',
          description: 'あらゆる衣類において、ベースとなる消費量と最高の糸効率を表します。',
          icon: 'mdi:minus-circle-outline',
          points: ['初心者に最適', '生地の自然なドレープ感'],
        },
        {
          title: 'アラン模様 / 交差編み',
          description: '繊維を交差させることで編み地が「縮まり」、消費量は約25%増加します。',
          icon: 'mdi:texture-box',
          points: ['より長いメートル数が必要', '密度が高く重厚な編み地'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'かぎ針編み (Crochet)',
          description: 'かぎ針編みの結び目は、棒針編みよりも約30%多く糸を使用します。',
          icon: 'mdi:hook',
          points: ['毛糸玉の減りが早い', '立体的なテクスチャ'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'ゴム編み (Ribbing)',
          description: '表目と裏目の構造により、1平方センチメートルあたりの毛糸密度が高まります。',
          icon: 'mdi:unfold-more-horizontal',
          points: ['中程度の消費増 (+15%)', '高い伸縮回復性'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '慎重な編み手のための用語集',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'ロット (Dye Lot)',
          definition:
            '毛糸を染めた釜を識別する番号。ロットが異なると、玉の状態では気づかなくても完成作品では色の違いが目立つことがあります。',
        },
        {
          term: 'スタッシュ (Stash)',
          definition:
            '編み手が持っている個人的な糸のコレクション。ラベルのない残り糸の重さを把握することは、小物作りにおいて重要です。',
        },
        {
          term: 'Put-up',
          definition:
            '糸がどのような形（カセ、玉、コーン巻きなど）で提供されているか。使用前に玉巻き器などで巻く必要があるかどうかに影響します。',
        },
        {
          term: 'ヤーン・チキン (Yarn Chicken)',
          definition:
            '足りなそうな量の糸で、編み地の区切りを完成させようと挑戦すること。',
        },
      ],
    },
    {
      type: 'title',
      text: 'この計算結果の活用方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ツールでメートル数と玉数が算出されたら、以下の手動確認ステップを行うことをお勧めします：',
    },
    {
      type: 'list',
      items: [
        '<strong>実際の毛糸の長さを確認する:</strong> すべての100g玉が200mあるとは限りません。ラベルでこのデータを確認し、最終的な計算を調整してください。',
        '<strong>装飾分の長さを加算する:</strong> マフラーにフリンジを付けたり、帽子にポンポンを付ける場合は、合計に50〜80メートル余分に足してください。',
        '<strong>ゲージを取る:</strong> 10x10 cmの正方形を編みます。それを精密はかりで量ります。もし20gあり、ブランケットが100x100（つまり100個分）なら、正確に2kgの毛糸が必要です。',
        '<strong>必ず同じロットで購入する:</strong> 計算結果が7玉だった場合、ロットが混ざることを防ぐため、またはとじはぎ分を考慮して8玉購入するなどの余裕を持ってください。',
      ],
    },
    {
      type: 'summary',
      title: '毛糸購入のための戦略的アドバイス',
      items: [
        '必要な長さを確保するため、グラム数よりもメートル数を優先してください。',
        'かぎ針編みは棒針編みよりも大幅に毛糸を消費します。タイプ選択を調整してください。',
        '密なテクスチャ（交差編み）は、糸の予算を25%増やす必要があります。',
        '買い足しが必要になった時のために、必ず各ロットのラベルを1枚保管しておいてください。',
        '必須のゲージを取るために、10%の安全マージンを確保しておきましょう。',
      ],
    },
  ],
  ui: {
    sectionProject: '1. プロジェクトの種類',
    sectionSize: '2. 寸法 / サイズ',
    sectionWeight: '3. 糸の太さ',
    sectionPattern: '4. 編み図の特徴',
    sectionBall: '5. 毛糸玉のデータ',
    labelCables: '交差編みや密な模様はありますか？',
    labelGrams: 'グラム / 玉',
    labelMeters: 'メートル / 玉',
    weightFine: '細い',
    weightMedium: '普通',
    weightThick: '太い',
    weightXXL: '超極太',
    projectSweater: 'セーター',
    projectScarf: 'マフラー',
    projectHat: '帽子',
    projectSocks: '靴下',
    projectBlanket: 'ブランケット',
    projectCardigan: 'カーディガン',
    statPrefix: '推定総消費量',
    statSuffix: 'M',
    statNote: '10%の予備分を含めた最終メートル数です。',
    ballsFormatSingular: '{n} 玉購入',
    ballsFormatPlural: '{n} 玉購入',
    ballsDetailFormat: '1玉 {w}g / {m}m',
    alertTitle: '戦略的な安心のために：',
    alertText:
      'この計算はすでに糸不足にならないよう配慮されています。購入時はロット番号（dye lot）が同じであることを確認してください。',
    schemeSleeveLabel: '袖',
    schemeSleeveEach: '各',
    schemeBodyLabel: '身頃',
    schemeTotalHat: '帽子合計',
    schemeTotalFlat: 'パーツ合計',
    schemeTotalSocks: '1ペア合計',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['子供', 'S', 'M', 'L'],
      scarf: ['ミニ', 'M', '大', 'マキシ'],
      socks: ['子供', '大人 S', '大人 M', '大人 L'],
      blanket: ['ベビー', 'ソファ', 'シングル', 'ダブル'],
    },
  },
};
