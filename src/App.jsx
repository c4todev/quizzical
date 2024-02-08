import { useState } from "react";
import Begin from "./components/Begin";
import Quiz from "./components/Quiz";
import "./App.css";
import BlobsTop from "./assets/BlobsTop";
import BlobsBottom from "./assets/BlobsBottom";

export default function App() {
  const [quiz, setQuiz] = useState(false);

  function handleStart() {
    setQuiz((prevQuiz) => !prevQuiz);
  }

  return (
    <div className="h-full relative">
      <BlobsTop className="absolute top-0 right-0 lg:w-96 lg:h-96" />
      <BlobsBottom className="absolute bottom-0 lg:w-96 lg:h-96" />
      <div className="h-full flex items-center justify-center">
        {quiz ? <Quiz onClick={handleStart} /> : <Begin start={handleStart} />}
      </div>
    </div>
  );
}
