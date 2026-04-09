import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'veracidad-textil';
const title = 'Veracidad Textil: Análisis de Calidad de Fibras';
const description = 'Descubre la calidad real de tus prendas analizando su composición. ¿Es algodón real o plástico caro? Análisis científico de fibras.';

const faqData = [
  {
    question: '¿Qué es el "Greenwashing" en la moda?',
    answer: 'Es una técnica de marketing donde las marcas usan términos como "Ecológico" o "Sostenible" sin pruebas reales. Analizar la composición real de las fibras es la única forma de verificar si una prenda es realmente natural o sintética.',
  },
  {
    question: '¿Por qué el poliéster suele ser de menor calidad que el algodón?',
    answer: 'El poliéster es un plástico (PET). Aunque es duradero, no transpira, favorece el mal olor por bacterias y genera microplásticos en cada lavado. Las fibras naturales como el algodón o el lino ofrecen mejor regulación térmica.',
  },
  {
    question: '¿Es malo que mi ropa tenga elastano?',
    answer: 'En pequeñas cantidades (1-5%), el elastano (Lycra) aporta comodidad y ajuste. Sin embargo, dificulta enormemente el reciclaje de la prenda al mezclar plástico con fibras naturales, lo que suele indicar una prenda de "fast fashion".',
  },
  {
    question: '¿Cómo detectar una prenda de alta calidad por su etiqueta?',
    answer: 'Busca composiciones monomateriales (100% Algodón, 100% Lana). Las mezclas complejas suelen usarse para abaratar costes de producción y ocultan fibras sintéticas bajo nombres comerciales atractivos.',
  },
];

