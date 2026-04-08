import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'conversor-tallas-ropa';
const title = 'Conversor de Tallas de Ropa Internacional';
const description =
  'Convierte tallas de ropa entre sistemas EU, US, UK e IT. Camisetas, pantalones, vestidos y chaquetas para hombre, mujer y unisex. Incluye guía de medidas y recomendador por marca.';

const faqData = [
  {
    question: '¿Cuál es la diferencia entre talla EU y talla US en ropa?',
    answer:
      'Las tallas europeas (EU) usan números progresivos (XS, S, M, L o 32, 34, 36, 38) mientras que las estadounidenses (US) usan letras o números específicos para pantalones. En general, una talla 36 EU equivale a un 4 US en ropa de mujer.',
  },
  {
    question: '¿Cambian las tallas si es ropa de hombre o mujer?',
    answer:
      'Sí, absolutamente. Incluso en el mismo país, una talla 40 para hombre no es la misma que una 40 para mujer. Los hombres tienen proporciones diferentes (hombros más anchos), así que el cálculo de talla varía.',
  },
  {
    question: '¿Cómo sé si debo subir o bajar una talla en una marca?',
    answer:
      'La mejor forma es revisar las reseñas de otros clientes. Frases como "me quedó pequeño" o "talla grande" son muy útiles. También consulta la tabla específica de medidas de esa marca.',
  },
  {
    question: '¿Es exacta la tabla de conversión de tallas?',
    answer:
      'La tabla de conversión es una guía. Aunque generalmente es precisa, cada marca tiene sus propias especificaciones. Siempre verifica la tabla de tallas de la tienda específica antes de comprar.',
  },
  {
    question: '¿Encogen las prendas después de lavar?',
    answer:
      'Depende del material. El algodón 100% puede encoger un 5-10% si se lava a agua caliente y se seca en secadora. Los materiales sintéticos mantienen mejor su forma. Revisa siempre las instrucciones de lavado.',
  },
];

