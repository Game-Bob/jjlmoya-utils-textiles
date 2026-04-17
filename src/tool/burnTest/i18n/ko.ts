import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'textile-burn-test';
const title = '섬유 연소 테스트';
const description =
  '연소 거동을 분석하여 모든 원단의 실제 성분을 식별합니다. 면, 울, 실크 및 합성 섬유를 과학적으로 구분해 보세요.';

const faqData = [
  {
    question: '집에서 연소 테스트를 수행해도 안전한가요?',
    answer:
      '네, 철저한 주의를 기울인다면 안전합니다. 금속 집게를 사용하고, 내화성이 있는 표면(세라믹 또는 금속) 위에서 작업하며, 근처에 물을 준비하고, 환기가 잘 되는 곳에서 테스트를 진행하세요. 1x1cm 정도의 작은 샘플이나 실 몇 가닥만 있으면 충분합니다.',
  },
  {
    question: '면은 탈 때 어떤 냄새가 나나요?',
    answer:
      '면은 순수 셀룰로오스입니다. 탈 때 종이나 마른 잎이 타는 것과 똑같은 냄새가 납니다. 남은 재는 회색이며 매우 곱고 만지면 부서집니다.',
  },
  {
    question: '섬유 끝에 딱딱하고 검은 알갱이가 생기는 것은 무엇을 의미하나요?',
    answer:
      '이는 폴리에스테르나 나일론 같은 합성 섬유(플라스틱)의 명확한 징후입니다. 녹으면서 폴리머가 뭉쳐져 플라스틱 알갱이가 되는데, 이는 천연 섬유의 재와 달리 부서지지 않습니다.',
  },
  {
    question: '왜 울은 탈 때 고약한 냄새가 나나요?',
    answer:
      '울과 실크는 황을 포함한 동물성 단백질입니다. 불에 닿으면 머리카락이나 깃털이 타는 듯한 자극적인 냄새를 풍깁니다. 이것이 식물성 섬유와 구분하는 가장 쉬운 방법입니다.',
  },
];

