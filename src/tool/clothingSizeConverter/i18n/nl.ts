import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'internationale-kledingmaten-omzetter';
const title = 'Internationale Kledingmaten Omzetter';
const description =
  'Reken kledingmaten om tussen EU, US, UK en IT systemen. T-shirts, broeken, jurken en jassen voor heren, dames en unisex. Inclusief meetgids en merkadvies.';

const faqData = [
  {
    question: 'Wat is het verschil tussen EU en US kledingmaten?',
    answer:
      'Europese maten (EU) gebruiken vaak oplopende getallen of letters (XS-XXL of 32-52), terwijl Amerikaanse maten (US) vaak letters of specifieke getallen voor broeken gebruiken. Over het algemeen komt een EU-maat 36 overeen met een US 4 voor dameskleding.',
  },
  {
    question: 'Veranderen de maten bij heren- of dameskleding?',
    answer:
      'Ja, absoluut. Zelfs in hetzelfde land is een herenmaat 40 niet hetzelfde als een damesmaat 40. Mannen hebben andere proporties (bredere schouders), waardoor de maatberekening varieert.',
  },
  {
    question: 'Hoe weet ik of ik een maat groter of kleiner moet nemen bij een merk?',
    answer:
      'De beste manier is om de reviews van andere klanten te bekijken. Zinnen als "viel klein uit" of "ruime pasvorm" zijn erg handig. Raadpleeg ook de specifieke maattabel van dat merk.',
  },
  {
    question: 'Hoe nauwkeurig is de tabel voor het omrekenen van maten?',
    answer:
      'De omrekentabel is een richtlijn. Hoewel het over het algemeen nauwkeurig is, heeft elk merk zijn eigen specificaties. Controleer altijd de maattabel van de specifieke winkel voordat je koopt.',
  },
  {
    question: 'Krimpen kledingstukken na het wassen?',
    answer:
      'Dit hangt af van het materiaal. 100% katoen kan 5-10% krimpen als het warm wordt gewassen en in de droger gaat. Synthetische materialen behouden hun vorm beter. Controleer altijd de wasvoorschriften.',
  },
];

const howToData = [
  {
    name: 'Selecteer Kledingstuk en Geslacht',
    text: 'Kies het type kleding (T-shirt, broek, jurk, jas) en het bijbehorende geslacht.',
  },
  {
    name: 'Kies Je Maatsysteem',
    text: 'Selecteer het systeem dat je kent: EU, US, UK of IT.',
  },
  {
    name: 'Selecteer Je Maat',
    text: 'Kies je maat in de kiezer of klik op het rooster. Je ziet direct de equivalenten.',
  },
  {
    name: 'Raadpleeg de Merkgids',
    text: 'Controleer of dat merk klein, normaal of groot valt om je aankoop aan te passen.',
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
  inLanguage: 'nl',
};

const shirtsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '44' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '46' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '42' },
  ],
  unisex: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '34' },
    { EU: 'S', US: 'S', UK: 'S', IT: '36' },
    { EU: 'M', US: 'M', UK: 'M', IT: '38' },
    { EU: 'L', US: 'L', UK: 'L', IT: '40' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '42' },
    { EU: 'XXL', US: 'XXL', UK: 'XXL', IT: '44' },
  ],
};

const pantsData = {
  men: [
    { EU: '30', US: '30', UK: '30', IT: '44' },
    { EU: '32', US: '32', UK: '32', IT: '46' },
    { EU: '34', US: '34', UK: '34', IT: '48' },
    { EU: '36', US: '36', UK: '36', IT: '50' },
    { EU: '38', US: '38', UK: '38', IT: '52' },
    { EU: '40', US: '40', UK: '40', IT: '54' },
  ],
  women: [
    { EU: '32', US: '0', UK: '4', IT: '36' },
    { EU: '34', US: '2', UK: '6', IT: '38' },
    { EU: '36', US: '4', UK: '8', IT: '40' },
    { EU: '38', US: '6', UK: '10', IT: '42' },
    { EU: '40', US: '8', UK: '12', IT: '44' },
    { EU: '42', US: '10', UK: '14', IT: '46' },
  ],
  unisex: [],
};

const dressesData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '36' },
    { EU: 'S', US: 'S', UK: 'S', IT: '38' },
    { EU: 'M', US: 'M', UK: 'M', IT: '40' },
    { EU: 'L', US: 'L', UK: 'L', IT: '42' },
  ],
  women: [
    { EU: 'XS', US: '0-2', UK: '4-6', IT: '32-34' },
    { EU: 'S', US: '4-6', UK: '8-10', IT: '36-38' },
    { EU: 'M', US: '8-10', UK: '12-14', IT: '40-42' },
    { EU: 'L', US: '12-14', UK: '16-18', IT: '44-46' },
    { EU: 'XL', US: '16-18', UK: '20-22', IT: '48-50' },
  ],
  unisex: [],
};

