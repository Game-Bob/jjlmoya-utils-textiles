import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'knitting-needle-converter';
const title = '대바늘 및 코바늘 사이즈 변환기';
const description = '미리미리(mm), 미국(US), 영국(UK) 시스템 간의 바늘 사이즈를 변환하고 권장 실 굵기와 WPI를 확인하세요.';

const faqData = [
  {
    question: '왜 국가마다 바늘 사이즈 시스템이 다른가요?',
    answer: '역사적으로 각 국가가 독자적인 시스템을 개발했기 때문입니다. 미리미리(mm) 시스템은 가장 정확한 국제 표준입니다. 미국(US) 시스템은 0~50까지의 누진 번호를 사용하는 반면, 영국(UK) 시스템은 역번호를 사용합니다(숫자가 클수록 바늘이 가늘어짐).',
  },
  {
    question: '미국(US) 시스템에서 코바늘과 대바늘 사이즈는 같나요?',
    answer: '정확히 같지는 않습니다. 미국(US) 코바늘은 보통 알파벳(예: H-8)이 함께 표기되며, 가는 바늘에서 고유한 변형이 있습니다. 또한, 아주 가는 실을 사용하는 레이스용 스틸 코바늘은 완전히 다른 번호 체계를 사용합니다.',
  },
  {
    question: '패턴에 명시된 사이즈가 수중에 없을 때 어떤 바늘을 선택해야 하나요?',
    answer: '예를 들어 패턴에서 7.0mm를 요구하는데 수중에 6.5mm와 8.0mm만 있다면, 반드시 게이지(Gauge Swatch)를 떠보는 것을 권장합니다. 0.5mm의 차이만으로도 결과물의 최종 크기가 크게 달라질 수 있습니다.',
  },
  {
    question: 'WPI(Wraps Per Inch)란 무엇인가요?',
    answer: '1인치(2.54cm) 길이 안에 실을 몇 번 감을 수 있는지를 나타내는 수치입니다. 라벨이 없는 실의 굵기를 파악하고 그에 맞는 바늘을 결정하는 가장 신뢰할 만한 방법입니다.',
  },
];

