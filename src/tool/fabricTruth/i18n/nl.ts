import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricTruthUI } from '../ui';

const slug = 'textiel-waarheid-vezelkwaliteit-analyse';
const title = 'Textiel Waarheid: Analyse van Vezelkwaliteit';
const description = 'Ontdek de werkelijke kwaliteit van je kleding door de samenstelling te analyseren. Is het echt katoen of duur plastic? Wetenschappelijke vezelanalyse.';

const faqData = [
  {
    question: 'Wat is "Greenwashing" in de mode?',
    answer: 'Het is een marketingtechniek waarbij merken termen als "Ecologisch" of "Duurzaam" gebruiken zonder echt bewijs. Het analyseren van de werkelijke vezelsamenstelling is de enige manier om te controleren of een kledingstuk echt natuurlijk of synthetisch is.',
  },
  {
    question: 'Waarom is polyester vaak van lagere kwaliteit dan katoen?',
    answer: 'Polyester is een kunststof (PET). Hoewel het duurzaam is, ademt het niet, bevordert het nare geurtjes door bacteriën en genereert het bij elke wasbeurt microplastics. Natuurlijke vezels zoals katoen of linnen bieden een betere thermische regulatie.',
  },
  {
    question: 'Is het erg als mijn kleding elastaan bevat?',
    answer: 'In kleine hoeveelheden (1-5%) zorgt elastaan (Lycra) voor comfort en pasvorm. Het maakt het recyclen van het kledingstuk echter enorm moeilijk door plastic met natuurlijke vezels te mengen, wat vaak duidt op een "fast fashion" kledingstuk.',
  },
  {
    question: 'Hoe herken ik een kledingstuk van hoge kwaliteit aan het label?',
    answer: 'Zoek naar monomateriaal-samenstellingen (100% Katoen, 100% Wol). Complexe mengsels worden vaak gebruikt om de productiekosten te verlagen en verbergen synthetische vezels onder aantrekkelijke handelsnamen.',
  },
];

