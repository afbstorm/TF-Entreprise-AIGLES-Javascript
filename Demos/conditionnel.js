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
