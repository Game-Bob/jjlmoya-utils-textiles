import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'calculadora-tela-proyecto';
const title = 'Calculadora de Consumo de Tela por Prenda';
const description =
  'Calcula fácilmente cuánta tela necesitas para coser una falda, un pantalón, un vestido o una camisa. Ajusta según el ancho de la tela y la talla para un corte profesional.';

const faqData = [
  {
    question: '¿Cuánta tela necesito para una falda?',
    answer:
      'Depende del ancho de la tela. Para una falda recta en tela de 140-150 cm suele bastar con 1.20 metros. Si la tela es de 90-110 cm, necesitarás 2.00 metros.',
  },
  {
    question: '¿Cómo afecta el ancho de la tela al consumo?',
    answer:
      'A menor ancho, las piezas del patrón no caben una junto a la otra (en paralelo), por lo que el consumo suele duplicarse al tener que colocarlas una debajo de la otra.',
  },
  {
    question: '¿Es mejor comprar tela de más?',
    answer:
      'Sí, se recomienda un margen del 10% (unos 20 cm) para compensar encogimientos, fallas en el tejido o márgenes de costura inesperados.',
  },
  {
    question: '¿Qué es el derecho del hilo y cómo influye?',
    answer:
      'Es la dirección paralela a los orillos de la tela. Los patrones deben alinearse con este hilo para que la prenda no se deforme al usarla.',
  },
];

