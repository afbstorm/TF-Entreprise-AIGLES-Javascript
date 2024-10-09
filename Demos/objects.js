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
