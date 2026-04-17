import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'stofverbruik-calculator-project';
const title = 'Stofverbruik Calculator per Kledingstuk';
const description =
  'Bereken eenvoudig hoeveel stof je nodig hebt om een rok, broek, jurk of hemd te naaien. Pas aan op basis van stofbreedte en maat voor een professionele snit.';

const faqData = [
  {
    question: 'Hoeveel stof heb ik nodig voor een rok?',
    answer:
      'Dit hangt af van de stofbreedte. Voor een rechte rok in een stof van 140-150 cm is 1,20 meter meestal voldoende. Als de stof 90-110 cm breed is, heb je 2,00 meter nodig.',
  },
  {
    question: 'Hoe beïnvloedt de stofbreedte het verbruik?',
    answer:
      'Bij een geringere breedte passen de patroondelen niet naast elkaar (parallel), waardoor het verbruik meestal verdubbelt omdat ze onder elkaar geplaatst moeten worden.',
  },
  {
    question: 'Is het beter om extra stof te kopen?',
    answer:
      'Ja, een marge van 10% (ongeveer 20 cm) wordt aanbevolen om krimp, weeffouten of onverwachte naadwaarden te compenseren.',
  },
  {
    question: 'Wat is de draadrichting en wat is de invloed ervan?',
    answer:
      'Dit is de richting parallel aan de zelfkanten van de stof. Patronen moeten op één lijn liggen met deze draad, zodat het kledingstuk niet vervormt tijdens het dragen.',
  },
];

