import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'miedzynarodowy-konwerter-rozmiarow-odziezy';
const title = 'Międzynarodowy Konwerter Rozmiarów Odzieży';
const description =
  'Konwertuj rozmiary ubrań między systemami EU, US, UK i IT. T-shirty, spodnie, sukienki i kurtki dla mężczyzn, kobiet i unisex. Zawiera przewodnik po wymiarach i rekomendacje marek.';

const faqData = [
  {
    question: 'Jaka jest różnica między rozmiarem odzieży EU a US?',
    answer:
      'Rozmiary europejskie (EU) wykorzystują progresywne liczby lub litery (XS-XXL lub 32-52), podczas gdy rozmiary amerykańskie (US) często używają liter lub specyficznych liczb dla spodni. Generalnie rozmiar 36 EU odpowiada rozmiarowi 4 US w odzieży damskiej.',
  },
  {
    question: 'Czy rozmiary różnią się dla odzieży męskiej i damskiej?',
    answer:
      'Tak, absolutnie. Nawet w tym samym kraju rozmiar 40 męski nie jest taki sam jak 40 damski. Mężczyźni mają inne proporcje (szersze ramiona), więc obliczanie rozmiaru się różni.',
  },
  {
    question: 'Skąd mam wiedzieć, czy w danej marce powinienem wziąć rozmiar większy czy mniejszy?',
    answer:
      'Najlepszym sposobem jest sprawdzenie opinii innych klientów. Zdania typu „było na mnie za małe” lub „duży krój” są bardzo pomocne. Sprawdź również konkretną tabelę wymiarów danej marki.',
  },
  {
    question: 'Jak dokładna jest tabela konwersji rozmiarów?',
    answer:
      'Tabela konwersji jest przewodnikiem. Chociaż ogólnie jest dokładna, każda marka ma swoją własną specyfikację. Przed zakupem zawsze sprawdź tabelę rozmiarów konkretnego sklepu.',
  },
  {
    question: 'Czy ubrania kurczą się po praniu?',
    answer:
      'Zależy to od materiału. 100% bawełna może skurczyć się o 5-10%, jeśli zostanie wyprana w gorącej wodzie i wysuszona w suszarce bębnowej. Materiały syntetyczne lepiej zachowują swój kształt. Zawsze sprawdzaj instrukcje prania.',
  },
];

