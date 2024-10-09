const getQuizzQuestion = () => {
  return fetch("https://opentdb.com/api.php?amount=1&type=multiple")
    .then((res) => res.json())
    .then((data) => data.results[0])
    .catch((err) => {
      console.error(`Erreur lors de la requête HTTP : ${err}`);
    });
};

const playQuizz = async () => {
  const question = await getQuizzQuestion();

  console.log(question ? question : "Nope");
  if (!question) {
    return;
  }

  const answers = [...question.incorrect_answers, question.correct_answer];
  answers.sort(() => Math.random() - 0.5);

  let userAnswer;

  const ready = confirm(
    "Une question va vous être posée. Pour donner la réponse inscrivez 1, 2, 3 ou 4"
  );
  if (ready) {
    userAnswer = prompt(`${question.question} \b
                1 - ${answers[0]}
                2 - ${answers[1]}
                3 - ${answers[2]}
                4 - ${answers[3]}`);
  }
  const correctAnswerIndex = answers.indexOf(question.correct_answer) + 1;

  if (parseInt(userAnswer) === correctAnswerIndex) {
    alert("Correct, vous avez gagné 🥳");
  } else {
    alert(
      `Désolé, vous avez perdu. La bonne réponse était : ${question.correct_answer}`
    );
  }

  const playAgain = prompt("Voulez-vous jouer à nouveau ? (o/n)");

  playAgain.toLowerCase() === "o" ? playQuizz() : confirm("Ok,,bye");
};

playQuizz();
