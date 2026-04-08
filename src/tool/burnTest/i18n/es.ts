import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'identificador-fibras-combustion';
const title = 'Prueba de Combustión Textil';
const description =
  'Identifica la composición real de cualquier tela mediante el análisis de su quemado. Diferencia algodón, lana, seda y sintéticos con rigor científico.';

const faqData = [
  {
    question: '¿Es seguro realizar una prueba de combustión en casa?',
    answer:
      'Sí, siempre que tomes precauciones extremas: usa pinzas metálicas, trabaja sobre una superficie ignífuga (cerámica o metal), ten agua cerca y realiza la prueba en un lugar ventilado. Solo necesitas una pequeña muestra de 1x1 cm o unos hilos.',
  },
  {
    question: '¿Cómo huele el algodón al quemarse?',
    answer:
      'El algodón es celulosa pura. Al quemarse, huele exactamente como el papel quemado o las hojas secas. La ceniza resultante es gris, muy fina y se deshace al tacto.',
  },
  {
    question: '¿Qué indica una bola negra y dura al final de la fibra?',
    answer:
      'Es el signo inequívoco de una fibra sintética (plástico), como el poliéster o el nylon. Al fundirse, el polímero se aglutina en una perla plástica que no se desmenuza, a diferencia de las cenizas de las fibras naturales.',
  },
  {
    question: '¿Por qué la lana huele mal al quemarse?',
    answer:
      'La lana y la seda son proteínas animales que contienen azufre. Al entrar en contacto con el fuego, emiten un olor penetrante a pelo quemado o plumas quemadas. Es la forma más fácil de diferenciarlas de las fibras vegetales.',
  },
];

