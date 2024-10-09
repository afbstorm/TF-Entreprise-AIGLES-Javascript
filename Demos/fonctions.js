// ----- FONCTIONS ----- //

// IIFE (Immediatly Invoked Function Expression)
// (() {})()

(function immediateFunction() {
  console.log("IIFE ➡️ : Invoquée directement");
})();

// Fonction standard, hoistable -> Appelable avant définition
sayHello("Eddy");

function sayHello(name) {
  console.log("FUNCTION ➡️", `Hello ${name}`);
}
// ❌❌
// sayBye();

// const sayBye = () => {
//   console.log("Bye");
// };

// Fonction anonyme

const sayBye = (msg) => {
  console.log(`FONCTIONANONYME ➡️ : Bye ${msg}`);
};

sayBye("Kévin");

// Fonction anonyme + lambda

// const addition = a => a
const addition = (a, b) => {
  return a + b;
};
const addition2 = (a, b) => a + b;

// [1,2,3].map(x => x * 2)
// [1,2,3].map((x) => {
//   return x * 2
// })

// Callback

function repeat(count, callback) {
  for (let i = 0; i < count; i++) {
    callback("CALLBACK ➡️", i);
  }
}

repeat(15, console.log);

function greet(name = "Sébastien", callback) {
  console.log("CALLBACK2 ➡️", `Hello ${name}`);
  callback();
}

greet("Aude", () => {
  console.log("CALLBACK2 ➡️ Le callback est bien appelé");
});
