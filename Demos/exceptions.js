// ----- EXCEPTIONS ------ //

const checkAge = (age) => {
  if (age < 18) {
    throw new Error("La vente est interdite aux mineurs.");
  } else if (typeof age !== "number") {
    throw new TypeError("L'âge doit être un nombre");
  }
  console.log("Accès autorisé");
};

try {
  checkAge(15);
} catch (err) {
  console.error(`Erreur récupérée : ${err}`);
} finally {
  console.log("Ok, les vérifications sont terminées");
}

try {
  checkAge("Vingt");
} catch (err) {
  console.error(`Erreur récupérée : ${err}`);
}

try {
  checkAge(25);
} catch (err) {
  console.error(`Erreur récupérée : ${err}`);
} finally {
  console.log("Ok, les vérifications sont terminées");
}

// Exemple

const guessNumber = (secret) => {
  let attempts = 3;

  const askUser = () => {
    try {
      let response = parseInt(prompt("Devinez le nombre :"));

      if (isNaN(response)) {
        throw new TypeError("Vous devez entrer un nombre");
      }

      if (response === secret) {
        console.log("Félicitations, vous avez gagné", response);
      }

      attempts--;
      console.log(`Mauvaise réponse, il vous reste ${attempts} tentative(s)`);

      if (attempts > 0) {
        askUser();
      } else {
        console.log("Vous avez perdu ☠️");
      }
    } catch (error) {
      console.log(error instanceof Error);
      console.error(error.message);
      askUser();
    }
  };

  askUser();
};

guessNumber(42);
