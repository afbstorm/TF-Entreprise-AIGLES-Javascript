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
