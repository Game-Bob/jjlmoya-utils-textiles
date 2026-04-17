import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'test-na-gorenie-textilya';
const title = 'Тест на горение текстиля';
const description =
  'Определите реальный состав любой ткани, анализируя ее поведение при горении. Научно дифференцируйте хлопок, шерсть, шелк и синтетику.';

const faqData = [
  {
    question: 'Безопасно ли проводить тест на горение дома?',
    answer:
      'Да, при условии соблюдения строгих мер предосторожности: используйте металлический пинцет, работайте на огнеупорной поверхности (керамика или металл), держите воду поблизости и проводите тест в проветриваемом месте. Вам понадобится всего лишь небольшой образец 1х1 см или несколько нитей.',
  },
  {
    question: 'Как пахнет хлопок при горении?',
    answer:
      'Хлопок — это чистая целлюлоза. При горении он пахнет точно так же, как жженая бумага или сухие листья. Образующаяся зола серая, очень мелкая и рассыпается при прикосновении.',
  },
  {
    question: 'Что означает твердый черный шарик на конце волокна?',
    answer:
      'Это безошибочный признак синтетического волокна (пластика), такого как полиэстер или нейлон. При плавлении полимер спекается в пластиковую бусину, которая не крошится, в отличие от пепла натуральных волокон.',
  },
  {
    question: 'Почему шерсть плохо пахнет при горении?',
    answer:
      'Шерсть и шелк — это животные белки, содержащие серу. При контакте с огнем они издают резкий запах паленой шерсти или перьев. Это самый простой способ отличить их от растительных волокон.',
  },
];

