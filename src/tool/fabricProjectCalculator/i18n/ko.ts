import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'fabric-project-calculator';
const title = '품목별 원단 소요량 계산기';
const description =
  '스커트, 바지, 원피스, 셔츠 제작 시 필요한 원단 양을 간단하게 계산하세요. 원단 폭과 사이즈에 맞춘 전문적인 재단 플랜을 제안합니다.';

const faqData = [
  {
    question: '스커트를 만드는 데 원단이 얼마나 필요한가요?',
    answer:
      '원단 폭에 따라 다릅니다. 140-150cm 폭의 원단으로 기본 스커트를 만들 경우 보통 1.20m면 충분합니다. 90-110cm 폭인 경우 2.00m가 필요합니다.',
  },
  {
    question: '원단 폭이 소요량에 어떤 영향을 주나요?',
    answer:
      '원단 폭이 좁으면 패턴 조각들을 옆으로 나란히 배치할 수 없기 때문에, 조각들을 세로로 배치해야 하므로 보통 두 배의 길이가 필요하게 됩니다.',
  },
  {
    question: '원단을 여유 있게 사는 것이 좋나요?',
    answer:
      '네, 세탁 후 수축이나 원단 결함, 예상치 못한 시접 등을 고려하여 10%(약 20cm) 정도의 여유를 두는 것이 권장됩니다.',
  },
  {
    question: '푸서(식서) 방향이란 무엇이며 왜 중요한가요?',
    answer:
      '원단의 변두리(식서)와 평행한 방향을 말합니다. 옷을 입었을 때 형태가 뒤틀리지 않도록 패턴 조각들을 이 방향에 맞춰 배치해야 합니다.',
  },
];

