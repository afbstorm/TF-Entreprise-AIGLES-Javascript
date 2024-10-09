/*

    Créez une calculatrice.
    Les opérations sont contenues dans un tableau.
    Créez une fonction qui va gràce ç une boucle demander à l'utilisateur
    quelle opération il veut effectuer (si elle n'existe pas, redemander)
    Créez une fonction qui va être la calculatrice : 
        - Va demander à l'utilisateur deux nombres
            - Il faudra vérifier que ce sont bien des nombres
        - Va ensuite calculer (attention à la division par 0)
        - Pour finalement afficher le résultat

*/

const operators = ["+", "-", "*", "/"];

const promptForOperator = () => {
  let operator;
  do {
    operator = prompt("Sélectionnez un opérateur (+, -, *, /)");
  } while (!operators.includes(operator));
  return operator;
};

const calculator = () => {
  const operator = promptForOperator();

  let number1;
  let number2;

  while (!number1 || isNaN(number1)) {
    number1 = parseFloat(prompt("Entrez un premier nombre"));
  }
  while (!number2 || isNaN(number2)) {
    number2 = parseFloat(prompt("Entrez un deuxième nombre"));
  }

  let result;
  if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "*") {
    result = number1 * number2;
  } else if (operator === "/") {
    if (number2 === 0) {
      alert("Error ! La division par zéro n'est pas acceptée");
      return;
    }
    result = number1 / number2;
  } else {
    console.log("Je ne sais pas ce que vous voulez faire.");
    return;
  }

  alert(`Le résultat est ${result.toFixed(2)}`);
};

calculator();
