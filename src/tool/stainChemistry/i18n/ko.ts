import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'stain-chemical-protocol';
const title = '섬유 얼룩 제거 화학 프로토콜';
const description =
  '섬유의 종류와 얼룩의 화학적 성질에 따른 과학적 얼룩 제거 지침입니다. 과탄산염, 효소, 용제 등 상황에 맞는 올바른 방법을 제시합니다.';

const faqData = [
  {
    question: '과탄산나트륨 대신 염소계 표백제를 사용해도 되나요?',
    answer:
      '염소계 표백제(차아염소산나트륨)는 부식성이 강합니다. 섬유를 손상시켜 황변 현상을 일으키고 섬유를 약하게 만듭니다. 과탄산염은 활성산소로 표백하여 섬유의 자연 구조를 보호합니다.',
  },
  {
    question: '식초가 냄새 제거에 도움이 되는 이유는 무엇인가요?',
    answer:
      '체취는 대개 알칼리성입니다. 식초의 아세트산이 이를 중화하여 무취의 염 상태로 변하게 하며, 헹굼 과정에서 완전히 제거됩니다.',
  },
  {
    question: '피 얼룩에는 항상 찬물을 사용해야 하나요?',
    answer:
      '네. 열은 피 속의 단백질을 응고시켜 섬유에 영구적으로 고착시키기 때문입니다. 찬물은 얼룩을 용해 가능한 상태로 유지하여 효소 세제가 효과적으로 작용하도록 돕습니다.',
  },
  {
    question: '아세테이트 옷에 아세톤을 바르면 어떻게 되나요?',
    answer:
      '아세톤은 아세테이트와 트리아세테이트를 녹입니다. 아세테이트 섬유는 셀룰로오스를 아세트산으로 에스테르화한 것이라 아세톤에 완전히 용해됩니다. 결과적으로 원단이 돌이킬 수 없이 파손됩니다.',
  },
];

