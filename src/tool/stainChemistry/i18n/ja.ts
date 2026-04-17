import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'stain-chemical-protocol';
const title = '繊維（テキスタイル）染み抜き科学プロトコル';
const description =
  '繊維の種類とシミの化学的性質に基づいた科学的な染み抜き手順。過炭酸塩、酵素、溶剤など、ケースごとの正しい方法を紹介します。';

const faqData = [
  {
    question: '過炭酸ナトリウムの代わりに塩素系漂白剤を使ってもいいですか？',
    answer:
      '塩素系漂白剤（次亜塩素酸ナトリウム）は腐食性が非常に高いです。繊維を劣化させ、黄ばみや脆化の原因になります。過炭酸塩は活性酸素によって漂白するため、繊維本来の分子構造を保護します。',
  },
  {
    question: 'なぜお酢は消臭に効果があるのですか？',
    answer:
      '体臭は通常、アルカリ性です。お酢に含まれる酢酸がこれらを中和し、無臭の塩に変えるため、すすぎの段階で完全に除去されます。',
  },
  {
    question: '血のシミには常に冷水を使うべきですか？',
    answer:
      'はい。熱は血液中のタンパク質を凝固させ、繊維に永久的に定着させてしまいます。冷水はシミを溶けやすい状態に保ち、酵素剤が効果的に作用するのを助けます。',
  },
  {
    question: 'アセテートの服にアセトンを使ったらどうなりますか？',
    answer:
      'アセトンはトリアセテートやアセテートを溶かします。アセテート繊維は、セルロースを酢酸でエステル化したもので、アセトンに完全に溶解します。その結果、生地は修復不可能なほど破壊されます。',
  },
];

