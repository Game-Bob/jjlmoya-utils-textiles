import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'mezhdunarodnyj-konverter-razmerov-odezhdy';
const title = 'Международный конвертер размеров одежды';
const description =
  'Конвертируйте размеры одежды между системами EU, US, UK и IT. Футболки, брюки, платья и куртки для мужчин, женщин и унисекс. Включает руководство по измерениям и рекомендации по брендам.';

const faqData = [
  {
    question: 'В чем разница между размером одежды EU и US?',
    answer:
      'Европейские размеры (EU) обычно используют прогрессивную нумерацию или буквы (XS-XXL или 32-52), в то время как американские (US) часто используют буквы или специфические числа для брюк. В целом, европейский размер 36 соответствует американскому размеру 4 в женской одежде.',
  },
  {
    question: 'Меняются ли размеры для мужской и женской одежды?',
    answer:
      'Да, безусловно. Даже в одной стране мужской размер 40 — это не то же самое, что женский размер 40. У мужчин другие пропорции (более широкие плечи), поэтому расчет размера варьируется.',
  },
  {
    question: 'Как узнать, стоит ли мне брать размер больше или меньше в конкретном бренде?',
    answer:
      'Лучший способ — проверить отзывы других покупателей. Фразы типа «маломерит» или «большемерит» очень полезны. Также сверяйтесь с конкретной таблицей измерений этого бренда.',
  },
  {
    question: 'Насколько точна таблица соответствия размеров?',
    answer:
      'Таблица соответствия является ориентиром. Хотя в целом она точна, у каждого бренда есть свои особенности. Всегда проверяйте таблицу размеров конкретного магазина перед покупкой.',
  },
  {
    question: 'Садится ли одежда после стирки?',
    answer:
      'Это зависит от материала. 100% хлопок может сесть на 5-10%, если его стирать в горячей воде и сушить в сушильной машине. Синтетические материалы лучше держат форму. Всегда проверяйте инструкции по уходу.',
  },
];

