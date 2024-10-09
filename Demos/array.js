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
