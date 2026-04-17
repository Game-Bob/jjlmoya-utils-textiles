import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'conversor-tamanhos-sapatos';
const title = 'Conversor de Tamanhos de Sapatos';
const description = 'Converta tamanhos de sapatos entre os sistemas dos Estados Unidos (US), Europa (EU), Reino Unido (UK) e centímetros (CM). Guia de calçado para homem e mulher.';

const faqData = [
  {
    question: 'Como saber o meu tamanho de sapatos nos Estados Unidos (US)?',
    answer: 'Para homens, o tamanho US costuma ser uma unidade maior do que o UK. Para mulheres, a escala é diferente. A forma mais precisa é medir o seu pé em centímetros e usar o nosso conversor para obter o seu número US exacto.',
  },
  {
    question: 'Qual a diferença entre o tamanho UK e o tamanho US de calçado?',
    answer: 'Embora ambos usem o sistema imperial, os seus pontos de partida diferem. Geralmente, um tamanho 8 UK equivale a um tamanho 9 US em calçado masculino.',
  },
  {
    question: 'Como medir o meu pé para saber o tamanho CM?',
    answer: 'Coloque o calcanhar contra uma parede, marque onde termina o seu dedo mais comprido e meça a distância. Essa medida em centímetros (CM) é a mais fiável para comprar sapatilhas de marcas internacionais.',
  },
];

const howToData = [
  {
    name: 'Escolha o Género',
    text: 'Seleccione se procura tamanhos para homem ou mulher, já que as escalas variam.',
  },
  {
    name: 'Seleccione a Região',
    text: 'Indique o sistema de tamanhos que conhece (EU, US, UK ou CM).',
  },
  {
    name: 'Escolha o seu Número',
    text: 'Use o selector ou clique directamente na grelha de tamanhos europeus.',
  },
  {
    name: 'Ver Equivalências',
    text: 'Obtenha instantaneamente o número correspondente nas restantes regiões do mundo.',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
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
      text: 'Conversor de Tamanhos de Sapatos: Guia Internacional Completo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Comprar calçado em lojas internacionais pode ser um desafio logístico. O <strong>conversor de tamanhos de sapatos</strong> é uma ferramenta essencial para evitar devoluções desnecessárias e assegurar que cada compra, seja na Amazon, AliExpress ou numa loja de desporto especializada, seja um sucesso.',
    },
    {
      type: 'title',
      text: 'Como funcionam as equivalências de tamanhos de calçado?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O mundo do calçado não está unificado. Historicamente, cada região desenvolveu o seu próprio sistema baseado em unidades de medida locais como polegadas ou o "ponto de Paris".',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Tamanhos EU (Europa):</strong> Baseados no "Ponto de Paris", que equivale a 2/3 de centímetro. É o sistema mais comum em Portugal.</span>',
        '<span><strong>Tamanhos US (Estados Unidos):</strong> Utilizam polegadas com um ponto de partida diferente para homens e mulheres.</span>',
        '<span><strong>Tamanhos UK (Reino Unido):</strong> Também em sistema imperial, mas com escalas uma unidade menores que as dos EUA.</span>',
        '<span><strong>Tamanho CM / Mondopoint:</strong> O mais preciso. Utiliza directamente o comprimento do pé em centímetros.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Guia para medir o seu pé e encontrar o seu tamanho exacto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Antes de usar o conversor, é vital conhecer a medida real do seu pé. Para os sapatos, a medida fundamental é o comprimento do pé desde o calcanhar até ao dedo mais comprido.',
    },
    {
      type: 'tip',
      title: 'Conselho Profissional',
      html: 'Meça os seus pés ao final do dia. Os pés tendem a inchar com a actividade e o calor, pelo que uma medida matinal poderia resultar em sapatos que o apertariam à tarde.',
    },
    {
      type: 'title',
      text: 'Porque é que os tamanhos variam entre marcas de sapatilhas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Porque é que é um 42 na Nike mas um 41 1/3 na Adidas? As marcas utilizam as suas próprias "formas". Algumas marcas desportivas tendem a calçar pequeno, o que obriga a comprar meio número acima do habitual.',
    },
  ],
  ui: {
    genderMenTitle: 'Calçado de Homem',
    genderWomenTitle: 'Calçado de Mulher',
    regionLabel: 'O Seu Sistema de Tamanho',
    regionEU: 'Europa (EU)',
    regionUS: 'Estados Unidos (US)',
    regionUK: 'Reino Unido (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Seleccione o seu Tamanho',
    gridDesc: 'Clique para ver as equivalências internacionais',
    labelEU: 'Europa (EU)',
    labelUS: 'EUA (US)',
    labelUK: 'Reino Unido (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: 'O tamanho <strong>CM</strong> representa o comprimento físico do pé. É o método mais fiável para comprar sapatilhas de marcas internacionais.',
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
