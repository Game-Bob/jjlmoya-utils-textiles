import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'calculadora-gauge-tension-punto';
const title = 'Calculadora de Gauge y Tensión de Tejido';
const description =
  'Recalcula fácilmente los puntos y vueltas de cualquier patrón de punto o ganchillo. Ajusta el gauge por múltiplos y factor de escala para un resultado profesional.';

const faqData = [
  {
    question: '¿Qué es la tensión o gauge en tejido?',
    answer:
      'Es la medida de cuántos puntos y vueltas caben en un área determinada (usualmente 10x10 cm). Es fundamental porque determina el tamaño final de la prenda según la aguja y el hilo utilizado.',
  },
  {
    question: '¿Cómo afecta el cambio de gauge al tamaño?',
    answer:
      'Si tu tensión tiene más puntos por centímetro que el patrón, la prenda será más pequeña. Si tiene menos puntos, la prenda será más grande. Por eso es vital recalcular los puntos o cambiar de agujas.',
  },
  {
    question: '¿Por qué es importante el ajuste por múltiplos?',
    answer:
      'Muchos patrones tienen motivos (calados, trenzas, dibujos) que requieren un número específico de puntos para completarse. Nuestra calculadora ajusta el total al múltiplo más cercano para no romper el diseño.',
  },
  {
    question: '¿Debo lavar la muestra antes de medir?',
    answer:
      'Sí, siempre. El "bloqueo" (lavar y dar forma) relaja las fibras y muestra la tensión real que tendrá la prenda después de su primer uso y lavado.',
  },
];

