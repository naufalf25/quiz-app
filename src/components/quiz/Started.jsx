// eslint-disable-next-line no-unused-vars
import React from 'react';

const Started = ({ setStarted, resume, questionLists, setQuestionLists }) => {
  const checkQuestionLists = (e) => {
    e.preventDefault();

    if (questionLists.length === 0) {
      fetch('https://opentdb.com/api.php?amount=5')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.results !== undefined && data.results.length > 0) {
            setQuestionLists(data.results);

            setStarted(true);
          }
        });
    } else {
      setStarted(true);
    }
  };

  return (
    <>
      {resume ? (
        <div className="w-full min-h-[85vh] p-4 flex flex-col gap-10 justify-center items-center text-center">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            It looks like you haven&apos;t finished the previous question, do
            you want to resume it?
          </h2>
          <button
            onClick={() => setStarted(true)}
            className="py-2 px-10 border border-purple1 rounded-md bg-purple1 text-white font-semibold text-lg md:text-xl hover:bg-transparent hover:text-purple1"
          >
            Yes, I want to resume it!!!
          </button>
        </div>
      ) : (
        <div className="w-full min-h-[85vh] p-4 flex flex-col gap-10 justify-center items-center text-center">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Are you ready to answer the questions?
          </h2>
          <button
            onClick={checkQuestionLists}
            className="py-2 px-10 border border-purple1 rounded-md bg-purple1 text-white font-semibold text-lg md:text-xl hover:bg-transparent hover:text-purple1"
          >
            I&apos;m Ready!!!
          </button>
        </div>
      )}
    </>
  );
};

export default Started;
