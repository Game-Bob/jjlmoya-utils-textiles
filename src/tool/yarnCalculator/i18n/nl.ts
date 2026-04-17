import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'wolcalculator-breien-haken';
const title = 'Wolcalculator: Hoeveel meter en bollen heb ik nodig?';
const description =
  'Bereken met metrische precisie de hoeveelheid wol of garen die nodig is voor je brei- en haakprojecten op basis van het patroon en de maat.';

const faqData = [
  {
    question: 'Waarom verbruikt haken meer wol dan breien?',
    answer:
      'Haken is gebaseerd op het maken van knopen en overlappende lussen, wat zorgt voor een dichter en dikker weefsel per vierkante centimeter. Gemiddeld verbruikt een haakproject tussen 25% en 35% meer garen dan hetzelfde project gebreid met twee pennen (tricotsteek).',
  },
  {
    question: 'Wat gebeurt er als ik wol van verschillende verfbaden (Dye Lot) koop?',
    answer:
      'Zelfs als de kleur identiek lijkt in de winkel, kunnen minimale chemische variaties tijdens het verven zichtbare "banen" in het kledingstuk creëren. Het wordt ten zeerste aanbevolen om alle wol in één keer te kopen en te controleren of de batchcode hetzelfde is.',
  },
  {
    question: 'Hoe beïnvloedt de stekenverhouding (gauge) het uiteindelijke verbruik?',
    answer:
      'Als je los breit, verbruikt elke steek meer meters garen. Als je stekenproef groter is dan wat het patroon aangeeft (bijv. 13 steken in plaats van 15), zal je wolverbruik aanzienlijk toenemen. Het maken van een stekenproef vooraf is essentieel.',
  },
  {
    question: 'Hoe bereken ik het aantal meters als ik alleen het gewicht van de bol heb?',
    answer:
      'Zonder de gegevens over de looplengte is het moeilijk. De meeste bollen geven het aantal meters op hun label aan. Als dat niet het geval is, zoek dan op de naam van de wol in databases zoals Ravelry om de exacte lengte per 50g of 100g te vinden.',
  },
];

