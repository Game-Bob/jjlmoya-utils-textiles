import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BurnTestUI } from '../ui';

const slug = 'textilien-brennprobe';
const title = 'Textile Brennprobe';
const description =
  'Identifizieren Sie die tatsächliche Zusammensetzung jedes Stoffes durch Analyse seines Brennverhaltens. Unterscheiden Sie Baumwolle, Wolle, Seide und Synthetik mit wissenschaftlicher Genauigkeit.';

const faqData = [
  {
    question: 'Ist es sicher, eine Brennprobe zu Hause durchzuführen?',
    answer:
      'Ja, sofern Sie extreme Vorsichtsmaßnahmen treffen: Verwenden Sie eine Metallpinzette, arbeiten Sie auf einer feuerfesten Unterlage (Keramik oder Metall), halten Sie Wasser bereit und führen Sie den Test an einem gut belüfteten Ort durch. Sie benötigen nur eine kleine Probe von 1x1 cm oder einige Fäden.',
  },
  {
    question: 'Wie riecht Baumwolle beim Verbrennen?',
    answer:
      'Baumwolle ist reine Zellulose. Beim Verbrennen riecht sie genau wie verbranntes Papier oder trockene Blätter. Die resultierende Asche ist grau, sehr fein und zerfällt bei Berührung.',
  },
  {
    question: 'Was bedeutet eine harte, schwarze Perle am Ende der Faser?',
    answer:
      'Dies ist das eindeutige Zeichen für eine synthetische Faser (Kunststoff) wie Polyester oder Nylon. Beim Schmelzen verklumpt das Polymer zu einer Kunststoffperle, die im Gegensatz zur Asche von Naturfasern nicht zerbröckelt.',
  },
  {
    question: 'Warum riecht Wolle beim Verbrennen schlecht?',
    answer:
      'Wolle und Seide sind tierische Proteine, die Schwefel enthalten. Wenn sie mit Feuer in Berührung kommen, verströmen sie einen stechenden Geruch nach verbranntem Haar oder verbrannten Federn. Dies ist der einfachste Weg, sie von Pflanzenfasern zu unterscheiden.',
  },
];

