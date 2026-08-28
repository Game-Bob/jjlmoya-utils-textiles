import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { EmbroideryStitchPricingEstimatorUI } from '../ui';

const slug = 'embroidery-stitch-count-pricing-estimator';
const title = '刺绣针数与价格估算器';
const description = '根据设计尺寸、针迹密度、颜色数量、速度和小时费率，估算刺绣针数、生产时间和基础人工成本。';
const faq = [
  { question: '刺绣针数估算是如何工作的？', answer: '计算器将刺绣面积乘以针迹密度的平方，再应用针迹类型系数。结果是用于比较生产工作量的等效针数，不是机器文件的预测。' },
  { question: '为什么针迹类型会改变估算结果？', answer: '走针、缎面针、填充针和榻榻米针的走线方式不同。相对系数透明地表示覆盖越密，生产工作量越大。' },
  { question: '颜色数量会改变针数吗？', answer: '不会。颜色数量只会增加换色时间。模型将第一种颜色之后的每次换色按计划假设增加1.75分钟。' },
  { question: '计算出的价格是正式报价吗？', answer: '不是。这是根据输入小时费率计算的基础人工成本估算，不包含线材、衬纸、打版、准备、收尾、间接费用、税费和利润。' },
];
const howTo = [
  { name: '测量设计', text: '输入刺绣宽度和高度，单位为厘米。使用实际走针区域，而不是整个绷框尺寸。' },
  { name: '描述针迹计划', text: '选择主要针迹类型，输入每厘米针迹密度，并统计线材颜色数量。' },
  { name: '加入生产假设', text: '输入每分钟针数和每小时人工费率。请保持货币单位一致。' },
  { name: '读取计划估算', text: '在打版或报价前，使用等效针数、生产时间、准备时间和基础价格比较不同设计。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'zh' };
const ui: EmbroideryStitchPricingEstimatorUI = {
  intro: '在刺绣绷框中制定针迹计划，查看生产工作量和人工价值。', stageLabel: '针迹绷框', controlsLabel: '制定针迹计划', resultLabel: '基础人工成本估算', widthLabel: '设计宽度', heightLabel: '设计高度', densityLabel: '针迹密度', stitchLabel: '主要针迹', coloursLabel: '线材颜色', speedLabel: '机器速度', rateLabel: '小时费率', widthHint: '刺绣区域，单位厘米', heightHint: '刺绣区域，单位厘米', densityHint: '每厘米针数', coloursHint: '第一种颜色无需换色', speedHint: '每分钟针数', rateHint: '每小时货币金额', stitchRunning: '走针', stitchSatin: '缎面针', stitchFill: '填充针', stitchTatami: '榻榻米填充', stitchRunningNote: '覆盖较少的轻量轮廓和文字。', stitchSatinNote: '线迹集中且平滑的柱状区域和边缘。', stitchFillNote: '增加线材用量和生产工作的完整覆盖。', stitchTatamiNote: '本模型中计划系数最高的分层填充。', selectStitch: '选择针迹类型', emptyResult: '输入针迹计划以激活绷框。', stitchesUnit: '等效针数', minutesUnit: '分钟', hoursUnit: '小时', priceUnit: '货币单位', areaLabel: '刺绣面积', effectiveLabel: '等效针数', stitchTimeLabel: '走针时间', productionLabel: '生产时间', setupLabel: '颜色准备', changesLabel: '换色次数', basePriceLabel: '基础人工成本估算', estimateBadge: '估算完成', attentionBadge: '检查规模', warningHighVolume: '针数较多。报价前请进行真实机器打样。', warningLongRun: '生产时间较长。请单独检查绷框、断线和收尾时间。', invalidMessage: '尺寸、密度、速度和小时费率必须使用正数。', formulaTitle: '计算内容', formulaText: '面积乘以密度平方得到覆盖基准。针迹系数将其转换为等效针数，第一种颜色之后的每次换色增加1.75分钟。', noteTitle: '计划估算范围', noteText: '这是透明的估算工具，不是已打版的机器文件，也不是最终报价。请自行加入材料、准备、收尾、间接费用、税费和利润。', reset: '重置示例', copied: '摘要已复制', copySummary: '复制摘要', canvasAlt: '用线条显示当前密度的布质刺绣绷框',
};
export const content: ToolLocaleContent<EmbroideryStitchPricingEstimatorUI> = { slug, title, description, ui, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema], seo: [
  { type: 'title', text: '如何估算刺绣针数和人工价格', level: 2 },
  { type: 'paragraph', html: '刺绣设计有两个计划问题：图案包含多少线材工作，以及机器和操作员将被占用多久？这个估算器让两者保持可见，并将尺寸、密度、针迹、颜色、速度和费率转换为可比较的计划数值。' },
  { type: 'title', text: '针数模型', level: 3 },
  { type: 'paragraph', html: '基础值是刺绣面积乘以每厘米密度的平方。相对系数用于考虑针迹系列：走针较轻，缎面针作为参考，填充针和榻榻米针代表越来越密的计划情况。这是等效工作量估算，不是打版软件导出的精确针数。' },
  { type: 'table', headers: ['输入', '会改变什么', '不会承诺什么'], rows: [['宽度和高度', '覆盖面积与基础针数', '打版文件的精确轮廓'], ['密度和针迹类型', '等效线材工作与机器时间', '适合所有面料的通用质量设置'], ['颜色', '第一种颜色之后的换色时间', '剪线或断线次数'], ['速度和费率', '生产时长与人工价值', '给客户的最终报价']] },
  { type: 'title', text: '将估算变成负责任的价格', level: 3 },
  { type: 'paragraph', html: '显示价格只包含工作时间乘以小时费率。实际报价还应加入打版、线材、衬纸、绷框、机器准备、打样、剪线、返工、收尾、间接费用、税费和利润。将这些项目分开，避免低针数掩盖漫长的准备工作。' },
  { type: 'tip', title: '报价前测试计划', html: '在计划使用的面料和衬纸上进行有代表性的打样。将样品时间和线材表现与估算比较，再调整本地速度和准备假设。' },
  { type: 'title', text: '读取生产明细', level: 3 },
  { type: 'list', items: ['等效针数表示应用针迹系数后的覆盖工作量。', '生产时间等于等效针数除以机器速度。', '颜色准备在第一种颜色之后的每次换色增加1.75分钟。', '基础人工成本等于总时间除以60，再乘以小时费率。'] },
] };
