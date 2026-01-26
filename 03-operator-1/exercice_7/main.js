let ageEnfant = 10;                    // 1. âge de l'enfant
let agePere = ageEnfant * 2;           // 2. âge du père = double de l'enfant
let ageMere = agePere - 5;             // 3. âge de la mère = âge du père - 5
let ageGrandPere = (ageMere * 2) + (ageEnfant / 2); // 4. âge du grand-père
let ageOncle = agePere + 10;           // 5. âge de l'oncle = âge du père + 10

console.log("Âge de l'enfant :", ageEnfant);
console.log("Âge du père :", agePere);
console.log("Âge de la mère :", ageMere);
console.log("Âge du grand-père :", ageGrandPere);
console.log("Âge de l'oncle :", ageOncle);
