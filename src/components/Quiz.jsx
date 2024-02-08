import { useState } from "react";
import quizData from "../quiz"; // Assuming you have a separate file with your quiz data
import { v4 as uuidv4 } from "uuid";

export default function Quiz(props) {
  const [test, setTest] = useState(quizData.shuffledQuiz); // Using the shuffled version of the quiz
  const [usersPick, setUsersPick] = useState({});
  const [phase, setPhase] = useState(false);

  if (!test) {
    return null; // or a loading indicator or any other fallback
  }

  function handleUserPick(questionIndex, optionIndex) {
    setUsersPick((prevUsersPick) => ({
      ...prevUsersPick,
      [questionIndex]: optionIndex,
    }));
  }

  function handlePhase() {
    setPhase(true);
  }

  const selectedStyles = {
    "bg-indigo-500": true,
    "border-transparent": true,
  };

  const testElements = test.map((results, questionIndex) => (
    <div className="mb-2 mt-2" key={uuidv4()}>
      <p className="mb-2 text-lg font-medium text-indigo-900">
        {results.question}
      </p>
      <ul className="flex flex-row gap-2">
        {results.options.map((option, optionIndex) => (
          <li
            onClick={() => handleUserPick(questionIndex, optionIndex)}
            className={`${
              usersPick[questionIndex] === optionIndex
                ? "bg-indigo-500 border-2 border-transparent py-1 px-4 rounded-md text-indigo-100 text-center"
                : "bg-transparent border-2 border-indigo-400 py-1 px-4 rounded-md text-indigo-950 cursor-pointer hover:bg-indigo-400 hover:border-transparent hover:text-white"
            }`}
            key={uuidv4()}
          >
            {option}
          </li>
        ))}
      </ul>
      <hr className="h-0.5 bg-indigo-300 my-3" />
    </div>
  ));

  const checkedElements = test.map((results, questionIndex) => (
    <div className="mb-2 mt-2" key={uuidv4()}>
      <p className="mb-2 text-lg font-medium text-indigo-900">
        {results.question}
      </p>
      <ul className="flex flex-row gap-2">
        {results.options.map((option, optionIndex) => {
          const isUserPickCorrect =
            usersPick[questionIndex] === optionIndex &&
            results.options[optionIndex] === results.correct_answer;

          const isUserPickIncorrect =
            usersPick[questionIndex] === optionIndex &&
            results.options[optionIndex] !== results.correct_answer;

          const isOptionUnpicked =
            usersPick[questionIndex] === undefined && !isUserPickCorrect;

          const isCorrectOption =
            results.options[optionIndex] === results.correct_answer;

          return (
            <li
              onClick={() =>
                handleUserPick(
                  questionIndex,
                  optionIndex,
                  results.correct_answer
                )
              }
              className={`${
                phase && isUserPickCorrect
                  ? "bg-green-500 border-2 border-transparent py-1 px-4 rounded-md text-indigo-100 text-center"
                  : isUserPickIncorrect
                  ? "bg-red-500 border-2 border-transparent py-1 px-4 rounded-md text-indigo-100 text-center"
                  : isOptionUnpicked
                  ? "bg-indigo-400 border-2 border-transparent py-1 px-4 rounded-md text-indigo-950"
                  : isCorrectOption
                  ? "bg-green-500 opacity-50 border-2 border-transparent py-1 px-4 rounded-md text-indigo-100 text-center"
                  : "bg-indigo-400 border-2 border-transparent py-1 px-4 rounded-md text-indigo-100 text-center"
              }`}
              style={{ pointerEvents: phase ? "none" : "auto" }}
              key={uuidv4()}
            >
              {option}
            </li>
          );
        })}
      </ul>
      <hr className="h-0.5 bg-indigo-300 my-3" />
    </div>
  ));

  console.log(testElements);

  const disabled = !phase
    ? Object.keys(usersPick).length !== test.length
    : false;

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        {!phase ? testElements : checkedElements}
        <div className="flex justify-center">
          <button
            disabled={disabled}
            onClick={!phase ? handlePhase : props.onClick}
            className={`mt-4 rounded-2xl bg-indigo-700 text-white py-4 lg:px-12 sm:px-40 mx-auto my-auto ${
              disabled ? "opacity-50" : ""
            }`}
          >
            {!phase ? "Check Answers" : "Play Again"}
          </button>
        </div>
      </div>
    </div>
  );
}