const jacketsData = {
  men: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '44' },
    { EU: 'S', US: 'S', UK: 'S', IT: '46' },
    { EU: 'M', US: 'M', UK: 'M', IT: '48' },
    { EU: 'L', US: 'L', UK: 'L', IT: '50' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '52' },
  ],
  women: [
    { EU: 'XS', US: 'XS', UK: 'XS', IT: '32' },
    { EU: 'S', US: 'S', UK: 'S', IT: '34' },
    { EU: 'M', US: 'M', UK: 'M', IT: '36' },
    { EU: 'L', US: 'L', UK: 'L', IT: '38' },
    { EU: 'XL', US: 'XL', UK: 'XL', IT: '40' },
  ],
  unisex: [],
};

const measurementRanges = {
  shirts: [
    { size: 'XS', chest: 84, waist: 76, hip: 84 },
    { size: 'S', chest: 92, waist: 84, hip: 92 },
    { size: 'M', chest: 100, waist: 92, hip: 100 },
    { size: 'L', chest: 108, waist: 100, hip: 108 },
    { size: 'XL', chest: 116, waist: 108, hip: 116 },
    { size: 'XXL', chest: 124, waist: 116, hip: 124 },
  ],
  pants: [
    { size: '30', chest: 80, waist: 76, hip: 89 },
    { size: '32', chest: 85, waist: 81, hip: 94 },
    { size: '34', chest: 90, waist: 86, hip: 99 },
    { size: '36', chest: 95, waist: 91, hip: 104 },
    { size: '38', chest: 100, waist: 96, hip: 109 },
    { size: '40', chest: 105, waist: 101, hip: 114 },
  ],
  dresses: [
    { size: 'XS', chest: 80, waist: 72, hip: 88 },
    { size: 'S', chest: 88, waist: 80, hip: 96 },
    { size: 'M', chest: 96, waist: 88, hip: 104 },
    { size: 'L', chest: 104, waist: 96, hip: 112 },
    { size: 'XL', chest: 112, waist: 104, hip: 120 },
  ],
  jackets: [
    { size: 'XS', chest: 84, waist: 76, hip: 88 },
    { size: 'S', chest: 92, waist: 84, hip: 96 },
    { size: 'M', chest: 100, waist: 92, hip: 104 },
    { size: 'L', chest: 108, waist: 100, hip: 112 },
    { size: 'XL', chest: 116, waist: 108, hip: 120 },
  ],
};

