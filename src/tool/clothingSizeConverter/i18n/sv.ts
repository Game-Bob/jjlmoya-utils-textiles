import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClothingSizeConverterUI } from '../ui';

const slug = 'internationell-storlekskonverterare-klader';
const title = 'Internationell Storlekskonverterare för Kläder';
const description =
  'Konvertera klädstorlekar mellan EU, US, UK och IT system. T-shirts, byxor, klänningar och jackor för herr, dam och unisex. Inkluderar måttguide och varumärkesrekommendationer.';

const faqData = [
  {
    question: 'Vad är skillnaden mellan EU- och US-storlekar på kläder?',
    answer:
      'Europeiska storlekar (EU) använder ofta siffror i följd eller bokstäver (XS-XXL eller 32-52), medan amerikanska (US) ofta använder bokstäver eller specifika siffror för byxor. Generellt motsvarar en EU-storlek 36 en US 4 i damkläder.',
  },
  {
    question: 'Ändras storlekarna för herr- eller damkläder?',
    answer:
      'Ja, absolut. Även i samma land är en herrstorlek 40 inte samma sak som en damstorlek 40. Män har andra proportioner (bredare axlar), så storleksberäkningen varierar.',
  },
  {
    question: 'Hur vet jag om jag ska gå upp eller ner en storlek i ett märke?',
    answer:
      'Det bästa sättet är att kolla recensioner från andra kunder. Meningar som "den var för liten för mig" eller "stor i storleken" är till stor hjälp. Se även det märkets specifika måttabell.',
  },
  {
    question: 'Hur exakt är storlekskonverteringstabellen?',
    answer:
      'Konverteringstabellen är en guide. Även om den generellt är exakt har varje varumärke sina egna specifikationer. Kontrollera alltid den specifika butikens storlekstabell innan du köper.',
  },
  {
    question: 'Krymper kläderna efter tvätt?',
    answer:
      'Det beror på materialet. 100% bomull kan krympa 5-10% om den tvättas i varmt vatten och torktumlas. Syntetiska material håller formen bättre. Kontrollera alltid tvättinstruktionerna.',
  },
];

