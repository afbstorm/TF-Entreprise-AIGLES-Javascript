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

// ----- Utilisation des strings ----- //

// Concaténation de strings
console.log("Hello" + " " + "world");
const message = "Aigles";

// Concaténation avec template litteral
// Backticks : ALTGR + £ -> touche espace pour généré les `
const messageConcat = `Bienvenue dans la société ${message}`;
console.log(messageConcat);

// Escaping de caractères : On utilise le backslash -> \
// let escape = 'Let\'s go'; --> Commenté parce que Prettier

// Convertir en majuscules
console.log("UPPERCASE ➡️ ", message.toUpperCase()); // Résultat: 'AIGLES'

// Convertir en minuscules
console.log("LOWERCASE ➡️ ", message.toLowerCase()); // Résultat : "aigles"

// Découpe d'un string en plusieurs morceaux : split()
// let exempleDeSplit = "message coucou".split(" ");
// console.log(exempleDeSplit);
console.log("SPLIT ➡️ ", messageConcat.split(" ")); // Résultat : ["Bienvenue", "dans", "la", ...]

// Remplacement d'un mot : replace();
console.log("REPLACE ➡️ ", messageConcat.replace("société", "compagnie")); // Résultat : 'Bienvenue dans la compagnie ...'

// Remplacement de tous les mots spécifiés : replaceAll();
let exempleReplaceAll = "la famille de la duchesse est la plus horrible";
console.log("REPLACEALL ➡️ ", exempleReplaceAll.replaceAll("la", "une")); // Résultat : 'une famille de une duchesse est une plus horrible'

// Renvoi l'index d'un élément spécifié : charAt()
console.log("CHARAT ➡️ ", message.charAt(0)); // Résultat : "A"

// Déterminer si un string se termine par un élément spécifique : endsWith()
console.log("ENDSWITH ➡️ ", message.endsWith("s")); // Résultat : true

// Déterminer si un string commence par un élément spécifique : startsWith()
console.log("STARTSWITH ➡️ ", messageConcat.startsWith("Bienvenue")); // Résultat : true

// Regular expression : test()
const regex = /bienvenue/i; // --> i : ignore case
console.log("REGEX ➡️ ", regex.test(messageConcat));

// Création d'une répétition d'une chaine de caractère selon un nombre spécifié : repeat(x)
console.log("REPEAT ➡️ ", "Beetlejuice".repeat(3)); // Résultat : il apparait

// Suppression des espaces autour d'une chaine de caractère : trim()
const texte = "             Hello World       ";
console.log("TRIM ➡️ ", texte.trim()); // Résultat : 'Hello World'

// Renvoie un -1 si l'élément est après, 1 si l'élément est situé avant et 0 si situé à la même position : localeCompare()
console.log("LOCALECOMPARE ➡️ ", "a".localeCompare("b")); // Résultat : -1

// Renvoie un substring d'un string selon deux index. Un de début et un de fin : substring(x, y)
console.log("SUBSTRING ➡️ ", message.substring(2, 4)); // Résultat "gl"

// Extraction d'une section d'un string et renvoyer un string : slice(x) / slice(x,y)
console.log("SLICE ➡️ ", messageConcat.slice(-10)); // Résultat : 'été Aigles"
console.log("SLICE(X,Y) ➡️ ", messageConcat.slice(5, 10)); // Résultat 'enue'

const str = "5";
console.log("PADSTART ➡️", str.padStart(2, "0")); // Résultat : 05

const creditCard = "59856365847282";
const last4Digits = creditCard.slice(-4);
const encryptedCreditCard = last4Digits.padStart(creditCard.length, "*");
console.log("PADSTART2 ➡️", encryptedCreditCard); // Resultat : **************7282

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

// Comparateurs d"égalités
// = : Assigne une valeur à une variable
// == : Va vérifier la valeur 1 == '1' // true
// === : Va vérifier la valeur ET le type 1 === '1' // false

// ----- Object ----- //

// Création d'un object
let obj = {
  key1: "value1",
  key2: "value2",
  key3: 42,
  key4: function test(a, b) {
    return a + b;
  },
};
console.log("OBJECT ➡️", obj); // Résultat : {key1: 'value1', ...}

// Ajout d'une propriété (key) dans un object
obj.firstname = "Lionel";
console.log("AJOUT ➡️", obj); // Résultat : {..., firstname: 'Lionel}

// Suppression d'une key d'un object
delete obj.key4;
console.log("DELETE ➡️", obj);