const howToData = [
  {
    name: 'Kies het type kledingstuk',
    text: 'Selecteer het model dat je gaat maken (rok, broek, enz.) om de basisverbruiktabel te laden.',
  },
  {
    name: 'Voer de stofbreedte in',
    text: 'Meet de breedte van zelfkant tot zelfkant van de stof die je van plan bent te kopen (90, 115, 140 of 150 cm).',
  },
  {
    name: 'Selecteer de maat',
    text: 'Pas het volume van het kledingstuk aan op basis van de maat (XS-S, M-L, XL-XXL) om de vermenigvuldigingsfactor opnieuw te berekenen.',
  },
  {
    name: 'Verkrijg de totale meters',
    text: 'Controleer het eindresultaat met en zonder naadwaarde om precies te weten hoeveel je in de winkel moet vragen.',
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

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
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
      text: 'Stofmetercalculator voor Confectie: Verbruiksgids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een van de meest voorkomende vragen in het naaiatelier is het bepalen van de hoeveelheid stof die gekocht moet worden voor een specifiek project. Het stofverbruik hangt radicaal af van drie factoren: het model van het kledingstuk, de maat van de persoon en vooral de breedte van de stof (die meestal varieert tussen 90 cm en 150 cm). Deze technische calculator systematiseert de berekening zodat je niet te veel koopt of tekort komt tijdens het knippen.',
    },
    {
      type: 'title',
      text: 'Hoeveel stof heb ik nodig voor een jurk of broek?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De traditionele berekening is gebaseerd op de lengte van het kledingstuk plus de lengte van de mouwen, plus een marge voor belegstukken en de zoom. Wanneer de stof echter smal is (90-110 cm), passen de patroondelen meestal niet naast elkaar, waardoor je het dubbele van de lengte moet kopen. Onze tool houdt automatisch rekening met deze variaties volgens de standaard van de textielindustrie.',
    },
    {
      type: 'title',
      text: 'Geschat Verbruik naar Stofbreedte (maat M-L)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Rechte Rok:</strong> 2.00 m in stof van 90 cm · 1.20 m in stof van 140/150 cm.',
        '<strong>Lange Broek:</strong> 2.50 m in stof van 90 cm · 1.50 m in stof van 140/150 cm.',
        '<strong>Herenoverhemd Lange Mouw:</strong> 2.20 m in stof van 90 cm · 1.40 m in stof van 140/150 cm.',
        '<strong>Basisjurk:</strong> 3.50 m in stof van 90 cm · 2.20 m in stof van 140/150 cm.',
      ],
    },
    {
      type: 'title',
      text: 'Factoren die het Stofverbruik Beïnvloeden',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Richting van de print (Rapport):</strong> Als de stof een tekening heeft met een duidelijke richting of ruiten die moeten aansluiten, heb je tussen de 15% en 20% extra materiaal nodig.',
        '<strong>Draadrichting (Schuin van draad):</strong> Schuin van draad of cirkelvormige uitsnijdingen (zoals cirkelrokken) verbruiken aanzienlijk meer stof door het verlies in de hoeken.',
        '<strong>Richting van de vleug:</strong> Bij stoffen zoals fluweel of ribfluweel moeten alle stukken in dezelfde richting worden geknipt, wat de optimalisatie van de ruimte beperkt.',
        '<strong>Krimp:</strong> Veel natuurlijke stoffen (katoen, linnen, wol) krimpen na de eerste wasbeurt. Het is essentieel om de stof te wassen voordat je deze gaat knippen.',
      ],
    },
    {
      type: 'tip',
      title: 'Besparingstip van de Kleermaker',
      html: '<p>Als je een stof met een grote print of ruiten (plaids) gaat gebruiken, vertrouw dan niet alleen op de standaardmaat. Voeg altijd een volledige herhaling van de tekening (het rapport) toe aan het berekende totaal aantal meters om te garanderen dat de patronen aansluiten bij de zijnaden.</p>',
    },
    {
      type: 'title',
      text: 'Voordelen en Beperkingen van deze Calculator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Directe berekening voor meerdere stofbreedtes met maataanpassing.',
        'Inclusief aanpasbare schatting voor naadwaarde.',
        'Visuele gids voor de indeling van stukken op het doek.',
        'Vervangt geen echte patroonindeling. Plus-maten kunnen extra handmatige aanpassingen vereisen.',
      ],
    },
    {
      type: 'card',
      title: 'Stofbreedte',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'De dwarsmaat van de stof van <strong>zelfkant tot zelfkant</strong>. Bepaalt of patroondelen parallel passen of onder elkaar moeten worden geplaatst.',
    },
    {
      type: 'card',
      title: 'Naadwaarde',
      icon: 'mdi:tape-measure',
      html: 'De afstand tussen de rand van het patroon en de <strong>uiteindelijke stiklijn</strong>. Een standaardwaarde is 1,5 cm voor kledingnaden.',
    },
    {
      type: 'card',
      title: 'Zelfkant',
      icon: 'mdi:content-cut',
      html: 'De versterkte zijranden van de stof die <strong>niet rafelen</strong>. Ze geven de draadrichting aan en dienen als referentie voor het knippen.',
    },
  ],
  ui: {
    sectionProject: 'Project',
    sectionMaterial: 'Materiaal',
    labelGarmentType: 'Type kledingstuk',
    labelSize: 'Maat',
    labelFabricWidth: 'Stofbreedte (cm)',
    labelSeamAllowance: 'Naadwaarde (cm)',
    garmentSkirt: 'Rok (Recht/A-lijn)',
    garmentPants: 'Broek',
    garmentDress: 'Jurk',
    garmentShirt: 'Overhemd / Blouse',
    garmentCoat: 'Jas / Jack',
    garmentTote: 'Tote Bag',
    garmentMerceria: {
      skirt: '1 rits 20cm, 1 knoop',
      pants: '1 rits 20cm, 1 knoop, 30cm versteviging',
      dress: '1 rits 60cm, 50cm versteviging',
      shirt: '7 knopen, 1m fijne versteviging',
      coat: '3 grote knopen, 1,5m versteviging, voering',
      tote: '2m band voor handvaten',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Smal)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (Standaard EU)',
    width150: '150 cm (Interieur)',
    btnClear: 'Wissen',
    btnShare: 'Delen',
    btnCopied: 'Gekopieerd!',
    btnCopyList: 'Lijst kopiëren',
    resultLabel: 'Je hebt nodig:',
    resultUnit: 'Meter',
    shopAdviceFormat: 'Vraag {m}m in de winkel',
    boardEmpty: 'Selecteer een project om de indeling te zien',
    boardDescFormat: 'Breedte: {w}cm | Lengte: {m}m',
    merchTitle: 'Fournituren en Materialen',
    checklistThread: 'Bijpassend garen',
    warningSerialFormat: 'Bij stoffen van {w}cm passen de stukken van jouw maat niet parallel. Verbruik aangepast voor serieel knippen.',
    foldLabel: '⊟ stofvouw',
    pieceNames: {
      front: 'Voorpand',
      back: 'Achterpand',
      waistband: 'Tailleband',
      waistbelt: 'Riem',
      sleeve: 'Mouw',
      collar: 'Kraag',
      cuffs: 'Manchetten',
      facings: 'Belegsels',
      lapels: 'Revers',
      pocket: 'Zak',
      body: 'Body',
      handleA: 'Handvat A',
      handleB: 'Handvat B',
    },
  },
};
