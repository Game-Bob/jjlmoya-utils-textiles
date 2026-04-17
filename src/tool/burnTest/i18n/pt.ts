import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'teste-combustao-textil';
const title = 'Teste de Combustão Têxtil';
const description =
  'Identifique a composição real de qualquer tecido através da análise do seu comportamento de queima. Diferencie algodão, lã, seda e sintéticos com rigor científico.';

const faqData = [
  {
    question: 'É seguro realizar um teste de combustão em casa?',
    answer:
      'Sim, desde que tome precauções extremas: use pinças metálicas, trabalhe sobre uma superfície ignífuga (cerâmica ou metal), tenha água por perto e realize o teste num local ventilado. Apenas necessita de uma pequena amostra de 1x1 cm ou alguns fios.',
  },
  {
    question: 'Como cheira o algodão ao queimar?',
    answer:
      'O algodão é celulose pura. Ao queimar, cheira exatamente como papel queimado ou folhas secas. A cinza resultante é cinzenta, muito fina e desfaz-se ao toque.',
  },
  {
    question: 'O que indica uma bola preta e dura no final da fibra?',
    answer:
      'É o sinal inequívoco de uma fibra sintética (plástico), como o poliéster ou o nylon. Ao fundir-se, o polímero aglutina-se numa pérola plástica que não se desmorona, ao contrário das cinzas das fibras naturais.',
  },
  {
    question: 'Porque é que a lã cheira mal ao queimar?',
    answer:
      'A lã e a seda são proteínas animais que contêm enxofre. Ao entrar em contacto com o fogo, emitem um odor penetrante a cabelo queimado ou penas queimadas. É a forma mais fácil de as diferenciar das fibras vegetais.',
  },
];

