import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'chemiczny-protokol-plam-tekstylnych';
const title = 'Chemiczny Protokół Usuwania Plam Tekstylnych';
const description =
  'Naukowe protokoły usuwania plam w zależności od rodzaju włókna i chemicznej natury plamy. Nadwęglan, enzymy, rozpuszczalniki: właściwa metoda dla każdego przypadku.';

const faqData = [
  {
    question: 'Czy mogę użyć wybielacza zamiast nadwęglanu?',
    answer:
      'Wybielacz (podchloryn sodu) jest wysoce korozyjny. Degraduje włókna, powodując ich żółknięcie i kruchość. Nadwęglan wybiela dzięki aktywnemu tlenowi, szanując naturalną strukturę molekularną.',
  },
  {
    question: 'Dlaczego ocet pomaga na zapachy?',
    answer:
      'Zapachy ciała są zazwyczaj zasadowe. Kwas octowy zawarty w occie neutralizuje je, przekształcając w bezwonne sole, które są całkowicie usuwane podczas płukania.',
  },
  {
    question: 'Czy zawsze należy używać zimnej wody do plam z krwi?',
    answer:
      'Tak. Ciepło powoduje koagulację białek krwi, trwale wiążąc je z włóknem. Zimna woda utrzymuje plamę w stanie rozpuszczalnym i pozwala środkom enzymatycznym działać skutecznie.',
  },
  {
    question: 'Co się stanie, jeśli nałożę aceton na odzież z octanu?',
    answer:
      'Aceton rozpuszcza trioctan i octan (acetat). Włókna octanowe to celuloza estryfikowana kwasem octowym i są one całkowicie rozpuszczalne w acetonie. Rezultatem byłoby nieodwracalne zniszczenie tkaniny.',
  },
];

