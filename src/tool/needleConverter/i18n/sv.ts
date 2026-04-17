import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NeedleConverterUI } from '../ui';

const slug = 'stick-virknals-konverterare';
const title = 'Konverterare för Stickor och Virknålar';
const description = 'Konvertera storlekar på stickor och virknålar mellan Metriska (mm), US och UK-system med rekommendationer för garn och WPI.';

const faqData = [
  {
    question: 'Varför finns det olika storlekssystem för stickor?',
    answer: 'Historiskt sett har varje land utvecklat sitt eget system. Det metriska systemet (mm) är den mest exakta internationella standarden. US-systemet använder en stegrande numrering (0-50), medan UK-systemet använder en omvänd numrering: ju högre siffra, desto finare är stickan.',
  },
  {
    question: 'Är storlekarna för virknålar och stickor desamma i US-systemet?',
    answer: 'Inte exakt. Virknålar i USA har ofta en tillhörande bokstav (t.ex. H-8) och det finns specifika variationer i små grovlekar. Dessutom använder stålvirknålar för fina garner en helt annan numrering.',
  },
  {
    question: 'Vilken sticka ska jag välja om mitt mönster använder ett mått utan exakt motsvarighet?',
    answer: 'Om ett mönster kräver en storlek som 7,0 mm och ditt system bara har 6,5 mm eller 8,0 mm, rekommenderas det att alltid göra en provlapp (gauge). En skillnad på 0,5 mm kan avsevärt förändra den slutliga storleken på plagget.',
  },
  {
    question: 'Vad är WPI (Wraps Per Inch)?',
    answer: 'Det är antalet varv garn som får plats på en tum (2,54 cm). Det är den mest tillförlitliga metoden för att identifiera grovleken på ett garn utan etikett och avgöra vilken sticka som är mest lämplig.',
  },
];

