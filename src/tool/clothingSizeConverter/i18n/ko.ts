import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'clothing-size-converter';
const title = '해외 의류 사이즈 변환기';
const description =
  'EU, US, UK, IT 시스템 간의 의류 사이즈를 변환하세요. 남성용, 여성용, 공용 티셔츠, 바지, 원피스, 재킷을 지원합니다. 측정 가이드 및 브랜드별 맞춤 추천 포함.';

const faqData = [
  {
    question: 'EU 사이즈와 US 사이즈 의류의 차이점은 무엇인가요?',
    answer:
      '유럽(EU) 사이즈는 XS~XXL 또는 32~52와 같은 연속적인 숫자나 문자를 사용하는 반면, 미국(US) 사이즈는 문자나 바지용 특정 숫자를 사용합니다. 일반적으로 여성용의 경우 EU 36 사이즈는 US 4 사이즈에 해당합니다.',
  },
  {
    question: '남성용과 여성용 의류 사이즈가 다른가요?',
    answer:
      '네, 그렇습니다. 같은 국가 내에서도 남성용 40 사이즈는 여성용 40 사이즈와 같지 않습니다. 남성은 신체 비율이 다르기 때문에(어깨 넓이 등) 사이즈 산출 방식이 달라집니다.',
  },
  {
    question: '특정 브랜드에서 한 사이즈 크게 살지 작게 살지 어떻게 알 수 있나요?',
    answer:
      '다른 고객들의 리뷰를 확인하는 것이 가장 좋습니다. "작게 나왔어요" 또는 "사이즈가 커요" 같은 문구는 매우 유용합니다. 또한 해당 브랜드의 구체적인 실측 표를 참고하세요.',
  },
  {
    question: '이 사이즈 변환표는 얼마나 정확한가요?',
    answer:
      '변환표는 참고용 가이드입니다. 일반적으로 정확하지만, 브랜드마다 독자적인 규격을 사용합니다. 구매 전 항상 해당 쇼핑몰의 사이즈 표를 확인하세요.',
  },
  {
    question: '세탁 후 옷이 줄어드나요?',
    answer:
      '소재에 따라 다릅니다. 면 100% 소재는 뜨거운 물로 세탁하고 건조기를 사용하면 5~10% 정도 줄어들 수 있습니다. 합성 소재는 형태 유지력이 더 좋습니다. 항상 케어 라벨의 세탁 지침을 확인하세요.',
  },
];

const howToData = [
  {
    name: '품목 및 성별 선택',
    text: '의류 종류(티셔츠, 바지, 원피스, 재킷)와 해당하는 성별을 선택합니다.',
  },
  {
    name: '사이즈 시스템 선택',
    text: '본인에게 익숙한 사이즈 시스템(EU, US, UK, IT)을 선택합니다.',
  },
  {
    name: '사이즈 선택',
    text: '메뉴에서 사이즈를 선택하거나 그리드를 클릭합니다. 즉시 다른 시스템과의 호환 사이즈가 표시됩니다.',
  },
  {
    name: '브랜드 가이드 참고',
    text: '해당 브랜드의 사이즈가 작게, 보통, 혹은 크게 나오는지 확인하여 구매에 반영하세요.',
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

const shirtsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '44' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '46' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '42' },
  ],
  unisex: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '34' },
    { EU: 'S', US: 'S', UK: 'S', IT: '36' },
    { EU: 'M', US: 'M', UK: 'M', IT: '38' },
    { EU: 'L', US: 'L', UK: 'L', IT: '40' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '42' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '44' },
  ],
};

const pantsData = {
  men: [
    { EU: '30', US: '30', UK: '30', IT: '44' },
    { EU: '32', US: '32', UK: '32', IT: '46' },
    { EU: '34', US: '34', UK: '34', IT: '48' },
    { EU: '36', US: '36', UK: '36', IT: '50' },
    { EU: '38', US: '38', UK: '38', IT: '52' },
    { EU: '40', US: '40', UK: '40', IT: '54' },
  ],
  women: [
    { EU: '32', US: '0', UK: '4', IT: '36' },
    { EU: '34', US: '2', UK: '6', IT: '38' },
    { EU: '36', US: '4', UK: '8', IT: '40' },
    { EU: '38', US: '6', UK: '10', IT: '42' },
    { EU: '40', US: '8', UK: '12', IT: '44' },
    { EU: '42', US: '10', UK: '14', IT: '46' },
  ],
  unisex: [],
};