const howToData = [
  {
    name: 'Extrair uma amostra representativa',
    text: 'Corte um pequeno quadrado do tecido ou, melhor ainda, extraia alguns fios tanto da urdidura (vertical) como da trama (horizontal).',
  },
  {
    name: 'Observar a aproximação à chama',
    text: 'Aproxime a fibra lentamente do fogo sem lhe tocar. Observe se encolhe, se funde ou se pega fogo imediatamente.',
  },
  {
    name: 'Analisar o tipo de chama e fumo',
    text: 'Repare se a chama é constante ou se apaga sozinha, e se o fumo é branco, preto ou inexistente.',
  },
  {
    name: 'Avaliar o resíduo e o odor',
    text: 'Uma vez fria, toque na cinza ou pérola resultante e perceba o odor (papel, cabelo ou químico) para confirmar a família da fibra.',
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
  inLanguage: 'pt',
};

const flame = {
  cellulosic: 'Arde RÁPIDO e com BRILHO (chama amarela). Não funde. Continua a arder ao retirar.',
  protein: 'Arde LENTAMENTE, crepita e ENCOLHE afastando-se da chama. Autoextingue-se ao retirar.',
  synthetic: 'FUNDE-SE e contrai-se rapidamente, goteja como plástico derretido. Chama fumarenta.',
};

const odor = {
  paper: 'Papel queimado, madeira, folhas secas.',
  hair: 'Cabelo queimado, corno queimado, penas.',
  chemical_sweet: 'Químico AROMÁTICO (doce, frutado).',
  chemical_fishy: 'Químico AZEDO (peixe, carne assada).',
  vegetable: 'Vegetais cozidos (aipo).',
};

const residue = {
  ash_soft: 'Cinza CINZENTA/PRETA fina, suave e volátil (desfaz-se ao tocar).',
  ash_shape: 'Cinza CINZENTA mantém a forma da fibra (friável).',
  bead_crushable: 'Massa negra oca/quebradiça (pulveriza-se facilmente com os dedos).',
  bead_hard: 'Bola DURA e vítrea. Impossível de partir com os dedos.',
  bead_irregular: 'Massa negra DURA e irregular.',
};

const smoke = {
  white_gray: 'Branco / Cinzento claro.',
  gray: 'Cinzento médio.',
  black: 'Preto DENSO e escuro.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
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
      text: 'A Ciência Forense do Filamento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O teste de combustão é o método analítico mais rápido e preciso para diferenciar polímeros naturais de sintéticos sem recorrer a microscópio eletrónico. Ao submeter uma fibra ao calor, o seu comportamento molecular revela a sua origem: desde a celulose vegetal até às proteínas animais ou aos derivados do petróleo.',
    },
    {
      type: 'card',
      title: 'Fibras Celulósicas',
      icon: 'mdi:leaf',
      html: 'O <strong>Algodão</strong> e o <strong>Linho</strong> ardem rapidamente sem fundir. Cheiram a papel queimado porque procedem da madeira ou plantas, deixando uma cinza cinzenta volátil que se espalha ao soprar.',
    },
    {
      type: 'card',
      title: 'Fibras Proteicas',
      icon: 'mdi:sheep',
      html: 'A <strong>Lã</strong> e a <strong>Seda</strong> afastam-se da chama. O seu odor característico a cabelo queimado indica a presença de enxofre e queratina. O resíduo é uma conta negra que se pulveriza ao tocar.',
    },
    {
      type: 'card',
      title: 'Fibras Sintéticas',
      icon: 'mdi:bottle-soda-classic',
      html: 'O <strong>Poliéster</strong> e o <strong>Nylon</strong> são essencialmente plásticos. Fundem-se formando uma gota quente que endurece numa bola vítrea impossível de partir, com um odor químico punzante.',
    },
    {
      type: 'title',
      text: 'Matriz de Evidência Química',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma análise precisa requer cruzar pelo menos três evidências. O odor é o indicador mais fiável para identificar misturas: se um tecido de "linho" desprende um leve aroma plástico e deixa resíduos duros, indica uma mistura com poliéster não declarada.',
    },
    {
      type: 'tip',
      title: 'Protocolo de Segurança de Laboratório',
      html: '<strong>Ventilação crítica:</strong> As fibras sintéticas libertam gases tóxicos ao arder. Nunca realize este teste em espaços fechados.<br><strong>Extinção imediata:</strong> Tenha sempre um recipiente com água ao lado. Algumas fibras sintéticas podem fundir-se e aderir à pele.',
    },
  ],
  ui: {
    investigationLabel: 'INVESTIGAÇÃO',
    stepPrefix: 'PASSO',
    stepCompleted: 'ANÁLISE COMPLETADA',
    resetLabel: 'REINICIAR',
    positiveId: 'IDENTIFICAÇÃO POSITIVA',
    flameLabel: 'Comportamento Chama',
    odorLabel: 'Rasto Olfativo',
    residueLabel: 'Resíduo',
    identifiedAs: 'Amostra identificada positivamente como',
    safetyTitle: 'Protocolo de Segurança',
    safetyText:
      'Realize este teste num local ventilado, sobre uma superfície ignífuga. Use pinças metálicas e mantenha água por perto.',
    questions: {
      flame: 'Comportamento ante a chama?',
      odor: 'Odor característico?',
      residue: 'Resíduo final?',
      smoke: 'Tipo de fumo?',
    },
    fiberData: {
      cotton: { name: 'Algodão', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Fibra vegetal natural, suave e respirável. O rei dos básicos.' },
      linen: { name: 'Linho', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Fibra vegetal muito forte, fresca e com ruga característica.' },
      wool: { name: 'Lã / Merino', icon: 'mdi:sheep', color: '#FCD34D', description: 'Fibra animal proteica, isolante térmico excelente e elástica.' },
      silk: { name: 'Seda', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Fibra animal de filamento contínuo. Brilho natural e tacto seco.' },
      cashmere: { name: 'Caxemira', icon: 'mdi:crown', color: '#F59E0B', description: 'Fibra de luxo de cabra de Caxemira. Extremamente suave, leve e quente.' },
      mohair: { name: 'Mohair', icon: 'mdi:shimmer', color: '#14B8A6', description: 'A "fibra de diamante" da cabra de Angora. Brilho natural, muito resistente.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Pelo do coelho de Angora. Conhecido pelo seu efeito "halo" fofo e extrema leveza.' },
      alpaca: { name: 'Alpaca', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Tesouro dos Andes. Fibra oca, térmica, hipoalergénica e sedosa.' },
      polyester: { name: 'Poliéster', icon: 'mdi:oil', color: '#94A3B8', description: 'Fibra sintética de petróleo. Resistente, não enruga, não respira.' },
      nylon: { name: 'Nylon (Poliamida)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Sintética muito resistente a tração e abrasão.' },
      acrylic: { name: 'Acrílico', icon: 'mdi:resize', color: '#450A0A', description: 'Sintético imitação lã. Suave, quente, faz borbotos.' },
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
