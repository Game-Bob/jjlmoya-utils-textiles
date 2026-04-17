import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'prawda-tekstylna-analiza-wlokien';
const title = 'Prawda Tekstylna: Analiza Jakości Włókien';
const description = 'Odkryj prawdziwą jakość swoich ubrań, analizując ich skład. Czy to prawdziwa bawełna czy drogi plastik? Naukowa analiza włókien.';

const faqData = [
  {
    question: 'Czym jest "Greenwashing" w modzie?',
    answer: 'To technika marketingowa, w której marki używają terminów takich jak "Ekologiczny" lub "Zrównoważony" bez realnych dowodów. Analiza rzeczywistego składu włókien jest jedynym sposobem na zweryfikowanie, czy odzież jest naprawdę naturalna czy syntetyczna.',
  },
  {
    question: 'Dlaczego poliester jest często niższej jakości niż bawełna?',
    answer: 'Poliester to plastik (PET). Chociaż jest trwały, nie oddycha, sprzyja nieprzyjemnemu zapachowi spowodowanemu przez bakterie i generuje mikroplastik przy każdym praniu. Włókna naturalne, takie jak bawełna czy len, oferują lepszą regulację termiczną.',
  },
  {
    question: 'Czy to źle, jeśli moje ubrania zawierają elastan?',
    answer: 'W małych ilościach (1-5%) elastan (Lycra) zapewnia wygodę i dopasowanie. Jednakże ogromnie utrudnia on recykling odzieży poprzez mieszanie plastiku z włóknami naturalnymi, co zazwyczaj wskazuje na odzież typu "fast fashion".',
  },
  {
    question: 'Jak rozpoznać odzież wysokiej jakości po metce?',
    answer: 'Szukaj składów monomateriałowych (100% Bawełna, 100% Wełna). Złożone mieszanki są często używane w celu obniżenia kosztów produkcji i ukrywają włókna syntetyczne pod atrakcyjnymi nazwami handlowymi.',
  },
];

