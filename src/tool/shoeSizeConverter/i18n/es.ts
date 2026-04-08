import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'conversor-tallas-zapatos';
const title = 'Conversor de Tallas de Zapatos';
const description =
  'Convierte tallas de zapatos entre sistemas de Estados Unidos (US), Europa (EU), Reino Unido (UK) y centímetros (CM). Guía de calzado para hombre y mujer.';

const faqData = [
  {
    question: '¿Cómo saber mi talla de zapatos en Estados Unidos (US)?',
    answer:
      'Para hombres, la talla US suele ser una unidad mayor que la UK. Para mujeres, la escala es diferente. La forma más precisa es medir tu pie en centímetros y usar nuestro conversor para obtener tu número US exacto.',
  },
  {
    question: '¿Qué diferencia hay entre la talla UK y la talla US de calzado?',
    answer:
      'Aunque ambas usan el sistema imperial, sus puntos de partida difieren. Generalmente, una talla 8 UK equivale a una talla 9 US en calzado masculino.',
  },
  {
    question: '¿Cómo medir mi pie para saber la talla CM?',
    answer:
      'Coloca el talón contra una pared, marca dónde termina tu dedo más largo y mide la distancia. Esa medida en centímetros (CM) es la más fiable para comprar zapatillas de marcas internacionales.',
  },
];

const howToData = [
  {
    name: 'Elige Género',
    text: 'Selecciona si buscas tallas para hombre o mujer, ya que las escalas varían.',
  },
  {
    name: 'Selecciona Región',
    text: 'Indica el sistema de tallas que conoces (EU, US, UK o CM).',
  },
  {
    name: 'Elige tu Número',
    text: 'Usa el selector o haz clic directamente en la cuadrícula de tallas europeas.',
  },
  {
    name: 'Ver Equivalencias',
    text: 'Obtén instantáneamente el número correspondiente en el resto de regiones del mundo.',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
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
      text: 'Conversor de Tallas de Zapatos: Guía Internacional Completa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Comprar calzado en tiendas internacionales puede ser un desafío logístico. El <strong>conversor de tallas de zapatos</strong> es una herramienta esencial para evitar devoluciones innecesarias y asegurar que cada compra, ya sea en Amazon, AliExpress o una tienda de deporte especializada, sea un éxito.',
    },
    {
      type: 'title',
      text: '¿Cómo funcionan las equivalencias de tallas de calzado?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El mundo del calzado no está unificado. Históricamente, cada región desarrolló su propio sistema basado en unidades de medida locales como pulgadas o el "punto de París".',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Tallas EU (Europa):</strong> Basadas en el "Punto de París", que equivale a 2/3 de centímetro. Es el sistema más común en España.</span>',
        '<span><strong>Tallas US (Estados Unidos):</strong> Utilizan pulgadas con un punto de partida diferente para hombres y mujeres.</span>',
        '<span><strong>Tallas UK (Reino Unido):</strong> También en sistema imperial, pero con escalas una unidad menor que las de EE. UU.</span>',
        '<span><strong>Talla CM / Mondopoint:</strong> La más precisa. Utiliza directamente la longitud del pie en centímetros.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Guía para medir tu pie y encontrar tu talla exacta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Antes de usar el conversor, es vital conocer la medida real de tu pie. Para los zapatos, la medida fundamental es el largo del pie desde el talón hasta el dedo más largo.',
    },
    {
      type: 'tip',
      title: 'Consejo Profesional',
      html: 'Mide tus pies al final del día. Los pies tienden a hincharse con la actividad y el calor, por lo que una medida matutina podría resultar en zapatos que te aprieten por la tarde.',
    },
    {
      type: 'title',
      text: 'Por qué las tallas varían entre marcas de zapatillas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '¿Por qué eres una 42 en Nike pero una 41 1/3 en Adidas? Las marcas utilizan sus propias "hormas". Algunas marcas deportivas tienden a tallar pequeño, lo que obliga a comprar medio número más de lo habitual.',
    },
  ],
  ui: {
    genderMenTitle: 'Calzado de Hombre',
    genderWomenTitle: 'Calzado de Mujer',
    regionLabel: 'Tu Sistema de Talla',
    regionEU: 'Europa (EU)',
    regionUS: 'Estados Unidos (US)',
    regionUK: 'Reino Unido (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Selecciona tu Talla',
    gridDesc: 'Haz clic para ver las equivalencias internacionales',
    labelEU: 'Europa (EU)',
    labelUS: 'EE. UU. (US)',
    labelUK: 'Reino Unido (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: 'La talla <strong>CM</strong> representa la longitud física del pie. Es el método más fiable para comprar zapatillas de marcas internacionales.',
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
