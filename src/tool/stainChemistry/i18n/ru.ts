import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'khimicheskij-protokol-udaleniya-pyaten';
const title = 'Химический протокол выведения текстильных пятен';
const description =
  'Научные протоколы удаления пятен в зависимости от типа волокна и химической природы загрязнения. Перкарбонат, энзимы, растворители: правильный метод для каждого случая.';

const faqData = [
  {
    question: 'Можно ли использовать хлорку вместо перкарбоната?',
    answer:
      'Хлорка (гипохлорит натрия) очень агрессивна. Она разрушает волокна, делая их желтыми и ломкими. Перкарбонат отбеливает за счет активного кислорода, сохраняя естественную молекулярную структуру.',
  },
  {
    question: 'Почему уксус помогает от запахов?',
    answer:
      'Запахи тела обычно имеют щелочную природу. Уксусная кислота нейтрализует их, превращая в соли без запаха, которые полностью вымываются при полоскании.',
  },
  {
    question: 'Нужно ли всегда использовать холодную воду для пятен крови?',
    answer:
      'Да. Тепло заставляет белки крови сворачиваться, навсегда закрепляя их на волокне. Холодная вода поддерживает пятно в растворимом состоянии и позволяет энзимным средствам работать эффективно.',
  },
  {
    question: 'Что произойдет, если нанести ацетон на одежду из ацетата?',
    answer:
      'Ацетон растворяет триацетат и ацетат. Ацетатные волокна представляют собой целлюлозу, этерифицированную уксусной кислотой, и полностью растворяются в ацетоне. Результатом будет необратимое разрушение ткани.',
  },
];