// Afficher la valeur d'une key
console.log("VALUE ➡️", obj.firstname); // Résultat : 'Lionel'
console.log("VALUE ➡️", obj["firstname"]); // Résultat : 'Lionel'

// Déclarer un object à partir d'entrées de tableau
const entries = [
  ["name", "Pin"],
  ["age", 23],
  ["city", "Charleroi"],
];

const obj2 = Object.fromEntries(entries);
console.log("FROMENTRIES ➡️", obj2); // Résultat : {name: "Pin", age: 23, city: "Charleroi"}

// Récupération des keys d'un object
const keys = Object.keys(obj2);
console.log("KEYS ➡️", keys); // Résultat : ["name", "age", "city"]

// Récupération des values d'un object
const values = Object.values(obj2);
console.log("VALUES ➡️", values); // Résultat : ["Pin", 23, "Charleroi"]

// ----- Les dates ------ //

// Stockage d'une date (ici la date du jour)
const date = new Date();
let date2 = new Date();
console.log("NEWDATE ➡️", date);

// Récupération du jour de la date
date2.setDate(15);
console.log("DATE ➡️", date.getDate());
console.log("DATE2 ➡️", date2.getDate());

// Récupération du mois de la date
console.log("MOIS ➡️", date.getMonth()); // Résultat : mois actuel - 1

// Récupération de l'année de la date
console.log("ANNEE ➡️", date.getFullYear()); // Résultat : 2024

// Récupération des temps de la date
console.log("HMS ➡️", date.getHours(), date.getMinutes(), date.getSeconds());

// Récupération de la date depuis le 01/01/1970
console.log("SINCE ➡️", date.getTime());

// Transformation de la date à un format local
console.log("LOCALESTRING ➡️", date.toLocaleString("fr-FR"));
console.log("LOCALEDATESTRING ➡️", date.toLocaleDateString("fr-FR"));
console.log("LOCALETIMESTRING ➡️", date.toLocaleTimeString("fr-FR"));

// Transformation plus précise à un format local
console.log(
  "PLUSPRECIS ➡️",
  date.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  })
);

// ----- Conditonnels ----- //

const a = 5;
const b = 7;

// if..else
if (a > b) {
  console.log(`IF ➡️:${a} plus grand que ${b}`);
} else if (a < b) {
  console.log(`IF ➡️:${a} plus petit que ${b}`);
} else if (a === b) {
  console.log(`IF ➡️:${a} est égal à ${b}`);
} else {
  console.log("IF ➡️:Error");
}

// Ternary
console.log(
  a > b
    ? `TERNARY ➡️: ${a} est plus grand que ${b}`
    : `TERNARY ➡️: ${a} n'est pas plus grand que ${b}`
);

// console.log(
//     a > b ? `${a} est plus grand que ${b}`
//     : a < b ? `${a} est plus que petit ${b}`
//     : a === b ? `${a} est égal à ${b}` : 'Error'
// )

// switch (expression) {}

switch (a) {
  case 1:
    console.log("SWITCH ➡️ a vaut 1");
    break;
  case 2:
    console.log("SWITCH ➡️ a vaut 2");
    break;
  case 5:
    console.log("SWITCH ➡️ a vaut 5");
    break;
  case 6:
  case 7:
    console.log("SWITCH ➡️ coucou");
    break;
  default:
    console.log("SWITCH ➡️ error");
}

// ----- Array ------ //

// Création d'un array
let arr = [1, 2, 3, 8, 42]; // Résultat : [1, 2, 3];

// Ajout d'un élément en fin de tableau
arr.push(4);
console.log("PUSH ➡️", arr); // Résultat : [1, 2, 3, 4];

// Supprimer un élément en fin de tableau
arr.pop();
console.log("POP ➡️", arr); // Résultat : [1, 2, 3];

// Ajout d'un élément en début de tableau
arr.unshift(10);
console.log("UNSHIFT ➡️", arr); // Résultat : [10 ,1 ,2 ,3];

// Supprimer un élément en début de tableau
arr.shift();
console.log("SHIFT ➡️", arr); // Résultat : [1, 2, 3];

// Créer un nouveau tableau à partir d'un tableau existant sans modifier les valeurs de l'original
const arrMap = arr.map((x) => x * 2);
console.log("MAP ➡️", arrMap); // Résultat : [2, 4, 6];
// console.log(arr);

// Créer un nouveau tableau à partir d'un tableau existant, en filtrant les éléments suivant une condition
const arrFilter = arr.filter((x) => x % 2 === 0);
console.log("FILTER ➡️", arrFilter); // Résultat : [2]

