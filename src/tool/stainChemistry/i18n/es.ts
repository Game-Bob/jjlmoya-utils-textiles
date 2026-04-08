import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'protocolo-quimico-manchas';
const title = 'Protocolo Químico de Manchas Textiles';
const description =
  'Protocolos científicos para eliminar manchas según el tipo de fibra y la naturaleza química de la mancha. Percarbonato, enzimas, solventes: el método correcto para cada caso.';

const faqData = [
  {
    question: '¿Puedo usar lejía en lugar de percarbonato?',
    answer:
      'La lejía (hipoclorito sódico) es altamente corrosiva. Degrada las fibras volviéndolas amarillentas y quebradizas. El percarbonato blanquea por oxígeno activo, respetando la estructura molecular natural.',
  },
  {
    question: '¿Por qué el vinagre ayuda con los olores?',
    answer:
      'Los olores corporales suelen ser alcalinos. El ácido acético del vinagre los neutraliza, transformándolos en sales inodoras que se eliminan completamente en el aclarado.',
  },
  {
    question: '¿Siempre debo usar agua fría para la sangre?',
    answer:
      'Sí. El calor coagula las proteínas de la sangre, fijándola a la fibra de forma permanente. El agua fría mantiene la mancha en estado soluble y permite que los agentes enzimáticos actúen eficazmente.',
  },
  {
    question: '¿Qué pasa si aplico acetona a una prenda de acetato?',
    answer:
      'La acetona disuelve el triacetato y el acetato. Las fibras de acetato son celulosa esterificada con ácido acético y son completamente solubles en acetona. El resultado sería la destrucción irreversible del tejido.',
  },
];

