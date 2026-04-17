import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'fabric-truthfulness';
const title = '섬유의 진실: 섬유 품질 분석';
const description = '의류의 혼용률을 분석하여 실제 품질을 확인해 보세요. 진짜 면일까요, 아니면 비싼 플라스틱일까요? 과학적인 섬유 분석 도구입니다.';

const faqData = [
  {
    question: '패션계에서 말하는 "그린워싱"이란 무엇인가요?',
    answer: '실질적인 근거 없이 "친환경"이나 "지속 가능성"이라는 용어를 마케팅에 사용하는 수법을 말합니다. 실제 섬유 혼용률을 분석하는 것이 해당 의류가 정말 천연 소재인지 합성 소재인지 확인하는 유일한 방법입니다.',
  },
  {
    question: '왜 폴리에스터는 대개 면보다 품질이 낮다고 여겨지나요?',
    answer: '폴리에스터는 플라스틱(PET)의 일종입니다. 내구성은 좋지만 통기성이 없고, 박테리아로 인한 불쾌한 냄새를 유발하기 쉬우며, 세탁할 때마다 미세 플라스틱을 배출합니다. 면이나 린넨 같은 천연 섬유는 더 나은 체온 조절 기능을 제공합니다.',
  },
  {
    question: '옷에 폴리우레탄(엘라스테인)이 들어있는 것이 나쁜가요?',
    answer: '소량(1-5%)의 폴리우레탄(라이크라)은 편안함과 핏을 제공합니다. 하지만 천연 섬유와 플라스틱을 섞는 것은 의류 재활용을 매우 어렵게 만들며, 이는 종종 해당 제품이 "패스트 패션"임을 나타냅니다.',
  },
  {
    question: '라벨을 보고 고품질 의류를 어떻게 판별하나요?',
    answer: '단일 소재 구성(면 100%, 울 100% 등)을 찾아보세요. 복잡한 혼방은 대개 생산 원가를 낮추기 위해 사용되며, 매력적인 상표명 뒤에 합성 섬유를 숨기기도 합니다.',
  },
];

