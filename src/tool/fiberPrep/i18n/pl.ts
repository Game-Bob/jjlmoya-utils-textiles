import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'przygotowanie-wlokien-farbowanie';
const title = 'Przygotowanie Włókien do Farbowania';
const description =
  'Kalkulator WOF, protokoły zaprawiania i rampy termiczne do przygotowania wełny, jedwabiu i bawełny przed naturalnym farbowaniem.';

const faqData = [
  {
    question: 'Co to jest WOF (Weight of Fiber)?',
    answer:
      'WOF to standardowy system obliczania potrzebnej ilości pigmentu lub zaprawy. Opiera się na suchej masie włókna. Na przykład 100% WOF łusek cebuli dla 100g wełny oznacza, że potrzebujesz 100g łusek cebuli.',
  },
  {
    question: 'Dlaczego zaprawianie jest konieczne?',
    answer:
      'Zaprawa (taka jak ałun) działa jako pomost chemiczny między włóknem tekstylnym a naturalnym pigmentem. Bez niej większość barwników nie utrwaliłaby się i zniknęła przy pierwszym praniu (niska trwałość na światło i pocieranie).',
  },
  {
    question: 'Jaka jest różnica między przygotowywaniem włókien zwierzęcych a roślinnych?',
    answer:
      'Włókna zwierzęce (białkowe, takie jak wełna) bardzo dobrze przyjmują sam ałun. Włókna roślinne (celulozowe, takie jak bawełna czy len) wymagają wcześniejszego etapu garbnikowania, aby "oszukać" włókno i sprawić, by przyjęło metaliczną zaprawę.',
  },
  {
    question: 'Co to jest rampa termiczna w farbowaniu?',
    answer:
      'Jest to stopniowy wzrost temperatury (ok. 1-2°C na minutę) kąpieli barwiącej. Jest to kluczowe, aby uniknąć szoku termicznego, szczególnie w przypadku wełny, która może się spilśnić, jeśli zmiany temperatury są zbyt gwałtowne.',
  },
];

