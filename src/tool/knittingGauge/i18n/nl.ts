import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'breimachine-gauge-spanning-calculator';
const title = 'Gauge en Spanning Calculator voor Breien';
const description =
  'Reken eenvoudig de steken en naalden om van elk brei- of haakpatroon. Pas de gauge aan op basis van veelvouden en schaalfactoren voor een professioneel resultaat.';

const faqData = [
  {
    question: 'Wat is de spanning of gauge bij breien?',
    answer:
      'Het is de maat voor hoeveel steken en naalden er in een bepaald gebied passen (meestal 10x10 cm). Het is essentieel omdat het de uiteindelijke maat van het kledingstuk bepaalt op basis van de gebruikte naald en het garen.',
  },
  {
    question: 'Hoe beïnvloedt een wijziging in gauge de maat?',
    answer:
      'Als je spanning meer steken per centimeter heeft dan het patroon, wordt het kledingstuk kleiner. Als je minder steken hebt, wordt het kledingstuk groter. Daarom is het van vitaal belang om de steken om te rekenen of van naalden te wisselen.',
  },
  {
    question: 'Waarom is aanpassing op basis van veelvouden belangrijk?',
    answer:
      'Veel patronen hebben motieven (kant, kabels, tekeningen) die een specifiek aantal steken vereisen om te voltooien. Onze calculator past het totaal aan naar het dichtstbijzijnde veelvoud om het ontwerp niet te verbreken.',
  },
  {
    question: 'Moet ik de proeflap wassen voordat ik ga meten?',
    answer:
      'Ja, altijd. "Blocking" (wassen en in vorm brengen) ontspant de vezels en toont de werkelijke spanning die het kledingstuk zal hebben na het eerste gebruik en wassen.',
  },
];

