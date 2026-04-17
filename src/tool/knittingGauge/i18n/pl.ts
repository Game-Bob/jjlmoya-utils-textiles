import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'kalkulator-gauge-naprezenia-dzianiny';
const title = 'Kalkulator Gęstości i Napięcia Dzianiny (Gauge)';
const description =
  'Łatwo przeliczaj oczka i rzędy dla dowolnego wzoru na drutach lub szydełku. Dostosuj gęstość według wielokrotności i współczynnika skali, aby uzyskać profesjonalny rezultat.';

const faqData = [
  {
    question: 'Co to jest napięcie lub gęstość dzianiny (gauge)?',
    answer:
      'Jest to miara tego, ile oczek i rzędów mieści się w określonym obszarze (zwykle 10x10 cm). Jest to fundamentalne, ponieważ określa końcowy rozmiar odzieży w zależności od użytych drutów i włóczki.',
  },
  {
    question: 'Jak zmiana gęstości wpływa na rozmiar?',
    answer:
      'Jeśli Twoje napięcie ma więcej oczek na centymetr niż wzór, odzież będzie mniejsza. Jeśli masz mniej oczek, odzież będzie większa. Dlatego kluczowe jest przeliczenie oczek lub zmiana drutów.',
  },
  {
    question: 'Dlaczego ważna jest regulacja według wielokrotności?',
    answer:
      'Wiele wzorów ma motywy (ażury, warkocze, rysunki), które wymagają określonej liczby oczek do ukończenia. Nasz kalkulator dostosowuje sumę do najbliższej wielokrotności, aby nie zaburzyć projektu.',
  },
  {
    question: 'Czy powinienem uprać próbkę przed pomiarem?',
    answer:
      'Tak, zawsze. "Blokowanie" (pranie i nadanie kształtu) rozluźnia włókna i pokazuje rzeczywiste napięcie, jakie odzież będzie miała po pierwszym użyciu i praniu.',
  },
];