const howToData = [
  {
    name: 'Identificar la tensión del patrón',
    text: 'Busca en las instrucciones del patrón cuántos puntos y vueltas indican para una muestra de 10x10 cm o 4x4 pulgadas.',
  },
  {
    name: 'Tejer y medir tu propia muestra',
    text: 'Teje una muestra con tu hilo y agujas, bloqueala y mide cuántos puntos y vueltas tienes tú en ese mismo área.',
  },
  {
    name: 'Configurar el calculador',
    text: 'Introduce los datos de la muestra del patrón y los de tu muestra real. Añade el total de puntos de tu talla y los múltiplos del motivo si los hay.',
  },
  {
    name: 'Obtener resultados',
    text: 'Revisa el nuevo número de puntos a montar y el factor de escala para saber si necesitas ajustar también el largo de la prenda.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Gauge y Tensión de Tejido Online: Guía Técnica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si alguna vez has terminado un jersey que parecía diseñado para un gigante o un gorrito que apenas cubría la coronilla, ya conoces la importancia del <strong>gauge o tensión</strong>. En el mundo del punto y el ganchillo, la tensión es la relación entre el grosor del hilo, el tamaño de las agujas y la fuerza con la que cada tejedor manipula la hebra. No hay dos tejedores iguales, y por eso, no hay dos tensiones idénticas.',
    },
    {
      type: 'title',
      text: '¿Por qué es vital la Tensión o Gauge en el Tejido?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora de gauge para tejido es una herramienta técnica diseñada para eliminar las conjeturas matemáticas y permitir que te centres en la creatividad. Al introducir los datos de la muestra del patrón y los de tu propia muestra, obtendrás ajustes precisos de puntos y vueltas, asegurando que tu prenda final tenga exactamente las medidas que esperas.',
    },
    {
      type: 'title',
      text: 'Cómo usar la calculadora de tensión de punto',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Teje una muestra:</strong> No te limites a 10x10 cm. Teje al menos 15x15 cm para que los bordes no falseen la medida central.',
        '<strong>Bloquea tu muestra:</strong> Lava y seca la muestra tal como lo harías con la prenda terminada. Muchas fibras de lana se expanden o crecen al mojarse.',
        '<strong>Mide con precisión:</strong> Utiliza una regla rígida o un calibre de 10 cm. Cuenta cuántos puntos entran horizontalmente y cuántas vueltas verticalmente.',
        '<strong>Introduce los datos:</strong> Coloca los valores del patrón en la columna izquierda y tus valores reales en la derecha. La herramienta recalculará automáticamente cuántos puntos necesitas para alcanzar el ancho deseado.',
      ],
    },
    {
      type: 'title',
      text: 'Interpretación de los Resultados: El Factor de Escala',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El factor de escala es el multiplicador que aplicamos a cada instrucción del patrón. Si tu tensión es de 22 puntos y el patrón pide 20, tu factor de escala es de 1.1. Esto significa que para obtener el mismo ancho físico, necesitas un 10% más de puntos. Una desviación de 0-2% es ideal, de 2-10% es moderada, de 10-25% requiere recálculo obligatorio, y más del 25% supone un riesgo estructural.',
    },
    {
      type: 'title',
      text: 'Tratamiento de Múltiplos y Motivos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uno de los mayores retos al recalcular un patrón es mantener la integridad de los calados, trenzas o motivos. Si el diseño se repite cada 8 puntos, no puedes simplemente añadir 3 puntos adicionales; debes ajustar el total para que siga siendo múltiplo de 8. La función de <strong>ajuste por múltiplos</strong> de esta calculadora sugiere el número de puntos más cercano que respeta la arquitectura del diseño.',
    },
    {
      type: 'tip',
      title: 'Consejo para Expertos',
      html: '<p>Suele ser preferible usar esta calculadora y trabajar con la tensión natural de tu hilo, adaptando el número de puntos en lugar de forzar la tensión cambiando radicalmente el tamaño de las agujas, ya que esto último puede alterar la caída y la suavidad del tejido.</p>',
    },
    {
      type: 'title',
      text: 'Ventajas de usar nuestra herramienta de ajuste',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ajuste automático de puntos y vueltas con factor de escala preciso.',
        'Soporte para múltiplos complejos (X + Y) para mantener la integridad del motivo.',
        'Estimación de gramos de lana necesarios para el proyecto completo.',
        'Visualizador dinámico del swatch que muestra la densidad del tejido en tiempo real.',
      ],
    },
    {
      type: 'card',
      title: 'Gauge / Tensión',
      icon: 'mdi:ruler',
      html: 'Número de puntos y vueltas contenidos en un cuadrado de <strong>10x10 cm</strong> o <strong>4x4 pulgadas</strong>. Es la referencia universal de todos los patrones de tejido.',
    },
    {
      type: 'card',
      title: 'Bloqueo',
      icon: 'mdi:water',
      html: 'Proceso de humedecer y dar forma a la prenda para asentar los puntos. Revela la <strong>tensión real</strong> que tendrá la prenda después de su primer uso y lavado.',
    },
    {
      type: 'card',
      title: 'Factor de Escala',
      icon: 'mdi:scale',
      html: 'Proporción matemática entre la muestra del patrón y la muestra real del tejedor. Determina cuántos puntos y vueltas ajustar para mantener las <strong>medidas correctas</strong>.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Tensión Original',
    sectionMyGauge: 'Tu Muestra Actual',
    sectionProject: 'Estructura del Proyecto',
    labelStitches: 'Puntos',
    labelRows: 'Vueltas',
    labelWidth: 'Ancho',
    labelLength: 'Largo',
    labelUnit: 'Unidad de Medida',
    labelNeedle: 'Aguja',
    labelNeedleMm: 'Aguja (mm)',
    labelWeight: 'Peso (g)',
    labelWeightOptional: 'opcional',
    labelPatternSts: 'Puntos Patrón',
    labelPatternRows: 'Vueltas Patrón',
    labelMultiples: 'Múltiplos',
    labelMultiplesExample: 'Ej: 10 + 2',
    labelMultiplesPlaceholder: 'Múltiplo + Borde',
    unitEU: '10 x 10 cm (Estándar EU)',
    unitUS: '4 x 4 pulgadas (Estándar US)',
    btnClear: 'Limpiar',
    btnShare: 'Compartir',
    btnCopied: '¡Copiado!',
    resSuggestedSts: 'Puntos sugeridos a montar',
    resNewRows: 'Nuevas Vueltas',
    resNewRowsTooltip: 'Número de vueltas necesarias para igualar el largo del patrón original con tu tensión actual.',
    resScaleFactor: 'Factor Escala',
    resScaleFactorTooltip: 'Relación de tamaño entre tu tejido y el patrón. Un valor negativo indica que tu tejido es más denso.',
    resSuggestion: 'Sugerencia',
    resSuggestionTooltip: 'Recomendación técnica para ajustar tu tensión sin tener que recalcular cada punto del patrón.',
    suggestionIdeal: 'Ideal',
    suggestionDown: 'Baja Aguja',
    suggestionUp: 'Sube Aguja',
    suggestionDownDetail: 'Usa aguja {n}mm o talla inferior.',
    suggestionUpDetail: 'Usa aguja {n}mm o talla superior.',
    multiplesNoteFormat: 'Ajustado de {n} puntos (Múlt. {m})',
    yarnTitle: 'Estimación de Lana para el Proyecto',
    yarnResultFormat: 'Lana estimada: <strong>{g}g</strong>',
    yarnSafetyFormat: '(+{s}g de seguridad)',
    alertDanger: 'Diferencia extrema (>25%). La caída y estructura de la prenda se verán alteradas.',
  },
};
