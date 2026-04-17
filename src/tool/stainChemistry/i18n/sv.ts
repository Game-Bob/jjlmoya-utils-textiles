import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StainChemistryUI } from '../ui';

const slug = 'kemiskt-protokoll-textilflackar';
const title = 'Kemiskt Protokoll för Textilfläckar';
const description =
  'Vetenskapliga protokoll för fläckborttagning baserat på fibertyp och fläckens kemiska natur. Perkarbonat, enzymer, lösningsmedel: rätt metod för varje fall.';

const faqData = [
  {
    question: 'Kan jag använda klorblekmedel istället för perkarbonat?',
    answer:
      'Klorblekmedel (natriumhypoklorit) är mycket frätande. Det bryter ner fibrerna, vilket gör dem gulaktiga och spröda. Perkarbonat bleker med aktivt syre och respekterar den naturliga molekylstrukturen.',
  },
  {
    question: 'Varför hjälper vinäger mot lukter?',
    answer:
      'Kroppsodörer är vanligtvis alkaliska. Ättiksyran i vinäger neutraliserar dem och förvandlar dem till luktfria salter som sköljs bort helt.',
  },
  {
    question: 'Ska jag alltid använda kallt vatten för blodfläckar?',
    answer:
      'Ja. Värme koagulerar proteinerna i blodet, vilket gör att fläcken fixeras permanent i fibern. Kallt vatten håller fläcken i ett lösligt tillstånd och gör att enzymatiska medel kan verka effektivt.',
  },
  {
    question: 'Vad händer om jag använder aceton på ett plagg av acetat?',
    answer:
      'Aceton löser upp triacetat och acetat. Acetatfibrer är cellulosa esterifierad med ättiksyra och är helt lösliga i aceton. Resultatet blir en oåterkallelig förstörelse av tyget.',
  },
];