const howToData = [
  {
    name: 'Znajdź wewnętrzną metkę',
    text: 'Poszukaj białej metki ze składem, która zazwyczaj znajduje się na wewnętrznym boku lub przy kołnierzu ubrania.',
  },
  {
    name: 'Zidentyfikuj składniki',
    text: 'Odczytaj procentową zawartość każdego włókna (np. 70% Bawełna, 30% Poliester).',
  },
  {
    name: 'Wprowadź dane do analizatora',
    text: 'Wpisz proporcje włókien do naszego narzędzia, aby uzyskać techniczną ocenę jakości.',
  },
  {
    name: 'Zinterpretuj diagnozę',
    text: 'Przejrzyj wygenerowany raport, aby dowiedzieć się, czy Twoje ubranie jest przewiewne, trwałe lub czy wymaga specjalnej pielęgnacji ze względu na syntetyczny skład.',
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
  description: description,
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
  description: description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Prawda Tekstylna',
    addFiber: 'Dodaj włókno',
    total: 'Suma',
    composition: 'Analiza składu',
    description: 'Wprowadź wartości procentowe dokładnie tak, jak widnieją na metce Twojego ubrania, aby odkryć prawdę o jego jakości.',
    verdict: 'Werdykt',
    breathability: 'Przewiewność',
    durability: 'Trwałość',
    warmth: 'Ciepłota',
    careWarning: 'Ostrzeżenie o specjalnej pielęgnacji',
    specialCareWarning: 'PRANIE STANDARDOWE: Zawsze postępuj zgodnie z instrukcjami na fizycznej metce.',
    validationError: 'Skład musi sumować się do dokładnie 100%, aby zobaczyć werdykt',
    actualTotal: 'Aktualnie',
    missingLabel: 'brakuje',
    disclaimer: 'Dane dotyczące przewiewności, trwałości i ciepłoty są szacunkami opartymi na średnich branżowych dla każdego typu włókna.',
    careWarnings: {
      delicate: 'BARDZO DELIKATNE: Prać ręcznie w zimnej wodzie. Nie używać suszarki bębnowej. Unikać silnego wyżymania.',
      wool: 'WEŁNA / SZLACHETNA SIERŚĆ: Prać w zimnej wodzie przy użyciu specjalnego programu. Suszyć na płasko, aby uniknąć odkształceń. Nie używać suszarki.',
      linen: 'LEN: Ma tendencję do silnego gniecenia się. Prasować lekko wilgotne dla uzyskania najlepszych efektów.',
      semisynthetic: 'PÓŁSYNTETYKI: Włókno słabnie po zmoczeniu. Obchodzić się ostrożnie i nie wirować mocno.',
      standard: 'PRANIE STANDARDOWE: Zawsze postępuj zgodnie z instrukcjami na fizycznej metce.',
    },
    fiberData: {
      cotton: {
        name: 'Bawełna',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Len',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Wełna / Merino',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'Jedwab',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Kaszmir',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: 'Moher',
        family: 'natural',
        breathability: 8,
        durability: 9,
        warmth: 9,
        isNoble: true,
      },
      angora: {
        name: 'Angora',
        family: 'natural',
        breathability: 8,
        durability: 4,
        warmth: 10,
        isNoble: true,
      },
      alpaca: {
        name: 'Alpaka',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: 'Poliester',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: 'Wiskoza / Rajon',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'Nylon (Poliamid)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: 'Akryl',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: 'Drogi plastik',
        description: 'Większość tego ubrania to ropa naftowa. Przygotuj się na pocenie się i szybkie powstawanie kuleczek (pilling).',
      },
      hook: {
        label: 'Haczyk marketingowy',
        description: 'Ten niewielki procent szlachetnego włókna jest tam tylko po to, by wpisać go na metkę. Nie odczujesz jego zalet.',
      },
      fragile: {
        label: 'Miękkie, ale kruche',
        description: 'Bardzo przyjemne w dotyku, ale uważaj przy praniu: ma tendencję do łatwego odkształcania się i kurczenia.',
      },
      natural: {
        label: 'Naturalna jakość',
        description: 'Odzież przewiewna i trwała. Idealna dla wrażliwej skóry i długiego użytkowania.',
      },
      technical: {
        label: 'Odzież techniczna / Ultra-syntyczna',
        description: 'O ile nie jest to specjalistyczna odzież sportowa, płacisz za czysty plastik.',
      },
      luxury: {
        label: 'Prawdziwy luksus',
        description: 'Inwestycja w komfort i trwałość. Traktuj to ubranie z szacunkiem, na jaki zasługuje.',
      },
      balanced: {
        label: 'Zrównoważona mieszanka',
        description: 'Funkcjonalne połączenie, prawdopodobnie mające na celu zbalansowanie kosztów i trwałości.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'Prawda ukryta za metką: Przewodnik po składzie tekstyliów', level: 2 },
    { type: 'paragraph', html: 'Czy zastanawiałeś się kiedyś, dlaczego ta markowa koszulka sprawia, że tak bardzo się pocisz, albo dlaczego ten "wełniany" sweter tak nieznośnie gryzie? Odpowiedź nie tkwi w fasonie, lecz w chemii jego włókien.' },
    { type: 'paragraph', html: 'W świecie zdominowanym przez <strong>Fast Fashion</strong>, jakość tkanin zeszła na dalszy plan przed ulotną estetyką. Jednak zrozumienie składu tekstyliów to jedyny sposób na dokonanie inteligentnego, trwałego i przyjaznego dla skóry zakupu. Nasze narzędzie <strong>Prawda Tekstylna</strong> analizuje oficjalne wartości procentowe, aby wyjawić Ci, czy masz przed sobą odzież wysokiej jakości, czy po prostu blok przetworzonego plastiku.' },
    { type: 'title', text: 'Nasza metodologia', level: 2 },
    { type: 'paragraph', html: 'Używamy ważonego algorytmu opartego na trzech fundamentalnych filarach zaczerpniętych z europejskich i północnoamerykańskich standardów branżowych:' },
    { type: 'list', items: ['<strong>Przewiewność:</strong> Zdolność włókna do przepuszczania pary wodnej i powietrza.', '<strong>Trwałość:</strong> Odporność na ścieranie, rozciąganie i powstawanie <strong>pillingu</strong> (kuleczek).', '<strong>Efektywność termiczna:</strong> Zdolność do zatrzymywania ciepła lub mechanicznego chłodzenia.'] },
    { type: 'tip', title: 'Ważne', html: 'Prawo wymaga, aby każda odzież sprzedawana w UE i USA wymieniała swoje składniki w kolejności malejącej według procentowości. Jeśli ubranie nie posiada metki lub jest ona nieczytelna, zachowaj czujność: prawdopodobnie nie spełnia ono minimalnych standardów bezpieczeństwa wyrobów włókienniczych.' },
    { type: 'title', text: 'Typowe "oszustwa" w handlu detalicznym', level: 2 },
    { type: 'paragraph', html: 'Istnieją bardzo wyrafinowane techniki marketingowe zaprojektowane w celu podniesienia postrzeganej wartości przeciętnego ubrania. Tutaj nauczymy Cię, jak je wykrywać:' },
    { type: 'card', title: 'Haczyk na szlachetne włókno', icon: 'mdi:alert', html: 'Zobaczysz metki z napisami "Z KASZMIRZEM" lub "Z JEDWABIEM" wielkimi literami. Patrząc na skład, odkrywasz 3% jedwabiu i 97% poliestru. Te 3% nie zapewnia miękkości, blasku ani ciepła; służy jedynie temu, by marka mogła podnieść cenę o 20%.' },
    { type: 'card', title: 'Mit "ekologicznej wiskozy"', icon: 'mdi:leaf', html: 'Chociaż wiskoza pochodzi z celulozy (drewna), jej obecny proces produkcji jest często silnie zanieczyszczający, a efektem końcowym jest włókno, które drastycznie słabnie po zmoczeniu. O ile nie jest to <strong>Lyocell</strong> lub <strong>Tencel</strong>, jego trwałość jest ograniczona.' },
    { type: 'title', text: 'Głęboka analiza według kategorii', level: 2 },
    { type: 'title', text: '1. Włókna naturalne (Dumnie organiczne)', level: 3 },
    { type: 'paragraph', html: 'Są złotym standardem. <strong>Bawełna</strong> długowłóknista (taka jak Pima czy egipska) oferuje wieczną miękkość. <strong>Len</strong> jest naukowo najlepszym włóknem na upały ze względu na swoją strukturę molekularną, która odbija ciepło i pochłania wilgoć. <strong>Wełna</strong> i <strong>Konopie</strong> są naturalnie antybakteryjne; nie wymagają tak częstego prania, ponieważ nie zatrzymują zapachów.' },
    { type: 'title', text: '2. Włókna półsyntetyczne (Hybrydy)', level: 3 },
    { type: 'paragraph', html: 'Tutaj znajdziemy <strong>Wiskozę</strong>, <strong>Rajon</strong> i <strong>Modal</strong>. W dotyku przypominają jedwab, ale kosztują tyle co bawełna. Są doskonałe do ubrań o dużej leistości, ale są "spragnione": chłoną dużo wody i długo schną, co przy braku odpowiedniej pielęgnacji może sprzyjać powstawaniu pleśni. <strong>Lyocell (Tencel)</strong> to wersja premium i zrównoważona z tej grupy, o zamkniętym cyklu produkcyjnym i wyższej wytrzymałości.' },
    { type: 'title', text: '3. Włókna syntetyczne (Przędzony plastik)', level: 3 },
    { type: 'paragraph', html: '<strong>Poliester</strong> jest królem rynku. Jest tani, nie gniecie się i jest wieczny (dosłownie, jego rozkład zajmie 200 lat). Problemem jest to, że nie oddycha. Tworzy wilgotny mikroklimat między tkaniną a skórą, idealną pożywkę dla bakterii. <strong>Akryl</strong> to tania imitacja wełny: grzeje, ale generuje dużo ładunków elektrostatycznych i po dwóch praniach pokrywa się kuleczkami.' },
    { type: 'title', text: 'Porady dotyczące przetrwania tekstyliów', level: 2 },
    { type: 'paragraph', html: 'Nawet najlepsze ubranie na świecie może zostać zniszczone przez jedno niewłaściwe pranie. Oto uniwersalne złote zasady:' },
    { type: 'tip', title: 'Zimna woda to Twój przyjaciel', html: '90% ubrań nie potrzebuje temperatury wyższej niż 30°C. Ciepło degraduje włókna elastyczne i kurczy naturalne.' },
    { type: 'tip', title: 'Mniej znaczy więcej (Detergent)', html: 'Nadmiar mydła pozostawia osady, które przyciągają brud i sprawiają, że ubrania stają się sztywne.' },
    { type: 'tip', title: 'Suszarka: Subtelny wróg', html: 'Kłaczki, które widzisz w filtrze suszarki, to kawałki Twoich ubrań, które oddzieliły się w wyniku tarcia i wysokiej temperatury.' },
    { type: 'tip', title: 'Pranie na lewej stronie', html: 'Chroni kolor i hafty przed ocieraniem o bęben i inne ubrania.' },
    { type: 'paragraph', html: '"Kupuj mniej, wybieraj lepiej i spraw, by służyło długo." — Ten analizator to Twój pierwszy krok w stronę świadomej i wysokiej jakości garderoby.' },
  ],
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'FTC - Przewodnik po etykietowaniu tekstyliów',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'Komisja Europejska - Regulacje dotyczące tekstyliów',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Symbole konserwacji tekstyliów',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
