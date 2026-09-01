import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import type { SEOSection } from '../../../types';
import type { QuiltBindingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

type SupportedLocale = 'de' | 'es' | 'fr' | 'id' | 'it' | 'ja' | 'ko' | 'nl' | 'pl' | 'pt' | 'ru' | 'sv' | 'tr' | 'zh';

interface SeoBundle {
  introTitle: string;
  intro: string;
  measureTitle: string;
  measure: string;
  tableHeaders: [string, string, string];
  tableRows: [string, string, string][];
  readTitle: string;
  read: string;
  actions: string[];
  tipTitle: string;
  tip: string;
  joinsTitle: string;
  joins: string;
}

interface LocaleBundle {
  slug: string;
  title: string;
  description: string;
  ui: UiValues;
  faq: [string, string][];
  howTo: [string, string][];
  seo: SeoBundle;
}

type UiValues = [
  string, string, string, string, string, string, string, string, string, string,
  string, string, string, string, string, string, string, string, string, string,
  string, string, string, string, string, string, string, string, string, string,
  string, string, string, string, string, string, string, string, string, string,
  string, string, string, string, string, string, string, string, string,
];

const makeUi = (values: UiValues): QuiltBindingCalculatorUI => {
  const [
    unitLabel, metricLabel, imperialLabel, stageLabel, controlsLabel, dimensionsLabel, fabricLabel, methodLabel, safetyLabel,
    widthLabel, lengthLabel, cornersLabel, stripWidthLabel, fabricWidthLabel, seamAllowanceLabel, diagonalLabel, straightLabel,
    safetyFive, safetyTen, safetyFifteen, widthHint, lengthHint, cornersHint, stripWidthHint, fabricWidthHint, seamAllowanceHint,
    resultLabel, emptyResult, perimeterLabel, requiredLabel, stripsLabel, cutSizeLabel, joinedLengthLabel, surplusLabel, joinsLabel,
    cuttingPlanLabel, readyBadge, reviewBadge, warningLargeWaste, warningSmallSurplus, invalidMessage, reset, copySummary, copied,
    formulaTitle, formulaText, noteTitle, noteText, canvasAlt,
  ] = values;
  return {
    unitLabel, metricLabel, imperialLabel, stageLabel, controlsLabel, dimensionsLabel, fabricLabel, methodLabel, safetyLabel,
    widthLabel, lengthLabel, cornersLabel, stripWidthLabel, fabricWidthLabel, seamAllowanceLabel, diagonalLabel, straightLabel,
    safetyFive, safetyTen, safetyFifteen, widthHint, lengthHint, cornersHint, stripWidthHint, fabricWidthHint, seamAllowanceHint,
    resultLabel, emptyResult, perimeterLabel, requiredLabel, stripsLabel, cutSizeLabel, joinedLengthLabel, surplusLabel, joinsLabel,
    cuttingPlanLabel, readyBadge, reviewBadge, warningLargeWaste, warningSmallSurplus, invalidMessage, reset, copySummary, copied,
    formulaTitle, formulaText, noteTitle, noteText, canvasAlt,
  };
};

const makeFaq = (items: [string, string][]): FAQItem[] => items.map(([question, answer]) => ({ question, answer }));
const makeHowTo = (items: [string, string][]): HowToStep[] => items.map(([name, text]) => ({ name, text }));

const bundles: Record<SupportedLocale, LocaleBundle> = {
  es: {
    slug: 'calculadora-longitud-y-tiras-de-bies-para-quilt',
    title: 'Calculadora de longitud y tiras de bies para quilt',
    description: 'Calcula la longitud del bies, el número de tiras, el corte de tela y el plan de uniones para un quilt rectangular con margen de seguridad visible.',
    ui: ['Sistema de medida', 'Metrico cm', 'Imperial in', 'La ruta del bies', 'Define el corte', 'Quilt terminado', 'Tela del bies', 'Metodo de union', 'Margen de seguridad', 'Ancho del quilt', 'Largo del quilt', 'Esquinas', 'Ancho de tira', 'Ancho util de tela', 'Margen de costura', 'Union diagonal', 'Union recta', '5 por ciento', '10 por ciento', '15 por ciento', 'de borde a borde', 'de borde a borde', 'normalmente 4', 'ancho que vas a cortar', 'despues de quitar orillos', 'por borde cosido', 'Tu plan de corte', 'Introduce medidas positivas para dibujar la ruta.', 'Perimetro del quilt', 'Bies que debes preparar', 'Tiras que cortar', 'Cada tira', 'Longitud unida', 'Sobrante tras las uniones', 'Uniones que coser', 'Plan de corte', 'Plan listo para revisar', 'Revisa el margen', 'El margen elegido es generoso. Comprueba si tu tela necesita tanta reserva.', 'El sobrante final esta cerca de una perdida de union. Vuelve a medir el quilt antes de cortar.', 'Usa medidas positivas, un ancho util mayor que la tira y un numero valido de esquinas.', 'Restablecer ejemplo', 'Copiar plan de corte', 'Plan de corte copiado', 'Abrir las notas del metodo', 'El perimetro es 2 x (ancho + largo). El modelo suma dos margenes de costura por esquina, una reserva segun el metodo de union y el porcentaje de seguridad elegido. El numero de tiras es el menor numero entero cuya longitud unida alcanza el bies necesario.', 'Limite del plan.', 'Es un plan transparente para quilts de bordes rectos. No sustituye medir un borde irregular, comprobar una tela direccional ni probar el bies en tu proyecto.', 'Una cinta de bies continua rodea el quilt y muestra las tiras que se uniran.'],
    faq: [
      ['¿Qué medidas necesito para el bies de un quilt?', 'Introduce el ancho y el largo terminados, el número de esquinas, el ancho de tira que vas a cortar, el ancho útil de la tela y el margen de costura. Elige uniones diagonales o rectas y un margen de seguridad.'],
      ['¿Cómo se calcula la longitud del bies?', 'La calculadora parte del perímetro rectangular, suma una reserva por esquina y por la unión final, y después aplica el margen de seguridad elegido. Las reservas quedan visibles para que puedas revisar el plan.'],
      ['¿Por qué cambia el número de tiras según el método de unión?', 'Una unión diagonal cruza todo el ancho de la tira y consume más longitud que una unión recta. El modelo resta esa pérdida en cada conexión antes de contar las tiras.'],
      ['¿Qué ancho de tela debo introducir?', 'Introduce el ancho útil después de quitar los orillos. En algodón de patchwork suele acercarse a 110 cm o 42 pulgadas, pero mide tu tela en vez de confiar en el ancho nominal.'],
      ['¿Sirve para quilts curvos o irregulares?', 'Está pensada para un perímetro representado por ancho, largo y número de esquinas. Las curvas, ondas, telas direccionales y esquinas especiales necesitan más margen y una medición final manual.'],
    ],
    howTo: [
      ['Mide el quilt terminado', 'Mide la parte superior despues de acolchar o recortar. Introduce ancho y largo en el sistema activo y usa las esquinas para describir el borde que vas a rematar.'],
      ['Describe las tiras', 'Introduce el ancho de tira que vas a cortar, el ancho util de tela y el margen de costura que usaras para unir y colocar el bies.'],
      ['Elige la reserva de union', 'Usa uniones diagonales para la conexion habitual de menor bulto o rectas si ese es tu metodo. Selecciona un margen de seguridad del cinco, diez o quince por ciento.'],
      ['Lee y comprueba el plan', 'Corta el numero de tiras indicado con el ancho de tira y el ancho util mostrados. Compara la longitud unida y el sobrante con tu tela real antes de cortar.'],
    ],
    seo: {
      introTitle: 'Calcula el bies del quilt antes de cortar', intro: 'El remate es un paso pequeno con un fallo poco perdonable: si la tira unida se queda corta en la ultima esquina, todo el trabajo se detiene. Esta calculadora convierte el perimetro terminado en una lista de corte que incluye esquinas, union final, perdidas de union y un margen de seguridad visible.',
      measureTitle: 'Que mide la calculadora', measure: 'El ancho y el largo describen el borde terminado, no el relleno ni la trasera. Las esquinas reservan longitud para cada giro. El ancho de tira y el ancho util convierten el bies continuo necesario en un numero entero de tiras cortadas a lo ancho de la tela.',
      tableHeaders: ['Dato', 'Que cambia', 'Comprueba antes de cortar'], tableRows: [['Ancho y largo terminados', 'El perimetro del quilt', 'Mide tras recortar y acolchar'], ['Numero de esquinas', 'La reserva para los giros', 'Anade margen en curvas o esquinas especiales'], ['Ancho de tira y tela', 'El numero y tamano de las tiras', 'Resta los orillos al ancho util'], ['Union y margen de costura', 'La perdida en cada conexion', 'Usa el margen que realmente coseras']],
      readTitle: 'Como leer el plan de corte', read: 'El bies que debes preparar es la longitud continua objetivo despues de sumar perimetro y reservas. Las tiras que cortar se redondean porque la tela no permite fracciones de corte. La longitud unida muestra lo que ofrecen las tiras despues de descontar cada union.',
      actions: ['Vuelve a medir el borde si el quilt no es cuadrado o el sobrante es pequeno.', 'Usa el ancho util despues de quitar orillos, no el numero del rollo.', 'Haz coincidir el margen de la calculadora con el que vas a coser.', 'Aumenta la seguridad para telas direccionales, muchas uniones, curvas o tu primer proyecto.'],
      tipTitle: 'Lo que este resultado no puede prometer', tip: 'El modelo es conservador, pero no puede ver ondas, elasticidad, dibujos direccionales ni un quilt que no sea realmente rectangular. Usa el plan como ayuda de corte y coloca la tira unida alrededor del proyecto antes de cerrar la ultima union.',
      joinsTitle: 'Uniones diagonales y rectas', joins: 'La union diagonal reparte mejor el bulto de la costura. El modelo considera que consume el ancho de la tira, mientras que la union recta consume dos margenes de costura. Son supuestos visibles, no leyes universales de costura.',
    },
  },
  fr: {
    slug: 'calculateur-longueur-et-bandes-de-biais-pour-quilt',
    title: 'Calculateur de longueur et bandes de biais pour quilt',
    description: 'Calculez la longueur du biais, le nombre de bandes, la coupe du tissu et le plan de raccord pour un quilt rectangulaire avec une marge visible.',
    ui: ['Systeme de mesure', 'Metrique cm', 'Imperial po', 'Le parcours du biais', 'Definir la coupe', 'Quilt fini', 'Tissu du biais', 'Methode de raccord', 'Marge de securite', 'Largeur du quilt', 'Longueur du quilt', 'Coins', 'Largeur de bande', 'Largeur utile du tissu', 'Marge de couture', 'Raccord diagonal', 'Raccord droit', '5 pour cent', '10 pour cent', '15 pour cent', 'bord a bord', 'bord a bord', 'generalement 4', 'largeur a couper', 'apres retrait des lisières', 'par bord cousu', 'Votre plan de coupe', 'Saisissez des mesures positives pour dessiner le parcours.', 'Perimetre du quilt', 'Biais a preparer', 'Bandes a couper', 'Chaque bande', 'Longueur apres raccord', 'Surplus apres raccords', 'Raccords a coudre', 'Plan de coupe', 'Plan pret a verifier', 'Verifiez la marge', 'La marge choisie est genereuse. Verifiez si votre tissu a besoin de cette reserve.', 'Le surplus final est proche de la perte d un raccord. Mesurez a nouveau le quilt avant de couper.', 'Utilisez des mesures positives, une largeur utile superieure a la bande et un nombre de coins valide.', 'Reinitialiser exemple', 'Copier le plan de coupe', 'Plan de coupe copie', 'Ouvrir les notes de methode', 'Le perimetre est 2 x (largeur + longueur). Le modele ajoute deux marges de couture par coin, une reserve selon le raccord et le pourcentage de securite choisi. Le nombre de bandes est le plus petit entier dont la longueur raccordee atteint le biais necessaire.', 'Limite du plan.', 'Ce plan transparent convient aux quilts a bords droits. Il ne remplace pas la mesure d un bord irregulier, la verification d un tissu directionnel ni un essai sur votre projet.', 'Un ruban de biais continu entoure le quilt et montre les bandes a raccorder.'],
    faq: [
      ['Quelles mesures faut-il pour le biais d un quilt ?', 'Saisissez la largeur et la longueur finies, le nombre de coins, la largeur de bande a couper, la largeur utile du tissu et la marge de couture. Choisissez des raccords diagonaux ou droits et une marge de securite.'],
      ['Comment la longueur du biais est-elle calculee ?', 'Le calcul part du perimetre rectangulaire, ajoute une reserve pour chaque coin et le raccord final, puis applique la marge de securite choisie. Les reserves restent visibles pour verifier le plan.'],
      ['Pourquoi le nombre de bandes change-t-il selon le raccord ?', 'Un raccord diagonal traverse toute la largeur de la bande et consomme plus de longueur qu un raccord droit. Le modele soustrait cette perte a chaque liaison avant de compter les bandes.'],
      ['Quelle largeur de tissu faut-il entrer ?', 'Entrez la largeur utilisable apres retrait des lisières. Pour un coton de patchwork, elle est souvent proche de 110 cm ou 42 pouces, mais mesurez votre tissu plutot que de vous fier a une largeur nominale.'],
      ['Le calculateur convient-il aux quilts courbes ou irreguliers ?', 'Il est concu pour un perimetre represente par une largeur, une longueur et un nombre de coins. Les courbes, vagues, tissus directionnels et coins inhabituels demandent une marge manuelle plus grande et une mesure finale.'],
    ],
    howTo: [
      ['Mesurer le quilt fini', 'Mesurez le dessus apres matelassage ou recoupe. Entrez la largeur et la longueur dans le systeme actif et utilisez le nombre de coins pour decrire le bord a finir.'],
      ['Decrire les bandes', 'Entrez la largeur de bande a couper, la largeur utile du tissu et la marge de couture utilisee pour raccorder et poser le biais.'],
      ['Choisir la reserve de raccord', 'Utilisez les raccords diagonaux pour une liaison courante qui limite l epaisseur, ou les raccords droits selon votre methode. Choisissez cinq, dix ou quinze pour cent de securite.'],
      ['Lire et controler le plan', 'Coupez le nombre de bandes indique a la largeur indiquee et selon la largeur utile. Comparez la longueur raccordee et le surplus avec votre tissu avant de couper.'],
    ],
    seo: {
      introTitle: 'Calculer le biais du quilt avant de couper', intro: 'La finition est une petite etape dont l erreur pardonne peu. Si la bande raccordee est trop courte au dernier coin, toute la preparation s arrete. Ce calculateur transforme le perimetre fini en liste de coupe avec coins, raccord final, pertes de raccord et marge de securite visible.',
      measureTitle: 'Ce que mesure le calculateur', measure: 'La largeur et la longueur decrivent le bord fini, pas le molleton ni le dos. Le nombre de coins reserve de la longueur pour chaque virage. La largeur de bande et la largeur utile transforment le biais continu necessaire en bandes entieres coupees dans le tissu.',
      tableHeaders: ['Donnee', 'Effet sur le plan', 'A verifier avant la coupe'], tableRows: [['Largeur et longueur finies', 'Le perimetre du quilt', 'Mesurer apres recoupe et matelassage'], ['Nombre de coins', 'La reserve pour les virages', 'Ajouter pour les courbes ou coins inhabituels'], ['Largeur de bande et tissu', 'Le nombre et la taille des bandes', 'Retirer les lisières de la largeur utile'], ['Raccord et marge de couture', 'La perte a chaque liaison', 'Utiliser la marge réellement cousue']],
      readTitle: 'Lire le plan de coupe', read: 'Le biais a preparer est la longueur continue cible apres addition du perimetre et des reserves. Le nombre de bandes est arrondi a l entier superieur, car une coupe ne peut pas fournir une fraction de bande. La longueur raccordee montre ce que les bandes fournissent apres les pertes.',
      actions: ['Mesurez encore le bord si le quilt n est pas carre ou si le surplus est faible.', 'Utilisez la largeur utile apres retrait des lisières, pas la largeur annoncee du rouleau.', 'Faites correspondre la marge du calculateur avec celle que vous allez coudre.', 'Augmentez la securite pour un tissu directionnel, de nombreux raccords, des courbes ou une premiere realisation.'],
      tipTitle: 'Ce que ce resultat ne garantit pas', tip: 'Le modele est volontairement prudent, mais il ne voit pas les vagues, l elasticite, les motifs directionnels ni un quilt qui ne serait pas vraiment rectangulaire. Utilisez le plan comme aide a la coupe, puis placez la bande autour du projet avant le dernier raccord.',
      joinsTitle: 'Raccords diagonaux et droits', joins: 'Le raccord diagonal repartit mieux l epaisseur de la couture. Le calculateur considere qu il consomme la largeur de la bande, tandis qu un raccord droit consomme deux marges de couture. Ce sont des hypotheses visibles, pas des regles universelles.',
    },
  },
  de: {
    slug: 'quilt-einfasslaenge-und-streifen-rechner',
    title: 'Rechner fuer Quilt Einfasslaenge und Streifen',
    description: 'Berechne Einfasslaenge, Streifenanzahl, Stoffzuschnitt und Nahtplan fuer einen rechteckigen Quilt mit sichtbarer Sicherheitszugabe.',
    ui: ['Masseinheit', 'Metrisch cm', 'Imperial Zoll', 'Der Einfassweg', 'Zuschnitt festlegen', 'Fertiger Quilt', 'Einfassstoff', 'Verbindungsmethode', 'Sicherheitszugabe', 'Quiltbreite', 'Quiltlaenge', 'Ecken', 'Streifenbreite', 'Nutzbare Stoffbreite', 'Nahtzugabe', 'Diagonale Verbindung', 'Gerade Verbindung', '5 Prozent', '10 Prozent', '15 Prozent', 'von Kante zu Kante', 'von Kante zu Kante', 'meist 4', 'Zuschneidebreite', 'nach Abzug der Webkanten', 'pro genaehter Kante', 'Dein Zuschnittplan', 'Gib positive Masse ein, um den Weg zu zeichnen.', 'Quiltumfang', 'Vorbereitete Einfassung', 'Zuschneidestreifen', 'Jeder Streifen', 'Verbundene Laenge', 'Ueberschuss nach Verbindungen', 'Zu nae hende Verbindungen', 'Zuschnittplan', 'Plan zur Pruefung bereit', 'Zugabe pruefen', 'Die gewaehlte Zugabe ist grosszuegig. Pruefe, ob dein Stoff so viel Reserve braucht.', 'Der Endueberschuss liegt nahe an einem Verbindungsverlust. Miss den Quilt vor dem Zuschneiden erneut.', 'Verwende positive Masse, eine nutzbare Stoffbreite groesser als die Streifenbreite und eine gueltige Eckenzahl.', 'Beispiel zuruecksetzen', 'Zuschnittplan kopieren', 'Zuschnittplan kopiert', 'Methodennotizen oeffnen', 'Der Umfang ist 2 x (Breite + Laenge). Das Modell addiert zwei Nahtzugaben pro Ecke, eine Reserve je nach Verbindung und die gewaehlte Sicherheitszugabe. Die Streifenanzahl ist die kleinste ganze Zahl, deren verbundene Laenge die benoetigte Einfassung erreicht.', 'Planungsgrenze.', 'Dieser transparente Plan ist fuer gerade Quiltkanten gedacht. Er ersetzt nicht das Messen unregelmaessiger Kanten, die Kontrolle von Richtungsstoffen oder eine Probe am Projekt.', 'Ein durchgehendes Einfassband umgibt den Quilt und zeigt die zu verbindenden Streifen.'],
    faq: [
      ['Welche Masse brauche ich fuer die Quilt-Einfassung?', 'Gib fertige Breite und Laenge, Eckenzahl, geplante Streifenbreite, nutzbare Stoffbreite und Nahtzugabe ein. Waehle diagonale oder gerade Verbindungen und eine Sicherheitszugabe.'],
      ['Wie wird die Einfasslaenge berechnet?', 'Der Rechner beginnt mit dem rechteckigen Umfang, addiert eine Reserve fuer jede Ecke und die letzte Verbindung und wendet dann die Sicherheitszugabe an. Die Reserven bleiben sichtbar.'],
      ['Warum aendert die Verbindungsmethode die Streifenanzahl?', 'Eine diagonale Verbindung kreuzt die gesamte Streifenbreite und verbraucht mehr Laenge als eine gerade Verbindung. Dieser Verlust wird vor dem Zaehlen der Streifen abgezogen.'],
      ['Welche Stoffbreite soll ich eingeben?', 'Verwende die nutzbare Breite nach Abzug der Webkanten. Patchwork-Baumwolle liegt oft nahe bei 110 cm oder 42 Zoll, aber miss deinen Stoff statt dich auf die Nennbreite zu verlassen.'],
      ['Kann ich den Rechner fuer runde oder unregelmaessige Quilts nutzen?', 'Er ist fuer einen Umfang aus Breite, Laenge und Eckenzahl ausgelegt. Kurven, Wellen, Richtungsstoffe und ungewoehnliche Ecken brauchen mehr manuelle Reserve und eine abschliessende Messung.'],
    ],
    howTo: [
      ['Fertigen Quilt messen', 'Miss die Oberseite nach dem Quilten oder Zuschneiden. Gib Breite und Laenge im aktiven Masssystem ein und beschreibe die zu bindende Kante mit der Eckenzahl.'],
      ['Einfassstreifen beschreiben', 'Gib Streifenbreite, nutzbare Stoffbreite und die Nahtzugabe ein, die du zum Verbinden und Annähen verwendest.'],
      ['Verbindungsreserve waehlen', 'Nutze diagonale Verbindungen fuer eine gaengige Verbindung mit weniger Wulst oder gerade Verbindungen nach deiner Arbeitsweise. Waehle fuenf, zehn oder fuenfzehn Prozent Sicherheit.'],
      ['Zuschnittplan lesen und pruefen', 'Schneide die angezeigte Streifenanzahl mit der angezeigten Breite und nutzbaren Stoffbreite. Vergleiche verbundene Laenge und Ueberschuss vor dem Zuschnitt mit deinem echten Stoff.'],
    ],
    seo: {
      introTitle: 'Quilt-Einfassung vor dem Zuschneiden berechnen', intro: 'Die Einfassung ist ein kleiner Arbeitsschritt mit wenig Fehlertoleranz. Wenn der verbundene Streifen an der letzten Ecke zu kurz ist, muss die ganze Vorbereitung stoppen. Dieser Rechner macht aus dem fertigen Umfang einen Zuschnittplan mit Ecken, letzter Verbindung, Verbindungsverlusten und sichtbarer Sicherheitszugabe.',
      measureTitle: 'Was der Rechner misst', measure: 'Breite und Laenge beschreiben die fertige Kante, nicht Vlies oder Rueckseite. Die Eckenzahl reserviert Handhabungslaenge fuer jede Drehung. Streifenbreite und nutzbare Stoffbreite machen daraus ganze Streifen, die quer zum Stoff geschnitten werden.',
      tableHeaders: ['Eingabe', 'Aenderung im Plan', 'Vor dem Zuschneiden pruefen'], tableRows: [['Fertige Breite und Laenge', 'Quiltumfang', 'Nach Zuschneiden und Quilten messen'], ['Eckenzahl', 'Reserve fuer Drehungen', 'Bei Kurven oder Sonderformen erhoehen'], ['Streifen- und Stoffbreite', 'Anzahl und Groesse der Streifen', 'Webkanten von der Nutzbreite abziehen'], ['Verbindung und Nahtzugabe', 'Verlust an jeder Verbindung', 'Die tatsaechlich genaehte Zugabe verwenden']],
      readTitle: 'Den Zuschnittplan lesen', read: 'Vorbereitete Einfassung ist die benoetigte durchgehende Laenge nach Umfang und Reserven. Die Streifenanzahl wird auf ganze Streifen aufgerundet. Die verbundene Laenge zeigt, was die Streifen nach Abzug der Verbindungsverluste liefern.',
      actions: ['Miss die fertige Kante erneut, wenn der Quilt nicht rechtwinklig ist oder der Ueberschuss klein ausfaellt.', 'Verwende die nutzbare Stoffbreite nach den Webkanten, nicht die Zahl auf der Stoffrolle.', 'Stelle die Nahtzugabe des Rechners auf deine echte Naht ein.', 'Erhoehe die Sicherheitszugabe bei Richtungsstoff, vielen Verbindungen, Kurven oder einem ersten Projekt.'],
      tipTitle: 'Was dieses Ergebnis nicht verspricht', tip: 'Das Modell ist bewusst vorsichtig, erkennt aber keine Wellen, Dehnung, Richtungsdrucke oder einen nicht wirklich rechteckigen Quilt. Nutze den Plan als Zuschnitthilfe und lege den verbundenen Streifen vor der letzten Verbindung um das Projekt.',
      joinsTitle: 'Diagonale und gerade Verbindungen', joins: 'Eine diagonale Verbindung verteilt die Nahtdicke besser. Der Rechner behandelt sie als Verlust der Streifenbreite, eine gerade Verbindung als Verlust von zwei Nahtzugaben. Das sind sichtbare Annahmen und keine universellen Naehregeln.',
    },
  },
  it: {
    slug: 'calcolatore-lunghezza-e-strisce-binding-quilt',
    title: 'Calcolatore lunghezza e strisce per binding quilt',
    description: 'Calcola la lunghezza del binding, il numero di strisce, il taglio del tessuto e il piano delle giunzioni per un quilt rettangolare con un margine visibile e più sicuro.',
    ui: ['Sistema di misura', 'Metrico cm', 'Imperiale pollici', 'Il percorso del binding', 'Imposta il taglio', 'Quilt finito', 'Tessuto del binding', 'Metodo di giunzione', 'Margine di sicurezza', 'Larghezza quilt', 'Lunghezza quilt', 'Angoli', 'Larghezza striscia', 'Larghezza utile tessuto', 'Margine di cucitura', 'Giunzione diagonale', 'Giunzione dritta', '5 percento', '10 percento', '15 percento', 'da bordo a bordo', 'da bordo a bordo', 'di solito 4', 'larghezza da tagliare', 'dopo aver rimosso cimose', 'per bordo cucito', 'Il tuo piano di taglio', 'Inserisci misure positive per disegnare il percorso.', 'Perimetro quilt', 'Binding da preparare', 'Strisce da tagliare', 'Ogni striscia', 'Lunghezza giuntata', 'Eccedenza dopo le giunzioni', 'Giunzioni da cucire', 'Piano di taglio', 'Piano pronto da controllare', 'Controlla il margine', 'Il margine scelto e generoso. Verifica se il tessuto richiede davvero questa riserva.', 'L eccedenza finale e vicina alla perdita di una giunzione. Misura di nuovo il quilt prima di tagliare.', 'Usa misure positive, una larghezza utile maggiore della striscia e un numero valido di angoli.', 'Ripristina esempio', 'Copia piano di taglio', 'Piano di taglio copiato', 'Apri le note del metodo', 'Il perimetro e 2 x (larghezza + lunghezza). Il modello aggiunge due margini di cucitura per ogni angolo, una riserva secondo il metodo di giunzione e la percentuale di sicurezza scelta. Il numero di strisce e il minimo intero la cui lunghezza giuntata raggiunge il binding richiesto.', 'Limite del piano.', 'E un piano trasparente per quilt con bordi dritti. Non sostituisce la misura di un bordo irregolare, il controllo di un tessuto direzionale o una prova sul progetto.', 'Un nastro continuo di binding avvolge il quilt e mostra le strisce da unire.'],
    faq: [
      ['Quali misure servono per il binding del quilt?', 'Inserisci larghezza e lunghezza finite, numero di angoli, larghezza della striscia, larghezza utile del tessuto e margine di cucitura. Scegli giunzioni diagonali o dritte e un margine di sicurezza.'],
      ['Come viene calcolata la lunghezza del binding?', 'Il calcolo parte dal perimetro rettangolare, aggiunge una riserva per ogni angolo e per la giunzione finale, poi applica il margine scelto. Le riserve restano visibili per controllare il piano.'],
      ['Perche il numero di strisce cambia con il metodo di giunzione?', 'Una giunzione diagonale attraversa tutta la larghezza della striscia e consuma più lunghezza di una giunzione dritta. Il modello sottrae questa perdita da ogni collegamento prima di contare le strisce.'],
      ['Quale larghezza del tessuto devo inserire?', 'Inserisci la larghezza utile dopo aver tolto le cimose. Il cotone da patchwork spesso e vicino a 110 cm o 42 pollici, ma misura il tuo tessuto invece di affidarti alla larghezza nominale.'],
      ['Il calcolatore funziona per quilt curvi o irregolari?', 'E pensato per un perimetro descritto da larghezza, lunghezza e numero di angoli. Curve, onde, tessuti direzionali e angoli insoliti richiedono piu margine manuale e una misura finale.'],
    ],
    howTo: [
      ['Misura il quilt finito', 'Misura il top dopo quiltatura o rifinitura. Inserisci larghezza e lunghezza nel sistema attivo e usa il numero di angoli per descrivere il bordo da rifinire.'],
      ['Descrivi le strisce', 'Inserisci larghezza della striscia, larghezza utile del tessuto e margine di cucitura che userai per unire e applicare il binding.'],
      ['Scegli la riserva di giunzione', 'Usa giunzioni diagonali per il collegamento comune con meno spessore oppure dritte secondo il tuo metodo. Seleziona cinque, dieci o quindici percento di sicurezza.'],
      ['Leggi e controlla il piano', 'Taglia il numero di strisce indicato con le larghezze mostrate. Confronta lunghezza giuntata ed eccedenza con il tessuto reale prima di tagliare.'],
    ],
    seo: {
      introTitle: 'Calcola il binding del quilt prima di tagliare', intro: 'La finitura e un piccolo passaggio con un errore difficile da recuperare. Se la striscia giuntata e corta all ultimo angolo, tutta la preparazione si ferma. Questo calcolatore trasforma il perimetro finito in un piano di taglio con angoli, giunzione finale, perdite e margine di sicurezza visibile.',
      measureTitle: 'Cosa misura il calcolatore', measure: 'Larghezza e lunghezza descrivono il bordo finito, non imbottitura o retro. Il numero di angoli riserva lunghezza per ogni svolta. Larghezza della striscia e larghezza utile trasformano il binding continuo in strisce intere tagliate sul tessuto.',
      tableHeaders: ['Dato', 'Cosa cambia', 'Controllo prima del taglio'], tableRows: [['Larghezza e lunghezza finite', 'Il perimetro del quilt', 'Misura dopo rifinitura e quiltatura'], ['Numero di angoli', 'La riserva per le svolte', 'Aggiungi per curve o angoli insoliti'], ['Larghezza striscia e tessuto', 'Numero e dimensione delle strisce', 'Togli le cimose dalla larghezza utile'], ['Giunzione e margine', 'Perdita a ogni collegamento', 'Usa il margine che cucirai davvero']],
      readTitle: 'Come leggere il piano di taglio', read: 'Binding da preparare e la lunghezza continua richiesta dopo perimetro e riserve. Le strisce da tagliare vengono arrotondate a un numero intero. La lunghezza giuntata mostra cosa forniscono dopo aver sottratto le perdite delle giunzioni.',
      actions: ['Misura di nuovo il bordo se il quilt non e quadrato o l eccedenza e minima.', 'Usa la larghezza utile dopo le cimose, non quella stampata sul rotolo.', 'Abbina il margine del calcolatore al margine che cucirai.', 'Aumenta la sicurezza per tessuti direzionali, molte giunzioni, curve o un primo progetto.'],
      tipTitle: 'Cosa questo risultato non puo garantire', tip: 'Il modello e prudente, ma non vede onde, elasticita, motivi direzionali o un quilt non realmente rettangolare. Usa il piano come supporto al taglio e appoggia la striscia unita attorno al progetto prima dell ultima giunzione.',
      joinsTitle: 'Giunzioni diagonali e dritte', joins: 'La giunzione diagonale distribuisce meglio lo spessore della cucitura. Il calcolatore la tratta come una perdita pari alla larghezza della striscia, mentre una giunzione dritta consuma due margini. Sono ipotesi visibili, non regole universali.',
    },
  },
  pt: {
    slug: 'calculadora-comprimento-e-tiras-de-vies-para-quilt',
    title: 'Calculadora de comprimento e tiras de vies para quilt',
    description: 'Calcule o comprimento do vies, o numero de tiras, o corte do tecido e o plano de unioes para um quilt retangular com margem visivel.',
    ui: ['Sistema de medida', 'Metrico cm', 'Imperial pol', 'O percurso do vies', 'Defina o corte', 'Quilt acabado', 'Tecido do vies', 'Metodo de uniao', 'Margem de seguranca', 'Largura do quilt', 'Comprimento do quilt', 'Cantos', 'Largura da tira', 'Largura util do tecido', 'Margem de costura', 'Uniao diagonal', 'Uniao reta', '5 por cento', '10 por cento', '15 por cento', 'de borda a borda', 'de borda a borda', 'normalmente 4', 'largura a cortar', 'depois de retirar ourelas', 'por borda cosida', 'O seu plano de corte', 'Introduza medidas positivas para desenhar o percurso.', 'Perimetro do quilt', 'Vies a preparar', 'Tiras a cortar', 'Cada tira', 'Comprimento unido', 'Sobra depois das unioes', 'Unioes a coser', 'Plano de corte', 'Plano pronto para verificar', 'Verifique a margem', 'A margem escolhida e generosa. Confirme se o tecido precisa de tanta reserva.', 'A sobra final esta perto da perda de uma uniao. Meça novamente o quilt antes de cortar.', 'Use medidas positivas, uma largura util maior que a tira e um numero valido de cantos.', 'Repor exemplo', 'Copiar plano de corte', 'Plano de corte copiado', 'Abrir notas do metodo', 'O perimetro e 2 x (largura + comprimento). O modelo soma duas margens de costura por canto, uma reserva conforme a uniao e a percentagem de seguranca escolhida. O numero de tiras e o menor inteiro cuja medida unida atinge o vies necessario.', 'Limite do plano.', 'Este e um plano transparente para quilts de bordas retas. Nao substitui medir uma borda irregular, verificar um tecido direcional ou testar o vies no projeto.', 'Uma fita continua de vies contorna o quilt e mostra as tiras que serao unidas.'],
    faq: [
      ['Que medidas preciso para o vies de um quilt?', 'Introduza a largura e o comprimento acabados, o numero de cantos, a largura da tira, a largura util do tecido e a margem de costura. Escolha unioes diagonais ou retas e uma margem de seguranca.'],
      ['Como e calculado o comprimento do vies?', 'A calculadora parte do perimetro retangular, acrescenta uma reserva por canto e pela uniao final e aplica a margem escolhida. As reservas ficam visiveis para poder verificar o plano.'],
      ['Porque muda o numero de tiras conforme a uniao?', 'Uma uniao diagonal atravessa toda a largura da tira e consome mais comprimento que uma uniao reta. O modelo subtrai essa perda em cada ligacao antes de contar as tiras.'],
      ['Que largura de tecido devo inserir?', 'Insira a largura utilizavel depois de retirar as ourelas. O algodao de patchwork costuma ficar perto de 110 cm ou 42 polegadas, mas meça o seu tecido em vez de confiar na largura nominal.'],
      ['Posso usar para quilts curvos ou irregulares?', 'Foi criada para um perimetro descrito por largura, comprimento e numero de cantos. Curvas, ondas, tecidos direcionais e cantos especiais precisam de mais margem manual e de uma medicao final.'],
    ],
    howTo: [
      ['Meça o quilt acabado', 'Meça o topo depois de acolchoar ou aparar. Introduza largura e comprimento no sistema ativo e use os cantos para descrever a borda a rematar.'],
      ['Descreva as tiras', 'Introduza a largura da tira, a largura util do tecido e a margem de costura usada para unir e aplicar o vies.'],
      ['Escolha a reserva de uniao', 'Use unioes diagonais para a ligacao comum com menos volume ou unioes retas conforme o seu metodo. Escolha cinco, dez ou quinze por cento de seguranca.'],
      ['Leia e verifique o plano', 'Corte o numero de tiras indicado com as larguras mostradas. Compare o comprimento unido e a sobra com o tecido real antes de cortar.'],
    ],
    seo: {
      introTitle: 'Calcule o vies do quilt antes de cortar', intro: 'O acabamento e uma etapa pequena com pouca margem para falhas. Se a tira unida ficar curta no ultimo canto, toda a preparacao para. Esta calculadora transforma o perimetro acabado num plano de corte que inclui cantos, uniao final, perdas e margem de seguranca visivel.',
      measureTitle: 'O que a calculadora mede', measure: 'A largura e o comprimento descrevem a borda acabada, nao o enchimento ou o forro. O numero de cantos reserva comprimento para cada volta. A largura da tira e a largura util convertem o vies continuo em tiras inteiras cortadas no tecido.',
      tableHeaders: ['Dado', 'Efeito no plano', 'Verifique antes de cortar'], tableRows: [['Largura e comprimento acabados', 'O perimetro do quilt', 'Meça depois de aparar e acolchoar'], ['Numero de cantos', 'A reserva para as voltas', 'Acrescente para curvas ou cantos especiais'], ['Largura da tira e do tecido', 'Numero e tamanho das tiras', 'Retire ourelas da largura util'], ['Uniao e margem de costura', 'Perda em cada ligacao', 'Use a margem que vai realmente coser']],
      readTitle: 'Como ler o plano de corte', read: 'Vies a preparar e o comprimento continuo alvo depois do perimetro e das reservas. As tiras sao arredondadas para um numero inteiro porque o corte nao fornece fracoes. O comprimento unido mostra o que as tiras oferecem depois das perdas.',
      actions: ['Meça novamente a borda se o quilt nao for quadrado ou a sobra for pequena.', 'Use a largura util depois das ourelas, nao o numero impresso no rolo.', 'Alinhe a margem da calculadora com a margem que vai coser.', 'Aumente a seguranca para tecido direcional, muitas unioes, curvas ou o primeiro projeto.'],
      tipTitle: 'O que este resultado nao pode garantir', tip: 'O modelo e conservador, mas nao ve ondas, elasticidade, motivos direcionais ou um quilt que nao seja realmente retangular. Use o plano como apoio ao corte e coloque a tira unida ao redor do projeto antes da ultima ligacao.',
      joinsTitle: 'Unioes diagonais e retas', joins: 'A uniao diagonal distribui melhor o volume da costura. A calculadora considera que consome a largura da tira, enquanto a uniao reta consome duas margens de costura. Sao hipoteses visiveis, nao regras universais.',
    },
  },
  nl: {
    slug: 'quilt-bindlengte-en-stroken-calculator',
    title: 'Calculator voor quilt bindlengte en stroken',
    description: 'Bereken bindlengte, aantal stroken, stofsnit en verbindingsplan voor een rechthoekige quilt met zichtbare veiligheidsmarge.',
    ui: ['Meetsysteem', 'Metrisch cm', 'Imperiaal inch', 'De bindroute', 'Snit instellen', 'Afgewerkte quilt', 'Bindstof', 'Verbindingsmethode', 'Veiligheidsmarge', 'Quiltbreedte', 'Quiltlengte', 'Hoeken', 'Strookbreedte', 'Bruikbare stofbreedte', 'Naadtoeslag', 'Diagonale verbinding', 'Rechte verbinding', '5 procent', '10 procent', '15 procent', 'van rand tot rand', 'van rand tot rand', 'meestal 4', 'snijbreedte', 'na verwijderen van zelfkanten', 'per genaaide rand', 'Je snijplan', 'Voer positieve maten in om de route te tekenen.', 'Quiltomtrek', 'Voor te bereiden binding', 'Te snijden stroken', 'Elke strook', 'Verbonden lengte', 'Overschot na verbindingen', 'Te naaien verbindingen', 'Snijplan', 'Plan klaar om te controleren', 'Marge controleren', 'De gekozen marge is ruim. Controleer of je stof zoveel reserve nodig heeft.', 'Het uiteindelijke overschot ligt dicht bij een verbindingsverlies. Meet de quilt opnieuw voor het snijden.', 'Gebruik positieve maten, een bruikbare stofbreedte groter dan de strook en een geldig aantal hoeken.', 'Voorbeeld herstellen', 'Snijplan kopieren', 'Snijplan gekopieerd', 'Methodenotities openen', 'De omtrek is 2 x (breedte + lengte). Het model telt twee naadtoeslagen per hoek op, een reserve volgens de verbinding en de gekozen veiligheidsmarge. Het aantal stroken is het kleinste hele aantal waarvan de verbonden lengte de benodigde binding haalt.', 'Plangrens.', 'Dit transparante plan is bedoeld voor rechte quilt-randen. Het vervangt geen meting van een onregelmatige rand, controle van richtingsstof of proef op je project.', 'Een doorlopende bindband loopt rond de quilt en toont de stroken die worden verbonden.'],
    faq: [
      ['Welke maten heb ik nodig voor quiltbinding?', 'Vul de afgewerkte breedte en lengte in, het aantal hoeken, de strookbreedte, de bruikbare stofbreedte en de naadtoeslag. Kies diagonale of rechte verbindingen en een veiligheidsmarge.'],
      ['Hoe wordt de bindlengte berekend?', 'De calculator begint met de rechthoekige omtrek, telt een reserve per hoek en voor de laatste verbinding op en past daarna de gekozen veiligheidsmarge toe.'],
      ['Waarom verandert het aantal stroken per verbindingsmethode?', 'Een diagonale verbinding gaat door de hele strookbreedte en verbruikt meer lengte dan een rechte verbinding. Dat verlies wordt per verbinding afgetrokken voordat de stroken worden geteld.'],
      ['Welke stofbreedte vul ik in?', 'Gebruik de bruikbare breedte na het verwijderen van de zelfkanten. Patchworkkatoen is vaak ongeveer 110 cm of 42 inch, maar meet je eigen stof in plaats van de nominale breedte te gebruiken.'],
      ['Kan dit voor ronde of onregelmatige quilts?', 'De calculator is gemaakt voor een omtrek met breedte, lengte en aantal hoeken. Bogen, golven, richtingsstof en ongebruikelijke hoeken vragen extra handmatige marge en een eindmeting.'],
    ],
    howTo: [
      ['Meet de afgewerkte quilt', 'Meet de bovenkant na quilten of bijsnijden. Vul breedte en lengte in het actieve meetsysteem in en beschrijf de te binden rand met het aantal hoeken.'],
      ['Beschrijf de stroken', 'Vul de strookbreedte, bruikbare stofbreedte en naadtoeslag in die je gebruikt om de binding te verbinden en vast te zetten.'],
      ['Kies de verbindingsreserve', 'Gebruik diagonale verbindingen voor de gebruikelijke verbinding met minder dikte of rechte verbindingen volgens je werkwijze. Kies vijf, tien of vijftien procent veiligheid.'],
      ['Lees en controleer het snijplan', 'Snijd het getoonde aantal stroken met de getoonde breedtes. Vergelijk verbonden lengte en overschot met je echte stof voor je snijdt.'],
    ],
    seo: {
      introTitle: 'Bereken quiltbinding voor je gaat snijden', intro: 'De afwerking is klein maar fouten zijn lastig te herstellen. Als de verbonden strook bij de laatste hoek te kort is, stopt de voorbereiding. Deze calculator maakt van de afgewerkte omtrek een snijplan met hoeken, laatste verbinding, verbindingsverlies en zichtbare veiligheidsmarge.',
      measureTitle: 'Wat de calculator meet', measure: 'Breedte en lengte beschrijven de afgewerkte rand, niet vulling of achterkant. Het aantal hoeken reserveert lengte voor elke draai. Strookbreedte en bruikbare stofbreedte maken van de benodigde doorlopende binding hele stroken.',
      tableHeaders: ['Invoer', 'Effect op het plan', 'Controle voor het snijden'], tableRows: [['Afgewerkte breedte en lengte', 'De quiltomtrek', 'Meet na bijsnijden en quilten'], ['Aantal hoeken', 'Reserve voor draaien', 'Voeg toe voor bogen of speciale hoeken'], ['Strook- en stofbreedte', 'Aantal en maat van stroken', 'Haal zelfkanten van de bruikbare breedte'], ['Verbinding en naadtoeslag', 'Verlies per verbinding', 'Gebruik de toeslag die je echt naait']],
      readTitle: 'Het snijplan lezen', read: 'Voor te bereiden binding is de doel-lengte na omtrek en reserves. Het aantal stroken wordt naar boven afgerond omdat een snede geen fractie van een strook oplevert. De verbonden lengte toont wat overblijft na verbindingsverlies.',
      actions: ['Meet de rand opnieuw als de quilt niet haaks is of het overschot klein is.', 'Gebruik de bruikbare breedte na de zelfkanten, niet het getal op de rol.', 'Laat de naadtoeslag overeenkomen met wat je echt naait.', 'Vergroot de veiligheidsmarge voor richtingsstof, veel verbindingen, bogen of een eerste project.'],
      tipTitle: 'Wat dit resultaat niet kan beloven', tip: 'Het model is bewust voorzichtig, maar ziet geen golven, rek, richtingsmotieven of een quilt die niet echt rechthoekig is. Gebruik het plan als snijhulp en leg de verbonden strook rond het project voor je de laatste verbinding maakt.',
      joinsTitle: 'Diagonale en rechte verbindingen', joins: 'Een diagonale verbinding verdeelt de naaddikte beter. De calculator rekent hiervoor de strookbreedte als verlies, terwijl een rechte verbinding twee naadtoeslagen verbruikt. Dit zijn zichtbare aannames, geen universele naairegels.',
    },
  },
  id: {
    slug: 'kalkulator-panjang-dan-strip-binding-quilt',
    title: 'Kalkulator panjang dan strip binding quilt',
    description: 'Hitung panjang binding, jumlah strip, ukuran potongan kain, dan rencana sambungan untuk quilt persegi panjang dengan cadangan yang terlihat.',
    ui: ['Sistem ukuran', 'Metrik cm', 'Imperial inci', 'Rute binding', 'Atur potongan', 'Quilt selesai', 'Kain binding', 'Metode sambungan', 'Cadangan keamanan', 'Lebar quilt', 'Panjang quilt', 'Sudut', 'Lebar strip', 'Lebar kain yang dapat digunakan', 'Kelonggaran jahitan', 'Sambungan diagonal', 'Sambungan lurus', '5 persen', '10 persen', '15 persen', 'dari tepi ke tepi', 'dari tepi ke tepi', 'biasanya 4', 'lebar yang dipotong', 'setelah tepi kain dibuang', 'per tepi jahitan', 'Rencana potongan Anda', 'Masukkan ukuran positif untuk menggambar rute.', 'Keliling quilt', 'Binding yang disiapkan', 'Strip yang dipotong', 'Setiap strip', 'Panjang setelah disambung', 'Sisa setelah sambungan', 'Sambungan yang dijahit', 'Rencana potongan', 'Rencana siap diperiksa', 'Periksa cadangan', 'Cadangan yang dipilih cukup besar. Periksa apakah kain Anda membutuhkan sebanyak itu.', 'Sisa akhir mendekati kehilangan satu sambungan. Ukur quilt lagi sebelum memotong.', 'Gunakan ukuran positif, lebar kain yang dapat digunakan lebih besar dari strip, dan jumlah sudut yang valid.', 'Atur ulang contoh', 'Salin rencana potongan', 'Rencana potongan disalin', 'Buka catatan metode', 'Keliling adalah 2 x (lebar + panjang). Model menambahkan dua kelonggaran jahitan untuk setiap sudut, cadangan sesuai metode sambungan, dan persentase keamanan yang dipilih. Jumlah strip adalah bilangan bulat terkecil yang panjang sambungannya mencapai binding yang dibutuhkan.', 'Batas rencana.', 'Ini adalah rencana transparan untuk tepi quilt lurus. Rencana ini tidak menggantikan pengukuran tepi tidak beraturan, pemeriksaan kain searah, atau uji coba pada proyek Anda.', 'Pita binding berkelanjutan mengelilingi quilt dan menunjukkan strip yang akan disambung.'],
    faq: [
      ['Ukuran apa yang diperlukan untuk binding quilt?', 'Masukkan lebar dan panjang akhir, jumlah sudut, lebar strip yang akan dipotong, lebar kain yang dapat digunakan, dan kelonggaran jahitan. Pilih sambungan diagonal atau lurus serta cadangan keamanan.'],
      ['Bagaimana panjang binding dihitung?', 'Kalkulator mulai dari keliling persegi panjang, menambahkan cadangan untuk setiap sudut dan sambungan terakhir, lalu menerapkan cadangan keamanan yang dipilih.'],
      ['Mengapa jumlah strip berubah menurut metode sambungan?', 'Sambungan diagonal melintasi seluruh lebar strip dan memakai panjang lebih banyak daripada sambungan lurus. Model mengurangi kehilangan ini pada setiap sambungan sebelum menghitung strip.'],
      ['Lebar kain apa yang harus dimasukkan?', 'Masukkan lebar yang bisa dipotong setelah tepi kain dibuang. Katun quilting sering mendekati 110 cm atau 42 inci, tetapi ukur kain Anda sendiri.'],
      ['Apakah kalkulator ini untuk quilt melengkung atau tidak beraturan?', 'Kalkulator dirancang untuk keliling yang dijelaskan oleh lebar, panjang, dan jumlah sudut. Kurva, gelombang, kain searah, dan sudut khusus membutuhkan cadangan manual yang lebih besar dan pengukuran akhir.'],
    ],
    howTo: [
      ['Ukur quilt yang selesai', 'Ukur bagian atas setelah quilting atau pemangkasan. Masukkan lebar dan panjang dalam sistem aktif dan gunakan jumlah sudut untuk menjelaskan tepi yang akan diberi binding.'],
      ['Jelaskan strip binding', 'Masukkan lebar strip, lebar kain yang dapat digunakan, dan kelonggaran jahitan untuk menyambung serta memasang binding.'],
      ['Pilih cadangan sambungan', 'Gunakan sambungan diagonal untuk sambungan umum dengan tonjolan lebih kecil atau sambungan lurus sesuai metode Anda. Pilih keamanan lima, sepuluh, atau lima belas persen.'],
      ['Baca dan periksa rencana', 'Potong jumlah strip yang ditampilkan dengan ukuran yang ditampilkan. Bandingkan panjang sambungan dan sisa dengan kain sebenarnya sebelum memotong.'],
    ],
    seo: {
      introTitle: 'Hitung binding quilt sebelum memotong', intro: 'Finishing adalah langkah kecil dengan kesalahan yang sulit diperbaiki. Jika strip yang tersambung kurang panjang di sudut terakhir, persiapan harus berhenti. Kalkulator ini mengubah keliling akhir menjadi daftar potongan dengan sudut, sambungan terakhir, kehilangan sambungan, dan cadangan keamanan yang terlihat.',
      measureTitle: 'Apa yang diukur kalkulator', measure: 'Lebar dan panjang menjelaskan tepi akhir, bukan batting atau bagian belakang. Jumlah sudut menyediakan panjang untuk setiap belokan. Lebar strip dan kain yang dapat digunakan mengubah binding berkelanjutan menjadi strip utuh.',
      tableHeaders: ['Masukan', 'Perubahan pada rencana', 'Periksa sebelum memotong'], tableRows: [['Lebar dan panjang akhir', 'Keliling quilt', 'Ukur setelah trimming dan quilting'], ['Jumlah sudut', 'Cadangan untuk belokan', 'Tambahkan untuk kurva atau sudut khusus'], ['Lebar strip dan kain', 'Jumlah dan ukuran strip', 'Kurangi tepi kain dari lebar berguna'], ['Sambungan dan kelonggaran', 'Kehilangan tiap sambungan', 'Gunakan kelonggaran yang benar-benar dijahit']],
      readTitle: 'Cara membaca rencana potongan', read: 'Binding yang disiapkan adalah panjang berkelanjutan setelah keliling dan cadangan digabungkan. Jumlah strip dibulatkan ke atas karena potongan kain tidak menghasilkan sebagian strip. Panjang setelah disambung menunjukkan hasil setelah kehilangan tiap sambungan.',
      actions: ['Ukur tepi lagi jika quilt tidak persegi atau sisanya sangat kecil.', 'Gunakan lebar kain setelah tepi dibuang, bukan angka pada gulungan.', 'Samakan kelonggaran kalkulator dengan jahitan yang benar-benar digunakan.', 'Tambah cadangan untuk kain searah, banyak sambungan, kurva, atau proyek pertama.'],
      tipTitle: 'Hal yang tidak dapat dijanjikan hasil ini', tip: 'Model ini sengaja berhati-hati, tetapi tidak dapat melihat gelombang, kelenturan, motif searah, atau quilt yang tidak benar-benar persegi panjang. Gunakan rencana sebagai bantuan potong dan letakkan strip yang tersambung mengelilingi proyek sebelum sambungan terakhir.',
      joinsTitle: 'Sambungan diagonal dan lurus', joins: 'Sambungan diagonal menyebarkan ketebalan jahitan dengan lebih baik. Kalkulator menganggapnya menghabiskan lebar strip, sedangkan sambungan lurus menghabiskan dua kelonggaran jahitan. Ini adalah asumsi yang terlihat, bukan aturan menjahit universal.',
    },
  },
  sv: {
    slug: 'kalkylator-quiltkant-langd-och-remsor',
    title: 'Kalkylator for quiltkantens langd och remsor',
    description: 'Beräkna längd på quiltens kantband, antal remsor, tygklippning och skarvplan för en rektangulär quilt med synlig marginal.',
    ui: ['Matt system', 'Metriskt cm', 'Imperial tum', 'Kantbandets vag', 'Stall in klippningen', 'Fardig quilt', 'Kantbandstyg', 'Skarvmetod', 'Sakerhetsmarginal', 'Quiltens bredd', 'Quiltens langd', 'Hjorn', 'Remsbredd', 'Anvandbar tygbredd', 'Somsman', 'Diagonal skarv', 'Rak skarv', '5 procent', '10 procent', '15 procent', 'kant till kant', 'kant till kant', 'vanligen 4', 'bredd att klippa', 'efter borttagna stadkanter', 'per sydd kant', 'Din klippplan', 'Ange positiva matt for att rita vagen.', 'Quiltens omkrets', 'Kantband att forbereda', 'Remsor att klippa', 'Varje remsa', 'Skarvad langd', 'Overskott efter skarvar', 'Skarvar att sy', 'Klippplan', 'Planen ar klar att kontrollera', 'Kontrollera marginalen', 'Den valda marginalen ar generos. Kontrollera om tyget verkligen behover sa mycket reserv.', 'Det slutliga overskottet ligger nara en skarvforlust. Mata quilten igen fore klippning.', 'Anvand positiva matt, en anvandbar tygbredd som ar storre an remsan och ett giltigt antal horn.', 'Aterstall exempel', 'Kopiera klippplan', 'Klippplan kopierad', 'Oppna metodanteckningar', 'Omkretsen ar 2 x (bredd + langd). Modellen lagger till tva somsman per horn, en reserv enligt skarvmetoden och vald sakerhetsprocent. Antalet remsor ar det minsta heltal vars skarvade langd nar den nodvandiga kantbandlangden.', 'Planeringsgrans.', 'Detta ar en transparent plan for raka quiltkanter. Den ersatter inte mattning av oregelbundna kanter, kontroll av riktat tyg eller provning pa projektet.', 'Ett sammanhangande kantband gar runt quilten och visar remsorna som ska skarvas.'],
    faq: [
      ['Vilka matt behover jag for quiltens kantband?', 'Ange fardig bredd och langd, antal horn, remsbredd, anvandbar tygbredd och somsman. Valj diagonal eller rak skarv samt en sakerhetsmarginal.'],
      ['Hur beraknas kantbandets langd?', 'Kalkylatorn borjar med den rektangulera omkretsen, lagger till reserv for varje horn och den sista skarven och anvander sedan vald marginal.'],
      ['Varfor andras antalet remsor med skarvmetoden?', 'En diagonal skarv gar over hela remsbredden och forbrukar mer langd an en rak skarv. Modellen drar av denna forlust vid varje skarv innan remsorna raknas.'],
      ['Vilken tygbredd ska jag ange?', 'Ange anvandbar bredd efter borttagna stadkanter. Quilttyg ar ofta nara 110 cm eller 42 tum, men mata ditt tyg i stallet for att lita pa nominell bredd.'],
      ['Fungerar den for rundade eller oregelbundna quilts?', 'Den ar gjord for en omkrets beskriven med bredd, langd och antal horn. Kurvor, vagor, riktat tyg och ovanliga horn kraver storre manuell reserv och en slutlig mattning.'],
    ],
    howTo: [
      ['Mata den fardiga quilten', 'Mata ovansidan efter kviltning eller trimning. Ange bredd och langd i aktivt matt system och anvand hornantalet for kanten som ska bindas.'],
      ['Beskriv remsorna', 'Ange remsbredd, anvandbar tygbredd och den somsman du anvander for att skarva och sy fast kantbandet.'],
      ['Valj skarvreserv', 'Anvand diagonala skarvar for den vanliga kopplingen med mindre bulk eller raka skarvar enligt din metod. Valj fem, tio eller femton procent sakerhet.'],
      ['Las och kontrollera planen', 'Klipp det visade antalet remsor med de visade mattet. Jamfor skarvad langd och overskott med ditt riktiga tyg fore klippning.'],
    ],
    seo: {
      introTitle: 'Berakna quiltens kantband fore klippning', intro: 'Kantningen ar ett litet steg med liten tolerans for fel. Om den skarvade remsan tar slut vid sista hornet stannar hela forberedelsen. Den har kalkylatorn gor en klippplan av den fardiga omkretsen med horn, sista skarv, skarvforluster och synlig sakerhetsmarginal.',
      measureTitle: 'Vad kalkylatorn mater', measure: 'Bredd och langd beskriver den fardiga kanten, inte vadd eller baksida. Antalet horn reserverar langd for varje svang. Remsbredd och anvandbar tygbredd omvandlar kantbandet till hela remsor som klipps ur tyget.',
      tableHeaders: ['Indata', 'Andring i planen', 'Kontroll fore klippning'], tableRows: [['Fardig bredd och langd', 'Quiltens omkrets', 'Mata efter trimning och kviltning'], ['Antal horn', 'Reserv for svangarna', 'Lagg till for kurvor eller speciella horn'], ['Rems- och tygbredd', 'Antal och storlek pa remsor', 'Dra av stadkanter fran anvandbar bredd'], ['Skarv och somsman', 'Forlust vid varje skarv', 'Anvand den somsman du verkligen syr']],
      readTitle: 'Sa laser du klippplanen', read: 'Kantband att forbereda ar den sammanhangande langden efter omkrets och reserver. Antalet remsor avrundas uppat eftersom en tygklippning inte ger en bruten remsa. Skarvad langd visar vad remsorna ger efter skarvforlusterna.',
      actions: ['Mata kanten igen om quilten inte ar vinkelrat eller overskottet ar litet.', 'Anvand tygbredden efter stadkanterna, inte siffran pa rullen.', 'Lat kalkylatorns somsman matcha den du faktiskt syr.', 'Oka sakerheten for riktat tyg, manga skarvar, kurvor eller ett forsta projekt.'],
      tipTitle: 'Vad resultatet inte kan lova', tip: 'Modellen ar avsiktligt forsiktig men ser inte vagor, elasticitet, riktade monster eller en quilt som inte ar rektangular. Anvand planen som klipphjalp och lagg den skarvade remsan runt projektet fore sista skarven.',
      joinsTitle: 'Diagonala och raka skarvar', joins: 'En diagonal skarv fordelar somsockret battre. Kalkylatorn raknar den som en forlust lika med remsbredden, medan en rak skarv forbrukar tva somsman. Det ar synliga antaganden, inte universella syregler.',
    },
  },
  pl: {
    slug: 'kalkulator-dlugosci-i-paskow-lamowki-do-quiltu',
    title: 'Kalkulator dlugosci i paskow lamowki do quiltu',
    description: 'Oblicz długość lamówki, liczbę pasków, cięcie materiału i plan łączenia dla prostokątnego quiltu z widocznym zapasem.',
    ui: ['System miary', 'Metryczny cm', 'Imperialny cale', 'Trasa lamowki', 'Ustaw ciecie', 'Gotowy quilt', 'Material lamowki', 'Metoda laczenia', 'Zapas bezpieczenstwa', 'Szerokosc quiltu', 'Dlugosc quiltu', 'Narozniki', 'Szerokosc paska', 'Uzyteczna szerokosc materialu', 'Zapas na szew', 'Laczenie skosne', 'Laczenie proste', '5 procent', '10 procent', '15 procent', 'od krawedzi do krawedzi', 'od krawedzi do krawedzi', 'zwykle 4', 'szerokosc do ciecia', 'po odjeciu krajki', 'na szyta krawedz', 'Twoj plan ciecia', 'Wpisz dodatnie wymiary, aby narysowac trase.', 'Obwod quiltu', 'Lamowka do przygotowania', 'Paski do wyciecia', 'Kazdy pasek', 'Dlugosc po laczeniu', 'Nadmiar po laczeniach', 'Laczenia do zszycia', 'Plan ciecia', 'Plan gotowy do sprawdzenia', 'Sprawdz zapas', 'Wybrany zapas jest duzy. Sprawdz, czy material rzeczywiscie potrzebuje takiej rezerwy.', 'Koncowy nadmiar jest zblizony do straty jednego laczenia. Zmierz quilt ponownie przed cieciem.', 'Uzyj dodatnich wymiarow, uzytecznej szerokosci materialu wiekszej od paska i prawidlowej liczby naroznikow.', 'Przywroc przyklad', 'Kopiuj plan ciecia', 'Plan ciecia skopiowany', 'Otworz notatki metody', 'Obwod to 2 x (szerokosc + dlugosc). Model dodaje dwa zapasy na szew dla kazdego naroznika, rezerwe zgodna z metoda laczenia i wybrany procent bezpieczenstwa. Liczba paskow to najmniejsza liczba calkowita, ktorej dlugosc po laczeniu osiaga wymagana lamowke.', 'Granica planu.', 'To przejrzysty plan dla prostych krawedzi quiltu. Nie zastapi pomiaru nieregularnej krawedzi, sprawdzenia materialu kierunkowego ani proby na projekcie.', 'Ciagla lamowka otacza quilt i pokazuje paski, ktore zostana polaczone.'],
    faq: [
      ['Jakich wymiarow potrzebuje do lamowki quiltu?', 'Wpisz gotowa szerokosc i dlugosc, liczbe naroznikow, szerokosc ciecia paska, uzyteczna szerokosc materialu i zapas na szew. Wybierz laczenia skosne lub proste oraz zapas bezpieczenstwa.'],
      ['Jak obliczana jest dlugosc lamowki?', 'Kalkulator zaczyna od prostokatnego obwodu, dodaje rezerwe na kazdy naroznik i ostatnie laczenie, a potem stosuje wybrany zapas bezpieczenstwa.'],
      ['Dlaczego liczba paskow zmienia sie przy innej metodzie laczenia?', 'Laczenie skosne przechodzi przez cala szerokosc paska i zuzywa wiecej dlugosci niz laczenie proste. Model odejmuje te strate przy kazdym laczeniu przed policzeniem paskow.'],
      ['Jaka szerokosc materialu wpisac?', 'Wpisz uzyteczna szerokosc po odjeciu krajki. Tkanina bawelniana do patchworku czesto ma okolo 110 cm lub 42 cale, ale zmierz swoj material.'],
      ['Czy kalkulator obsluguje quilt krzywy lub nieregularny?', 'Jest przeznaczony do obwodu opisanego szerokoscia, dlugoscia i liczba naroznikow. Krzywizny, fale, material kierunkowy i nietypowe narozniki wymagaja wiekszego zapasu recznego i koncowego pomiaru.'],
    ],
    howTo: [
      ['Zmierz gotowy quilt', 'Zmierz wierzch po pikowaniu lub przycieciu. Wpisz szerokosc i dlugosc w aktywnym systemie miary oraz liczbe naroznikow dla obszywanej krawedzi.'],
      ['Opisz paski lamowki', 'Wpisz szerokosc paska, uzyteczna szerokosc materialu i zapas na szew uzywany do laczenia oraz przyszywania lamowki.'],
      ['Wybierz rezerwe laczenia', 'Uzyj laczen skosnych dla typowego polaczenia o mniejszej grubosci albo prostych zgodnie ze swoja metoda. Wybierz piec, dziesiec lub pietnascie procent bezpieczenstwa.'],
      ['Przeczytaj i sprawdz plan', 'Wytnij podana liczbe paskow w pokazanym rozmiarze. Przed cieciem porownaj dlugosc po laczeniu i nadmiar z rzeczywistym materialem.'],
    ],
    seo: {
      introTitle: 'Oblicz lamowke quiltu przed cieciem', intro: 'Wykonczenie jest malym etapem, ale pomylka ma duze konsekwencje. Jesli polaczony pasek skonczy sie przy ostatnim narozniku, przygotowanie trzeba przerwac. Ten kalkulator zamienia gotowy obwod w plan ciecia z naroznikami, ostatnim laczeniem, stratami i widocznym zapasem.',
      measureTitle: 'Co mierzy kalkulator', measure: 'Szerokosc i dlugosc opisuja gotowa krawedz, a nie wypelnienie ani spod. Liczba naroznikow rezerwuje dlugosc na kazdy skret. Szerokosc paska i materialu zamieniaja potrzebna lamowke w cale paski wycinane z tkaniny.',
      tableHeaders: ['Dane', 'Zmiana w planie', 'Sprawdz przed cieciem'], tableRows: [['Gotowa szerokosc i dlugosc', 'Obwod quiltu', 'Zmierz po przycieciu i pikowaniu'], ['Liczba naroznikow', 'Rezerwa na skrety', 'Dodaj przy krzywiznach i nietypowych naroznikach'], ['Szerokosc paska i materialu', 'Liczba i rozmiar paskow', 'Odejmij krajke od szerokosci uzytecznej'], ['Laczenie i zapas na szew', 'Strata przy kazdym polaczeniu', 'Uzyj zapasu, ktory naprawde szyjesz']],
      readTitle: 'Jak czytac plan ciecia', read: 'Lamowka do przygotowania to docelowa dlugosc ciagla po dodaniu obwodu i rezerw. Liczba paskow jest zaokraglana w gore, bo ciecie nie daje ulamka paska. Dlugosc po laczeniu pokazuje wynik po odjeciu strat polaczen.',
      actions: ['Zmierz krawedz ponownie, jesli quilt nie jest prostokatny lub nadmiar jest maly.', 'Uzyj szerokosci po odjeciu krajki, a nie liczby z rolki.', 'Dopasuj zapas na szew w kalkulatorze do rzeczywistego szycia.', 'Zwiek sz zapas przy materiale kierunkowym, wielu laczeniach, krzywiznach lub pierwszym projekcie.'],
      tipTitle: 'Czego ten wynik nie obiecuje', tip: 'Model jest ostrozny, ale nie widzi fal, rozciagliwosci, wzorow kierunkowych ani quiltu, ktory nie jest naprawde prostokatny. Uzyj planu jako pomocy przy cieciu i uloz polaczony pasek wokol projektu przed ostatnim laczeniem.',
      joinsTitle: 'Laczenia skosne i proste', joins: 'Laczenie skosne lepiej rozklada grubosc szwu. Kalkulator traktuje je jako strate rowna szerokosci paska, a proste jako strate dwoch zapasow na szew. To jawne zalozenia, nie uniwersalne reguly szycia.',
    },
  },
  tr: {
    slug: 'yorgan-bi-yesi-uzunluk-ve-serit-hesaplayici',
    title: 'Yorgan biyesi uzunluk ve serit hesaplayici',
    description: 'Dikdortgen bir yorgan icin biye uzunlugunu, serit sayisini, kumas kesimini ve birlestirme planini gorunur pay ile hesaplayin.',
    ui: ['Olcu sistemi', 'Metrik cm', 'Imperial inc', 'Biye rotasi', 'Kesimi ayarla', 'Bitmis yorgan', 'Biye kumasi', 'Birlestirme yontemi', 'Guvenlik payi', 'Yorgan genisligi', 'Yorgan uzunlugu', 'Kose', 'Serit genisligi', 'Kullanilabilir kumas genisligi', 'Dikis payi', 'Capraz birlestirme', 'Duz birlestirme', 'Yuzde 5', 'Yuzde 10', 'Yuzde 15', 'kenardan kenara', 'kenardan kenara', 'genellikle 4', 'kesilecek genislik', 'kenar paylari cikarildiktan sonra', 'dikilen kenar basina', 'Kesim planiniz', 'Rotayi cizmek icin pozitif olculer girin.', 'Yorgan cevresi', 'Hazirlanacak biye', 'Kesilecek seritler', 'Her serit', 'Birlestirilmis uzunluk', 'Birlestirmeler sonrasi kalan', 'Dikilecek birlestirmeler', 'Kesim plani', 'Plan kontrol icin hazir', 'Payi kontrol edin', 'Secilen pay buyuk. Kumasinizin bu kadar rezerve ihtiyaci olup olmadigini kontrol edin.', 'Son kalan miktar bir birlestirme kaybina yakin. Kesmeden once yorgani yeniden olcun.', 'Pozitif olculer, seritten daha genis kullanilabilir kumas ve gecerli kose sayisi kullanin.', 'Ornegi sifirla', 'Kesim planini kopyala', 'Kesim plani kopyalandi', 'Yontem notlarini ac', 'Cevre 2 x (genislik + uzunluk) olarak hesaplanir. Model her kose icin iki dikis payi, yonteme gore bir birlestirme rezervi ve secilen guvenlik yuzdesini ekler. Serit sayisi, birlestirilmis uzunlugu gereken biyeye ulasan en kucuk tam sayidir.', 'Plan siniri.', 'Bu, duz kenarli yorganlar icin seffaf bir plandir. Duzenli olmayan kenari olcmeyi, yonlu kumasi kontrol etmeyi veya projede deneme yapmayi yerine gecmez.', 'Surekli biye seridi yorgani sarar ve birlestirilecek seritleri gosterir.'],
    faq: [
      ['Yorgan biyesi icin hangi olculer gerekir?', 'Bitmis genislik ve uzunlugu, kose sayisini, keseceginiz serit genisligini, kullanilabilir kumas genisligini ve dikis payini girin. Capraz veya duz birlestirme ile guvenlik payini secin.'],
      ['Biye uzunlugu nasil hesaplanir?', 'Hesaplama dikdortgen cevresiyle baslar, her kose ve son birlestirme icin pay ekler, sonra secilen guvenlik payini uygular.'],
      ['Birlestirme yontemine gore serit sayisi neden degisir?', 'Capraz birlestirme seridin tum genisligini gecerek duz birlestirmeden daha fazla uzunluk harcar. Model seritleri saymadan once bu kaybi her baglantidan cikarir.'],
      ['Kumas genisligi olarak ne girmeliyim?', 'Kenar paylari cikarildiktan sonra kesilebilen kullanilabilir genisligi girin. Patchwork pamugu genellikle 110 cm veya 42 inc civarindadir, ancak nominal olcuye guvenmek yerine kumasi olcun.'],
      ['Egri veya duzensiz yorganlarda kullanilabilir mi?', 'Genislik, uzunluk ve kose sayisi ile ifade edilen cevre icin tasarlanmistir. Egri kenarlar, dalgalar, yonlu kumaslar ve farkli koseler daha buyuk manuel pay ve son olcum gerektirir.'],
    ],
    howTo: [
      ['Bitmis yorgani olcun', 'Kapitoneden veya kesimden sonra ust yuzeyi olcun. Aktif olcu sisteminde genislik ve uzunlugu girin, biyelenecek kenari kose sayisi ile tanimlayin.'],
      ['Biye seritlerini tanimlayin', 'Kesilecek serit genisligini, kullanilabilir kumas genisligini ve birlestirme ile dikme sirasinda kullanacaginiz dikis payini girin.'],
      ['Birlestirme rezervini secin', 'Daha az kabarik yaygin bir baglanti icin capraz, yonteminiz boyleyse duz birlestirme kullanin. Yuzde bes, on veya on bes guvenlik secin.'],
      ['Kesim planini okuyup kontrol edin', 'Gosterilen sayida seridi gosterilen olculerde kesin. Kesmeden once birlestirilmis uzunluk ve kalani gercek kumasinizla karsilastirin.'],
    ],
    seo: {
      introTitle: 'Kesmeden once yorgan biyesini hesaplayin', intro: 'Biyeyi bitirmek kucuk ama hata payi dusuk bir asamadir. Birlestirilmis serit son kosede kisa kalirsa hazirlik durur. Bu hesaplayici bitmis cevreyi kose, son birlestirme, birlestirme kayiplari ve gorunur guvenlik payi iceren kesim planina donusturur.',
      measureTitle: 'Hesaplayici neyi olcer', measure: 'Genislik ve uzunluk bitmis kenari anlatir; elyaf veya arka yuzeyi degil. Kose sayisi her donus icin uzunluk ayirir. Serit ve kullanilabilir kumas genisligi gereken surekli biyeyi tam seritlere cevirir.',
      tableHeaders: ['Girdi', 'Plana etkisi', 'Kesmeden once kontrol'], tableRows: [['Bitmis genislik ve uzunluk', 'Yorgan cevresi', 'Kesim ve kapitoneden sonra olcun'], ['Kose sayisi', 'Donus rezervi', 'Egriler veya farkli koseler icin artirin'], ['Serit ve kumas genisligi', 'Serit sayisi ve boyutu', 'Kenar paylarini kullanilabilir genislikten cikarın'], ['Birlestirme ve dikis payi', 'Her baglantidaki kayip', 'Gercekte dikeceginiz payi kullanin']],
      readTitle: 'Kesim planini nasil okuyabilirsiniz', read: 'Hazirlanacak biye, cevre ve rezervler birlestirildikten sonraki hedef surekli uzunluktur. Serit sayisi yukari yuvarlanir; cunku kumas kesimi seridin kesirli bir parcasini vermez. Birlestirilmis uzunluk, baglanti kayiplari sonrasi saglanan miktari gosterir.',
      actions: ['Yorgan kare degilse veya kalan miktar azsa kenari tekrar olcun.', 'Rulodaki sayiyi degil, kenar paylarindan sonraki kullanilabilir genisligi kullanin.', 'Hesaplayicidaki dikis payini gercekte dikeceginiz payla eslestirin.', 'Yonlu kumas, cok sayida birlestirme, egriler veya ilk proje icin guvenligi artirin.'],
      tipTitle: 'Bu sonucun garanti edemeyecekleri', tip: 'Model temkinlidir ancak dalgalari, esnemeyi, yonlu desenleri veya gercekten dikdortgen olmayan bir yorgani goremez. Plani kesim yardimcisi olarak kullanin ve son birlestirmeden once seridi projenin etrafinda deneyin.',
      joinsTitle: 'Capraz ve duz birlestirmeler', joins: 'Capraz birlestirme dikis kalinligini daha iyi dagitir. Hesaplayici bunu serit genisligi kadar kayip sayar; duz birlestirme ise iki dikis payi harcar. Bunlar gorunur varsayimlardir, evrensel dikis kurallari degildir.',
    },
  },
  zh: {
    slug: 'quilt-binding-length-and-strip-calculator',
    title: 'Quilt包边长度和布条计算器',
    description: '为矩形quilt计算包边长度、布条数量、布料裁剪尺寸和拼接方案，并显示安全余量。',
    ui: ['测量单位', '公制 cm', '英制 英寸', '包边路线', '设置裁剪', '完成的quilt', '包边布料', '拼接方式', '安全余量', 'Quilt宽度', 'Quilt长度', '角数', '布条宽度', '可用布料宽度', '缝份', '斜向拼接', '直线拼接', '5%', '10%', '15%', '边到边', '边到边', '通常4个', '裁剪宽度', '去除布边后', '每条缝合边', '你的裁剪方案', '请输入正数尺寸以绘制路线。', 'Quilt周长', '需要准备的包边', '需要裁剪的布条', '每条布条', '拼接后长度', '拼接后余量', '需要缝合的拼接处', '裁剪方案', '方案已准备好检查', '检查余量', '当前余量较大。请确认布料是否真的需要这么多预留。', '最终余量接近一次拼接损耗。裁剪前请再次测量quilt。', '请输入正数尺寸，确保可用布宽大于布条宽度，并输入有效角数。', '重置示例', '复制裁剪方案', '裁剪方案已复制', '打开方法说明', '周长为2 x（宽度 + 长度）。模型会为每个角增加两份缝份，根据拼接方式增加拼接预留，并应用所选安全百分比。布条数量是使拼接后长度达到所需包边长度的最小整数。', '方案边界。', '这是针对直边quilt的透明方案。它不能代替不规则边缘测量、方向性布料检查或在项目上的实际试做。', '连续的包边带环绕quilt，并显示需要拼接的布条。'],
    faq: [
      ['计算quilt包边需要哪些尺寸？', '输入完成后的宽度和长度、角数、要裁剪的布条宽度、可用布料宽度以及缝份。选择斜向或直线拼接，并选择安全余量。'],
      ['包边长度如何计算？', '计算器从矩形周长开始，为每个角和最后一次拼接增加预留，然后应用所选安全余量。所有预留都会显示在方案中。'],
      ['为什么拼接方式会改变布条数量？', '斜向拼接会穿过整条布条的宽度，比直线拼接消耗更多长度。模型会在计算布条数量前扣除每次拼接的损耗。'],
      ['应该输入哪一个布料宽度？', '请输入去除布边后真正可以裁剪的宽度。拼布棉布通常接近110厘米或42英寸，但请测量自己的布料，不要只依赖标称宽度。'],
      ['可以用于曲线或不规则quilt吗？', '它适用于用宽度、长度和角数描述的周长。曲线、波浪、方向性图案和特殊角需要更大的手动余量以及最后的实际测量。'],
    ],
    howTo: [
      ['测量完成的quilt', '在绗缝或修剪后测量顶层。使用当前单位输入宽度和长度，并用角数描述需要包边的边缘。'],
      ['描述包边布条', '输入计划裁剪的布条宽度、可用布料宽度，以及拼接和安装包边时使用的缝份。'],
      ['选择拼接预留', '常见的低厚度连接可以选择斜向拼接，也可以根据你的工艺选择直线拼接。选择5%、10%或15%的安全余量。'],
      ['阅读并检查裁剪方案', '按显示的数量和尺寸裁剪布条。裁剪前，将拼接后长度和余量与实际布料进行比较。'],
    ],
    seo: {
      introTitle: '裁剪前计算quilt包边', intro: '包边是一个小步骤，但出错后很难补救。如果拼接后的布条在最后一个角变短，整个准备工作都会停下。这个计算器把完成后的周长转换为裁剪方案，并显示角、最后拼接、拼接损耗和安全余量。',
      measureTitle: '计算器测量什么', measure: '宽度和长度描述完成后的边缘，而不是铺棉或底布。角数为每次转弯预留操作长度。布条宽度和可用布宽会把所需的连续包边转换成整条裁剪布条。',
      tableHeaders: ['输入', '对方案的影响', '裁剪前检查'], tableRows: [['完成后的宽度和长度', 'Quilt周长', '修剪和绗缝后测量'], ['角数', '转弯预留', '曲线或特殊角需要增加'], ['布条和布料宽度', '布条数量和尺寸', '从可用宽度中扣除布边'], ['拼接方式和缝份', '每次连接的损耗', '使用实际缝合的缝份']],
      readTitle: '如何阅读裁剪方案', read: '需要准备的包边是周长和各种预留相加后的目标连续长度。布条数量会向上取整，因为裁剪不能产生半条布带。拼接后长度显示扣除每次拼接损耗后布条能提供的长度。',
      actions: ['如果quilt不是方正的，或余量很小，请再次测量边缘。', '使用去除布边后的可用宽度，而不是布卷上的标称数字。', '让计算器中的缝份与实际缝合的缝份一致。', '方向性布料、拼接较多、曲线或第一次制作时，请增加安全余量。'],
      tipTitle: '这个结果不能保证什么', tip: '模型有意保持保守，但无法识别波浪、弹性、方向性图案或并非真正矩形的quilt。请将方案作为裁剪参考，并在完成最后拼接前把拼接好的布条绕项目试放一圈。',
      joinsTitle: '斜向拼接和直线拼接', joins: '斜向拼接能更好地分散缝合处的厚度。计算器把它视为消耗一条布条的宽度，而直线拼接消耗两份缝份。这些是透明的计算假设，并非所有缝纫方法的通用规则。',
    },
  },
  ja: {
    slug: 'quilt-binding-length-and-strip-calculator',
    title: 'キルトのバインディング長さとストリップ計算機',
    description: '長方形キルトのバインディング長さ、必要なストリップ数、布の裁断サイズ、接続方法を安全余裕つきで計算します。',
    ui: ['測定単位', 'メートル法 cm', 'インチ法 in', 'バインディングの経路', '裁断を設定', '完成したキルト', 'バインディング生地', '接続方法', '安全余裕', 'キルトの幅', 'キルトの長さ', '角の数', 'ストリップ幅', '使える生地幅', '縫い代', '斜め接続', '直線接続', '5パーセント', '10パーセント', '15パーセント', '端から端まで', '端から端まで', '通常4', '裁断する幅', '耳を除いた後', '縫う辺ごと', '裁断プラン', '経路を描くには正の数を入力してください。', 'キルトの周囲', '準備するバインディング', '裁断するストリップ', '各ストリップ', '接続後の長さ', '接続後の余り', '縫う接続数', '裁断プラン', 'プランを確認できます', '余裕を確認', '選択した余裕は大きめです。生地に本当に必要か確認してください。', '最後の余りが接続1回分の損失に近い状態です。裁断前にキルトを測り直してください。', '正の数、ストリップ幅より広い有効生地幅、有効な角の数を入力してください。', '例をリセット', '裁断プランをコピー', '裁断プランをコピーしました', '方法のメモを開く', '周囲は2 x（幅 + 長さ）です。各角に縫い代2つ分、接続方法による予備、選択した安全率を加えます。ストリップ数は、接続後の長さが必要なバインディング長さに届く最小の整数です。', '計画の範囲。', '直線的なキルトの辺を対象にした透明な計画です。不規則な辺の測定、柄の向きがある生地の確認、実際の試し付けの代わりにはなりません。', '連続したバインディングがキルトを囲み、接続するストリップを表示します。'],
    faq: [
      ['キルトのバインディングに必要な寸法は？', '完成後の幅と長さ、角の数、裁断するストリップ幅、使える生地幅、縫い代を入力します。斜め接続または直線接続と安全余裕を選びます。'],
      ['バインディングの長さはどう計算しますか？', '長方形の周囲から始め、各角と最後の接続の予備を加え、選択した安全余裕を適用します。予備の内容はプランに表示されます。'],
      ['接続方法でストリップ数が変わる理由は？', '斜め接続はストリップ幅全体を横切るため、直線接続より多くの長さを使います。各接続の損失を引いてからストリップ数を数えます。'],
      ['生地幅には何を入力しますか？', '耳を除いた、実際に裁断できる有効幅を入力します。キルティング用コットンは110 cmまたは42インチ前後が多いですが、表示幅ではなく実測してください。'],
      ['曲線や不規則なキルトにも使えますか？', '幅、長さ、角の数で表せる周囲を対象にしています。曲線、波形、柄向きのある生地、特殊な角には大きめの手動余裕と最後の実測が必要です。'],
    ],
    howTo: [
      ['完成したキルトを測る', 'キルティングやトリミングの後に表面を測ります。現在の単位で幅と長さを入力し、角の数で仕上げる辺を表します。'],
      ['ストリップを設定する', '裁断するストリップ幅、使える生地幅、接続と取り付けに使う縫い代を入力します。'],
      ['接続の余裕を選ぶ', '厚みを抑えやすい一般的な接続には斜め接続、作り方に合わせる場合は直線接続を選びます。安全率は5、10、15パーセントから選びます。'],
      ['裁断プランを読む', '表示された枚数とサイズで裁断します。裁断前に接続後の長さと余りを実際の生地と比べます。'],
    ],
    seo: {
      introTitle: '裁断前にキルトのバインディングを計算', intro: '仕上げは小さな工程ですが、最後の角で足りなくなるとやり直しになります。この計算機は完成後の周囲を、角、最後の接続、接続損失、安全余裕を含む裁断プランに変換します。',
      measureTitle: '計算機が測るもの', measure: '幅と長さは完成後の辺を表し、綿や裏布ではありません。角の数は曲がるたびの扱い分を確保します。ストリップ幅と有効生地幅から、必要な連続バインディングを整数枚のストリップに変換します。',
      tableHeaders: ['入力', 'プランへの影響', '裁断前の確認'], tableRows: [['完成後の幅と長さ', 'キルトの周囲', 'トリミングとキルティング後に測る'], ['角の数', '曲がりの予備', '曲線や特殊な角では増やす'], ['ストリップ幅と生地幅', '枚数とサイズ', '有効幅から耳を引く'], ['接続方法と縫い代', '接続ごとの損失', '実際に縫う縫い代を使う']],
      readTitle: '裁断プランの読み方', read: '準備するバインディングは、周囲と予備を合計した目標の連続長です。ストリップ数は端数を作れないため切り上げます。接続後の長さは、接続による損失を引いた後に確保できる長さです。',
      actions: ['キルトが正方形でない、または余りが少ない場合は辺を測り直す。', '布巻きの表示幅ではなく、耳を除いた有効幅を使う。', '計算機の縫い代を実際の縫い方に合わせる。', '柄向きのある生地、接続が多い場合、曲線、初めての制作では安全余裕を増やす。'],
      tipTitle: 'この結果で保証できないこと', tip: 'モデルは慎重ですが、波形、伸び、柄の向き、完全な長方形でないキルトは認識できません。裁断の参考として使い、最後の接続前にストリップをプロジェクトの周囲に置いて確認してください。',
      joinsTitle: '斜め接続と直線接続', joins: '斜め接続は縫い目の厚みを分散しやすくします。計算機ではストリップ幅を損失とし、直線接続では縫い代2つ分を損失とします。これは透明な計算上の仮定であり、すべての方法に共通する規則ではありません。',
    },
  },
  ko: {
    slug: 'quilt-binding-length-and-strip-calculator',
    title: '퀼트 바인딩 길이 및 스트립 계산기',
    description: '직사각형 퀼트의 바인딩 길이, 스트립 수, 원단 재단 크기와 연결 계획을 안전 여유와 함께 계산합니다.',
    ui: ['측정 단위', '미터법 cm', '야드파운드법 in', '바인딩 경로', '재단 설정', '완성된 퀼트', '바인딩 원단', '연결 방식', '안전 여유', '퀼트 너비', '퀼트 길이', '모서리 수', '스트립 너비', '사용 가능한 원단 너비', '시접', '사선 연결', '직선 연결', '5퍼센트', '10퍼센트', '15퍼센트', '가장자리에서 가장자리까지', '가장자리에서 가장자리까지', '보통 4개', '재단할 너비', '원단 가장자리 제거 후', '봉제된 가장자리마다', '재단 계획', '경로를 그리려면 양수를 입력하세요.', '퀼트 둘레', '준비할 바인딩', '재단할 스트립', '각 스트립', '연결 후 길이', '연결 후 여분', '봉제할 연결부', '재단 계획', '계획을 확인할 준비가 되었습니다', '여유를 확인하세요', '선택한 여유가 넉넉합니다. 원단에 이 정도 여유가 필요한지 확인하세요.', '마지막 여분이 연결 한 번의 손실에 가깝습니다. 재단 전에 퀼트를 다시 측정하세요.', '양수 치수, 스트립보다 넓은 사용 가능 원단 너비, 유효한 모서리 수를 사용하세요.', '예시 초기화', '재단 계획 복사', '재단 계획을 복사했습니다', '방법 설명 열기', '둘레는 2 x (너비 + 길이)입니다. 모델은 모서리마다 시접 두 개, 연결 방식에 따른 여유, 선택한 안전 비율을 더합니다. 스트립 수는 연결 후 길이가 필요한 바인딩 길이에 도달하는 최소 정수입니다.', '계획의 한계.', '직선 가장자리 퀼트를 위한 투명한 계획입니다. 불규칙한 가장자리 측정, 방향성 원단 확인, 실제 프로젝트에서의 시험을 대신하지 않습니다.', '연속 바인딩 테이프가 퀼트를 둘러싸고 연결할 스트립을 보여 줍니다.'],
    faq: [
      ['퀼트 바인딩에 필요한 치수는 무엇인가요?', '완성된 너비와 길이, 모서리 수, 재단할 스트립 너비, 사용 가능한 원단 너비와 시접을 입력하세요. 사선 또는 직선 연결과 안전 여유를 선택하세요.'],
      ['바인딩 길이는 어떻게 계산하나요?', '직사각형 둘레에서 시작해 각 모서리와 마지막 연결에 대한 여유를 더한 뒤 선택한 안전 여유를 적용합니다.'],
      ['연결 방식에 따라 스트립 수가 달라지는 이유는 무엇인가요?', '사선 연결은 스트립 전체 너비를 가로질러 직선 연결보다 더 많은 길이를 사용합니다. 스트립 수를 세기 전에 연결마다 발생하는 손실을 뺍니다.'],
      ['원단 너비에는 무엇을 입력해야 하나요?', '원단 가장자리를 제거한 뒤 실제로 재단할 수 있는 너비를 입력하세요. 퀼팅용 면은 보통 110 cm 또는 42 in에 가깝지만 표시된 명목 너비보다 직접 측정하는 것이 좋습니다.'],
      ['곡선이나 불규칙한 퀼트에도 사용할 수 있나요?', '너비, 길이와 모서리 수로 표현되는 둘레를 대상으로 합니다. 곡선, 물결, 방향성 원단과 특수한 모서리는 더 큰 수동 여유와 최종 측정이 필요합니다.'],
    ],
    howTo: [
      ['완성된 퀼트 측정', '퀼팅이나 트리밍 후 윗면을 측정하세요. 현재 단위로 너비와 길이를 입력하고 모서리 수로 바인딩할 가장자리를 설명하세요.'],
      ['스트립 설정', '재단할 스트립 너비, 사용 가능한 원단 너비와 연결 및 부착에 사용할 시접을 입력하세요.'],
      ['연결 여유 선택', '두께가 적은 일반적인 연결에는 사선 연결을, 작업 방식에 맞으면 직선 연결을 선택하세요. 안전 여유는 5, 10, 15퍼센트 중에서 고릅니다.'],
      ['재단 계획 확인', '표시된 수량과 크기로 스트립을 재단하세요. 재단 전에 연결 후 길이와 여분을 실제 원단과 비교하세요.'],
    ],
    seo: {
      introTitle: '재단 전에 퀼트 바인딩 계산하기', intro: '마감은 작은 단계지만 마지막 모서리에서 짧아지면 작업을 되돌리기 어렵습니다. 이 계산기는 완성된 둘레를 모서리, 마지막 연결, 연결 손실과 안전 여유가 포함된 재단 계획으로 바꿉니다.',
      measureTitle: '계산기가 측정하는 것', measure: '너비와 길이는 완성된 가장자리를 나타내며 솜이나 뒷면을 뜻하지 않습니다. 모서리 수는 각 회전에 필요한 길이를 예약합니다. 스트립 너비와 사용 가능한 원단 너비는 필요한 연속 바인딩을 완전한 스트립으로 변환합니다.',
      tableHeaders: ['입력', '계획에 미치는 영향', '재단 전 확인'], tableRows: [['완성된 너비와 길이', '퀼트 둘레', '트리밍과 퀼팅 후 측정'], ['모서리 수', '회전 여유', '곡선이나 특수 모서리에 추가'], ['스트립과 원단 너비', '스트립 수와 크기', '사용 가능한 너비에서 가장자리 제거'], ['연결 방식과 시접', '연결마다 발생하는 손실', '실제로 봉제할 시접 사용']],
      readTitle: '재단 계획 읽는 법', read: '준비할 바인딩은 둘레와 여유를 합한 목표 연속 길이입니다. 스트립 수는 천의 재단으로 일부 스트립을 만들 수 없기 때문에 올림합니다. 연결 후 길이는 연결 손실을 뺀 뒤 스트립이 제공하는 길이입니다.',
      actions: ['퀼트가 반듯하지 않거나 여분이 적으면 가장자리를 다시 측정하세요.', '원단 롤의 표시 숫자가 아니라 가장자리를 제거한 사용 가능 너비를 사용하세요.', '계산기의 시접을 실제로 봉제할 시접과 맞추세요.', '방향성 원단, 많은 연결, 곡선 또는 첫 프로젝트라면 안전 여유를 늘리세요.'],
      tipTitle: '이 결과가 보장하지 않는 것', tip: '모델은 신중하지만 물결, 늘어남, 방향성 무늬나 진정한 직사각형이 아닌 퀼트를 볼 수 없습니다. 계획을 재단 참고로 사용하고 마지막 연결 전에 연결된 스트립을 프로젝트 둘레에 둘러 확인하세요.',
      joinsTitle: '사선 연결과 직선 연결', joins: '사선 연결은 봉제선의 두께를 분산하기 쉽습니다. 계산기는 이를 스트립 너비만큼의 손실로 보고, 직선 연결은 시접 두 개만큼을 손실로 봅니다. 이는 투명한 가정이지 모든 봉제법의 공통 규칙은 아닙니다.',
    },
  },
  ru: {
    slug: 'kalkulyator-dliny-polos-okantovki-kvilta',
    title: 'Калькулятор длины и полос окантовки квилта',
    description: 'Рассчитайте длину окантовки, число полос, размер раскроя ткани и план соединений для прямоугольного квилта с видимым запасом.',
    ui: ['Система измерения', 'Метрическая система, см', 'Имперская система, дюймы', 'Маршрут окантовки', 'Настройка раскроя', 'Готовый квилт', 'Ткань для окантовки', 'Способ соединения', 'Запас безопасности', 'Ширина квилта', 'Длина квилта', 'Углы', 'Ширина полосы', 'Полезная ширина ткани', 'Припуск на шов', 'Диагональное соединение', 'Прямое соединение', '5 процентов', '10 процентов', '15 процентов', 'От края до края', 'От края до края', 'Обычно 4', 'Ширина раскроя', 'После удаления кромок', 'На каждую прошитую сторону', 'План раскроя', 'Введите положительные размеры, чтобы нарисовать маршрут.', 'Периметр квилта', 'Окантовка к подготовке', 'Полосы к раскрою', 'Каждая полоса', 'Длина после соединения', 'Остаток после соединений', 'Соединения для шитья', 'План раскроя', 'План готов к проверке', 'Проверьте запас', 'Выбранный запас велик. Проверьте, нужен ли ткани такой резерв.', 'Конечный остаток близок к потере одного соединения. Измерьте квилт снова до раскроя.', 'Используйте положительные размеры, полезную ширину ткани больше ширины полосы и допустимое число углов.', 'Сбросить пример', 'Скопировать план раскроя', 'План раскроя скопирован', 'Открыть заметки о методе', 'Периметр равен 2 x (ширина + длина). Модель добавляет два припуска на шов для каждого угла, резерв по способу соединения и выбранный процент безопасности. Число полос: минимальное целое число, при котором длина после соединения достигает требуемой окантовки.', 'Граница плана.', 'Это прозрачный план для квилтов с прямыми краями. Он не заменяет измерение неровного края, проверку направленного рисунка или пробное соединение на изделии.', 'Сплошная лента окантовки охватывает квилт и показывает полосы для соединения.'],
    faq: [
      ['Какие размеры нужны для окантовки квилта?', 'Введите готовые ширину и длину, число углов, ширину выкраиваемой полосы, полезную ширину ткани и припуск на шов. Выберите диагональные или прямые соединения и запас безопасности.'],
      ['Как рассчитывается длина окантовки?', 'Калькулятор начинает с прямоугольного периметра, добавляет резерв для каждого угла и последнего соединения, а затем применяет выбранный запас.'],
      ['Почему число полос зависит от способа соединения?', 'Диагональное соединение проходит через всю ширину полосы и расходует больше длины, чем прямое. Модель вычитает эту потерю при каждом соединении до подсчёта полос.'],
      ['Какую ширину ткани указывать?', 'Укажите ширину, которую можно выкроить после удаления кромок. Швейный хлопок часто имеет около 110 см или 42 дюймов, но лучше измерить свою ткань.'],
      ['Подходит ли калькулятор для кривых или неровных квилтов?', 'Он предназначен для периметра, описываемого шириной, длиной и числом углов. Кривые, волны, направленные рисунки и особые углы требуют большего ручного запаса и финального измерения.'],
    ],
    howTo: [
      ['Измерьте готовый квилт', 'Измерьте верх после стёжки или обрезки. Введите ширину и длину в активной системе и укажите число углов обрабатываемого края.'],
      ['Опишите полосы', 'Введите ширину полосы, полезную ширину ткани и припуск, который будете использовать при соединении и установке окантовки.'],
      ['Выберите резерв соединения', 'Выберите диагональное соединение для обычного варианта с меньшей толщиной или прямое по своей технике. Установите 5, 10 или 15 процентов запаса.'],
      ['Прочитайте и проверьте план', 'Выкроите указанное число полос с указанными размерами. До раскроя сравните длину после соединения и остаток с реальной тканью.'],
    ],
    seo: {
      introTitle: 'Рассчитайте окантовку квилта до раскроя', intro: 'Окантовка: небольшой этап с малым запасом на ошибку. Если соединённая полоса коротка у последнего угла, подготовку придётся остановить. Калькулятор превращает готовый периметр в план раскроя с углами, последним соединением, потерями и видимым запасом.',
      measureTitle: 'Что измеряет калькулятор', measure: 'Ширина и длина описывают готовый край, а не наполнитель или изнанку. Число углов резервирует длину для каждого поворота. Ширина полосы и ткани превращают нужную сплошную окантовку в цельные полосы.',
      tableHeaders: ['Ввод', 'Изменение в плане', 'Проверить до раскроя'], tableRows: [['Готовые ширина и длина', 'Периметр квилта', 'Измерить после обрезки и стёжки'], ['Число углов', 'Резерв для поворотов', 'Добавить для кривых или особых углов'], ['Ширина полосы и ткани', 'Число и размер полос', 'Вычесть кромочные края'], ['Соединение и припуск', 'Потеря при каждом соединении', 'Использовать фактический припуск']],
      readTitle: 'Как читать план раскроя', read: 'Окантовка к подготовке: это целевая сплошная длина после периметра и резервов. Число полос округляется вверх, потому что нельзя выкроить часть полосы. Длина после соединения показывает результат после вычета потерь.',
      actions: ['Измерьте край снова, если квилт не прямоугольный или остаток мал.', 'Используйте полезную ширину после кромочных краёв, а не число с рулона.', 'Согласуйте припуск в калькуляторе с реальным швом.', 'Увеличьте запас для направленного рисунка, многих соединений, кривых или первого проекта.'],
      tipTitle: 'Чего этот результат не может гарантировать', tip: 'Модель осторожна, но не видит волны, растяжение, направленные узоры или квилт, который не является прямоугольным. Используйте план как помощь при раскрое и обведите соединённую полосу вокруг изделия до последнего соединения.',
      joinsTitle: 'Диагональные и прямые соединения', joins: 'Диагональное соединение лучше распределяет толщину шва. Калькулятор считает его потерей ширины полосы, а прямое соединение считает потерей двух припусков. Это прозрачные предположения, а не универсальные правила.',
    },
  },
};

const localeNames: Record<SupportedLocale, string> = { de: 'de', es: 'es', fr: 'fr', id: 'id', it: 'it', ja: 'ja', ko: 'ko', nl: 'nl', pl: 'pl', pt: 'pt', ru: 'ru', sv: 'sv', tr: 'tr', zh: 'zh' };

export function createContent(locale: SupportedLocale): ToolLocaleContent<QuiltBindingCalculatorUI> {
  const bundle = bundles[locale];
  const ui = makeUi(bundle.ui);
  const faq = makeFaq(bundle.faq);
  const howTo = makeHowTo(bundle.howTo);
  const seo = bundle.seo;
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  };
  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: bundle.title,
    description: bundle.description,
    step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: bundle.title,
    description: bundle.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    inLanguage: localeNames[locale],
  };
  const seoSections: SEOSection[] = [
    { type: 'title', text: seo.introTitle, level: 2 },
    { type: 'paragraph', html: seo.intro },
    { type: 'title', text: seo.measureTitle, level: 3 },
    { type: 'paragraph', html: seo.measure },
    { type: 'table', headers: seo.tableHeaders, rows: seo.tableRows },
    { type: 'title', text: seo.readTitle, level: 3 },
    { type: 'paragraph', html: seo.read },
    { type: 'list', items: seo.actions },
    { type: 'tip', title: seo.tipTitle, html: seo.tip },
    { type: 'title', text: seo.joinsTitle, level: 3 },
    { type: 'paragraph', html: seo.joins },
  ];
  return {
    slug: bundle.slug,
    title: bundle.title,
    description: bundle.description,
    ui,
    faq,
    bibliography,
    howTo,
    schemas: [faqSchema, howToSchema, appSchema],
    seo: seoSections,
  };
}
