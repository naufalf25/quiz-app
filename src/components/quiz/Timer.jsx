// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { IoIosTimer } from 'react-icons/io';

const Timer = ({
  timer,
  started,
  setTimer,
  setCurrentQuestion,
  questionLists,
}) => {
  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            setCurrentQuestion(questionLists.length);
            // Reset timer for the next question
            return 10;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [questionLists.length, setCurrentQuestion, setTimer, started]);

  return (
    <div className="flex items-center gap-2 text-slate-500">
      <IoIosTimer className="text-2xl" />
      <p className="text-xl">
        {`${Math.floor(timer / 60)}`.padStart(2, 0)}:
        {`${timer % 60}`.padStart(2, 0)}
      </p>
    </div>
  );
};

export default Timer;
