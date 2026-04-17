import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'shoe-size-converter';
const title = '신발 사이즈 변환기';
const description = '미국(US), 유럽(EU), 영국(UK) 및 센티미터(CM) 간의 신발 사이즈를 변환하세요. 남성 및 여성용 국제 신발 사이즈 가이드.';

const faqData = [
  {
    question: '미국(US) 신발 사이즈를 어떻게 알 수 있나요?',
    answer: '남성의 경우, 미국(US) 사이즈는 보통 영국(UK) 사이즈보다 한 수치 더 큽니다. 여성의 경우 기준이 다릅니다. 가장 정확한 방법은 발 길이를 센티미터로 측정한 뒤 저희 변환기를 사용하여 정확한 US 수치를 확인하는 것입니다.',
  },
  {
    question: '영국(UK) 사이즈와 미국(US) 사이즈의 차이점은 무엇인가요?',
    answer: '두 시스템 모두 인치 단위를 사용하지만 기준점이 다릅니다. 일반적으로 남성용 신발의 경우 영국 8 사이즈가 미국 9 사이즈와 같습니다.',
  },
  {
    question: 'CM 사이즈를 알기 위해 발 길이를 어떻게 측정하나요?',
    answer: '벽에 뒤꿈치를 붙이고 가장 긴 발가락 끝을 표시한 뒤 그 거리를 측정하세요. 이 센티미터(CM) 수치는 해외 브랜드 운동화를 구매할 때 가장 신뢰할 수 있는 기준입니다.',
  },
];

const howToData = [
  {
    name: '성격 선택',
    text: '남성용 또는 여성용 사이즈를 찾는지 선택하세요. 성별에 따라 사이즈 체계가 다릅니다.',
  },
  {
    name: '지역 선택',
    text: '알고 있는 사이즈 체계(EU, US, UK 또는 CM)를 지정하세요.',
  },
  {
    name: '사이즈 선택',
    text: '선택 메뉴를 사용하거나 유럽 사이즈 표를 직접 클릭하여 선택하세요.',
  },
  {
    name: '변환 결과 확인',
    text: '세계 다른 지역의 대응하는 사이즈를 즉시 확인하세요.',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: 'Shoe size conversion - Wikipedia', url: 'https://en.wikipedia.org/wiki/Shoe_size' },
    { name: 'ISO 9407: Shoe sizes - Mondopoint system', url: 'https://www.iso.org/standard/17157.html' },
    { name: 'Shoe size conversion - Zappos', url: 'https://www.zappos.com/c/shoe-size-conversion' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '국제 신발 사이즈 변환기: 완벽 변환 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '해외 온라인 쇼핑몰에서 신발을 구매하는 것은 까다로운 일일 수 있습니다. <strong>신발 사이즈 변환기</strong>는 쇼핑 실패와 반품 번거로움을 피하기 위한 필수 도구입니다. 아마존, 알리익스프레스 또는 전문 스포츠 브랜드 몰에서의 구매를 성공으로 이끕니다.',
    },
    {
      type: 'title',
      text: '국가별 신발 사이즈 기준은 어떻게 다른가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '신발 사이즈는 전 세계적으로 통일되어 있지 않습니다. 역사적으로 각 지역은 인치나 "파리 포인트(Paris point)" 같은 독자적인 측정 단위를 기준으로 시스템을 발전시켰기 때문입니다.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>유럽(EU) 사이즈:</strong> 2/3센티미터에 해당하는 "파리 포인트"를 기준으로 합니다. 국내에서도 많이 참고하는 시스템입니다.</span>',
        '<span><strong>미국(US) 사이즈:</strong> 인치 단위를 사용하며 남성과 여성의 기준점이 다릅니다.</span>',
        '<span><strong>영국(UK) 사이즈:</strong> 미국과 마찬가지로 야드-포드법을 따르지만, 수치가 미국보다 1씩 낮게 설정되어 있습니다.</span>',
        '<span><strong>CM 사이즈 / Mondopoint:</strong> 가장 정확한 지표입니다. 실제 발 길이를 센티미터로 직접 나타냅니다.</span>',
      ],
    },
    {
      type: 'title',
      text: '정확한 신발 사이즈를 찾기 위한 발 측정 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '변환기를 사용하기 전에 자신의 실제 발 길이를 아는 것이 중요합니다. 신발 선택의 기본은 뒤꿈치부터 가장 긴 발가락 끝까지의 길이입니다.',
    },
    {
      type: 'tip',
      title: '전문가의 조언',
      html: '측정은 하루의 일과가 끝날 때쯤 하세요. 발은 활동량이나 열에 의해 붓는 경향이 있어, 오전에 잰 수치로 구매하면 오후에 신발이 꽉 낄 수 있습니다.',
    },
    {
      type: 'title',
      text: '브랜드마다 신발 사이즈가 차이 나는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '나이키는 270을 신는데 아디다스는 265(혹은 275)를 신는 이유는 무엇일까요? 브랜드마다 자체적인 "골조(Last)"를 사용하기 때문입니다. 특정 브랜드는 정사이즈보다 작게 나오는 경향이 있어 반 사이즈 크게 신는 것이 좋을 때도 있습니다.',
    },
  ],
  ui: {
    genderMenTitle: '남성용 신발',
    genderWomenTitle: '여성용 신발',
    regionLabel: '적용 중인 사이즈 체계',
    regionEU: '유럽 (EU)',
    regionUS: '미국 (US)',
    regionUK: '영국 (UK)',
    regionCM: '센티미터 (CM)',
    gridTitle: '사이즈 선택',
    gridDesc: '클릭하여 해외 사이즈 변환 결과를 확인하세요',
    labelEU: '유럽 (EU)',
    labelUS: '미국 (US)',
    labelUK: '영국 (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: '<strong>CM 사이즈</strong>는 발의 실제 물리적 길이를 나타냅니다. 해외 브랜드 신발을 구매할 때 가장 실수가 적은 방법입니다.',
    menData: [
      { EU: '39', US: '6.5', UK: '6', CM: '24.5' },
      { EU: '40', US: '7.5', UK: '7', CM: '25.0' },
      { EU: '40.5', US: '8', UK: '7.5', CM: '25.5' },
      { EU: '41', US: '8.5', UK: '8', CM: '26.0' },
      { EU: '42', US: '9', UK: '8.5', CM: '26.5' },
      { EU: '42.5', US: '9.5', UK: '9', CM: '27.0' },
      { EU: '43', US: '10', UK: '9.5', CM: '27.5' },
      { EU: '44', US: '10.5', UK: '10', CM: '28.0' },
      { EU: '44.5', US: '11', UK: '10.5', CM: '28.5' },
      { EU: '45', US: '11.5', UK: '11', CM: '29.0' },
      { EU: '46', US: '12', UK: '11.5', CM: '30.0' },
    ],
    womenData: [
      { EU: '35', US: '5', UK: '3', CM: '22.0' },
      { EU: '36', US: '6', UK: '4', CM: '22.5' },
      { EU: '37', US: '6.5', UK: '4.5', CM: '23.5' },
      { EU: '37.5', US: '7', UK: '5', CM: '23.8' },
      { EU: '38', US: '7.5', UK: '5.5', CM: '24.0' },
      { EU: '38.5', US: '8', UK: '6', CM: '24.5' },
      { EU: '39', US: '8.5', UK: '6.5', CM: '25.0' },
      { EU: '40', US: '9', UK: '7', CM: '25.5' },
      { EU: '41', US: '10', UK: '8', CM: '26.5' },
      { EU: '42', US: '11', UK: '9', CM: '27.0' },
    ],
  },
};
