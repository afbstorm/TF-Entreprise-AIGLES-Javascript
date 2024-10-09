// ----- Async / Await ----- //

const waiting = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// Si déclaration de fonction via mot clé function -> async doit être avant function
// async function sayBye() {}

// Si déclaration par fonction flechée -> async doit être devant les params de la fonction
const sayHello = async (nom) => {
  await waiting(2000);
  return `Bonjour ${nom}`;
};

const divide = async (a, b) => {
  if (b === 0) {
    throw new Error("Division par zéro impossible");
  }
  await waiting(2000);
  return a / b;
};

const getUserDatas2 = async (id) => {
  await waiting(1000);
  const user = { id, nom: "Aude" };
  await waiting(2000);
  const order = [
    { id: 1, product: "Book" },
    { id: 2, product: "Drawing pencil" },
  ];
  return { user, order };
};

const main = async () => {
  try {
    const message = await sayHello("E-D-D-Y");
    console.log(message);

    const result = await divide(10, 2);
    console.log(result);

    await divide(5, 0);
  } catch (error) {
    console.error(error);
  }

  const { user, order } = await getUserDatas2(1);
  console.table(user);
  console.table(order);
};

main();

// Utilisation avec fetch()

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.table(data);
    // console.log(response);
    // console.log(typeof response);
  } catch (err) {
    console.error(err);
  }
}

getPosts();

// Comparatif Promise / Fetch

const fetchPoks = fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    // Vérification si la response est OK (200)
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

const fetchPoks2 = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      throw new Error(`Errzur HTTP : ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

fetchPoks2("pikachu");
