import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'sewing-pattern-scaler';
const title = '온라인 양재 패턴 사이즈 조절(그레이딩) 도구';
const description = '기존의 양재 패턴을 실제 내 몸 치수에 맞게 조정하세요. 차분 계산 방식의 스케일링 계산기와 업데이트된 패턴 미리보기.';

const faqData = [
  {
    question: '왜 어깨는 가슴만큼 커지지 않나요?',
    answer: '인체는 단순한 구 형상이 아니기 때문입니다. 가슴 부위의 부피는 크게 변할 수 있지만, 골격과 어깨 같은 관절 포인트는 상대적으로 고정되어 있습니다. 전문적인 그레이딩은 옷의 형태가 무너지지 않도록 부위별로 차등적인 계수를 적용합니다.',
  },
  {
    question: "'여유분(Ease)'이란 무엇인가요?",
    answer: '내 몸과 옷감 사이의 남는 공간을 말합니다. 여유분이 없으면 움직일 수 없습니다. 우리 계산기는 이 여유분을 유지하여, 디자이너가 의도한 실루엣은 지키면서 실제 내 체형에 딱 맞도록 변환해 줍니다.',
  },
  {
    question: '니트나 저지 원단용 패턴도 스케일링할 수 있나요?',
    answer: '네, 가능합니다. 다만 신축성 있는 원단은 보통 "마이너스 여유분(negative ease)"을 가진다는 점에 유의하세요. 매우 타이트한 패턴인 경우, 새로 선택한 원단의 신축성이 원래 패턴에서 권장하는 원단과 동일한지 확인해야 합니다.',
  },
];

