const rdv = ["Dentiste", "Dermatologue", "Vétérinaire"];

console.log("--------------------");
console.log("Menu de gestion de rendez-vous");
console.log("1. Ajouter un rendez-vous");
console.log("2. Supprimer un rendez-vous");
console.log("3. Afficher la liste des rendez-vous");
console.log("4. Quitter");
console.log("--------------------");

let choixUser = parseInt(prompt("Choisissez une option (1/2/3/4) :"));
let nouveauRdv;

switch (choixUser) {
  case 1:
    nouveauRdv = prompt("Entre le nouveau rdv");
    rdv.push(nouveauRdv);
    console.log("Rendez-vous ajouté avec succès");
    break;
  case 2:
    const indexASupprimer = parseInt(
      prompt("Entrez l'indice du rendez-vous à supprimer :")
    );
    if (indexASupprimer >= 1 && indexASupprimer <= rdv.length) {
      rdv.splice(indexASupprimer - 1, 1);
      console.log("Rendez-vous supprimé avec succès");
    } else {
      console.log("Indice non valide");
    }
  case 3:
    console.log("Liste de vos rendez-vous");

    for (let rd of rdv) {
      console.log(`- ${rd}`);
    }

    // console.log(`- ${rdv[0]}`);
    // console.log(`- ${rdv[1]}`);
    // console.log(`- ${rdv[2]}`);
    // console.log(`- ${rdv[3]}`);
    // console.log(`- ${rdv[4]}`);
    break;
  case 4:
    console.log("Au revoir Shoshana");
    break;
}
