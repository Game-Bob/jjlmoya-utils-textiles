import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'tablica-razmerov-obuvi';
const title = 'Конвертер размеров обуви';
const description = 'Перевод размеров обуви между системами США (US), Европы (EU), Великобритании (UK) и сантиметрами (CM). Гид по мужской и женской обуви.';

const faqData = [
  {
    question: 'Как узнать свой размер обуви в США (US)?',
    answer: 'Для мужчин размер US обычно на одну единицу больше, чем размер UK. Для женщин шкала отличается. Самый точный способ — измерить стопу в сантиметрах и использовать наш конвертер для получения точного номера US.',
  },
  {
    question: 'В чем разница между британским (UK) и американским (US) размерами обуви?',
    answer: 'Хотя в обеих системах используются дюймы, их точки отсчета различаются. Как правило, мужской размер UK 8 соответствует размеру US 9.',
  },
  {
    question: 'Как измерить стопу для определения размера в сантиметрах (CM)?',
    answer: 'Прижмите пятку к стене, отметьте, где заканчивается самый длинный палец, и измерьте расстояние. Это значение в сантиметрах (CM) является самым надежным при покупке обуви международных брендов.',
  },
];

const howToData = [
  {
    name: 'Выберите пол',
    text: 'Выберите, ищете ли вы размеры для мужчин или женщин, так как шкалы различаются.',
  },
  {
    name: 'Выберите регион',
    text: 'Укажите систему размеров, которую вы знаете (EU, US, UK или CM).',
  },
  {
    name: 'Выберите ваш номер',
    text: 'Используйте селектор или нажмите прямо на сетку европейских размеров.',
  },
  {
    name: 'Посмотрите соответствия',
    text: 'Мгновенно получите соответствующий номер в других регионах мира.',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Источники',
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
      text: 'Конвертер размеров обуви: полный международный гид',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Покупка обуви в международных интернет-магазинах может стать логистической проблемой. <strong>Конвертер размеров обуви</strong> — это незаменимый инструмент, позволяющий избежать ненужных возвратов и гарантировать успех каждой покупки на Amazon, AliExpress или в специализированном спортивном магазине.',
    },
    {
      type: 'title',
      text: 'Как работают соответствия размеров обуви?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'В мире обуви нет единого стандарта. Исторически сложилось так, что каждый регион разработал свою систему, основанную на местных единицах измерения, таких как дюймы или «парижская точка».',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Размеры EU (Европа):</strong> основаны на «парижской точке», которая равна 2/3 сантиметра. Это наиболее распространенная система в России.</span>',
        '<span><strong>Размеры US (США):</strong> используют дюймы с разной точкой отсчета для мужчин и женщин.</span>',
        '<span><strong>Размеры UK (Великобритания):</strong> также используют имперскую систему, но со шкалами на одну единицу меньше, чем в США.</span>',
        '<span><strong>Размер CM / Mondopoint:</strong> самый точный. Использует непосредственно длину стопы в сантиметрах.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Гид по измерению стопы для поиска точного размера',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Прежде чем использовать конвертер, важно знать реальную длину вашей стопы. Основным параметром является длина от пятки до кончика самого длинного пальца.',
    },
    {
      type: 'tip',
      title: 'Совет профессионала',
      html: 'Измеряйте стопы в конце дня. Ноги имеют свойство отекать от активности и жары, поэтому утренние замеры могут привести к покупке обуви, которая будет жать во второй половине дня.',
    },
    {
      type: 'title',
      text: 'Почему размеры различаются у разных брендов кроссовок',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Почему у вас 42-й размер в Nike, но 41 1/3 в Adidas? Бренды используют собственные колодки. Некоторые спортивные марки маломерят, что заставляет покупать обувь на полразмера больше обычного.',
    },
  ],
  ui: {
    genderMenTitle: 'Мужская обувь',
    genderWomenTitle: 'Женская обувь',
    regionLabel: 'Ваша система размеров',
    regionEU: 'Европа (EU)',
    regionUS: 'США (US)',
    regionUK: 'Великобритания (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Выберите ваш размер',
    gridDesc: 'Нажмите, чтобы увидеть международные соответствия',
    labelEU: 'Европа (EU)',
    labelUS: 'США (US)',
    labelUK: 'Великобритания (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'см',
    infoBannerHtml: 'Размер <strong>CM</strong> представляет собой физическую длину стопы. Это самый надежный метод покупки кроссовок международных брендов.',
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