const howToData = [
  {
    name: '패턴 치수 측정',
    text: '원본 종이 패턴에서 주요 가로선(가슴, 허리, 엉덩이)의 길이를 시접에서 시접까지 측정하세요.',
  },
  {
    name: '원본 설정',
    text: '측정한 치수나 패턴의 사이즈를 도구의 "원본(Origin)" 열에 입력하세요.',
  },
  {
    name: '목표 수치 입력',
    text: '자신의 실제 신체 치수나 만들고자 하는 목표 사이즈를 입력하세요. 도구가 부위별로 정확한 차이를 계산합니다.',
  },
  {
    name: '실제 재단 시 적용',
    text: '"재단 작업 안내"에 따라 패턴의 옆선이나 밑단에서 센티미터를 더하거나 빼서 조정하세요.',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'Patronaje: Las Bases - Teresa Gilewska',
      url: 'https://www.scribd.com/document/696165843/patronaje-las-bases-by-teresa-gilewska',
    },
    {
      name: 'Metric Pattern Cutting for Women\'s Wear - Winifred Aldrich',
      url: 'https://download.e-bookshelf.de/download/0000/5989/88/L-G-0000598988-0002339537.pdf',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '양재 패턴 사이즈 조절 가이드: 기술적 원리 및 실무 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '패턴 <strong>그레이딩(Grading, 스케일링)</strong>은 의류 제작에서 가장 중요한 기술 중 하나입니다. 단순히 도면을 비율대로 확대하거나 축소하는 것이 아니라, 선형적으로 변하지 않는 인체의 복잡한 곡선과 비율에 맞춰 2차원 구조를 적응시키는 과정입니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '오프라인', label: '브라우저 계산', icon: 'mdi:calculator' },
        { value: '부위별', label: '비례 스케일링', icon: 'mdi:resize' },
        { value: '100%', label: '보안 및 비공개', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '패턴 그레이딩이란 정확히 무엇인가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '그레이딩은 기본 패턴의 크기를 키우거나 줄여서 다양한 사이즈 시리즈를 만드는 기술적 공정을 말합니다. 단순한 줌 기능과 달리, 그레이딩은 신체의 특정 부위가 다른 부위보다 더 많이 변화한다는 점을 고려합니다. 예를 들어, 어깨 넓이나 등 길이의 변화보다 가슴 둘레의 변화가 사이즈 간에 더 크게 나타나는 것이 일반적입니다.',
    },
    {
      type: 'title',
      text: '성공의 비결: 여유분(Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>활동 여유분:</strong> 옷감이 찢어지지 않고 숨을 쉬거나 앉거나 팔을 움직이는 데 필요한 추가적인 공간입니다.',
        '<strong>디자인 여유분:</strong> 특정 실루엣(예: 오버사이즈 코트나 풍성한 블라우스)을 만들기 위해 디자이너가 의도적으로 추가한 여유분입니다.',
      ],
    },
    {
      type: 'title',
      text: '가로 스케일링 vs 세로 스케일링',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>가로축 (둘레):</strong> 가슴, 허리, 엉덩이. 가장 많은 조정이 필요하며, 각 패턴 조각을 4분의 1로 나누어 계산합니다.',
        '<strong>세로축 (길이):</strong> 앞길이, 등길이, 총길이. 다트 위치와 허리선에 영향을 미칩니다. 인접한 사이즈 간의 변화량은 상대적으로 적습니다.',
      ],
    },
    {
      type: 'title',
      text: '패턴 스케일러 사용법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>패턴 측정:</strong> 종이 패턴 조각을 가슴, 허리, 엉덩이 라인에서 끝에서 끝까지 측정하세요.',
        '<strong>원본 수치 입력:</strong> 왼쪽 열에 측정한 치수를 적고, 해당 패턴이 어떤 사이즈를 나타내는지 선택하세요.',
        '<strong>자신의 치수 또는 목표 사이즈 입력:</strong> 오른쪽 열에 실제 신체 치수나 원하는 사이즈를 입력하세요.',
        '<strong>결과 해석:</strong> 계산기가 각 특정 부위에서 얼마나 더하거나 빼야 하는지를 보여줍니다.',
      ],
    },
    {
      type: 'tip',
      title: '전문적인 보정을 위한 팁',
      html: '<p><strong>3단계 이상의 사이즈 차이가 나는 스케일링은 피하세요:</strong> 36사이즈에서 52사이즈로 바로 넘어가려 하면, 진동둘레(진동선)가 왜곡되고 목선이 너무 커질 확률이 높습니다. 이런 경우 기본 원형(Master Pattern)을 본인의 수치로 다시 그리는 것이 낫습니다.</p>',
    },
    {
      type: 'title',
      text: '디지털 스케일링의 장점',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '오리지널 디자인의 정확한 비율을 유지합니다.',
          con: '진동둘레 선 등은 수작업으로 약간의 다듬기가 필요할 수 있습니다.',
        },
        {
          pro: '필요한 여유분을 즉각적으로 계산해 줍니다.',
          con: '패턴에 시접이 포함되어 있는지 여부를 자동으로 감지하지는 못합니다.',
        },
        {
          pro: '부품의 변화를 그래픽으로 시각화하여 확인 가능합니다.',
          con: '정확한 초기 측정 데이터가 필요합니다.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '디퍼런셜(Differential)', definition: '연속된 두 사이즈 간의 치수 차이.' },
        { term: '고정점(Anchor Point)', definition: '패턴에서 움직이지 않는 기준 부위(보통 앞중심선이나 뒷중심선).' },
        { term: '그레이딩 네스트(Grading Nest)', definition: '스케일링된 모든 사이즈를 겹쳐 그린 도면.' },
        { term: '기본 패턴(Base Pattern)', definition: '신체 치수에 딱 맞는, 디자인이나 여유분이 없는 기본 틀.' },
      ],
    },
  ],
  ui: {
    labelSystem: '작업 시스템',
    modeStandard: '표준 사이즈',
    modeCustom: '실제 치수 입력',
    labelPatternSize: '패턴 사이즈',
    labelTargetSize: '목표 사이즈',
    labelOriginMeasures: '원본 측정 수치',
    labelTargetMeasures: '나의 신체 치수',
    labelEase: '현재 여유분(Ease)',
    labelChest: '가슴',
    labelWaist: '허리',
    labelHips: '엉덩이',
    labelLength: '길이',
    resBust: '바스트',
    resWaist: '허리',
    resHips: '엉덩이',
    resLength: '길이',
    actionLatAdd: '추가',
    actionLatRemove: '제거',
    actionLatSuffix: ' (패턴 옆선 조정)',
    actionLatNote: '※패턴 1/4 조각당 조정 수치',
    actionLenExtend: '길이 늘이기',
    actionLenShorten: '길이 줄이기',
    actionLenNote: '밑단 선에서 조정',
    legendOriginal: '원본 패턴',
    legendUpdated: '업데이트됨',
    warnText: '3단계 이상의 사이즈 차이입니다. 진동둘레 왜곡에 유의하세요.',
    sizePrefix: '사이즈',
  },
};
