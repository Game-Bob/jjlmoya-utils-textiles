import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'calculadora-lana-tejido';
const title = 'Calculadora de Lana: ¿Cuántos metros y ovillos necesito?';
const description =
  'Calcula con precisión métrica la cantidad de lana o hilo necesaria para tus proyectos de punto y ganchillo a partir del patrón y la talla.';

const faqData = [
  {
    question: '¿Por qué el ganchillo (crochet) gasta más lana que el punto de media?',
    answer:
      'El ganchillo se basa en la creación de nudos y bucles superpuestos, lo que genera un tejido más denso y grueso por centímetro cuadrado. Por término medio, un proyecto de ganchillo consume entre un 25% y un 35% más de hilo que el mismo proyecto tejido a dos agujas (punto liso).',
  },
  {
    question: '¿Qué pasa si compro lana de distintos lotes de tinte (Dye Lot)?',
    answer:
      'Incluso si el color parece idéntico en la tienda, las variaciones químicas mínimas durante el teñido pueden crear "franjas" visibles en la prenda terminada cuando se tejen juntas. Se recomienda encarecidamente comprar toda la lana de una vez verificando que el código de lote sea el mismo.',
  },
  {
    question: '¿Cómo afecta la tensión (gauge) al consumo final?',
    answer:
      'Si tejes de forma floja, cada punto consume más metros de hilo. Si tu muestra de tensión es más grande de lo que indica el patrón (ej. 13 puntos en lugar de 15), tu consumo de lana aumentará sustancialmente. Es vital realizar una muestra de tensión previa.',
  },
  {
    question: '¿Cómo calculo los metros si solo tengo el peso del ovillo?',
    answer:
      'Sin el dato de metraje, es difícil. La mayoría de ovillos indican en su etiqueta los metros. Si no lo hacen, busca por el nombre de la lana en bases de datos como Ravelry para encontrar la longitud exacta por cada 50g o 100g.',
  },
];

