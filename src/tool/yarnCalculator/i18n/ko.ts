import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'yarn-calculator';
const title = '뜨개실 계산기: 실 몇 미터, 몇 볼이 필요할까요?';
const description =
  '도안과 사이즈에 따라 대바늘 및 코바늘 프로젝트에 필요한 뜨개실(울, 실) 양을 미터 단위로 정확하게 계산해 드립니다.';

const faqData = [
  {
    question: '코바늘(크로셰)이 대바늘(니팅)보다 실을 더 많이 쓰는 이유는 무엇인가요?',
    answer:
      '코바늘은 매듭과 겹쳐진 루프를 만드는 방식으로 작업하므로, 제곱센티미터당 편물이 더 조밀하고 두껍게 형성됩니다. 평균적으로 코바늘 프로젝트는 동일한 프로젝트를 대바늘(메리야스 뜨기)로 뜰 때보다 실 소비량이 약 25%에서 35% 정도 더 많습니다.',
  },
  {
    question: '서로 다른 염색 로트(Dye Lot)의 실을 사면 어떻게 되나요?',
    answer:
      '매장에서는 색상이 같아 보이더라도, 염색 과정에서의 미세한 화학적 차이로 인해 완성된 편물에서 눈에 띄는 "줄(색 변화)"이 생길 수 있습니다. 로트 번호가 동일한지 확인하고 필요한 실을 한꺼번에 구매하는 것을 강력히 권장합니다.',
  },
  {
    question: '장력(게이지)이 최종 소비량에 어떤 영향을 미치나요?',
    answer:
      '느슨하게 뜰수록 한 코에 들어가는 실의 길이(미터)가 늘어납니다. 본인의 게이지가 도안에 적힌 것보다 큰 경우(예: 15코 기준인데 13코가 나오는 경우), 실 소비량은 상당히 늘어납니다. 사전에 게이지를 확인하는 것이 매우 중요합니다.',
  },
  {
    question: '실의 무게만 알고 있을 때 미터수는 어떻게 계산하나요?',
    answer:
      '길이(미터) 데이터 없이는 계산하기 어렵습니다. 대부분의 실 라벨에는 길이가 표시되어 있습니다. 표시가 없다면 Ravelry와 같은 데이터베이스에서 실 이름으로 검색하여 50g 또는 100g당 정확한 길이를 찾아보세요.',
  },
];