const howToData = [
  {
    name: 'Identifiera fibertyp',
    text: 'Kontrollera tvättlappen inuti plagget för att veta om det är naturfiber, syntet eller finfiber (ull, silke, kashmir).',
  },
  {
    name: 'Välj fiber i verktyget',
    text: 'Välj motsvarande material i den första väljaren.',
  },
  {
    name: 'Välj typ av fläck',
    text: 'Ange om fläcken är organisk (vin, frukt), proteinhaltig (blod), fett eller syntetisk (bläck).',
  },
  {
    name: 'Applicera angivet protokoll',
    text: 'Följ instruktionerna för medel, temperatur och metod. Var extra uppmärksam på kritiska varningar.',
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

export const content: ToolLocaleContent<StainChemistryUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Kemiskt Fläckprotokoll',
    fiberLabel: '1. Fiber',
    selectFiberPlaceholder: 'Välj tyg...',
    stainLabel: '2. Fläck',
    selectStainPlaceholder: 'Vad har hänt?',
    molecularDiagnosis: 'Molekylär Diagnos',
    requiredAgent: 'Nödvändigt Medel',
    thermalCondition: 'Termiskt Tillstånd',
    temperature: 'Temperatur',
    cleaningInstructions: 'Rengöringsinstruktioner',
    criticalWarning: 'Kritisk Försiktighet',
    criticalWarningLabel: 'VARNING',
    technicalNote: 'Teknisk not',
    technicalNoteText:
      'Kontrollera alltid färgbeständigheten på ett dolt ställe innan du går vidare med den fullständiga kemiska behandlingen.',
    systemDiagnosis: 'Diagnossystem',
    systemDiagnosisDesc:
      'Ställ in textilparametrarna för att få rengöringsguiden',
    delicatePercarbonateWarning:
      'RISK FÖR MOLEKYLÄR NEDBRYTNING. Djurfibrer är mycket känsliga för perkarbonat. Utför test på dolt ställe.',
    fiberData: {
      cotton: { name: 'Bomull', family: 'natural', isNoble: false },
      linen: { name: 'Linne', family: 'natural', isNoble: true },
      wool: { name: 'Ull / Merino', family: 'natural', isNoble: true },
      silk: { name: 'Silke / Siden', family: 'natural', isNoble: true },
      cashmere: { name: 'Kashmir', family: 'natural', isNoble: true },
      mohair: { name: 'Mohair', family: 'natural', isNoble: true },
      angora: { name: 'Angora', family: 'natural', isNoble: true },
      alpaca: { name: 'Alpacka', family: 'natural', isNoble: true },
      polyester: { name: 'Polyester', family: 'synthetic', isNoble: false },
      viscose: { name: 'Viskos / Rayon', family: 'artificial', isNoble: false },
      nylon: { name: 'Nylon (Polyamid)', family: 'synthetic', isNoble: false },
      acrylic: { name: 'Akryl', family: 'synthetic', isNoble: false },
    },
    agents: {
      percarbonate: {
        name: 'Natriumperkarbonat',
        description: 'Biologiskt nedbrytbart syreblekmedel. Frisläpper aktivt syre vid upplösning.',
        warning: 'Undvik på proteinfibrer (silke, ull) i höga koncentrationer.',
      },
      isopropyl: {
        name: 'Isopropylalkohol',
        description: 'Effektivt lösningsmedel för pigment och lätta fetter.',
        warning: 'Kan skada glansen på silke och lösa upp vissa akryler om det inte späds ut.',
      },
      acetone: {
        name: 'Aceton',
        description: 'Kraftfullt lösningsmedel för lacker och lim.',
        warning: 'FÖRBJUDET på acetat och triacetat (löser upp fibern).',
      },
      enzyme: {
        name: 'Enzymatiskt Tvättmedel',
        description: 'Innehåller proteaser som bryter ner biologiska fläckar.',
        warning: 'Använd med försiktighet på ull och silke (dessa består av protein).',
      },
      vinegar: {
        name: 'Vit Vinäger',
        description: 'Mild ättiksyra för att neutralisera lukter och fixera färger.',
      },
    },
    stains: [
      {
        id: 'wine',
        name: 'Rödvin / Frukt',
        protocols: {
          natural: { agentId: 'percarbonate', temperature: '40–60°C', method: 'Långvarig blötläggning' },
          synthetic: { agentId: 'percarbonate', temperature: '40°C', method: 'Direkt pasta' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Kallt',
            method: 'Sköljning med kolsyrat vatten och vinäger',
            notes: 'Gnid inte',
          },
        },
      },
      {
        id: 'blood',
        name: 'Blod',
        protocols: {
          natural: {
            agentId: 'enzyme',
            temperature: 'Kallt',
            method: 'Blötläggning i saltvatten och sedan enzym',
          },
          synthetic: { agentId: 'enzyme', temperature: 'Kallt', method: 'Direkt applicering' },
          delicate: {
            agentId: 'vinegar',
            temperature: 'Kallt',
            method: 'Omedelbar sköljning, undvik värme',
          },
        },
      },
      {
        id: 'grease',
        name: 'Fett / Olja',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Lös upp med alkohol och tvätta sedan',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: '40°C',
            method: 'Placera absorberande papper under',
          },
          delicate: { agentId: 'isopropyl', temperature: 'Kallt', method: 'Späd alkohol till 50%' },
        },
      },
      {
        id: 'ink',
        name: 'Bläck / Märkpenna',
        protocols: {
          natural: {
            agentId: 'isopropyl',
            temperature: 'Rumstemp.',
            method: 'Badda från utsidan och inåt',
          },
          synthetic: {
            agentId: 'isopropyl',
            temperature: 'Rumstemp.',
            method: 'Var försiktig så det inte sprider sig',
          },
          delicate: {
            agentId: 'isopropyl',
            temperature: 'Kallt',
            method: 'Späd ut och testa på ett dolt ställe',
          },
        },
      },
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Kemin Bakom Textilrengöring',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alla fläckar är inte lika, och alla fibrer reagerar inte likadant på samma kemiska medel. Skillnaden mellan att rädda ett plagg och att förstöra det ligger i att förstå fläckens molekylära natur och fiberns struktur.',
    },
    {
      type: 'card',
      title: '01 — Kontrollerad Oxidation',
      icon: 'mdi:atom',
      html: '<strong>Natriumperkarbonat</strong> frisläpper aktivt syre som bryter dubbelbindningarna i kromoforena (molekylerna som ansvarar för fläckens färg), vilket gör dem färglösa och vattenlösliga. Det är den mest effektiva metoden för organiska fläckar.',
    },
    {
      type: 'card',
      title: '02 — Solubilisering med Lösningsmedel',
      icon: 'mdi:flask-outline',
      html: 'Fläckar som olja eller bläck är inte vattenlösliga. Lösningsmedel som <strong>isopropylalkohol</strong> eller <strong>aceton</strong> minskar ytspänningen och attraherar fläckens opolära molekyler, vilket gör att de kan överföras till ett bärarmaterial.',
    },
    {
      type: 'title',
      text: 'Suveränitet över Fibrerna: Varför Typen Spelar Roll',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alla fibrer "äter" inte likadant. <strong>Silke och ull</strong> är proteiner (fibroin och keratin). Om du använder ett enzymatiskt tvättmedel designat för att "äta proteiner" (blodfläckar eller ägg) utan kontroll, kommer tvättmedlet att börja bryta ner själva fibern, vilket förstör tygets glans och struktur.',
    },
    {
      type: 'title',
      text: 'Farorna med Värme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett av de vanligaste misstagen är att använda varmt vatten för att "mjuka upp" en blodfläck. Kemiskt sett orsakar värme <strong>koagulering av proteinerna</strong> i fläcken, vilket fixerar dem permanent i fiberns porösa struktur. Proteinfläckar ska alltid behandlas med kallt vatten.',
    },
    {
      type: 'tip',
      title: 'Nödprotokoll: Rödvin',
      html: '<strong>A. Passiv absorption:</strong> Badda med absorberande papper, gnid aldrig för att undvika mekanisk spridning.<br><strong>B. Osmotisk neutralisering:</strong> Täck med fint salt för att dra ut vätskan från fiberns kärna.<br><strong>C. Kemisk verkan:</strong> Applicera en pasta av perkarbonat och vatten vid 40°C om fibern är värmetålig.',
    },
    {
      type: 'title',
      text: 'Specifika Lösningsmedel och Försiktighetsåtgärder',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Aceton</strong> är ett enastående lösningsmedel för nagellack eller lim, men det är förstörande för <strong>acetat</strong>. Eftersom det är fibrer som härstammar från cellulosa men behandlats kemiskt, löser aceton bokstavligen upp tyget.',
    },
    {
      type: 'paragraph',
      html: '<strong>Isopropylalkohol</strong> är mer stabilt, men på färgade syntetmaterial kan det dra med sig själva pigmentet. Vi rekommenderar alltid att göra ett test på en söm eller ett dolt ställe före huvudbehandlingen.',
    },
  ],
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
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
