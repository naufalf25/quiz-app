// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
// import questionBank from '../../questions.json';
import QuestionItem from '../components/quiz/QuestionItem';
import Score from '../components/quiz/Score';

const Quiz = () => {
  const [questionLists, setQuestionLists] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [timer, setTimer] = useState(600);
  const [started, setStarted] = useState(false);
  const [answerLists, setAnswerLists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuestionLists(data.results);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem('login') !== 'true') {
      navigate('/login');
    }

    if (questionLists && currentQuestion < questionLists.length) {
      combineAllAnswer(
        questionLists[currentQuestion].incorrect_answers,
        questionLists[currentQuestion].correct_answer
      );
    }
  }, [currentQuestion, navigate, questionLists]);

  const combineAllAnswer = (incorrectAnswer, correctAnswer) => {
    let allAnswer = [];

    incorrectAnswer.map((answer) => {
      allAnswer.push(answer);
    });
    allAnswer.push(correctAnswer);

    allAnswer.sort(() => Math.random() - 0.5);
    setAnswerLists(allAnswer);
  };

  const handleAnswer = (answer) => {
    if (answer === questionLists[currentQuestion].correct_answer) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setCorrect(0);
    setIncorrect(0);
    setTimer(600);
    setStarted(false);

    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuestionLists(data.results);
      });
  };

  return (
    <Layout>
      {!started ? (
        <div className="w-full min-h-[85vh] p-4 flex flex-col gap-10 justify-center items-center text-center">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Are you ready to answer the questions?
          </h2>
          <button
            onClick={() => setStarted(true)}
            className="py-2 px-10 border border-purple1 rounded-md bg-purple1 text-white font-semibold text-lg md:text-xl hover:bg-transparent hover:text-purple1"
          >
            I&apos;m Ready!!!
          </button>
        </div>
      ) : questionLists && currentQuestion < questionLists.length ? (
        <QuestionItem
          answerLists={answerLists}
          currentQuestion={currentQuestion}
          questionLists={questionLists}
          setCurrentQuestion={setCurrentQuestion}
          setTimer={setTimer}
          started={started}
          timer={timer}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Score
          correct={correct}
          incorrect={incorrect}
          questionLists={questionLists}
          handleRestart={handleRestart}
        />
      )}
    </Layout>
  );
};

export default Quiz;