const dressesData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
  ],
  women: [
    { EU: 'XS', US: '0-2', UK: '4-6', IT: '32-34' },
    { EU: 'S', US: '4-6', UK: '8-10', IT: '36-38' },
    { EU: 'M', US: '8-10', UK: '12-14', IT: '40-42' },
    { EU: 'L', US: '12-14', UK: '16-18', IT: '44-46' },
    { EU: 'XL', US: '16-18', UK: '20-22', IT: '48-50' },
  ],
  unisex: [],
};

const jacketsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '44' },
    { EU: 'S', US: 'S', UK: 'S', IT: '46' },
    { EU: 'M', US: 'M', UK: 'M', IT: '48' },
    { EU: 'L', US: 'L', UK: 'L', IT: '50' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '52' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
  ],
  unisex: [],
};

const measurementRanges = {
  shirts: [
    { size: 'XS', chest: 84, waist: 76, hip: 84 },
    { size: 'S', chest: 92, waist: 84, hip: 92 },
    { size: 'M', chest: 100, waist: 92, hip: 100 },
    { size: 'L', chest: 108, waist: 100, hip: 108 },
    { size: 'XL', chest: 116, waist: 108, hip: 116 },
    { size: 'XXL', chest: 124, waist: 116, hip: 124 },
  ],
  pants: [
    { size: '30', chest: 80, waist: 76, hip: 89 },
    { size: '32', chest: 85, waist: 81, hip: 94 },
    { size: '34', chest: 90, waist: 86, hip: 99 },
    { size: '36', chest: 95, waist: 91, hip: 104 },
    { size: '38', chest: 100, waist: 96, hip: 109 },
    { size: '40', chest: 105, waist: 101, hip: 114 },
  ],
  dresses: [
    { size: 'XS', chest: 80, waist: 72, hip: 88 },
    { size: 'S', chest: 88, waist: 80, hip: 96 },
    { size: 'M', chest: 96, waist: 88, hip: 104 },
    { size: 'L', chest: 104, waist: 96, hip: 112 },
    { size: 'XL', chest: 112, waist: 104, hip: 120 },
  ],
  jackets: [
    { size: 'XS', chest: 84, waist: 76, hip: 88 },
    { size: 'S', chest: 92, waist: 84, hip: 96 },
    { size: 'M', chest: 100, waist: 92, hip: 104 },
    { size: 'L', chest: 108, waist: 100, hip: 112 },
    { size: 'XL', chest: 116, waist: 108, hip: 120 },
  ],
};

