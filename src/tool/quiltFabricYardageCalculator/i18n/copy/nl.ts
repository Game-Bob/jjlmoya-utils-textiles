import { createSeo, type QuiltLocaleCopy } from '../create-content';
import { makeUi } from '../locale-ui';

export const nl: QuiltLocaleCopy = {
  slug: 'stofberekening-quilt-blokken-achterkant',
  title: 'Stofberekening voor quiltblokken en achterkant',
  description: 'Bereken stof voor vierkante blokken en achterpanelen met naadtoeslag, snijverlies en metrische of imperiale eenheden.',
  ui: makeUi([
    'Meetsysteem', 'Metrisch cm', 'Imperiaal in', 'Snijplan', 'Plan de quilt', 'Gangbare maten', 'Aangepast', 'Wieg', 'Plaid',
    'Eenpersoons', 'Queen', 'King', 'Afgewerkte breedte', 'Afgewerkte lengte', 'Afgewerkt vierkant blok', 'Bruikbare stofbreedte',
    'Naadtoeslag', 'Extra achterkant per zijde', 'Snijmarge bovenkant', 'afgewerkt van rand tot rand', 'afgewerkt van rand tot rand',
    'zichtbare blokmaat', 'na verwijderen van zelfkanten', 'aan elke blokrand', 'extra aan alle vier zijden', '5 procent',
    '10 procent', '15 procent', 'Aankoopplan voor stof', 'Voer positieve maten in om het snijplan te tekenen.', 'Te snijden blokken',
    'Blokkenraster', 'Snijvierkant', 'Vierkanten over de stofbreedte', 'Stof voor bovenkant', 'Stof voor achterkant',
    'Achterpanelen', 'Richting achterkant', 'Panelen in lengterichting', 'Panelen in dwarsrichting', 'Totaal bovenkant en achterkant',
    'Snijplan gereed', 'Controleer het plan', 'De afgewerkte maten zijn geen hele veelvouden van de blokmaat. De buitenste rij of kolom vereist bijgesneden blokken of een rand.',
    'Er past slechts één vierkant over de bruikbare breedte. Bredere stof of een kleiner blok kan de hoeveelheid verminderen.',
    'Gebruik positieve maten en stof die breed genoeg is voor één snijvierkant.', 'Voorbeeld herstellen', 'Aankoopplan kopiëren',
    'Aankoopplan gekopieerd', 'Berekeningsnotities openen', 'Kolommen en rijen worden naar boven afgerond uit de afgewerkte quiltmaat gedeeld door de blokmaat. Het snijvierkant telt twee naadtoeslagen op. Voor de achterkant worden twee richtingen na naadverlies vergeleken.',
    'Grens van de planning.', 'Dit model gebruikt gelijke vierkante blokken uit één stof voor de bovenkant. Tussenstroken, randen, meerdere kleuren, richtingsprints, tussenvulling en bies zijn niet inbegrepen.',
    'Een patchworkraster staat naast de zuinigste indeling van de achterpanelen.',
  ]),
  faq: [
    { question: 'Welke stof berekent deze quiltcalculator?', answer: 'Eén stof voor alle vierkante blokken van de bovenkant en een aparte stof voor de achterkant. Tussenvulling en bies worden niet berekend.' },
    { question: 'Waarom is het snijvierkant groter dan het afgewerkte blok?', answer: 'Het afgewerkte blok is zichtbaar na het naaien. De snijmaat voegt aan beide kanten de gekozen naadtoeslag toe.' },
    { question: 'Hoe worden de achterpanelen berekend?', answer: 'De berekening voegt overmaat toe, trekt verlies in naden af en vergelijkt een lengte- en dwarsindeling.' },
    { question: 'Kan ik meerdere stoffen in één patchwork berekenen?', answer: 'Bereken elke kleurgroep apart met dezelfde snijmaat en het aantal blokken dat uit die stof komt.' },
    { question: 'Moet ik precies de getoonde hoeveelheid kopen?', answer: 'Rond af op de verkoopeenheid. Richtingsprints, grote rapporten, krimp en snijfouten kunnen extra stof vragen.' },
  ],
  howTo: [
    { name: 'Kies de afgewerkte maat', text: 'Kies een gangbare maat of voer afgewerkte breedte en lengte in.' },
    { name: 'Beschrijf blokken en stof', text: 'Voer blokmaat, bruikbare stofbreedte en naadtoeslag in.' },
    { name: 'Stel marges in', text: 'Voer de extra achterkant in en kies vijf, tien of vijftien procent snijverlies.' },
    { name: 'Lees beide aankopen', text: 'Gebruik de hoeveelheden voor bovenkant en achterkant apart en rond ze af.' },
  ],
  seo: createSeo({
    overviewTitle: 'Plan de stof voor aankoop', overview: 'Bovenkant en achterkant hebben verschillende snijplannen. De bovenkant vraagt genoeg rijen vierkanten voor alle blokken. De achterkant kan uit meerdere lange panelen bestaan. De calculator houdt beide hoeveelheden apart en toont ook het totaal.',
    methodTitle: 'Zo wordt blokstof berekend', method: 'De afgewerkte blokmaat is niet de snijmaat. Aan twee zijden wordt naadtoeslag toegevoegd, waarna wordt bepaald hoeveel vierkanten over de bruikbare breedte passen. Het aantal blokken wordt door die capaciteit gedeeld en naar hele snijgangen afgerond.',
    tableHeaders: ['Invoer', 'Bepaalt', 'Zo meten'], tableRows: [['Quiltmaat', 'Rijen en kolommen', 'Afgewerkte maat'], ['Afgewerkt blok', 'Aantal en snijmaat', 'Zonder toeslag'], ['Bruikbare breedte', 'Vierkanten per gang', 'Zonder zelfkanten'], ['Extra achterkant', 'Werkruimte', 'Per zijde']],
    backingTitle: 'Waarom de achterkant kan draaien', backing: 'Als de achterkant breder is dan de stof moeten panelen worden verbonden. De calculator test panelen langs de lengte en een gedraaide indeling, trekt naadverlies af en kiest de oplossing die de minste rollengte gebruikt.',
    advice: ['Meet zonder zelfkanten.', 'Rond elke aankoop naar boven af.', 'Neem extra voor richtingsprints en krimp.', 'Los gedeeltelijke randblokken op voor het snijden.'],
    patternTitle: 'Vergelijk de schatting met het patroon', pattern: 'De schatting werkt het best voor een eenvoudig raster van gelijke vierkante blokken en één stof. Een patroon kan meerdere kleuren, tussenstroken of randen gebruiken en een vaste positie voor de achternaad voorschrijven. Controleer daarom de snijlijst.',
    limitTitle: 'Wat het resultaat niet belooft', limit: 'Stoffen krimpen verschillend, winkels verkopen andere stappen en motieven kunnen ongunstige sneden vereisen. Het resultaat is een transparante basis en vervangt geen specifiek snijdiagram.',
  }),
};
