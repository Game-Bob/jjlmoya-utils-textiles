import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'test-spalania-tekstyliow';
const title = 'Test Spalania Tekstyliów';
const description =
  'Zidentyfikuj rzeczywisty skład dowolnej tkaniny, analizując jej zachowanie podczas spalania. Naukowo odróżnij bawełnę, wełnę, jedwab i materiały syntetyczne.';

const faqData = [
  {
    question: 'Czy wykonanie testu spalania w domu jest bezpieczne?',
    answer:
      'Tak, o ile zachowasz szczególne środki ostrożności: używaj metalowej pęsety, pracuj na powierzchni ognioodpornej (ceramicznej lub metalowej), miej pod ręką wodę i wykonuj test w dobrze wentylowanym miejscu. Potrzebujesz tylko małej próbki 1x1 cm lub kilku nici.',
  },
  {
    question: 'Jak pachnie bawełna podczas spalania?',
    answer:
      'Bawełna to czysta celuloza. Podczas spalania pachnie dokładnie jak palony papier lub suche liście. Powstały popiół jest szary, bardzo drobny i rozsypuje się pod wpływem dotyku.',
  },
  {
    question: 'Co oznacza twarda, czarna kulka na końcu włókna?',
    answer:
      'To jednoznaczny znak obecności włókna syntetycznego (plastiku), takiego jak poliester lub nylon. Podczas topnienia polimer zbija się w plastikową perłę, która się nie kruszy, w przeciwieństwie do popiołu z włókien naturalnych.',
  },
  {
    question: 'Dlaczego wełna śmierdzi podczas spalania?',
    answer:
      'Wełna i jedwab to białka zwierzęce zawierające siarkę. W kontakcie z ogniem wydzielają przenikliwy zapach palonych włosów lub piór. To najprostszy sposób na odróżnienie ich od włókien roślinnych.',
  },
];