export const content: ToolLocaleContent<ClothingSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: 'ISO 3635: 의류 사이즈 - 공식 표준', url: 'https://www.iso.org/standard/68644.html' },
    { name: '의류 사이즈 규격 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%EC%9D%98%EB%A5%98_%EC%B9%98%EC%88%98' },
    {
      name: '국제 의류 사이즈 변환 - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '의류 사이즈 변환기: 완벽 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '해외 온라인 쇼핑몰에서 옷을 구매할 때 사이즈가 맞지 않아 당황스러운 적이 있으셨나요? 이 <strong>의류 사이즈 변환기</strong>는 EU, US, UK, IT 시스템에서 티셔츠, 바지, 원피스, 재킷의 가장 잘 맞는 사이즈를 찾는 데 도움을 줍니다.',
    },
    {
      type: 'title',
      text: '왜 국가마다 의류 사이즈가 다른가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '전 세계적으로 단일화된 국제 표준은 존재하지 않습니다. 각 지역마다 독자적인 시스템을 개발해왔기 때문에 해외 직구나 아마존, 알리익스프레스 같은 플랫폼을 이용할 때 혼란이 발생합니다.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU 사이즈 (유럽):</strong> 연속적인 숫자(32, 34, 36...) 또는 문자를 사용합니다. 독일, 프랑스, 이탈리아 등 유럽 대륙에서 가장 흔한 방식입니다.</span>',
        '<span><strong>US 사이즈 (미국):</strong> 문자(XS, S, M, L) 또는 여성용 바지의 숫자(0, 2, 4, 6...)를 사용합니다.</span>',
        '<span><strong>UK 사이즈 (영국):</strong> EU 방식과 비슷하지만 자체적인 번호 체계가 있으며, 보통 US 번호보다 낮습니다.</span>',
        '<span><strong>IT 사이즈 (이탈리아):</strong> 일반적인 EU 방식과 약간의 차이가 있는 이탈리아 독자 체계입니다.</span>',
      ],
    },
    {
      type: 'tip',
      title: '전문가 팁',
      html: '사이즈는 브랜드에 따라 크게 달라집니다. 자라(Zara)의 38 사이즈는 H&amp;M의 38 사이즈와 다를 수 있습니다. 구매 전 반드시 해당 쇼핑몰의 구체적인 사이즈 표를 확인하세요.',
    },
    {
      type: 'title',
      text: '몸 치수 정확하게 재는 법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '정확한 사이즈를 선택하려면 유연한 줄자를 사용해 몸 치수를 재보세요. 몸이 가장 확장된 상태인 일과 후에 재는 것이 가장 좋습니다.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>가슴둘레:</strong> 가슴의 가장 넓은 부분을 줄자로 둘러서 잽니다. 이때 줄자는 겨드랑이 아래를 지나야 합니다.</span>',
        '<span><strong>허리둘레:</strong> 배를 억지로 집어넣지 않은 상태에서 배꼽 높이의 둘레를 잽니다.</span>',
        '<span><strong>엉덩이둘레:</strong> 줄자가 지면과 수평이 되게 하여 엉덩이의 가장 넓은 부분을 잽니다.</span>',
      ],
    },
    {
      type: 'title',
      text: '브랜드별 핏 가이드',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>자라(Zara):</strong> 정사이즈에 가깝습니다. 표준 체형이라면 자라의 36 사이즈는 대체로 잘 맞습니다.</span>',
        '<span><strong>H&amp;M:</strong> 사이즈가 크게 나오는 편입니다. 일반적으로 입는 사이즈보다 한 사이즈 작게 고려해보세요.</span>',
        '<span><strong>유니클로(Uniqlo):</strong> 특히 기본 의류의 경우 사이즈가 작게 나오는 경향이 있습니다. 한 사이즈 크게 사는 것을 추천합니다.</span>',
        '<span><strong>나이키 / 아디다스:</strong> 운동용으로 타이트하게 제작되는 경우가 많습니다. 반 사이즈 크게 선택해보세요.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: '의류 종류',
    categoryShirts: '티셔츠',
    categoryPants: '바지',
    categoryDresses: '원피스/드레스',
    categoryJackets: '재킷',
    genderLabel: '성별',
    genderMen: '남성',
    genderWomen: '여성',
    genderUnisex: '공용',
    tabBySize: '사이즈 기준',
    tabByMeasurements: '치수 기준',
    regionLabel: '원래 사이즈 시스템',
    sizeLabel: '사이즈 선택',
    regionEU: '유럽 (EU)',
    regionUS: '미국 (US)',
    regionUK: '영국 (UK)',
    regionIT: '이탈리아 (IT)',
    labelEU: '유럽',
    labelUS: '미국',
    labelUK: '영국',
    labelIT: '이탈리아',
    quickGridTitle: '간편 비교표 (EU 기준)',
    tableTitle: '전체 변환표',
    measurementsTitle: '치수 입력',
    chestLabel: '가슴둘레 (cm)',
    waistLabel: '허리둘레 (cm)',
    hipLabel: '엉덩이둘레 (cm)',
    chestPlaceholder: '예: 95',
    waistPlaceholder: '예: 85',
    hipPlaceholder: '예: 95',
    recommendBtnLabel: '사이즈 추천하기',
    tipsTitle: '측정 팁',
    tipOverClothes: '가벼운 옷 위에서',
    tipStraight: '줄자를 수평으로',
    tipNoTight: '조이지 않게',
    tipEndOfDay: '일과 마칠 때쯤',
    recommendationTitle: '추천 사이즈',
    recommendedSizePrefix: '추천 사이즈는:',
    measuredBy: '입력하신 치수 기준:',
    chestShort: '가슴',
    waistShort: '허리',
    hipShort: '엉덩이',
    recommendationError: '추천을 받으려면 모든 치수를 입력해주세요.',
    recommendationNoData: '이 카테고리에 대한 데이터가 없습니다.',
    fitGuideTitle: '브랜드별 핏 가이드',
    fitSmall: '작게 나옴',
    fitRegular: '정사이즈',
    fitLarge: '크게 나옴',
    fitInfoDefault: '해당 브랜드를 클릭하면 자세한 추천 내용을 볼 수 있습니다.',
    fitNotif1: ' 브랜드는 주로 ',
    fitNotifSmall: '작게',
    fitNotifRegular: '보통으로',
    fitNotifLarge: '크게',
    fitNotif2: ' 나옵니다. 처음 구매하신다면 ',
    fitNotif3: '을/를 고려해보세요.',
    fitAdviceSmall: '한 사이즈 크게 선택',
    fitAdviceRegular: '평소 사이즈 유지',
    fitAdviceLarge: '한 사이즈 작게 선택',
    fitSelectedSuffix: ' 브랜드가 선택되었습니다. 다른 브랜드와 비교해보세요.',
    infoBannerTitle: '전문가 팁:',
    infoBannerText:
      '의류 사이즈는 브랜드마다 크게 다릅니다. 구매 전 항상 쇼핑몰의 실측 사이즈를 확인하세요.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
