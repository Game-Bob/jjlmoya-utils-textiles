import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'textil-sanning-fiberanalys';
const title = 'Textil Sanning: Analys av Fiberkvalitet';
const description = 'Upptäck den verkliga kvaliteten på dina kläder genom att analysera deras sammansättning. Är det äkta bomull eller dyr plast? Vetenskaplig fiberanalys.';

const faqData = [
  {
    question: 'Vad är "Greenwashing" inom mode?',
    answer: 'Det är en marknadsföringsteknik där varumärken använder termer som "Ekologisk" eller "Hållbar" utan verkliga bevis. Att analysera den faktiska fibersammansättningen är det enda sättet att verifiera om ett plagg verkligen är naturligt eller syntetiskt.',
  },
  {
    question: 'Varför anses polyester ofta vara av lägre kvalitet än bomull?',
    answer: 'Polyester är en plast (PET). Även om det är hållbart, andas det inte, främjar dålig lukt på grund av bakterier och genererar mikroplaster vid varje tvätt. Naturfibrer som bomull eller linne erbjuder bättre värmereglering.',
  },
  {
    question: 'Är det dåligt om mina kläder innehåller elastan?',
    answer: 'I små mängder (1-5%) ger elastan (Lycra) komfort och passform. Det gör dock återvinning av plagget enormt svårt genom att blanda plast med naturfibrer, vilket ofta tyder på ett "fast fashion"-plagg.',
  },
  {
    question: 'Hur upptäcker man ett plagg av hög kvalitet via etiketten?',
    answer: 'Leta efter monomaterial-sammansättningar (100% Bomull, 100% Ull). Komplexa blandningar används ofta för att sänka produktionskostnader och döljer syntetfibrer under attraktiva handelsnamn.',
  },
];