const howToData = [
  {
    name: 'Zoek het interne label',
    text: 'Zoek het witte samenstellingslabel dat zich meestal aan de zijbinnenkant of in de kraag van je kledingstuk bevindt.',
  },
  {
    name: 'Identificeer de componenten',
    text: 'Lees de percentages van elke vezel (bijv. 70% Katoen, 30% Polyester).',
  },
  {
    name: 'Voer de gegevens in de analysator in',
    text: 'Voer de vezelverhoudingen in onze tool in om een technische kwaliteitsscore te krijgen.',
  },
  {
    name: 'Interpreteer de diagnose',
    text: 'Controleer het gegenereerde rapport om te begrijpen of je kledingstuk ademend, duurzaam is of speciale zorg vereist vanwege de synthetische samenstelling.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<FabricTruthUI> = {
  slug,
  title,
  description,
  ui: {
    toolTitle: 'Textiel-Waarheid',
    addFiber: 'Vezel toevoegen',
    total: 'Totaal',
    composition: 'Samenstellingsanalyse',
    description: 'Voer de percentages in zoals ze op het label van je kledingstuk staan om de waarheid over de kwaliteit te ontdekken.',
    verdict: 'Oordeel',
    breathability: 'Ademend vermogen',
    durability: 'Duurzaamheid',
    warmth: 'Warmte',
    careWarning: 'Speciale verzorgingswaarschuwing',
    specialCareWarning: 'STANDAARD WAS: Volg altijd de instructies op het fysieke label.',
    validationError: 'De samenstelling moet precies 100% zijn om het oordeel te zien',
    actualTotal: 'Actueel',
    missingLabel: 'ontbreekt',
    disclaimer: 'Gegevens over ademend vermogen, duurzaamheid en warmte zijn schattingen op basis van industriegemiddelden voor elk type vezel.',
    careWarnings: {
      delicate: 'ZEER KWETSBAAR: Koud met de hand wassen. Niet in de droger. Vermijd hard uitwringen.',
      wool: 'WOL / EDELHAAR: Koud wassen met een speciaal programma. Liggend drogen om vervorming te voorkomen. Niet in de droger.',
      linen: 'LINNEN: Heeft de neiging erg te kreuken. Licht vochtig strijken voor de beste resultaten.',
      semisynthetic: 'SEMI-SYNTHETISCH: Wordt zwakker als het nat is. Voorzichtig behandelen en niet hard centrifugeren.',
      standard: 'STANDAARD WAS: Volg altijd de instructies op het fysieke label.',
    },
    fiberData: {
      cotton: {
        name: 'Katoen',
        family: 'natural',
        breathability: 9,
        durability: 7,
        warmth: 4,
        isNoble: false,
      },
      linen: {
        name: 'Linnen',
        family: 'natural',
        breathability: 10,
        durability: 9,
        warmth: 2,
        isNoble: true,
      },
      wool: {
        name: 'Wol / Merino',
        family: 'natural',
        breathability: 8,
        durability: 6,
        warmth: 10,
        isNoble: true,
      },
      silk: {
        name: 'Zijde',
        family: 'natural',
        breathability: 7,
        durability: 5,
        warmth: 6,
        isNoble: true,
      },
      cashmere: {
        name: 'Kasjmier',
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
        name: 'Alpaca',
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
        name: 'Viscose / Rayon',
        family: 'artificial',
        breathability: 8,
        durability: 4,
        warmth: 3,
        isNoble: false,
      },
      nylon: {
        name: 'Nylon (Polyamide)',
        family: 'synthetic',
        breathability: 3,
        durability: 10,
        warmth: 4,
        isNoble: false,
      },
      acrylic: {
        name: 'Acryl',
        family: 'synthetic',
        breathability: 4,
        durability: 6,
        warmth: 8,
        isNoble: false,
      },
    },
    verdicts: {
      plasticy: {
        label: 'Duur Plastic',
        description: 'Het grootste deel van dit kledingstuk is aardolie. Bereid je voor op zweten en snel pillen.',
      },
      hook: {
        label: 'Marketingtruc',
        description: 'Dat kleine percentage edele vezel is er alleen om op het label te kunnen zetten. Je zult de voordelen ervan niet merken.',
      },
      fragile: {
        label: 'Zacht maar Kwetsbaar',
        description: 'Voelt erg prettig aan, maar wees voorzichtig bij het wassen: het heeft de neiging gemakkelijk te vervormen en te krimpen.',
      },
      natural: {
        label: 'Natuurlijke Kwaliteit',
        description: 'Ademend en duurzaam kledingstuk. Ideaal voor de gevoelige huid en langdurig gebruik.',
      },
      technical: {
        label: 'Technisch / Ultra-synthetisch kledingstuk',
        description: 'Tenzij het specifieke sportkleding is, betaal je voor puur plastic.',
      },
      luxury: {
        label: 'Echte Luxe',
        description: 'Een investering in comfort en duurzaamheid. Behandel het met het respect dat het verdient.',
      },
      balanced: {
        label: 'Gebalanceerde Mix',
        description: 'Een functionele combinatie, waarschijnlijk bedoeld om kosten en duurzaamheid in evenwicht te brengen.',
      },
    },
  },
  seo: [
    { type: 'title', text: 'De Waarheid Achter het Label: Meestergids voor Textielsamenstelling', level: 2 },
    { type: 'paragraph', html: 'Heb je je ooit afgevraagd waarom dat merk-T-shirt je zo laat zweten, of waarom die "wollen" trui ondraaglijk kriebelt? Het antwoord ligt niet in het ontwerp, maar in de chemie van de vezels.' },
    { type: 'paragraph', html: 'In een wereld die gedomineerd wordt door <strong>Fast Fashion</strong>, is de kwaliteit van de stoffen op de achtergrond geraakt door vluchtige esthetiek. Het begrijpen van de textielsamenstelling is echter de enige manier om een intelligente, duurzame en huidvriendelijke aankoop te doen. Onze tool <strong>Textiel-Waarheid</strong> analyseert de officiële percentages om te onthullen of je te maken hebt met een kwaliteitsstuk of gewoon een brok verwerkt plastic.' },
    { type: 'title', text: 'Onze Methodologie', level: 2 },
    { type: 'paragraph', html: 'We gebruiken een gewogen algoritme op basis van drie fundamentele pijlers die zijn ontleend aan Europese en Noord-Amerikaanse industriestandaarden:' },
    { type: 'list', items: ['<strong>Ademend vermogen:</strong> Vermogen van de vezel om waterdamp en lucht door te laten.', '<strong>Duurzaamheid:</strong> Weerstand tegen slijtage, tractie en de vorming van <strong>pilling</strong> (pluisjes).', '<strong>Thermische Efficiëntie:</strong> Vermogen om warmte vast te houden of mechanische koelte te bieden.'] },
    { type: 'tip', title: 'Belangrijk', html: 'De wet vereist dat alle kledingstukken die in de EU en de VS worden verkocht, hun componenten vermelden in afnemende volgorde van percentage. Als een kledingstuk geen label heeft of het label onleesbaar is, wees dan achterdochtig: de kans is groot dat het niet voldoet aan de minimale veiligheidsnormen voor textiel.' },
    { type: 'title', text: 'Veelvoorkomende "Misleidingen" in de Detailhandel', level: 2 },
    { type: 'paragraph', html: 'Er bestaan zeer verfijnde marketingtechnieken die zijn ontworpen om de gepercipieerde waarde van een matig kledingstuk te verhogen. Hier leren we je hoe je ze kunt detecteren:' },
    { type: 'card', title: 'De Edele Vezel Truc', icon: 'mdi:alert', html: 'Je ziet labels staan met "MET KASJMIER" of "MET ZIJDE" in grote letters. Als je naar de samenstelling kijkt, ontdek je 3% zijde en 97% polyester. Die 3% draagt niet bij aan zachtheid, glans of warmte; het dient er alleen voor dat het merk de prijs met 20% kan verhogen.' },
    { type: 'card', title: 'De Mythe van de "Ecologische Viscose"', icon: 'mdi:leaf', html: 'Hoewel viscose afkomstig is van cellulose (hout), is het huidige productieproces vaak sterk vervuilend en het eindresultaat is een vezel die drastisch verzwakt als hij nat wordt. Tenzij het <strong>Lyocell</strong> of <strong>Tencel</strong> is, is de duurzaamheid beperkt.' },
    { type: 'title', text: 'Diepgaande Analyse per Categorie', level: 2 },
    { type: 'title', text: '1. Natuurlijke Vezels (Met Trots Biologisch)', level: 3 },
    { type: 'paragraph', html: 'Zij zijn de gouden standaard. Langstapelige <strong>Katoen</strong> (zoals Pima of Egyptisch katoen) biedt eeuwige zachtheid. <strong>Linnen</strong> is wetenschappelijk gezien de beste vezel voor de hitte vanwege de moleculaire structuur die warmte afstoot en vocht absorbeert. <strong>Wol</strong> und <strong>Hemp</strong> (Hennep) zijn natuurlijke antibacteriële stoffen; ze hoeven niet zo vaak gewassen te worden omdat ze geuren niet vasthouden.' },
    { type: 'title', text: '2. Semi-Synthetische Vezels (De Hybride)', level: 3 },
    { type: 'paragraph', html: 'Hier vinden we <strong>Viscose</strong>, <strong>Rayon</strong> en <strong>Modal</strong>. Ze voelen aan als zijde maar kosten als katoen. Ze zijn uitstekend voor kledingstukken met veel val, maar ze zijn "dorstig": ze absorberen veel water en drogen langzaam, wat bij gebrek aan verzorging de vorming van schimmel kan bevorderen. <strong>Lyocell (Tencel)</strong> is de premium en duurzame versie van deze groep, met een gesloten productiecyclus en hogere weerstand.' },
    { type: 'title', text: '3. Synthetische Vezels (Gesponnen Plastics)', level: 3 },
    { type: 'paragraph', html: '<strong>Polyester</strong> is de koning van de markt. Het is goedkoop, kreukt niet en is eeuwig (letterlijk, het duurt 200 jaar voordat het afgebroken is). Het probleem is dat het niet ademt. Het creëert een vochtig microklimaat tussen de stof en je huid, de ideale voedingsbodem voor bacteriën. <strong>Acryl</strong> is de goedkope imitatie van wol: het verwarmt wel, maar wekt veel statische elektriciteit op en zit na twee wasbeurten onder de pluisjes.' },
    { type: 'title', text: 'Tips voor Textieloverleving', level: 2 },
    { type: 'paragraph', html: 'Zelfs het beste kledingstuk ter wereld kan in één onjuiste wasbeurt verpest worden. Hier zijn de universele gouden regels:' },
    { type: 'tip', title: 'Koud Water is je Vriend', html: '90% van de kledingstukken heeft niet meer dan 30°C nodig. Hitte breekt elastische vezels af en laat natuurlijke vezels krimpen.' },
    { type: 'tip', title: 'Minder is Meer (Wasmiddel)', html: 'Een overdaad aan zeep laat resten achter die vuil aantrekken en kleding stijf maken.' },
    { type: 'tip', title: 'Droger: De Subtiele Vijand', html: 'De pluisjes die je in het filter van de droger ziet, zijn stukjes van je kleding die door wrijving en hitte zijn losgekomen.' },
    { type: 'tip', title: 'Binnenstebuiten Wassen', html: 'Beschermt kleur en borduursels tegen wrijving met de trommel och andere kledingstappen.' },
    { type: 'paragraph', html: '"Koop minder, kies beter en laat het lang meegaan." — Deze analysator is je eerste stap naar een bewuste en hoogwaardige garderobe.' },
  ],
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
  bibliography: [
    {
      name: 'FTC - Gids voor Textieletikettering',
      url: 'https://www.ftc.gov/business-guidance/resources/textile-fiber-products-guides',
    },
    {
      name: 'Europese Commissie - Textielverordening',
      url: 'https://ec.europa.eu/growth/tools-databases/nando/',
    },
    {
      name: 'ISO 3758:2012 - Symbolen voor Textielverzorging',
      url: 'https://www.iso.org/standard/60465.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
