import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { EmbroideryStitchPricingEstimatorUI } from '../ui';

const slug = 'embroidery-stitch-count-pricing-estimator';
const title = '자수 스티치 수와 가격 견적 계산기';
const description = '디자인 크기, 스티치 밀도, 색상 수, 속도, 시간당 요율을 바탕으로 자수 스티치 수와 제작 시간, 기본 인건비를 추정합니다.';
const faq = [
  { question: '스티치 수 견적은 어떻게 계산하나요?', answer: '계산기는 자수 면적에 스티치 밀도의 제곱을 곱한 뒤 스티치 종류 계수를 적용합니다. 결과는 제작 부담을 비교하기 위한 환산 스티치 수이며 기계 파일을 예측하지는 않습니다.' },
  { question: '스티치 종류에 따라 견적이 달라지는 이유는 무엇인가요?', answer: '러닝, 새틴, 필, 타타미 스티치는 실을 놓는 방식이 다릅니다. 상대 계수를 사용해 밀도가 높은 커버일수록 제작 작업이 늘어나는 모습을 투명하게 보여줍니다.' },
  { question: '색상 수가 스티치 수를 바꾸나요?', answer: '아니요. 색상 수는 교체 시간만 추가합니다. 첫 색상 이후 교체마다 1.75분을 계획 가정으로 더합니다.' },
  { question: '계산된 가격은 최종 견적서인가요?', answer: '아닙니다. 입력한 시간당 요율을 사용한 기본 인건비 추정치입니다. 실, 심지, 디지타이징, 준비, 마감, 간접비, 세금, 이윤은 포함되지 않습니다.' },
];
const howTo = [
  { name: '디자인 측정', text: '자수할 너비와 높이를 센티미터로 입력합니다. 전체 자수틀 크기가 아니라 실제 스티치 영역을 사용하세요.' },
  { name: '스티치 계획 설명', text: '주요 스티치 종류를 고르고 센티미터당 밀도와 실 색상 수를 입력합니다.' },
  { name: '제작 가정 추가', text: '분당 스티치 수와 시간당 인건비를 입력합니다. 통화 단위는 일관되게 유지하세요.' },
  { name: '계획 견적 확인', text: '환산 스티치 수, 제작 시간, 준비 시간, 기본 가격을 사용해 디지타이징이나 견적 전에 디자인을 비교합니다.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ko' };
const ui: EmbroideryStitchPricingEstimatorUI = {
  intro: '자수틀 안에서 스티치 계획을 만들고 제작 부담과 인건비 가치를 확인하세요.', stageLabel: '스티치 자수틀', controlsLabel: '스티치 계획 만들기', resultLabel: '기본 인건비 견적', widthLabel: '디자인 너비', heightLabel: '디자인 높이', densityLabel: '스티치 밀도', stitchLabel: '주요 스티치', coloursLabel: '실 색상 수', speedLabel: '기계 속도', rateLabel: '시간당 요율', widthHint: '자수 영역 cm', heightHint: '자수 영역 cm', densityHint: 'cm당 스티치', coloursHint: '첫 색상은 교체 없음', speedHint: '분당 스티치', rateHint: '시간당 통화 금액', stitchRunning: '러닝 스티치', stitchSatin: '새틴 스티치', stitchFill: '필 스티치', stitchTatami: '타타미 필', stitchRunningNote: '커버가 적은 가벼운 윤곽과 글자.', stitchSatinNote: '실 경로가 집중된 매끄러운 기둥과 테두리.', stitchFillNote: '실과 제작 부담을 늘리는 단단한 커버.', stitchTatamiNote: '이 모델에서 가장 높은 계획 계수를 가진 겹침 필.', selectStitch: '스티치 종류 선택', emptyResult: '스티치 계획을 입력하면 자수틀이 활성화됩니다.', stitchesUnit: '환산 스티치', minutesUnit: '분', hoursUnit: '시간', priceUnit: '통화 단위', areaLabel: '자수 면적', effectiveLabel: '환산 스티치 수', stitchTimeLabel: '스티치 시간', productionLabel: '제작 시간', setupLabel: '색상 준비', changesLabel: '색상 교체', basePriceLabel: '기본 인건비 견적', estimateBadge: '견적 준비 완료', attentionBadge: '규모 확인', warningHighVolume: '스티치 수가 많습니다. 견적 전에 실제 기계 샘플을 테스트하세요.', warningLongRun: '제작 시간이 깁니다. 자수틀 작업, 실 끊김, 마감 시간을 별도로 확인하세요.', invalidMessage: '크기, 밀도, 속도, 시간당 요율에 양수를 입력하세요.', formulaTitle: '계산되는 항목', formulaText: '면적에 밀도의 제곱을 곱해 커버 기준을 만듭니다. 스티치 계수로 환산 스티치가 되고 첫 색상 이후 교체마다 1.75분이 추가됩니다.', noteTitle: '계획의 한계', noteText: '투명한 추정 계산기이며 디지타이징된 기계 파일이나 최종 견적서가 아닙니다. 재료, 준비, 마감, 간접비, 세금, 이윤은 직접 더하세요.', reset: '예시 초기화', copied: '요약 복사 완료', copySummary: '요약 복사', canvasAlt: '현재 밀도를 실 선으로 보여주는 천 자수틀',
};
export const content: ToolLocaleContent<EmbroideryStitchPricingEstimatorUI> = { slug, title, description, ui, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema], seo: [
  { type: 'title', text: '자수 스티치 수와 인건비를 추정하는 방법', level: 2 },
  { type: 'paragraph', html: '자수 디자인에는 두 가지 계획 질문이 있습니다. 무늬에 얼마나 많은 실 작업이 들어가며 기계와 작업자가 얼마나 오래 묶이는가입니다. 이 계산기는 두 항목을 함께 보여 주고 크기, 밀도, 스티치, 색상, 속도, 요율을 비교 가능한 계획 값으로 바꿉니다.' },
  { type: 'title', text: '스티치 수 모델', level: 3 },
  { type: 'paragraph', html: '기준은 자수 면적에 센티미터당 밀도의 제곱을 곱한 값입니다. 상대 계수로 스티치 계열을 반영합니다. 러닝은 가볍고 새틴은 기준이며 필과 타타미는 점점 밀도가 높은 계획 사례입니다. 이는 환산 작업량의 추정치이며 디지타이징 소프트웨어가 내보내는 정확한 수가 아닙니다.' },
  { type: 'table', headers: ['입력', '변경되는 항목', '보장하지 않는 항목'], rows: [['너비와 높이', '커버 면적과 기본 스티치 수', '디지타이징 파일의 정확한 외곽선'], ['밀도와 스티치 종류', '환산 실 작업과 기계 시간', '모든 원단에 맞는 보편적 품질 설정'], ['색상', '첫 색상 이후 교체 시간', '실 자르기나 실 끊김 횟수'], ['속도와 요율', '제작 시간과 인건비 가치', '고객에게 제공할 최종 견적']] },
  { type: 'title', text: '추정치를 책임 있는 가격으로 바꾸기', level: 3 },
  { type: 'paragraph', html: '표시 가격은 작업 시간에 시간당 요율을 곱한 값일 뿐입니다. 실제 견적에는 디지타이징, 실, 심지, 자수틀 작업, 기계 준비, 샘플, 실 자르기, 재작업, 마감, 간접비, 세금, 이윤을 더해야 합니다. 항목을 분리해 두면 적은 스티치 수 뒤에 긴 준비 작업이 숨지 않습니다.' },
  { type: 'tip', title: '견적 전에 계획을 테스트하세요', html: '사용할 원단과 심지로 대표 샘플을 제작하세요. 시간과 실의 움직임을 추정치와 비교한 뒤 기계별 속도와 준비 가정을 조정하세요.' },
  { type: 'title', text: '제작 내역 읽기', level: 3 },
  { type: 'list', items: ['환산 스티치 수는 계수를 적용한 뒤의 커버 작업량을 보여 줍니다.', '제작 시간은 환산 스티치 수를 기계 속도로 나눈 값입니다.', '색상 준비는 첫 색상 이후 교체마다 1.75분을 더합니다.', '기본 인건비는 전체 시간을 60으로 나눈 뒤 시간당 요율을 곱한 값입니다.'] },
] };
