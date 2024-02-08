import "../App.css";
import React from "react";

export default function Begin(props) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="tracking-wider text-4xl font-bold text-indigo-900">
        Quizzical
      </h2>
      <p className="text-base pt-2 text-indigo-900 font-normal">
        Some description if needed
      </p>
      <button
        className="mt-8 rounded-2xl bg-indigo-700 text-white py-4 lg:px-12 sm:px-40"
        onClick={props.start}
      >
        Start quiz
      </button>
    </div>
  );
}