const howToData = [
  {
    name: 'Selecciona Prenda y Género',
    text: 'Elige el tipo de ropa (camiseta, pantalón, vestido, chaqueta) y el género correspondiente.',
  },
  {
    name: 'Elige Tu Sistema de Talla',
    text: 'Selecciona el sistema que conoces: EU, US, UK o IT.',
  },
  {
    name: 'Selecciona Tu Talla',
    text: 'Elige tu talla en el selector o haz clic en la cuadrícula. Verás las equivalencias al instante.',
  },
  {
    name: 'Consulta la Guía de Marcas',
    text: 'Revisa si esa marca talla pequeño, regular o grande para ajustar tu compra.',
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
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    { name: 'ISO 3635: Clothing Sizes - Official Standard', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Clothing Size Standards - Wikipedia', url: 'https://en.wikipedia.org/wiki/Clothing_size' },
    {
      name: 'International Clothing Size Conversion - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Conversor de Tallas de Ropa: Guía Completa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Comprar ropa en tiendas internacionales puede ser confuso cuando las tallas no coinciden. El <strong>conversor de tallas de ropa</strong> te ayuda a encontrar tu talla perfecta en sistemas EU, US, UK e IT, para camisetas, pantalones, vestidos y chaquetas.',
    },
    {
      type: 'title',
      text: '¿Por qué las tallas de ropa varían entre países?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No existe un estándar internacional único. Cada región desarrolló su propio sistema, lo que genera confusión al comprar en tiendas extranjeras o en plataformas como Amazon o AliExpress.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Tallas EU (Europa):</strong> Usan números progresivos (XS, S, M, L o 32, 34, 36...). Es el sistema más común en España e Italia.</span>',
        '<span><strong>Tallas US (Estados Unidos):</strong> Usan letras (XS, S, M, L) o números para pantalones de mujer (0, 2, 4, 6).</span>',
        '<span><strong>Tallas UK (Reino Unido):</strong> Similar al sistema EU pero con numeración propia, generalmente inferior a la US.</span>',
        '<span><strong>Tallas IT (Italia):</strong> Numeración italiana con variaciones respecto al sistema EU general.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Consejo Profesional',
      html: 'Las tallas varían significativamente entre marcas. Una talla 38 en Zara puede ser diferente a una 38 en H&amp;M. Consulta siempre la tabla de tallas específica de la tienda antes de comprar.',
    },
    {
      type: 'title',
      text: 'Cómo medir tu cuerpo correctamente',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para garantizar una talla correcta, mide tu cuerpo con una cinta métrica flexible. Mide al final del día, cuando el cuerpo está en su máxima expansión.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Pecho:</strong> Mide alrededor de la parte más ancha del pecho, pasando la cinta por debajo de los brazos.</span>',
        '<span><strong>Cintura:</strong> Mide a la altura del ombligo sin apretar el abdomen artificialmente.</span>',
        '<span><strong>Cadera:</strong> Mide alrededor de la parte más ancha de las caderas, con la cinta paralela al suelo.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Guía de ajuste por marca',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Tallas regulares. Una 36 en Zara suele ser confiable para medidas estándar.</span>',
        '<span><strong>H&amp;M:</strong> Tiende a tallar grande. Considera bajar una talla respecto a tu habitual.</span>',
        '<span><strong>Uniqlo:</strong> Talla pequeño, especialmente en básicos. Se recomienda subir una talla.</span>',
        '<span><strong>Nike / Adidas:</strong> Cortes ajustados para actividad física. Valora subir media talla.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Tipo de Prenda',
    categoryShirts: 'Camisetas',
    categoryPants: 'Pantalones',
    categoryDresses: 'Vestidos',
    categoryJackets: 'Chaquetas',
    genderLabel: 'Género',
    genderMen: 'Hombre',
    genderWomen: 'Mujer',
    genderUnisex: 'Unisex',
    tabBySize: 'Por Talla',
    tabByMeasurements: 'Por Medidas',
    regionLabel: 'Tu Sistema de Talla',
    sizeLabel: 'Selecciona tu Talla',
    regionEU: 'Europa (EU)',
    regionUS: 'Estados Unidos (US)',
    regionUK: 'Reino Unido (UK)',
    regionIT: 'Italia (IT)',
    labelEU: 'Europa',
    labelUS: 'Estados Unidos',
    labelUK: 'Reino Unido',
    labelIT: 'Italia',
    quickGridTitle: 'Equivalencias Rápidas (EU)',
    tableTitle: 'Tabla de Conversión Completa',
    measurementsTitle: 'Ingresa tus Medidas',
    chestLabel: 'Pecho (cm)',
    waistLabel: 'Cintura (cm)',
    hipLabel: 'Cadera (cm)',
    chestPlaceholder: 'Ej: 95',
    waistPlaceholder: 'Ej: 85',
    hipPlaceholder: 'Ej: 95',
    recommendBtnLabel: 'Recomendar Talla',
    tipsTitle: 'Tips de Medición',
    tipOverClothes: 'Sobre la ropa',
    tipStraight: 'Recta y paralela',
    tipNoTight: 'Sin apretar',
    tipEndOfDay: 'Al final del día',
    recommendationTitle: 'Talla Recomendada',
    recommendedSizePrefix: 'Te recomendamos la talla:',
    measuredBy: 'Basado en tus medidas:',
    chestShort: 'Pecho',
    waistShort: 'Cintura',
    hipShort: 'Cadera',
    recommendationError: 'Por favor completa todas las medidas para obtener una recomendación.',
    recommendationNoData: 'No hay datos disponibles para esta categoría.',
    fitGuideTitle: 'Guía de Ajuste por Marca',
    fitSmall: 'Talla Pequeña',
    fitRegular: 'Talla Regular',
    fitLarge: 'Talla Grande',
    fitInfoDefault: 'Haz clic en una marca para obtener recomendaciones específicas.',
    fitNotif1: ' suele tallar ',
    fitNotifSmall: 'pequeño',
    fitNotifRegular: 'regular',
    fitNotifLarge: 'grande',
    fitNotif2: 'Considera',
    fitNotif3: 'si es tu primera vez comprando en esta marca.',
    fitAdviceSmall: 'subir una talla',
    fitAdviceRegular: 'mantener tu talla habitual',
    fitAdviceLarge: 'bajar una talla',
    fitSelectedSuffix: 'seleccionada. Selecciona otra marca para comparar.',
    infoBannerTitle: 'Pro Tip:',
    infoBannerText:
      'Las tallas de ropa varían significativamente entre marcas. Siempre revisa la tabla específica de la tienda antes de comprar.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
