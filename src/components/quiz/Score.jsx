// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

const Score = ({ correct, incorrect, questionLists, handleRestart }) => {
  useEffect(() => {
    if (questionLists) {
      localStorage.removeItem('savedData');
    }
  });

  return (
    <div className="w-full min-h-[88.5vh] p-4 flex justify-center items-center">
      <div className="w-[600px] p-4 text-center border rounded-md border-purple1 md:p-8 lg:p-12">
        <h2 className="font-bold text-4xl text-purple1">Congratulations!</h2>
        <p className="mt-4">You just finished answering the questions</p>
        <div className="mt-10 flex justify-between items-center md:justify-around">
          <div className="text-green-500">
            <p className="text-lg md:text-xl">Corrent Answer:</p>
            <p className="text-2xl font-bold">{correct}</p>
          </div>
          <div className="text-red-500">
            <p className="text-lg md:text-xl">Incorrect Answer:</p>
            <p className="text-2xl font-bold">{incorrect}</p>
          </div>
        </div>
        <p className="mt-16 text-xl font-bold">
          Total Question: {questionLists?.length || 0}
        </p>
        <button
          onClick={handleRestart}
          className="mt-10 py-2 px-10 border border-purple1 rounded-md bg-purple1 text-white font-bold hover:bg-transparent hover:text-purple1 md:text-lg"
        >
          Try different questions
        </button>
      </div>
    </div>
  );
};

export default Score;
