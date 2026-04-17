import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'konwerter-drutow-i-szydelek';
const title = 'Konwerter Drutów do Robótek i Szydełek';
const description = 'Konwertuj rozmiary drutów i szydełek między systemami Metrycznym (mm), US i UK wraz z zaleceniami dotyczącymi przędzy i WPI.';

const faqData = [
  {
    question: 'Dlaczego istnieją różne systemy rozmiarów drutów?',
    answer: 'Historycznie każdy kraj opracował własny system. System metryczny (mm) jest najdokładniejszym standardem międzynarodowym. System US wykorzystuje numerację progresywną (0-50), podczas gdy system UK wykorzystuje numerację odwrotną: im wyższy numer, tym cieńszy jest drut.',
  },
  {
    question: 'Czy rozmiary szydełek i drutów w systemie US są takie same?',
    answer: 'Niezupełnie. Szydełka w USA zazwyczaj mają przypisaną literę (np. H-8) i istnieją specyficzne różnice w małych grubościach. Ponadto stalowe szydełka do cienkich nici używają zupełnie innej numeracji.',
  },
  {
    question: 'Który drut wybrać, jeśli mój wzór używa miary bez dokładnego odpowiednika?',
    answer: 'Jeśli wzór wymaga rozmiaru np. 7,0 mm, a Twój system oferuje tylko 6,5 mm lub 8,0 mm, zaleca się zawsze wykonanie próbki obliczeniowej (gauge). Różnica 0,5 mm może znacząco zmienić końcowy rozmiar odzieży.',
  },
  {
    question: 'Co to jest WPI (Wraps Per Inch)?',
    answer: 'Jest to liczba owinięć nitki, która mieści się w jednym calu (2,54 cm). Jest to najbardziej wiarygodna metoda identyfikacji grubości wełny bez etykiety i określenia, który drut jest najbardziej odpowiedni do jej przerabiania.',
  },
];

