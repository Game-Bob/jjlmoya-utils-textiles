import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'conversor-agujas-punto';
const title = 'Conversor de Agujas de Punto y Ganchillo';
const description =
  'Convierte tamaños de agujas entre sistemas Métrico (mm), US y UK con recomendación de hilos y WPI.';

const faqData = [
  {
    question: '¿Por qué hay diferentes sistemas de tallas de agujas?',
    answer:
      'Históricamente, cada país desarrolló su propio sistema. El sistema métrico (mm) es el estándar internacional más preciso. El sistema US usa numeración progresiva (0-50), mientras que el sistema UK usa numeración inversa: cuanto más alto el número, más fina es la aguja.',
  },
  {
    question: '¿Son iguales las tallas de ganchillo y punto en US?',
    answer:
      'No exactamente. Los ganchillos en US suelen llevar una letra asociada (ej. H-8) y existen variaciones específicas en grosores pequeños. Además, los ganchillos de acero para hilos finos usan una numeración totalmente distinta.',
  },
  {
    question: '¿Qué aguja debo elegir si mi patrón usa una medida sin equivalente exacto?',
    answer:
      'Si un patrón pide una medida como 7.0mm y tu sistema solo llega de 6.5mm a 8.0mm, se recomienda hacer siempre una muestra de tensión (gauge). La diferencia de 0.5mm puede alterar significativamente el tamaño final de la prenda.',
  },
  {
    question: '¿Qué es el WPI (Wraps Per Inch)?',
    answer:
      'Es el número de vueltas de hilo que caben en una pulgada. Es el método más fiable para identificar el grosor de una lana sin etiqueta y determinar qué aguja es la más adecuada para tejerla.',
  },
];