const howToData = [
  {
    name: 'Localizar la etiqueta interna',
    text: 'Busca la etiqueta blanca de composición que suele estar en el lateral interior o en el cuello de tu prenda.',
  },
  {
    name: 'Identificar los componentes',
    text: 'Lee los porcentajes de cada fibra (ej. 70% Algodón, 30% Poliéster).',
  },
  {
    name: 'Introducir los datos en el analizador',
    text: 'Escribe las proporciones de las fibras en nuestra herramienta para obtener una puntuación técnica de calidad.',
  },
  {
    name: 'Interpretar el diagnóstico',
    text: 'Revisa el informe generado para entender si tu prenda es transpirable, duradera o si requiere cuidados especiales por su composición sintética.',
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
  description: description,
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
  description: description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Veracidad Textil',
    addFiber: 'Añadir Fibra',
    total: 'Total',
    composition: 'Análisis de Composición',
    description: 'Añade los porcentajes tal cual aparecen en la etiqueta de tu prenda para descubrir la verdad sobre su calidad.',
    verdict: 'Veredicto',
    breathability: 'Transpirabilidad',
    durability: 'Durabilidad',
    warmth: 'Calidez',
    careWarning: 'Aviso de Cuidados Especiales',
    specialCareWarning: 'LAVADO ESTÁNDAR: Sigue siempre las instrucciones de la etiqueta física.',
    validationError: 'La composición debe sumar exactamente 100% para ver el veredicto',
    actualTotal: 'Actual',
    missingLabel: 'faltan',
    disclaimer: 'Los datos de transpirabilidad, durabilidad y calidez son estimaciones basadas en promedios de la industria para cada tipo de fibra.',
    careWarnings: {
      delicate: 'MUY DELICADO: Lavar a mano en frío. No usar secadora. Evitar escurrir con fuerza.',
      wool: 'LANAS / PELO NOBLE: Lavar en frío con programa especial. Secar en plano para evitar deformaciones. No usar secadora.',
      linen: 'LINO: Tiende a arrugarse mucho. Planchar ligeramente húmedo para mejores resultados.',
      semisynthetic: 'SEMISINTÉTICOS: Se debilita en mojado. Tratar con cuidado y no centrifugar fuerte.',
      standard: 'LAVADO ESTÁNDAR: Sigue siempre las instrucciones de la etiqueta física.',
    },
    fiberData: {
      cotton: {
        name: 'Algodón',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Lino',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Lana / Merino',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'Seda',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Cashmere',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: 'Mohair',
        family: 'natural',
        breathability: 8,
        durability: 9,
        warmth: 9,
        isNoble: true,
      },
      angora: {
        name: 'Angora',
        family: 'natural',
        breathability: 8,
        durability: 4,
        warmth: 10,
        isNoble: true,
      },
      alpaca: {
        name: 'Alpaca',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: 'Poliéster',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: 'Viscosa / Rayón',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'Nailon (Poliamida)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: 'Acrílico',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: 'Plástico Caro',
        description: 'La mayoría de esta prenda es petróleo. Prepárate para sudar y que aparezcan bolitas rápido.',
      },
      hook: {
        label: 'Gancho de Marketing',
        description: 'Ese pequeño porcentaje de fibra noble está ahí solo para ponerlo en la etiqueta. No notarás sus beneficios.',
      },
      fragile: {
        label: 'Suave pero Frágil',
        description: 'Muy agradable al tacto, pero cuidado al lavarla: tiende a deformarse y encoger con facilidad.',
      },
      natural: {
        label: 'Calidad Natural',
        description: 'Prenda transpirable y duradera. Ideal para pieles sensibles y uso prolongado.',
      },
      technical: {
        label: 'Prenda Técnica / Ultra-Sintética',
        description: 'A menos que sea ropa de deporte específica, estás pagando por plástico puro.',
      },
      luxury: {
        label: 'Lujo Real',
        description: 'Una inversión en comodidad y durabilidad. Trátala con el respeto que merece.',
      },
      balanced: {
        label: 'Mezcla Equilibrada',
        description: 'Una combinación funcional, probablemente busca balancear coste y durabilidad.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'La Verdad Detrás de la Etiqueta: Guía Maestra de Composición Textil', level: 2 },
    { type: 'paragraph', html: '¿Alguna vez te has preguntado por qué esa camiseta de marca te hace sudar tanto, o por qué ese jersey "de lana" pica insoportablemente? La respuesta no está en el diseño, sino en la química de sus fibras.' },
    { type: 'paragraph', html: 'En un mundo dominado por el <strong>Fast Fashion</strong>, la calidad de las telas ha pasado a un segundo plano frente a la estética efímera. Sin embargo, entender la composición textil es la única forma de realizar una compra inteligente, duradera y respetuosa con tu piel. Nuestra herramienta de <strong>Veracidad Textil</strong> analiza los porcentajes oficiales para revelarte si estás ante una prenda de calidad o un simple bloque de plástico procesado.' },
    { type: 'title', text: 'Nuestra Metodología', level: 2 },
    { type: 'paragraph', html: 'Utilizamos un algoritmo ponderado basado en tres pilares fundamentales extraídos de estándares industriales europeos y norteamericanos:' },
    { type: 'list', items: ['<strong>Transpirabilidad:</strong> Capacidad de la fibra para permitir el paso del vapor de agua y aire.', '<strong>Durabilidad:</strong> Resistencia a la abrasión, tracción y formación de <strong>pilling</strong> (bolitas).', '<strong>Eficiencia Térmica:</strong> Capacidad de retención de calor o frescura mecánica.'] },
    { type: 'tip', title: 'Importante', html: 'La ley exige que todas las prendas vendidas en la UE y EE.UU. listen sus componentes en orden decreciente de porcentaje. Si una prenda no tiene etiqueta o esta es ilegible, desconfía: es probable que no cumpla con los estándares mínimos de seguridad textil.' },
    { type: 'title', text: 'Los "Engaños" Comunes en el Retail', level: 2 },
    { type: 'paragraph', html: 'Existen técnicas de marketing muy refinadas diseñadas para elevar el valor percibido de una prenda mediocre. Aquí te enseñamos a detectarlas:' },
    { type: 'card', title: 'El Gancho de la Fibra Noble', icon: 'mdi:alert', html: 'Verás etiquetas que dicen "CON CACHEMIRA" o "CON SEDA" en letras grandes. Al mirar la composición, descubres un 3% de seda y un 97% de poliéster. Ese 3% no aporta suavidad, ni brillo, ni calidez; solo sirve para que la marca pueda subir el precio un 20%.' },
    { type: 'card', title: 'El Mito de la "Viscosa Ecológica"', icon: 'mdi:leaf', html: 'Aunque la viscosa proviene de la celulosa (madera), su proceso de fabricación actual suele ser altamente contaminante y el resultado final es una fibra que se debilita drásticamente al mojarse. A menos que sea <strong>Lyocell</strong> o <strong>Tencel</strong>, su durabilidad es limitada.' },
    { type: 'title', text: 'Análisis Profundo por Categorías', level: 2 },
    { type: 'title', text: '1. Fibras Naturales (Orgullosamente Orgánicas)', level: 3 },
    { type: 'paragraph', html: 'Son el estándar de oro. El <strong>Algodón</strong> de fibra larga (como el Pima o Egipcio) ofrece una suavidad eterna. El <strong>Lino</strong> es, científicamente, la mejor fibra para el calor debido a su estructura molecular que repele el calor y absorbe la humedad. La <strong>Lana</strong> y el <strong>Hemp</strong> (Cáñamo) son antibacterianos naturales; no necesitan lavarse con tanta frecuencia porque no retienen olores.' },
    { type: 'title', text: '2. Fibras Semi-Sintéticas (El Híbrido)', level: 3 },
    { type: 'paragraph', html: 'Aquí encontramos la <strong>Viscosa</strong>, el <strong>Rayón</strong> y el <strong>Modal</strong>. Se sienten como seda pero cuestan como algodón. Son excelentes para prendas con mucha caída, pero son "sedientas": absorben mucha agua y tardan en secar, lo que puede favorecer la aparición de moho si no se cuidan. El <strong>Lyocell (Tencel)</strong> es la versión premium y sostenible de este grupo, con un ciclo de producción cerrado y mayor resistencia.' },
    { type: 'title', text: '3. Fibras Sintéticas (Plásticos Hilados)', level: 3 },
    { type: 'paragraph', html: 'El <strong>Poliéster</strong> es el rey del mercado. Es barato, no se arruga y es eterno (literalmente, tardará 200 años en descomponerse). El problema es que no respira. Crea un microclima húmedo entre la tela y tu piel, el caldo de cultivo ideal para bacterias. El <strong>Acrílico</strong> es la imitación barata de la lana: calienta, pero genera mucha electricidad estática y se llena de bolitas en dos lavados.' },
    { type: 'title', text: 'Consejos de Supervivencia Textil', level: 2 },
    { type: 'paragraph', html: 'Incluso la mejor prenda del mundo puede arruinarse en un solo lavado inadecuado. Aquí tienes las reglas de oro universales:' },
    { type: 'tip', title: 'Agua Fría es tu Amiga', html: 'El 90% de las prendas no necesitan más de 30°C. El calor degrada las fibras elásticas y encoge las naturales.' },
    { type: 'tip', title: 'Menos es Más (Detergente)', html: 'El exceso de jabón deja residuos que atraen suciedad y hacen que la ropa se sienta rígida.' },
    { type: 'tip', title: 'Secadora: El Enemigo Sutil', html: 'La pelusa que ves en el filtro de la secadora son trozos de tu ropa que se han desprendido por la fricción y el calor.' },
    { type: 'tip', title: 'Lavado del Revés', html: 'Protege el color y los bordados del roce con el tambor y otras prendas.' },
    { type: 'paragraph', html: '"Comprar menos, elegir mejor y hacerlo durar." — Esta calculadora es tu primer paso hacia un armario consciente y de alta calidad.' },
  ],
  faqTitle: 'Preguntas Frecuentes',
  faq: [
    {
      question: '¿Qué es el "Greenwashing" en la moda?',
      answer: 'Es una técnica de marketing donde las marcas usan términos como "Ecológico" o "Sostenible" sin pruebas reales. Analizar la composición real de las fibras es la única forma de verificar si una prenda es realmente natural o sintética.',
    },
    {
      question: '¿Por qué el poliéster suele ser de menor calidad que el algodón?',
      answer: 'El poliéster es un plástico (PET). Aunque es duradero, no transpira, favorece el mal olor por bacterias y genera microplásticos en cada lavado. Las fibras naturales como el algodón o el lino ofrecen mejor regulación térmica.',
    },
    {
      question: '¿Es malo que mi ropa tenga elastano?',
      answer: 'En pequeñas cantidades (1-5%), el elastano (Lycra) aporta comodidad y ajuste. Sin embargo, dificulta enormemente el reciclaje de la prenda al mezclar plástico con fibras naturales, lo que suele indicar una prenda de "fast fashion".',
    },
    {
      question: '¿Cómo detectar una prenda de alta calidad por su etiqueta?',
      answer: 'Busca composiciones monomateriales (100% Algodón, 100% Lana). Las mezclas complejas suelen usarse para abaratar costes de producción y ocultan fibras sintéticas bajo nombres comerciales atractivos.',
    },
  ],
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'FTC - Guía de Etiquetado Textil',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'Comisión Europea - Regulación Textil',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Símbolos de Cuidado Textil',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: [
    {
      name: 'Localizar la etiqueta interna',
      text: 'Busca la etiqueta blanca de composición que suele estar en el lateral interior o en el cuello de tu prenda.',
    },
    {
      name: 'Identificar los componentes',
      text: 'Lee los porcentajes de cada fibra (ej. 70% Algodón, 30% Poliéster).',
    },
    {
      name: 'Introducir los datos en el analizador',
      text: 'Escribe las proporciones de las fibras en nuestra herramienta para obtener una puntuación técnica de calidad.',
    },
    {
      name: 'Interpretar el diagnóstico',
      text: 'Revisa el informe generado para entender si tu prenda es transpirable, duradera o si requiere cuidados especiales por su composición sintética.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