const howToData = [
  {
    name: 'Identificar el tipo de fibra',
    text: 'Consulta la etiqueta interior de la prenda para conocer si es fibra natural, sintética o noble (lana, seda, cashmere).',
  },
  {
    name: 'Seleccionar la fibra en la herramienta',
    text: 'Elige el material correspondiente en el primer selector.',
  },
  {
    name: 'Seleccionar el tipo de mancha',
    text: 'Indica si la mancha es orgánica (vino, fruta), proteica (sangre), grasa o sintética (tinta).',
  },
  {
    name: 'Aplicar el protocolo indicado',
    text: 'Sigue las instrucciones de agente, temperatura y método. Presta especial atención a las advertencias de precaución crítica.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Protocolo Químico de Manchas',
    fiberLabel: '1. Fibra',
    selectFiberPlaceholder: 'Selecciona el tejido...',
    stainLabel: '2. Mancha',
    selectStainPlaceholder: '¿Qué ha ocurrido?',
    molecularDiagnosis: 'Diagnóstico Molecular',
    requiredAgent: 'Agente Requerido',
    thermalCondition: 'Condición Térmica',
    temperature: 'Temperatura',
    cleaningInstructions: 'Instrucciones de Limpieza',
    criticalWarning: 'Precaución Crítica',
    criticalWarningLabel: 'PRECAUCIÓN',
    technicalNote: 'Nota técnica',
    technicalNoteText:
      'Valida siempre la solidez del tinte en una zona no visible antes de proceder con el tratamiento químico completo.',
    systemDiagnosis: 'Sistema de Diagnóstico',
    systemDiagnosisDesc:
      'Configura los parámetros textiles para obtener la hoja de ruta de limpieza',
    delicatePercarbonateWarning:
      'RIESGO DE DEGRADACIÓN MOLECULAR. Fibras animales altamente sensibles al percarbonato. Realizar test en zona no visible.',
    fiberData: {
      cotton: { name: 'Algodón', family: 'natural', isNoble: false },
      linen: { name: 'Lino', family: 'natural', isNoble: true },
      wool: { name: 'Lana / Merino', family: 'natural', isNoble: true },
      silk: { name: 'Seda', family: 'natural', isNoble: true },
      cashmere: { name: 'Cashmere', family: 'natural', isNoble: true },
      mohair: { name: 'Mohair', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpaca', family: 'natural', isNoble: true },
      polyester: { name: 'Poliéster', family: 'synthetic', isNoble: false },
      viscose: { name: 'Viscosa / Rayón', family: 'artificial', isNoble: false },
      nylon: { name: 'Nailon (Poliamida)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Acrílico', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Percarbonato de Sodio',
        description: 'Blanqueador oxigenado biodegradable. Libera oxígeno activo al disolverse.',
        warning: 'Evitar en fibras de proteína (seda, lana) a altas concentraciones.',
      },
      isopropyl: {
        name: 'Alcohol Isopropílico',
        description: 'Solvente eficaz para pigmentos y grasas ligeras.',
        warning: 'Puede dañar el brillo en sedas y disolver algunos acrílicos si no se diluye.',
      },
      acetone: {
        name: 'Acetona',
        description: 'Solvente potente para lacas y pegamentos.',
        warning: 'PROHIBIDO en acetatos y triacetatos (disuelve la fibra).',
      },
      enzyme: {
        name: 'Detergente Enzimático',
        description: 'Contiene proteasas que rompen manchas biológicas.',
        warning: 'Uso con precaución en lana y seda (son proteínas).',
      },
      vinegar: {
        name: 'Vinagre Blanco',
        description: 'Ácido acético suave para neutralizar olores y fijar colores.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Vino Tinto / Fruta',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Remojo prolongado' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Pasta directa' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Fría',
            method: 'Aclarado con agua con gas y vinagre',
            notes: 'No frotar',
          },
        },
      },
      {
        id: 'blood',
        name: 'Sangre',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Fría',
            method: 'Remojo en agua salada y luego enzima',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Fría', method: 'Aplicación directa' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Fría',
            method: 'Aclarado inmediato, evitar calor',
          },
        },
      },
      {
        id: 'grease',
        name: 'Grasa / Aceite',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Disolver con alcohol y luego lavar',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Poner papel absorbente debajo',
          },
          delicate: { agentId: 'isopropyl', temperature: 'Fría', method: 'Diluir alcohol al 50%' },
        },
      },
      {
        id: 'ink',
        name: 'Tinta / Marcador',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Ambiente',
            method: 'Esponjar desde fuera hacia dentro',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Ambiente',
            method: 'Precaución con la dispersión',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Fría',
            method: 'Diluir y probar en zona oculta',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'La Química Detrás de la Limpieza Textil',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No todas las manchas son iguales, y no todas las fibras reaccionan igual ante los mismos agentes químicos. La diferencia entre salvar una prenda y destruirla está en entender la naturaleza molecular de la mancha y la estructura de la fibra.',
    },
    {
      type: 'card',
      title: '01 — Oxidación Controlada',
      icon: 'mdi:atom',
      html: 'El <strong>percarbonato de sodio</strong> libera oxígeno activo que rompe las dobles ligaduras de los cromóforos (las moléculas responsables del color de la mancha), volviéndolas incoloras y solubles en agua. Es el método más eficaz para manchas orgánicas.',
    },
    {
      type: 'card',
      title: '02 — Solubilización por Solventes',
      icon: 'mdi:flask-outline',
      html: 'Manchas como el aceite o la tinta no son solubles en agua. Solventes como el <strong>alcohol isopropílico</strong> o la <strong>acetona</strong> reducen la tensión superficial y atraen las moléculas no polares de la mancha, permitiendo que se transfieran a un medio de soporte.',
    },
    {
      type: 'title',
      text: 'Soberanía sobre las Fibras: Por qué importa el tipo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No todas las fibras "comen" igual. La <strong>seda y la lana</strong> son proteínas (fibroína y queratina). Si aplicas un detergente enzimático diseñado para "comer proteínas" (manchas de sangre o huevo) sin control, el detergente empezará a degradar la propia fibra, destruyendo el brillo y la estructura del tejido.',
    },
    {
      type: 'title',
      text: 'El Peligro del Calor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uno de los errores más comunes es usar agua caliente para "ablandar" una mancha de sangre. Químicamente, el calor produce la <strong>coagulación de las proteínas</strong> de la mancha, fijándolas permanentemente a la estructura porosa de la fibra. Las manchas de proteínas deben tratarse siempre con agua fría.',
    },
    {
      type: 'tip',
      title: 'Protocolo de Emergencia: Vino Tinto',
      html: '<strong>A. Absorción pasiva:</strong> Tocar con papel absorbente, nunca frotar para evitar la expansión mecánica.<br><strong>B. Neutralización osmótica:</strong> Cubrir con sal fina para atraer el líquido hacia el exterior del núcleo de la fibra.<br><strong>C. Acción química:</strong> Aplicar una pasta de percarbonato y agua a 40°C si la fibra es resistente al calor.',
    },
    {
      type: 'title',
      text: 'Solventes Específicos y Precauciones',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>acetona</strong> es un solvente excepcional para lacas de uñas o pegamentos, pero es destructiva para el <strong>acetato</strong>. Al ser fibras derivadas de la celulosa pero tratadas químicamente, la acetona literalmente disuelve el tejido.',
    },
    {
      type: 'paragraph',
      html: 'El <strong>alcohol isopropílico</strong> es más estable, pero en sintéticos teñidos puede arrastrar el propio pigmento. Recomendamos siempre la "prueba del dobladillo" en una zona no visible antes del tratamiento principal.',
    },
  ],
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
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