const howToData = [
  {
    name: 'Selecciona el proyecto',
    text: 'Elige entre un jersey, bufanda, gorro, calcetines o manta para cargar las bases de consumo específicas.',
  },
  {
    name: 'Define la talla y grosor',
    text: 'Indica las dimensiones finales (S, M, L, XL) y el grosor del hilo que vas a utilizar (Fingering, DK, Worsted, Bulky).',
  },
  {
    name: 'Activa multiplicadores',
    text: 'Si tu patrón tiene trenzas, ochos o texturas complejas, activa el switch de texturas para añadir el suplemento necesario.',
  },
  {
    name: 'Obtén la lista de compra',
    text: 'Escribe los metros por ovillo de tu lana elegida para ver exactamente cuántas unidades debes meter en el carrito.',
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
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
      text: 'Guía de Consumo de Lana: Cómo Calcular metros y ovillos para tus proyectos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Domina la logística del tejido y evita quedarte sin hilo con nuestra calculadora técnica de precisión para punto y ganchillo. Uno de los mayores miedos de cualquier persona que teje es el <strong>"Yarn Chicken"</strong>: ese momento crítico al final de un proyecto donde parece que el hilo se va a terminar antes de cerrar los últimos puntos. Esta calculadora ha sido desarrollada para ofrecerte estimaciones basadas en estándares industriales de metraje y gramaje.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Margen de Pánico', icon: 'mdi:security' },
        { value: 'Métrico', label: 'Cálculo en Metros', icon: 'mdi:ruler' },
        { value: 'Offline', label: 'Base de Datos Local', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '¿Por qué el gramaje de los ovillos es engañoso?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muchos principiantes cometen el error de comprar lana basándose exclusivamente en el peso (ej. "6 ovillos de 100g"). Sin embargo, el peso es una unidad de masa, no de longitud. Dos lanas que pesen 100g pueden tener longitudes radicalmente distintas: una lana tipo <strong>Bulky</strong> puede tener solo 80 metros, mientras que una <strong>Fingering / Lace</strong> puede superar los 450 metros en el mismo peso.',
    },
    {
      type: 'paragraph',
      html: 'Por ello, nuestra calculadora prioriza siempre los <strong>metros totales</strong>. Una vez que conoces la longitud necesaria para tu talla y proyecto, puedes dividirla por el metraje que indica la etiqueta de tu ovillo específico para obtener el número exacto de unidades que debes adquirir.',
    },
    {
      type: 'title',
      text: 'Tabla de Metrajes Estándar por Grosor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si no tienes la etiqueta a mano, puedes usar estos metrajes de referencia (por cada 100g de fibra) para tus estimaciones:',
    },
    {
      type: 'table',
      headers: ['Grosor (Weight)', 'Metros aprox. / 100g', 'Uso Recomendado', 'Agujas Sugeridas'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Chales de encaje, calados', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Calcetines, ropa bebé', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Chaquetas ligeras', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Jerséis, gorros', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Mantas, abrigos', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'Bufandas XXL, mantas', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'El Factor de la Tensión (Gauge)',
      html: '<p>Recuerda que si tejes de forma muy floja, tus puntos serán más grandes y consumirán más hilo que si tejes de forma apretada. Nuestra calculadora aplica un margen de seguridad, pero si sabes que tu tensión es extremadamente laxa, considera añadir un 5-10% adicional a los resultados para evitar sorpresas.</p>',
    },
    {
      type: 'title',
      text: 'Variables que aumentan el consumo de hilo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No todos los puntos consumen la misma cantidad de fibra. Al elegir tu diseño, ten en cuenta estos factores multiplicadores:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Punto Liso / Jersey',
          description: 'Representa el consumo base y la eficiencia máxima de hilo para cualquier prenda.',
          icon: 'mdi:minus-circle-outline',
          points: ['Ideal para principiantes', 'Caída natural del tejido'],
        },
        {
          title: 'Trenzas / Ocho',
          description: 'El cruce de fibras "acorta" la pieza, aumentando el consumo en un 25%.',
          icon: 'mdi:texture-box',
          points: ['Requiere más metros', 'Tejido más denso y pesado'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Ganchillo (Crochet)',
          description: 'Los nudos del ganchillo usan un 30% más hilo que el punto de media.',
          icon: 'mdi:hook',
          points: ['Gasto acelerado de ovillos', 'Textura tridimensional'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Punto Elástico',
          description: 'La estructura de derecho/revés acumula más lana por cm cuadrado.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Consumo intermedio (+15%)', 'Alta recuperación elástica'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Glosario del Tejedor Previsor',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (Lote de Tinte)',
          definition:
            'Número que identifica la tina de tinte en la que se tiñó la lana. Diferentes lotes pueden tener variaciones de color imperceptibles en el ovillo pero muy visibles en la prenda terminada.',
        },
        {
          term: 'Stash (Reserva)',
          definition:
            'La colección personal de hilos de un tejedor. Identificar el peso de los restos de hilos sin etiqueta es vital para calcular proyectos pequeños.',
        },
        {
          term: 'Put-up',
          definition:
            'La forma en la que se presenta el hilo (en madeja, en ovillo o en cono), lo que afecta a si necesita ser ovillado antes de usar.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'El reto de intentar terminar una sección de tejido con una cantidad de hilo que parece insuficiente.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo usar los resultados de esta calculadora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una vez que la herramienta te devuelva el número de metros y ovillos, te recomendamos realizar los siguientes pasos de verificación manual:',
    },
    {
      type: 'list',
      items: [
        '<strong>Comprueba el metraje de tu ovillo real:</strong> No todos los ovillos de 100g tienen 200m. Verifica este dato en la etiqueta para ajustar el cálculo final.',
        '<strong>Suma el metraje de los detalles:</strong> Si vas a añadir flecos a una bufanda o pompones a un gorro, suma 50-80 metros extra al total.',
        '<strong>Muestra de tensión:</strong> Teje un cuadrado de 10x10 cm. Pésalo en una báscula de precisión. Si pesa 20g y tu manta mide 100x100 (100 cuadrados), necesitarás exactamente 2kg de lana.',
        '<strong>Compra siempre del mismo lote:</strong> Si el cálculo dice 7 ovillos, compra 8 si son de lotes distintos para tener margen de maniobra o para piezas ocultas como las costuras.',
      ],
    },
    {
      type: 'summary',
      title: 'Consejos Estratégicos para la Compra de Lana',
      items: [
        'Prioriza los metros sobre los gramos para asegurar la longitud necesaria.',
        'El ganchillo consume sustancialmente más lana que el punto; ajusta el selector de tipo.',
        'Las texturas densas (trenzas) requieren un aumento del 25% en el presupuesto de hilo.',
        'Guarda siempre una etiqueta de cada lote por si necesitas pedir repuesto de color.',
        'Usa el 10% de margen de seguridad para tejer la muestra de tensión obligatoria.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. TIPO DE PROYECTO',
    sectionSize: '2. DIMENSIONES / TALLA',
    sectionWeight: '3. GROSOR DEL HILO',
    sectionPattern: '4. CARACTERÍSTICAS DEL PATRÓN',
    sectionBall: '5. DATOS DEL OVILLO',
    labelCables: '¿Trenzas o texturas densas?',
    labelGrams: 'GRAMOS / OVILLO',
    labelMeters: 'METROS / OVILLO',
    weightFine: 'Fino',
    weightMedium: 'Medio',
    weightThick: 'Grueso',
    weightXXL: 'XXL',
    projectSweater: 'JERSEY',
    projectScarf: 'BUFANDA',
    projectHat: 'GORRO',
    projectSocks: 'CALCETINES',
    projectBlanket: 'MANTA',
    projectCardigan: 'CHAQUETA',
    statPrefix: 'CONSUMO ESTIMADO TOTAL',
    statSuffix: 'M',
    statNote: 'Metraje final calculado con stock de reserva del 10%.',
    ballsFormatSingular: 'Compra {n} ovillo',
    ballsFormatPlural: 'Compra {n} ovillos',
    ballsDetailFormat: 'Ovillos de {w}g / {m}m cada uno.',
    alertTitle: 'Seguridad estratégica:',
    alertText:
      'Este cálculo ya garantiza que no te quedarás sin hilo. Recuerda validar el número de lote (dye lot) al comprar tus ovillos para evitar saltos de color.',
    schemeSleeveLabel: 'Mangas',
    schemeSleeveEach: 'c/u',
    schemeBodyLabel: 'Cuerpo',
    schemeTotalHat: 'Total Gorro',
    schemeTotalFlat: 'Total Pieza',
    schemeTotalSocks: 'Total Par',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Niño', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Grande', 'Maxi'],
      socks: ['Niño', 'Ad. S', 'Ad. M', 'Ad. L'],
      blanket: ['Bebé', 'Sofá', 'Cama 90', 'Cama 150'],
    },
  },
};