const howToData = [
  {
    name: 'Hitta den interna etiketten',
    text: 'Leta efter den vita sammansättningsetiketten som vanligtvis sitter på insidan av sidan eller i kragen på ditt plagg.',
  },
  {
    name: 'Identifiera komponenterna',
    text: 'Läs av procentandelen för varje fiber (t.ex. 70% Bomull, 30% Polyester).',
  },
  {
    name: 'Ange data i analysatorn',
    text: 'Skriv in fiberproportionerna i vårt verktyg för att få en teknisk kvalitetspoäng.',
  },
  {
    name: 'Tolka diagnosen',
    text: 'Granska den genererade rapporten för att förstå om ditt plagg är ventilerande, hållbart eller om det kräver specialvård på grund av dess syntetiska sammansättning.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Textil-Sanning',
    addFiber: 'Lägg till fiber',
    total: 'Totalt',
    composition: 'Sammansättningsanalys',
    description: 'Ange procentandelen exakt som den står på etiketten på ditt plagg för att upptäcka sanningen om dess kvalitet.',
    verdict: 'Utlåtande',
    breathability: 'Andningsförmåga',
    durability: 'Hållbarhet',
    warmth: 'Värme',
    careWarning: 'Varning om specialvård',
    specialCareWarning: 'STANDARDTVÄTT: Följ alltid instruktionerna på den fysiska etiketten.',
    validationError: 'Sammansättningen måste summera till exakt 100% för att se utlåtandet',
    actualTotal: 'Nuvarande',
    missingLabel: 'saknas',
    disclaimer: 'Data om andningsförmåga, hållbarhet och värme är uppskattningar baserade på branschgenomsnitt för varje fibertyp.',
    careWarnings: {
      delicate: 'MYCKET ÖMTÅLIGT: Handtvättas kallt. Använd inte torktumlare. Undvik att vrida ur hårt.',
      wool: 'ULL / ÄDELHÅR: Tvättas kallt med specialprogram. Plantorkas för att undvika deformering. Använd inte torktumlare.',
      linen: 'LINNE: Tenderar att skrynkla sig mycket. Stryks lätt fuktigt för bästa resultat.',
      semisynthetic: 'SEMISYNTETISKT: Blir svagare i vått tillstånd. Hanteras varsamt och centrifugeras inte hårt.',
      standard: 'STANDARDTVÄTT: Följ alltid instruktionerna på den fysiska etiketten.',
    },
    fiberData: {
      cotton: {
        name: 'Bomull',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Linne',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Ull / Merino',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'Silke',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Kashmir',
        family: 'natural',
        breathability: 9,
        durability: 5,
        warmth: 10,
        isNoble: true,
      },
      mohair: {
        name: 'Mohair',
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
        name: 'Alpacka',
        family: 'natural',
        breathability: 9,
        durability: 8,
        warmth: 10,
        isNoble: true,
      },
      polyester: {
        name: 'Polyester',
        family: 'synthetic',
        breathability: 2,
        durability: 10,
        warmth: 5,
        isNoble: false,
      },
      viscose: {
        name: 'Viskos / Rayon',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'Nylon (Polyamid)',
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
        label: 'Dyr Plast',
        description: 'Största delen av det här plagget är råolja. Var beredd på svettningar och att noppor (pilling) uppstår snabbt.',
      },
      hook: {
        label: 'Marknadsföringsknep',
        description: 'Den där lilla procentandelen ädelfiber är bara där för att kunna stå på etiketten. Du kommer inte att märka dess fördelar.',
      },
      fragile: {
        label: 'Mjuk men skör',
        description: 'Väldigt behaglig att röra vid, men var försiktig vid tvätt: den tenderar att lätt tappa formen och krympa.',
      },
      natural: {
        label: 'Naturlig kvalitet',
        description: 'Ventilerande och hållbart plagg. Idealiskt för känslig hud och långvarig användning.',
      },
      technical: {
        label: 'Tekniskt / Ultrasyntetiskt plagg',
        description: 'Om det inte är specifika sportkläder betalar du för ren plast.',
      },
      luxury: {
        label: 'Riktig lyx',
        description: 'En investering i komfort och hållbarhet. Behandla det med den respekt det förtjänar.',
      },
      balanced: {
        label: 'Balanserad blandning',
        description: 'En funktionell kombination, som antagligen syftar till att balansera kostnad och hållbarhet.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'Sanningen bakom etiketten: Mästerguide till textilsammansättning', level: 2 },
    { type: 'paragraph', html: 'Har du någonsin undrat varför den där märkes-T-shirten får dig att svettas så mycket, eller varför den där "ulltröjan" svider så outhärdligt? Svaret ligger inte i designen, utan i fibrernas kemi.' },
    { type: 'paragraph', html: 'I en värld som domineras av <strong>Fast Fashion</strong> har tygkvaliteten hamnat i skuggan av den flyktiga estetiken. Men att förstå textilsammansättningen är det enda sättet att göra ett intelligent, hållbart och hudvänligt köp. Vårt verktyg <strong>Textil-Sanning</strong> analyserar de officiella procentsatserna för att avslöja om du har att göra med ett kvalitetsplagg eller bara ett block av bearbetad plast.' },
    { type: 'title', text: 'Vår metodologi', level: 2 },
    { type: 'paragraph', html: 'Vi använder en viktad algoritm baserad på tre fundamentala pelare hämtade från europeiska och nordamerikanska branschstandarder:' },
    { type: 'list', items: ['<strong>Andningsförmåga:</strong> Fiberns förmåga att släppa igenom vattenånga och luft.', '<strong>Hållbarhet:</strong> Motståndskraft mot nötning, dragkraft och bildandet av <strong>pilling</strong> (noppor).', '<strong>Termisk effektivitet:</strong> Förmåga att behålla värme eller ge mekanisk svalka.'] },
    { type: 'tip', title: 'Viktigt', html: 'Lagen kräver att alla plagg som säljs inom EU och USA listar sina komponenter i fallande ordning efter procentandel. Om ett plagg saknar etikett eller om den är oläslig, var misstänksam: det är troligt att det inte uppfyller minimistandarderna för textilsäkerhet.' },
    { type: 'title', text: 'Vanliga "fällor" inom detaljhandeln', level: 2 },
    { type: 'paragraph', html: 'Det finns mycket raffinerade marknadsföringstekniker utformade för att höja det upplevda värdet på ett medelmåttigt plagg. Här lär vi dig att upptäcka dem:' },
    { type: 'card', title: 'Ädelfiber fällan', icon: 'mdi:alert', html: 'Du ser etiketter där det står "MED KASHMIR" eller "MED SILKE" med stora bokstäver. När du tittar på sammansättningen upptäcker du 3% silke och 97% polyester. Dessa 3% bidrar inte till mjukhet, lyster eller värme; de tjänar bara till att varumärket ska kunna höja priset med 20%.' },
    { type: 'card', title: 'Myten om "ekologisk viskos"', icon: 'mdi:leaf', html: 'Även om viskos kommer från cellulosa (trä), är dagens tillverkningsprocess ofta mycket förorenande och slutresultatet är en fiber som försvagas drastiskt när den blir våt. Om det inte är <strong>Lyocell</strong> eller <strong>Tencel</strong> är dess hållbarhet begränsad.' },
    { type: 'title', text: 'Djupanalys per kategori', level: 2 },
    { type: 'title', text: '1. Naturfibrer (Stolt ekologiska)', level: 3 },
    { type: 'paragraph', html: 'De är guldstandarden. Långfibrig <strong>Bomull</strong> (som Pima eller egyptisk bomull) erbjuder evig mjukhet. <strong>Linne</strong> är vetenskapligt sett den bästa fibern för värme på grund av dess molekylära struktur som stöter bort värme och absorberar fukt. <strong>Ull</strong> och <strong>Hampa</strong> (Hemp) är naturliga antibakteriella material; de behöver inte tvättas så ofta eftersom de inte binder lukt.' },
    { type: 'title', text: '2. Halvsyntetiska fibrer (Hybriden)', level: 3 },
    { type: 'paragraph', html: 'Här hittar vi <strong>Viskos</strong>, <strong>Rayon</strong> och <strong>Modal</strong>. De känns som silke men kostar som bomull. De är utmärkta för plagg med mycket fall, men de är "törstiga": de absorberar mycket vatten och tar lång tid på sig att torka, vilket kan främja mögelbildning om de inte sköts om. <strong>Lyocell (Tencel)</strong> är premiumversionen och den hållbara versionen i denna grupp, med en sluten produktionscykel och högre motståndskraft.' },
    { type: 'title', text: '3. Syntetfibrer (Spunnen plast)', level: 3 },
    { type: 'paragraph', html: '<strong>Polyester</strong> är kungen på marknaden. Det är billigt, skrynklar inte och är evigt (bokstavligen, det tar 200 år att brytas ner). Problemet är att det inte andas. Det skapar ett fuktigt mikroklimat mellan tyget och din hud, den idealiska grogrunden för bakterier. <strong>Akryl</strong> är den billiga imitationen av ull: det värmer, men genererar mycket statisk elektricitet och blir fullt av noppor efter två tvättar.' },
    { type: 'title', text: 'Tips för textiliers överlevnad', level: 2 },
    { type: 'paragraph', html: 'Även det bästa plagget i världen kan förstöras i en enda felaktig tvätt. Här är de universella gyllene reglerna:' },
    { type: 'tip', title: 'Kallt vatten är din vän', html: '90% av plaggen behöver inte mer än 30°C. Värme bryter ner elastiska fibrer och krymper naturliga fibrer.' },
    { type: 'tip', title: 'Mindre är mer (Tvättmedel)', html: 'För mycket tvättmedel lämnar rester som drar till sig smuts och gör kläderna stela.' },
    { type: 'tip', title: 'Torktumlare: Den subtila fienden', html: 'Luddet du ser i torktumlarens filter är delar av dina kläder som lossnat på grund av friktion och värme.' },
    { type: 'tip', title: 'Tvätta ut och in', html: 'Skyddar färg och broderier från friktion mot trumman och andra plagg.' },
    { type: 'paragraph', html: '"Köp mindre, välj bättre och låt det hålla länge." — Denna analysator är ditt första steg mot en medveten garderob av hög kvalitet.' },
  ],
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'FTC - Guide till textilmärkning',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'Europeiska kommissionen - Textilförordning',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Skötselsymboler för textilier',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
