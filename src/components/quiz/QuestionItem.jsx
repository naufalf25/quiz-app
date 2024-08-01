// eslint-disable-next-line no-unused-vars
import React from 'react';
import Timer from './Timer';

const QuestionItem = ({
  timer,
  started,
  questionLists,
  setCurrentQuestion,
  setTimer,
  currentQuestion,
  answerLists,
  handleAnswer,
}) => {
  const removeCharacters = (question) => {
    return question
      .replace(/(&quot;)/g, '"')
      .replace(/(&rsquo;)/g, '"')
      .replace(/(&#039;)/g, "'")
      .replace(/(&amp;)/g, '"');
  };

  return (
    <div className="w-full min-h-[86.5vh] mt-4 flex flex-col justify-start items-center bg-slate-100 lg:mt-1 lg:min-h-[88vh] lg:flex-row lg:justify-center">
      <div className="w-full px-4 py-4 bg-white shadow-md lg:w-1/2 lg:px-10 lg:min-h-[88vh] lg:flex lg:flex-col lg:justify-center">
        <Timer
          timer={timer}
          started={started}
          questionLists={questionLists}
          setCurrentQuestion={setCurrentQuestion}
          setTimer={setTimer}
        />
        <div className="mt-12 lg:mt-4">
          <p className="font-semibold">
            Question {currentQuestion + 1}/{questionLists.length}
          </p>
          <p className="mt-4 text-xl md:text-3xl lg:text-4xl leading-6 font-semibold">
            {removeCharacters(questionLists[currentQuestion].question)}
          </p>
          <p className="mt-10 text-sm text-slate-500">
            You can&apos;t go back once you choose one of the answers.
          </p>
        </div>
      </div>
      <div className="w-full min-h-60 px-4 py-10 md:py-20 lg:w-1/2 lg:px-10">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          {answerLists?.map((answer) => (
            <button
              key={answer}
              onClick={() => handleAnswer(answer)}
              className="p-6 bg-white shadow-md font-semibold text-lg hover:bg-purple1 hover:text-white md:p-10 md:text-xl"
            >
              {removeCharacters(answer)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
