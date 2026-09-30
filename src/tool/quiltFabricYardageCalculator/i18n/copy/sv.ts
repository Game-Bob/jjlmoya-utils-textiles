import { createSeo, type QuiltLocaleCopy } from '../create-content';
import { makeUi } from '../locale-ui';

export const sv: QuiltLocaleCopy = {
  slug: 'tygatgang-lapptacke-block-baksida-kalkylator',
  title: 'Kalkylator för tyg till quiltblock och baksida',
  description: 'Beräkna tyg för fyrkantiga block och bakstycken med sömsmån, skärspill samt metriska eller brittiska enheter.',
  ui: makeUi([
    'Måttsystem', 'Metriskt cm', 'Brittiskt in', 'Skärkarta', 'Planera quilten', 'Vanliga storlekar', 'Egen storlek', 'Baby', 'Pläd',
    'Enkelsäng', 'Queen', 'King', 'Färdig bredd', 'Färdig längd', 'Färdigt fyrkantigt block', 'Användbar tygbredd', 'Sömsmån',
    'Extra baksida per sida', 'Skärmån för ovansidan', 'färdig kant till kant', 'färdig kant till kant', 'synlig blockstorlek',
    'efter att stadkanter tagits bort', 'på varje blockkant', 'extra på alla fyra sidor', '5 procent', '10 procent', '15 procent',
    'Inköpsplan för tyg', 'Ange positiva mått för att rita skärkartan.', 'Block att skära', 'Blockrutnät', 'Skärkvadrat',
    'Kvadrater över tygbredden', 'Tyg till ovansidan', 'Tyg till baksidan', 'Bakpaneler', 'Baksidans riktning',
    'Längsgående paneler', 'Tvärgående paneler', 'Totalt för ovan- och baksida', 'Skärplan klar', 'Granska planen',
    'De färdiga måtten är inte hela multiplar av blockstorleken. Yttre rad eller kolumn kräver beskurna block eller en kant.',
    'Endast en kvadrat ryms över den användbara bredden. Bredare tyg eller mindre block kan minska åtgången.',
    'Använd positiva mått och tyg som rymmer minst en skärkvadrat.', 'Återställ exempel', 'Kopiera inköpsplan',
    'Inköpsplan kopierad', 'Öppna beräkningsnoter', 'Kolumner och rader avrundas uppåt när färdiga mått delas med blockstorleken. Skärkvadraten lägger till två sömsmåner. Baksidan jämför två riktningar efter förlust i fogarna.',
    'Planeringens gräns.', 'Modellen antar lika stora fyrkantiga block från ett tyg. Mellanremsor, kanter, flera färger, riktade mönster, vadd och kantband ingår inte.',
    'Ett lapptäcksrutnät visas bredvid den mest effektiva placeringen av bakpanelerna.',
  ]),
  faq: [
    { question: 'Vilket tyg beräknar den här quiltkalkylatorn?', answer: 'Den beräknar ett tyg för alla fyrkantiga block på ovansidan och ett separat tyg för baksidan. Vadd och kantband ingår inte.' },
    { question: 'Varför är skärkvadraten större än det färdiga blocket?', answer: 'Det färdiga blocket syns efter sömnad. Skärmåttet lägger till vald sömsmån på båda sidor.' },
    { question: 'Hur beräknas bakpanelerna?', answer: 'Beräkningen lägger till övermått, drar av tyg i fogarna och jämför längsgående och tvärgående placering.' },
    { question: 'Kan jag beräkna flera tyger i samma lapptäcke?', answer: 'Beräkna varje färggrupp separat med samma skärstorlek och rätt antal block.' },
    { question: 'Ska jag köpa exakt den visade mängden?', answer: 'Avrunda uppåt till butikens försäljningssteg. Riktade tryck, rapport, krympning och fel kan kräva mer tyg.' },
  ],
  howTo: [
    { name: 'Ange färdig storlek', text: 'Välj en vanlig storlek eller ange färdig bredd och längd.' },
    { name: 'Beskriv block och tyg', text: 'Ange färdigt block, användbar bredd utan stadkanter och sömsmån.' },
    { name: 'Ställ in marginaler', text: 'Ange extra baksida och välj fem, tio eller femton procent spill.' },
    { name: 'Läs de två inköpen', text: 'Använd mängderna för ovansida och baksida separat och avrunda dem uppåt.' },
  ],
  seo: createSeo({
    overviewTitle: 'Planera tyget före inköp', overview: 'Ovansida och baksida följer olika skärplaner. Ovansidan behöver tillräckligt många rader av kvadrater för alla block, medan baksidan kan kräva flera långa paneler. Kalkylatorn skiljer inköpen åt och visar deras totalsumma.',
    methodTitle: 'Så beräknas tyg till blocken', method: 'Färdig blockstorlek är inte samma som skärstorlek. Sömsmån läggs till på två sidor och antalet kvadrater över användbar bredd beräknas. Blockantalet delas med denna kapacitet och avrundas till hela skärpass innan spill läggs till.',
    tableHeaders: ['Indata', 'Styr', 'Så mäter du'], tableRows: [['Quiltstorlek', 'Rader och kolumner', 'Färdigt mått'], ['Färdigt block', 'Antal och skärmått', 'Utan sömsmån'], ['Användbar bredd', 'Kvadrater per pass', 'Utan stadkanter'], ['Extra baksida', 'Arbetsutrymme', 'På varje sida']],
    backingTitle: 'Varför baksidan kan vridas', backing: 'När baksidan är bredare än tyget måste paneler fogas. Kalkylatorn provar paneler längs quiltens längd och en vriden placering, drar av för fogarna och väljer alternativet som använder minst längd från rullen.',
    advice: ['Mät bredden utan stadkanter.', 'Avrunda varje inköp uppåt.', 'Lägg till reserv för riktade tryck och krympning.', 'Lös delblock innan du skär.'],
    patternTitle: 'Jämför uppskattningen med mönstret', pattern: 'Uppskattningen passar bäst för ett enkelt rutnät av lika fyrkantiga block och ett tyg. Ett verkligt mönster kan fördela färger, lägga till mellanremsor eller kanter och ange placeringen av baksidans söm. Jämför därför med skärlistan.',
    limitTitle: 'Vad resultatet inte kan lova', limit: 'Tyger krymper olika, butiker säljer i olika steg och motiv kan tvinga fram mindre effektiva snitt. Resultatet är en tydlig utgångspunkt men ersätter inte ett specifikt skärdiagram.',
  }),
};
