// Exercice 1 :

// Calcul de TVA

// Combien de livres il achète
// Combien coûtent les livres
// Calcul du coût total de l'achat en comptant une TVA de 21%
// Affichez un message complet indiquant le prix TTC de l'achat

// Sans fonctions
// const price = parseFloat(prompt("Prix d'un livre :"));
// const quantity = parseFloat(prompt("Quantité :"));
// const TVA = 0.21;

// const totalPrice = quantity * price;
// const totalPriceTTC = totalPrice + totalPrice * TVA;

// alert(`Le prix TTC de votre commande est de : ${totalPriceTTC}`);

// Avec fonctions
const promptForValue = (message) => parseFloat(prompt(message));

const calculateTotalPrice = (quantity, price) => quantity * price;

const calculateTotalPricePlusTVA = (totalPrice, taxRate) =>
  totalPrice + totalPrice * taxRate;

const price = promptForValue("Prix d'un livre :");
const quantity = promptForValue("Quantité :");
const TVA = 0.21;

const totalPrice = calculateTotalPrice(quantity, price);
const totalPriceTTC = calculateTotalPricePlusTVA(totalPrice, TVA);

alert(`Le prix TTC de votre commande est de : ${totalPriceTTC}`);
