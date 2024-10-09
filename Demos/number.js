// ----- Manipulation de number ----- //

// Incrémentation
let num = 1;

console.log("PRE-INC ➡️ ", ++num); // Résultat : 2
console.log("POST-INC ➡️", num++); // Résultat : 2
console.log("Résultat post-inc ➡️", num); // Résultat : 3

// Opérations arithmétiques
console.log("ADDITION ➡️", 2 + 2); // Résultat : 4
console.log("SOUSTRACTION ➡️", 10 - 2); // Résultat : 8
console.log("MULTIPLICATION ➡️", 5 * 2); // Résultat : 10
console.log("DIVISION ➡️", 10 / 2); // Résultat : 5
console.log("PUISSANCE ➡️", 2 ** 3); // Résultat : 8
console.log("MODULO ➡️", 40 % 3); // Résultat : 1

// Transformation d'un string en number (entier) : parseInt(string)
console.log("PARSEINT ➡️", parseInt("1234"));

// Transformation d'un string en number (float) : parseFloat(string)
console.log("PARSEFLOAT ➡️", parseFloat("123.45"));

// Vérification d'une valeur, si elle est bien number : isNaN()
console.log("ISNAN ➡️", isNaN("fgnueg")); // Résultat : true -- comparaison de valeur - pas de type ⚠️
console.log("ISNAN(NAN) ➡️", isNaN(NaN));
console.log(NaN === NaN);
// console.log(typeof '123' === 'number')

// Traduction d'exposant
console.log("TRAD_EXPO ➡️", 2e5); // Résultalt : 200000

// Limiter le nombre de chiffres après la virgule : toFixed(x)
console.log("TOFIXED ➡️", (10 / 3).toFixed(2)); // Résultat : 3.33

// L'objet Math va s'accompagner de plusieurs méthodes : Math.x
console.log("PI ➡️", Math.PI); // Résultat : 3.14159...
console.log("RACINECARRE ➡️", Math.sqrt(16)); // Résultat : 4
console.log("ARRONDI ➡️", Math.round(4.7)); // Résultat : 5
console.log("ARRONDIBAS ➡️", Math.floor(3.8)); // Résultat : 3
console.log("ARRONDIHAUT ➡️", Math.ceil(3.2)); // Résultat : 4
console.log("ABSOLUE ➡️", Math.abs(-42)); // Résultat : 42
console.log("RANDOM ➡️", Math.random()); // Résultat : un nombre aléatoire entre 0 et 1
console.log("RANDOM2 ➡️", Math.floor(Math.random() * 150)); // Résultat : un nombre aléatoire entre 0 et 150

// Renvoie la partie entière d'un float en éliminant les chiffres après la virgule
console.log("TRUNCATE ➡️", Math.trunc(4.2)); // Résultat : 4