const howToData = [
  {
    name: 'Определите тип волокна',
    text: 'Проверьте внутреннюю этикетку изделия, чтобы узнать, является ли оно натуральным, синтетическим или деликатным (шерсть, шелк, кашемир).',
  },
  {
    name: 'Выберите волокно в инструменте',
    text: 'Выберите соответствующий материал в первом селекторе.',
  },
  {
    name: 'Выберите тип пятна',
    text: 'Укажите, является ли пятно органическим (вино, фрукты), белковым (кровь), жирным или синтетическим (чернила).',
  },
  {
    name: 'Примените указанный протокол',
    text: 'Следуйте инструкциям по средству, температуре и методу. Обратите особое внимание на критические предупреждения.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Химический протокол пятен',
    fiberLabel: '1. Волокно',
    selectFiberPlaceholder: 'Выберите ткань...',
    stainLabel: '2. Пятно',
    selectStainPlaceholder: 'Что произошло?',
    molecularDiagnosis: 'Молекулярная диагностика',
    requiredAgent: 'Необходимое средство',
    thermalCondition: 'Температурный режим',
    temperature: 'Температура',
    cleaningInstructions: 'Инструкции по очистке',
    criticalWarning: 'Критическая осторожность',
    criticalWarningLabel: 'ВНИМАНИЕ',
    technicalNote: 'Техническая заметка',
    technicalNoteText:
      'Всегда проверяйте стойкость красителя на незаметном участке, прежде чем приступать к полной химической обработке.',
    systemDiagnosis: 'Система диагностики',
    systemDiagnosisDesc:
      'Настройте параметры текстиля, чтобы получить план очистки',
    delicatePercarbonateWarning:
      'РИСК МОЛЕКУЛЯРНОЙ ДЕГРАДАЦИИ. Животные волокна очень чувствительны к перкарбонату. Проведите тест на незаметном участке.',
    fiberData: {
      cotton: { name: 'Хлопок', family: 'natural', isNoble: false },
      linen: { name: 'Лен', family: 'natural', isNoble: true },
      wool: { name: 'Шерсть / Меринос', family: 'natural', isNoble: true },
      silk: { name: 'Шелк', family: 'natural', isNoble: true },
      cashmere: { name: 'Кашемир', family: 'natural', isNoble: true },
      mohair: { name: 'Мохер', family: 'natural', isNoble: true },
      angora: { name: 'Ангора', family: 'natural', isNoble: true },
      alpaca: { name: 'Альпака', family: 'natural', isNoble: true },
      polyester: { name: 'Полиэстер', family: 'synthetic', isNoble: false },
      viscose: { name: 'Вискоза / Район', family: 'artificial', isNoble: false },
      nylon: { name: 'Нейлон (Полиамид)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Акрил', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Перкарбонат натрия',
        description: 'Биоразлагаемый кислородный отбеливатель. Выделяет активный кислород при растворении.',
        warning: 'Избегайте использования на белковых волокнах (шелк, шерсть) в высоких концентрациях.',
      },
      isopropyl: {
        name: 'Изопропиловый спирт',
        description: 'Эффективный растворитель для пигментов и легких жиров.',
        warning: 'Может повредить блеск шелка и растворить некоторые акриловые ткани, если не разбавить.',
      },
      acetone: {
        name: 'Ацетон',
        description: 'Мощный растворитель для лаков и клеев.',
        warning: 'ЗАПРЕЩЕНО для ацетата и триацетата (растворяет волокно).',
      },
      enzyme: {
        name: 'Энзимное моющее средство',
        description: 'Содержит протеазы, которые расщепляют биологические пятна.',
        warning: 'Используйте с осторожностью для шерсти и шелка (они состоят из белка).',
      },
      vinegar: {
        name: 'Белый уксус',
        description: 'Слабая уксусная кислота для нейтрализации запахов и закрепления цвета.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Красное вино / Фрукты',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Длительное замачивание' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Нанесение пасты' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Холодная',
            method: 'Полоскание газированной водой с уксусом',
            notes: 'Не тереть',
          },
        },
      },
      {
        id: 'blood',
        name: 'Кровь',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Холодная',
            method: 'Замачивание в соленой воде, затем энзимы',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Холодная', method: 'Прямое нанесение' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Холодная',
            method: 'Немедленное полоскание, избегать нагрева',
          },
        },
      },
      {
        id: 'grease',
        name: 'Жир / Масло',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Растворить спиртом, затем постирать',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Подложить впитывающую бумагу снизу',
          },
          delicate: { agentId: 'isopropyl', temperature: 'Холодная', method: 'Разбавить спирт до 50%' },
        },
      },
      {
        id: 'ink',
        name: 'Чернила / Маркер',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Комнатная',
            method: 'Промакивать от краев к центру',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Комнатная',
            method: 'Осторожно с растеканием пятна',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Холодная',
            method: 'Разбавить и проверить на скрытом участке',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Химия текстильной очистки',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Не все пятна одинаковы, и не все волокна одинаково реагируют на одни и те же химические агенты. Разница между спасением вещи и ее уничтожением заключается в понимании молекулярной природы пятна и структуры волокна.',
    },
    {
      type: 'card',
      title: '01 — Контролируемое окисление',
      icon: 'mdi:atom',
      html: '<strong>Перкарбонат натрия</strong> выделяет активный кислород, который разрывает двойные связи хромофоров (молекул, отвечающих за цвет пятна), делая их бесцветными и водорастворимыми. Это самый эффективный метод для органических пятен.',
    },
    {
      type: 'card',
      title: '02 — Растворение растворителями',
      icon: 'mdi:flask-outline',
      html: 'Пятна от масла или чернил не растворяются в воде. Растворители, такие как <strong>изопропиловый спирт</strong> или <strong>ацетон</strong>, снижают поверхностное натяжение и притягивают неполярные молекулы пятна, позволяя им переноситься на подложку.',
    },
    {
      type: 'title',
      text: 'Власть над волокнами: почему тип имеет значение',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Не все волокна «едятся» одинаково. <strong>Шелк и шерсть</strong> — это белки (фиброин и кератин). Если вы без контроля примените энзимное средство, предназначенное для «поедания белков» (пятна крови или яйца), моющее средство начнет разрушать само волокно, уничтожая блеск и структуру ткани.',
    },
    {
      type: 'title',
      text: 'Опасность тепла',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Одна из самых распространенных ошибок — использование горячей воды для «размягчения» пятна крови. Химически тепло вызывает <strong>коагуляцию белков</strong> пятна, навсегда закрепляя их в пористой структуре волокна. Белковые пятна всегда следует обрабатывать холодной водой.',
    },
    {
      type: 'tip',
      title: 'Экстренный протокол: красное вино',
      html: '<strong>А. Пассивное впитывание:</strong> промокнуть впитывающей бумагой, никогда не тереть, чтобы избежать механического распространения.<br><strong>Б. Осмотическая нейтрализация:</strong> засыпать мелкой солью, чтобы вытянуть жидкость из сердцевины волокна.<br><strong>В. Химическое воздействие:</strong> нанести пасту из перкарбоната и воды при 40°C, если волокно термостойкое.',
    },
    {
      type: 'title',
      text: 'Специфические растворители и меры предосторожности',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Ацетон</strong> — исключительный растворитель для лаков для ногтей или клея, но он губителен для <strong>ацетата</strong>. Будучи волокнами, производными от целлюлозы, но химически обработанными, ацетон буквально растворяет ткань.',
    },
    {
      type: 'paragraph',
      html: '<strong>Изопропиловый спирт</strong> более стабилен, но на окрашенной синтетике он может вымывать сам пигмент. Мы всегда рекомендуем проводить «тест на шве» на незаметном участке перед основной обработкой.',
    },
  ],
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Библиография',
  bibliography: [
    {
      name: 'AATCC - Association for Advancing Color Technology and Chemistry',
      url: 'https://www.aatcc.org',
    },
    {
      name: 'Kissa, E. — Textile Auxiliaries',
      url: 'https://www.springer.com/gp/book/9783642057328',
    },
    {
      name: 'ISO 105 — Textiles: Tests for Colour Fastness',
      url: 'https://www.iso.org/standard/72682.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
