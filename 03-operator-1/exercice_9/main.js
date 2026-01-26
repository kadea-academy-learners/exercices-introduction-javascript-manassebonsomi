// Patrimoine total
let maison = 60000000;      // CDF
let terrains = 40000000;    // CDF
let liquidites = 20000000;  // CDF

let patrimoineTotal = maison + terrains + liquidites;

// Première catégorie : enfants (75% du patrimoine)
let patrimoineEnfants = patrimoineTotal * 0.75;

// Chaque enfant reçoit 1/3 de la part des enfants
let partPaul = patrimoineEnfants / 3;
let partMarie = patrimoineEnfants / 3;

// Alain est décédé, sa part (1/3) est partagée entre ses enfants Éric et Claire
let partAlain = patrimoineEnfants / 3;
let partEric = partAlain / 2;
let partClaire = partAlain / 2;

// Deuxième catégorie : conjoint et frères/sœurs (25% du patrimoine)
let patrimoineAutres = patrimoineTotal * 0.25;

// Réparti également entre Madame MUKUNA, Joseph et Sarah
let partMadame = patrimoineAutres / 3;
let partJoseph = patrimoineAutres / 3;
let partSarah = patrimoineAutres / 3;

// Affichage des héritages
console.log("Héritage de Paul :", partPaul.toLocaleString(), "CDF");
console.log("Héritage de Marie :", partMarie.toLocaleString(), "CDF");
console.log("Héritage d'Éric :", partEric.toLocaleString(), "CDF");
console.log("Héritage de Claire :", partClaire.toLocaleString(), "CDF");
console.log("Héritage de Madame MUKUNA :", partMadame.toLocaleString(), "CDF");
console.log("Héritage de Joseph :", partJoseph.toLocaleString(), "CDF");
console.log("Héritage de Sarah :", partSarah.toLocaleString(), "CDF");
