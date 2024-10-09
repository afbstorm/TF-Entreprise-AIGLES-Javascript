let jourNaissance = parseInt(prompt("Entrez le jour de votre naissance"));
let moisNaissance = parseInt(
  prompt("Entrez le mois de votre naissance (1-12)")
);
let anneeNaissance = parseInt(prompt("Entrez l'année de votre naissance"));

// Récupération de la date actuelle
let dateActuelle = new Date();
let anneeActuelle = dateActuelle.getFullYear();
let moisActuel = dateActuelle.getMonth() + 1;
let jourActuel = dateActuelle.getDate();

let age = anneeActuelle - anneeNaissance;

// Vérification, est-ce que l'anniversaire est déjà passé ou pas
if (
  moisActuel < moisNaissance ||
  (moisActuel === moisNaissance && jourActuel < jourNaissance)
) {
  age--;
}

// Gérer les années bissextiles;
let joursDansFévrier =
  (anneeNaissance % 4 === 0 && anneeNaissance % 100 !== 0) ||
  anneeNaissance % 400 === 0
    ? 29
    : 28;

let mois;

switch (moisNaissance) {
  case 1:
    mois = "Janvier";
    break;
  case 2:
    mois = "Février";
    break;
  case 3:
    mois = "Mars";
    break;
  case 4:
    mois = "Avril";
    break;
  case 5:
    mois = "Mai";
    break;
  case 6:
    mois = "Juin";
    break;
  case 7:
    mois = "Juillet";
    break;
  case 8:
    mois = "Août";
    break;
  case 9:
    mois = "Septembre";
    break;
  case 10:
    mois = "Octobre";
    break;
  case 11:
    mois = "Novembre";
    break;
  case 12:
    mois = "Décembre";
    break;
  default:
    console.log("Erreur");
}

console.log(`Vous êtes né le : ${jourNaissance} ${mois} ${anneeNaissance}`);
console.log(`Vous avez ${age} ans`);