const howToData = [
  {
    name: 'Extraer una muestra representativa',
    text: 'Corta un pequeño cuadrado del tejido o, mejor aún, extrae unos hilos tanto de la urdimbre (vertical) como de la trama (horizontal).',
  },
  {
    name: 'Observar la aproximación a la llama',
    text: 'Acerca la fibra lentamente al fuego sin tocarlo. Observa si se encoge, se funde o si prende fuego inmediatamente.',
  },
  {
    name: 'Analizar el tipo de llama y humo',
    text: 'Fíjate si la llama es constante o se apaga sola, y si el humo es blanco, negro o inexistente.',
  },
  {
    name: 'Evaluar el residuo y el olor',
    text: 'Una vez fría, toca la ceniza o perla resultante y percibe el olor (papel, pelo o químico) para confirmar la familia de la fibra.',
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

const flame = {
  cellulosic: 'Arde RÁPIDO y con BRILLO (Llama amarilla). No se funde. Sigue ardiendo al retirar.',
  protein: 'Arde LENTAMENTE, chisporrotea y se ENCOGE alejándose de la llama. Se autoextingue al retirar.',
  synthetic: 'Se FUNDE y contrae rápidamente, gotea como plástico derretido. Llama humeante.',
};

const odor = {
  paper: 'Papel quemado, madera, hojas secas.',
  hair: 'Pelo quemado, cuerno quemado, plumas.',
  chemical_sweet: 'Químico AROMÁTICO (dulce, afrutado).',
  chemical_fishy: 'Químico AGRIO (pescado, carne asada).',
  vegetable: 'Vegetales cocidos (apio).',
};

const residue = {
  ash_soft: 'Ceniza GRIS/NEGRA fina, suave y volátil (se deshace al tocar).',
  ash_shape: 'Ceniza GRIS mantiene forma de la fibra (friable).',
  bead_crushable: 'Masa negra hueca/quebradiza (se pulveriza fácilmente con los dedos).',
  bead_hard: 'Bola DURA y vítrea. Imposible de romper con los dedos.',
  bead_irregular: 'Masa negra DURA e irregular.',
};

const smoke = {
  white_gray: 'Blanco / Gris claro.',
  gray: 'Gris medio.',
  black: 'Negro DENSO y oscuro.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'AATCC TM20: Fiber Analysis - Qualitative',
      url: 'https://members.aatcc.org/store/tm20/485/',
    },
    {
      name: 'Textile Fibers: Identification and Testing - NIST',
      url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/circ/nbscircular41e3.pdf',
    },
    {
      name: 'Burn Test Chart for Fiber Identification - Fabric Mart',
      url: 'https://fabricmartfabrics.com/pages/burn-test-chart',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Ciencia Forense del Filamento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La prueba de combustión es el método analítico más rápido y preciso para diferenciar polímeros naturales de sintéticos sin recurrir a microscopio electrónico. Al someter una fibra al calor, su comportamiento molecular revela su origen: desde la celulosa vegetal hasta las proteínas animales o los derivados del petróleo.',
    },
    {
      type: 'card',
      title: 'Fibras Celulósicas',
      icon: 'mdi:leaf',
      html: 'El <strong>Algodón</strong> y el <strong>Lino</strong> arden rápidamente sin fundirse. Huelen a papel quemado porque proceden de la madera o plantas, dejando una ceniza gris volátil que se esparce al soplar.',
    },
    {
      type: 'card',
      title: 'Fibras Proteicas',
      icon: 'mdi:sheep',
      html: 'La <strong>Lana</strong> y la <strong>Seda</strong> se alejan de la llama. Su olor característico a pelo quemado indica la presencia de azufre y queratina. El residuo es una cuenta negra que se pulveriza al tocarla.',
    },
    {
      type: 'card',
      title: 'Fibras Sintéticas',
      icon: 'mdi:bottle-soda-classic',
      html: 'El <strong>Poliéster</strong> y el <strong>Nailon</strong> son esencialmente plásticos. Se funden formando una gota caliente que se endurece en una bola vítrea imposible de romper, con un olor químico punzante.',
    },
    {
      type: 'title',
      text: 'Matriz de Evidencia Química',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un análisis preciso requiere cruzar al menos tres evidencias. El olor es el indicador más fiable para identificar mezclas: si una tela de "lino" desprende un leve aroma plástico y deja residuos duros, indica una mezcla con poliéster no declarada.',
    },
    {
      type: 'tip',
      title: 'Protocolo de Seguridad de Laboratorio',
      html: '<strong>Ventilación crítica:</strong> Las fibras sintéticas liberan gases tóxicos al arder. Nunca realices esta prueba en espacios cerrados.<br><strong>Extinción inmediata:</strong> Ten siempre un recipiente con agua al lado. Algunas fibras sintéticas pueden fundirse y adherirse a la piel.',
    },
  ],
  ui: {
    investigationLabel: 'INVESTIGACIÓN',
    stepPrefix: 'PASO',
    stepCompleted: 'ANÁLISIS COMPLETADO',
    resetLabel: 'REINICIAR',
    positiveId: 'IDENTIFICACIÓN POSITIVA',
    flameLabel: 'Comportamiento Llama',
    odorLabel: 'Rastro Olfativo',
    residueLabel: 'Residuo',
    identifiedAs: 'Muestra identificada positivamente como',
    safetyTitle: 'Protocolo de Seguridad',
    safetyText:
      'Realiza esta prueba en un lugar ventilado, sobre una superficie ignífuga. Usa pinzas metálicas y mantén agua cerca.',
    questions: {
      flame: '¿Comportamiento ante la llama?',
      odor: '¿Olor característico?',
      residue: '¿Residuo final?',
      smoke: '¿Tipo de humo?',
    },
    fiberData: {
      cotton: { name: 'Algodón', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Fibra vegetal natural, suave y transpirable. El rey de los básicos.' },
      linen: { name: 'Lino', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Fibra vegetal muy fuerte, fresca y con arruga característica.' },
      wool: { name: 'Lana / Merino', icon: 'mdi:sheep', color: '#FCD34D', description: 'Fibra animal proteica, aislante térmico excelente y elástica.' },
      silk: { name: 'Seda', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Fibra animal de filamento continuo. Brillo natural y tacto seco.' },
      cashmere: { name: 'Cashmere', icon: 'mdi:crown', color: '#F59E0B', description: 'Fibra de lujo de cabra de Cachemira. Extremadamente suave y ligera.' },
      mohair: { name: 'Mohair', icon: 'mdi:shimmer', color: '#14B8A6', description: 'La "fibra de diamante" de la cabra de Angora. Brillo natural y elástica.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Pelo del conejo de Angora. Efecto "halo" esponjoso y ligereza extrema.' },
      alpaca: { name: 'Alpaca', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Tesoro de los Andes. Fibra hueca, térmica, hipoalergénica y sedosa.' },
      polyester: { name: 'Poliéster', icon: 'mdi:oil', color: '#94A3B8', description: 'Fibra sintética de petróleo. Resistente, no arruga, no respira.' },
      nylon: { name: 'Nailon (Poliamida)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Sintética muy resistente a tracción y abrasión.' },
      acrylic: { name: 'Acrílico', icon: 'mdi:resize', color: '#450A0A', description: 'Sintético imitación lana. Suave, caliente, hace bolas.' },
    },
    burnTestData: [
      { fiberId: 'cotton', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_soft },
      { fiberId: 'linen', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_shape },
      { fiberId: 'wool', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'silk', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'cashmere', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'mohair', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'angora', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'alpaca', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'polyester', flame: flame.synthetic, odor: odor.chemical_sweet, smoke: smoke.black, residue: residue.bead_hard },
      { fiberId: 'nylon', flame: flame.synthetic, odor: odor.vegetable, smoke: smoke.white_gray, residue: residue.bead_hard },
      { fiberId: 'acrylic', flame: flame.synthetic, odor: odor.chemical_fishy, smoke: smoke.black, residue: residue.bead_irregular },
    ],
  },
};
