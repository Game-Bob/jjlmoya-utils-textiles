import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'fabric-truthfulness';
const title = '織物の真実：繊維品質分析';
const description = '衣類の組成を分析して、その真の品質を明らかにします。本物のコットンですか、それとも高価なプラスチックですか？科学的な繊維分析。';

const faqData = [
  {
    question: 'ファッション界における「グリーンウォッシング」とは何ですか？',
    answer: '実質的な根拠なしに「エコ」や「サステナブル」といった言葉をブランドがマーケティングに使用する手法のことです。実際の繊維組成を分析することが、その衣類が本当に天然素材なのか合成素材なのかを確認する唯一の方法です。',
  },
  {
    question: 'なぜポリエステルはコットンよりも品質が低いとされることが多いのですか？',
    answer: 'ポリエステルはプラスチック（PET）の一種です。耐久性はありますが、通気性がなく、細菌による悪臭の原因になりやすく、洗濯のたびにマイクロプラスチックを排出します。コットンやリネンなどの天然繊維は、より優れた調温機能を持っています。',
  },
  {
    question: '衣類にポリウレタン（エラスタン）が含まれているのは良くないことですか？',
    answer: '少量（1〜5%）であれば、ポリウレタン（ライクラ）は快適な着心地とフィット感を与えてくれます。しかし、プラスチックと天然繊維を混ぜることはリサイクルを非常に困難にするため、しばしば「ファストファッション」の衣類であることを示唆します。',
  },
  {
    question: 'ラベルから高品質な衣類を見分けるにはどうすればよいですか？',
    answer: '単一素材の組成（コットン100%、ウール100%など）を探してください。複雑な混紡は、多くの場合、製造コストを抑えるために使用され、魅力的な商標名の裏に合成繊維が隠されていることがあります。',
  },
];