export const content: ToolLocaleContent<ClothingSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
  bibliography: [
    { name: 'ISO 3635: Kledingmaten - Officiële Standaard', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Kledingmaat Standaarden - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Confectiemaat' },
    {
      name: 'Internationale Kledingmaten Conversie - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kledingmaten Omzetter: Een Volledige Gids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kleding kopen bij internationale winkels kan verwarrend zijn als de maten niet overeenkomen. De <strong>kledingmaten omzetter</strong> helpt je om je perfecte maat te vinden in EU, US, UK en IT systemen, voor T-shirts, broeken, jurken en jassen.',
    },
    {
      type: 'title',
      text: 'Waarom variëren kledingmaten tussen landen?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Er bestaat geen universele internationale standaard. Elke regio ontwikkelde zijn eigen systeem, wat verwarring veroorzaakt bij het kopen in buitenlandse winkels of op platforms zoals Amazon of AliExpress.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU maten (Europa):</strong> Gebruiken vaak oplopende getallen (32, 34, 36...) of letters. Dit is het meest gebruikelijke systeem in Nederland, België, Duitsland en Frankrijk.</span>',
        '<span><strong>US maten (Verenigde Staten):</strong> Gebruiken letters (XS, S, M, L) of getallen voor damesbroeken (0, 2, 4, 6...).</span>',
        '<span><strong>UK maten (Verenigd Koninkrijk):</strong> Vergelijkbaar met het EU-systeem maar met een eigen nummering, over het algemeen lager dan de US nummering.</span>',
        '<span><strong>IT maten (Italië):</strong> Italiaanse nummering met afwijkingen ten opzichte van het algemene EU-systeem.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Pro Tip',
      html: 'Maten variëren aanzienlijk tussen merken. Een maat 38 in Zara kan anders zijn dan een 38 in H&amp;M. Raadpleeg altijd de specifieke maattabel van de winkel voordat je koopt.',
    },
    {
      type: 'title',
      text: 'Hoe je je lichaam correct opmeet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om een correcte maat te garanderen, meet je je lichaam op met een flexibel meetlint. Meet aan het einde van de dag, wanneer het lichaam op zijn maximale uitzetting is.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Borstomvang:</strong> Meet rond het breedste deel van de borst, waarbij het lint onder de oksels doorgaat.</span>',
        '<span><strong>Tailleomvang:</strong> Meet ter hoogte van de navel zonder de buik kunstmatig in te trekken.</span>',
        '<span><strong>Heupomvang:</strong> Meet rond het breedste deel van de heupen, met het lint parallel aan de vloer.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Pasvormgids per merk',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Normale maten. Een 36 in Zara is meestal betrouwbaar voor standaardmaten.</span>',
        '<span><strong>H&amp;M:</strong> Neigt naar groot vallen. Overweeg een maat kleiner te nemen dan gebruikelijk.</span>',
        '<span><strong>Uniqlo:</strong> Valt vaak klein, vooral bij basisstukken. Het wordt aanbevolen om een maat groter te nemen.</span>',
        '<span><strong>Nike / Adidas:</strong> Sportieve, vaak aansluitende snitten. Overweeg een halve maat groter te nemen.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Type Kledingstuk',
    categoryShirts: 'T-shirts',
    categoryPants: 'Broeken',
    categoryDresses: 'Jurken',
    categoryJackets: 'Jassen',
    genderLabel: 'Geslacht',
    genderMen: 'Heren',
    genderWomen: 'Dames',
    genderUnisex: 'Unisex',
    tabBySize: 'Op Maat',
    tabByMeasurements: 'Op Afmetingen',
    regionLabel: 'Jouw Maatsysteem',
    sizeLabel: 'Selecteer je Maat',
    regionEU: 'Europa (EU)',
    regionUS: 'Verenigde Staten (US)',
    regionUK: 'Verenigd Koninkrijk (UK)',
    regionIT: 'Italië (IT)',
    labelEU: 'Europa',
    labelUS: 'Verenigde Staten',
    labelUK: 'Verenigd Koninkrijk',
    labelIT: 'Italië',
    quickGridTitle: 'Snelle Equivalenten (EU)',
    tableTitle: 'Volledige Omrekentabel',
    measurementsTitle: 'Voer je Afmetingen In',
    chestLabel: 'Borst (cm)',
    waistLabel: 'Taille (cm)',
    hipLabel: 'Heup (cm)',
    chestPlaceholder: 'Bijv: 95',
    waistPlaceholder: 'Bijv: 85',
    hipPlaceholder: 'Bijv: 95',
    recommendBtnLabel: 'Suggereer Maat',
    tipsTitle: 'Meettips',
    tipOverClothes: 'Over de kleding',
    tipStraight: 'Recht en parallel',
    tipNoTight: 'Niet te strak',
    tipEndOfDay: 'Aan het eind van de dag',
    recommendationTitle: 'Aanbevolen Maat',
    recommendedSizePrefix: 'We raden maat aan:',
    measuredBy: 'Gebaseerd op jouw afmetingen:',
    chestShort: 'Borst',
    waistShort: 'Taille',
    hipShort: 'Heup',
    recommendationError: 'Vul alle afmetingen in om een aanbeveling te krijgen.',
    recommendationNoData: 'Geen gegevens beschikbaar voor deze categorie.',
    fitGuideTitle: 'Pasvormgids per Merk',
    fitSmall: 'Valt Klein',
    fitRegular: 'Valt Normaal',
    fitLarge: 'Valt Groot',
    fitInfoDefault: 'Klik op een merk voor specifieke adviezen.',
    fitNotif1: ' valt meestal ',
    fitNotifSmall: 'klein',
    fitNotifRegular: 'normaal',
    fitNotifLarge: 'groot',
    fitNotif2: ' uit. Overweeg ',
    fitNotif3: ' als dit je eerste aankoop bij dit merk is.',
    fitAdviceSmall: 'een maat groter te nemen',
    fitAdviceRegular: 'je normale maat te behouden',
    fitAdviceLarge: 'een maat kleiner te nemen',
    fitSelectedSuffix: ' geselecteerd. Kies een ander merk om te vergelijken.',
    infoBannerTitle: 'Pro Tip:',
    infoBannerText:
      'Kledingmaten variëren aanzienlijk tussen merken. Controleer altijd de specifieke tabel van de winkel voordat je koopt.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
