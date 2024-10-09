// ----- Utilisation des strings ----- //

// Concaténation de strings
console.log("Hello" + " " + "world");
const message = "Aigles";

// Concaténation avec template litteral
// Backticks : ALTGR + £ -> touche espace pour généré les `
const messageConcat = `Bienvenue dans la société ${message}`;
console.log(messageConcat);

// Escaping de caractères : On utilise le backslash -> \
// let escape = 'Let\'s go'; --> Commenté parce que Prettier

// Convertir en majuscules
console.log("UPPERCASE ➡️ ", message.toUpperCase()); // Résultat: 'AIGLES'

// Convertir en minuscules
console.log("LOWERCASE ➡️ ", message.toLowerCase()); // Résultat : "aigles"

// Découpe d'un string en plusieurs morceaux : split()
// let exempleDeSplit = "message coucou".split(" ");
// console.log(exempleDeSplit);
console.log("SPLIT ➡️ ", messageConcat.split(" ")); // Résultat : ["Bienvenue", "dans", "la", ...]

// Remplacement d'un mot : replace();
console.log("REPLACE ➡️ ", messageConcat.replace("société", "compagnie")); // Résultat : 'Bienvenue dans la compagnie ...'

// Remplacement de tous les mots spécifiés : replaceAll();
let exempleReplaceAll = "la famille de la duchesse est la plus horrible";
console.log("REPLACEALL ➡️ ", exempleReplaceAll.replaceAll("la", "une")); // Résultat : 'une famille de une duchesse est une plus horrible'

// Renvoi l'index d'un élément spécifié : charAt()
console.log("CHARAT ➡️ ", message.charAt(0)); // Résultat : "A"

// Déterminer si un string se termine par un élément spécifique : endsWith()
console.log("ENDSWITH ➡️ ", message.endsWith("s")); // Résultat : true

// Déterminer si un string commence par un élément spécifique : startsWith()
console.log("STARTSWITH ➡️ ", messageConcat.startsWith("Bienvenue")); // Résultat : true

// Regular expression : test()
const regex = /bienvenue/i; // --> i : ignore case
console.log("REGEX ➡️ ", regex.test(messageConcat));

// Création d'une répétition d'une chaine de caractère selon un nombre spécifié : repeat(x)
console.log("REPEAT ➡️ ", "Beetlejuice".repeat(3)); // Résultat : il apparait

// Suppression des espaces autour d'une chaine de caractère : trim()
const texte = "             Hello World       ";
console.log("TRIM ➡️ ", texte.trim()); // Résultat : 'Hello World'

// Renvoie un -1 si l'élément est après, 1 si l'élément est situé avant et 0 si situé à la même position : localeCompare()
console.log("LOCALECOMPARE ➡️ ", "a".localeCompare("b")); // Résultat : -1

// Renvoie un substring d'un string selon deux index. Un de début et un de fin : substring(x, y)
console.log("SUBSTRING ➡️ ", message.substring(2, 4)); // Résultat "gl"

// Extraction d'une section d'un string et renvoyer un string : slice(x) / slice(x,y)
console.log("SLICE ➡️ ", messageConcat.slice(-10)); // Résultat : 'été Aigles"
console.log("SLICE(X,Y) ➡️ ", messageConcat.slice(5, 10)); // Résultat 'enue'

const str = "5";
console.log("PADSTART ➡️", str.padStart(2, "0")); // Résultat : 05

const creditCard = "59856365847282";
const last4Digits = creditCard.slice(-4);
const encryptedCreditCard = last4Digits.padStart(creditCard.length, "*");
console.log("PADSTART2 ➡️", encryptedCreditCard); // Resultat : **************7282
