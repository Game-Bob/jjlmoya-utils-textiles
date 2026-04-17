import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'knitting-gauge-calculator';
const title = '뜨개질 게이지 및 텐션 계산기';
const description =
  '모든 뜨개 도안의 코 수와 단 수를 간편하게 재계산하세요. 모티브 배수와 스케일링 팩터를 조정하여 전문가처럼 완성하세요.';

const faqData = [
  {
    question: '뜨개질에서 게이지(텐션)란 무엇인가요?',
    answer:
      '특정 면적(보통 10x10 cm) 안에 몇 코와 몇 단이 들어가는지를 나타내는 수치입니다. 사용하는 바늘과 실에 따라 결정되며, 완성품의 최종 크기를 좌우하기 때문에 매우 중요합니다.',
  },
  {
    question: '게이지가 변하면 크기에 어떤 영향을 주나요?',
    answer:
      '내 게이지가 도안보다 1cm당 코 수가 더 많으면 세탁 후 편물이 더 작아집니다. 코 수가 적으면 더 커집니다. 따라서 코 수를 재계산하거나 바늘 호수를 바꿔야 합니다.',
  },
  {
    question: '배수(모티브) 조정이 왜 중요한가요?',
    answer:
      '많은 도안에는 레이스, 꽈배기 등 특정 코 수(배수)가 맞아야 완성되는 무늬가 있습니다. 이 계산기는 디자인을 해치지 않도록 가장 가까운 배수에 맞춰 전체 코 수를 조정해 줍니다.',
  },
  {
    question: '측정 전에 스와치를 세탁해야 하나요?',
    answer:
      '네, 항상 그렇습니다. "블로킹"(세탁 후 모양 잡기)을 하면 섬유가 안정되어 실제 착용 및 세탁 후의 정확한 게이지를 알 수 있습니다.',
  },
];

