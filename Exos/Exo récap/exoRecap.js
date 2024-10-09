let books = [
  {
    id: 1,
    titre: "Les Misérables",
    auteur: "Victor Hugo",
    categorie: "Classique",
    disponible: true,
  },
  {
    id: 2,
    titre: "1984",
    auteur: "George Orwell",
    categorie: "Science-fiction",
    disponible: true,
  },
  {
    id: 3,
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    categorie: "Jeunesse",
    disponible: true,
  },
  {
    id: 4,
    titre: "Dune",
    auteur: "Frank Herbert",
    categorie: "Science-fiction",
    disponible: true,
  },
  {
    id: 5,
    titre: "Harry Potter",
    auteur: "J.K. Rowling",
    categorie: "Fantasy",
    disponible: true,
  },
];

let borrowers = [
  { userId: 101, nom: "Gavin", borrowedBooks: [] },
  { userId: 102, nom: "Michael", borrowedBooks: [] },
  { userId: 103, nom: "Sébastien", borrowedBooks: [] },
  { userId: 104, nom: "Alexandre", borrowedBooks: [] },
];

const borrowBook = (userId, bookId) => {
  // Récupération du client par son ID. Si l'id passé en param de boroowBook correspond à
  // l'id d'un borrower alors on stocke ses informations dans la constante borrower
  const borrower = borrowers.find((user) => user.userId === userId);

  // Récupération de l'index du livre dont l'ID passé en param de borrowBook correspond à
  // l'id d'un livre. On stocke du coup l'index dans la constante bookIndex
  const bookIndex = books.findIndex((book) => book.id === bookId);

  // Si findIndex n'a rien trouvé, alors on signale à l'utilisateur
  if (bookIndex === -1) {
    console.log("Livre non trouvé. \n ---------");
  }

  // Si par contre il y a correspondance d'id de livre, alors on destructure les informations du livre
  // On le récupérant via son index [bookindex]
  const { disponible, ...bookInfo } = books[bookIndex];

  // Si l'état de disponibilité est égal à false alors on prévient l'utilisateur
  if (!disponible) {
    console.log(`Le livre "${bookInfo.titre}" est déjà emprunté. \n ---------`);
  }

  // Si pas, on vient modifier l'élément complet situé à l'index spécifié par [bookIndex]
  // On crée un nouvel objet {}
  // On spread l'objet bookInfo destructuré plus haut, et on rajoute une clé " disponible " que l'on passe en false
  books[bookIndex] = { ...bookInfo, disponible: false };
  borrower.borrowedBooks.push(bookId);

  console.log(
    `Le livre "${bookInfo.titre}" a été emprunté par ${borrower.nom} \n ---------`
  );
};

const returnBook = (userId, bookId) => {
  // Récupération du client par son ID. Si l'id passé en param de boroowBook correspond à
  // l'id d'un borrower alors on stocke ses informations dans la constante borrower
  const borrower = borrowers.find((user) => user.userId === userId);

  // Récupération de l'index du livre dont l'ID passé en param de borrowBook correspond à
  // l'id d'un livre. On stocke du coup l'index dans la constante bookIndex
  const bookIndex = books.findIndex((book) => book.id === bookId);

  // Si findIndex n'a rien trouvé, alors on signale à l'utilisateur
  if (bookIndex === -1) {
    console.log("Livre non trouvé. \n ---------");
  }

  // Création d'une copie du tableau borrowedBooks sans l'id du livre reçu en paramètre de la fonction de retour
  const updatedBorrowedBooks = borrower.borrowedBooks.filter(
    (id) => id !== bookId
  );

  // Ensuite on vient remplacer le tableau original par la copie (spread operator)
  borrower.borrowedBooks = [...updatedBorrowedBooks];

  const { disponible, ...bookInfo } = books[bookIndex];
  // on vient modifier l'élément complet situé à l'index spécifié par [bookIndex]
  // On crée un nouvel objet {}
  // On spread l'objet bookInfo destructuré plus haut, et on rajoute une clé " disponible " que l'on passe en false
  books[bookIndex] = { ...bookInfo, disponible: true };

  console.log(
    `${borrower.nom} a retourné le livre : "${bookInfo.titre}" \n ---------`
  );
};

const searchBooks = (criteria) => {
  // Récupération des livres via la fonction filter
  // Destructuring de books dans les params du filter - ici on ne récupère que le titre, l'auteur et la categorie
  // Passage des casses du paramètre criteria et des éléments destructurés en lowerCase pour comparaison fonctionnelle
  const result = books.filter(({ titre, auteur, categorie }) => {
    const lowerCaseCriteria = criteria.toLowerCase();
    return (
      titre.toLowerCase().includes(lowerCaseCriteria) ||
      auteur.toLowerCase().includes(lowerCaseCriteria) ||
      categorie.toLowerCase().includes(lowerCaseCriteria)
    );
  });

  // Si la longueur de result est égale à 0, c'est qu'il est vide, donc pas de livre
  if (result.length === 0) {
    console.log("Aucun livre trouvé. \n ---------");
  }
  // Sinon, on parcourt tableau de resul et on affiche pour chaque élément une description courte
  else {
    result.forEach(({ titre, auteur, categorie }) => {
      console.log(
        `Titre: ${titre}, Auteur: ${auteur}, Catégorie: ${categorie} \n ---------`
      );
    });
  }
};

const listBorrowedBooks = (userId) => {
  // Récupération uniquement du tableau de livres empruntés et du nom de l'utilisateur via un destructuring sur
  // le resultat du find
  const { borrowedBooks, nom } = borrowers.find(
    (user) => user.userId === userId
  );

  if (borrowedBooks.length === 0) {
    console.log(`${nom} n'a emprunté aucun livre. \n ---------`);
  }
  // Sinon, on parcourt le tableau de livres empruntés
  // Pour chaque livre on récupère ses informations via son id
  // Et enfin, on boucle dans le tableau crée (result) pour afficher les titres de chaque livres empruntés
  else {
    for (let bookId of borrowedBooks) {
      let result = [books.find((book) => book.id === bookId)];
      console.log(
        `Livres empruntés par ${nom} : ${result.map(
          (book) => book.titre
        )}\n ---------`
      );
    }
  }
};

const getLibraryStats = () => {
  const totalBooks = books.length;
  const availableBooks = books.filter((book) => book.disponible).length;
  const borrowedBooks = totalBooks - availableBooks;

  console.log("Statistiques de la bibliothèque :");
  console.log(` - Total de livres : ${totalBooks}`);
  console.log(` - Total de livres disponibles : ${availableBooks}`);
  console.log(` - Total de livres empruntés : ${borrowedBooks}\n ---------`);
};

borrowBook(101, 4);
borrowBook(102, 1);
borrowBook(103, 2);
borrowBook(102, 3);
borrowBook(101, 5);

returnBook(102, 1);

searchBooks("petit");

listBorrowedBooks(101);
listBorrowedBooks(102);
listBorrowedBooks(103);
listBorrowedBooks(104);

getLibraryStats();
