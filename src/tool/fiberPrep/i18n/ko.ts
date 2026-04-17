import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'fiber-preparation-natural-dyeing';
const title = '염색을 위한 섬유 전처리';
const description =
  '천연 염색 전 양모, 실크, 면을 준비하기 위한 WOF 계산기, 매염 프로토콜 및 온도 승온 가이드.';

const faqData = [
  {
    question: 'WOF (Weight of Fiber)란 무엇인가요?',
    answer:
      'WOF는 필요한 염료나 매염제의 양을 계산하기 위한 표준 시스템입니다. 섬유의 건조 중량을 기준으로 합니다. 예를 들어, 양모 100g에 대해 양파 껍질 100% WOF란 100g의 양파 껍질이 필요함을 의미합니다.',
  },
  {
    question: '매염이 왜 필요한가요?',
    answer:
      '매염제(명반 등)는 섬유와 천연 염료 사이의 화학적 다리 역할을 합니다. 매염 없이는 대부분의 염료가 고정되지 않고 첫 세탁 시 씻겨 내려갑니다(낮은 일광 및 세탁 견뢰도).',
  },
  {
    question: '동물성 섬유와 식물성 섬유의 전처리 차이점은 무엇인가요?',
    answer:
      '동물성 섬유(양모와 같은 단백질 섬유)는 명반만으로도 매우 잘 염색됩니다. 식물성 섬유(면이나 린넨 같은 셀룰로오스 섬유)는 금속 매염제를 받아들이기 쉽도록 사전에 탄닌 처리를 하는 공정이 필요합니다.',
  },
  {
    question: '염색에서 승온 가이드(Thermal Ramp)란 무엇인가요?',
    answer:
      '염액의 온도를 단계적으로(분당 약 1~2°C) 올리는 것을 말합니다. 급격한 온도 변화로 인한 열 충격을 피하기 위해 매우 중요합니다. 특히 양모는 급격한 온도 변화 시 펠트화(엉키고 줄어듦)될 수 있습니다.',
  },
];