const howToData = [
  {
    name: '繊維の種類を確認する',
    text: '服の内側のタグで、天然繊維、合成繊維、または獣毛（ウール、シルク、カシミヤ）のいずれであるかを確認します。',
  },
  {
    name: 'ツールで繊維を選択する',
    text: '最初の選択項目で該当する素材を選びます。',
  },
  {
    name: 'シミの種類を選択する',
    text: 'シミが有機系（ワイン、果物）、タンパク質（血液）、脂質、または合成系（インク）のどれであるかを指定します。',
  },
  {
    name: '指示されたプロトコルを実行する',
    text: '使用薬剤、温度、方法についての指示に従います。特に重要な注意事項に細心の注意を払ってください。',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: '染み抜き科学プロトコル',
    fiberLabel: '1. 繊維の種類',
    selectFiberPlaceholder: '生地を選択してください...',
    stainLabel: '2. シミの原因',
    selectStainPlaceholder: '何が付きましたか？',
    molecularDiagnosis: '分子診断',
    requiredAgent: '必要な薬剤',
    thermalCondition: '温度条件',
    temperature: '温度',
    cleaningInstructions: '洗浄手順',
    criticalWarning: '重要な注意事項',
    criticalWarningLabel: '注意',
    technicalNote: '技術解説',
    technicalNoteText:
      '本格的な化学処理を行う前に、必ず目立たない場所で色落ちテストを行ってください。',
    systemDiagnosis: '診断システム',
    systemDiagnosisDesc:
      '洗浄ロードマップを取得するために繊維のパラメータを設定してください',
    delicatePercarbonateWarning:
      '分子劣化のリスクあり。動物性繊維は過炭酸塩に対して非常に敏感です。必ず目立たない場所でテストしてください。',
    fiberData: {
      cotton: { name: '綿（コットン）', family: 'natural', isNoble: false },
      linen: { name: '麻（リネン）', family: 'natural', isNoble: true },
      wool: { name: '羊毛（ウール）', family: 'natural', isNoble: true },
      silk: { name: '絹（シルク）', family: 'natural', isNoble: true },
      cashmere: { name: 'カシミヤ', family: 'natural', isNoble: true },
      mohair: { name: 'モヘア', family: 'natural', isNoble: true },
      angora: { name: 'アンゴラ', family: 'natural', isNoble: true },
      alpaca: { name: 'アルパカ', family: 'natural', isNoble: true },
      polyester: { name: 'ポリエステル', family: 'synthetic', isNoble: false },
      viscose: { name: 'ビスコース / レーヨン', family: 'artificial', isNoble: false },
      nylon: { name: 'ナイロン（ポリアミド）', family: 'synthetic', isNoble: false },
      acrylic: { name: 'アクリル', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: '過炭酸ナトリウム',
        description: '生分解性の酸素系漂白剤。水に溶けると活性酸素を放出します。',
        warning: '高濃度の場合、タンパク質繊維（シルク、ウール）への使用は避けてください。',
      },
      isopropyl: {
        name: 'イソプロピルアルコール',
        description: '色素や軽度の脂質に効果的な溶剤。',
        warning: 'シルクの光沢を損なったり、希釈しないと一部のアクリルを溶かしたりすることがあります。',
      },
      acetone: {
        name: 'アセトン',
        description: 'ラッカーや接着剤に強力な効果を発揮する溶剤。',
        warning: 'アセテートおよびトリアセテートには使用禁止（繊維を溶かします）。',
      },
      enzyme: {
        name: '酵素入り洗剤',
        description: '生物由来のシミを分解するプロテアーゼを含みます。',
        warning: 'ウールやシルク（これらもタンパク質です）への使用には注意が必要です。',
      },
      vinegar: {
        name: 'ホワイトビネガー（白酢）',
        description: '消臭や色止めに効果のある穏やかな酢酸。',
      },
    },
    stains: [
      {
        id: 'wine',
        name: '赤ワイン / 果物',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: '長時間のつけ置き' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: '直接ペーストを塗布' },
          delicate: {
            agentId: 'vinegar',
            temperature: '冷水',
            method: '炭酸水とお酢ですすぐ',
            notes: 'こすらないこと',
          },
        },
      },
      {
        id: 'blood',
        name: '血液',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: '冷水',
            method: '塩水につけ置いた後、酵素剤を使用',
          },
          synthetic: { agentId: 'enzyme', temperature: '冷水', method: '直接塗布' },
          delicate: {
            agentId: 'vinegar',
            temperature: '冷水',
            method: 'すぐにすすぎ、熱を避ける',
          },
        },
      },
      {
        id: 'grease',
        name: '脂質 / オイル',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'アルコールで溶かしてから洗濯する',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: '下に吸水性の高い紙を敷く',
          },
          delicate: { agentId: 'isopropyl', temperature: '冷水', method: 'アルコールを50%に希釈' },
        },
      },
      {
        id: 'ink',
        name: 'インク / マーカー',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '常温',
            method: '外側から内側へ向かって叩き出す',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '常温',
            method: 'シミの広がりに注意する',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: '冷水',
            method: '希釈して目立たない場所でテストする',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'テキスタイル洗浄の背後にある化学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'すべてのシミが同じではなく、すべての繊維が同じ化学剤に対して同じように反応するわけでもありません。服を救えるか破壊してしまうかの違いは、シミの分子特性と繊維の構造を理解しているかどうかにあります。',
    },
    {
      type: 'card',
      title: '01 — 制御された酸化作用',
      icon: 'mdi:atom',
      html: '<strong>過炭酸ナトリウム</strong>は活性酸素を放出し、色素分子（シミの色の原因）の二重結合を切断することで、シミを無色化し水に溶けやすくします。有機系のシミに最も効果的な方法です。',
    },
    {
      type: 'card',
      title: '02 — 溶剤による溶解作用',
      icon: 'mdi:flask-outline',
      html: 'オイルやインクのようなシミは水に溶けません。<strong>イソプロピルアルコール</strong>や<strong>アセトン</strong>のような溶剤は、表面張力を下げてシミの非極性分子を引きつけ、支持媒体へと移動させることができます。',
    },
    {
      type: 'title',
      text: '繊維の支配権：なぜ種類が重要なのか',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'すべての繊維が同じように「分解」されるわけではありません。<strong>シルクとウール</strong>はタンパク質（フィブロインとケラチン）です。もし、タンパク質を分解するように設計された酵素洗剤（血液や卵などの汚れ用）を無計画に使うと、洗剤が繊維自体を劣化させ始め、生地の光沢や構造を破壊してしまいます。',
    },
    {
      type: 'title',
      text: '熱の危険性',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '最も多い間違いの一つは、血液のシミを「ふやかす」ために熱いお湯を使うことです。化学的には、熱はシミの<strong>タンパク質を凝固</strong>させ、繊維の多孔質な構造に永久的に定着させてしまいます。タンパク質系のシミは必ず冷水で処理してください。',
    },
    {
      type: 'tip',
      title: '緊急プロトコル：赤ワイン',
      html: '<strong>A. 受動的な吸収:</strong> 吸水性の紙で叩く（広げないように絶対にこすらない）。<br><strong>B. 浸透圧による中和:</strong> 微細な塩で覆い、繊維の核心から液体を引き出す。<br><strong>C. 化学的作用:</strong> 繊維が耐熱性であれば、40℃の温水で過炭酸塩のペーストを塗布する。',
    },
    {
      type: 'title',
      text: '特定の溶剤と注意事項',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>アセトン</strong>はマニキュアや接着剤を除去する非常に優れた溶剤ですが、<strong>アセテート</strong>には破壊的です。セルロース由来ながら化学処理された繊維であるため、アセトンは文字通り生地を溶解させます。',
    },
    {
      type: 'paragraph',
      html: '<strong>イソプロピルアルコール</strong>はより安定していますが、染められた合成繊維では顔料そのものを引き抜いてしまうことがあります。本処理の前に必ず「縫い代テスト」などの目立たない場所での確認を推奨します。',
    },
  ],
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'AATCC - Association for Advancing Color Technology and Chemistry',
      url: 'https://www.aatcc.org',
    },
    {
      name: 'Kissa, E. — Textile Auxiliaries',
      url: 'https://www.springer.com/gp/book/9783642057328',
    },
    {
      name: 'ISO 105 — Textiles: Tests for Colour Fastness',
      url: 'https://www.iso.org/standard/72682.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
