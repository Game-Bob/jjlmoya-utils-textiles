import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'skalowanie-wykrojow-krawieckich';
const title = 'Online Skalowanie Wykrojów Krawieckich';
const description = 'Dostosuj dowolny wykrój krawiecki do swoich rzeczywistych wymiarów. Kalkulator skalowania różnicowego z podglądem zaktualizowanego wzoru.';

const faqData = [
  {
    question: 'Dlaczego ramię nie powiększa się tak samo jak klatka piersiowa?',
    answer: 'Ciało ludzkie nie jest kulą. Podczas gdy objętość tułowia może się znacząco zmieniać, szkielet i punkty stawowe, takie jak ramię, są znacznie bardziej statyczne. Profesjonalne stopniowanie (grading) stosuje zróżnicowane współczynniki, aby nie naruszyć równowagi odzieży.',
  },
  {
    question: 'Co to jest "luz konstrukcyjny" lub "ease"?',
    answer: 'Jest to dodatkowa przestrzeń między Twoim ciałem a materiałem. Bez luzu nie mogłabyś się poruszać. Nasz kalkulator utrzymuje ten luz, aby odzież leżała tak, jak zamierzył projektant, ale była dostosowana do Twoich rzeczywistych konturów.',
  },
  {
    question: 'Czy mogę przeskalować wykrój na dzianinę lub dżersej?',
    answer: 'Tak, ale pamiętaj, że materiały elastyczne często mają ujemny luz konstrukcyjny. Jeśli wykrój jest bardzo dopasowany, upewnij się, że współczynnik elastyczności nowej tkaniny, którą wybierzesz, jest taki sam jak oryginału.',
  },
];