const howToData = [
  {
    name: 'Wybierz rodzaj robótki',
    text: 'Wybierz między drutami (knitting) a szydełkiem (crochet), aby zobaczyć poprawne odpowiedniki w systemie US.',
  },
  {
    name: 'Wybierz rozmiar w selektorze wizualnym',
    text: 'Kliknij na okrąg odpowiadający rozmiarowi Twojego drutu. Otwory zachowują rzeczywistą proporcję matematyczną względem milimetrów.',
  },
  {
    name: 'Odczytaj odpowiedniki',
    text: 'Sprawdzaj wyniki w czasie rzeczywistym: milimetry, rozmiar US i rozmiar UK, wraz z zalecaną kategorią przędzy i jej WPI.',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Przewodnik Techniczny po Drutach i Szydełkach: Systemy, Kalibry i Odpowiedniki',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Globalizacja cyfrowych wzorów sprawiła, że niezbędne stało się zrozumienie różnic między <strong>dziesiętnym systemem metrycznym</strong>, <strong>standardem Stanów Zjednoczonych (US)</strong> a <strong>brytyjskim systemem imperialnym (UK)</strong>. To narzędzie konwertuje między tymi trzema systemami i oferuje rekomendacje przędzy metodą WPI.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Działa bez sieci', icon: 'mdi:wifi-off' },
        { value: 'Potrójny', label: 'Pełna Synchronizacja', icon: 'mdi:sync' },
        { value: 'WPI', label: 'Analiza Włóczki', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Złożoność Systemów Międzynarodowych',
      level: 3,
    },
    {
      type: 'table',
      headers: ['System', 'Podstawa Obliczeń', 'Region Dominujący', 'Cechy Techniczne'],
      rows: [
        ['<strong>Metryczny (mm)</strong>', 'Dokładna średnica w mm', 'Europa / Międzynarodowy', 'Najbardziej niezawodny standard ISO. Stałe przyrosty o 0,25 mm lub 0,50 mm.'],
        ['<strong>US (SZA)</strong>', 'Numeracja Progresywna', 'Ameryka Północna', 'Używa numerów od 0 do 50. W szydełkowaniu numery łączone są z literami (B-1, G-6).'],
        ['<strong>UK (Imperialny)</strong>', 'Numeracja Odwrotna', 'Wielka Brytania / Australia', 'Oparty na kalibrze drutu. Im wyższy numer, tym cieńszy drut (14 to cienki, 0 to gruby).'],
      ],
    },
    {
      type: 'title',
      text: 'Identyfikacja Włóczek Metodą WPI',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / Koronka (18-22+ WPI):</strong> Bardzo cienkie nitki na koronki z jedwabiu lub mohairu. Druty od 1,5 mm do 2,5 mm.',
        '<strong>Fingering / Baby (14-16 WPI):</strong> Standard na skarpetki i ubranka dziecięce. Optymalne druty od 2,75 mm do 3,25 mm.',
        '<strong>Sport / Fine (12-14 WPI):</strong> Włóczka o średnio-niskiej grubości, idealna na lekkie sweterki. Druty od 3,5 mm do 3,75 mm.',
        '<strong>DK / Light Worsted (11-13 WPI):</strong> Najbardziej uniwersalna grubość na rynku. Druty 4,0 mm lub 4,5 mm.',
        '<strong>Worsted / Aran (9-10 WPI):</strong> Gruba włóczka na zimowe swetry. Druty od 5,0 mm do 5,5 mm.',
        '<strong>Bulky / Chunky (7-8 WPI):</strong> Grube wełny do szybkich projektów. Druty od 6,0 mm do 8,0 mm.',
        '<strong>Super Bulky (5-6 WPI):</strong> Gigantyczne włókna na dekoracje lub szaliki. Druty od 9,0 mm do 15,0 mm.',
      ],
    },
    {
      type: 'tip',
      title: 'Technika Profesjonalna: Szydełko Stalowe',
      html: '<p>Istnieje rodzina szydełek do ekstremalnie cienkich nici z bawełny merceryzowanej. Są to <strong>Steel Hooks (Szydełka Stalowe)</strong>. Ich numeracja jest specyficzna i odwrotna: szydełko stalowe #14 (0,6 mm) jest znacznie cieńsze niż #00 (3,5 mm). Nigdy nie używaj standardowej tabeli dla tych kalibrów.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Lista kontrolna dla wyboru właściwego kalibru',
      icon: 'mdi:check-circle-outline',
      badge: 'Walidacja Techniczna',
      html: '<p>Wykonaj te kroki przed rozpoczęciem dużego projektu:</p><ul><li><strong>Osobiste Napięcie:</strong> Jeśli dziergasz ciasno, zwiększ rozmiar o 0,5 mm. Jeśli luźno, zmniejsz o 0,5 mm.</li><li><strong>Materiał Drutów:</strong> Bambus do śliskich nitek; Metal do szorstkich wełen.</li><li><strong>Rodzaj Włókna:</strong> Bawełna nie ulega rozciąganiu; wełna merino rozszerza się podczas blokowania.</li><li><strong>Próbka Obliczeniowa:</strong> Wykonaj kwadrat 10x10 cm i upierz go przed zmierzeniem ostatecznego rozmiaru.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'System metryczny jest uniwersalny i pozwala uniknąć błędów zaokrągleń między producentami.',
          con: 'Wiele starych i historycznych wzorów nie zawiera wymiarów w milimetrach.',
        },
        {
          pro: 'System US ułatwia zapamiętywanie standardowych rozmiarów dla wzorów amerykańskich.',
          con: 'Litery w szydełkowaniu nie zawsze są spójne między różnymi markami.',
        },
        {
          pro: 'System WPI pozwala na techniczne i profesjonalne zagospodarowanie włóczek bez etykiety.',
          con: 'Wymaga bardzo skrupulatnego ręcznego pomiaru, aby nie zafałszować wyniku.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'Próbka obliczeniowa (10x10 cm) wykonana przed rozpoczęciem projektu w celu zweryfikowania rzeczywistego kalibru.' },
        { term: 'Hook Throat', definition: 'Główka (szyjka) szydełka. Jej głębokość określa, jak dużą ilość nitki może utrzymać szydełko.' },
        { term: 'Block Testing', definition: 'Proces zwilżania i naciągania dzianiny, aby włókna się rozluźniły i ujawniły swój prawdziwy końcowy rozmiar.' },
      ],
    },
    {
      type: 'summary',
      title: 'Krytyczne Czynniki Sukcesu Twojego Projektu Tekstylnego',
      items: [
        'Właściwy drut decyduje nie tylko o rozmiarze, ale także o trwałości odzieży podczas użytkowania.',
        'Użyj naszego konwertera, aby w kilka sekund zweryfikować wzory z amerykańskich lub angielskich czasopism.',
        'Jeśli nie znajdziesz dokładnego odpowiednika, wybierz rozmiar większy lub mniejszy w oparciu o swoją próbkę obliczeniową.',
        'Szydełkowanie zużywa ok. 30% więcej nitki niż robienie na drutach przy użyciu tego samego rozmiaru narzędzia.',
        'Regularnie czyść metalowe druty, aby zachować optymalny poślizg nitki.',
      ],
    },
  ],
  ui: {
    labelSystem: 'SYSTEM PRACY',
    modeKnitting: 'Druty',
    modeCrochet: 'Szydełko',
    calibratorLabel: 'KALIBRATOR PRECYZYJNY (SKALA RZECZYWISTA)',
    calibratorDesc: 'Wybierz średnicę, aby zobaczyć odpowiedniki w czasie rzeczywistym. Otwory zachowują rzeczywistą proporcję matematyczną względem milimetrów.',
    tagMetric: 'Metryczny (mm)',
    tagUS: 'System US',
    tagUK: 'System UK',
    yarnLabel: 'IDEALNA GRUBOŚĆ NITKI',
    wpiFormat: '{wpi} WPI (Owinięć na cal)',
    tableSectionLabel: 'TECHNICZNY KATALOG ODPOWIEDNIKÓW',
    tableMetric: 'METRYCZNY',
    tableUS: 'ROZMIAR US',
    tableUK: 'UK / IMPERIAL',
    tableYarn: 'KATEGORIA NITKI',
  },
};
