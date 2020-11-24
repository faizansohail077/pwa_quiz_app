import React from 'react'
import { AnswerObject } from '../App'
import './QuestionCard.css'

type props = {
    question:string,
    answers:string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined ;
    questionNr: number;
    totalQuestions: number   
}


const QuestionCards: React.FC<props> = ({ question, callback, answers, userAnswer, questionNr, totalQuestions }) =>
    (
        <div className='app'>
            <p className='number'>Question: {questionNr}/{totalQuestions}</p>
            <p className="question" dangerouslySetInnerHTML={{ __html: question }}></p>
            <div>
                {answers.map(answer => (
                           <div key={answer}>
                            <button  disabled={userAnswer ? true : false}  value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html : answer}}/>
                            </button>
                            </div>
                           
                ))}
            </div>
        </div>
    )


export default QuestionCards