const howToData = [
  {
    name: 'Zmierz swój wykrój',
    text: 'Zmierz kluczowe linie poziome (klatka piersiowa, talia i biodra) na papierowych elementach swojego oryginalnego wykroju, od szwu do szwu.',
  },
  {
    name: 'Skonfiguruj źródło',
    text: 'Wprowadź rozmiar wykroju lub wymiary, które zmierzyłaś, w kolumnie „Źródło” w naszym narzędziu.',
  },
  {
    name: 'Wprowadź cel',
    text: 'Wprowadź swoje rzeczywiste wymiary lub rozmiar, który chcesz osiągnąć. Narzędzie obliczy dokładną różnicę dla każdej strefy.',
  },
  {
    name: 'Zastosuj na stole krojczym',
    text: 'Postępuj zgodnie z instrukcjami „Czynności na stole krojczym”, aby dodać lub odjąć centymetry na bokach i dołach swoich elementów.',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Patronaje: Las Bases - Teresa Gilewska',
      url: 'https://www.scribd.com/document/696165843/patronaje-las-bases-by-teresa-gilewska',
    },
    {
      name: 'Metric Pattern Cutting for Women\'s Wear - Winifred Aldrich',
      url: 'https://download.e-bookshelf.de/download/0000/5989/88/L-G-0000598988-0002339537.pdf',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Jak skalować wykroje krawieckie: Przewodnik techniczny i praktyczny',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Skalowanie wykrojów</strong> (grading) jest jedną z najbardziej krytycznych umiejętności w świecie krawiectwa. Nie polega ono po prostu na proporcjonalnym powiększeniu lub pomniejszeniu rysunku; chodzi o dostosowanie dwuwymiarowej struktury do złożonych krzywizn i proporcji ludzkiego ciała, które nie rośnie liniowo.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Obliczenia Lokalne', icon: 'mdi:calculator' },
        { value: 'Różnicowy', label: 'Skalowanie Proporcjonalne', icon: 'mdi:resize' },
        { value: '100%', label: 'Bezpieczne i Prywatne', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Czym dokładnie jest skalowanie wykrojów?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skalowanie (lub <em>stopniowanie</em>) to proces techniczny zwiększania lub zmniejszania rozmiaru wykroju bazowego w celu stworzenia serii różnych rozmiarów. W przeciwieństwie do zwykłego powiększenia, skalowanie bierze pod uwagę, że niektóre części ciała rosną bardziej niż inne. Na przykład obwód klatki piersiowej zazwyczaj zmienia się między rozmiarami bardziej niż szerokość ramion czy długość tułowia.',
    },
    {
      type: 'title',
      text: 'Sekret sukcesu: Luz konstrukcyjny (Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Luz ruchowy:</strong> dodatkowe centymetry niezbędne, abyś mogła oddychać, siedzieć i ruszać rękami bez rozrywania materiału.',
        '<strong>Luz modelowy:</strong> centymetry dodane przez projektanta w celu stworzenia konkretnej sylwetki (na przykład płaszcz typu oversize lub zwiewna bluzka).',
      ],
    },
    {
      type: 'title',
      text: 'Skalowanie Poziome vs Pionowe',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Oś Pozioma (Obwody):</strong> Klatka piersiowa, Talia, Biodra. Wymaga największego dopasowania. Dzieli się na ćwiartki dla każdego elementu wykroju.',
        '<strong>Oś Pionowa (Długości):</strong> Długość przodu, długość tyłu, długość całkowita. Wpływa na położenie zaszewek i linii talii. Mniejsza zmienność między sąsiednimi rozmiarami.',
      ],
    },
    {
      type: 'title',
      text: 'Jak korzystać ze skaler wykrojów',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zmierz swój wykrój:</strong> weź papierowy element i zmierz od krawędzi do krawędzi na liniach klatki piersiowej, talii i bioder.',
        '<strong>Wprowadź wymiary źródłowe:</strong> wpisz te wymiary w lewej kolumnie i wskaż, jaki rozmiar reprezentuje ten wykrój.',
        '<strong>Wprowadź swoje wymiary lub rozmiar docelowy:</strong> w prawej kolumnie wpisz swoje rzeczywiste wymiary lub rozmiar, który chcesz uzyskać.',
        '<strong>Zinterpretuj wyniki:</strong> kalkulator pokaże Ci, ile należy dodać lub odjąć w każdej konkretnej strefie.',
      ],
    },
    {
      type: 'tip',
      title: 'Wskazówka dla profesjonalnego skalowania',
      html: '<p><strong>Nie skaluj o więcej niż dwa lub trzy rozmiary:</strong> jeśli spróbujesz przejść z rozmiaru 36 do 52, jest bardzo prawdopodobne, że podkrój pachy ulegnie deformacji, a podkrój szyi stanie się ogromny. W takich przypadkach lepiej narysować wykrój bazowy od nowa, korzystając ze swoich wymiarów.</p>',
    },
    {
      type: 'title',
      text: 'Zalety skalowania cyfrowego',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Utrzymuje dokładne proporcje oryginalnego projektu.',
          con: 'Podkroje pach mogą wymagać lekkiego ręcznego wygładzenia.',
        },
        {
          pro: 'Błyskawiczne obliczenie niezbędnego luzu.',
          con: 'Nie wykrywa automatycznie, czy wykrój zawiera już naddatek na szew.',
        },
        {
          pro: 'Graficzna wizualizacja powiększania elementu.',
          con: 'Wymaga bardzo precyzyjnego początkowego pobrania miary.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Różnicowy', definition: 'Różnica miary między dwoma kolejnymi rozmiarami.' },
        { term: 'Punkty zakotwiczenia', definition: 'Strefy wykroju, które się nie poruszają (zwykle środek przodu/tyłu).' },
        { term: 'Siatka stopniowania (Grading Nest)', definition: 'Rysunek nałożonych na siebie wszystkich przeskalowanych rozmiarów.' },
        { term: 'Wykrój bazowy', definition: 'Szablon bez projektu i luzu, odpowiadający wymiarom ciała.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'SYSTEM PRACY',
    modeStandard: 'Rozmiary Standardowe',
    modeCustom: 'Wymiary Rzeczywiste',
    labelPatternSize: 'Rozmiar Wykroju',
    labelTargetSize: 'Rozmiar Docelowy',
    labelOriginMeasures: 'WYMIARY ŹRÓDŁOWE',
    labelTargetMeasures: 'TWOJE WYMIARY',
    labelEase: 'Aktualny Luz (Ease)',
    labelChest: 'Klatka piersiowa',
    labelWaist: 'Talia',
    labelHips: 'Biodra',
    labelLength: 'Długość',
    resBust: 'Biust',
    resWaist: 'Talia',
    resHips: 'Biodra',
    resLength: 'Długość',
    actionLatAdd: 'Dodaj',
    actionLatRemove: 'Odejmij',
    actionLatSuffix: 'na boku elementu',
    actionLatNote: 'Dopasowanie na ćwiartkę wykroju',
    actionLenExtend: 'Wydłuż wykrój',
    actionLenShorten: 'Skróć wykrój',
    actionLenNote: 'Dopasowanie na linii dołu',
    legendOriginal: 'Oryginalny',
    legendUpdated: 'Zaktualizowany',
    warnText: 'Skalowanie powyżej 3 rozmiarów. Ryzyko deformacji podkroju pachy.',
    sizePrefix: 'Rozmiar',
  },
};
