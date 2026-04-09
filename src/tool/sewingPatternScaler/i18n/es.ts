import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'escalador-patron-costura';
const title = 'Escalador de Patrones de Costura Online';
const description =
  'Ajusta cualquier patrón de costura a tus medidas reales. Calculadora de escalado diferencial con previsualización del patrón actualizado.';

const faqData = [
  {
    question: '¿Por qué no crece el hombro igual que el pecho?',
    answer:
      'El cuerpo humano no es una esfera. Mientras que el volumen del torso puede variar significativamente, el esqueleto y los puntos de articulación como el hombro son mucho más estáticos. Un escalado profesional aplica factores diferenciados para no desequilibrar la prenda.',
  },
  {
    question: '¿Qué es la "holgura" o "ease"?',
    answer:
      'Es el espacio extra entre tu cuerpo y la tela. Sin holgura, no podrías moverte. Nuestra calculadora mantiene esta holgura para que la prenda te quede tal y como el diseñador la concibió, pero adaptada a tus contornos reales.',
  },
  {
    question: '¿Puedo escalar un patrón de punto o jersey?',
    answer:
      'Sí, pero ten en cuenta que las telas elásticas suelen tener holgura negativa. Si el patrón es muy ajustado, asegúrate de que el factor de elasticidad sea el mismo en la nueva tela que elijas.',
  },
];

const howToData = [
  {
    name: 'Mide tu patrón',
    text: 'Mide las líneas horizontales clave (pecho, cintura y cadera) en las piezas de papel de tu patrón original, de costura a costura.',
  },
  {
    name: 'Configura el origen',
    text: 'Introduce la talla del patrón o las medidas que has tomado en la columna de "Origen" de nuestra herramienta.',
  },
  {
    name: 'Introduce destino',
    text: 'Pon tus medidas reales o la talla a la que quieres llegar. La herramienta calculará la diferencia exacta por zona.',
  },
  {
    name: 'Aplica en mesa',
    text: 'Sigue las instrucciones de "Acciones en Mesa de Corte" para añadir o quitar centímetros en los laterales y bajos de tus piezas.',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'Patronaje: Las Bases - Teresa Gilewska',
      url: 'https://www.scribd.com/document/696165843/patronaje-las-bases-by-teresa-gilewska',
    },
    {
      name: 'Metric Pattern Cutting for Women\'s Wear - Winifred Aldrich',
      url: 'https://download.e-bookshelf.de/download/0000/5989/88/L-G-0000598988-0002339537.pdf',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cómo Escalar Patrones de Costura: Guía Técnica y Práctica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El <strong>escalado de patrones</strong> es una de las habilidades más críticas en el mundo de la confección. No se trata simplemente de agrandar o reducir un dibujo de forma proporcional; se trata de adaptar una estructura bidimensional a las complejas curvas y proporciones del cuerpo humano, que no crece de forma lineal.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Cálculos Locales', icon: 'mdi:calculator' },
        { value: 'Diferencial', label: 'Escalado Proporcional', icon: 'mdi:resize' },
        { value: '100%', label: 'Seguro y Privado', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '¿Qué es exactamente el escalado de patrones?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El escalado (o <em>grading</em> en inglés) es el proceso técnico de aumentar o disminuir el tamaño de un patrón base para crear una serie de tallas diferentes. A diferencia de un simple zoom, el escalado tiene en cuenta que ciertas partes del cuerpo crecen más que otras. Por ejemplo, el contorno de pecho suele variar más entre tallas que el ancho de hombro o el largo de talle.',
    },
    {
      type: 'title',
      text: 'El Secreto del Éxito: La Holgura (Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Holgura de movimiento:</strong> Los centímetros extra necesarios para que puedas respirar, sentarte y mover los brazos sin que la tela se rompa.',
        '<strong>Holgura de diseño:</strong> Los centímetros que el diseñador ha añadido para crear una silueta específica (por ejemplo, un abrigo oversize o una blusa vaporosa).',
      ],
    },
    {
      type: 'title',
      text: 'Escalado Horizontal vs. Vertical',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Eje Horizontal (Contornos):</strong> Pecho, Cintura, Cadera. Requiere mayor ajuste. Se divide en cuartos para cada pieza del patrón.',
        '<strong>Eje Vertical (Largos):</strong> Talle delantero, Talle espalda, Largo total. Afecta a la posición de pinzas y línea de cintura. Menor variación entre tallas contiguas.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo usar el Escalador de Patrones',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Mide tu patrón:</strong> Coge la pieza de papel y mide de borde a borde en las líneas de pecho, cintura y cadera.',
        '<strong>Introduce las medidas origen:</strong> Escribe esas medidas en la columna izquierda e indica qué talla representa ese patrón.',
        '<strong>Introduce tus medidas o talla destino:</strong> En la columna derecha, pon tus medidas reales o la talla a la que quieres llegar.',
        '<strong>Interpreta los resultados:</strong> La calculadora te mostrará cuánto debes añadir o quitar en cada zona específica.',
      ],
    },
    {
      type: 'tip',
      title: 'Consejo para un Escalado Profesional',
      html: '<p><strong>No escales más de dos o tres tallas:</strong> Si intentas pasar de una talla 36 a una 52, es muy probable que la sisa se deforme y el cuello quede enorme. En esos casos, es mejor redibujar el patrón base usando tus medidas desde cero.</p>',
    },
    {
      type: 'title',
      text: 'Ventajas del escalado digital',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Mantiene la proporción exacta del diseño original.',
          con: 'Las sisas pueden requerir un ligero suavizado manual.',
        },
        {
          pro: 'Cálculo instantáneo de la holgura necesaria.',
          con: 'No detecta automáticamente si el patrón ya incluye costura.',
        },
        {
          pro: 'Visualización gráfica del crecimiento de la pieza.',
          con: 'Requiere una toma de medidas inicial muy precisa.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diferencial', definition: 'Diferencia de medida entre dos tallas consecutivas.' },
        { term: 'Puntos de Anclaje', definition: 'Zonas del patrón que no se mueven (normalmente el centro del delantero/espalda).' },
        { term: 'Nido de Escalado', definition: 'Dibujo superpuesto de todas las tallas escaladas.' },
        { term: 'Patrón Base', definition: 'Plantilla sin diseño ni holgura que corresponde a las medidas del cuerpo.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'SISTEMA DE TRABAJO',
    modeStandard: 'Tallas Estándar',
    modeCustom: 'Medidas Reales',
    labelPatternSize: 'Talla Patrón',
    labelTargetSize: 'Talla Destino',
    labelOriginMeasures: 'MEDIDAS ORIGEN',
    labelTargetMeasures: 'TUS MEDIDAS',
    labelEase: 'Holgura Actual (Ease)',
    labelChest: 'Pecho',
    labelWaist: 'Cintura',
    labelHips: 'Cadera',
    labelLength: 'Largo',
    resBust: 'Busto',
    resWaist: 'Cintura',
    resHips: 'Cadera',
    resLength: 'Largo',
    actionLatAdd: 'Añade',
    actionLatRemove: 'Quita',
    actionLatSuffix: 'al lateral de la pieza',
    actionLatNote: 'Ajuste por cuarto de patrón',
    actionLenExtend: 'Alarga el patrón',
    actionLenShorten: 'Acorta el patrón',
    actionLenNote: 'Ajuste en la línea de bajo',
    legendOriginal: 'Original',
    legendUpdated: 'Actualizado',
    warnText: 'Escalado mayor a 3 tallas. Riesgo de deformación en sisa.',
    sizePrefix: 'Talla',
  },
};