const howToData = [
  {
    name: 'Wybierz Rodzaj Odzieży i Płeć',
    text: 'Wybierz typ ubrania (t-shirt, spodnie, sukienka, kurtka) oraz odpowiednią płeć.',
  },
  {
    name: 'Wybierz Swój System Rozmiarów',
    text: 'Wybierz system, który znasz: EU, US, UK lub IT.',
  },
  {
    name: 'Wybierz Swój Rozmiar',
    text: 'Wybierz swój rozmiar w selektorze lub kliknij w siatkę. Natychmiast zobaczysz odpowiedniki.',
  },
  {
    name: 'Skonsultuj Przewodnik po Markach',
    text: 'Sprawdź, czy dana marka wypada mniejsza, regularna czy większa, aby dostosować zakup.',
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
  faqTitle: 'Najczęściej Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    { name: 'ISO 3635: Rozmiary odzieży - Oficjalny standard', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Standardy rozmiarów ubrań - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Rozmiar_odzie%C5%BCy' },
    {
      name: 'Międzynarodowa konwersja rozmiarów - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Konwerter Rozmiarów Odzieży: Kompletny Przewodnik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kupowanie ubrań w sklepach zagranicznych może być mylące, gdy rozmiary nie pasują. <strong>Konwerter rozmiarów</strong> pomaga znaleźć idealny rozmiar w systemach EU, US, UK i IT dla t-shirtów, spodni, sukienek i kurtek.',
    },
    {
      type: 'title',
      text: 'Dlaczego rozmiary ubrań różnią się między krajami?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nie istnieje jeden globalny standard. Każdy region wypracował swój własny system, co powoduje dezorientację podczas zakupów w zagranicznych sklepach lub na platformach takich jak Amazon czy AliExpress.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Rozmiary EU (Europa):</strong> Wykorzystują progresywne liczby (32, 34, 36...) lub litery. Jest to najczęstszy system w Polsce, Niemczech i Francji.</span>',
        '<span><strong>Rozmiary US (USA):</strong> Używają liter (XS, S, M, L) lub liczb dla spodni damskich (0, 2, 4, 6...).</span>',
        '<span><strong>Rozmiary UK (Wielka Brytania):</strong> Podobne do systemu EU, ale z własną numeracją, zazwyczaj niższą niż numeracja US.</span>',
        '<span><strong>Rozmiary IT (Włochy):</strong> Włoska numeracja z odchyleniami od ogólnego systemu EU.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Pro Tip',
      html: 'Rozmiary różnią się znacznie między markami. Rozmiar 38 w Zara może różnić się od rozmiaru 38 w H&amp;M. Przed zakupem zawsze sprawdź konkretną tabelę wymiarów danego sklepu.',
    },
    {
      type: 'title',
      text: 'Jak prawidłowo zmierzyć swoje ciało',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aby zagwarantować poprawny dobór rozmiaru, zmierz swoje ciało za pomocą elastycznej taśmy krawieckiej. Mierz pod koniec dnia, kiedy ciało ma swoją maksymalną objętość.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Klatka piersiowa:</strong> Zmierz obwód w najszerszym miejscu klatki piersiowej, prowadząc taśmę pod pachami.</span>',
        '<span><strong>Talia:</strong> Zmierz obwód na wysokości pępka, nie wciągając sztucznie brzucha.</span>',
        '<span><strong>Biodra:</strong> Zmierz obwód w najszerszym miejscu bioder, trzymając taśmę równolegle do podłoża.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Przewodnik po fasonach marek',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Rozmiary regularne. Rozmiar 36 w Zara jest zazwyczaj wiarygodny dla standardowych wymiarów.</span>',
        '<span><strong>H&amp;M:</strong> Ma tendencję do większych krojów. Rozważ wybór rozmiaru mniejszego niż zazwyczaj.</span>',
        '<span><strong>Uniqlo:</strong> Często wypada mniejszy, zwłaszcza w podstawowych ubraniach. Zaleca się wybór rozmiaru większego.</span>',
        '<span><strong>Nike / Adidas:</strong> Sportowe kroje, często dopasowane. Rozważ wybór rozmiaru o pół stopnia większego.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Rodzaj Odzieży',
    categoryShirts: 'T-shirty',
    categoryPants: 'Spodnie',
    categoryDresses: 'Sukienki',
    categoryJackets: 'Kurtki',
    genderLabel: 'Płeć',
    genderMen: 'Mężczyzna',
    genderWomen: 'Kobieta',
    genderUnisex: 'Unisex',
    tabBySize: 'Według Rozmiaru',
    tabByMeasurements: 'Według Wymiarów',
    regionLabel: 'Twój System Rozmiarów',
    sizeLabel: 'Wybierz Swój Rozmiar',
    regionEU: 'Europa (EU)',
    regionUS: 'Stany Zjednoczone (US)',
    regionUK: 'Wielka Brytania (UK)',
    regionIT: 'Włochy (IT)',
    labelEU: 'Europa',
    labelUS: 'USA',
    labelUK: 'WB',
    labelIT: 'Włochy',
    quickGridTitle: 'Szybkie Odpowiedniki (EU)',
    tableTitle: 'Pełna Tabela Konwersji',
    measurementsTitle: 'Wprowadź Swoje Wymiary',
    chestLabel: 'Klatka piersiowa (cm)',
    waistLabel: 'Talia (cm)',
    hipLabel: 'Biodra (cm)',
    chestPlaceholder: 'Np: 95',
    waistPlaceholder: 'Np: 85',
    hipPlaceholder: 'Np: 95',
    recommendBtnLabel: 'Rekomenduj Rozmiar',
    tipsTitle: 'Wskazówki Dotyczące Pomiarów',
    tipOverClothes: 'Mierz na ubraniu',
    tipStraight: 'Taśma prosto i równolegle',
    tipNoTight: 'Bez ściskania',
    tipEndOfDay: 'Pod koniec dnia',
    recommendationTitle: 'Rekomendowany Rozmiar',
    recommendedSizePrefix: 'Polecamy rozmiar:',
    measuredBy: 'Na podstawie Twoich wymiarów:',
    chestShort: 'Klatka',
    waistShort: 'Talia',
    hipShort: 'Biodra',
    recommendationError: 'Uzupełnij wszystkie wymiary, aby otrzymać rekomendację.',
    recommendationNoData: 'Brak dostępnych danych dla tej kategorii.',
    fitGuideTitle: 'Fasony wg Marek',
    fitSmall: 'Mały Rozmiar',
    fitRegular: 'Zgodny z Rozmiarem',
    fitLarge: 'Duży Rozmiar',
    fitInfoDefault: 'Kliknij na markę, aby uzyskać konkretne rekomendacje.',
    fitNotif1: ' zazwyczaj wypada ',
    fitNotifSmall: 'mały',
    fitNotifRegular: 'standardowy',
    fitNotifLarge: 'duży',
    fitNotif2: '. Rozważ ',
    fitNotif3: ', jeśli kupujesz tę markę po raz pierwszy.',
    fitAdviceSmall: 'wybór rozmiaru większego',
    fitAdviceRegular: 'pozostanie przy zwykłym rozmiarze',
    fitAdviceLarge: 'wybór rozmiaru mniejszego',
    fitSelectedSuffix: ' wybrana. Wybierz inną markę do porównania.',
    infoBannerTitle: 'Pro Tip:',
    infoBannerText:
      'Rozmiary ubrań różnią się znacznie między markami. Zawsze sprawdzaj tabelę konkretnego sklepu przed zakupem.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