const howToData = [
  {
    name: '섬유 종류 확인',
    text: '옷 안쪽 라벨을 통해 천연 섬유, 합성 섬유, 또는 특수 동물성 섬유(울, 실크, 캐시미어)인지 확인합니다.',
  },
  {
    name: '툴에서 섬유 선택',
    text: '첫 번째 선택 메뉴에서 해당 소재를 선택하세요.',
  },
  {
    name: '얼룩 종류 선택',
    text: '얼룩이 유기물(와인, 과일), 단백질(피), 유지류, 또는 합성물(잉크)인지 지정합니다.',
  },
  {
    name: '지시된 프로토콜 적용',
    text: '사용 약제, 온도, 방법 지침을 따르세요. 특히 "치명적 주의사항"에 주의를 기울여야 합니다.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: '얼룩 제거 화학 프로토콜',
    fiberLabel: '1. 섬유 종류',
    selectFiberPlaceholder: '원단을 선택하세요...',
    stainLabel: '2. 얼룩 원인',
    selectStainPlaceholder: '무슨 일이 일어났나요?',
    molecularDiagnosis: '분자 진단',
    requiredAgent: '필요한 약제',
    thermalCondition: '온도 조건',
    temperature: '온도',
    cleaningInstructions: '세척 가이드',
    criticalWarning: '치명적 주의',
    criticalWarningLabel: '주의',
    technicalNote: '기술 노트',
    technicalNoteText: '전체적인 화학 처리를 하기 전에 반드시 보이지 않는 곳에 색상 견뢰도 테스트를 하세요.',
    systemDiagnosis: '진단 시스템',
    systemDiagnosisDesc: '세척 로드맵을 확인하기 위해 섬유 파라미터를 설정하세요',
    delicatePercarbonateWarning: '분자 손상 위험. 동물성 섬유는 과탄산염에 매우 취약합니다. 보이지 않는 곳에 테스트하십시오.',
    fiberData: {
      cotton: { name: '면 (코튼)', family: 'natural', isNoble: false },
      linen: { name: '마 (리넨)', family: 'natural', isNoble: true },
      wool: { name: '양모 / 메리노', family: 'natural', isNoble: true },
      silk: { name: '견 (실크)', family: 'natural', isNoble: true },
      cashmere: { name: '캐시미어', family: 'natural', isNoble: true },
      mohair: { name: '모헤어', family: 'natural', isNoble: true },
      angora: { name: '앙고라', family: 'natural', isNoble: true },
      alpaca: { name: '알파카', family: 'natural', isNoble: true },
      polyester: { name: '폴리에스터', family: 'synthetic', isNoble: false },
      viscose: { name: '비스코스 / 레이온', family: 'artificial', isNoble: false },
      nylon: { name: '나일론 (폴리아미드)', family: 'synthetic', isNoble: false },
      acrylic: { name: '아크릴', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: '과탄산나트륨',
        description: '생분해성 산소계 표백제. 물에 녹으면서 활성산소를 방출합니다.',
        warning: '고농도 사용 시 단백질 섬유(실크, 울) 사용을 피하세요.',
      },
      isopropyl: {
        name: '이소프로필 알코올',
        description: '색소 및 가벼운 기름때 제거에 효과적인 용제.',
        warning: '희석하지 않고 사용 시 실크의 광택을 손상시키거나 일부 아크릴을 녹일 수 있습니다.',
      },
      acetone: {
        name: '아세톤',
        description: '락커 및 접착제에 강력한 효능을 가진 용제.',
        warning: '아세테이트 및 트리아세테이트 섬유 사용 금지 (섬유를 녹임).',
      },
      enzyme: {
        name: '효소 세제',
        description: '생물학적 얼룩을 분해하는 프로테아제를 함유합니다.',
        warning: '울과 실크(단백질 기반) 사용 시 주의가 필요합니다.',
      },
      vinegar: {
        name: '화이트 식초',
        description: '냄새 중화 및 색상 고정에 도움을 주는 순한 아세트산.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: '레드 와인 / 과일',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: '장시간 담그기' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: '페이스트 직접 도포' },
          delicate: {
            agentId: 'vinegar',
            temperature: '찬물',
            method: '탄산수와 식초로 헹구기',
            notes: '비비지 마십시오',
          },
        },
      },
      {
        id: 'blood',
        name: '혈흔',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: '찬물',
            method: '소금물에 담근 후 효소제 사용',
          },
          synthetic: { agentId: 'enzyme', temperature: '찬물', method: '직접 도포' },
          delicate: {
            agentId: 'vinegar',
            temperature: '찬물',
            method: '즉시 헹구고 열 노출 피하기',
          },
        },
      },
      {
        id: 'grease',
        name: '유지류 / 오일',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: '알코올로 녹여낸 후 세탁',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: '아래에 흡수력이 좋은 종이 받치기',
          },
          delicate: { agentId: 'isopropyl', temperature: '찬물', method: '알코올을 50%로 희석' },
        },
      },
      {
        id: 'ink',
        name: '잉크 / 마커',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '상온',
            method: '가장자리에서 안쪽으로 두드리듯 제거',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '상온',
            method: '얼룩 번짐에 주의',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: '찬물',
            method: '희석 후 안 보이는 곳에 테스트',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: '섬유 세척의 화학 원리',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '모든 얼룩은 다르고, 모든 섬유가 같은 화학 약제에 동일하게 반응하지 않습니다. 소중한 옷을 구하느냐 망치느냐의 차이는 얼룩의 분자적 성질과 섬유의 구조를 이해하는 데서 옵니다.',
    },
    {
      type: 'card',
      title: '01 — 조절된 산화 작용',
      icon: 'mdi:atom',
      html: '<strong>과탄산나트륨</strong>은 활성산소를 방출하여 색소 분자(얼룩의 색 원인)의 이중 결합을 끊어 얼룩을 무색화하고 물에 용해되기 쉬운 상태로 만듭니다. 유기물 얼룩에 가장 효과적인 방법입니다.',
    },
    {
      type: 'card',
      title: '02 — 용제에 의한 용해',
      icon: 'mdi:flask-outline',
      html: '기름이나 잉크 같은 얼룩은 물에 녹지 않습니다. <strong>이소프로필 알코올</strong>이나 <strong>아세톤</strong> 같은 용제는 표면 장력을 낮추고 얼룩의 비극성 분자를 끌어당겨 천 등으로 옮겨갈 수 있게 합니다.',
    },
    {
      type: 'title',
      text: '섬유의 성질 파악: 종류가 중요한 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '모든 섬유가 같은 방식으로 분해되지 않습니다. <strong>실크와 울</strong>은 단백질(피브로인과 케라틴)로 이루어져 있습니다. 단백질을 분해하도록 설계된 효소 세제(피나 계란 얼룩용)를 무분별하게 사용하면, 세제가 섬유 자체를 손상시키기 시작하여 광택과 원단 구조가 파괴됩니다.',
    },
    {
      type: 'title',
      text: '열의 위험성',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '가장 흔한 실수 중 하나는 피 얼룩을 "불리기" 위해 뜨거운 물을 사용하는 것입니다. 화학적으로 열은 얼룩의 <strong>단백질을 응고</strong>시켜 섬유의 다공성 구조에 영구적으로 고착시킵니다. 단백질 기반 얼룩은 반드시 찬물로 처리해야 합니다.',
    },
    {
      type: 'tip',
      title: '긴급 조치: 레드 와인',
      html: '<strong>A. 수동적 흡수:</strong> 흡수력이 좋은 종이로 두드리기(번지지 않게 비비지 마십시오).<br><strong>B. 삼투압 중화:</strong> 고운 소금으로 덮어 섬유 내부의 액체를 밖으로 끌어내기.<br><strong>C. 화학적 조치:</strong> 섬유가 열에 견딘다면 40도 정도의 물에 과탄산염 페이스트를 바르기.',
    },
    {
      type: 'title',
      text: '특수 용제 및 주의사항',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>아세톤</strong>은 매니큐어나 접착제를 제거하는 데 탁월하지만, <strong>아세테이트</strong> 섬유에는 치명적입니다. 셀룰로오스 유래 물질이지만 화학 처리된 이 섬유는 아세톤에 문자 그대로 녹아버립니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>이소프로필 알코올</strong>은 비교적 안정적이지만, 염색된 합성 원단에서는 색상 자체를 빼낼 수 있습니다. 본격적인 처리에 앞서 항상 "안쪽 시접" 부위에 먼저 테스트해보는 것을 권장합니다.',
    },
  ],
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
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
