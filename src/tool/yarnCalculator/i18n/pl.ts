import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'kalkulator-wloczki-dzierganie';
const title = 'Kalkulator Włóczki: Ile metrów i motków potrzebuję?';
const description =
  'Oblicz precyzyjnie ilość wełny lub włóczki potrzebnej do Twoich projektów na drutach lub szydełku na podstawie wzoru i rozmiaru.';

const faqData = [
  {
    question: 'Dlaczego szydełkowanie zużywa więcej włóczki niż robienie na drutach?',
    answer:
      'Szydełkowanie opiera się na tworzeniu węzłów i nakładających się pętli, co generuje gęstszą i grubszą dzianinę na centymetr kwadratowy. Średnio projekt na szydełku zużywa od 25% do 35% więcej włóczki niż ten sam projekt wykonany na drutach (ściegiem pończoszniczym).',
  },
  {
    question: 'Co się stanie, jeśli kupię włóczkę z różnych partii farbowania (Dye Lot)?',
    answer:
      'Nawet jeśli kolor wydaje się identyczny w sklepie, minimalne różnice chemiczne podczas farbowania mogą tworzyć widoczne "pasy" na gotowym wyrobie. Zdecydowanie zaleca się kupowanie całej włóczki naraz, sprawdzając, czy kod partii jest taki sam.',
  },
  {
    question: 'Jak naprężenie (gauge) wpływa na ostateczne zużycie?',
    answer:
      'Jeśli dziergasz luźno, każde oczko zużywa więcej metrów nitki. Jeśli Twoja próbka obliczeniowa jest większa niż wskazuje wzór (np. 13 oczek zamiast 15), zużycie włóczki znacznie wzrośnie. Wykonanie próbki kontrolnej przed rozpoczęciem jest kluczowe.',
  },
  {
    question: 'Jak obliczyć metry, jeśli mam tylko wagę motka?',
    answer:
      'Bez danych o metrażu jest to trudne. Większość motków posiada informację o metrach na etykiecie. Jeśli jej nie ma, poszukaj nazwy włóczki w bazach danych takich jak Ravelry, aby znaleźć dokładną długość na każde 50g lub 100g.',
  },
];