const howToData = [
  {
    name: 'Zidentyfikuj rodzaj włókna',
    text: 'Sprawdź wewnętrzną etykietę odzieży, aby dowiedzieć się, czy jest to włókno naturalne, syntetyczne czy szlachetne (wełna, jedwab, kaszmir).',
  },
  {
    name: 'Wybierz włókno w narzędziu',
    text: 'Wybierz odpowiedni materiał w pierwszym selektorze.',
  },
  {
    name: 'Wybierz rodzaj plamy',
    text: 'Wskaż, czy plama jest organiczna (wino, owoce), białkowa (krew), tłusta czy syntetyczna (atrament).',
  },
  {
    name: 'Zastosuj wskazany protokół',
    text: 'Postępuj zgodnie z instrukcjami dotyczącymi środka, temperatury i metody. Zwróć szczególną uwagę na krytyczne ostrzeżenia.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Chemiczny Protokół Plam',
    fiberLabel: '1. Włókno',
    selectFiberPlaceholder: 'Wybierz tkaninę...',
    stainLabel: '2. Plama',
    selectStainPlaceholder: 'Co się stało?',
    molecularDiagnosis: 'Diagnoza Molekularna',
    requiredAgent: 'Wymagany Środek',
    thermalCondition: 'Warunek Termiczny',
    temperature: 'Temperatura',
    cleaningInstructions: 'Instrukcje Czyszczenia',
    criticalWarning: 'Krytyczna Ostrożność',
    criticalWarningLabel: 'UWAGA',
    technicalNote: 'Nota techniczna',
    technicalNoteText:
      'Zawsze sprawdzaj trwałość barwnika w niewidocznym miejscu przed przystąpieniem do pełnego zabiegu chemicznego.',
    systemDiagnosis: 'System Diagnozy',
    systemDiagnosisDesc:
      'Skonfiguruj parametry tekstylne, aby otrzymać mapę drogową czyszczenia',
    delicatePercarbonateWarning:
      'RYZYKO DEGRADACJI MOLEKULARNEJ. Włókna zwierzęce wysoce wrażliwe na nadwęglan. Wykonaj test w niewidocznym miejscu.',
    fiberData: {
      cotton: { name: 'Bawełna', family: 'natural', isNoble: false },
      linen: { name: 'Len', family: 'natural', isNoble: true },
      wool: { name: 'Wełna / Merino', family: 'natural', isNoble: true },
      silk: { name: 'Jedwab', family: 'natural', isNoble: true },
      cashmere: { name: 'Kaszmir', family: 'natural', isNoble: true },
      mohair: { name: 'Mohair', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpaka', family: 'natural', isNoble: true },
      polyester: { name: 'Poliester', family: 'synthetic', isNoble: false },
      viscose: { name: 'Wiskoza / Rayon', family: 'artificial', isNoble: false },
      nylon: { name: 'Nylon (Poliamid)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Akryl', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Nadwęglan Sodu',
        description: 'Biodegradowalny wybielacz tlenowy. Uwalnia aktywny tlen podczas rozpuszczania.',
        warning: 'Unikać na włóknach białkowych (jedwab, wełna) w wysokich stężeniach.',
      },
      isopropyl: {
        name: 'Alkohol Izopropylowy',
        description: 'Skuteczny rozpuszczalnik dla pigmentów i lekkich tłuszczów.',
        warning: 'Może uszkodzić połysk jedwabiu i rozpuścić niektóre akryle, jeśli nie zostanie rozcieńczony.',
      },
      acetone: {
        name: 'Aceton',
        description: 'Potężny rozpuszczalnik do lakierów i klejów.',
        warning: 'ZABRONIONY na octanach i trioctanach (rozpuszcza włókno).',
      },
      enzyme: {
        name: 'Detergent Enzymatyczny',
        description: 'Zawiera proteazy, które rozkładają plamy biologiczne.',
        warning: 'Stosować ostrożnie na wełnie i jedwabiu (są to białka).',
      },
      vinegar: {
        name: 'Biały Ocet',
        description: 'Łagodny kwas octowy do neutralizacji zapachów i utrwalania kolorów.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Czerwone Wino / Owoce',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Długotrwałe moczenie' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Bezpośrednia pasta' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Zimna',
            method: 'Płukanie wodą gazowaną z octem',
            notes: 'Nie pocierać',
          },
        },
      },
      {
        id: 'blood',
        name: 'Krew',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Zimna',
            method: 'Moczenie w słonej wodzie, a następnie enzym',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Zimna', method: 'Bezpośrednia aplikacja' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Zimna',
            method: 'Natychmiastowe płukanie, unikać ciepła',
          },
        },
      },
      {
        id: 'grease',
        name: 'Tłuszcz / Olej',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Rozpuścić alkoholem, a następnie wyprać',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Podłożyć papier chłonny pod spód',
          },
          delicate: { agentId: 'isopropyl', temperature: 'Zimna', method: 'Rozcieńczyć alkohol do 50%' },
        },
      },
      {
        id: 'ink',
        name: 'Atrament / Marker',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Otoczenia',
            method: 'Osuszać od zewnątrz do wewnątrz',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Otoczenia',
            method: 'Ostrożnie z rozprzestrzenianiem plamy',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Zimna',
            method: 'Rozcieńczyć i przetestować w ukrytym miejscu',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Chemia Stojąca za Czyszczeniem Tekstyliów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nie wszystkie plamy są równe i nie wszystkie włókna reagują tak samo na te same środki chemiczne. Różnica między uratowaniem odzieży a jej zniszczeniem polega na zrozumieniu molekularnej natury plamy i struktury włókna.',
    },
    {
      type: 'card',
      title: '01 — Kontrolowane Utlenianie',
      icon: 'mdi:atom',
      html: '<strong>Nadwęglan sodu</strong> uwalnia aktywny tlen, który rozrywa podwójne wiązania chromoforów (cząsteczek odpowiedzialnych za kolor plamy), czyniąc je bezbarwnymi i rozpuszczalnymi w wodzie. Jest to najskuteczniejsza metoda na plamy organiczne.',
    },
    {
      type: 'card',
      title: '02 — Solubilizacja przez Rozpuszczalniki',
      icon: 'mdi:flask-outline',
      html: 'Plamy takie jak olej czy atrament nie rozpuszczają się w wodzie. Rozpuszczalniki, takie jak <strong>alkohol izopropylowy</strong> lub <strong>aceton</strong>, zmniejszają napięcie powierzchniowe i przyciągają niepolarne cząsteczki plamy, pozwalając im przenieść się na podłoże pomocnicze.',
    },
    {
      type: 'title',
      text: 'Władza nad Włóknami: Dlaczego Rodzaj ma Znaczenie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nie wszystkie włókna "jedzą" tak samo. <strong>Jedwab i wełna</strong> to białka (fibroina i keratyna). Jeśli bez kontroli zastosujesz detergent enzymatyczny przeznaczony do "zjadania białek" (plamy z krwi lub jajka), detergent zacznie degradować samo włókno, niszcząc połysk i strukturę tkaniny.',
    },
    {
      type: 'title',
      text: 'Niebezpieczeństwo Ciepła',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jednym z najczęstszych błędów jest używanie gorącej wody do "zmiękczenia" plamy z krwi. Chemicznie rzecz biorąc, ciepło powoduje <strong>koagulację białek</strong> plamy, trwale osadzając je w porowatej strukturze włókna. Plamy białkowe należy zawsze traktować zimną wodą.',
    },
    {
      type: 'tip',
      title: 'Protokół Ratunkowy: Czerwone Wino',
      html: '<strong>A. Pasywna absorpcja:</strong> Osuszać papierem chłonnym, nigdy nie pocierać, aby uniknąć mechanicznego rozprzestrzeniania.<br><strong>B. Neutralizacja osmotyczna:</strong> Przykryć drobną solą, aby wyciągnąć płyn z wnętrza włókna.<br><strong>C. Działanie chemiczne:</strong> Nałożyć pastę z nadwęglanu i wody o temperaturze 40°C, jeśli włókno jest odporne na ciepło.',
    },
    {
      type: 'title',
      text: 'Specyficzne Rozpuszczalniki i Środki Ostrożności',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Aceton</strong> jest wyjątkowym rozpuszczalnikiem do lakierów do paznokci lub klejów, ale niszczy <strong>octany</strong>. Ponieważ są to włókna pochodne celulozy, ale poddane obróbce chemicznej, aceton dosłownie rozpuszcza tkaninę.',
    },
    {
      type: 'paragraph',
      html: '<strong>Alkohol izopropylowy</strong> jest stabilniejszy, ale na barwionych syntetykach może wyciągać sam pigment. Przed głównym zabiegiem zawsze zalecamy "test na rąbku" w niewidocznym miejscu.',
    },
  ],
  faqTitle: 'Najczęściej Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'AATCC - Association for Advancing Color Technology and Chemistry',
      url: 'https://www.aatcc.org',
    },
    {
      name: 'Kissa, E. — Textile Auxiliaries',
      url: 'https://www.springer.com/gp/book/9783642057328',
    },
    {
      name: 'ISO 105 — Textiles: Tests for Colour Fastness',
      url: 'https://www.iso.org/standard/72682.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