const howToData = [
  {
    name: 'Selecciona el tipo de labor',
    text: 'Elige entre punto (knitting) o ganchillo (crochet) para ver las equivalencias correctas en el sistema US.',
  },
  {
    name: 'Elige el calibre en el selector visual',
    text: 'Pulsa sobre el círculo que corresponde al tamaño de tu aguja. Los orificios guardan proporción matemática real con el milimetraje.',
  },
  {
    name: 'Lee las equivalencias',
    text: 'Consulta los resultados en tiempo real: milímetros, talla US y talla UK, junto con la categoría de hilo recomendada y su WPI.',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guía Técnica de Agujas de Punto y Ganchillo: Sistemas, Calibres y Equivalencias',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La globalización de los patrones digitales ha hecho imprescindible entender las diferencias entre el <strong>sistema métrico decimal</strong>, el <strong>estándar de Estados Unidos (US)</strong> y el <strong>sistema imperial del Reino Unido (UK)</strong>. Esta herramienta convierte entre los tres sistemas y ofrece recomendación de hilo mediante el método WPI.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Funciona sin Red', icon: 'mdi:wifi-off' },
        { value: 'Triple', label: 'Sincronización Total', icon: 'mdi:sync' },
        { value: 'WPI', label: 'Análisis de Hilo', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'La Complejidad de los Sistemas Internacionales',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sistema', 'Base de Cálculo', 'Región Predominante', 'Características Técnicas'],
      rows: [
        ['<strong>Métrico (mm)</strong>', 'Diámetro exacto en mm', 'Europa / Internacional', 'El estándar ISO más fiable. Incrementos constantes de 0.25mm o 0.50mm.'],
        ['<strong>US (EE.UU.)</strong>', 'Numeración Progresiva', 'Norteamérica', 'Usa números del 0 al 50. En ganchillo, los números se asocian a letras (B-1, G-6).'],
        ['<strong>UK (Imperial)</strong>', 'Numeración Inversa', 'Reino Unido / Australia', 'Basado en el calibre de trefilado. A mayor número, más fina es la aguja (14 es fino, 0 es grueso).'],
      ],
    },
    {
      type: 'title',
      text: 'Identificación de Hilos mediante el Método WPI',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / Encaje (18-22+ WPI):</strong> Hilos ultrafinos para encajes de seda o mohair. Agujas de 1.5mm a 2.5mm.',
        '<strong>Fingering / Baby (14-16 WPI):</strong> El estándar para calcetines y ropa de bebé. Agujas óptimas de 2.75mm a 3.25mm.',
        '<strong>Sport / Fine (12-14 WPI):</strong> Hilo de grosor medio-bajo, ideal para chaquetas ligeras. Agujas de 3.5mm a 3.75mm.',
        '<strong>DK / Light Worsted (11-13 WPI):</strong> El grosor más versátil del mercado. Agujas de 4.0mm o 4.5mm.',
        '<strong>Worsted / Aran (9-10 WPI):</strong> Hilo grueso para jerséis de invierno. Agujas de 5.0mm a 5.5mm.',
        '<strong>Bulky / Chunky (7-8 WPI):</strong> Lanas de gran calibre para proyectos rápidos. Agujas de 6.0mm a 8.0mm.',
        '<strong>Super Bulky (5-6 WPI):</strong> Fibras gigantes para decoración o bufandas. Agujas de 9.0mm a 15.0mm.',
      ],
    },
    {
      type: 'tip',
      title: 'Técnica Profesional: El Ganchillo de Acero',
      html: '<p>Existe una familia de agujas para hilos de algodón mercerizado extremadamente finos. Son los <strong>Steel Hooks (Ganchillos de Acero)</strong>. Su numeración es específica e inversa: un ganchillo de acero #14 (0.6mm) es mucho más fino que uno de #00 (3.5mm). Nunca uses la tabla estándar para estos calibres.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Checklist para acertar con el calibre',
      icon: 'mdi:check-circle-outline',
      badge: 'Validación Técnica',
      html: '<p>Sigue estos pasos antes de iniciar un proyecto de larga duración:</p><ul><li><strong>Tensión Personal:</strong> Si eres tejedora apretada, sube 0.5mm. Si eres floja, baja 0.5mm.</li><li><strong>Material de Aguja:</strong> Bambú para hilos resbaladizos; Metal para lanas rugosas.</li><li><strong>Tipo de Fibra:</strong> El algodón no cede; la lana merino se expande con el bloqueo.</li><li><strong>Muestra de Tensión:</strong> Teje un cuadrado de 10x10cm y lávalo antes de medir el calibre final.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'El sistema Métrico es universal y evita errores de redondeo entre fabricantes.',
          con: 'Muchos patrones antiguos e históricos no incluyen medidas en milímetros.',
        },
        {
          pro: 'El sistema US facilita la memorización de tallas estándar para patrones americanos.',
          con: 'Las letras en ganchillo no siempre son consistentes entre marcas.',
        },
        {
          pro: 'El sistema WPI permite reciclar hilos sin etiqueta de forma técnica y profesional.',
          con: 'Requiere una medición manual muy meticulosa para no falsear el resultado.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'Cuadrado de muestra (10x10cm) tejido antes de iniciar el proyecto para validar el calibre real.' },
        { term: 'Hook Throat', definition: 'La garganta del ganchillo. Su profundidad determina cuánta carga de hilo puede manejar la aguja.' },
        { term: 'Block Testing', definition: 'Proceso de humedecer y estirar el tejido para que las fibras se relajen y revelen su tamaño final verdadero.' },
      ],
    },
    {
      type: 'summary',
      title: 'Factores Críticos para el Éxito de tu Proyecto Textil',
      items: [
        'La aguja correcta dictará no solo el tamaño, sino la durabilidad de la prenda contra el rozamiento.',
        'Usa nuestro conversor para validar patrones de revistas americanas o inglesas en segundos.',
        'Si no encuentras el equivalente exacto, opta por el calibre superior o inferior basándote en tu muestra de tensión.',
        'El ganchillo consume aprox. un 30% más de hilo que el punto con la misma aguja.',
        'Limpia tus agujas de metal regularmente para mantener la velocidad de deslizamiento óptima.',
      ],
    },
  ],
  ui: {
    labelSystem: 'SISTEMA DE TRABAJO',
    modeKnitting: 'Punto',
    modeCrochet: 'Ganchillo',
    calibratorLabel: 'CALIBRADOR DE PRECISIÓN (ESCALA REAL)',
    calibratorDesc: 'Selecciona un diámetro para ver las equivalencias en tiempo real. Los orificios guardan una proporción matemática real respecto al milimetraje.',
    tagMetric: 'Métrico (mm)',
    tagUS: 'Sistema US',
    tagUK: 'Sistema UK',
    yarnLabel: 'GROSOR DE HILO IDEAL',
    wpiFormat: '{wpi} WPI (Vuelta por pulgada)',
    tableSectionLabel: 'CATÁLOGO TÉCNICO DE EQUIVALENCIAS',
    tableMetric: 'MÉTRICO',
    tableUS: 'US SIZE',
    tableUK: 'UK / IMPERIAL',
    tableYarn: 'CATEGORÍA HILO',
  },
};