const howToData = [
  {
    name: 'Zidentyfikuj gęstość ze wzoru',
    text: 'Poszukaj w instrukcji wzoru, ile oczek i rzędów podano dla próbki 10x10 cm lub 4x4 cale.',
  },
  {
    name: 'Wydziergaj i zmierz własną próbkę',
    text: 'Wydziergaj próbkę ze swojej włóczki na swoich drutach, zablokuj ją i zmierz, ile oczek i rzędów masz na tym samym obszarze.',
  },
  {
    name: 'Skonfiguruj kalkulator',
    text: 'Wprowadź dane próbki ze wzoru oraz dane swojej rzeczywistej próbki. Dodaj całkowitą liczbę oczek dla swojego rozmiaru i wielokrotności motywu, jeśli występują.',
  },
  {
    name: 'Uzyskaj wyniki',
    text: 'Sprawdź nową liczbę oczek do nabrania i współczynnik skali, aby wiedzieć, czy musisz dostosować również długość odzieży.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Gęstości i Napięcia Dzianiny Online: Przewodnik Techniczny',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jeśli kiedykolwiek skończyłeś sweter, który wyglądał jak zaprojektowany dla olbrzyma, lub czapkę, która ledwo zakrywała czubek głowy, znasz już znaczenie <strong>gęstości dzianiny (gauge) lub napięcia</strong>. W świecie robótek na drutach i szydełku napięcie to relacja między grubością włóczki, rozmiarem drutów a siłą, z jaką każda osoba dziergająca prowadzi nitkę. Nie ma dwóch takich samych osób dziergających, dlatego nie ma dwóch identycznych napięć.',
    },
    {
      type: 'title',
      text: 'Dlaczego Napięcie lub Gęstość robótki jest kluczowe?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator gęstości dzianiny to narzędzie techniczne zaprojektowane, aby wyeliminować domysły matematyczne i pozwolić Ci skupić się na kreatywności. Wprowadzając dane próbki ze wzoru i własnej próbki, otrzymasz precyzyjne korekty oczek i rzędów, zapewniając, że Twoja końcowa odzież będzie miała dokładnie takie wymiary, jakich oczekujesz.',
    },
    {
      type: 'title',
      text: 'Jak korzystać z kalkulatora napięcia dzianiny',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Wydziergaj próbkę:</strong> Nie ograniczaj się do 10x10 cm. Wydziergaj co najmniej 15x15 cm, aby krawędzie nie zafałszowały pomiaru w środku.',
        '<strong>Zablokuj próbkę:</strong> Upierz i wysusz próbkę tak samo, jak zrobiłbyś to z gotową odzieżą. Wiele włókien wełnianych rozszerza się lub rośnie po zmoczeniu.',
        '<strong>Mierz precyzyjnie:</strong> Użyj sztywnej linijki lub miarki do gęstości. Policz, ile oczek mieści się poziomo i ile rzędów pionowo.',
        '<strong>Wprowadź dane:</strong> Umieść wartości ze wzoru w lewej kolumnie, a swoje rzeczywiste wartości w prawej. Narzędzie automatycznie przeliczy, ile oczek potrzebujesz, aby osiągnąć pożądaną szerokość.',
      ],
    },
    {
      type: 'title',
      text: 'Interpretacja wyników: Współczynnik skali',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Współczynnik skali to mnożnik, który stosujemy do każdej instrukcji wzoru. Jeśli Twoje napięcie to 22 oczka, a wzór wymaga 20, Twój współczynnik skali wynosi 1.1. Oznacza to, że aby uzyskać tę samą szerokość fizyczną, potrzebujesz o 10% więcej oczek. Odchylenie 0-2% jest idealne, 2-10% jest umiarkowane, 10-25% wymaga obowiązkowego przeliczenia, a powyżej 25% stanowi ryzyko strukturalne.',
    },
    {
      type: 'title',
      text: 'Traktowanie wielokrotności i motywów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jednym z największych wyzwań przy przeliczaniu wzoru jest zachowanie integralności ażurów, warkoczy lub motywów. Jeśli projekt powtarza się co 8 oczek, nie możesz po prostu dodać 3 dodatkowych oczek; musisz dostosować sumę tak, aby nadal była wielokrotnością 8. Funkcja <strong>regulacji według wielokrotności</strong> tego kalkulatora sugeruje liczbę oczek najbliższą, która respektuje architekturę wzoru.',
    },
    {
      type: 'tip',
      title: 'Porada dla ekspertów',
      html: '<p>Zazwyczaj lepiej jest użyć tego kalkulatora i pracować z naturalnym napięciem Twojej włóczki, dostosowując liczbę oczek, zamiast wymuszać napięcie poprzez radykalną zmianę rozmiaru drutów, ponieważ to ostatnie może zmienić sposób układania się i miękkość dzianiny.</p>',
    },
    {
      type: 'title',
      text: 'Zalety korzystania z naszego narzędzia do regulacji',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Automatyczna regulacja oczek i rzędów z precyzyjnym współczynnikiem skali.',
        'Wsparcie dla złożonych wielokrotności (X + Y), aby zachować integralność motywu.',
        'Szacunkowa liczba gramów włóczki potrzebnej na cały projekt.',
        'Dynamiczny wizualizator próbki pokazujący gęstość dzianiny w czasie rzeczywistym.',
      ],
    },
    {
      type: 'card',
      title: 'Gauge / Napięcie',
      icon: 'mdi:ruler',
      html: 'Liczba oczek i rzędów zawartych w kwadracie <strong>10x10 cm</strong> lub <strong>4x4 cale</strong>. Jest to uniwersalne odniesienie wszystkich wzorów dziewiarskich.',
    },
    {
      type: 'card',
      title: 'Blokowanie',
      icon: 'mdi:water',
      html: 'Proces zwilżania i nadawania kształtu odzieży w celu osadzenia oczek. Ujawnia <strong>rzeczywiste napięcie</strong>, jakie odzież będzie miała po pierwszym użyciu i praniu.',
    },
    {
      type: 'card',
      title: 'Współczynnik skali',
      icon: 'mdi:scale',
      html: 'Matematyczna proporcja między próbką ze wzoru a rzeczywistą próbką osoby dziergającej. Określa, o ile oczek i rzędów należy skorygować wzór, aby zachować <strong>prawidłowe wymiary</strong>.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Oryginalne Napięcie',
    sectionMyGauge: 'Twoja Obecna Próbka',
    sectionProject: 'Struktura Projektu',
    labelStitches: 'Oczka',
    labelRows: 'Rzędy',
    labelWidth: 'Szerokość',
    labelLength: 'Długość',
    labelUnit: 'Jednostka Miary',
    labelNeedle: 'Druty',
    labelNeedleMm: 'Druty (mm)',
    labelWeight: 'Waga (g)',
    labelWeightOptional: 'opcjonalnie',
    labelPatternSts: 'Oczka Wzoru',
    labelPatternRows: 'Rzędy Wzoru',
    labelMultiples: 'Wielokrotności',
    labelMultiplesExample: 'Np: 10 + 2',
    labelMultiplesPlaceholder: 'Wielokrotność + Brzeg',
    unitEU: '10 x 10 cm (Standard UE)',
    unitUS: '4 x 4 cale (Standard US)',
    btnClear: 'Wyczyść',
    btnShare: 'Udostępnij',
    btnCopied: 'Skopiowano!',
    resSuggestedSts: 'Sugerowana liczba oczek do nabrania',
    resNewRows: 'Nowe Rzędy',
    resNewRowsTooltip: 'Liczba rzędów niezbędna do wyrównania długości oryginalnego wzoru przy Twoim obecnym napięciu.',
    resScaleFactor: 'Współczynnik Skali',
    resScaleFactorTooltip: 'Relacja rozmiaru między Twoją dzianiną a wzorem. Wartość ujemna oznacza, że Twoja dzianina jest gęstsza.',
    resSuggestion: 'Sugestia',
    resSuggestionTooltip: 'Rekomendacja techniczna dotycząca dostosowania napięcia bez konieczności przeliczania każdego oczka wzoru.',
    suggestionIdeal: 'Idealne',
    suggestionDown: 'Zmniejsz Druty',
    suggestionUp: 'Zwiększ Druty',
    suggestionDownDetail: 'Użyj drutów {n}mm lub mniejszego rozmiaru.',
    suggestionUpDetail: 'Użyj drutów {n}mm lub większego rozmiaru.',
    multiplesNoteFormat: 'Dostosowano ze {n} oczek (Wielokr. {m})',
    yarnTitle: 'Szacunkowa ilość włóczki na projekt',
    yarnResultFormat: 'Szacowana włóczka: <strong>{g}g</strong>',
    yarnSafetyFormat: '(+{s}g zapasu bezpieczeństwa)',
    alertDanger: 'Ekstremalna różnica (>25%). Ułożenie i struktura odzieży ulegną zmianie.',
  },
};
