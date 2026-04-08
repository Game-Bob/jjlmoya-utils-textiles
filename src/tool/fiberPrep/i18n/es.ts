import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'preparacion-fibras-pigmentar';
const title = 'Preparación de Fibras para Pigmentar';
const description =
  'Calculadora de WOF, protocolos de mordentado y rampas térmicas para preparar lana, seda y algodón antes del teñido natural.';

const faqData = [
  {
    question: '¿Qué es el WOF (Weight of Fiber)?',
    answer:
      'El WOF es el sistema estándar para calcular la cantidad de pigmento o mordiente necesaria. Se basa en el peso seco de la fibra. Por ejemplo, un 100% de WOF en cebolla para 100g de lana significa que necesitas 100g de pieles de cebolla.',
  },
  {
    question: '¿Por qué es necesario el mordentado?',
    answer:
      'El mordiente (como el alumbre) actúa como un puente químico entre la fibra textil y el pigmento natural. Sin él, la mayoría de los tintes no se fijarían y desaparecerían con el primer lavado (poca solidez a la luz y al frote).',
  },
  {
    question: '¿Cuál es la diferencia entre preparar fibras animales y vegetales?',
    answer:
      'Las fibras animales (proteicas como lana) aceptan muy bien el alumbre solo. Las fibras vegetales (celulósicas como algodón o lino) requieren un paso previo de taninos para "engañar" a la fibra y que acepte el mordiente metálico.',
  },
  {
    question: '¿Qué es la rampa térmica en el teñido?',
    answer:
      'Es el aumento gradual de la temperatura (aprox. 1-2°C por minuto) del baño de tinte. Es crucial para evitar el choque térmico, especialmente en la lana, que puede apelmazarse o "fieltrarse" si los cambios de temperatura son bruscos.',
  },
];