// Appliquer une fonction qui est un accumulateur et chaque valeur du tableau (de gauche à droite)
// de manière à la réduire à une seule valeur.
// .reduce((accumulator, current) => accumulator + current, initialValue)
// Au premier appel sum est équivalent à l'initialValue (0) et current vaut la valeur du premier index (1)
// Ce qui donne = sum : 1
// ...
const arrReduce = arr.reduce((sum, current) => sum + current, 0);
console.log("REDUCE ➡️", arrReduce); // Résultat : 6

// Effectuer une opération sur chaque élément d'un tableau
arr.forEach((num, idx) => console.log(`FOREACH ➡️ : Index ${idx} : ${num}`));

// Test si au moins un élément dans le tableau passe un test
const hasNagativeNumbers = [-3, -1, 2, 4].some((num) => num < 0);
console.log(`SOME ➡️ ${hasNagativeNumbers}`); // Résultat : true

// Test si tous les éléments dans le tableau correspondent à une condition
const allPositiveNumbers = [-2, 1, 2, 3, 5].every((num) => num > 0);
console.log(`EVERY ➡️ ${allPositiveNumbers}`); // false

// Renvoi la première occurence d'une valeur qui passe un test
console.log(
  "FIND ➡️",
  arr.find((x) => x > 2)
); // Résultat : 3

// Renvoi la dernière occurence d'une valeur qui passe un test
console.log(
  "FINDLAST ➡️",
  arr.findLast((x) => x > 2)
); // Résultat : 42

// Renvoi un booléen pour confirmer ou non l'existence d'un élément dans un tableau
console.log("INCLUDES ➡️", arr.includes(8)); // true

// Renvoi l'index de la première occurence d'une valeur recherchée
console.log("INDEXOF ➡️", arr.indexOf(3)); // Résultat : 2

// Aplatit un tableau multi-dimensionnel en une seule dimension
const arrMulti = [1, 2, [3, 4, [5, 6]]];
console.log("FLAT ➡️", arrMulti.flat(2)); // Résultat : [1,2,3,4,5,6];

// Effectuer un processus sur chaque élément d'un tableau multidimensionnel puis l'aplatir
const arrMulti2 = [
  [2, 3],
  [4, 5],
];
console.log(
  "FLATMAP ➡️",
  arrMulti2.flatMap((x) => x.map((elem) => elem * elem))
); // résultat : [4,9,16,25]

// Trier un tableau de nombre
const arr2 = [24, 3, 98, 50, 42];
console.log(
  "SORT ➡️",
  arr2.sort((a, b) => b - a)
);

// ----- BOUCLES ------ //

// While
let i = 0;
while (i < 5) {
  console.log("WHILE ➡️", i);
  i++;
}

// Do...While
i = 0;
do {
  console.log("DOWHILE ➡️", i);
  i++;
} while (i < 5);

// FOR
for (let y = 0; y < arr.length; y++) {
  console.log("FORLOOP ➡️", arr[y]);
}

// BREAK...CONTINUE
for (let y = 0; y < 10; y++) {
  if (y === 5) break;
  if (y % 2 === 0) continue;
  console.log("CONTINUEBREAK ➡️", y);
}

// ----- FONCTIONS ----- //

// IIFE (Immediatly Invoked Function Expression)
// (() {})()

(function immediateFunction() {
  console.log("IIFE ➡️ : Invoquée directement");
})();

// Fonction standard, hoistable -> Appelable avant définition
sayHello("Eddy");

function sayHello(name) {
  console.log("FUNCTION ➡️", `Hello ${name}`);
}
// ❌❌
// sayBye();

// const sayBye = () => {
//   console.log("Bye");
// };

// Fonction anonyme

const sayBye = (msg) => {
  console.log(`FONCTIONANONYME ➡️ : Bye ${msg}`);
};

sayBye("Kévin");

// Fonction anonyme + lambda

// const addition = a => a
const addition = (a, b) => {
  return a + b;
};
const addition2 = (a, b) => a + b;

// [1,2,3].map(x => x * 2)
// [1,2,3].map((x) => {
//   return x * 2
// })

// Callback

function repeat(count, callback) {
  for (let i = 0; i < count; i++) {
    callback("CALLBACK ➡️", i);
  }
}

repeat(15, console.log);

function greet(name = "Sébastien", callback) {
  console.log("CALLBACK2 ➡️", `Hello ${name}`);
  callback();
}