const howToData = [
  {
    name: '도안의 게이지 확인',
    text: '도안 설명서에서 10x10 cm 또는 4x4 인치 스와치에 대해 제시된 코 수와 단 수를 확인합니다.',
  },
  {
    name: '자신의 스와치 뜨기 및 측정',
    text: '사용할 실과 바늘로 직접 스와치를 뜨고 블로킹한 후, 동일한 면적 안에 몇 코와 몇 단이 있는지 측정합니다.',
  },
  {
    name: '계산기 설정',
    text: '도안의 게이지 데이터와 실제 측정한 자신의 데이터를 입력합니다. 사이즈별 전체 코 수와 무늬 배수가 있다면 추가합니다.',
  },
  {
    name: '결과 확인',
    text: '새로 코를 잡아야 할 수와 스케일링 팩터를 확인하여 도안의 길이 조정이 필요한지도 파악합니다.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '온라인 뜨개질 게이지 계산기: 기술 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '거인용처럼 보이는 스웨터를 완성했거나 머리 정수리만 겨우 덮는 모자를 뜬 적이 있다면, <strong>게이지(텐션)</strong>의 중요성을 이미 알고 계실 것입니다. 뜨개질과 코바늘의 세계에서 텐션은 실의 굵기, 바늘 크기, 그리고 각 뜨개인이 실을 당기는 힘의 상관관계입니다. 똑같은 뜨개인은 단 한 명도 없으며, 따라서 똑같은 게이지도 존재하지 않습니다.',
    },
    {
      type: 'title',
      text: '왜 뜨개질에서 게이지가 그토록 중요한가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 뜨개질 게이지 계산기는 수학적 추측을 배제하고 사용자가 창의력에 집중할 수 있도록 설계된 기술 도구입니다. 도안의 데이터와 본인의 스와치 데이터를 입력하면 코와 단의 정확한 조정값을 얻을 수 있어 완성품이 예상한 치수대로 완성되도록 보장합니다.',
    },
    {
      type: 'title',
      text: '게이지 계산기 사용 방법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>스와치를 뜨세요:</strong> 10x10 cm 딱 맞춰 뜨지 말고 최소 15x15 cm는 뜨세요. 가장자리가 중앙 측정값을 방해하지 않도록 하기 위함입니다.',
        '<strong>블로킹을 하세요:</strong> 완성품을 다룰 때처럼 스와치를 세탁하고 건조하세요. 많은 울 섬유는 물에 젖으면 늘어나거나 퍼지는 성질이 있습니다.',
        '<strong>정확하게 측정하세요:</strong> 딱딱한 자나 게이지 카운터를 사용하세요. 가로로 몇 코가 들어가는지, 세로로 몇 단이 들어가는지 세어보세요.',
        '<strong>데이터 입력:</strong> 왼쪽 열에 도안의 수치를, 오른쪽 열에 실제 본인의 수치를 입력하세요. 도구가 원하는 폭에 도달하기 위해 필요한 코 수를 자동으로 재계산합니다.',
      ],
    },
    {
      type: 'title',
      text: '결과 해석: 스케일링 팩터',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '스케일링 팩터는 도안의 모든 지침에 적용되는 배수입니다. 본인의 게이지가 22코인데 도안이 20코를 요구한다면, 팩터는 1.1입니다. 이는 동일한 폭을 얻기 위해 코 수가 10% 더 필요함을 의미합니다. 0-2% 차이는 이상적이며, 2-10%는 보통, 10-25%는 필수 재계산이 필요하며, 25% 이상은 구조적으로 위험할 수 있습니다.',
    },
    {
      type: 'title',
      text: '배수 및 무늬 처리',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '도안 재계산 시 가장 큰 난관 중 하나는 레이스나 꽈배기 무늬의 정합성을 유지하는 것입니다. 무늬가 8코마다 반복된다면 단순히 3코를 추가할 수 없으며, 합계가 8의 배수가 되도록 조정해야 합니다. 이 계산기의 <strong>배수 조정 기능</strong>은 디자인을 존중하면서 가장 가까운 코 수를 제안합니다.',
    },
    {
      type: 'tip',
      title: '전문가 조언',
      html: '<p>바늘 호수를 극단적으로 바꿔 텐션을 억지로 맞추기보다, 이 계산기를 사용하여 본인의 자연스러운 손땀에 맞춰 코 수를 조정하는 것이 좋습니다. 무리한 텐션 조정은 편물의 드레이프성과 부드러움을 해칠 수 있기 때문입니다.</p>',
    },
    {
      type: 'title',
      text: '본 도구의 장점',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '정확한 스케일링 팩터를 통한 코와 단의 자동 조정.',
        '무늬의 정합성을 유지하기 위한 복잡한 배수(X + Y) 지원.',
        '프로젝트 전반에 필요한 실의 무게(그램) 추정.',
        '편물의 밀도를 실시간으로 보여주는 동적 스와치 시각화.',
      ],
    },
    {
      type: 'card',
      title: '게이지 / 텐션',
      icon: 'mdi:ruler',
      html: '<strong>10x10 cm</strong> 또는 <strong>4x4 인치</strong>의 정사각형 안에 들어가는 코와 단의 수. 모든 뜨개 도안의 세계 표준 기준입니다.',
    },
    {
      type: 'card',
      title: '블로킹',
      icon: 'mdi:water',
      html: '편물을 적시고 형태를 잡아 코를 안착시키는 공정. 실제 착용 및 세탁 후의 <strong>실제 게이지</strong>를 보여줍니다.',
    },
    {
      type: 'card',
      title: '스케일링 팩터',
      icon: 'mdi:scale',
      html: '도안의 게이지와 뜨개인의 실제 게이지 사이의 수학적 비율. <strong>올바른 치수</strong>를 유지하기 위해 조정할 코와 단 수를 결정합니다.',
    },
  ],
  ui: {
    sectionOriginalGauge: '도안 게이지',
    sectionMyGauge: '현재 내 스와치',
    sectionProject: '프로젝트 구조',
    labelStitches: '코',
    labelRows: '단',
    labelWidth: '폭',
    labelLength: '길이',
    labelUnit: '측정 단위',
    labelNeedle: '사용 바늘',
    labelNeedleMm: '바늘 (mm)',
    labelWeight: '무게 (g)',
    labelWeightOptional: '선택사항',
    labelPatternSts: '도안 코 수',
    labelPatternRows: '도안 단 수',
    labelMultiples: '배수',
    labelMultiplesExample: '예: 10 + 2',
    labelMultiplesPlaceholder: '무늬 배수 + 가장자리 코',
    unitEU: '10 x 10 cm (유럽 표준)',
    unitUS: '4 x 4 인치 (미국 표준)',
    btnClear: '초기화',
    btnShare: '공유하기',
    btnCopied: '복사 완료!',
    resSuggestedSts: '권장 코 잡기 수',
    resNewRows: '변경될 단 수',
    resNewRowsTooltip: '현재 게이지로 도안의 길이를 맞추기 위해 떠야 할 단 수입니다.',
    resScaleFactor: '스케일 비율',
    resScaleFactorTooltip: '내 편물과 도안 사이의 크기 비율. 마이너스 값은 내 편물이 더 촘촘함을 나타냅니다.',
    resSuggestion: '조언',
    resSuggestionTooltip: '도안의 모든 코를 일일이 재계산하지 않고 게이지를 맞추기 위한 기술적 권장 사항입니다.',
    suggestionIdeal: '이상적임',
    suggestionDown: '바늘 치수 낮춤',
    suggestionUp: '바늘 치수 높임',
    suggestionDownDetail: '{n}mm 또는 그보다 낮은 호수의 바늘을 사용하세요.',
    suggestionUpDetail: '{n}mm 또는 그보다 높은 호수의 바늘을 사용하세요.',
    multiplesNoteFormat: '{n}코로 조정됨 (배수 {m})',
    yarnTitle: '필요 실 소요량 추정',
    yarnResultFormat: '추정 실 소요량: <strong>{g}g</strong>',
    yarnSafetyFormat: '(여분 +{s}g 포함)',
    alertDanger: '차이가 너무 큼 (>25%). 완성품의 느낌과 구조가 크게 변할 수 있습니다.',
  },
};
