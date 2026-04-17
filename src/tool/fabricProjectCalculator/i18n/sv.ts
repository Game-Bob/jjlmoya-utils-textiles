import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'tygatatgangskalkylator-projekt';
const title = 'Tygåtgångskalkylator per plagg';
const description =
  'Beräkna enkelt hur mycket tyg du behöver för att sy en kjol, ett par byxor, en klänning eller en skjorta. Anpassa efter tygbredd och storlek för en professionell tillskärning.';

const faqData = [
  {
    question: 'Hur mycket tyg behöver jag för en kjol?',
    answer:
      'Det beror på tygbredden. För en rak kjol i ett tyg som är 140-150 cm brett räcker det oftast med 1,20 meter. Om tyget är 90-110 cm brett behöver du 2,00 meter.',
  },
  {
    question: 'Hur påverkar tygbredden åtgången?',
    answer:
      'Vid en smalare bredd får mönsterdelarna inte plats bredvid varandra (parallellt), vilket gör att åtgången oftast fördubblas eftersom de måste placeras under varandra.',
  },
  {
    question: 'Är det bättre att köpa extra tyg?',
    answer:
      'Ja, en marginal på 10 % (ca 20 cm) rekommenderas för att kompensera för krympning, vävfel eller oväntade sömsmåner.',
  },
  {
    question: 'Vad är trådrak och hur påverkar den sömnaden?',
    answer:
      'Det är riktningen parallell med tygets stadkanter. Mönsterdelarna måste anpassas efter denna tråd för att plagget inte ska bli snett när det används.',
  },
];