greet("Aude", () => {
  console.log("CALLBACK2 ➡️ Le callback est bien appelé");
});

// ----- Destructuring ------ //

// Array
const fruits = ["Pomme", "Poire", "Cerise", "Mangue"];

// const f1 = fruits[0];
// const f2 = fruits[1];

// Destructuring basique
const [premierFruit, deuxiemeFruit, troisiemeFruit, quatriemeFruit] = fruits;
console.log("DESTRUCTURING ➡️", premierFruit); // Pomme
console.log("DESTRUCTURING ➡️", deuxiemeFruit);
console.log("DESTRUCTURING ➡️", troisiemeFruit);
console.log("DESTRUCTURING ➡️", quatriemeFruit);

// Skip index
const [premierFruit2, , troisiemeFruit2] = fruits;
console.log("DESTRUCTURING ➡️", premierFruit2);
console.log("DESTRUCTURING ➡️", troisiemeFruit2);

// Dans le cas ou la valeur n'existe pas (valeur par défaut)
const voiture = ["VW"];
const [premiereVoiture, deuxiemeVoiture = "Volvo"] = voiture;
console.log("DESTRUCTURING ➡️", premiereVoiture);
console.log("DESTRUCTURING ➡️", deuxiemeVoiture);

// Utilisation du ... rest operator dans du destructuring
const [premierFruit3, deuxiemeFruit3, ...autreFruits] = fruits;
console.log("DESTRUCTURING_REST ➡️", autreFruits);

// Objects
const utilisateur = {
  nom: "Gavin",
  vieuxDe: 33,
  ville: "Rivière",
};

// Destructuring de base
const { ville, nom, vieuxDe } = utilisateur;

console.log("DESTRUCTURING_OBJ ➡️", ville);
console.log("DESTRUCTURING_OBJ ➡️", nom);
console.log("DESTRUCTURING_OBJ ➡️", vieuxDe);

// Renommer les variables pendant le destructuring (compatibilité avec celles déjà existantes)
const { nom: nomF, vieuxDe: annee } = utilisateur;

console.log("DESTRUCTURING_OBJ ➡️", nomF);
console.log("DESTRUCTURING_OBJ ➡️", annee);

// Valeur par défaut en cas de non-existence de la clé
const { nom: prenom, numero = "Non spécifié" } = utilisateur;

console.log("DESTRUCTURING_OBJ ➡️", numero);

// ... rest operator dans le destructuring d'objet
const { nom: nom2, ...autresInfos } = utilisateur;

console.log("DESTRUCTURING_OBJ ➡️", autresInfos);

// Destructuring d'objects imbriqués
const utilisateur2 = {
  name: "Aude",
  address: {
    city: "Namur",
    zipCode: 5000,
  },
};

const {
  name,
  address: { city, zipCode },
} = utilisateur2;

console.log("DESTRUCTURING_OBJ ➡️", city);
console.log("DESTRUCTURING_OBJ ➡️", zipCode);

// Destructuring dans les paramètres d'une fonction
const presenteToi = ({ nom, vieuxDe, ville }) => {
  console.log(
    `Bonjour, je suis ${nom}, j\'ai ${vieuxDe} ans et je suis de ${ville}`
  );
};

presenteToi(utilisateur);

const arrObj = [
  {
    id: 1,
    nom: "toto",
    alive: true,
  },
  {
    id: 2,
    nom: "riri",
    alive: true,
  },
  {
    id: 3,
    nom: "Lionel",
    alive: false,
  },
];

const [user1, user2, user3] = arrObj;
console.log(user1);
console.log(user2);
console.log(user3);

const { id: idU1, nom: nomU1 } = user1;
console.log(idU1, nomU1);

const arrObjLionelEnVie = arrObj.map((user) => {
  if (!user.alive) {
    return { ...user, alive: true };
  }
  return user;
});

console.log(arrObjLionelEnVie);

// ----- SPREAD ----- //
// ... spread operator

const legumes = ["Tomate", "Courgette", "Carotte"];

// Création d'un nouveau tableau
const copieLegumes = [...legumes];

console.log("SPREAD ➡️", copieLegumes);

// Concaténation
const fruitsLegumes = [...fruits, ...legumes];

console.log("SPREAD ➡️", fruitsLegumes);

// Concaténation de valeur primitive et de variables
const fruitsPlusLegumes = ["Pomme", ...legumes, "Banane"];

console.log("SPREAD ➡️", fruitsPlusLegumes);
