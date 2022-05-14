import React from "react";
import {useState} from "react";
import QuizModal from "./pages/QuizModal";
import './QuizItem.css';


function QuizItem(props){
    const [openModal,setOpenModal]=useState(false);

    console.log(props.quiz.question);
    
    return(
        <div className="card__content">  
            <div className='bg-light-green dib br3 pa3 ma'>
                <h3 className="card__header">Question number {props.number}</h3>
                <p className="card__info">{props.quiz.question}</p>
                <button className="card__button" onClick={()=>{setOpenModal(true)}}>Update</button>
                {openModal && <QuizModal  quizList={props.quizList} setQuizList={props.setQuizList} closeModal={setOpenModal} Question={props.quiz}  />}
            </div>
        </div>
    )
}
export default QuizItem