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