const howToData = [
  {
    name: 'Pobierz reprezentatywną próbkę',
    text: 'Wytnij mały kwadrat z tkaniny lub, jeszcze lepiej, wyciągnij kilka nici zarówno z osnowy (pionowej), jak i wątku (poziomego).',
  },
  {
    name: 'Obserwuj zbliżanie do płomienia',
    text: 'Powoli zbliżaj włókno do ognia, nie dotykając go. Obserwuj, czy się kurczy, topi, czy natychmiast zajmuje ogniem.',
  },
  {
    name: 'Analizuj rodzaj płomienia i dymu',
    text: 'Zwróć uwagę, czy płomień jest stały, czy sam gaśnie, oraz czy dym jest biały, czarny, czy w ogóle go nie ma.',
  },
  {
    name: 'Oceń pozostałość i zapach',
    text: 'Po ostygnięciu dotknij powstałego popiołu lub kulki i sprawdź zapach (papieru, włosów lub chemiczny), aby potwierdzić rodzinę włókien.',
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

const flame = {
  cellulosic: 'Pali się SZYBKO i JASNO (żółty płomień). Nie topi się. Pali się dalej po odsunięciu.',
  protein: 'Pali się POWOLI, skwierczy i KURCZY SIĘ przed płomieniem. Gaśnie samo po odsunięciu.',
  synthetic: 'TOPI SIĘ i gwałtownie kurczy, kapie jak roztopiony plastik. Płomień kopcący.',
};

const odor = {
  paper: 'Palony papier, drewno, suche liście.',
  hair: 'Palone włosy, palony róg, pióra.',
  chemical_sweet: 'Chemiczny AROMATYCZNY (słodki, owocowy).',
  chemical_fishy: 'Chemiczny KWAŚNY (ryba, pieczone mięso).',
  vegetable: 'Gotowane warzywa (seler).',
};

const residue = {
  ash_soft: 'Drobny SZARY/CZARNY popiół, miękki i lotny (rozsypuje się przy dotknięciu).',
  ash_shape: 'SZARY popiół zachowuje kształt włókna (kruchy).',
  bead_crushable: 'Pusta/krucha czarna masa (łatwo miażdży się w palcach).',
  bead_hard: 'TWARDA i szklista perła. Niemożliwa do przełamania w palcach.',
  bead_irregular: 'TWARDA i nieregularna czarna masa.',
};

const smoke = {
  white_gray: 'Biały / Jasnoszary.',
  gray: 'Średnioszary.',
  black: 'Gęsty, ciemny CZARNY dym.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
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
      text: 'Kryminalistyka Włókna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Test spalania to najszybsza i najbardziej precyzyjna metoda analityczna pozwalająca odróżnić polimery naturalne od syntetycznych bez użycia mikroskopu elektronowego. Poprzez poddanie włókna działaniu ciepła, jego zachowanie na poziomie molekularnym ujawnia jego pochodzenie: od celulozy roślinnej po białka zwierzęce czy pochodne ropy naftowej.',
    },
    {
      type: 'card',
      title: 'Włókna Celulozowe',
      icon: 'mdi:leaf',
      html: '<strong>Bawełna</strong> i <strong>Len</strong> palą się szybko bez topnienia. Pachną jak palony papier, ponieważ pochodzą z drewna lub roślin, pozostawiając lotny szary popiół, który rozprasza się przy dmuchnięciu.',
    },
    {
      type: 'card',
      title: 'Włókna Białkowe',
      icon: 'mdi:sheep',
      html: '<strong>Wełna</strong> i <strong>Jedwab</strong> odsuwają się od płomienia. Ich charakterystyczny zapach palonych włosów wskazuje na obecność siarki i keratyny. Pozostałością jest czarna kulka, która miażdży się przy dotknięciu.',
    },
    {
      type: 'card',
      title: 'Włókna Syntetyczne',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>Poliester</strong> i <strong>Nylon</strong> to w zasadzie tworzywa sztuczne. Topią się, tworząc gorącą kroplę, która twardnieje w szklistą perłę niemożliwą do przełamania, o ostrym chemicznym zapachu.',
    },
    {
      type: 'title',
      text: 'Matryca Dowodów Chemicznych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Precyzyjna analiza wymaga zestawienia co najmniej trzech dowodów. Zapach jest najbardziej wiarygodnym wskaźnikiem przy identyfikacji mieszanek: jeśli „lniana” tkanina wydziela lekki plastikowy aromat i pozostawia twarde resztki, oznacza to niezadeklarowaną domieszkę poliestru.',
    },
    {
      type: 'tip',
      title: 'Laboratoryjny Protokół Bezpieczeństwa',
      html: '<strong>Krytyczna wentylacja:</strong> Włókna syntetyczne podczas spalania uwalniają toksyczne gazy. Nigdy nie wykonuj tego testu w zamkniętych pomieszczeniach.<br><strong>Natychmiastowe gaszenie:</strong> Zawsze miej obok pojemnik z wodą. Niektóre włókna syntetyczne mogą się topić i przywierać do skóry.',
    },
  ],
  ui: {
    investigationLabel: 'DOCHODZENIE',
    stepPrefix: 'KROK',
    stepCompleted: 'ANALIZA ZAKOŃCZONA',
    resetLabel: 'RESTART',
    positiveId: 'IDENTYFIKACJA POZYTYWNA',
    flameLabel: 'Zachowanie Płomienia',
    odorLabel: 'Ślad Zapachowy',
    residueLabel: 'Pozostałość',
    identifiedAs: 'Próbka zidentyfikowana pozytywnie jako',
    safetyTitle: 'Protokół Bezpieczeństwa',
    safetyText:
      'Wykonuj ten test w wentylowanym miejscu, na ognioodpornej powierzchni. Używaj metalowej pęsety i miej pod ręką wodę.',
    questions: {
      flame: 'Zachowanie w płomieniu?',
      odor: 'Charakterystyczny zapach?',
      residue: 'Końcowa pozostałość?',
      smoke: 'Rodzaj dymu?',
    },
    fiberData: {
      cotton: { name: 'Bawełna', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Naturalne włókno roślinne, miękkie i oddychające. Król podstawowej garderoby.' },
      linen: { name: 'Len', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Bardzo mocne włókno roślinne, chłodne i z charakterystycznym gnieceniem.' },
      wool: { name: 'Wełna / Merino', icon: 'mdi:sheep', color: '#FCD34D', description: 'Białkowe włókno zwierzęce, doskonały izolator termiczny i elastyczne.' },
      silk: { name: 'Jedwab', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Zwierzęce włókno ciągłe. Naturalny połysk i suchy chwyt.' },
      cashmere: { name: 'Kaszmir', icon: 'mdi:crown', color: '#F59E0B', description: 'Luksusowe włókno z kóz kaszmirskich. Ekstremalnie miękkie, lekkie i ciepłe.' },
      mohair: { name: 'Mohair', icon: 'mdi:shimmer', color: '#14B8A6', description: '„Diamentowe włókno” z kóz angorskich. Naturalny połysk, bardzo wytrzymałe.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Sierść krolika angorskiego. Znana z puszystego efektu „halo” i ekstremalnej lekkości.' },
      alpaca: { name: 'Alpaka', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Skarb Andów. Włókno puste w środku, termiczne, hipoalergiczne i jedwabiste.' },
      polyester: { name: 'Poliester', icon: 'mdi:oil', color: '#94A3B8', description: 'Syntetyczne włókno na bazie ropy naftowej. Wytrzymałe, nie gniecie się, nie oddycha.' },
      nylon: { name: 'Nylon (Poliamid)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Bardzo wytrzymałe włókno syntetyczne na rozciąganie i ścieranie.' },
      acrylic: { name: 'Akryl', icon: 'mdi:resize', color: '#450A0A', description: 'Syntetyczna imitacja wełny. Miękki, ciepły, ma tendencję do kulkowania się.' },
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