const howToData = [
  {
    name: '내부 라벨 확인',
    text: '의류 안쪽 측면이나 목 뒷부분에 있는 흰색 성분 표시 라벨을 찾습니다.',
  },
  {
    name: '성분 식별',
    text: '각 섬유의 비율(예: 면 70%, 폴리에스터 30%)을 읽습니다.',
  },
  {
    name: '분석기에 데이터 입력',
    text: '라벨에 적힌 섬유 비율을 도구에 입력하여 기술적인 품질 점수를 얻습니다.',
  },
  {
    name: '진단 결과 해석',
    text: '생성된 보고서를 확인하여 해당 의류의 통기성, 내구성 및 합성 소재 혼용에 따른 특별한 관리가 필요한지 이해합니다.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: '섬유의 진실',
    addFiber: '섬유 추가',
    total: '합계',
    composition: '혼용률 분석',
    description: '옷 라벨에 적힌 비율을 그대로 입력하여 해당 의류 품질의 진실을 확인해 보세요.',
    verdict: '판정',
    breathability: '통기성',
    durability: '내구성',
    warmth: '보온성',
    careWarning: '특별 관리 주의사항',
    specialCareWarning: '표준 세탁: 항상 실제 라벨의 지침을 따르세요.',
    validationError: '판정을 보려면 혼용률 합계가 정확히 100%여야 합니다.',
    actualTotal: '현재 합계',
    missingLabel: '부족함',
    disclaimer: '통기성, 내구성, 보온성 데이터는 각 섬유 유형별 업계 평균에 기반한 추정치입니다.',
    careWarnings: {
      delicate: '매우 섬세함: 찬물에 손세탁하세요. 건조기 사용을 금하며, 세게 짜지 마세요.',
      wool: '울 / 고급 수모: 전용 코스를 사용하여 찬물에 세탁하세요. 변형 방지를 위해 평평한 곳에 펴서 말리세요. 건조기 사용을 금합니다.',
      linen: '린넨: 주름이 매우 잘 생기는 소재입니다. 약간 젖은 상태에서 다림질하면 효과가 좋습니다.',
      semisynthetic: '반합성 섬유: 젖었을 때 강도가 약해집니다. 조심스럽게 다루고 강한 탈수는 피하세요.',
      standard: '표준 세탁: 항상 실제 라벨의 지침을 따르세요.',
    },
    fiberData: {
      cotton: {
        name: '면',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: '린넨',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: '울 / 메리노',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: '실크',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: '캐시미어',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: '모헤어',
        family: 'natural',
        breathability: 8,
        durability: 9,
        warmth: 9,
        isNoble: true,
      },
      angora: {
        name: '앙고라',
        family: 'natural',
        breathability: 8,
        durability: 4,
        warmth: 10,
        isNoble: true,
      },
      alpaca: {
        name: '알파카',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: '폴리에스터',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: '비스코스 / 레이온',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: '나일론 (폴리아미드)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: '아크릴',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: '비싼 플라스틱',
        description: '이 옷의 대부분은 석유로 만들어졌습니다. 땀이 잘 차고 보풀(필링)이 빠르게 생길 수 있습니다.',
      },
      hook: {
        label: '마케팅 미끼',
        description: '아주 적은 비율의 고급 섬유는 단지 라벨에 적기 위해 들어간 것입니다. 실질적인 장점을 느끼기는 어렵습니다.',
      },
      fragile: {
        label: '부드럽지만 연약함',
        description: '촉감은 매우 좋지만 세탁 시 주의가 필요합니다. 변형되거나 줄어들기 쉬운 소재입니다.',
      },
      natural: {
        label: '천연 품질',
        description: '통기성이 좋고 내구성이 뛰어난 의류입니다. 민감한 피부나 장시간 착용에 적합합니다.',
      },
      technical: {
        label: '기능성 / 초합성 의류',
        description: '특수 스포츠웨어가 아니라면 순수 플라스틱에 비용을 지불하고 있는 셈입니다.',
      },
      luxury: {
        label: '진정한 럭셔리',
        description: '안락함과 내구성에 대한 투자입니다. 소재에 걸맞은 정성스러운 관리가 필요합니다.',
      },
      balanced: {
        label: '균형 잡힌 혼방',
        description: '실용적인 조합으로, 대개 원가와 내구성 사이의 균형을 맞추기 위한 구성입니다.',
      },
    },
  },
  seo: [
    { type: 'title', text: '라벨 뒷면의 진실: 섬유 혼용률 가이드', level: 2 },
    { type: 'paragraph', html: '왜 어떤 브랜드 티셔츠는 땀이 그렇게 많이 차는지, 혹은 왜 "울" 스웨터가 견딜 수 없이 따가운지 궁금했던 적이 있나요? 그 답은 디자인이 아니라 섬유의 화학적 성질에 있습니다.' },
    { type: 'paragraph', html: '<strong>패스트 패션</strong>이 지배하는 세상에서 옷감의 품질은 일시적인 미학에 밀려 뒷전이 되었습니다. 하지만 섬유 구성을 이해하는 것은 현명하고 오래가며 피부에 자극 없는 구매를 위한 유일한 방법입니다. 저희의 <strong>섬유의 진실</strong> 도구는 공식 성분 비율을 분석하여 고품질 의류인지 아니면 단순히 가공된 플라스틱 덩어리인지 밝혀냅니다.' },
    { type: 'title', text: '분석 방법론', level: 2 },
    { type: 'paragraph', html: '유럽 및 북미 산업 표준에서 추출한 세 가지 핵심 요소를 바탕으로 가중치 알고리즘을 사용합니다.' },
    { type: 'list', items: ['<strong>통기성:</strong> 섬유가 수증기와 공기를 통과시키는 능력.', '<strong>내구성:</strong> 마찰, 인장 및 <strong>필링</strong>(보풀) 발생에 대한 저항성.', '<strong>열 효율:</strong> 열을 유지하거나 기계적인 시원함을 제공하는 능력.'] },
    { type: 'tip', title: '중요', html: 'EU와 미국에서 판매되는 모든 의류는 성분 함량이 높은 순서대로 라벨에 기재해야 할 법적 의무가 있습니다. 라벨이 없거나 읽을 수 없는 옷은 주의하세요. 최소한의 섬유 안전 기준을 충족하지 못했을 가능성이 큽니다.' },
    { type: 'title', text: '소매 시장의 흔한 "속임수"', level: 2 },
    { type: 'paragraph', html: '평범한 옷의 가치를 높여 보이게 만드는 매우 정교한 마케팅 수법들이 존재합니다. 이를 간파하는 법을 알려드립니다.' },
    { type: 'card', title: '고급 섬유 미끼', icon: 'mdi:alert', html: '큰 글씨로 "캐시미어 함유" 또는 "실크 함유"라고 적힌 라벨을 볼 수 있습니다. 실제 함량을 보면 실크 3%, 폴리에스터 97%인 경우가 많습니다. 그 3%는 부드러움이나 광택, 보온성에 거의 기여하지 못하며, 단지 브랜드가 가격을 20% 올리기 위한 용도일 뿐입니다.' },
    { type: 'card', title: '"친환경 비스코스"의 신화', icon: 'mdi:leaf', html: '비스코스는 셀룰로오스(목재)에서 추출되지만, 현재의 제조 공정은 대개 환경 오염을 심하게 유발하며 최종 결과물은 젖었을 때 강도가 급격히 떨어지는 섬유입니다. <strong>라이오셀</strong>이나 <strong>텐셀</strong>이 아니라면 내구성은 한계가 있습니다.' },
    { type: 'title', text: '카테고리별 심층 분석', level: 2 },
    { type: 'title', text: '1. 천연 섬유 (자랑스러운 유기농)', level: 3 },
    { type: 'paragraph', html: '품질의 기준입니다. 장섬유 <strong>면</strong>(피마 또는 이집트 면 등)은 영원한 부드러움을 제공합니다. <strong>린넨</strong>은 열을 방출하고 습기를 흡수하는 분자 구조 덕분에 과학적으로 더운 날씨에 가장 적합한 섬유입니다. <strong>울</strong>과 <strong>헴프</strong>(대마)는 천연 항균 작용을 하여 냄새가 잘 배지 않으므로 자주 세탁할 필요가 없습니다.' },
    { type: 'title', text: '2. 반합성 섬유 (하이브리드)', level: 3 },
    { type: 'paragraph', html: '여기에는 <strong>비스코스</strong>, <strong>레이온</strong>, <strong>모달</strong>이 포함됩니다. 실크 같은 촉감을 주지만 가격은 면 수준입니다. 드레이프성이 좋은 옷에 탁월하지만, 물을 많이 흡수하고 마르는 데 시간이 오래 걸려 관리를 잘못하면 곰팡이가 생길 수도 있습니다. <strong>라이오셀(텐셀)</strong>은 이 그룹 중 생산 공정이 친환경적이고 내구성이 뛰어난 프리미엄 버전입니다.' },
    { type: 'title', text: '3. 합성 섬유 (실로 뽑아낸 플라스틱)', level: 3 },
    { type: 'paragraph', html: '<strong>폴리에스터</strong>는 시장의 제왕입니다. 저렴하고 주름이 생기지 않으며 반영구적입니다(말 그대로 분해되는 데 200년이 걸립니다). 문제는 숨을 쉬지 않는다는 것입니다. 옷감과 피부 사이에 습한 미세 기후를 형성하여 박테리아가 번식하기 아주 좋은 환경을 만듭니다. <strong>아크릴</strong>은 울을 흉내 낸 저렴한 소재입니다. 따뜻하지만 정전기가 심하고 세탁 두 번에 보풀이 가득 생기기도 합니다.' },
    { type: 'title', text: '의류 관리를 위한 조언', level: 2 },
    { type: 'paragraph', html: '세계 최고의 옷이라도 부적절한 세탁 한 번에 망가질 수 있습니다. 다음은 보편적인 황금률입니다.' },
    { type: 'tip', title: '찬물 세탁이 가장 좋습니다', html: '의류의 90%는 30°C 이상의 온도를 필요로 하지 않습니다. 열은 탄력 섬유를 손상시키고 천연 섬유를 수축시킵니다.' },
    { type: 'tip', title: '적당량의 세제 사용', html: '세제가 과하면 잔여물이 남아 오염을 유도하고 옷감을 뻣뻣하게 만듭니다.' },
    { type: 'tip', title: '건조기: 조용한 적', html: '건조기 필터에 쌓이는 먼지는 마찰과 열에 의해 옷에서 떨어져 나간 옷감의 일부입니다.' },
    { type: 'tip', title: '뒤집어서 세탁하기', html: '세탁조나 다른 옷과의 마찰로부터 색상과 자수를 보호합니다.' },
    { type: 'paragraph', html: '"적게 사고, 더 잘 고르고, 오래 입기." —— 이 분석 도구는 의식 있고 수준 높은 옷장을 향한 첫걸음입니다.' },
  ],
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'FTC - 섬유 제품 라벨링 가이드',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: '유럽 위원회 - 섬유 규제',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - 섬유 관리 기호',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