const howToData = [
  {
    name: 'Czyszczenie i odtłuszczanie',
    text: 'Wypierz włókno w neutralnym detergencie, aby usunąć oleje, woski lub przemysłowe skrobie, które uniemożliwiają równomierne wnikanie zaprawy.',
  },
  {
    name: 'Ważenie suchego włókna',
    text: 'Uzyskaj dokładną wagę suchego materiału. Wartość ta jest podstawą wszystkich obliczeń WOF (Weight of Fiber).',
  },
  {
    name: 'Obliczenia i kąpiel zaprawiająca',
    text: 'Rozpuść zaprawę (np. ałun potasowy w ilości 15% WOF) w gorącej wodzie i zanurz włókno, utrzymując stałą temperaturę zgodnie z protokołem.',
  },
  {
    name: 'Dojrzewanie i płukanie',
    text: 'Pozostaw zaprawione włókno do odpoczynku (najlepiej na 24h), aby metal głęboko się utrwalił przed przejściem do właściwej kąpieli barwiącej.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Artista Textil i Tintes Naturales',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Nauka stojąca za Zaprawianiem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Przygotowanie włókna do farbowania to nie tylko jego wypranie. To proces inżynierii chemicznej na poziomie molekularnym zwany zaprawianiem. Słowo to pochodzi od łacińskiego <i>mordere</i> (gryźć), a jego funkcją jest działanie jako pomost chemiczny między włóknem a pigmentem. Bez tego pomostu większość naturalnych barwników po prostu spłukałaby się przy pierwszym płukaniu.',
    },
    {
      type: 'card',
      title: 'Kluczowe Pojęcie',
      icon: 'mdi:molecule',
      html: 'Zaprawa posiada wolne wartościowości, które jednocześnie chwytają polimery włókna i barwnik.',
    },
    {
      type: 'title',
      text: 'Różnicowanie Włókien',
      level: 2,
    },
    {
      type: 'card',
      title: 'Włókna Białkowe: Wełna i Jedwab',
      icon: 'mdi:sheep',
      html: 'Włókna te składają się z łańcuchów aminokwasów o bardzo wysokim naturalnym powinowactwie do metali. Ciepło otwiera łuski, pozwalając solom ałunu na głębokie wnikanie. Stosowanie <strong>Kamienia Winnego (Cream of Tartar)</strong> jest niezbędne do utrzymania kwaśnego pH, które zachowuje ich miękkość.',
    },
    {
      type: 'card',
      title: 'Włókna Celulozowe: Bawełna i Len',
      icon: 'mdi:leaf',
      html: 'Celuloza nie posiada łatwo dostępnych miejsc wiązania. Dlatego stosujemy <strong>dwuetapowy protokół</strong>: najpierw garbniki, które przylegają do celulozy, następnie ałun, który przylega do tych garbników. Bez tej wstępnej obróbki kolor wyjdzie blady i mało odporny.',
    },
    {
      type: 'title',
      text: 'Kontrola Kąpieli: WOF, Temperatura i pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aby uzyskać profesjonalne i powtarzalne wyniki, koncepcja <strong>WOF (Weight of Fabric)</strong> jest prawem. Wszystko mierzy się jako procent suchej masy włókna. Nadmiar zaprawy może nasycić włókno i pozostawić je szorstkim lub z osadami metalicznymi, które zmieniają ostateczny kolor.',
    },
    {
      type: 'tip',
      title: 'Rampa Termiczna',
      html: 'Ciepło działa jako katalizator, przyspieszając reakcję chemiczną. Jednak gwałtowna zmiana temperatury wełny może spowodować trwałe zaczepienie się łusek o siebie, co skutkuje spilśnioną i skurczoną tkaniną.',
    },
    {
      type: 'tip',
      title: 'Czynnik pH',
      html: 'Wiele naturalnych barwników to żywe wskaźniki pH. pH wpływa na rozpuszczalność soli i konserwację włókna. Jedwab może stracić swój połysk, jeśli kąpiel będzie zbyt zasadowa. Regulacja pH kwasem cytrynowym lub węglanem wapnia jest fundamentalna.',
    },
    {
      type: 'title',
      text: 'Substancje i Bezpieczeństwo',
      level: 2,
    },
    {
      type: 'card',
      title: 'Ałun Potasowy',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Uniwersalna zaprawa, bezbarwna i wysoce skuteczna. Referencja dla włókien białkowych.',
    },
    {
      type: 'card',
      title: 'Kamień Winny (Cream of Tartar)',
      icon: 'mdi:spoon-sugar',
      html: 'Asystent poprawiający utrwalenie i miękkość włókien zwierzęcych. Utrzymuje kwaśne pH.',
    },
    {
      type: 'tip',
      title: 'Protokół Bezpieczeństwa',
      html: 'Używaj garnków wyłącznie do farbowania, nigdy do żywności.<br>Używaj rękawic i maski podczas manipulowania zaprawami w proszku.<br>Zapewnij stałą wentylację, aby uniknąć gromadzenia się oparów.',
    },
  ],
  ui: {
    profileTitle: 'Wybór Profilu',
    profileDesc: 'Protokół chemiczny dzieli się według molekularnego pochodzenia włókna',
    proteinTitle: 'Włókna Białkowe',
    proteinOrigin: 'Pochodzenie Zwierzęce',
    proteinDesc: 'Wełna, jedwab, alpaka, moher lub kaszmir. Wymagają kontrolowanych temperatur i kwaśnego pH.',
    cellulosicTitle: 'Włókna Celulozowe',
    cellulosicOrigin: 'Pochodzenie Roślinne',
    cellulosicDesc: 'Bawełna, len, konopie lub juta. Wymagają wstępnego zaprawiania garbnikami w celu utrwalenia pigmentu.',
    wofTitle: 'Kalkulator WOF',
    weightLabel: 'Waga Suchej Odzieży (g)',
    weightUnit: 'g',
    wofEmptyMsg: 'Wybierz profil, aby umożliwić obliczenia',
    alumLabel: 'Ałun',
    cremLabel: 'Kamień Winny',
    ironLabel: 'Żelazo (Uwaga)',
    rampTitle: 'Rampa Termiczna',
    rampEmptyTitle: 'Oczekiwanie na Wybór',
    rampEmptyDesc: 'Wybierz włókno, aby zobaczyć cykl termiczny',
    phTitle: 'Stabilizator pH',
    phDesc: 'Krytyczny czynnik dla nasycenia koloru',
    phVolumeLabel: 'Objętość Kąpieli (L)',
    phSliderLabel: 'Aktualne pH',
    phAcidLabel: 'Kwaśne (1)',
    phAlkalineLabel: 'Zasadowe (14)',
    phEmptyMsg: 'Wybierz profil, aby umożliwić stabilizator',
    phStrings: {
      optimal: 'pH optymalne',
      raisePrefix: 'Dodaj Węglan Wapnia lub Sodę Kalcynowaną. Ok.',
      raiseSuffix: 'g aby podnieść do',
      lowerPrefix: 'Dodaj Kwas Cytrynowy lub Ocet. Ok.',
      lowerSuffix: 'ml aby obniżyć do',
    },
    proteinFibers: [
      { id: 'wool', name: 'Wełna / Merino', icon: 'mdi:sheep' },
      { id: 'silk', name: 'Jedwab', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Kaszmir', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Moher', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaka', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Bawełna', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Len', icon: 'mdi:leaf' },
    ],
  },
};
