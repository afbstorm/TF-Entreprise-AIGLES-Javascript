const cout = parseFloat(prompt("Tapez le coût du repas"));
const pourboire = parseInt(
  prompt("Choisissez un pourcentage du pourboire (15, 20 ou 25)")
);
let total = cout + (cout * pourboire) / 100;

switch (pourboire) {
  case 15:
    console.log(`Le total à payer est de ${total}`);
    break;
  case 20:
    console.log(`Le total à payer est de ${total}`);
    break;
  case 25:
    console.log(`Le total à payer est de ${total}`);
    break;
  default:
    console.log("Erreur lors du calcul du total");
    break;
}