const howToData = [
  {
    name: '정련 및 세척',
    text: '매염제가 균일하게 침투하는 것을 방해하는 기름기, 왁스 또는 공업용 풀을 제거하기 위해 중성 세제로 섬유를 세척합니다.',
  },
  {
    name: '건조 중량 측정',
    text: '건조된 상태의 무게를 정확히 측정합니다. 이 값이 모든 WOF(Weight of Fiber) 계산의 기준이 됩니다.',
  },
  {
    name: '계산 및 매염 욕조',
    text: '매염제(예: 15% WOF 명반)를 뜨거운 물에 녹이고 섬유를 담근 후, 프로토콜에 따라 온도를 일정하게 유지합니다.',
  },
  {
    name: '숙성 및 헹굼',
    text: '매염한 섬유를(가급적 24시간) 휴지시켜 금속이 깊숙이 고정되게 한 후, 최종 염색 공정으로 넘어갑니다.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Artista Textil y Tintes Naturales',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '매염의 과학',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '염색을 위해 섬유를 준비하는 것은 단순히 세척하는 것 이상입니다. 그것은 분자 수준에서의 화학 공정이며 "매염"이라고 불립니다. 이 단어는 라틴어 <i>mordere</i>(깨물다)에서 유래했으며, 그 역할은 섬유와 염료 사이의 화학적 가교 역할을 하는 것입니다. 이 다리가 없다면 대부분의 천연 염료는 첫 번째 헹굼에서 그냥 씻겨 나갈 것입니다.',
    },
    {
      type: 'card',
      title: '핵심 개념',
      icon: 'mdi:molecule',
      html: '매염제는 섬유의 폴리머와 염료 모두에 동시에 결합할 수 있는 가용 원자가를 가지고 있습니다.',
    },
    {
      type: 'title',
      text: '섬유별 차이점',
      level: 2,
    },
    {
      type: 'card',
      title: '단백질 섬유: 양모 및 실크',
      icon: 'mdi:sheep',
      html: '이 섬유들은 금속에 대해 매우 높은 자연적 친화력을 가진 아미노산 사슬로 구성되어 있습니다. 열은 섬유의 비늘(스케일)을 열어 명반염이 깊숙이 침투하게 합니다. 부드러움을 유지하기 위한 산성 pH를 유지하기 위해 <strong>주석영(크림 오브 타르타르)</strong> 사용이 필수적입니다.',
    },
    {
      type: 'card',
      title: '셀룰로오스 섬유: 면 및 린넨',
      icon: 'mdi:leaf',
      html: '셀룰로오스는 쉽게 결합할 수 있는 자리가 적습니다. 그래서 우리는 <strong>2단계 프로토콜</strong>을 사용합니다. 먼저 탄닌을 셀룰로오스에 부착시키고, 그다음에 명반을 그 탄닌에 부착시킵니다. 이 전처리 없이는 색상이 탁해지고 견뢰도가 낮아집니다.',
    },
    {
      type: 'title',
      text: '욕조 관리: WOF, 온도 및 pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '전문적이고 재현 가능한 결과를 얻기 위해서는 <strong>WOF (Weight of Fabric)</strong> 개념이 기본입니다. 모든 것은 섬유의 건조 중량에 대한 백분율로 측정됩니다. 매염제가 과도하면 섬유가 포화되어 촉감이 거칠어지거나 금속 침전물로 인해 최종 색상이 변할 수 있습니다.',
    },
    {
      type: 'tip',
      title: '승온 가이드',
      html: '열은 촉매 역할을 하여 화학 반응을 가속화합니다. 그러나 양모의 급격한 온도 변화는 비늘이 서로 영구적으로 엉키게 하여 펠트화 및 수축을 유발할 수 있습니다.',
    },
    {
      type: 'tip',
      title: 'pH 요인',
      html: '많은 천연 염료는 살아있는 pH 지시약입니다. pH는 염의 용해도와 섬유 보존에 영향을 미칩니다. 실크는 염액이 너무 알칼리성이 되면 광택을 잃을 수 있습니다. 구연산이나 탄산칼슘으로 pH를 조절하는 것은 매우 중요합니다.',
    },
    {
      type: 'title',
      text: '물질 및 안전',
      level: 2,
    },
    {
      type: 'card',
      title: '명반 (칼륨 명반)',
      icon: 'mdi:bottle-tonic-skull',
      html: '범용 매염제이며 무색이고 매우 효과적입니다. 단백질 섬유의 기준이 되는 약제입니다.',
    },
    {
      type: 'card',
      title: '주석영 (크림 오브 타르타르)',
      icon: 'mdi:spoon-sugar',
      html: '동물성 섬유의 고착과 부드러움을 향상시키는 조제입니다. pH를 산성으로 유지합니다.',
    },
    {
      type: 'tip',
      title: '안전 프로토콜',
      html: '염색용 냄비는 전용으로 사용하고, 식용으로는 절대 사용하지 마세요.<br>가루 형태의 매염제를 다룰 때는 장갑과 마스크를 착용하세요.<br>증기가 쌓이지 않도록 항상 환기를 확보하세요.',
    },
  ],
  ui: {
    profileTitle: '프로필 선택',
    profileDesc: '화학 프로토콜은 섬유 분자의 기원에 따라 나뉩니다',
    proteinTitle: '단백질 섬유',
    proteinOrigin: '동물성 기원',
    proteinDesc: '양모, 실크, 알파카, 모헤어 또는 캐시미어. 온도 조절과 산성 pH가 필요합니다.',
    cellulosicTitle: '셀룰로오스 섬유',
    cellulosicOrigin: '식물성 기원',
    cellulosicDesc: '면, 린넨, 대마 또는 황마. 색소를 고정하기 위해 탄닌을 이용한 사전 매염이 필요합니다.',
    wofTitle: 'WOF 계산기',
    weightLabel: '건조 의류 무게 (g)',
    weightUnit: 'g',
    wofEmptyMsg: '계산을 활성화하려면 프로필을 선택하세요',
    alumLabel: '명반',
    cremLabel: '주석영',
    ironLabel: '철 (주의)',
    rampTitle: '승온 가이드',
    rampEmptyTitle: '선택 대기 중',
    rampEmptyDesc: '섬유를 선택하여 온도 사이클을 확인하세요',
    phTitle: 'pH 안정제',
    phDesc: '색상 채도에 중요한 요인',
    phVolumeLabel: '욕조 용량 (L)',
    phSliderLabel: '현재 pH',
    phAcidLabel: '산성 (1)',
    phAlkalineLabel: '알칼리성 (14)',
    phEmptyMsg: '안정제를 활성화하려면 프로필을 선택하세요',
    phStrings: {
      optimal: '최적 pH',
      raisePrefix: '탄산칼슘 또는 소다회를 추가하세요. 약',
      raiseSuffix: 'g을 넣으면 pH가 다음으로 상승:',
      lowerPrefix: '구연산 또는 식초를 추가하세요. 약',
      lowerSuffix: 'ml를 넣으면 pH가 다음으로 하락:',
    },
    proteinFibers: [
      { id: 'wool', name: '양모 / 메리노', icon: 'mdi:sheep' },
      { id: 'silk', name: '실크', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: '캐시미어', icon: 'mdi:crown' },
      { id: 'mohair', name: '모헤어', icon: 'mdi:shimmer' },
      { id: 'angora', name: '앙고라', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: '알파카', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: '면', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: '린넨', icon: 'mdi:leaf' },
    ],
  },
};