const howToData = [
  {
    name: 'Selecteer het project',
    text: 'Kies tussen een trui, sjaal, muts, sokken of deken om de specifieke verbruiksgegevens te laden.',
  },
  {
    name: 'Definieer de maat en dikte',
    text: 'Geef de uiteindelijke afmetingen aan (S, M, L, XL) och de dikte van het garen dat je gaat gebruiken (Fingering, DK, Worsted, Bulky).',
  },
  {
    name: 'Activeer vermenigvuldigers',
    text: 'Als je patroon kabels of complexe texturen heeft, activeer dan de textuurschakelaar om het noodzakelijke extra verbruik toe te voegen.',
  },
  {
    name: 'Ontvang de boodschappenlijst',
    text: 'Voer het aantal meters per bol van je gekozen wol in om precies te zien hoeveel eenheden je in je winkelmandje moet doen.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
  bibliography: [
    {
      name: 'Craft Yarn Council: Standard Yarn Weights & Yardages',
      url: 'https://www.craftyarncouncil.com/standards/yarn-weight-system',
    },
    {
      name: 'Interweave Essentials: Yarn Substitution and Estimation',
      url: 'https://www.interweave.com/article/knitting/yarn-substitution-angelina-take-two/',
    },
    {
      name: 'The Woolery: Fibers and Calculation of Yarn Usage',
      url: 'https://woolery.com/blogs/the-woolery-blog/yarn-weight-charts-helpful-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Gids voor Wolverbruik: Hoe meters en bollen te berekenen voor je projecten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beheers de logistiek van het breien en voorkom dat je garen tekortkomt met onze technische precisiecalculator voor breien en haken. Een van de grootste angsten van iedereen die breit of haakt is de <strong>"Yarn Chicken"</strong>: dat kritieke moment aan het einde van een project waar het lijkt alsof de draad opraakt voordat de laatste steken zijn afgekant. Deze calculator is ontwikkeld om je schattingen te geven op basis van industriestandaarden voor looplengte en gewicht.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Veiligheidsmarge', icon: 'mdi:security' },
        { value: 'Metrisch', label: 'Berekening in Meters', icon: 'mdi:ruler' },
        { value: 'Offline', label: 'Lokale Database', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Waarom het gewicht van bollen misleidend is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Veel beginners maken de fout om wol uitsluitend op basis van gewicht te kopen (bijv. "6 bollen van 100g"). Gewicht is echter een eenheid van massa, niet van lengte. Twee wolsoorten die beide 100g wegen, kunnen radicaal verschillende lengtes hebben: een <strong>Bulky</strong> garen kan slechts 80 meter zijn, terwijl een <strong>Fingering / Lace</strong> garen meer dan 450 meter kan bevatten bij hetzelfde gewicht.',
    },
    {
      type: 'paragraph',
      html: 'Daarom geeft onze calculator altijd prioriteit aan de <strong>totale meters</strong>. Zodra je de benodigde lengte voor je maat en project weet, kun je deze delen door de looplengte die op het label van je specifieke bol staat om het exacte aantal bollen te verkrijgen.',
    },
    {
      type: 'title',
      text: 'Tabel met Standaard Looplengths per Dikte',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als je het label niet bij de hand hebt, kun je deze referentie-looplengtes (per 100g garen) gebruiken voor je schattingen:',
    },
    {
      type: 'table',
      headers: ['Dikte (Weight)', 'Meters ca. / 100g', 'Aanbevolen Gebruik', 'Geadviseerde Naalden'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Kantwerk, ajour sjaals', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Sokken, babykleiding', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Lichte vestjes', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Truien, mutsen', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Dekens, jassen', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'XXL sjaals, dekens', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'De Factor van de Spanning (Gauge)',
      html: '<p>Vergeet niet dat als je heel los breit, je steken groter zullen zijn en meer draad zullen verbruiken dan wanneer je strak breit. Onze calculator past een veiligheidsmarge toe, maar als je weet dat je spanning extreem los is, overweeg dan om 5-10% extra toe te voegen aan de resultaten om verrassingen te voorkomen.</p>',
    },
    {
      type: 'title',
      text: 'Variabelen die het garenverbruik verhogen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Niet alle steken verbruiken dezelfde hoeveelheid draad. Houd bij het kiezen van je ontwerp rekening met deze vermenigvuldigingsfactoren:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Tricotsteek / Jersey',
          description: 'Vertegenwoordigt het basisverbruik en de maximale garenefficiëntie voor elk kledingstuk.',
          icon: 'mdi:minus-circle-outline',
          points: ['Ideaal voor beginners', 'Natuurlijke valling van de stof'],
        },
        {
          title: 'Kabels / Textuur',
          description: 'Het kruisen van draden "verkort" het werkstuk, waardoor het verbruik met ongeveer 25% toeneemt.',
          icon: 'mdi:texture-box',
          points: ['Vereist meer meters', 'Dichter en zwaarder weefsel'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Haken (Crochet)',
          description: 'Haaksteken gebruiken ongeveer 30% meer draad dan breien.',
          icon: 'mdi:hook',
          points: ['Garen raakt sneller op', 'Driedimensionale textuur'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Boordsteek (Ribbing)',
          description: 'De recht/averecht structuur verzamelt meer wol per vierkante cm.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Middelmatig verbruik (+15%)', 'Hoge elasticiteit'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Woordenlijst voor de Vooruitziende Breier',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (Verfbad)',
          definition:
            'Nummer dat de verfkuip identificeert waarin de wol geverfd is. Verschillende batches kunnen kleurverschillen hebben die onzichtbaar zijn op de bol maar zeer zichtbaar in het voltooide werkstuk.',
        },
        {
          term: 'Stash (Voorraad)',
          definition:
            'De persoonlijke garencollectie van een breier. Het identificeren van het gewicht van restjes garen zonder label is essentieel voor kleine projecten.',
        },
        {
          term: 'Put-up',
          definition:
            'De manier waarop het garen wordt gepresenteerd (streng, bol of conus), wat bepaalt of het eerst moet worden opgewonden.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'Het risico dat je neemt door te proberen een sectie af te ronden met een hoeveelheid draad die onvoldoende lijkt.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe de resultaten van deze calculator te gebruiken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zodra de tool het aantal meters en bollen teruggeeft, raden we aan om de volgende stappen voor handmatige verificatie uit te voeren:',
    },
    {
      type: 'list',
      items: [
        '<strong>Controleer de looplengte van je werkelijke bol:</strong> Niet elke bol van 100g heeft 200m. Controleer dit op het label om de uiteindelijke berekening aan te passen.',
        '<strong>Tel meters op voor details:</strong> Als je franjes aan een sjaal of pompons aan een muts toevoegt, tel dan 50-80 meter extra op bij het totaal.',
        '<strong>Stekenproef:</strong> Brei een vierkant van 10x10 cm. Weeg het op een precisieweegschaal. Als het 20g weegt en je deken 100x100 is (100 vierkantjes), dan heb je precies 2kg wol nodig.',
        '<strong>Koop altijd van hetzelfde verfbad:</strong> Als de berekening 7 bollen zegt, koop er dan 8 om marge te hebben voor de naden of in het geval van verschillende batches.',
      ],
    },
    {
      type: 'summary',
      title: 'Strategisch Advies voor de Inkoop van Wol',
      items: [
        'Geef prioriteit aan meters boven grammen om de nodige lengte te garanderen.',
        'Haken verbruikt aanzienlijk meer wol dan breien; pas de projectkiezer aan.',
        'Dichte texturen (kabels) vereisen een verhoging van 25% in het garenbudget.',
        'Bewaar altijd een label van elk verfbad als je garen moet bijbestellen.',
        'Gebruik de marge van 10% om de verplichte stekenproef te maken.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. TYPE PROJECT',
    sectionSize: '2. AFMETINGEN / MAAT',
    sectionWeight: '3. GARNDIKTE',
    sectionPattern: '4. PATROONKENMERKEN',
    sectionBall: '5. GEGEVENS VAN DE BOL',
    labelCables: 'Kabels of dichte texturen?',
    labelGrams: 'GRAM / BOL',
    labelMeters: 'METER / BOL',
    weightFine: 'Fijn',
    weightMedium: 'Gemiddeld',
    weightThick: 'Dik',
    weightXXL: 'XXL',
    projectSweater: 'TRUI',
    projectScarf: 'SJAAL',
    projectHat: 'MUTS',
    projectSocks: 'SOKKEN',
    projectBlanket: 'DEKEN',
    projectCardigan: 'VEST',
    statPrefix: 'TOTAAL GESCHAT VERBRUIK',
    statSuffix: 'M',
    statNote: 'Uiteindelijk aantal meters berekend met een reservevoorraad van 10%.',
    ballsFormatSingular: 'Koop {n} bol',
    ballsFormatPlural: 'Koop {n} bollen',
    ballsDetailFormat: 'Bollen van {w}g / {m}m elk.',
    alertTitle: 'Strategische zekerheid:',
    alertText:
      'Deze berekening garandeert al dat je niet zonder draad komt te zitten. Vergeet niet om het badnummer (dye lot) te controleren bij aankoop.',
    schemeSleeveLabel: 'Mouwen',
    schemeSleeveEach: 'per stuk',
    schemeBodyLabel: 'Lijf',
    schemeTotalHat: 'Totaal Muts',
    schemeTotalFlat: 'Totaal Stuk',
    schemeTotalSocks: 'Totaal Paar',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Kind', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Groot', 'Maxi'],
      socks: ['Kind', 'Volw. S', 'Volw. M', 'Volw. L'],
      blanket: ['Baby', 'Bank', 'Bed 90', 'Bed 150'],
    },
  },
};
