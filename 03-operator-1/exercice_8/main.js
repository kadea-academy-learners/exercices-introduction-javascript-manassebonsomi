// 1. Salaire mensuel
let salaireMensuel = 500;

// 2. Dépenses
let loyer = salaireMensuel * 0.3;          // 30% du salaire
let nourriture = salaireMensuel * 0.2;     // 20% du salaire
let transport = salaireMensuel * 0.1;      // 10% du salaire
let autresDepenses = 50;                   // valeur initiale
autresDepenses += 25;                      // ajouter 25

// 3. Total des dépenses
let totalDepenses = loyer + nourriture + transport + autresDepenses;

// 4. Reste après dépenses
let reste = salaireMensuel - totalDepenses;

// 5. Affichage
console.log("Loyer :", loyer);
console.log("Nourriture :", nourriture);
console.log("Transport :", transport);
console.log("Autres dépenses :", autresDepenses);
console.log("Total des dépenses :", totalDepenses);
console.log("Reste :", reste);