const howToData = [
  {
    name: '대표 샘플 추출',
    text: '원단에서 작은 사각형을 자르거나, 더 정확하게는 경사(수직)와 위사(수평)에서 실을 몇 가닥 뽑아냅니다.',
  },
  {
    name: '불꽃 접근 관찰',
    text: '섬유를 불꽃에 직접 닿지 않게 천천히 가까이 가져갑니다. 섬유가 수축하는지, 녹는지, 아니면 즉시 불이 붙는지 관찰합니다.',
  },
  {
    name: '불꽃 종류 및 연기 분석',
    text: '불꽃이 일정한지 아니면 저절로 꺼지는지, 그리고 연기가 흰색인지 검은색인지 혹은 연기가 나지 않는지 확인합니다.',
  },
  {
    name: '잔여물 및 냄새 평가',
    text: '식은 후 남은 재나 알갱이를 만져보고 냄새(종이, 머리카락 또는 화학 물질)를 맡아 섬유군을 확인합니다.',
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
  inLanguage: 'ko',
};

const flame = {
  cellulosic: '빠르고 밝게 타오름(노란 불꽃). 녹지 않음. 불꽃에서 멀어져도 계속 탐.',
  protein: '천천히 타며 치익 소리가 나고 불꽃으로부터 수축함. 불꽃에서 멀어지면 저절로 꺼짐.',
  synthetic: '녹으면서 빠르게 수축하고 녹은 플라스틱처럼 떨어짐. 그을음이 섞인 불꽃.',
};

const odor = {
  paper: '종이 타는 냄새, 나무, 마른 잎.',
  hair: '머리카락 타는 냄새, 타는 뿔 냄새, 깃털.',
  chemical_sweet: '방향족 화학 냄새(달콤함, 과일향).',
  chemical_fishy: '시큼한 화학 냄새(생선, 구운 고기).',
  vegetable: '익힌 채소 냄새(셀러리).',
};

const residue = {
  ash_soft: '고운 회색/검은색 재, 부드럽고 가벼움(만지면 부서짐).',
  ash_shape: '섬유 모양을 유지하는 회색 재(잘 부스러짐).',
  bead_crushable: '속이 빈/부서지기 쉬운 검은 덩어리(손가락으로 쉽게 으깨짐).',
  bead_hard: '딱딱하고 유리 같은 알갱이. 손가락으로 깰 수 없음.',
  bead_irregular: '딱딱하고 불규칙한 검은 덩어리.',
};

const smoke = {
  white_gray: '흰색 / 연한 회색.',
  gray: '중간 회색.',
  black: '짙고 어두운 검은색.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'AATCC TM20: Fiber Analysis - Qualitative',
      url: 'https://members.aatcc.org/store/tm20/485/',
    },
    {
      name: 'Textile Fibers: Identification and Testing - NIST',
      url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/circ/nbscircular41e3.pdf',
    },
    {
      name: 'Burn Test Chart for Fiber Identification - Fabric Mart',
      url: 'https://fabricmartfabrics.com/pages/burn-test-chart',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '필라멘트의 과학 수사',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '연소 테스트는 전자 현미경을 사용하지 않고도 천연 폴리머와 합성 폴리머를 구분할 수 있는 가장 빠르고 정확한 분석 방법입니다. 섬유에 열을 가함으로써 분자 거동이 식물 셀룰로오스부터 동물성 단백질, 석유 유도체에 이르는 그 기원을 드러냅니다.',
    },
    {
      type: 'card',
      title: '셀룰로오스 섬유',
      icon: 'mdi:leaf',
      html: '<strong>면</strong>과 <strong>리넨</strong>은 녹지 않고 빠르게 탑니다. 나무나 식물에서 유래했기 때문에 종이 타는 냄새가 나며, 불면 날아가는 가벼운 회색 재를 남깁니다.',
    },
    {
      type: 'card',
      title: '단백질 섬유',
      icon: 'mdi:sheep',
      html: '<strong>울</strong>과 <strong>실크</strong>는 불꽃에서 멀어집니다. 머리카락 타는 듯한 특유의 냄새는 황과 케라틴의 존재를 나타냅니다. 잔여물은 만지면 부서지는 검은 알갱이입니다.',
    },
    {
      type: 'card',
      title: '합성 섬유',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>폴리에스테르</strong>와 <strong>나일론</strong>은 본질적으로 플라스틱입니다. 녹으면서 뜨거운 방울을 형성하고 깨뜨릴 수 없는 유리 같은 알갱이로 굳으며, 날카로운 화학 냄새가 납니다.',
    },
    {
      type: 'title',
      text: '화학적 증거 매트릭스',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '정확한 분석을 위해서는 최소 세 가지 증거를 교차 확인해야 합니다. 냄새는 혼방 소재를 식별하는 데 가장 신뢰할 수 있는 지표입니다: 만약 "리넨" 원단에서 약간의 플라스틱 향이 나고 딱딱한 잔여물이 남는다면, 이는 표시되지 않은 폴리에스테르 혼방임을 나타냅니다.',
    },
    {
      type: 'tip',
      title: '실험실 안전 프로토콜',
      html: '<strong>환기 필수:</strong> 합성 섬유는 탈 때 독성 가스를 방출합니다. 밀폐된 공간에서 이 테스트를 수행하지 마세요.<br><strong>즉시 소화:</strong> 항상 근처에 물 그릇을 준비하세요. 일부 합성 섬유는 녹아서 피부에 달라붙을 수 있습니다.',
    },
  ],
  ui: {
    investigationLabel: '조사',
    stepPrefix: '단계',
    stepCompleted: '분석 완료',
    resetLabel: '재시작',
    positiveId: '긍정 식별',
    flameLabel: '불꽃 거동',
    odorLabel: '후각 흔적',
    residueLabel: '잔여물',
    identifiedAs: '샘플이 다음과 같이 긍정 식별됨:',
    safetyTitle: '안전 프로토콜',
    safetyText:
      '환기가 잘 되는 곳에서 내화성 표면 위에서 이 테스트를 수행하세요. 금속 집게를 사용하고 근처에 물을 준비하세요.',
    questions: {
      flame: '불꽃에서의 거동은?',
      odor: '특징적인 냄새는?',
      residue: '최종 잔여물은?',
      smoke: '연기의 종류는?',
    },
    fiberData: {
      cotton: { name: '면 (코튼)', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: '천연 식물 섬유. 부드럽고 통기성이 좋음. 기본 소재의 왕.' },
      linen: { name: '리넨', icon: 'mdi:leaf', color: '#A7F3D0', description: '매우 강한 식물 섬유. 시원하고 특유의 구김이 있음.' },
      wool: { name: '울 / 메리노', icon: 'mdi:sheep', color: '#FCD34D', description: '동물성 단백질 섬유. 우수한 단열성과 탄력성.' },
      silk: { name: '실크 (비단)', icon: 'mdi:ticket-percent', color: '#F472B6', description: '동물성 장섬유. 자연스러운 광택과 드라이한 촉감.' },
      cashmere: { name: '캐시미어', icon: 'mdi:crown', color: '#F59E0B', description: '고급 캐시미어 염소 섬유. 매우 부드럽고 가벼우며 따뜻함.' },
      mohair: { name: '모헤어', icon: 'mdi:shimmer', color: '#14B8A6', description: '앙고라 염소의 "다이아몬드 섬유". 자연스러운 광택과 높은 내구성.' },
      angora: { name: '앙고라', icon: 'mdi:rabbit', color: '#F9FAFB', description: '앙고라 토끼 털. 푹신한 "헤일로" 효과와 극한의 가벼움으로 유명함.' },
      alpaca: { name: '알파카', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: '안데스의 보물. 중공 구조로 따뜻하고 저자극적이며 실키한 섬유.' },
      polyester: { name: '폴리에스테르', icon: 'mdi:oil', color: '#94A3B8', description: '석유 기반 합성 섬유. 내구성이 좋고 구김이 없으나 통기성이 낮음.' },
      nylon: { name: '나일론 (폴리아미드)', icon: 'mdi:parachute', color: '#2DD4BF', description: '인장 강도와 마모에 매우 강한 합성 섬유.' },
      acrylic: { name: '아크릴', icon: 'mdi:resize', color: '#450A0A', description: '울 모조 합성 섬유. 부드럽고 따뜻하지만 보풀이 잘 생김.' },
    },
    burnTestData: [
      { fiberId: 'cotton', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_soft },
      { fiberId: 'linen', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_shape },
      { fiberId: 'wool', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'silk', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'cashmere', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'mohair', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'angora', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'alpaca', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'polyester', flame: flame.synthetic, odor: odor.chemical_sweet, smoke: smoke.black, residue: residue.bead_hard },
      { fiberId: 'nylon', flame: flame.synthetic, odor: odor.vegetable, smoke: smoke.white_gray, residue: residue.bead_hard },
      { fiberId: 'acrylic', flame: flame.synthetic, odor: odor.chemical_fishy, smoke: smoke.black, residue: residue.bead_irregular },
    ],
  },
};
