import { createSeo, type QuiltLocaleCopy } from '../create-content';
import { makeUi } from '../locale-ui';

export const fr: QuiltLocaleCopy = {
  slug: 'calculateur-tissu-quilt-blocs-dos',
  title: 'Calculateur de tissu pour quilt en blocs et dos',
  description: 'Estimez le tissu des blocs carrés et du dos avec marges de couture, perte de coupe et unités métriques ou impériales.',
  ui: makeUi([
    'Système de mesure', 'Métrique cm', 'Impérial in', 'Plan de coupe', 'Planifier le quilt', 'Tailles courantes', 'Personnalisé',
    'Bébé', 'Plaid', 'Une place', 'Queen', 'King', 'Largeur finie', 'Longueur finie', 'Bloc carré fini', 'Largeur utile du tissu',
    'Marge de couture', 'Supplément du dos par côté', 'Marge de coupe du dessus', 'bord fini à bord fini', 'bord fini à bord fini',
    'taille visible du bloc', 'après retrait des lisières', 'sur chaque bord du bloc', 'sur les quatre côtés', '5 pour cent',
    '10 pour cent', '15 pour cent', "Plan d'achat du tissu", 'Saisissez des mesures positives pour dessiner le plan de coupe.',
    'Blocs à couper', 'Grille de blocs', 'Carré de coupe', 'Carrés sur la largeur', 'Tissu pour le dessus', 'Tissu pour le dos',
    'Panneaux du dos', 'Orientation du dos', 'Panneaux dans la longueur', 'Panneaux dans la largeur', 'Total dessus et dos',
    'Plan de coupe prêt', 'Vérifier le plan', 'Les dimensions finies ne sont pas des multiples entiers du bloc. La rangée ou la colonne extérieure demande des blocs retaillés ou une bordure.',
    'Un seul carré tient dans la largeur utile. Un tissu plus large ou un bloc plus petit peut réduire le métrage.',
    'Utilisez des dimensions positives et un tissu assez large pour un carré de coupe.', "Réinitialiser l'exemple", "Copier le plan d'achat",
    "Plan d'achat copié", 'Ouvrir les notes de calcul', 'Les colonnes et rangées sont arrondies au nombre supérieur après division des dimensions finies par le bloc fini. Le carré de coupe ajoute deux marges. Le dos compare deux orientations après les pertes aux coutures.',
    'Limite de planification.', 'Le modèle suppose des blocs carrés identiques coupés dans un seul tissu de dessus. Il ne couvre pas les bandes intermédiaires, bordures, coloris multiples, motifs directionnels, molleton ou biais.',
    'Une grille de patchwork se trouve à côté de la disposition de dos la plus économe.',
  ]),
  faq: [
    { question: 'Quel tissu ce calculateur de quilt estime-t-il?', answer: 'Il estime un tissu pour tous les blocs carrés du dessus et un autre pour le dos. Il ne calcule pas le molleton ni le biais.' },
    { question: 'Pourquoi le carré de coupe est-il plus grand que le bloc fini?', answer: 'Le bloc fini est visible après couture. La coupe ajoute la marge choisie sur les deux côtés de chaque dimension.' },
    { question: 'Comment les panneaux du dos sont-ils calculés?', answer: 'Le calcul ajoute le débord, retire la perte des coutures et compare une disposition en longueur avec une disposition en largeur.' },
    { question: 'Puis-je calculer plusieurs tissus dans le même patchwork?', answer: 'Calculez chaque groupe de couleurs séparément avec la même taille de coupe et le nombre de blocs correspondant.' },
    { question: 'Dois-je acheter exactement la quantité affichée?', answer: 'Arrondissez à la fraction vendue en magasin. Motifs directionnels, raccords, retrait et erreurs peuvent demander davantage de tissu.' },
  ],
  howTo: [
    { name: 'Définir la taille finie', text: 'Choisissez une taille courante ou saisissez la largeur et la longueur finies.' },
    { name: 'Décrire les blocs et le tissu', text: 'Saisissez le bloc fini, la largeur utile sans lisières et la marge de couture.' },
    { name: 'Choisir les suppléments', text: 'Indiquez le débord du dos et une perte de cinq, dix ou quinze pour cent.' },
    { name: 'Lire les deux achats', text: 'Utilisez séparément le métrage du dessus et celui du dos, puis arrondissez-les à la vente.' },
  ],
  seo: createSeo({
    overviewTitle: 'Prévoir le tissu avant de choisir le métrage', overview: 'Le dessus et le dos répondent à deux plans de coupe distincts. Le dessus doit fournir toutes les rangées de carrés, tandis que le dos peut exiger plusieurs longs panneaux assemblés. Le calculateur sépare les deux achats et affiche leur total pour préparer le budget.',
    methodTitle: 'Calcul du tissu pour les blocs carrés', method: 'La taille finie ne correspond pas à la taille de coupe. La marge est ajoutée sur deux côtés, puis le calcul détermine combien de carrés tiennent dans la largeur utile. Le nombre de blocs est divisé par cette capacité et arrondi à des passages entiers avant ajout de la perte choisie.',
    tableHeaders: ['Donnée', 'Effet', 'Mesure correcte'], tableRows: [['Taille du quilt', 'Rangées et colonnes', 'Dimension cousue'], ['Bloc fini', 'Nombre et coupe', 'Sans marge'], ['Largeur utile', 'Carrés par passage', 'Sans lisières'], ['Supplément du dos', 'Zone de travail', 'Sur chaque côté']],
    backingTitle: 'Pourquoi le dos peut pivoter', backing: 'Lorsque le dos dépasse la largeur du tissu, des panneaux doivent être assemblés. Le calculateur teste des panneaux dans la longueur et une disposition tournée, déduit les coutures de raccord et retient celle qui consomme le moins de longueur de rouleau.',
    advice: ['Mesurez la largeur utile sans les lisières.', 'Arrondissez chaque achat à la fraction vendue.', 'Ajoutez une réserve pour motifs directionnels et retrait.', 'Résolvez les blocs partiels avant la coupe.'],
    patternTitle: "Comparer l'estimation au patron", pattern: 'Cette estimation convient surtout à une grille simple de blocs carrés identiques dans un seul tissu. Un patron réel peut répartir plusieurs couleurs, ajouter des bandes ou imposer la position de la couture du dos. Vérifiez donc le résultat avec sa liste de coupe.',
    limitTitle: 'Ce que le résultat ne garantit pas', limit: 'Les tissus rétrécissent différemment, les magasins vendent par fractions variables et les motifs peuvent imposer des coupes moins efficaces. Le résultat fournit une base transparente, mais ne remplace pas le schéma de coupe du patron.',
  }),
};