const howToData = [
  {
    name: '작업 종류 선택',
    text: '대바늘(knitting) 또는 코바늘(crochet) 중 선택하여 미국(US) 시스템의 정확한 대응 수치를 확인하세요.',
  },
  {
    name: '비주얼 셀렉터에서 사이즈 선택',
    text: '본인의 바늘 사이즈에 해당하는 원형을 클릭하세요. 구멍의 크기는 미리미리(mm) 치수와 실제 수학적 비율로 구현되어 있습니다.',
  },
  {
    name: '대응 수치 확인',
    text: '실시간으로 변환된 미리미리(mm), 미국(US) 사이즈, 영국(UK) 사이즈와 권장 실 카테고리 및 WPI를 확인하세요.',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '대바늘 및 코바늘 가이드: 시스템별 사이즈 및 대응표',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '디지털 도안의 글로벌화로 인해 <strong>미리미리(mm)법</strong>, <strong>미국 표준(US)</strong>, <strong>영국 제국(UK) 시스템</strong> 간의 차이를 이해하는 것이 필수적입니다. 이 도구는 세 시스템 간의 변환을 돕고 WPI 방식을 통한 권장 실 정보를 제공합니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '오프라인', label: '인터넷 없이 작동', icon: 'mdi:wifi-off' },
        { value: '트리플', label: '전체 시스템 동기화', icon: 'mdi:sync' },
        { value: 'WPI', label: '실 굵기 분석', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '국제 시스템의 복잡성',
      level: 3,
    },
    {
      type: 'table',
      headers: ['시스템', '계산 기준', '주요 사용 지역', '기술적 특징'],
      rows: [
        ['<strong>미리미리 (mm)</strong>', 'mm 단위의 정확한 지름', '유럽 / 국제 공통', '가장 신뢰할 수 있는 ISO 표준. 0.25mm 또는 0.50mm 간격.'],
        ['<strong>미국 (US)</strong>', '누진 번호 체계', '북미', '0에서 50까지의 숫자 사용. 코바늘은 숫자와 알파벳 병행(B-1, G-6 등).'],
        ['<strong>영국 (UK)</strong>', '역번호 체계', '영국 / 호주', '철사 굵기 기준. 숫자가 클수록 바늘은 가늘어짐(14번은 가늘고, 0번은 굵음).'],
      ],
    },
    {
      type: 'title',
      text: 'WPI 방식을 이용한 실 확인 수칙',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / 레이스 (18-22+ WPI):</strong> 실크나 모헤어 레이스용 초극세사 실. 1.5mm~2.5mm 바늘 사용.',
        '<strong>Fingering / 베이비 (14-16 WPI):</strong> 양말이나 아기 옷의 표준. 2.75mm~3.25mm 바늘이 최적.',
        '<strong>Sport / 파인 (12-14 WPI):</strong> 약간 얇은 중간 굵기 실, 가벼운 재킷에 적합. 3.5mm~3.75mm 바늘.',
        '<strong>DK / 라이트 워스티드 (11-13 WPI):</strong> 시장에서 가장 범용적인 굵기. 4.0mm 또는 4.5mm 바늘.',
        '<strong>Worsted / 아란 (9-10 WPI):</strong> 겨울용 스웨터용 굵은 실. 5.0mm~5.5mm 바늘.',
        '<strong>Bulky / 청키 (7-8 WPI):</strong> 빠른 작업을 위한 굵은 울. 6.0mm~8.0mm 바늘.',
        '<strong>Super Bulky (5-6 WPI):</strong> 인테리어 소품이나 머플러용 거대 실. 9.0mm~15.0mm 바늘.',
      ],
    },
    {
      type: 'tip',
      title: '전문가용 지식: 스틸 코바늘',
      html: '<p>매우 가는 매서라이즈드 면사를 위한 특수 바늘 제품군이 있습니다. 바로 <strong>스틸 코바늘(Steel Hooks)</strong>입니다. 이들의 번호 체계는 전용이며 역순입니다. #14(0.6mm) 스틸 코바늘은 #00(3.5mm)보다 훨씬 가늘으므로, 표준 대응표를 사용하면 안 됩니다.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: '올바른 바늘 사이즈 선택을 위한 체크리스트',
      icon: 'mdi:check-circle-outline',
      badge: '기술 검증',
      html: '<p>장기 프로젝트를 시작하기 전 다음 단계를 따르세요:</p><ul><li><strong>개인 장력:</strong> 손땀이 촘촘하면 0.5mm 키우고, 느슨하면 0.5mm 낮추어 조정합니다.</li><li><strong>바늘 소재:</strong> 매끄러운 실은 대나무 바늘을, 거친 울은 금속 바늘을 선택합니다.</li><li><strong>섬유 종류:</strong> 면은 신축성이 적고, 메리노 울은 세탁 후 블로킹 과정에서 늘어납니다.</li><li><strong>게이지 확인:</strong> 10x10cm 사각형을 뜨고 실제 치수를 재기 전 반드시 한 번 세탁하세요.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '미리미리(mm) 시스템은 세계 공통이며 제조사별 오차를 방지합니다.',
          con: '오래된 도안이나 역사적인 자료에는 mm 표기가 없는 경우가 많습니다.',
        },
        {
          pro: '미국(US) 시스템은 미국식 도안의 표준 사이즈를 기억하기 쉽습니다.',
          con: '코바늘 알파벳 표기는 브랜드마다 일관되지 않을 수 있습니다.',
        },
        {
          pro: 'WPI 시스템을 통해 라벨 없는 실을 전문적으로 재분류하여 사용할 수 있습니다.',
          con: '측정 시 수동으로 정밀하게 감아야 하므로 오차가 생기지 않도록 주의해야 합니다.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: '작품 시작 전 실제 사이즈를 확인하기 위해 미리 떠보는 10x10cm 샘플 조각.' },
        { term: 'Hook Throat', definition: '코바늘의 목 부분. 깊이에 따라 바늘이 감당할 수 있는 실의 용량이 결정됩니다.' },
        { term: 'Block Testing', definition: '편물을 적시고 형태를 잡아 말리는 과정으로, 섬유를 안착시켜 최종 사이즈를 확인하는 작업.' },
      ],
    },
    {
      type: 'summary',
      title: '성공적인 뜨개질 프로젝트를 위한 핵심 요인',
      items: [
        '올바른 바늘 선택은 크기뿐만 아니라 의류의 마찰에 대한 내구성도 결정합니다.',
        '본 변환기를 사용하여 미국이나 영국의 잡지 도안을 단 몇 초 만에 확인하세요.',
        '정확한 일치 사이즈가 없다면 본인의 게이지를 바탕으로 한 단계 위나 아래 사이즈를 선택하세요.',
        '코바늘 뜨기는 같은 바늘을 사용한 대바늘 뜨기보다 실 소요량이 약 30% 더 많습니다.',
        '금속 바늘은 최상의 부드러움을 유지하기 위해 정기적으로 닦아 관리하세요.',
      ],
    },
  ],
  ui: {
    labelSystem: '작업 시스템',
    modeKnitting: '대바늘',
    modeCrochet: '코바늘',
    calibratorLabel: '정밀 캘리브레이터 (실제 크기 스케일)',
    calibratorDesc: '바늘 지름을 선택하여 실시간 대응 수치를 확인하세요. 화면의 구멍 크기는 mm 치수와 실제 수학적 비율로 구현되었습니다.',
    tagMetric: '미리미리 (mm)',
    tagUS: '미국(US) 시스템',
    tagUK: '영국(UK) 시스템',
    yarnLabel: '최적의 실 굵기',
    wpiFormat: '{wpi} WPI (인치당 감긴 횟수)',
    tableSectionLabel: '기술 대응표 카탈로그',
    tableMetric: '미리미리(mm)',
    tableUS: '미국 사이즈',
    tableUK: '영국/임페리얼',
    tableYarn: '실 카테고리',
  },
};
