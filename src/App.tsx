import React, { useState } from 'react';
import { fetchQuizQuestion } from './Api';
import QuestionCards from './components/QuestionCards';
import { QuestionState, Difficulty } from './Api'
import './App.css'

const Total_Numbers=10

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


function App() {
  const [loading, setLoading] = useState(false)
  const [questions, setQusetions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswer] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)



  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestion(Total_Numbers,Difficulty.Easy)
    setQusetions(newQuestions)
    setScore(0)
    setUserAnswer([])
    setNumber(0)
    setLoading(false)
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => { 
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer
      if (correct) setScore(prev => prev + 1)
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswer((prev)=>[...prev, answerObject] )
    }
   }
  const nextQuestion = () => {
    const nextQuestion = number + 1
    nextQuestion ===Total_Numbers ? setGameOver(true):setNumber(nextQuestion)
  }
  
  return (
    <div className='App'>
       
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length===Total_Numbers ? (
        <button className='start' onClick={startTrivia}>Start</button>
        ):null}
      {
        !gameOver ? <p className='score'>score: {score} </p> : null
      }{
        loading && <p>Loading Question ....</p>}
   {!loading && !gameOver &&(
      <QuestionCards
        question={questions[number].question}
        answers={questions[number].answers}
        callback={checkAnswer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        questionNr={number + 1}
        totalQuestions={Total_Numbers} /> 
   )}  
    
      {!gameOver && !loading && userAnswers.length===number +1 &&number !==Total_Numbers-1?(
        <button className='next' onClick={nextQuestion}>
          Next Question
        </button>
        ) : null}
      
      </div>
  );
}

export default App;