const howToData = [
  {
    name: '프로젝트 선택',
    text: '스웨터, 목도리, 모자, 양말, 담요 중에서 선택하여 특정 소비 기준 데이터를 불러옵니다.',
  },
  {
    name: '사이즈 및 실 두께 정의',
    text: '최종 치수(S, M, L, XL)와 사용할 실의 두께(Fingering, DK, Worsted, Bulky)를 입력합니다.',
  },
  {
    name: '보정값 활성화',
    text: '도안에 꽈배기(케이블)나 복잡한 무늬가 있다면 텍스처 스위치를 켜서 필요한 양을 추가합니다.',
  },
  {
    name: '구매 리스트 확인',
    text: '선택한 실 한 볼당 미터수를 입력하면 장바구니에 담아야 할 정확한 개수가 표시됩니다.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'Craft Yarn Council: Standard Yarn Weights & Yardages',
      url: 'https://www.craftyarncouncil.com/standards/yarn-weight-system',
    },
    {
      name: 'Interweave Essentials: Yarn Substitution and Estimation',
      url: 'https://www.interweave.com/article/knitting/yarn-substitution-angelina-take-two/',
    },
    {
      name: 'The Woolery: Fibers and Calculation of Yarn Usage',
      url: 'https://woolery.com/blogs/the-woolery-blog/yarn-weight-charts-helpful-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '뜨개실 소비 가이드: 내 프로젝트에 필요한 미터수와 볼 수 계산법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '뜨개질 로지스틱스를 마스터하고 대바늘·코바늘용 정밀 기술 계산기로 실 부족을 방지하세요. 뜨개질하는 사람들에게 가장 큰 공포 중 하나는 <strong>"얀 치킨(Yarn Chicken)"</strong>입니다. 프로젝트의 막바지에 마지막 코를 막기 전에 실이 모자랄 것 같아 조마조마한 순간을 말하죠. 이 계산기는 산업 표준인 길이와 무게 데이터를 기반으로 예측치를 제공하기 위해 개발되었습니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: '여유 마진', icon: 'mdi:security' },
        { value: '미터법', label: '미터 단위 계산', icon: 'mdi:ruler' },
        { value: '오프라인', label: '로컬 DB', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '뜨개실 볼의 "무게"가 오해를 부르는 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '많은 초보자들이 실을 무게(예: "100g짜리 6볼")로만 사려고 하는 실수를 합니다. 하지만 무게는 질량의 단위이지 길이의 단위가 아닙니다. 똑같은 100g이라도 실의 종류에 따라 길이는 천차만별입니다. 예를 들어, 아주 두꺼운 <strong>Bulky</strong> 타입은 80미터 정도일 수 있는 반면, <strong>Fingering / Lace</strong> 타입은 같은 무게에서 450미터가 넘을 수도 있습니다.',
    },
    {
      type: 'paragraph',
      html: '따라서 저희 계산기는 항상 <strong>"총 미터수"</strong>를 우선시합니다. 본인의 사이즈와 프로젝트에 필요한 전체 길이가 얼마인지 알게 되면, 사용하려는 실 라벨에 적힌 길이로 나누어 구매해야 할 정확한 볼 개수를 도출해낼 수 있습니다.',
    },
    {
      type: 'title',
      text: '실 두께별 표준 미터수 차트',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '라벨이 손에 없을 경우, 예측을 위해 이 수치들(섬유 100g당 기준)을 참고용으로 사용하세요:',
    },
    {
      type: 'table',
      headers: ['실 두께 (Weight)', '대략 미터수 / 100g', '권장 용도', '권장 바늘'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', '레이스 숄, 비침 무늬', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', '양말, 아기 옷', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', '가벼운 자켓', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', '스웨터, 모자', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', '담요, 코트', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', '두꺼운 목도리, 무릎 담요', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: '장력(Gauge)의 요소',
      html: '<p>느슨하게 뜰수록 편물이 커지고 촘촘하게 뜰 때보다 실을 더 많이 소비한다는 점을 기억하세요. 저희 계산기는 안전 마진을 적용하고 있지만, 본인의 장력이 유독 느슨하다면 결과값에 5-10% 정도를 더 추가하여 실 부족을 방지하는 것을 고려해 보세요.</p>',
    },
    {
      type: 'title',
      text: '실 소비량을 늘리는 변수들',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '모든 뜨개 방법이 같은 양의 섬유를 소비하는 것은 아닙니다. 디자인을 선택할 때 다음 가산 요인들을 고려하세요:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '메리야스 뜨기 / 저지',
          description: '모든 의류에서 베이스가 되는 소비량이자 최고의 실 효율을 나타냅니다.',
          icon: 'mdi:minus-circle-outline',
          points: ['초보자에게 이상적', '편물의 자연스러운 드레이프'],
        },
        {
          title: '꽈배기 / 텍스처',
          description: '섬유를 교차시키면 편물의 가로폭이 줄어들며, 소비량은 약 25% 증가합니다.',
          icon: 'mdi:texture-box',
          points: ['더 많은 미터수 필요', '더 조밀하고 무거운 편물'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: '코바늘 (Crochet)',
          description: '코바늘 매듭은 대바늘 뜨기보다 실을 약 30% 더 많이 사용합니다.',
          icon: 'mdi:hook',
          points: ['빠른 실 소모', '입체적인 질감'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: '고무뜨기 (Ribbing)',
          description: '겉뜨기/안뜨기 구조로 인해 제곱센티미터당 실이 더 많이 들어갑니다.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['중간 정도의 소비 (+15%)', '높은 신축 회복성'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '준비성 철저한 니터를 위한 용어 사전',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '염색 로트 (Dye Lot)',
          definition:
            '실을 염색한 솥을 식별하는 번호. 로트가 다르면 실 뭉치 상태에서는 몰라도 완성작에서 미세한 색상 차이가 확연히 보일 수 있습니다.',
        },
        {
          term: '스태시 (Stash)',
          definition:
            '니터가 자택에 보유하고 있는 실 컬렉션. 라벨 없는 자투리 실 무게를 파악하는 것은 소품 프로젝트 계산에 꼭 필요합니다.',
        },
        {
          term: 'Put-up',
          definition:
            '실이 말려 있는 형태(타래, 볼, 콘 등). 사용 전에 실 감기 도구로 감아야 하는지 여부에 영향을 줍니다.',
        },
        {
          term: '얀 치킨 (Yarn Chicken)',
          definition:
            '부족해 보이는 양의 실로 편물의 한 구획을 완성하려고 도전하는 일.',
        },
      ],
    },
    {
      type: 'title',
      text: '이 계산기 결과 활용법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '도구에서 미터수와 볼 수가 산출되면 다음의 수동 확인 단계를 거치는 것을 권장합니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>실제 실의 길이 확인:</strong> 모든 100g 볼이 200m인 것은 아닙니다. 라벨에서 이 데이터를 확인하여 최종 계산을 조정하세요.',
        '<strong>장식용 길이 추가:</strong> 목도리에 술을 달거나 모자에 방울을 달 예정이라면 총합에 50~80미터를 추가하세요.',
        '<strong>게이지 뜨기:</strong> 10x10 cm 샘플을 뜹니다. 정밀 저울로 무게를 재보세요. 만약 20g이고 담요 사이즈가 100x100(100개분)이라면 정확히 2kg의 실이 필요합니다.',
        '<strong>항상 같은 로트로 구매:</strong> 계산 결과가 7볼이라면, 로트 차이로 인한 색차이를 막고 잇기용 실을 고려하여 8볼을 구매하는 여유를 두세요.',
      ],
    },
    {
      type: 'summary',
      title: '실 구매를 위한 전략적 조언',
      items: [
        '필요한 길이를 확보하기 위해 그램수보다 미터수를 우선시하세요.',
        '코바늘은 대바늘보다 실 소비가 훨씬 많으므로 타입 선택을 적절히 조정하세요.',
        '조밀한 무늬(꽈배기)는 실 예산을 25% 정도 더 잡아야 합니다.',
        '추가 구매가 필요할 때를 대비해 로트 번호가 적힌 라벨을 하나씩 보관해두세요.',
        '반드시 떠야 하는 게이지용 편물을 고려해 10%의 여유 마진을 사용하세요.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. 프로젝트 종류',
    sectionSize: '2. 치수 / 사이즈',
    sectionWeight: '3. 실 두께',
    sectionPattern: '4. 도안 특징',
    sectionBall: '5. 뜨개실 데이터',
    labelCables: '꽈배기나 조밀한 무늬가 있나요?',
    labelGrams: '그램 / 볼',
    labelMeters: '미터 / 볼',
    weightFine: '가는 실',
    weightMedium: '중간 실',
    weightThick: '굵은 실',
    weightXXL: '초극세사',
    projectSweater: '스웨터',
    projectScarf: '목도리',
    projectHat: '모자',
    projectSocks: '양말',
    projectBlanket: '담요',
    projectCardigan: '가디건',
    statPrefix: '예상 총 소비량',
    statSuffix: 'M',
    statNote: '10% 여유분을 포함하여 계산된 최종 미터수입니다.',
    ballsFormatSingular: '{n}볼 구매',
    ballsFormatPlural: '{n}볼 구매',
    ballsDetailFormat: '개당 {w}g / {m}m',
    alertTitle: '전략적 안전수칙:',
    alertText:
      '이 계산은 실 부족이 발생하지 않도록 이미 배려되어 있습니다. 구매 시 염색 로트(dye lot) 번호가 동일한지 확인하세요.',
    schemeSleeveLabel: '소매',
    schemeSleeveEach: '각',
    schemeBodyLabel: '몸판',
    schemeTotalHat: '모자 합계',
    schemeTotalFlat: '편물 합계',
    schemeTotalSocks: '한 켤레 합계',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['어린이', 'S', 'M', 'L'],
      scarf: ['미니', 'M', '대형', '맥시'],
      socks: ['어린이', '성인 S', '성인 M', '성인 L'],
      blanket: ['베이비', '쇼파용', '싱글', '퀸'],
    },
  },
};
