// ----- Promise ----- //

const simulateLoading = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 5000) {
        resolve("Chargement des données avec succès");
      } else {
        reject("La requête a prit trop de temps");
      }
    }, time);
  });
};

console.log("Début de la requête...");

simulateLoading(7000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("La requête est terminée.");
  });

// Exemple d'enchainement de promise

const getUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, nom: "Balthazar" });
    }, 1000);
  });
};

const getOrders = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, product: "Tractor" },
        { id: 2, product: "Computer" },
      ]);
    }, 1000);
  });
};

const calculateTotal = (order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = order.length * 100;
      resolve(total);
    });
  }, 1000);
};

getUser(1)
  .then((user) => {
    console.table(user);
    return getOrders(user);
  })
  .then((order) => {
    console.table(order);
    return calculateTotal(order);
  })
  .then((total) => {
    console.log(`Total : ${total} €`);
  })
  .catch((error) => {
    console.error("Une erreur s'est produite pendant la requête :", error);
  });
