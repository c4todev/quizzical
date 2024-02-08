// data.js

// Shuffle function to randomize the order of an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const quiz = [
  {
    results: [
      {
        question: "How would one say goodbye in Spanish?",
        correct_answer: "Adiós",
        incorrect_answers: ["Hola", "Au Revoir", "Salir"],
      },
      {
        question:
          "Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?",
        correct_answer: "Care Bears",
        incorrect_answers: [
          "Transformers",
          "Rubik's Cube",
          "Cabbage Patch Kids",
        ],
      },
      {
        question: "What is the hottest planet in our Solar System?",
        correct_answer: "Venus",
        incorrect_answers: ["Mars", "Mercury", "Saturn"],
      },
      {
        question: "In which country was the caesar salad invented?",
        correct_answer: "Mexico",
        incorrect_answers: ["Italy", "France", "Portugal"],
      },
      {
        question: "How Many Hearts Does An Octopus Have?",
        correct_answer: "Three",
        incorrect_answers: ["Four", "Two", "One"],
      },
    ],
  },
];

const shuffledOptions = quiz[0].results.map((result) =>
  shuffleArray([result.correct_answer, ...result.incorrect_answers])
);

// Combine shuffled options with the original questions
const shuffledQuiz = quiz[0].results.map((result, index) => ({
  ...result,
  options: shuffledOptions[index],
}));

export default { shuffledQuiz, quiz };