const howToData = [
  {
    name: 'Возьмите репрезентативный образец',
    text: 'Отрежьте небольшой квадрат ткани или, что еще лучше, вытяните несколько нитей как из основы (вертикаль), так и из утка (горизонталь).',
  },
  {
    name: 'Наблюдайте за приближением к пламени',
    text: 'Медленно поднесите волокно к огню, не касаясь его. Наблюдайте, сжимается ли оно, плавится или мгновенно загорается.',
  },
  {
    name: 'Проанализируйте тип пламени и дыма',
    text: 'Обратите внимание, является ли пламя постоянным или гаснет само по себе, а также на цвет дыма: белый, черный или полное его отсутствие.',
  },
  {
    name: 'Оцените остаток и запах',
    text: 'После остывания потрогайте полученный пепел или шарик и проверьте запах (бумаги, волос или химический), чтобы подтвердить семейство волокна.',
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

const flame = {
  cellulosic: 'Горит БЫСТРО и ЯРКО (желтое пламя). Не плавится. Продолжает гореть после удаления из пламени.',
  protein: 'Горит МЕДЛЕННО, потрескивает и СЖИМАЕТСЯ, удаляясь от пламени. Самозатухает после удаления.',
  synthetic: 'ПЛАВИТСЯ и быстро сокращается, капает как расплавленный пластик. Коптящее пламя.',
};

const odor = {
  paper: 'Жженая бумага, дерево, сухие листья.',
  hair: 'Паленый волос, жженый рог, перья.',
  chemical_sweet: 'Химический АРОМАТНЫЙ (сладкий, фруктовый).',
  chemical_fishy: 'Химический КИСЛЫЙ (рыба, жареное мясо).',
  vegetable: 'Вареные овощи (сельдерей).',
};

const residue = {
  ash_soft: 'Мелкая СЕРАЯ/ЧЕРНАЯ зола, мягкая и летучая (рассыпается при касании).',
  ash_shape: 'СЕРАЯ зола сохраняет форму волокна (хрупкая).',
  bead_crushable: 'Полая/хрупкая черная масса (легко раздавливается пальцами).',
  bead_hard: 'ТВЕРДЫЙ стеклянный шарик. Невозможно раздавить пальцами.',
  bead_irregular: 'ТВЕРДАЯ неправильная черная масса.',
};

const smoke = {
  white_gray: 'Белый / Светло-серый.',
  gray: 'Средне-серый.',
  black: 'Плотный темный ЧЕРНЫЙ дым.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Библиография',
  bibliography: [
    {
      name: 'AATCC TM20: Fiber Analysis - Qualitative',
      url: 'https://members.aatcc.org/store/tm20/485/',
    },
    {
      name: 'Textile Fibers: Identification and Testing - NIST',
      url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/circ/nbscircular41e3.pdf',
    },
    {
      name: 'Burn Test Chart for Fiber Identification - Fabric Mart',
      url: 'https://fabricmartfabrics.com/pages/burn-test-chart',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Криминалистика волокна',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Тест на горение — это самый быстрый и точный аналитический метод дифференциации натуральных полимеров от синтетических без использования электронного микроскопа. При воздействии тепла на волокно его молекулярное поведение раскрывает его происхождение: от растительной целлюлозы до животных белков или производных нефти.',
    },
    {
      type: 'card',
      title: 'Целлюлозные волокна',
      icon: 'mdi:leaf',
      html: '<strong>Хлопок</strong> и <strong>Лен</strong> горят быстро, не плавясь. Они пахнут жженой бумагой, так как происходят из дерева или растений, оставляя летучую серую золу, которая разлетается, если на нее подуть.',
    },
    {
      type: 'card',
      title: 'Белковые волокна',
      icon: 'mdi:sheep',
      html: '<strong>Шерсть</strong> и <strong>Шелк</strong> отстраняются от пламени. Их характерный запах паленого волоса указывает на присутствие серы и кератина. Остаток представляет собой черный шарик, который разрушается при касании.',
    },
    {
      type: 'card',
      title: 'Синтетические волокна',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>Полиэстер</strong> и <strong>Нейлон</strong> — это, по сути, пластик. Они плавятся, образуя горячую каплю, которая застывает в стеклянную бусину, которую невозможно сломать, с резким химическим запахом.',
    },
    {
      type: 'title',
      text: 'Матрица химических доказательств',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Точный анализ требует сопоставления как минимум трех улик. Запах — самый надежный индикатор для определения смешанных составов: если «льняная» ткань издает легкий пластиковый аромат и оставляет твердые остатки, это указывает на незаявленную примесь полиэстера.',
    },
    {
      type: 'tip',
      title: 'Лабораторный протокол безопасности',
      html: '<strong>Критическая вентиляция:</strong> Синтетические волокна выделяют токсичные газы при горении. Никогда не проводите этот тест в закрытых помещениях.<br><strong>Немедленное тушение:</strong> Всегда держите рядом емкость с водой. Некоторые синтетические волокна могут плавиться и прилипать к коже.',
    },
  ],
  ui: {
    investigationLabel: 'РАССЛЕДОВАНИЕ',
    stepPrefix: 'ШАГ',
    stepCompleted: 'АНАЛИЗ ЗАВЕРШЕН',
    resetLabel: 'СБРОС',
    positiveId: 'ПОЛОЖИТЕЛЬНАЯ ИДЕНТИФИКАЦИЯ',
    flameLabel: 'Поведение пламени',
    odorLabel: 'Обонятельный след',
    residueLabel: 'Остаток',
    identifiedAs: 'Образец положительно идентифицирован как',
    safetyTitle: 'Протокол безопасности',
    safetyText:
      'Проводите этот тест в проветриваемом месте на огнеупорной поверхности. Используйте металлический пинцет и держите воду поблизости.',
    questions: {
      flame: 'Поведение в пламени?',
      odor: 'Характерный запах?',
      residue: 'Конечный остаток?',
      smoke: 'Тип дыма?',
    },
    fiberData: {
      cotton: { name: 'Хлопок', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Натуральное растительное волокно, мягкое и дышащее. Основа любого гардероба.' },
      linen: { name: 'Лен', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Очень прочное растительное волокно, прохладное и с характерной помятостью.' },
      wool: { name: 'Шерсть / Меринос', icon: 'mdi:sheep', color: '#FCD34D', description: 'Белковое животное волокно, отличный термоизолятор, эластичное.' },
      silk: { name: 'Шелк', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Животное волокно в виде непрерывной нити. Естественный блеск и приятная сухость.' },
      cashmere: { name: 'Кашемир', icon: 'mdi:crown', color: '#F59E0B', description: 'Роскошное волокно из подшерстка кашемировых коз. Невероятно мягкое, легкое и теплое.' },
      mohair: { name: 'Мохер', icon: 'mdi:shimmer', color: '#14B8A6', description: '«Алмазное волокно» из шерсти ангорской козы. Естественный блеск, очень прочное.' },
      angora: { name: 'Ангора', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Пух ангорского кролика. Известен своим пушистым эффектом и экстремальной легкостью.' },
      alpaca: { name: 'Альпака', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Сокровище Анд. Полое, теплое, гипоаллергенное и шелковистое волокно.' },
      polyester: { name: 'Полиэстер', icon: 'mdi:oil', color: '#94A3B8', description: 'Синтетическое волокно на основе нефти. Прочное, не мнется, не дышит.' },
      nylon: { name: 'Нейлон (Полиамид)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Высокопрочное синтетическое волокно, устойчивое к растяжению и истиранию.' },
      acrylic: { name: 'Акрил', icon: 'mdi:resize', color: '#450A0A', description: 'Синтетическая имитация шерсти. Мягкий, теплый, склонен к образованию катышков.' },
    },
    burnTestData: [
      { fiberId: 'cotton', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_soft },
      { fiberId: 'linen', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_shape },
      { fiberId: 'wool', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'silk', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'cashmere', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'mohair', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'angora', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'alpaca', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'polyester', flame: flame.synthetic, odor: odor.chemical_sweet, smoke: smoke.black, residue: residue.bead_hard },
      { fiberId: 'nylon', flame: flame.synthetic, odor: odor.vegetable, smoke: smoke.white_gray, residue: residue.bead_hard },
      { fiberId: 'acrylic', flame: flame.synthetic, odor: odor.chemical_fishy, smoke: smoke.black, residue: residue.bead_irregular },
    ],
  },
};