const howToData = [
  {
    name: '의류 품목 선택',
    text: '제작하려는 모델(스커트, 바지 등)을 선택하여 기본 소요량 데이터를 불러옵니다.',
  },
  {
    name: '원단 폭 입력',
    text: '구매하시려는 원단의 식서에서 식서까지의 폭(90, 115, 140, 150cm)을 측정합니다.',
  },
  {
    name: '사이즈 선택',
    text: '사이즈(XS-S, M-L, XL-XXL)에 맞춰 품목의 볼륨을 조절하고 소요량 상수를 재계산합니다.',
  },
  {
    name: '최종 소요량 확인',
    text: '시접을 포함한 최종 결과를 확인하여 매장에서 주문할 정확한 양을 파악합니다.',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'Fabric Estimation Guide - Threads Magazine',
      url: 'https://www.threadsmagazine.com/forum/measuring-fabric',
    },
    {
      name: 'How much fabric do I need? - Seamwork',
      url: 'https://www.seamwork.com/sewing-tutorials/the-anatomy-of-a-sewing-pattern',
    },
    {
      name: 'Standard Fabric Consumption Charts - Textile School',
      url: 'https://www.textileschool.com/209/fabric-consumption-in-garment-making/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '의류 제작용 원단 소요량 계산기: 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '재봉실에서 가장 많이 겪는 고민 중 하나는 특정 프로젝트를 위해 원단을 얼마나 사야 할지 결정하는 것입니다. 원단 소요량은 의류의 디자인, 제작 사이즈, 그리고 무엇보다 원단의 폭(주로 90cm~150cm)이라는 세 가지 요소에 의해 크게 좌우됩니다. 이 계산기는 원단을 너무 많이 사거나 재단 도중에 부족해지는 일을 방지하기 위해 계산을 체계화했습니다.',
    },
    {
      type: 'title',
      text: '원피스나 바지에는 원단이 얼마나 필요한가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '전통적인 계산 방식은 의류의 길이에 소매 길이를 더하고, 안단과 밑단 여유분을 추가하는 것입니다. 하지만 원단 폭이 좁은 경우(90-110cm) 패턴 조각들을 나란히 놓을 수 없어 길이가 두 배로 필요하게 됩니다. 본 도구는 섬유 산업 표준에 따라 이러한 변수들을 자동으로 계산에 반영합니다.',
    },
    {
      type: 'title',
      text: '원단 폭별 추정 소요량 (M-L 사이즈 기준)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>기본 스커트:</strong> 90cm 폭에서 2.00m · 140/150cm 폭에서 1.20m',
        '<strong>긴 바지:</strong> 90cm 폭에서 2.50m · 140/150cm 폭에서 1.50m',
        '<strong>긴소매 셔츠:</strong> 90cm 폭에서 2.20m · 140/150cm 폭에서 1.40m',
        '<strong>기본 원피스:</strong> 90cm 폭에서 3.50m · 140/150cm 폭에서 2.20m',
      ],
    },
    {
      type: 'title',
      text: '원단 소요량에 영향을 주는 요인들',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>무늬 방향 (리피트):</strong> 원단에 일정한 방향의 무늬나 체크무늬(무늬 맞춤이 필요한 경우)가 있다면 원단을 15%에서 20% 정도 더 준비해야 합니다.',
        '<strong>재단 방향 (바이어스):</strong> 바이어스 재단이나 풀 스커트(원형 스커트) 등은 각도 때문에 버려지는 부분이 많아 원단 소요량이 훨씬 큽니다.',
        '<strong>결 방향:</strong> 벨벳이나 코듀로이 같은 원단은 모든 조각을 같은 방향으로 재단해야 하므로 효율적인 패턴 배치가 제한됩니다.',
        '<strong>수축률:</strong> 면, 린넨, 울 같은 천연 섬유는 첫 세탁 후 줄어듭니다. 재단 전 미리 수축시키는 과정(선세탁)이 필수입니다.',
      ],
    },
    {
      type: 'tip',
      title: '전문가 팁',
      html: '<p>큰 무늬나 체크무늬 원단을 사용할 때는 표준 수치만 믿지 마세요. 계산된 총 미터 수에 무늬의 한 리피트(라포르) 분량을 항상 더해서 옆선에서 무늬가 자연스럽게 이어지도록 하세요.</p>',
    },
    {
      type: 'title',
      text: '본 계산기의 장점과 유의사항',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '사이즈 조절이 가능한 다양한 원단 폭에 대한 즉각적인 계산.',
        '맞춤 설정 가능한 시접 여유분 추정치 포함.',
        '원단 위 패턴 배치(마킹)에 대한 시각적 가이드.',
        '실제 패턴 배치를 완벽히 대체하지는 않습니다. 플러스 사이즈의 경우 추가적인 수동 조정이 필요할 수 있습니다.',
      ],
    },
    {
      type: 'card',
      title: '원단 폭',
      icon: 'mdi:arrow-expand-horizontal',
      html: '원단의 <strong>식서에서 식서까지</strong>의 가로 측정값입니다. 패턴 조각들을 옆으로 나란히 놓을 수 있는지 여부를 결정합니다.',
    },
    {
      type: 'card',
      title: '시접',
      icon: 'mdi:tape-measure',
      html: '패턴 조각의 가장자리와 <strong>재봉선</strong> 사이의 거리입니다. 의류의 경우 표준값은 1.5cm입니다.',
    },
    {
      type: 'card',
      title: '식서 (Selvedge)',
      icon: 'mdi:content-cut',
      html: '원단의 양 가장자리에 <strong>풀리지 않도록</strong> 두껍게 처리된 부분입니다. 올 방향을 나타내며 재단의 기준이 됩니다.',
    },
  ],
  ui: {
    sectionProject: '프로젝트',
    sectionMaterial: '재료',
    labelGarmentType: '의류 품목',
    labelSize: '사이즈',
    labelFabricWidth: '원단 폭 (cm)',
    labelSeamAllowance: '시접 (cm)',
    garmentSkirt: '스커트 (기본/A라인)',
    garmentPants: '바지',
    garmentDress: '원피스',
    garmentShirt: '셔츠 / 블라우스',
    garmentCoat: '코트 / 재킷',
    garmentTote: '토트백',
    garmentMerceria: {
      skirt: '20cm 지퍼 1개, 단추 1개',
      pants: '20cm 지퍼 1개, 단추 1개, 심지 30cm',
      dress: '60cm 지퍼 1개, 심지 50cm',
      shirt: '단추 7개, 얇은 심지 1m',
      coat: '큰 단추 3개, 심지 1.5m, 안감',
      tote: '핸들용 웨빙 끈 2m',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (좁은 폭)',
    width115: '115 cm (퀼트용/US)',
    width140: '140 cm (유럽 표준 폭)',
    width150: '150 cm (광폭/인테리어)',
    btnClear: '초기화',
    btnShare: '공유하기',
    btnCopied: '복사 완료!',
    btnCopyList: '준비물 리스트 복사',
    resultLabel: '필요 소요량:',
    resultUnit: '미터',
    shopAdviceFormat: '매장에서 "{m}m"를 구매하세요',
    boardEmpty: '배치도를 보려면 품목을 선택하세요',
    boardDescFormat: '폭: {w}cm | 길이: {m}m',
    merchTitle: '부자재 및 재료',
    checklistThread: '어울리는 색상의 실',
    warningSerialFormat: '{w}cm 폭 원단에서는 이 사이즈의 패턴 조각들을 나란히 놓을 수 없습니다. 세로 배치 플랜으로 조정되었습니다.',
    foldLabel: '⊟ 골선(겹친 부분)',
    pieceNames: {
      front: '앞판',
      back: '뒷판',
      waistband: '허리 밴드',
      waistbelt: '벨트',
      sleeve: '소매',
      collar: '칼라',
      cuffs: '커프스',
      facings: '안단',
      lapels: '라펠',
      pocket: '주머니',
      body: '몸통',
      handleA: '핸들 A',
      handleB: '핸들 B',
    },
  },
};
