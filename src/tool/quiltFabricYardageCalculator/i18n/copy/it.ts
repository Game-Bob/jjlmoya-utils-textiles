import { createSeo, type QuiltLocaleCopy } from '../create-content';
import { makeUi } from '../locale-ui';

export const it: QuiltLocaleCopy = {
  slug: 'calcolatore-tessuto-quilt-blocchi-retro',
  title: 'Calcolatore di tessuto per quilt a blocchi e retro',
  description: 'Stima il tessuto per blocchi quadrati e pannelli posteriori con margine di cucitura, scarto e unità metriche o imperiali.',
  ui: makeUi([
    'Sistema di misura', 'Metrico cm', 'Imperiale in', 'Mappa di taglio', 'Pianifica il quilt', 'Misure comuni', 'Personalizzato',
    'Culla', 'Plaid', 'Singolo', 'Queen', 'King', 'Larghezza finita', 'Lunghezza finita', 'Blocco quadrato finito',
    'Larghezza utile del tessuto', 'Margine di cucitura', 'Extra del retro per lato', 'Scarto di taglio del top', 'da bordo finito a bordo finito',
    'da bordo finito a bordo finito', 'misura visibile del blocco', 'dopo aver tolto le cimose', 'su ogni bordo del blocco',
    'extra sui quattro lati', '5 per cento', '10 per cento', '15 per cento', 'Piano di acquisto del tessuto',
    'Inserisci misure positive per disegnare la mappa di taglio.', 'Blocchi da tagliare', 'Griglia dei blocchi', 'Quadrato di taglio',
    'Quadrati sulla larghezza', 'Tessuto per il top', 'Tessuto per il retro', 'Pannelli del retro', 'Orientamento del retro',
    'Pannelli longitudinali', 'Pannelli trasversali', 'Totale top e retro', 'Piano di taglio pronto', 'Controlla il piano',
    'Le misure finite non sono multipli interi del blocco. La riga o colonna esterna richiede blocchi rifilati oppure un bordo.',
    'Nella larghezza utile entra un solo quadrato. Un tessuto più largo o un blocco più piccolo può ridurre il metraggio.',
    'Usa misure positive e un tessuto abbastanza largo per almeno un quadrato di taglio.', 'Ripristina esempio', 'Copia piano di acquisto',
    'Piano di acquisto copiato', 'Apri le note di calcolo', 'Colonne e righe vengono arrotondate per eccesso dividendo le misure finite per il blocco finito. Il quadrato di taglio aggiunge due margini. Il retro confronta due orientamenti dopo le perdite nelle cuciture.',
    'Limite della pianificazione.', 'Il modello presume blocchi quadrati uguali tagliati da un solo tessuto per il top. Non include sashing, bordi, più colori, motivi direzionali, imbottitura o sbieco.',
    'Una griglia patchwork è affiancata dalla disposizione più efficiente dei pannelli posteriori.',
  ]),
  faq: [
    { question: 'Quale tessuto stima questo calcolatore per quilt?', answer: 'Stima un tessuto per tutti i blocchi quadrati del top e un tessuto separato per il retro. Non calcola imbottitura o sbieco.' },
    { question: 'Perché il quadrato di taglio è più grande del blocco finito?', answer: 'Il blocco finito è la parte visibile dopo la cucitura. Il taglio aggiunge il margine scelto ai due lati di ogni dimensione.' },
    { question: 'Come vengono calcolati i pannelli posteriori?', answer: 'Il calcolo aggiunge la sporgenza, sottrae la perdita nelle cuciture e confronta una disposizione longitudinale con una trasversale.' },
    { question: 'Posso calcolare più tessuti nello stesso patchwork?', answer: 'Calcola ogni gruppo di colore separatamente con lo stesso quadrato di taglio e il numero di blocchi assegnato a quel tessuto.' },
    { question: 'Devo comprare esattamente la quantità mostrata?', answer: 'Arrotonda alla frazione venduta dal negozio. Motivi direzionali, rapporti, restringimento ed errori possono richiedere più tessuto.' },
  ],
  howTo: [
    { name: 'Imposta la misura finita', text: 'Scegli una misura comune oppure inserisci larghezza e lunghezza finite.' },
    { name: 'Descrivi blocchi e tessuto', text: 'Inserisci il blocco finito, la larghezza utile senza cimose e il margine.' },
    { name: 'Imposta le maggiorazioni', text: "Indica l'extra del retro e scegli uno scarto del cinque, dieci o quindici per cento." },
    { name: 'Leggi i due acquisti', text: 'Usa separatamente le quantità del top e del retro e arrotondale alla frazione di vendita.' },
  ],
  seo: createSeo({
    overviewTitle: 'Pianifica il tessuto prima di scegliere il metraggio', overview: 'Il top e il retro seguono piani di taglio diversi. Il top deve fornire abbastanza file di quadrati per tutti i blocchi, mentre il retro può richiedere più pannelli lunghi cuciti insieme. Il calcolatore separa i due acquisti e mostra il totale per il budget.',
    methodTitle: 'Come si calcola il tessuto dei blocchi', method: 'La misura finita non è la misura di taglio. Il margine viene aggiunto su due lati, poi si verifica quanti quadrati entrano nella larghezza utile. Il numero di blocchi viene diviso per questa capacità e arrotondato a passate intere prima di applicare lo scarto.',
    tableHeaders: ['Dato', 'Cosa controlla', 'Come misurarlo'], tableRows: [['Misura del quilt', 'Righe e colonne', 'Misura cucita'], ['Blocco finito', 'Numero e taglio', 'Senza margine'], ['Larghezza utile', 'Quadrati per passata', 'Senza cimose'], ['Extra del retro', 'Spazio di lavoro', 'Su ogni lato']],
    backingTitle: 'Perché il retro può ruotare', backing: 'Quando il retro supera la larghezza del tessuto bisogna unire pannelli. Il calcolatore prova pannelli lungo il quilt e pannelli ruotati, sottrae le perdite nelle giunzioni e seleziona la soluzione che consuma meno lunghezza dal rotolo.',
    advice: ['Misura la larghezza utile senza cimose.', 'Arrotonda ogni acquisto alla frazione venduta.', 'Aggiungi riserva per motivi direzionali e restringimento.', 'Risolvi i blocchi parziali prima del taglio.'],
    patternTitle: 'Confronta la stima con il cartamodello', pattern: 'La stima è più affidabile per una griglia semplice di blocchi quadrati uguali e un solo tessuto. Un progetto reale può distribuire più colori, aggiungere sashing o bordi e imporre una posizione precisa alla cucitura del retro. Confronta sempre il risultato con la lista di taglio.',
    limitTitle: 'Cosa non può garantire il risultato', limit: 'I tessuti si restringono in modo diverso, i negozi vendono frazioni differenti e i motivi possono imporre tagli inefficienti. Il risultato offre una base trasparente, ma non sostituisce il diagramma di taglio del progetto.',
  }),
};