const howToData = [
  {
    name: 'Выберите тип одежды и пол',
    text: 'Выберите тип одежды (футболка, брюки, платье, куртка) и соответствующий пол.',
  },
  {
    name: 'Выберите вашу систему размеров',
    text: 'Выберите систему, которую вы знаете: EU, US, UK или IT.',
  },
  {
    name: 'Выберите ваш размер',
    text: 'Выберите свой размер в меню или кликните по сетке. Вы мгновенно увидите соответствия.',
  },
  {
    name: 'Ознакомьтесь с руководством по брендам',
    text: 'Проверьте, маломерит ли этот бренд, идет ли в размер или большемерит, чтобы скорректировать покупку.',
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
  inLanguage: 'ru',
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
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Библиография',
  bibliography: [
    { name: 'ISO 3635: Размеры одежды — официальный стандарт', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Стандарты размеров одежды — Википедия', url: 'https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D0%BC%D0%B5%D1%80_%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D1%8B' },
    {
      name: 'Международная конвертация размеров — Википедия',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Конвертер размеров одежды: полное руководство',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Покупка одежды в международных магазинах может сбить с толку, когда размеры не совпадают. <strong>Конвертер размеров одежды</strong> поможет вам найти свой идеальный размер в системах EU, US, UK и IT для футболок, брюк, платьев и курток.',
    },
    {
      type: 'title',
      text: 'Почему размеры одежды различаются в разных странах?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Не существует единого международного стандарта. Каждый регион разработал свою систему, что создает путаницу при покупках в зарубежных магазинах или на таких платформах, как Amazon или AliExpress.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Размеры EU (Европа):</strong> Используют прогрессивную нумерацию (32, 34, 36...) или буквы. Это самая распространенная система в Германии, Франции и большинстве стран Европы.</span>',
        '<span><strong>Размеры US (США):</strong> Используют буквы (XS, S, M, L) или числа для женских брюк (0, 2, 4, 6...).</span>',
        '<span><strong>Размеры UK (Великобритания):</strong> Похожи на систему EU, но со своей нумерацией, которая обычно ниже американской.</span>',
        '<span><strong>Размеры IT (Италия):</strong> Итальянская нумерация с отличиями от общей системы EU.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Профессиональный совет',
      html: 'Размеры значительно варьируются между брендами. Размер 38 в Zara может отличаться от 38 в H&amp;M. Всегда сверяйтесь с размерной сеткой конкретного магазина перед покупкой.',
    },
    {
      type: 'title',
      text: 'Как правильно измерить свои параметры',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Чтобы гарантированно выбрать правильный размер, измерьте параметры тела гибкой сантиметровой лентой. Делайте замеры в конце дня, когда тело имеет максимальный объем.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Грудь:</strong> Измерьте обхват в самой широкой части груди, пропустив ленту под подмышками.</span>',
        '<span><strong>Талия:</strong> Измеряйте на уровне пупка, не втягивая живот искусственно.</span>',
        '<span><strong>Бедра:</strong> Измерьте обхват в самой широкой части бедер, держа ленту параллельно полу.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Гид по посадке для разных брендов',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Идут в размер. Размер 36 в Zara обычно надежен для стандартных параметров.</span>',
        '<span><strong>H&amp;M:</strong> Имеет тенденцию к большемерности. Рассмотрите вариант выбора на размер меньше вашего обычного.</span>',
        '<span><strong>Uniqlo:</strong> Часто маломерят, особенно в базовых моделях. Рекомендуется брать на размер больше.</span>',
        '<span><strong>Nike / Adidas:</strong> Спортивные, часто облегающие фасоны. Подумайте о том, чтобы взять на полразмера больше.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Тип одежды',
    categoryShirts: 'Футболки',
    categoryPants: 'Брюки',
    categoryDresses: 'Платья',
    categoryJackets: 'Куртки',
    genderLabel: 'Пол',
    genderMen: 'Мужской',
    genderWomen: 'Женское',
    genderUnisex: 'Унисекс',
    tabBySize: 'По размеру',
    tabByMeasurements: 'По параметрам',
    regionLabel: 'Ваша система размеров',
    sizeLabel: 'Выберите ваш размер',
    regionEU: 'Европа (EU)',
    regionUS: 'США (US)',
    regionUK: 'Великобритания (UK)',
    regionIT: 'Италия (IT)',
    labelEU: 'Европа',
    labelUS: 'США',
    labelUK: 'Британия',
    labelIT: 'Италия',
    quickGridTitle: 'Быстрые соответствия (EU)',
    tableTitle: 'Полная таблица конвертации',
    measurementsTitle: 'Введите ваши параметры',
    chestLabel: 'Грудь (см)',
    waistLabel: 'Талия (см)',
    hipLabel: 'Бедра (см)',
    chestPlaceholder: 'Напр: 95',
    waistPlaceholder: 'Напр: 85',
    hipPlaceholder: 'Напр: 95',
    recommendBtnLabel: 'Рекомендовать размер',
    tipsTitle: 'Советы по замеру',
    tipOverClothes: 'Поверх одежды',
    tipStraight: 'Прямо и параллельно',
    tipNoTight: 'Без затягивания',
    tipEndOfDay: 'В конце дня',
    recommendationTitle: 'Рекомендуемый размер',
    recommendedSizePrefix: 'Мы рекомендуем размер:',
    measuredBy: 'Основано на ваших параметрах:',
    chestShort: 'Грудь',
    waistShort: 'Талия',
    hipShort: 'Бедра',
    recommendationError: 'Пожалуйста, заполните все параметры для получения рекомендации.',
    recommendationNoData: 'Нет данных для этой категории.',
    fitGuideTitle: 'Гид по маркам',
    fitSmall: 'Маломерит',
    fitRegular: 'Идет в размер',
    fitLarge: 'Большемерит',
    fitInfoDefault: 'Нажмите на бренд для получения конкретных советов.',
    fitNotif1: ' обычно ',
    fitNotifSmall: 'маломерит',
    fitNotifRegular: 'идет в размер',
    fitNotifLarge: 'большемерит',
    fitNotif2: '. Подумайте о том, чтобы ',
    fitNotif3: ', если вы покупаете этот бренд впервые.',
    fitAdviceSmall: 'взять на размер больше',
    fitAdviceRegular: 'сохранить ваш обычный размер',
    fitAdviceLarge: 'взять на размер меньше',
    fitSelectedSuffix: ' выбрано. Выберите другой бренд для сравнения.',
    infoBannerTitle: 'Профи-совет:',
    infoBannerText:
      'Размеры одежды значительно варьируются между брендами. Всегда проверяйте сетку конкретного магазина перед покупкой.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