const howToData = [
  {
    name: 'Välj typ av arbete',
    text: 'Välj mellan stickning (knitting) eller virkning (crochet) för att se korrekta motsvarigheter i US-systemet.',
  },
  {
    name: 'Välj storlek i den visuella väljaren',
    text: 'Klicka på cirkeln som motsvarar din stickas storlek. Hålen har en verklig matematisk proportion till millimetermåttet.',
  },
  {
    name: 'Läs av motsvarigheterna',
    text: 'Se resultaten i realtid: millimeter, US-storlek och UK-storlek, tillsammans med rekommenderad garnkategori och dess WPI.',
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

export const content: ToolLocaleContent<NeedleConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'Craft Yarn Council: Needle and Hook Size Chart',
      url: 'https://www.craftyarncouncil.com/standards/hooks-and-needles',
    },
    {
      name: 'British Standards Institution: Textiles - Marking of Knitting Needles',
      url: 'https://knowledge.bsigroup.com/products/textile-machinery-knitting-machines-number-of-needles-for-circular-knitting-machines-of-large-nominal-diameter',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Teknisk Guide för Stickor och Virknålar: System, Grovlekar och Motsvarigheter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Globaliseringen av digitala mönster har gjort det oumbärligt att förstå skillnaderna mellan det <strong>metriska decimalsystemet</strong>, <strong>USA-standarden (US)</strong> och det <strong>brittiska imperiesystemet (UK)</strong>. Detta verktyg konverterar mellan de tre systemen och erbjuder garnrekommendationer via WPI-metoden.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Offline', label: 'Fungerar utan nät', icon: 'mdi:wifi-off' },
        { value: 'Trippel', label: 'Total Synkronisering', icon: 'mdi:sync' },
        { value: 'WPI', label: 'Garnanalys', icon: 'mdi:texture' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Komplexiteten i de internationella systemen',
      level: 3,
    },
    {
      type: 'table',
      headers: ['System', 'Beräkningsgrund', 'Dominerande region', 'Tekniska egenskaper'],
      rows: [
        ['<strong>Metriskt (mm)</strong>', 'Exakt diameter i mm', 'Europa / Internationellt', 'Den mest tillförlitliga ISO-standarden. Konsekventa steg på 0,25 mm eller 0,50 mm.'],
        ['<strong>US (USA)</strong>', 'Stegrande numrering', 'Nordamerika', 'Använder siffror från 0 till 50. I virkning kopplas siffror till bokstäver (B-1, G-6).'],
        ['<strong>UK (Imperial)</strong>', 'Omvänd numrering', 'Storbritannien / Australien', 'Baserat på tråddragningsmått. Ju högre siffra, desto finare är stickan (14 är fin, 0 är grov).'],
      ],
    },
    {
      type: 'title',
      text: 'Identifiering av garner via WPI-metoden',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lace / Spets (18-22+ WPI):</strong> Ultrafina trådar för spetsar i silke eller mohair. Stickor 1,5 mm till 2,5 mm.',
        '<strong>Fingering / Baby (14-16 WPI):</strong> Standarden för sockor och babykläder. Optimala stickor 2,75 mm till 3,25 mm.',
        '<strong>Sport / Fine (12-14 WPI):</strong> Garn med medel-låg grovlek, perfekt för lätta koftor. Stickor 3,5 mm till 3,75 mm.',
        '<strong>DK / Light Worsted (11-13 WPI):</strong> Den mest mångsidiga grovleken på marknaden. Stickor 4,0 mm eller 4,5 mm.',
        '<strong>Worsted / Aran (9-10 WPI):</strong> Tjockt garn för vintertröjor. Stickor 5,0 mm till 5,5 mm.',
        '<strong>Bulky / Chunky (7-8 WPI):</strong> Grova ullgarner för snabba projekt. Stickor 6,0 mm till 8,0 mm.',
        '<strong>Super Bulky (5-6 WPI):</strong> Gigantiska fibrer för inredning eller halsdukar. Stickor 9,0 mm till 15,0 mm.',
      ],
    },
    {
      type: 'tip',
      title: 'Proffsteknik: Stålvirknålen',
      html: '<p>Det finns en familj av nålar för extremt fina merceriserade bomullsgarner. Dessa är <strong>Steel Hooks (Stålvirknålar)</strong>. Deras numrering är specifik och omvänd: en stålvirknål #14 (0,6 mm) är mycket finare än en #00 (3,5 mm). Använd aldrig standardtabellen för dessa grovlekar.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Checklista för att välja rätt grovlek',
      icon: 'mdi:check-circle-outline',
      badge: 'Teknisk validering',
      html: '<p>Följ dessa steg innan du påbörjar ett större projekt:</p><ul><li><strong>Personlig fasthet:</strong> Om du stickar hårt, gå upp 0,5 mm. Om du stickar löst, gå ner 0,5 mm.</li><li><strong>Material i stickan:</strong> Bambu för glatta garner; Metall för sträva ullgarner.</li><li><strong>Typ av fiber:</strong> Bomull töjer sig inte; merinoull expanderar vid blockning.</li><li><strong>Provlapp:</strong> Sticka en kvadrat på 10x10 cm och tvätta den innan du mäter den slutliga storleken.</li></ul>',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Det metriska systemet är universellt och undviker avrundningsfel mellan tillverkare.',
          con: 'Många gamla och historiska mönster saknar mått i millimeter.',
        },
        {
          pro: 'US-systemet gör det lättare att komma ihåg standardstorlekar för amerikanska mönster.',
          con: 'Bokstäverna för virknålar är inte alltid konsekventa mellan olika märken.',
        },
        {
          pro: 'WPI-systemet gör det möjligt att återanvända garner utan etikett på ett tekniskt och professionellt sätt.',
          con: 'Kräver en mycket noggrann manuell mätning för att inte få ett missvisande resultat.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gauge Swatch', definition: 'Provlapp (10x10 cm) som stickas före projektstart för att verifiera den faktiska storleken.' },
        { term: 'Hook Throat', definition: 'Virknålens nacke. Dess djup avgör hur mycket garn nålen kan hantera.' },
        { term: 'Block Testing', definition: 'Processen att fukta och spänna ut det stickade så att fibrerna slappnar av och visar sin sanna slutstorlek.' },
      ],
    },
    {
      type: 'summary',
      title: 'Kritiska faktorer för framgång i ditt textilprojekt',
      items: [
        'Rätt sticka avgör inte bara storleken, utan även plaggets hållbarhet mot nötning.',
        'Använd vår konverterare för att verifiera mönster från amerikanska eller brittiska tidningar på några sekunder.',
        'Om du inte hittar en exat motsvarighet, välj storleken över eller under baserat på din provlapp.',
        'Virkning förbrukar ca 30 % mer garn än stickning med samma stickstorlek.',
        'Rengör dina metallstickor regelbundet för att bibehålla optimalt glid.',
      ],
    },
  ],
  ui: {
    labelSystem: 'ARBETSSYSTEM',
    modeKnitting: 'Stickning',
    modeCrochet: 'Virkning',
    calibratorLabel: 'PRECISIONSKALIBRATOR (VERKLIG SKALA)',
    calibratorDesc: 'Välj en diameter för att se motsvarigheterna i realtid. Hålen motsvarar matematiskt exakt millimetermåttet.',
    tagMetric: 'Metriskt (mm)',
    tagUS: 'US-system',
    tagUK: 'UK-system',
    yarnLabel: 'IDEAL GARNGROVLEK',
    wpiFormat: '{wpi} WPI (Varv per tum)',
    tableSectionLabel: 'TEKNISK KATALOG ÖVER MOTSVARIGHETER',
    tableMetric: 'METRISKT',
    tableUS: 'US STORLEK',
    tableUK: 'UK / IMPERIAL',
    tableYarn: 'GARNKATEGORI',
  },
};
