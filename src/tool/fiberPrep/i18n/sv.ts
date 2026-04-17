import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FiberPrepUI } from '../ui';

const slug = 'fiberberedning-fargning';
const title = 'Beredning av fibrer för färgning';
const description =
  'WOF-kalkylator, betningsprotokoll och temperaturramper för att förbereda ull, silke och bomull före naturlig färgning.';

const faqData = [
  {
    question: 'Vad är WOF (Weight of Fiber)?',
    answer:
      'WOF är standardsystemet för att beräkna mängden pigment eller betningsmedel som behövs. Det baseras på fiberns torrvikt. Till exempel innebär 100 % WOF lökskal för 100 g ull att du behöver 100 g lökskal.',
  },
  {
    question: 'Varför är betning nödvändig?',
    answer:
      'Betningsmedlet (som alun) fungerar som en kemisk bro mellan textilfibern och det naturliga pigmentet. Utan det skulle de flesta färgämnen inte fixeras och försvinna vid första tvätten (dålig ljus- och gni-äkthet).',
  },
  {
    question: 'Vad är skillnaden mellan att bereda animaliska och vegetabiliska fibrer?',
    answer:
      'Animaliska fibrer (proteinfibrer som ull) tar upp alun enbart på ett mycket bra sätt. Vegetabiliska fibrer (cellulosafibrer som bomull eller linne) kräver ett föregående steg med tanniner för att "lura" fibern att ta upp det metalliska betningsmedlet.',
  },
  {
    question: 'Vad är temperaturramp vid färgning?',
    answer:
      'Det är den gradvisa ökningen av temperaturen (ca 1-2 °C per minut) i färgbadet. Det är avgörande för att undvika termisk chock, särskilt för ull som kan filta sig om temperaturförändringarna är för tvära.',
  },
];

