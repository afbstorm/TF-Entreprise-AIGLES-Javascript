// Commentaire sur une ligne
/* Commentaires sup
plusieurs lignes */

// ----- Utilisation des appels de console ----- //

// console.log() -- Simple affichage d'information dans la console (blanc)
console.log("Hello World");
console.log([1, 2, 3, 4, 5]);

// console.warn() -- Simple affichage d'un message d'avertissement pour une portion de code (jaune)
console.warn("Ceci est un avertissement");

// console.error() -- Simple affichage d'un message d'erreur pour une portion de code (rouge)
console.error("Il y a une erreur dans votre envoi de données");

// console.table() -- Affichage sur la forme d'un tableau d'un array d'éléments
console.table([1, 2, 3, 4, 5]);

// const tab = [1, 2, 3, [1, 2]];
// console.table(tab);
// const tabObj = [
//   {
//     id: 1,
//     name: "blabla",
//   },
// ];
// console.table(tabObj);

// ----- Déclaration des variables ----- //

// var -- Super variable, portée globale, re-déclarable, re-assignable, hoisting
var maVar = 42;

// let - Variable scopée, re-assignable
let age = 37;
console.log("Age première assignation :", age);
age = 42;
console.log("Age deuxième assignation :", age);
// const - Variable scopée
const FIRSTNAME = "Marc";
console.log("firstname à l'assignation: ", FIRSTNAME);
// firstname = "Karim";

// Écriture en camelCase
let maVariableEstEnCamelCase =
  "Parce que chaque mot est collé et chaque mot commence par une Majuscule";

// Comparateurs d"égalités
// = : Assigne une valeur à une variable
// == : Va vérifier la valeur 1 == '1' // true
// === : Va vérifier la valeur ET le type 1 === '1' // false

// Dans le cas ou la variable contenant la valeur d'une clé d'un objet est identique au nom de la clé
// On peut n'indiquer que la clé.

const getUserDatas = async (id) => {
  await waiting(1000);
  const user = { id, nom: "Aude" };
};

const user = {
  id: 1,
  nom: "Coucou",
};

getUserDatas(user.id);