const howToData = [
  {
    name: '内側のラベルを確認する',
    text: '衣類の内側サイドや首元にある白い組成表示ラベルを探します。',
  },
  {
    name: '成分を特定する',
    text: '各繊維の割合（例：コットン70%、ポリエステル30%）を読み取ります。',
  },
  {
    name: '分析ツールにデータを入力する',
    text: 'ラベルに記載された繊維の比率をツールに入力して、技術的な品質スコアを取得します。',
  },
  {
    name: '診断結果を解釈する',
    text: '生成されたレポートを確認し、通気性や耐久性、合成組成による特別なケアが必要かどうかを理解します。',
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
  description: description,
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
  description: description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: '織物の真実',
    addFiber: '繊維を追加',
    total: '合計',
    composition: '組成分析',
    description: 'ラベルに記載されている通りのパーセンテージを入力して、品質の真実を明らかにしましょう。',
    verdict: '判定',
    breathability: '通気性',
    durability: '耐久性',
    warmth: '保温性',
    careWarning: 'お手入れの警告',
    specialCareWarning: '標準的な洗濯：常に物理的なラベルの指示に従ってください。',
    validationError: '判定を表示するためには、組成の合計が正確に100%である必要があります。',
    actualTotal: '現在',
    missingLabel: '不足分',
    disclaimer: '通気性、耐久性、保温性のデータは、各繊維タイプの業界平均に基づいた推定値です。',
    careWarnings: {
      delicate: '非常にデリケート：水で手洗いしてください。乾燥機は使用しないでください。強く絞らないでください。',
      wool: 'ウール / 高級獣毛：専用プログラムを使用し、水で洗ってください。型崩れを防ぐため平干ししてください。乾燥機は使用しないでください。',
      linen: 'リネン：非常にシワになりやすい素材です。少し湿った状態でアイロンをかけると美しく仕上がります。',
      semisynthetic: '半合成繊維：濡れると強度が低下します。丁寧に取り扱い、強い脱水は避けてください。',
      standard: '標準的な洗濯：常に物理的なラベルの指示に従ってください。',
    },
    fiberData: {
      cotton: {
        name: 'コットン',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'リネン',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'ウール / メリノ',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'シルク',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'カシミヤ',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: 'モヘア',
        family: 'natural',
        breathability: 8,
        durability: 9,
        warmth: 9,
        isNoble: true,
      },
      angora: {
        name: 'アンゴラ',
        family: 'natural',
        breathability: 8,
        durability: 4,
        warmth: 10,
        isNoble: true,
      },
      alpaca: {
        name: 'アルパカ',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: 'ポリエステル',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: 'レーヨン / ビスコース',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'ナイロン（ポリアミド）',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: 'アクリル',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: '高価なプラスチック',
        description: 'この衣類の大部分は石油でできています。蒸れやすく、毛玉（ピリング）がすぐに発生する可能性があります。',
      },
      hook: {
        label: 'マーケティングの罠',
        description: 'そのわずかな高級繊維は、ラベルに記載するためだけに含まれています。そのメリットを実感できるほどではありません。',
      },
      fragile: {
        label: '柔らかいが脆い',
        description: '非常に心地よい肌触りですが、洗濯には注意が必要です。型崩れや縮みが発生しやすい素材です。',
      },
      natural: {
        label: '天然の品質',
        description: '通気性が良く耐久性のある衣類です。敏感肌の方や長時間の着用に最適です。',
      },
      technical: {
        label: 'テクニカル / 超合成衣類',
        description: '特別なスポーツウェアでない限り、純粋なプラスチックに代金を支払っていることになります。',
      },
      luxury: {
        label: '真のラグジュアリー',
        description: '快適さと耐久性への投資です。この素材にふさわしい丁寧な取り扱いをしてください。',
      },
      balanced: {
        label: 'バランスの良い混紡',
        description: '機能的な組み合わせです。おそらくコストと耐久性のバランスをとることを目的としています。',
      },
    },
  },
  seo: [
    { type: 'title', text: 'ラベルの裏にある真実：繊維組成マスターガイド', level: 2 },
    { type: 'paragraph', html: 'なぜあの有名ブランドのTシャツであんなに汗をかくのか、あるいはなぜあの「ウールの」セーターがあんなにチクチクするのか、不思議に思ったことはありませんか？その答えはデザインではなく、繊維の科学にあります。' },
    { type: 'paragraph', html: '<strong>ファストファッション</strong>が支配する世界では、生地の品質は一時的な美学の二の次にされてきました。しかし、繊維の組成を理解することは、賢く、長く使え、肌に優しい買い物をするための唯一の方法です。当ツールの<strong>「織物の真実」</strong>は、公式な含有率を分析し、それが高品質な衣類なのか、それとも単に加工されたプラスチックの塊なのかを明らかにします。' },
    { type: 'title', text: '当ツールの方法論', level: 2 },
    { type: 'paragraph', html: '欧米の業界標準から抽出された3つの基本要素に基づき、重み付けされたアルゴリズムを使用しています。' },
    { type: 'list', items: ['<strong>通気性：</strong> 繊維が水蒸気や空気を通す能力。', '<strong>耐久性：</strong> 摩耗や引っ張り、<strong>ピリング</strong>（毛玉）の発生しにくさ。', '<strong>熱効率：</strong> 保温性や放熱の能力。'] },
    { type: 'tip', title: '重要', html: 'EUや米国で販売されるすべての衣類について、成分を割合の多い順に記載することが法律で義務付けられています。ラベルがない、または読めない衣類は注意が必要です。最低限の安全性基準を満たしていない可能性があります。' },
    { type: 'title', text: '小売における一般的な「トリック」', level: 2 },
    { type: 'paragraph', html: '平凡な衣類の価値が高まっているように見せるための、非常に洗練されたマーケティング手法が存在します。それらを見抜く方法を紹介します。' },
    { type: 'card', title: '高級繊維の罠', icon: 'mdi:alert', html: '大きな文字で「カシミヤ混」や「シルク混」と書かれたラベルを目にすることがあります。組成を見ると、実際にはシルク3%、ポリエステル97%だったりします。その3%は柔らかさや光沢、暖かさには寄与しません。単にブランドが価格を20%吊り上げるためだけに存在します。' },
    { type: 'card', title: '「エコ・ビスコース」の神話', icon: 'mdi:leaf', html: 'ビスコースはセルロース（木材）から作られますが、現在の製造工程は環境汚染を引き起こしやすく、最終的な製品は濡れると強度が大幅に低下します。<strong>リヨセル</strong>や<strong>テンセル</strong>でない限り、その耐久性は限定的です。' },
    { type: 'title', text: 'カテゴリー別詳細分析', level: 2 },
    { type: 'title', text: '1. 天然繊維（誇り高きオーガニック）', level: 3 },
    { type: 'paragraph', html: '最高の基準です。超長綿（ピマコットンやエジプト綿など）は永遠の柔らかさを提供します。<strong>リネン</strong>は、熱を逃がし湿気を吸収する分子構造を持っているため、科学的に暑い時期に最適な繊維です。<strong>ウール</strong>や<strong>ヘンプ</strong>（麻）は天然の抗菌作用を持ち、臭いを保持しにくいため、頻繁に洗濯する必要がありません。' },
    { type: 'title', text: '2. 半合成繊維（ハイブリッド）', level: 3 },
    { type: 'paragraph', html: '<strong>ビスコース</strong>、<strong>レーヨン</strong>、<strong>モダール</strong>などが含まれます。シルクのような肌触りでありながら、コットンのような価格です。ドレープ感のある衣類には最適ですが、「喉が渇きやすい」性質があります。大量の水を吸収し、乾くのが遅いため、お手入れを怠るとカビの原因になることがあります。<strong>リヨセル（テンセル）</strong>は、このグループの中でも閉ループの製造工程を持つ、高品質でサステナブルな素材です。' },
    { type: 'title', text: '3. 合成繊維（紡がれたプラスチック）', level: 3 },
    { type: 'paragraph', html: '<strong>ポリエステル</strong>は市場の王様です。安価で、シワになりにくく、半永久的です（文字通り、分解されるまで200年かかります）。問題は「呼吸をしない」ことです。生地と肌の間に湿った微気候を作り出し、細菌の完璧な繁殖地となります。<strong>アクリル</strong>はウールの安価な模倣品です。暖かいですが、静電気が発生しやすく、2回の洗濯で毛玉だらけになります。' },
    { type: 'title', text: '衣類を長持ちさせるためのアドバイス', level: 2 },
    { type: 'paragraph', html: '世界最高の衣類であっても、たった一度の不適切な洗濯で台無しになることがあります。普遍的な黄金律は以下の通りです。' },
    { type: 'tip', title: '水洗いは最良の友', html: '衣類の90%は30℃以上の温度を必要としません。熱は弾力性のある繊維を劣化させ、天然繊維を縮ませます。' },
    { type: 'tip', title: '洗剤は少なめに', html: '洗剤の使いすぎは残留物を残し、汚れを引き寄せ、生地を硬くします。' },
    { type: 'tip', title: '乾燥機は「静かな敵」', html: '乾燥機のフィルターに溜まる糸くずは、摩擦と熱によって剥がれ落ちた、衣類そのものの一部です。' },
    { type: 'tip', title: '裏返して洗う', html: '色あせや刺繍を、洗濯槽や他の衣類との摩擦から守ります。' },
    { type: 'paragraph', html: '「少なく買い、より良く選び、長持ちさせる」 —— この分析ツールは、意識的で高品質なワードローブへの第一歩です。' },
  ],
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'FTC - 繊維製品表示ガイド',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: '欧州委員会 - 繊維規制',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - 織物の取扱い絵表示',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
