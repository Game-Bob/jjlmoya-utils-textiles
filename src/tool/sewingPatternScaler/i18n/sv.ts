import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'skalning-symonster';
const title = 'Onlineverktyg för storleksändring av symönster';
const description = 'Anpassa valfritt symönster till dina verkliga mått. Kalkylator för differentiell skalning med förhandsgranskning av det uppdaterade mönstret.';

const faqData = [
  {
    question: 'Varför växer inte axeln lika mycket som bysten?',
    answer: 'Människokroppen är ingen sfär. Medan volymen på bålen kan variera avsevärt, är skelettet och artikulationspunkter som axeln mycket mer statiska. En professionell storleksändring (grading) använder differentierade faktorer för att inte obalansera plagget.',
  },
  {
    question: 'Vad är "rörelsevidd" eller "ease"?',
    answer: 'Det är det extra utrymmet mellan din kropp och tyget. Utan rörelsevidd skulle du inte kunna röra dig. Vår kalkylator bibehåller denna rörelsevidd så att plagget passar dig så som designern tänkte sig, men anpassat till dina verkliga konturer.',
  },
  {
    question: 'Kan jag skala ett mönster för stickat eller jersey?',
    answer: 'Ja, men tänk på att elastiska tyger ofta har negativ rörelsevidd. Om mönstret är mycket åtsittande, se till att elasticitetsfaktorn i det nya tyget du väljer är densamma som i originaltyget.',
  },
];

const howToData = [
  {
    name: 'Mät ditt mönster',
    text: 'Mät de viktigaste horisontella linjerna (byst, midja och höft) på pappersdelarna i ditt originalmönster, från söm till söm.',
  },
  {
    name: 'Konfigurera ursprung',
    text: 'Ange mönstrets storlek eller måtten du har tagit i kolumnen "Ursprung" i vårt verktyg.',
  },
  {
    name: 'Ange mål',
    text: 'Ange dina verkliga mått eller storleken du vill nå. Verktyget beräknar den exakta skillnaden per zon.',
  },
  {
    name: 'Applicera på klippbordet',
    text: 'Följ instruktionerna "Åtgärder på klippbordet" för att lägga till eller ta bort centimeter på sidorna och nederkanterna av dina mönsterdelar.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
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
      text: 'Hur man skalar symönster: Teknisk och praktisk guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Mönsterskalning</strong> (grading) är en av de mest kritiska färdigheterna i konfektionsvärlden. Det handlar inte bara om att förstora eller förminska en ritning proportionellt; det handlar om att anpassa en tvådimensionell struktur till de komplexa kurvorna och proportionerna hos människokroppen, som inte växer linjärt.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Lokala beräkningar', icon: 'mdi:calculator' },
        { value: 'Differentiell', label: 'Proportionell skalning', icon: 'mdi:resize' },
        { value: '100%', label: 'Säkert och privat', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Vad är egentligen mönsterskalning?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skalning (eller <em>grading</em>) är den tekniska processen att öka eller minska storleken på ett basmönster för att skapa en serie olika storlekar. Till skillnad från en enkel zoom tar skalning hänsyn till att vissa delar av kroppen växer mer än andra. Till exempel varierar bystomfånget oftast mer mellan storlekar än axelbredden eller rygglängden.',
    },
    {
      type: 'title',
      text: 'Hemligheten bakom framgång: Rörelsevidd (Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Funktionell rörelsevidd:</strong> de extra centimetrarna som krävs för att du ska kunna andas, sitta och röra armarna utan att tyget spricker.',
        '<strong>Designvidd:</strong> de centimetrar som designern har lagt till för att skapa en specifik silhuett (till exempel en oversize-kappa eller en flortunn blus).',
      ],
    },
    {
      type: 'title',
      text: 'Horisontell vs. Vertikal skalning',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Horisontell axel (Omfång):</strong> Byst, Midja, Höft. Kräver störst justering. Delas upp i fjärdedelar för varje mönsterdel.',
        '<strong>Vertikal axel (Längder):</strong> Framlängd, rygglängd, totallängd. Påverkar placeringen av insnitt och midjelinje. Mindre variation mellan intilliggande storlekar.',
      ],
    },
    {
      type: 'title',
      text: 'Hur man använder mönsterskalaren',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Mät ditt mönster:</strong> ta pappersdelen och mät från kant till kant på linjerna för byst, midja och höft.',
        '<strong>Ange ursprungsmått:</strong> skriv in de måtten i den vänstra kolumnen och ange vilken storlek mönstret representerar.',
        '<strong>Ange dina mått eller målstorlek:</strong> i den högra kolumnen anger du dina verkliga mått eller storleken du vill uppnå.',
        '<strong>Tolka resultaten:</strong> kalkylatorn visar hur mycket du ska lägga till eller ta bort i varje specifik zon.',
      ],
    },
    {
      type: 'tip',
      title: 'Tips för en professionell skalning',
      html: '<p><strong>Skala inte mer än två eller tre storlekar:</strong> om du försöker gå från storlek 36 till 52 är det mycket troligt att ärmhålet deformeras och halsen blir enorm. I dessa fall är det bättre att rita om basmönstret med dina egna mått från grunden.</p>',
    },
    {
      type: 'title',
      text: 'Fördelar med digital skalning',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Bibehåller den exakta proportionen i originaldesignen.',
          con: 'Ärmhål kan kräva en lätt manuell utjämning av linjerna.',
        },
        {
          pro: 'Omedelbar beräkning av den nödvändiga rörelsevidden.',
          con: 'Detekterar inte automatiskt om mönstret redan inkluderar sömsmån.',
        },
        {
          pro: 'Grafisk visualisering av hur delen växer.',
          con: 'Kräver en mycket noggrann initial måttagning.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Differentiell', definition: 'Skillnad i mått mellan två på varandra följande storlekar.' },
        { term: 'Ankarpunkter', definition: 'Zoner i mönstret som inte rör sig (vanligtvis mitt fram/bak).' },
        { term: 'Graderingsnäste (Grading Nest)', definition: 'Överlagrad ritning av alla skalade storlekar.' },
        { term: 'Basmönster', definition: 'Mall utan design eller vidd som motsvarar kroppens mått.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'ARBETSSYSTEM',
    modeStandard: 'Standardstorlekar',
    modeCustom: 'Verkliga mått',
    labelPatternSize: 'Mönsterstorlek',
    labelTargetSize: 'Målstorlek',
    labelOriginMeasures: 'URSPRUNGSMÅTT',
    labelTargetMeasures: 'DINA MÅTT',
    labelEase: 'Nuvarande vidd (Ease)',
    labelChest: 'Byst',
    labelWaist: 'Midja',
    labelHips: 'Höft',
    labelLength: 'Längd',
    resBust: 'Byst',
    resWaist: 'Midja',
    resHips: 'Höft',
    resLength: 'Längd',
    actionLatAdd: 'Lägg till',
    actionLatRemove: 'Ta bort',
    actionLatSuffix: 'på sidan av mönsterdelen',
    actionLatNote: 'Justering per fjärdedels mönster',
    actionLenExtend: 'Förläng mönstret',
    actionLenShorten: 'Förkorta mönstret',
    actionLenNote: 'Justering på nederkantslinjen',
    legendOriginal: 'Original',
    legendUpdated: 'Uppdaterat',
    warnText: 'Skalning över 3 storlekar. Risk för deformation i ärmhål.',
    sizePrefix: 'Storlek',
  },
};