const howToData = [
  {
    name: 'Wybierz projekt',
    text: 'Wybierz spomiędzy swetra, szalika, czapki, skarpetek lub koca, aby załadować specyficzne bazy zużycia.',
  },
  {
    name: 'Zdefiniuj rozmiar i grubość',
    text: 'Wskaż ostateczne wymiary (S, M, L, XL) oraz grubość nitki, której będziesz używać (Fingering, DK, Worsted, Bulky).',
  },
  {
    name: 'Aktywuj mnożniki',
    text: 'Jeśli Twój wzór posiada warkocze lub złożone tekstury, włącz przełącznik tekstur, aby dodać niezbędny naddatek.',
  },
  {
    name: 'Otrzymaj listę zakupów',
    text: 'Wpisz metry na motek wybranej włóczki, aby zobaczyć dokładnie, ile sztuk musisz włożyć do koszyka.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Craft Yarn Council: Standard Yarn Weights & Yardages',
      url: 'https://www.craftyarncouncil.com/standards/yarn-weight-system',
    },
    {
      name: 'Interweave Essentials: Yarn Substitution and Estimation',
      url: 'https://www.interweave.com/article/knitting/yarn-substitution-angelina-take-two/',
    },
    {
      name: 'The Woolery: Fibers and Calculation of Yarn Usage',
      url: 'https://woolery.com/blogs/the-woolery-blog/yarn-weight-charts-helpful-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Przewodnik Zużycia Włóczki: Jak obliczyć metry i motki do Twoich projektów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Opanuj logistykę dziergania i uniknij sytuacji, w której zabraknie Ci nitki, dzięki naszemu precyzyjnemu kalkulatorowi technicznemu na druty i szydełko. Jednym z największych lęków każdej osoby dziergającej jest <strong>"Yarn Chicken"</strong>: ten krytyczny moment pod koniec projektu, kiedy wydaje się, że nitka skończy się przed zamknięciem ostatnich oczek. Kalkulator ten został opracowany, aby oferować szacunki oparte na standardach przemysłowych metrażu i gramatury.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Margines Bezpieczeństwa', icon: 'mdi:security' },
        { value: 'Metryczny', label: 'Obliczenia w Metrach', icon: 'mdi:ruler' },
        { value: 'Offline', label: 'Lokalna Baza Danych', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Dlaczego gramatura motków jest myląca?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wielu początkujących popełnia błąd, kupując włóczkę wyłącznie na podstawie wagi (np. "6 motków po 100g"). Jednak waga jest jednostką masy, a nie długości. Dwie włóczki ważące po 100g mogą mieć radykalnie różne długości: włóczka typu <strong>Bulky</strong> może mieć tylko 80 metrów, podczas gdy <strong>Fingering / Lace</strong> może przekraczać 450 metrów przy tej samej wadze.',
    },
    {
      type: 'paragraph',
      html: 'Dlatego nasz kalkulator zawsze priorytetyzuje <strong>całkowitą liczbę metrów</strong>. Gdy już znasz długość potrzebną dla Twojego rozmiaru i projektu, możesz ją podzielić przez metraż wskazany na etykiecie konkretnego motka, aby otrzymać dokładną liczbę sztuk, które musisz nabyć.',
    },
    {
      type: 'title',
      text: 'Tabela Standardowych Metraży według Grubości',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeśli nie masz pod ręką etykiety, możesz użyć tych metraży referencyjnych (na każde 100g włókna) do swoich szacunków:',
    },
    {
      type: 'table',
      headers: ['Grubość (Weight)', 'Metry ok. / 100g', 'Zalecane Zastosowanie', 'Sugerowane Druty'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Chusty ażurowe, koronki', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Skarpetki, ubranka dziecięce', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Lekkie sweterki', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Swetry, czapki', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Koce, płaszcze', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'Szaliki XXL, koce', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Czynnik Naprężenia (Gauge)',
      html: '<p>Pamiętaj, że jeśli dziergasz bardzo luźno, Twoje oczka będą większe i zużyją więcej nitki niż w przypadku ścisłego dziergania. Nasz kalkulator stosuje margines bezpieczeństwa, ale jeśli wiesz, że Twoje naprężenie jest ekstremalnie luźne, rozważ dodanie dodatkowych 5-10% do wyników, aby uniknąć niespodzianek.</p>',
    },
    {
      type: 'title',
      text: 'Zmienne zwiększające zużycie nitki',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nie wszystkie ściegi zużywają tę samą ilość włókna. Wybierając swój wzór, weź pod uwagę te czynniki mnożnikowe:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ścieg Pończoszniczy / Jersey',
          description: 'Reprezentuje bazowe zużycie i maksymalną wydajność nitki dla dowolnej odzieży.',
          icon: 'mdi:minus-circle-outline',
          points: ['Idealny dla początkujących', 'Naturalny układ dzianiny'],
        },
        {
          title: 'Warkocze / Tekstura',
          description: 'Krzyżowanie włókien "skraca" element, zwiększając zużycie o około 25%.',
          icon: 'mdi:texture-box',
          points: ['Wymaga więcej metrów', 'Gęstsza i cięższa dzianina'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Szydełkowanie (Crochet)',
          description: 'Węzły szydełkowe zużywają o 30% więcej nitki niż robótka na drutach.',
          icon: 'mdi:hook',
          points: ['Szybsze ubywanie motków', 'Trójwymiarowa tekstura'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Ścieg ściągaczowy',
          description: 'Struktura prawo/lewo gromadzi więcej włóczki na cm kwadratowy.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Zużycie pośrednie (+15%)', 'Wysoka elastyczność'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Glosariusz Przezornego Dziergacza',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (Partia farbowania)',
          definition:
            'Numer identyfikujący kadź, w której farbowano wełnę. Różne partie mogą mieć różnice kolorystyczne niewidoczne w motku, ale bardzo widoczne na gotowym wyrobie.',
        },
        {
          term: 'Stash (Zapas)',
          definition:
            'Osobista kolekcja włóczek dziergacza. Identyfikacja wagi resztek bez etykiety jest kluczowa przy obliczaniu małych projektów.',
        },
        {
          term: 'Put-up',
          definition:
            'Sposób prezentacji włóczki (pasmo, motek lub stożek), co wpływa na to, czy wymaga ona zwinięcia przed użyciem.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'Wyzwanie polegające na próbie ukończenia sekcji dziergania z ilością nitki, która wydaje się niewystarczająca.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak korzystać z wyników tego kalkulatora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gdy narzędzie poda liczbę metrów i motków, zalecamy wykonanie następujących kroków ręcznej weryfikacji:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sprawdź metraż swojego rzeczywistego motka:</strong> Nie każdy motek 100g ma 200m. Sprawdź te dane na etykiecie, aby skorygować ostateczne obliczenie.',
        '<strong>Dodaj metraż na detale:</strong> Jeśli dodajesz frędzle do szalika lub pompony do czapki, dodaj ekstra 50-80 metrów do całości.',
        '<strong>Próbka obliczeniowa:</strong> Zrób kwadrat 10x10 cm. Zważ go na wadze precyzyjnej. Jeśli waży 20g, a Twój koc ma 100x100 (100 kwadratów), będziesz potrzebować dokładnie 2kg włóczki.',
        '<strong>Kupuj zawsze z tej samej partii:</strong> Jeśli obliczenie mówi 7 motków, kup 8, aby mieć zapas na szwy lub wypadek różnic w partiach.',
      ],
    },
    {
      type: 'summary',
      title: 'Strategiczne Porady dot. Zakupu Włóczki',
      items: [
        'Priorytetyzuj metry nad gramami, aby zapewnić potrzebną długość.',
        'Szydełkowanie zużywa znacznie więcej włóczki niż druty; dostosuj selektor typu.',
        'Gęste tekstury (warkocze) wymagają zwiększenia budżetu nitki o 25%.',
        'Zawsze zachowuj etykietę z każdej partii na wypadek konieczności dokupienia koloru.',
        'Wykorzystaj 10% marginesu bezpieczeństwa na dzierganie obowiązkowej próbki.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. TYP PROJEKTU',
    sectionSize: '2. WYMIARY / ROZMIAR',
    sectionWeight: '3. GRUBOŚĆ NITKI',
    sectionPattern: '4. CECHY WZORU',
    sectionBall: '5. DANE MOTKA',
    labelCables: 'Warkocze lub gęste tekstury?',
    labelGrams: 'GRAMY / MOTEK',
    labelMeters: 'METRY / MOTEK',
    weightFine: 'Cienka',
    weightMedium: 'Średnia',
    weightThick: 'Gruba',
    weightXXL: 'XXL',
    projectSweater: 'SWETER',
    projectScarf: 'SZALIK',
    projectHat: 'CZAPKA',
    projectSocks: 'SKARPETKI',
    projectBlanket: 'KOC',
    projectCardigan: 'KARDIGAN',
    statPrefix: 'SZACOWANE CAŁKOWITE ZUŻYCIE',
    statSuffix: 'M',
    statNote: 'Ostateczny metraż obliczony z 10% zapasem bezpieczeństwa.',
    ballsFormatSingular: 'Kup {n} motek',
    ballsFormatPlural: 'Kup {n} motki/motków',
    ballsDetailFormat: 'Motki po {w}g / {m}m każdy.',
    alertTitle: 'Strategiczne bezpieczeństwo:',
    alertText:
      'To obliczenie gwarantuje już, że nie zabraknie Ci nitki. Pamiętaj o sprawdzeniu numeru partii (dye lot) przy zakupie motków.',
    schemeSleeveLabel: 'Rękawy',
    schemeSleeveEach: 'szt.',
    schemeBodyLabel: 'Korpus',
    schemeTotalHat: 'Łącznie Czapka',
    schemeTotalFlat: 'Łącznie Element',
    schemeTotalSocks: 'Łącznie Para',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Dziecko', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Duży', 'Maxi'],
      socks: ['Dziecko', 'Doro. S', 'Doro. M', 'Doro. L'],
      blanket: ['Niemowlę', 'Sofa', 'Łóżko 90', 'Łóżko 150'],
    },
  },
};