const howToData = [
  {
    name: 'Identificeer de spanning van het patroon',
    text: 'Zoek in de instructies van het patroon hoeveel steken en naalden er worden aangegeven voor een proeflapje van 10x10 cm of 4x4 inch.',
  },
  {
    name: 'Brei en meet je eigen proeflapje',
    text: 'Brei een proeflapje met jouw garen en naalden, block het en meet hoeveel steken en naalden je hebt in datzelfde gebied.',
  },
  {
    name: 'Configureer de calculator',
    text: 'Voer de gegevens van de patroonproeflap en die van jouw werkelijke proeflap in. Voeg het totaal aantal steken van jouw maat en de veelvouden van het motief toe als die er zijn.',
  },
  {
    name: 'Krijg resultaten',
    text: 'Bekijk het nieuwe aantal op te zetten steken und de schaalfactor om te weten of je ook de lengte van het kledingstuk moet aanpassen.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Online Gauge en Spanning Calculator voor Breien: Technische Gids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Als je ooit een trui hebt afgemaakt die ontworpen leek voor een reus of een mutsje dat nauwelijks je kruin bedekte, dan ken je al het belang van de <strong>gauge of spanning</strong>. In de wereld van breien en haken is de spanning de relatie tussen de dikte van de draad, de grootte van de naalden en de kracht waarmee elke breier de draad hanteert. Geen twee breiers zijn hetzelfde, en daarom zijn er geen twee identieke spanningen.',
    },
    {
      type: 'title',
      text: 'Waarom is Spanning of Gauge essentieel bij het breien?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Deze gauge-calculator voor breien is een technisch hulpmiddel ontworpen om wiskundig giswerk te elimineren en je te laten focussen op creativiteit. Door de gegevens van de patroonproeflap en die van je eigen proeflap in te voeren, krijg je nauwkeurige aanpassingen van steken en naalden, waardoor je verzekerd bent dat je uiteindelijke kledingstuk precies de maten heeft die je verwacht.',
    },
    {
      type: 'title',
      text: 'Hoe gebruik je de breispanning calculator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Brei een proeflapje:</strong> Beperk je niet tot 10x10 cm. Brei ten minste 15x15 cm zodat de randen de centrale meting niet vervalsen.',
        '<strong>Block je proeflapje:</strong> Was en droog het lapje zoals je dat met het voltooide kledingstuk zou doen. Veel wolvezels zetten uit of groeien als ze nat worden.',
        '<strong>Meet met precisie:</strong> Gebruik een starre liniaal of een 10 cm meter. Tel hoeveel steken er horizontaal in gaan en hoeveel naalden verticaal.',
        '<strong>Voer de gegevens in:</strong> Plaats de waarden van het patroon in de linker kolom en jouw werkelijke waarden in de rechter. De tool rekent automatisch om hoeveel steken je nodig hebt om de gewenste breedte te bereiken.',
      ],
    },
    {
      type: 'title',
      text: 'Interpretatie van de Resultaten: De Schaalfactor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De schaalfactor is de vermenigvuldiger die we toepassen op elke instructie van het patroon. Als jouw spanning 22 steken is en het patroon vraagt om 20, dan is jouw schaalfactor 1.1. Dit betekent dat je 10% meer steken nodig hebt om dezelfde fysieke breedte te krijgen. Een afwijking van 0-2% is ideaal, 2-10% is matig, 10-25% vereist verplichte herberekening, en meer dan 25% vormt een structureel risico.',
    },
    {
      type: 'title',
      text: 'Behandeling van Veelvouden en Motieven',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een van de grootste uitdagingen bij het omrekenen van een patroon is het behouden van de integriteit van de ajourmotieven, kabels of tekeningen. Als het ontwerp zich elke 8 steken herhaalt, kun je niet zomaar 3 extra steken toevoegen; je moet het totaal aanpassen zodat het een veelvoud van 8 blijft. De functie <strong>aanpassing op basis van veelvouden</strong> van deze calculator suggereert het dichtstbijzijnde aantal steken dat de architectuur van het ontwerp respecteert.',
    },
    {
      type: 'tip',
      title: 'Advies voor Experts',
      html: '<p>Het is meestal de voorkeur om deze calculator te gebruiken en te werken met de natuurlijke spanning van je garen, waarbij je het aantal steken aanpast in plaats van de spanning te forceren door radicaal van naaldgrootte te veranderen, aangezien dit laatste de val en de zachtheid van de stof kan veranderen.</p>',
    },
    {
      type: 'title',
      text: 'Voordelen van het gebruik van onze aanpassingstool',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Automatische aanpassing van steken en naalden met nauwkeurige schaalfactor.',
        'Ondersteuning voor complexe veelvouden (X + Y) om de integriteit van het motief te behouden.',
        'Schatting van benodigde grammen wol voor het volledige project.',
        'Dynamische visualisatie van het lapje die de dichtheid van de stof in real-time toont.',
      ],
    },
    {
      type: 'card',
      title: 'Gauge / Spanning',
      icon: 'mdi:ruler',
      html: 'Aantal steken en naalden in een vierkant van <strong>10x10 cm</strong> of <strong>4x4 inch</strong>. Het is de universele referentie van alle breipatronen.',
    },
    {
      type: 'card',
      title: 'Blocking',
      icon: 'mdi:water',
      html: 'Proces van bevochtigen en vormen van het kledingstuk om de steken te zetten. Onthult de <strong>werkelijke spanning</strong> die het kledingstuk zal hebben na het eerste gebruik en wassen.',
    },
    {
      type: 'card',
      title: 'Schaalfactor',
      icon: 'mdi:scale',
      html: 'Wiskundige verhouding tussen de patroonproeflap en de werkelijke proeflap van de breier. Bepaalt hoeveel steken en naalden er aangepast moeten worden om de <strong>juiste maten</strong> te behouden.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Originele Spanning',
    sectionMyGauge: 'Jouw Actuele Proeflapje',
    sectionProject: 'Projectstructuur',
    labelStitches: 'Steken',
    labelRows: 'Naalden',
    labelWidth: 'Breedte',
    labelLength: 'Lengte',
    labelUnit: 'Meeteenheid',
    labelNeedle: 'Naald',
    labelNeedleMm: 'Naald (mm)',
    labelWeight: 'Gewicht (g)',
    labelWeightOptional: 'optioneel',
    labelPatternSts: 'Steken Patroon',
    labelPatternRows: 'Naalden Patroon',
    labelMultiples: 'Veelvouden',
    labelMultiplesExample: 'Bijv: 10 + 2',
    labelMultiplesPlaceholder: 'Veelvoud + Rand',
    unitEU: '10 x 10 cm (Standaard EU)',
    unitUS: '4 x 4 inch (Standaard US)',
    btnClear: 'Wissen',
    btnShare: 'Delen',
    btnCopied: 'Gekopieerd!',
    resSuggestedSts: 'Voorgestelde op te zetten steken',
    resNewRows: 'Nieuwe Naalden',
    resNewRowsTooltip: 'Aantal naalden (toeren) dat nodig is om de lengte van het originele patroon te evenaren met jouw huidige spanning.',
    resScaleFactor: 'Schaalfactor',
    resScaleFactorTooltip: 'Grootteverhouding tussen jouw breiwerk en het patroon. Een negatieve waarde geeft aan dat jouw breiwerk dichter is.',
    resSuggestion: 'Suggestie',
    resSuggestionTooltip: 'Technisch advies om je spanning aan te passen zonder elke steek van het patroon te hoeven herberekenen.',
    suggestionIdeal: 'Ideaal',
    suggestionDown: 'Naald Maat Lager',
    suggestionUp: 'Naald Maat Hoger',
    suggestionDownDetail: 'Gebruik naald {n}mm of een maat kleiner.',
    suggestionUpDetail: 'Gebruik naald {n}mm of een maat groter.',
    multiplesNoteFormat: 'Aangepast van {n} steken (Veelv. {m})',
    yarnTitle: 'Schatting Wol voor het Project',
    yarnResultFormat: 'Geschatte wol: <strong>{g}g</strong>',
    yarnSafetyFormat: '(+{s}g veiligheidsmarge)',
    alertDanger: 'Extreem verschil (>25%). De val en structuur van het kledingstuk zullen veranderen.',
  },
};
