import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'przelicznik-rozmiarow-butow';
const title = 'Przelicznik Rozmiarów Butów';
const description = 'Przeliczaj rozmiary butów między systemami USA (US), Europy (EU), Wielkiej Brytanii (UK) i centymetrami (CM). Przewodnik po obuwiu męskim i damskim.';

const faqData = [
  {
    question: 'Jak sprawdzić swój rozmiar butów w USA (US)?',
    answer: 'Dla mężczyzn rozmiar US jest zazwyczaj o jedną jednostkę większy niż rozmiar UK. Dla kobiet skala jest inna. Najdokładniejszym sposobem jest zmierzenie stopy w centymetrach i skorzystanie z naszego przelicznika, aby uzyskać dokładny numer US.',
  },
  {
    question: 'Jaka jest różnica między brytyjskim (UK) a amerykańskim (US) rozmiarem butów?',
    answer: 'Chociaż oba systemy wykorzystują jednostki imperialne, ich punkty wyjścia są różne. Zazwyczaj rozmiar 8 UK odpowiada rozmiarowi 9 US w obuwiu męskim.',
  },
  {
    question: 'Jak zmierzyć stopę, aby poznać rozmiar CM?',
    answer: 'Oprzyj piętę o ścianę, zaznacz miejsce, w którym kończy się najdłuższy palec, i zmierz tę odległość. Ten pomiar w centymetrach (CM) jest najbardziej wiarygodny przy zakupie butów międzynarodowych marek.',
  },
];

const howToData = [
  {
    name: 'Wybierz Płeć',
    text: 'Wybierz, czy szukasz rozmiarów męskich, czy damskich, ponieważ skale się różnią.',
  },
  {
    name: 'Wybierz Region',
    text: 'Wskaż system rozmiarów, który znasz (EU, US, UK lub CM).',
  },
  {
    name: 'Wybierz swój Numer',
    text: 'Skorzystaj z selektora lub kliknij bezpośrednio w siatkę rozmiarów europejskich.',
  },
  {
    name: 'Zobacz Odpowiedniki',
    text: 'Natychmiast uzyskaj odpowiadający numer w pozostałych regionach świata.',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
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
      text: 'Przelicznik Rozmiarów Butów: Pełny Przewodnik Międzynarodowy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kupowanie obuwia w międzynarodowych sklepach może być wyzwaniem logistycznym. <strong>Przelicznik rozmiarów butów</strong> to niezbędne narzędzie, które pozwala uniknąć niepotrzebnych zwrotów i zapewnia, że każdy zakup, czy to na Amazon, AliExpress, czy w specjalistycznym sklepie sportowym, będzie udany.',
    },
    {
      type: 'title',
      text: 'Jak działają odpowiedniki rozmiarów obuwia?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Świat obuwia nie jest zunifikowany. Historycznie każdy region wypracował własny system oparty na lokalnych jednostkach miary, takich jak cale lub "punkt paryski".',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Rozmiary EU (Europa):</strong> Oparte na "punkcie paryskim", który odpowiada 2/3 centymetra. Jest to najpopularniejszy system w Polsce.</span>',
        '<span><strong>Rozmiary US (USA):</strong> Wykorzystują cale z innym punktem wyjścia dla mężczyzn i kobiet.</span>',
        '<span><strong>Rozmiary UK (Wielka Brytania):</strong> Również w systemie imperialnym, ale ze skalami o jedną jednostkę niższymi niż w USA.</span>',
        '<span><strong>Rozmiar CM / Mondopoint:</strong> Najdokładniejszy. Wykorzystuje bezpośrednio długość stopy w centymetrach.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Przewodnik jak zmierzyć stopę i znaleźć swój dokładny rozmiar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zanim skorzystasz z przelicznika, kluczowe jest poznanie rzeczywistego wymiaru Twojej stopy. W przypadku butów podstawowym wymiarem jest długość stopy od pięty do najdłuższego palca.',
    },
    {
      type: 'tip',
      title: 'Porada Profesjonalna',
      html: 'Mierz stopy pod koniec dnia. Stopy mają tendencję do puchnięcia w wyniku aktywności i ciepła, więc poranny pomiar może skutkować zakupem butów, które po południu będą Cię uciskać.',
    },
    {
      type: 'title',
      text: 'Dlaczego rozmiary różnią się między markami butów sportowych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dlaczego masz numer 42 w Nike, a 41 1/3 w Adidas? Marki używają własnych "kopyt". Niektóre marki sportowe mają tendencję do zaniżania rozmiarów, co wymusza zakup butów o pół numeru większych niż zwykle.',
    },
  ],
  ui: {
    genderMenTitle: 'Obuwie Męskie',
    genderWomenTitle: 'Obuwie Damskie',
    regionLabel: 'Twój System Rozmiarów',
    regionEU: 'Europa (EU)',
    regionUS: 'USA (US)',
    regionUK: 'Wielka Brytania (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Wybierz swój Rozmiar',
    gridDesc: 'Kliknij, aby zobaczyć odpowiedniki międzynarodowe',
    labelEU: 'Europa (EU)',
    labelUS: 'USA (US)',
    labelUK: 'Wielka Brytania (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: 'Rozmiar <strong>CM</strong> reprezentuje fizyczną długość stopy. Jest to najbardziej niezawodna metoda kupowania butów sportowych międzynarodowych marek.',
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