const howToData = [
  {
    name: 'Eine repräsentative Probe entnehmen',
    text: 'Schneiden Sie ein kleines Quadrat aus dem Stoff aus oder, noch besser, ziehen Sie einige Fäden sowohl aus der Kette (vertikal) als auch aus dem Schuss (horizontal).',
  },
  {
    name: 'Annäherung an die Flamme beobachten',
    text: 'Bringen Sie die Faser langsam in die Nähe des Feuers, ohne es zu berühren. Beobachten Sie, ob sie schrumpft, schmilzt oder sofort Feuer fängt.',
  },
  {
    name: 'Flammentyp und Rauch analysieren',
    text: 'Achten Sie darauf, ob die Flamme beständig ist oder von selbst erlischt, und ob der Rauch weiß, schwarz oder nicht vorhanden ist.',
  },
  {
    name: 'Rückstand und Geruch bewerten',
    text: 'Berühren Sie nach dem Abkühlen die resultierende Asche oder Perle und nehmen Sie den Geruch wahr (Papier, Haar oder chemisch), um die Faserfamilie zu bestätigen.',
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
  inLanguage: 'de',
};

const flame = {
  cellulosic: 'Brennt SCHNELL und HELL (gelbe Flamme). Schmilzt nicht. Brennt nach dem Entfernen weiter.',
  protein: 'Brennt LANGSAM, knistert und SCHRUMPFT von der Flamme weg. Erlischt beim Entfernen von selbst.',
  synthetic: 'SCHMILZT und zieht sich schnell zusammen, tropft wie geschmolzener Kunststoff. Rußige Flamme.',
};

const odor = {
  paper: 'Verbranntes Papier, Holz, trockene Blätter.',
  hair: 'Verbranntes Haar, verbranntes Horn, Federn.',
  chemical_sweet: 'AROMATISCH chemisch (süß, fruchtig).',
  chemical_fishy: 'SAUER chemisch (Fisch, gebratenes Fleisch).',
  vegetable: 'Gekochtes Gemüse (Sellerie).',
};

const residue = {
  ash_soft: 'Feine GRAUE/SCHWARZE Asche, weich und flüchtig (zerfällt bei Berührung).',
  ash_shape: 'GRAUE Asche behält die Faserform bei (zerreiblich).',
  bead_crushable: 'Hohle/spröde schwarze Masse (leicht mit den Fingern zu zerdrücken).',
  bead_hard: 'HARTE und gläserne Perle. Unmöglich mit den Fingern zu zerbrechen.',
  bead_irregular: 'HARTE und unregelmäßige schwarze Masse.',
};

const smoke = {
  white_gray: 'Weiß / Hellgrau.',
  gray: 'Mittelgrau.',
  black: 'Dichter dunkler SCHWARZER Rauch.',
};

export const content: ToolLocaleContent<BurnTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'AATCC TM20: Fiber Analysis - Qualitative',
      url: 'https://members.aatcc.org/store/tm20/485/',
    },
    {
      name: 'Textile Fibers: Identification and Testing - NIST',
      url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/circ/nbscircular41e3.pdf',
    },
    {
      name: 'Burn Test Chart for Fiber Identification - Fabric Mart',
      url: 'https://fabricmartfabrics.com/pages/burn-test-chart',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Die forensische Wissenschaft des Fadens',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Brennprobe ist die schnellste und präziseste analytische Methode, um natürliche Polymere von synthetischen zu unterscheiden, ohne auf ein Elektronenmikroskop zurückgreifen zu müssen. Wenn eine Faser Hitze ausgesetzt wird, offenbart ihr molekulares Verhalten ihren Ursprung: von pflanzlicher Zellulose bis hin zu tierischen Proteinen oder Erdölderivaten.',
    },
    {
      type: 'card',
      title: 'Zellulosefasern',
      icon: 'mdi:leaf',
      html: '<strong>Baumwolle</strong> und <strong>Leinen</strong> brennen schnell, ohne zu schmelzen. Sie riechen nach verbranntem Papier, da sie aus Holz oder Pflanzen stammen, und hinterlassen eine flüchtige graue Asche, die beim Pusten verweht.',
    },
    {
      type: 'card',
      title: 'Proteinfasern',
      icon: 'mdi:sheep',
      html: '<strong>Wolle</strong> und <strong>Seide</strong> ziehen sich von der Flamme weg. Ihr charakteristischer Geruch nach verbranntem Haar deutet auf das Vorhandensein von Schwefel und Keratin hin. Der Rückstand ist eine schwarze Perle, die bei Berührung zerfällt.',
    },
    {
      type: 'card',
      title: 'Synthetikfasern',
      icon: 'mdi:bottle-soda-classic',
      html: '<strong>Polyester</strong> und <strong>Nylon</strong> sind im Wesentlichen Kunststoffe. Sie schmelzen und bilden einen heißen Tropfen, der zu einer gläsernen Perle aushärtet, die unmöglich zu zerbrechen ist, bei stechendem chemischem Geruch.',
    },
    {
      type: 'title',
      text: 'Chemische Evidenzmatrix',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine präzise Analyse erfordert den Abgleich von mindestens drei Beweisstücken. Der Geruch ist der zuverlässigste Indikator zur Identifizierung von Mischgeweben: Wenn ein „Leinen“-Stoff ein leichtes Kunststoffaroma verströmt und harte Rückstände hinterlässt, deutet dies auf eine nicht deklarierte Polyestermischung hin.',
    },
    {
      type: 'tip',
      title: 'Labor Sicherheitsprotokoll',
      html: '<strong>Kritische Belüftung:</strong> Synthetische Fasern setzen beim Verbrennen giftige Gase frei. Führen Sie diesen Test niemals in geschlossenen Räumen durch.<br><strong>Sofortige Löschung:</strong> Halten Sie immer einen Behälter mit Wasser bereit. Einige synthetische Fasern können schmelzen und an der Haut haften bleiben.',
    },
  ],
  ui: {
    investigationLabel: 'UNTERSUCHUNG',
    stepPrefix: 'SCHRITT',
    stepCompleted: 'ANALYSE ABGESCHLOSSEN',
    resetLabel: 'NEUSTART',
    positiveId: 'POSITIVE IDENTIFIZIERUNG',
    flameLabel: 'Flammenverhalten',
    odorLabel: 'Geruchsspur',
    residueLabel: 'Rückstand',
    identifiedAs: 'Probe positiv identifiziert als',
    safetyTitle: 'Sicherheitsprotokoll',
    safetyText:
      'Führen Sie diesen Test an einem belüfteten Ort auf einer feuerfesten Unterlage durch. Verwenden Sie Metallpinzetten und halten Sie Wasser bereit.',
    questions: {
      flame: 'Verhalten in der Flamme?',
      odor: 'Charakteristischer Geruch?',
      residue: 'Endgültiger Rückstand?',
      smoke: 'Verhalten des Rauchs?',
    },
    fiberData: {
      cotton: { name: 'Baumwolle', icon: 'mdi:tshirt-crew', color: '#60A5FA', description: 'Natürliche Pflanzenfaser, weich und atmungsaktiv. Der König der Basics.' },
      linen: { name: 'Leinen', icon: 'mdi:leaf', color: '#A7F3D0', description: 'Sehr starke Pflanzenfaser, kühl und charakteristisch knittrig.' },
      wool: { name: 'Wolle / Merino', icon: 'mdi:sheep', color: '#FCD34D', description: 'Tierische Proteinfaser, hervorragender Wärmeisolator und elastisch.' },
      silk: { name: 'Seide', icon: 'mdi:ticket-percent', color: '#F472B6', description: 'Tierische Endlosfaser. Natürlicher Glanz und trockener Griff.' },
      cashmere: { name: 'Kaschmir', icon: 'mdi:crown', color: '#F59E0B', description: 'Luxuriöse Kaschmirziegenfaser. Extrem weich, leicht und warm.' },
      mohair: { name: 'Mohair', icon: 'mdi:shimmer', color: '#14B8A6', description: 'Die „Diamantfaser“ der Angora-Ziege. Natürlicher Glanz, sehr widerstandsfähig.' },
      angora: { name: 'Angora', icon: 'mdi:rabbit', color: '#F9FAFB', description: 'Haar des Angora-Kaninchens. Bekannt für seinen flauschigen „Halo“-Effekt und extreme Leichtigkeit.' },
      alpaca: { name: 'Alpaka', icon: 'mdi:image-filter-hdr', color: '#9F7AEA', description: 'Schatz der Anden. Hohle, thermische, hypoallergene und seidige Faser.' },
      polyester: { name: 'Polyester', icon: 'mdi:oil', color: '#94A3B8', description: 'Synthetische Faser auf Erdölbasis. Widerstandsfähig, knitterfrei, nicht atmungsaktiv.' },
      nylon: { name: 'Nylon (Polyamid)', icon: 'mdi:parachute', color: '#2DD4BF', description: 'Hochwiderstandsfähige Kunstfaser für Zugkraft und Abrieb.' },
      acrylic: { name: 'Acryl', icon: 'mdi:resize', color: '#450A0A', description: 'Synthetische Wollimitation. Weich, warm, neigt zu Pilling.' },
    },
    burnTestData: [
      { fiberId: 'cotton', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_soft },
      { fiberId: 'linen', flame: flame.cellulosic, odor: odor.paper, smoke: smoke.white_gray, residue: residue.ash_shape },
      { fiberId: 'wool', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'silk', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'cashmere', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'mohair', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'angora', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'alpaca', flame: flame.protein, odor: odor.hair, smoke: smoke.gray, residue: residue.bead_crushable },
      { fiberId: 'polyester', flame: flame.synthetic, odor: odor.chemical_sweet, smoke: smoke.black, residue: residue.bead_hard },
      { fiberId: 'nylon', flame: flame.synthetic, odor: odor.vegetable, smoke: smoke.white_gray, residue: residue.bead_hard },
      { fiberId: 'acrylic', flame: flame.synthetic, odor: odor.chemical_fishy, smoke: smoke.black, residue: residue.bead_irregular },
    ],
  },
};