const howToData = [
  {
    name: 'Elegir el tipo de prenda',
    text: 'Selecciona el modelo que vas a confeccionar (falda, pantalón, etc.) para cargar su tabla de consumo base.',
  },
  {
    name: 'Introducir ancho de la tela',
    text: 'Mide el ancho de orillo a orillo de la tela que planeas comprar (90, 115, 140 o 150 cm).',
  },
  {
    name: 'Seleccionar la talla',
    text: 'Ajusta el volumen de la prenda según la talla (XS-S, M-L, XL-XXL) para recalcular el factor multiplicativo.',
  },
  {
    name: 'Obtener metros totales',
    text: 'Revisa el resultado final con y sin margen de costura para saber exactamente cuánto pedir en la tienda.',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
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
      text: 'Calculadora de Metros de Tela para Confección: Guía de Consumo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una de las dudas más frecuentes en el taller de costura es determinar cuánta tela comprar para un proyecto específico. El consumo de tejido depende radicalmente de tres factores: el modelo de la prenda, la talla de la persona y, sobre todo, el ancho de la pieza de tela (que suele oscilar entre 90 cm y 150 cm). Esta calculadora técnica sistematiza el cálculo para que no compres de más ni te quedes corto en mitad del corte.',
    },
    {
      type: 'title',
      text: '¿Cuánta tela necesito para un vestido o pantalón?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El cálculo tradicional se basa en el largo de la prenda más el largo de las mangas, añadiendo un margen para las vistas y el dobladillo. Sin embargo, cuando la tela es estrecha (90-110 cm), las piezas no suelen caber una al lado de la otra, lo que obliga a comprar el doble de largo. Nuestra herramienta contempla estas variaciones automáticamente según el estándar de la industria textil.',
    },
    {
      type: 'title',
      text: 'Consumo Estimado según el Ancho de la Tela (talla M-L)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Falda Recta:</strong> 2.00 m en tela de 90 cm · 1.20 m en tela de 140/150 cm.',
        '<strong>Pantalón Largo:</strong> 2.50 m en tela de 90 cm · 1.50 m en tela de 140/150 cm.',
        '<strong>Camisa Manga Larga:</strong> 2.20 m en tela de 90 cm · 1.40 m en tela de 140/150 cm.',
        '<strong>Vestido Básico:</strong> 3.50 m en tela de 90 cm · 2.20 m en tela de 140/150 cm.',
      ],
    },
    {
      type: 'title',
      text: 'Factores que Alteran el Consumo de Tela',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dirección del estampado (Rapport):</strong> Si la tela tiene un dibujo con una dirección clara o cuadros que deben casar, necesitarás entre un 15% y un 20% extra de material.',
        '<strong>Sentido del hilo (Al bies):</strong> Los cortes al bies o circulares (como las faldas de capa) consumen significativamente más tela debido al desperdicio en los ángulos.',
        '<strong>Sentido del pelo:</strong> En tejidos como el terciopelo o la pana, todas las piezas deben cortarse en la misma dirección, lo que limita la optimización del espacio.',
        '<strong>Encogimiento:</strong> Muchos tejidos naturales (algodón, lino, lana) encogen tras el primer lavado. Es vital prelavar la tela antes de cortar.',
      ],
    },
    {
      type: 'tip',
      title: 'Consejo del Costurero',
      html: '<p>Si vas a usar una tela con un estampado grande o cuadros (plaids), no confíes únicamente en la medida estándar. Suma siempre una repetición completa del dibujo (el rapport) al total de metros calculado para garantizar que los patrones coincidan en las costuras laterales.</p>',
    },
    {
      type: 'title',
      text: 'Ventajas y Limitaciones de esta Calculadora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Cálculo instantáneo para múltiples anchos de tela con ajuste de talla.',
        'Incluye estimación de margen de costura personalizable.',
        'Guía visual de disposición de piezas en el paño.',
        'No sustituye a una disposición de patrones real (marcada). Las tallas Plus pueden requerir ajustes manuales adicionales.',
      ],
    },
    {
      type: 'card',
      title: 'Ancho de pieza',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'La medida transversal de la tela de <strong>orillo a orillo</strong>. Determina si las piezas del patrón caben en paralelo o deben colocarse en serie.',
    },
    {
      type: 'card',
      title: 'Margen de costura',
      icon: 'mdi:tape-measure',
      html: 'La distancia entre el borde del patrón y la <strong>línea de costura final</strong>. Un valor estándar es 1.5 cm para costuras de ropa.',
    },
    {
      type: 'card',
      title: 'Orillo',
      icon: 'mdi:content-cut',
      html: 'Los bordes laterales reforzados de la tela que <strong>no se deshilachan</strong>. Indican la dirección del hilo y sirven como referencia para el corte.',
    },
  ],
  ui: {
    sectionProject: 'Proyecto',
    sectionMaterial: 'Material',
    labelGarmentType: 'Tipo de prenda',
    labelSize: 'Talla',
    labelFabricWidth: 'Ancho de tela (cm)',
    labelSeamAllowance: 'Margen de costura (cm)',
    garmentSkirt: 'Falda (Recta/Aline)',
    garmentPants: 'Pantalón',
    garmentDress: 'Vestido',
    garmentShirt: 'Camisa / Blusa',
    garmentCoat: 'Abrigo / Chaqueta',
    garmentTote: 'Tote Bag',
    garmentMerceria: {
      skirt: '1 crem. 20cm, 1 botón',
      pants: '1 crem. 20cm, 1 botón, 30cm entretela',
      dress: '1 crem. 60cm, 50cm entretela',
      shirt: '7 botones, 1m entretela fina',
      coat: '3 botones grandes, 1.5m entretela, forro',
      tote: '2m cinta para asas',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Estrecha)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (Estándar EU)',
    width150: '150 cm (Tapicería)',
    btnClear: 'Limpiar',
    btnShare: 'Compartir',
    btnCopied: '¡Copiado!',
    btnCopyList: 'Copiar lista',
    resultLabel: 'Necesitas:',
    resultUnit: 'Metros',
    shopAdviceFormat: 'Pide {m}m en la tienda',
    boardEmpty: 'Selecciona un proyecto para ver la disposición',
    boardDescFormat: 'Ancho: {w}cm | Largo: {m}m',
    merchTitle: 'Mercería y Materiales',
    checklistThread: 'Hilo a juego',
    warningSerialFormat: 'En telas de {w}cm las piezas de tu talla no caben en paralelo. Consumo ajustado para corte en serie.',
    foldLabel: '⊟ doblez',
    pieceNames: {
      front: 'Delantero',
      back: 'Espalda',
      waistband: 'Cinturilla',
      waistbelt: 'Pretina',
      sleeve: 'Manga',
      collar: 'Cuello',
      cuffs: 'Puños',
      facings: 'Vistas',
      lapels: 'Tapetas',
      pocket: 'Bolsillo',
      body: 'Cuerpo',
      handleA: 'Asa A',
      handleB: 'Asa B',
    },
  },
};