const howToData = [
  {
    name: 'Limpieza y desgomado',
    text: 'Lava la fibra con detergente neutro para eliminar aceites, ceras o almidones industriales que impiden que el mordiente penetre uniformemente.',
  },
  {
    name: 'Pesar la fibra seca',
    text: 'Obtén el peso exacto del material seco. Este valor es la base para todos los cálculos de WOF (Weight of Fiber).',
  },
  {
    name: 'Cálculo y baño de mordiente',
    text: 'Disuelve el mordiente (ej. alumbre de potasio al 15% WOF) en agua caliente y sumerge la fibra, manteniendo la temperatura constante según el protocolo.',
  },
  {
    name: 'Maduración y aclarado',
    text: 'Deja reposar la fibra mordentada (preferiblemente 24h) para que el metal se fije profundamente antes de pasar al baño de tinte definitivo.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Artista Textil y Tintes Naturales',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Ciencia detrás del Mordentado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Preparar una fibra para el teñido no es simplemente lavarla. Es un proceso de ingeniería química a nivel molecular llamado mordentado. La palabra proviene del latín <i>mordere</i> (morder), y su función es actuar como un puente químico entre la fibra y el pigmento. Sin este puente, la mayoría de los tintes naturales simplemente se lavarían en el primer aclarado.',
    },
    {
      type: 'card',
      title: 'Concepto Clave',
      icon: 'mdi:molecule',
      html: 'El mordente tiene valencias disponibles que se agarran simultáneamente a los polímeros de la fibra y al colorante.',
    },
    {
      type: 'title',
      text: 'Diferenciación de Fibras',
      level: 2,
    },
    {
      type: 'card',
      title: 'Fibras Proteicas: Lana y Seda',
      icon: 'mdi:sheep',
      html: 'Estas fibras están compuestas por cadenas de aminoácidos con afinidad natural muy alta por los metales. El calor abre las escamas permitiendo que las sales de alumbre penetren profundamente. El uso de <strong>Crémor Tártaro</strong> es vital para mantener el pH ácido que preserva su suavidad.',
    },
    {
      type: 'card',
      title: 'Fibras Celulósicas: Algodón y Lino',
      icon: 'mdi:leaf',
      html: 'La celulosa no tiene sitios de enlace fácilmente disponibles. Por eso usamos el <strong>protocolo de dos pasos</strong>: primero taninos que se adhieren a la celulosa, luego el alumbre se adhiere a esos taninos. Sin este pre-tratamiento, el color resultará pálido y poco resistente.',
    },
    {
      type: 'title',
      text: 'El Control del Baño: WOF, Temperatura y pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para obtener resultados profesionales y repetibles, el concepto de <strong>WOF (Weight of Fabric)</strong> es la ley. Todo se mide como porcentaje del peso seco de la fibra. Un exceso de mordente puede saturar la fibra y dejarla áspera o con depósitos metálicos que alteran el color final.',
    },
    {
      type: 'tip',
      title: 'La Rampa Térmica',
      html: 'El calor actúa como catalizador, acelerando la reacción química. Sin embargo, un cambio brusco de temperatura en la lana puede causar que las escamas se enganchen entre sí permanentemente, resultando en un tejido fieltrado y encogido.',
    },
    {
      type: 'tip',
      title: 'El Factor pH',
      html: 'Muchos tintes naturales son indicadores de pH vivos. El pH influye en la solubilidad de las sales y en la conservación de la fibra. La seda puede perder su brillo si el baño es demasiado alcalino. Ajustar el pH con ácido cítrico o carbonato de calcio es fundamental.',
    },
    {
      type: 'title',
      text: 'Sustancias y Seguridad',
      level: 2,
    },
    {
      type: 'card',
      title: 'Alumbre de Potasio',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Mordente universal, incoloro y altamente eficaz. La referencia para fibras proteicas.',
    },
    {
      type: 'card',
      title: 'Crémor Tártaro',
      icon: 'mdi:spoon-sugar',
      html: 'Asistente que mejora la fijación y suavidad en fibras animales. Mantiene el pH ácido.',
    },
    {
      type: 'tip',
      title: 'Protocolo de Seguridad',
      html: 'Usa ollas exclusivamente para teñido, nunca para alimentos.<br>Utiliza guantes y mascarilla al manipular mordentes en polvo.<br>Asegura ventilación constante para evitar la acumulación de vapores.',
    },
  ],
  ui: {
    profileTitle: 'Selección de Perfil',
    profileDesc: 'El protocolo químico se divide según el origen molecular de la fibra',
    proteinTitle: 'Fibras Proteicas',
    proteinOrigin: 'Origen Animal',
    proteinDesc: 'Lana, seda, alpaca, mohair o cashmere. Requieren temperaturas controladas y pH ácido.',
    cellulosicTitle: 'Fibras Celulósicas',
    cellulosicOrigin: 'Origen Vegetal',
    cellulosicDesc: 'Algodón, lino, cáñamo o yute. Requieren pre-mordentado con taninos para fijar el pigmento.',
    wofTitle: 'Calculadora WOF',
    weightLabel: 'Peso de la Prenda Seca (g)',
    weightUnit: 'gr',
    wofEmptyMsg: 'Selecciona un perfil para habilitar cálculos',
    alumLabel: 'Alumbre',
    cremLabel: 'Crémor Tártaro',
    ironLabel: 'Hierro (Cuidado)',
    rampTitle: 'Rampa Térmica',
    rampEmptyTitle: 'Esperando Selección',
    rampEmptyDesc: 'Elige una fibra para ver el ciclo térmico',
    phTitle: 'Estabilizador de pH',
    phDesc: 'Factor crítico para la saturación del color',
    phVolumeLabel: 'Volumen del Baño (L)',
    phSliderLabel: 'pH Actual',
    phAcidLabel: 'Ácido (1)',
    phAlkalineLabel: 'Alcalino (14)',
    phEmptyMsg: 'Selecciona un perfil para habilitar estabilizador',
    phStrings: {
      optimal: 'pH óptimo',
      raisePrefix: 'Añadir Carbonato de Calcio o Soda Ash. Aprox.',
      raiseSuffix: 'g para subir a',
      lowerPrefix: 'Añadir Ácido Cítrico o Vinagre. Aprox.',
      lowerSuffix: 'ml para bajar a',
    },
    proteinFibers: [
      { id: 'wool', name: 'Lana / Merino', icon: 'mdi:sheep' },
      { id: 'silk', name: 'Seda', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Cashmere', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Mohair', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaca', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Algodón', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Lino', icon: 'mdi:leaf' },
    ],
  },
};