const howToData = [
  {
    name: 'Rengöring och avkockning',
    text: 'Tvätta fibern med neutralt tvättmedel för att avlägsna oljor, vaxer eller industriell stärkelse som hindrar betningsmedlet från att tränga in jämnt.',
  },
  {
    name: 'Väga den torra fibern',
    text: 'Ta fram den exakta vikten på det torra materialet. Detta värde är basen för alla WOF-beräkningar (Weight of Fiber).',
  },
  {
    name: 'Beräkning och betningsbad',
    text: 'Lös upp betningsmedlet (t.ex. kaliumalun med 15 % WOF) i varmt vatten och sänk ner fibern, håll temperaturen konstant enligt protokollet.',
  },
  {
    name: 'Mognad och sköljning',
    text: 'Låt den betade fibern vila (helst 24 timmar) så att metallen fixeras djupt innan du går vidare till det slutgiltiga färgbadet.',
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

export const content: ToolLocaleContent<FiberPrepUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'La Escuela Artesana - Taller de Tintes Naturales sobre Lana',
      url: 'https://laescuelaartesana.com/taller-de-tintes-naturales-sobre-lana/',
    },
    {
      name: 'Tatiana Sarasa (@tatianasarasa) - Textilkonstnär och naturliga färgämnen',
      url: 'https://www.instagram.com/tatianasarasa/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vetenskapen bakom betning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att förbereda en fiber för färgning handlar om mer än att bara tvätta den. Det är en kemiteknisk process på molekylär nivå som kallas betning. Ordet kommer från latinets <i>mordere</i> (bita), och dess funktion är att fungera som en kemisk bro mellan fibern och pigmentet. Utan denna bro skulle de flesta naturliga färgämnen helt enkelt sköljas bort vid första sköljningen.',
    },
    {
      type: 'card',
      title: 'Nyckelkoncept',
      icon: 'mdi:molecule',
      html: 'Betningsmedlet har lediga valenser som samtidigt hakar fast i fiberns polymerer och i färgämnet.',
    },
    {
      type: 'title',
      text: 'Differentiering av fibrer',
      level: 2,
    },
    {
      type: 'card',
      title: 'Proteinfibrer: Ull och silke',
      icon: 'mdi:sheep',
      html: 'Dessa fibrer består av aminosyrakedjor med mycket hög naturlig affinitet för metaller. Värmen öppnar fiberns fjäll så att alunsalterna kan tränga in djupt. Användning av <strong>vinsten</strong> är avgörande för att bibehålla det sura pH-värdet som bevarar deras mjukhet.',
    },
    {
      type: 'card',
      title: 'Cellulosafibrer: Bomull och linne',
      icon: 'mdi:leaf',
      html: 'Cellulosa har inga lättillgängliga bindningsställen. Därför använder vi <strong>tvåstegsprotokollet</strong>: först tanniner som fäster vid cellulosan, sedan alun som fäster vid dessa tanniner. Utan denna förbehandling kommer färgen att bli blek och föga färgbeständig.',
    },
    {
      type: 'title',
      text: 'Kontroll av badet: WOF, temperatur och pH',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'För att få professionella och repeterbara resultat är konceptet <strong>WOF (Weight of Fabric)</strong> lag. Allt mäts som en procentandel av fiberns torrvikt. Ett överskott av betningsmedel kan mätta fibern och lämna den sträv eller med metallavlagringar som förändrar den slutliga färgen.',
    },
    {
      type: 'tip',
      title: 'Temperaturramp',
      html: 'Värme fungerar som en katalysator och påskyndar den kemiska reaktionen. Men en plötslig temperaturförändring för ull kan göra att fjällen hakar i varandra permanent, vilket resulterar i ett filtad och krympt tyg.',
    },
    {
      type: 'tip',
      title: 'pH faktorn',
      html: 'Många naturliga färgämnen är levande pH-indikatorer. pH påverkar salternas löslighet och fiberns bevarande. Silke kan förlora sin glans om badet är för alkaliskt. Att justera pH med citronsyra eller kalciumkarbonat är grundläggande.',
    },
    {
      type: 'title',
      text: 'Ämnen och säkerhet',
      level: 2,
    },
    {
      type: 'card',
      title: 'Kaliumalun',
      icon: 'mdi:bottle-tonic-skull',
      html: 'Universellt betningsmedel, färglöst och högeffektivt. Referensen för proteinfibrer.',
    },
    {
      type: 'card',
      title: 'Vinsten (Cremor Tartari)',
      icon: 'mdi:spoon-sugar',
      html: 'Assistent som förbättrar fixering och mjukhet i animaliska fibrer. Behåller det sura pH-värdet.',
    },
    {
      type: 'tip',
      title: 'Säkerhetsprotokoll',
      html: 'Använd kastruller som uteslutande används för färgning, aldrig för mat.<br>Använd handskar och mask när du hanterar betningsmedel i pulverform.<br>Säkerställ konstant ventilation för att undvika ansamling av ångor.',
    },
  ],
  ui: {
    profileTitle: 'Val av profil',
    profileDesc: 'Det kemiska protokollet delas in efter fiberns molekylära ursprung',
    proteinTitle: 'Proteinfibrer',
    proteinOrigin: 'Animaliskt ursprung',
    proteinDesc: 'Ull, silke, alpaka, mohair eller kashmir. Kräver kontrollerade temperaturer och surt pH.',
    cellulosicTitle: 'Cellulosafibrer',
    cellulosicOrigin: 'Vegetabiliskt ursprung',
    cellulosicDesc: 'Bomull, linne, hampa eller jute. Kräver förbetning med tanniner för att fixera pigmentet.',
    wofTitle: 'WOF-kalkylator',
    weightLabel: 'Vikt på det torra plagget (g)',
    weightUnit: 'g',
    wofEmptyMsg: 'Välj en profil för att aktivera beräkningar',
    alumLabel: 'Alun',
    cremLabel: 'Vinsten',
    ironLabel: 'Järn (Varning)',
    rampTitle: 'Temperaturramp',
    rampEmptyTitle: 'Väntar på val',
    rampEmptyDesc: 'Välj en fiber för att se temperaturcykeln',
    phTitle: 'pH-stabilisator',
    phDesc: 'Kritisk faktor för färgmättnad',
    phVolumeLabel: 'Badets volym (L)',
    phSliderLabel: 'Nuvarande pH',
    phAcidLabel: 'Surt (1)',
    phAlkalineLabel: 'Allkaliskt (14)',
    phEmptyMsg: 'Välj en profil för att aktivera stabilisatorn',
    phStrings: {
      optimal: 'Optimalt pH',
      raisePrefix: 'Tillsätt kalciumkarbonat eller soda ash. Ca.',
      raiseSuffix: 'g för att höja till',
      lowerPrefix: 'Tillsätt citronsyra eller ättika. Ca.',
      lowerSuffix: 'ml för att sänka till',
    },
    proteinFibers: [
      { id: 'wool', name: 'Ull / Merino', icon: 'mdi:sheep' },
      { id: 'silk', name: 'Silke', icon: 'mdi:ticket-percent' },
      { id: 'cashmere', name: 'Kashmir', icon: 'mdi:crown' },
      { id: 'mohair', name: 'Mohair', icon: 'mdi:shimmer' },
      { id: 'angora', name: 'Angora', icon: 'mdi:rabbit' },
      { id: 'alpaca', name: 'Alpaka', icon: 'mdi:image-filter-hdr' },
    ],
    cellulosicFibers: [
      { id: 'cotton', name: 'Bomull', icon: 'mdi:tshirt-crew' },
      { id: 'linen', name: 'Linne', icon: 'mdi:leaf' },
    ],
  },
};