const howToData = [
  {
    name: 'Välj typ av plagg',
    text: 'Välj den modell du ska sy (kjol, byxor etc.) för att ladda dess tabell för basåtgång.',
  },
  {
    name: 'Ange tygbredd',
    text: 'Mät bredden från stadkant til stadkant på det tyg du planerar att köpa (90, 115, 140 eller 150 cm).',
  },
  {
    name: 'Välj storlek',
    text: 'Justera plaggets volym efter storlek (XS-S, M-L, XL-XXL) för att beräkna om multiplikationsfaktorn.',
  },
  {
    name: 'Se totalt antal meter',
    text: 'Kontrollera slutresultatet med och utan sömsmån för att veta exakt hur mycket du ska be om i butiken.',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'Fabric Estimation Guide - Threads Magazine',
      url: 'https://www.threadsmagazine.com/forum/measuring-fabric',
    },
    {
      name: 'How much fabric do I need? - Seamwork',
      url: 'https://www.seamwork.com/sewing-tutorials/the-anatomy-of-a-sewing-pattern',
    },
    {
      name: 'Standard Fabric Consumption Charts - Textile School',
      url: 'https://www.textileschool.com/209/fabric-consumption-in-garment-making/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Beräkna tygåtgång för sömnad: En komplett guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En av de vanligaste frågorna i syateljén är hur mycket tyg man ska köpa till ett specifikt projekt. Tygåtgången beror radikalt på tre faktorer: plaggets modell, personens storlek och framför allt tygrullens bredd (som vanligtvis varierar mellan 90 cm och 150 cm). Denna tekniska kalkylator systematiserar beräkningen så att du varken köper för mycket eller står där med för lite mitt i tillskärningen.',
    },
    {
      type: 'title',
      text: 'Hur mycket tyg behöver jag till en klänning eller byxor?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den traditionella beräkningen baseras på plaggets längd plus ärmarnas längd, med ett tillägg för infodringar och fåll. Men när tyget är smalt (90-110 cm) får delarna oftast inte plats bredvid varandra, vilket tvingar en att köpa dubbla längden. Vårt verktyg tar automatiskt hänsyn till dessa variationer enligt textilindustrins standard.',
    },
    {
      type: 'title',
      text: 'Uppskattad åtgång efter tygbredd (storlek M-L)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Rak kjol:</strong> 2,00 m vid 90 cm tygbredd · 1,20 m vid 140/150 cm tygbredd.',
        '<strong>Långa byxor:</strong> 2,50 m vid 90 cm tygbredd · 1,50 m vid 140/150 cm tygbredd.',
        '<strong>Långärmad skjorta:</strong> 2,20 m vid 90 cm tygbredd · 1,40 m vid 140/150 cm tygbredd.',
        '<strong>Bas-klänning:</strong> 3,50 m vid 90 cm tygbredd · 2,20 m vid 140/150 cm tygbredd.',
      ],
    },
    {
      type: 'title',
      text: 'Faktorer som ändrar tygåtgången',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Mönsterriktning (Rapport):</strong> Om tyget har ett mönster med en tydlig riktning eller rutor som måste passas in, behöver du mellan 15 % och 20 % extra material.',
        '<strong>Skärning på snedden (Biais):</strong> Snedskurna eller cirkulära snitt (som helklockade kjolar) förbrukar betydligt mer tyg på grund av spillet i vinklarna.',
        '<strong>Luggriktning:</strong> På tyger som sammet eller manchester måste alla delar klippas i samma riktning, vilket begränsar optimeringen av ytan.',
        '<strong>Krympning:</strong> Många naturmaterial (bomull, linne, ull) krymper vid första tvätten. Det är avgörande att förtvätta tyget innan tillskärning.',
      ],
    },
    {
      type: 'tip',
      title: 'Skräddarens tips',
      html: '<p>Om du ska använda ett tyg med ett stort mönster eller rutor (plaids), lita inte enbart på det vanliga måttet. Lägg alltid till en hel mönsterrapport till det totala antalet beräknade meter för att garantera att mönstret stämmer i sidsömmarna.</p>',
    },
    {
      type: 'title',
      text: 'Fördelar och begränsningar med denna kalkylator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Omedelbar beräkning för flera tygbredder med storleksjustering.',
        'Inkluderar anpassningsbar uppskattning av sömsmån.',
        'Visuell guide för placering av mönsterdelar på tyget.',
        'Ersätter inte en riktig mönsterläggning. Plus-storlekar kan kräva ytterligare manuella justeringar.',
      ],
    },
    {
      type: 'card',
      title: 'Tygbredd',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'Måttet tvärs över tyget från <strong>stadkant till stadkant</strong>. Avgör om mönsterdelarna får plats parallellt eller måste placeras efter varandra.',
    },
    {
      type: 'card',
      title: 'Sömsmån',
      icon: 'mdi:tape-measure',
      html: 'Avståndet mellan mönstrets kant och den <strong>slutliga sömlinjen</strong>. Ett standardvärde är 1,5 cm för klädsömnad.',
    },
    {
      type: 'card',
      title: 'Stadkant',
      icon: 'mdi:content-cut',
      html: 'De förstärkta sidokanterna på tyget som <strong>inte fransar sig</strong>. De anger trådrak riktning och fungerar som referens vid tillskärning.',
    },
  ],
  ui: {
    sectionProject: 'Projekt',
    sectionMaterial: 'Material',
    labelGarmentType: 'Typ av plagg',
    labelSize: 'Storlek',
    labelFabricWidth: 'Tygbredd (cm)',
    labelSeamAllowance: 'Sömsmån (cm)',
    garmentSkirt: 'Kjol (Rak/A-linje)',
    garmentPants: 'Byxor',
    garmentDress: 'Klänning',
    garmentShirt: 'Skjorta / Blus',
    garmentCoat: 'Kappa / Jacka',
    garmentTote: 'Tygkasse (Tote Bag)',
    garmentMerceria: {
      skirt: '1 dragkedja 20cm, 1 knapp',
      pants: '1 dragkedja 20cm, 1 knapp, 30cm mellanlägg',
      dress: '1 dragkedja 60cm, 50cm mellanlägg',
      shirt: '7 knappar, 1m tunt mellanlägg',
      coat: '3 stora knappar, 1.5m mellanlägg, foder',
      tote: '2m band till handtag',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Smal)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (EU Standard)',
    width150: '150 cm (Möbeltyg)',
    btnClear: 'Rensa',
    btnShare: 'Dela',
    btnCopied: 'Kopierat!',
    btnCopyList: 'Kopiera lista',
    resultLabel: 'Du behöver:',
    resultUnit: 'Meter',
    shopAdviceFormat: 'Be om {m}m i butiken',
    boardEmpty: 'Välj ett projekt för att se läggplanen',
    boardDescFormat: 'Bredd: {w}cm | Längd: {m}m',
    merchTitle: 'Sybehör och material',
    checklistThread: 'Sytråd i matchande färg',
    warningSerialFormat: 'Vid tyger på {w}cm får delarna i din storlek inte plats parallellt. Åtgången är anpassad för seriell tillskärning.',
    foldLabel: '⊟ tygvikt',
    pieceNames: {
      front: 'Framstycke',
      back: 'Bakstycke',
      waistband: 'Linning',
      waistbelt: 'Hälla',
      sleeve: 'Ärm',
      collar: 'Krage',
      cuffs: 'Manschetter',
      facings: 'Infodringar',
      lapels: 'Slag',
      pocket: 'Ficka',
      body: 'Stycke',
      handleA: 'Handtag A',
      handleB: 'Handtag B',
    },
  },
};
