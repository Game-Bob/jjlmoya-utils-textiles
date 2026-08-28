import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { EmbroideryStitchPricingEstimatorUI } from '../ui';

const slug = 'embroidery-stitch-count-pricing-estimator';
const title = '刺繍ステッチ数と価格の見積もり計算機';
const description = 'デザインのサイズ、ステッチ密度、色数、速度、時間単価から、刺繍ステッチ数、製作時間、基本労務費を見積もります。';
const faq = [
  { question: 'ステッチ数はどのように見積もりますか？', answer: '刺繍面積にステッチ密度の二乗を掛け、さらにステッチ種類の係数を適用します。結果は製作負荷を比較するための換算ステッチ数であり、ミシンファイルの予測ではありません。' },
  { question: 'ステッチの種類で見積もりが変わるのはなぜですか？', answer: 'ランニング、サテン、フィル、タタミでは糸の配置が異なります。相対係数により、密度の高いカバーほど製作作業が増えることを透明に示します。' },
  { question: '色数でステッチ数は変わりますか？', answer: 'いいえ。色数は交換時間だけを追加します。最初の色の後の交換1回につき1.75分を計画上の仮定として加算します。' },
  { question: '計算された価格は見積書の金額ですか？', answer: 'いいえ。入力した時間単価に基づく基本労務費の見積もりです。糸、接着芯、デジタイズ、段取り、仕上げ、諸経費、税金、利益は含まれません。' },
];
const howTo = [
  { name: 'デザインを測る', text: '刺繍する幅と高さをセンチメートルで入力します。枠全体ではなく、実際にステッチを入れる面積を使います。' },
  { name: 'ステッチ計画を入力する', text: '主なステッチ種類を選び、1センチメートルあたりの密度と糸の色数を入力します。' },
  { name: '製作条件を加える', text: '毎分のステッチ数と1時間あたりの労務単価を入力します。通貨単位は統一してください。' },
  { name: '計画値を読む', text: '換算ステッチ数、製作時間、段取り時間、基本価格を使い、デジタイズや見積もりの前にデザインを比較します。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ja' };
const ui: EmbroideryStitchPricingEstimatorUI = {
  intro: '刺繍枠の中でステッチ計画を組み、製作負荷と労務価値を確認します。', stageLabel: 'ステッチ枠', controlsLabel: 'ステッチ計画を作る', resultLabel: '基本労務費の見積もり', widthLabel: 'デザイン幅', heightLabel: 'デザイン高さ', densityLabel: 'ステッチ密度', stitchLabel: '主なステッチ', coloursLabel: '糸の色数', speedLabel: 'ミシン速度', rateLabel: '時間単価', widthHint: '刺繍面積 cm', heightHint: '刺繍面積 cm', densityHint: '1 cmあたりのステッチ', coloursHint: '最初の色には交換なし', speedHint: '毎分のステッチ数', rateHint: '1時間あたりの通貨', stitchRunning: 'ランニングステッチ', stitchSatin: 'サテンステッチ', stitchFill: 'フィルステッチ', stitchTatami: 'タタミフィル', stitchRunningNote: 'カバーが少ない細い輪郭や文字。', stitchSatinNote: '糸の経路を集中させた滑らかな柱や縁。', stitchFillNote: '糸と製作負荷を増やすしっかりしたカバー。', stitchTatamiNote: 'このモデルで最も高い計画係数の重ねフィル。', selectStitch: 'ステッチ種類を選ぶ', emptyResult: 'ステッチ計画を入力して枠を動かします。', stitchesUnit: '換算ステッチ', minutesUnit: '分', hoursUnit: '時間', priceUnit: '通貨単位', areaLabel: '刺繍面積', effectiveLabel: '換算ステッチ数', stitchTimeLabel: 'ステッチ時間', productionLabel: '製作時間', setupLabel: '色替え準備', changesLabel: '色替え回数', basePriceLabel: '基本労務費の見積もり', estimateBadge: '見積もり完了', attentionBadge: '規模を確認', warningHighVolume: 'ステッチ数が多い設定です。見積もり前に実機サンプルを試してください。', warningLongRun: '長い製作時間です。枠張り、糸切れ、仕上げ時間を別に確認してください。', invalidMessage: 'サイズ、密度、速度、時間単価には正の値を入力してください。', formulaTitle: '計算されるもの', formulaText: '面積に密度の二乗を掛けてカバーの基準値を作ります。ステッチ係数で換算ステッチ数に変換し、最初の色の後の交換ごとに1.75分を加えます。', noteTitle: '計画値の範囲', noteText: '透明性のある見積もり計算機であり、デジタイズ済みミシンファイルや完成した見積書ではありません。材料、段取り、仕上げ、諸経費、税金、利益を別途加えてください。', reset: '例をリセット', copied: '概要をコピーしました', copySummary: '概要をコピー', canvasAlt: '現在の密度を糸の線で示す布製の刺繍枠',
};
export const content: ToolLocaleContent<EmbroideryStitchPricingEstimatorUI> = { slug, title, description, ui, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema], seo: [
  { type: 'title', text: '刺繍のステッチ数と労務価格を見積もる方法', level: 2 },
  { type: 'paragraph', html: '刺繍デザインには、モチーフにどれだけ糸の作業が含まれるか、そしてミシンと作業者が何分拘束されるかという二つの計画上の問いがあります。この計算機は両方を見える状態にし、サイズ、密度、ステッチ、色数、速度、単価から比較できる計画値を作ります。' },
  { type: 'title', text: 'ステッチ数のモデル', level: 3 },
  { type: 'paragraph', html: '基準値は、刺繍面積に1センチメートルあたりの密度の二乗を掛けたものです。相対係数でステッチの種類を考慮します。ランニングは軽く、サテンを基準に、フィルとタタミはより密な計画ケースです。これは換算作業量の見積もりであり、デジタイズソフトが出す正確な数ではありません。' },
  { type: 'table', headers: ['入力', '変わるもの', '保証しないもの'], rows: [['幅と高さ', 'カバー面積と基準ステッチ数', 'デジタイズファイルの正確な輪郭'], ['密度とステッチ種類', '換算作業量とミシン時間', 'すべての生地に通用する品質設定'], ['色数', '最初の色の後の交換時間', '糸切りや糸切れの回数'], ['速度と単価', '製作時間と労務価値', '顧客向けの最終見積もり']] },
  { type: 'title', text: '見積もりを責任ある価格に変える', level: 3 },
  { type: 'paragraph', html: '表示価格は作業時間に時間単価を掛けただけのものです。実際の見積もりには、デジタイズ、糸、接着芯、枠張り、ミシンの段取り、試作品、糸切り、手直し、仕上げ、諸経費、税金、利益を加える必要があります。項目を分けておくと、少ないステッチ数に長い準備作業が隠れません。' },
  { type: 'tip', title: '見積もり前に計画を試す', html: '実際に使う生地と接着芯で代表的なサンプルを縫います。時間と糸の状態を計算結果と比べ、機械ごとの速度や段取りの仮定を調整してください。' },
  { type: 'title', text: '製作内訳の読み方', level: 3 },
  { type: 'list', items: ['換算ステッチ数は、係数適用後のカバー作業量を示します。', '製作時間は換算ステッチ数をミシン速度で割った値です。', '色替え準備は最初の色の後の交換ごとに1.75分を加えます。', '基本労務費は合計時間を60で割り、時間単価を掛けた値です。'] },
] };
