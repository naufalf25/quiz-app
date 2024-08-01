// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
// import questionBank from '../../questions.json';
import QuestionItem from '../components/quiz/QuestionItem';
import Score from '../components/quiz/Score';
import Started from '../components/quiz/Started';

const Quiz = () => {
  const [questionLists, setQuestionLists] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [timer, setTimer] = useState(300);
  const [started, setStarted] = useState(false);
  const [answerLists, setAnswerLists] = useState([]);
  const [resume, setResume] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('savedData') !== null) {
      const {
        userId,
        questionLists,
        currentQuestion,
        correct,
        incorrect,
        timer,
      } = JSON.parse(localStorage.getItem('savedData'));

      if (userId === localStorage.getItem('userId')) {
        setQuestionLists(questionLists);
        setCurrentQuestion(currentQuestion);
        setCorrect(correct);
        setIncorrect(incorrect);
        setTimer(timer);
        setResume(true);
      } else {
        fetch('https://opentdb.com/api.php?amount=5')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.results !== undefined && data.results.length > 0) {
              setQuestionLists(data.results);
            }
          });
      }
    }
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
    setQuestionLists([]);
    setCurrentQuestion(0);
    setCorrect(0);
    setIncorrect(0);
    setTimer(300);
    setStarted(false);
    setResume(false);
  };

  return (
    <Layout>
      {!started ? (
        <Started
          setStarted={setStarted}
          resume={resume}
          questionLists={questionLists}
          setQuestionLists={setQuestionLists}
        />
      ) : questionLists && currentQuestion < questionLists.length ? (
        <QuestionItem
          answerLists={answerLists}
          currentQuestion={currentQuestion}
          questionLists={questionLists}
          setCurrentQuestion={setCurrentQuestion}
          setTimer={setTimer}
          started={started}
          timer={timer}
          correct={correct}
          incorrect={incorrect}
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