const howToData = [
  {
    name: 'Välj Plagg och Kön',
    text: 'Välj typ av klädesplagg (t-shirt, byxor, klänning, jacka) och motsvarande kön.',
  },
  {
    name: 'Välj Ditt Storlekssystem',
    text: 'Välj det system du känner till: EU, US, UK eller IT.',
  },
  {
    name: 'Välj Din Storlek',
    text: 'Välj din storlek i väljaren eller klicka på rutnätet. Du ser motsvarigheterna direkt.',
  },
  {
    name: 'Se Varumärkesguiden',
    text: 'Kolla om det märket är litet, normalt eller stort för att justera ditt köp.',
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
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    { name: 'ISO 3635: Klädstorlekar - Officiell Standard', url: 'https://www.iso.org/standard/68644.html' },
    { name: 'Standarder för Klädstorlekar - Wikipedia', url: 'https://sv.wikipedia.org/wiki/Kl%C3%A4dstorlek' },
    {
      name: 'Internationell Storlekskonvertering - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Clothing_size#International_variations',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Storlekskonverterare för kläder: En komplett guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att köpa kläder i internationella butiker kan vara förvirrande när storlekarna inte stämmer överens. <strong>Storlekskonverteraren</strong> hjälper dig att hitta din perfekta storlek i systemen EU, US, UK och IT, för t-shirts, byxor, klänningar och jackor.',
    },
    {
      type: 'title',
      text: 'Varför varierar klädstorlekar mellan olika länder?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det finns ingen enhetlig internationell standard. Varje region har utvecklat sitt eget system, vilket skapar förvirring vid köp i utländska butiker eller på plattformar som Amazon eller AliExpress.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU-storlekar (Europa):</strong> Använder ofta siffror i följd (32, 34, 36...) eller bokstäver. Detta är det vanligaste systemet i Sverige, Tyskland och Frankrike.</span>',
        '<span><strong>US-storlekar (USA):</strong> Använder bokstäver (XS, S, M, L) eller siffror för dambyxor (0, 2, 4, 6...).</span>',
        '<span><strong>UK-storlekar (Storbritannien):</strong> Liknar EU-systemet men med en egen numrering, oftast lägre än den amerikanska.</span>',
        '<span><strong>IT-storlekar (Italien):</strong> Italiensk numrering som skiljer sig från det allmänna EU-systemet.</span>',
      ],
    },
    {
      type: 'tip',
      title: 'Proffstips',
      html: 'Storlekar varierar avsevärt mellan olika varumärken. En storlek 38 på Zara kan vara annorlunda än en 38 på H&amp;M. Kontrollera alltid den specifika butikens storlekstabell innan du köper.',
    },
    {
      type: 'title',
      text: 'Så mäter du din kropp korrekt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'För att garantera rätt storlek, mät din kropp med ett flexibelt måttband. Mät i slutet av dagen, när kroppen har sin största omfång.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>Byst/Bröst:</strong> Mät runt den bredaste delen av bröstet, med måttbandet under armarna.</span>',
        '<span><strong>Midja:</strong> Mät vid naveln utan att dra in magen onaturligt.</span>',
        '<span><strong>Höft:</strong> Mät runt den bredaste delen av höfterna, med måttbandet parallellt med golvet.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Passformsguide per märke',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<span><strong>Zara:</strong> Normala storlekar. En 36 på Zara är oftast pålitlig för standardmått.</span>',
        '<span><strong>H&amp;M:</strong> Tenderar att vara stora i storleken. Överväg att gå ner en storlek mot vad du brukar ha.</span>',
        '<span><strong>Uniqlo:</strong> Ofta små i storleken, särskilt i basplagg. Det rekommenderas att gå upp en storlek.</span>',
        '<span><strong>Nike / Adidas:</strong> Sportiga, ofta snäva skärningar. Överväg att gå upp en halv storlek.</span>',
      ],
    },
  ],
  ui: {
    categoryLabel: 'Typ av Plagg',
    categoryShirts: 'T-shirts',
    categoryPants: 'Byxor',
    categoryDresses: 'Klänningar',
    categoryJackets: 'Jackor',
    genderLabel: 'Kön',
    genderMen: 'Herr',
    genderWomen: 'Dam',
    genderUnisex: 'Unisex',
    tabBySize: 'Per Storlek',
    tabByMeasurements: 'Per Mått',
    regionLabel: 'Ditt Storlekssystem',
    sizeLabel: 'Välj din Storlek',
    regionEU: 'Europa (EU)',
    regionUS: 'USA (US)',
    regionUK: 'Storbritannien (UK)',
    regionIT: 'Italien (IT)',
    labelEU: 'Europa',
    labelUS: 'USA',
    labelUK: 'UK',
    labelIT: 'Italien',
    quickGridTitle: 'Snabba motsvarigheter (EU)',
    tableTitle: 'Fullständig konverteringstabell',
    measurementsTitle: 'Ange Dina Mått',
    chestLabel: 'Bröst (cm)',
    waistLabel: 'Midja (cm)',
    hipLabel: 'Höft (cm)',
    chestPlaceholder: 'T.ex: 95',
    waistPlaceholder: 'T.ex: 85',
    hipPlaceholder: 'T.ex: 95',
    recommendBtnLabel: 'Rekommendera Storlek',
    tipsTitle: 'Måttips',
    tipOverClothes: 'Utanpå kläderna',
    tipStraight: 'Rakt och parallellt',
    tipNoTight: 'Utan att strama',
    tipEndOfDay: 'I slutet av dagen',
    recommendationTitle: 'Rekommenderad Storlek',
    recommendedSizePrefix: 'Vi rekommenderar storlek:',
    measuredBy: 'Baserat på dina mått:',
    chestShort: 'Bröst',
    waistShort: 'Midja',
    hipShort: 'Höft',
    recommendationError: 'Vänligen fyll i alla mått för att få en rekommendation.',
    recommendationNoData: 'Ingen data tillgänglig för denna kategori.',
    fitGuideTitle: 'Märkesguide',
    fitSmall: 'Liten storlek',
    fitRegular: 'Normal storlek',
    fitLarge: 'Stor storlek',
    fitInfoDefault: 'Klicka på ett märke för specifika rekommendationer.',
    fitNotif1: ' brukar vara ',
    fitNotifSmall: 'litet i storleken',
    fitNotifRegular: 'normalt i storleken',
    fitNotifLarge: 'stort i storleken',
    fitNotif2: '. Överväg att ',
    fitNotif3: ' om det är första gången du köper detta märke.',
    fitAdviceSmall: 'gå upp en storlek',
    fitAdviceRegular: 'behålla din vanliga storlek',
    fitAdviceLarge: 'gå ner en storlek',
    fitSelectedSuffix: ' valt. Välj ett annat märke för att jämföra.',
    infoBannerTitle: 'Proffstips:',
    infoBannerText:
      'Klädstorlekar varierar avsevärt mellan olika märken. Kontrollera alltid butikens specifika tabell innan köp.',
    shirtsData,
    pantsData,
    dressesData,
    jacketsData,
    measurementRanges,
  },
};
