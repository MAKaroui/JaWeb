import React from "react";
import {Fragment, useState, useEffect} from 'react';
import './QuizModal.css'
import '../../App.css';
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, useNavigate, useLocation } from 'react-router-dom';



function QuizModal({quizList,setQuizList,closeModal,Question}){
    const [answer1, setAnswer1] = useState(Question.answers[0])
    const [answer2, setAnswer2] = useState(Question.answers[1])
    const [answer3, setAnswer3] = useState(Question.answers[2])
    const [answer4, setAnswer4] = useState(Question.answers[3]) 
    const [rightAnswer,setRightAnswer] =useState(Question.answers[4])
    const [answers, setAnswers] = useState([answer1,answer2,answer3,answer4])
    const [QuizItem, setQuizItem] = useState(Question) 
    

    const change=(e)=>{
        answers[0]=answer1
        answers[1]=answer2
        answers[2]=answer3
        answers[3]=answer4
        answers[4]=rightAnswer
        setQuizItem({ ...QuizItem,"answers": answers})
        console.log("=", QuizItem)
        quizList.push(QuizItem)
        setAnswers([])
        console.log("==", quizList)
    }
    console.log(Question.question);
    console.log(Question.answers);
    
    const onChange1 =()=>{
        setAnswer1({...answer1,'Boolean': true})
        setAnswer2({...answer2,'Boolean':false})
        setAnswer3({...answer3,'Boolean':false})
        setAnswer4({...answer4,'Boolean':false})
        setRightAnswer(answer1.value)
      }
     
      const onChange2 =()=>{
       setAnswer2({...answer2,'Boolean': true})
       setAnswer1({...answer1,'Boolean':false})
       setAnswer3({...answer3,'Boolean':false})
       setAnswer4({...answer4,'Boolean':false})
       setRightAnswer(answer2.value)
     }
     
     const onChange3 =()=>{
       setAnswer3({...answer3,'Boolean': true})
       setAnswer2({...answer2,'Boolean':false})
       setAnswer1({...answer1,'Boolean':false})
       setAnswer4({...answer4,'Boolean':false})
       setRightAnswer(answer3.value)
     }
     
     const onChange4 =()=>{
       setAnswer4({...answer4,'Boolean': true})
       setAnswer2({...answer2,'Boolean':false})
       setAnswer3({...answer3,'Boolean':false})
       setAnswer1({...answer1,'Boolean':false})
       setRightAnswer(answer4.value)
     }

    return(
        <div className="modalBackground">
            <div className='modalContainer'>
                <input placeholder="Enter the question" defaultValue={Question.ques}/>
                <br/>
                <form  >
                <div className='createquiz'>
                <div className='quiz-wrapper'>
                    <div className='lifeline-container'>
                    <p>
                        <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    </p>
                    <p>
                        <span className='mdi mdi-lightlub-on-outline mdi-24px lifeline-icon'></span>
                    </p>
                    </div>
                <input placeholder='Question' className="Question" value={QuizItem.question} onChange={e => setQuizItem({ ...QuizItem,"question": e.target.value})}  />
                <div className='options-container'>
                    <span><input className='option' value={Question.answers[0].value}  placeholder='option 1'  onChange={e => {setAnswer1(prevState => ({...prevState,'value':e.target.value})); }}  /> <input type='checkbox' className='box' onClick={onChange1}  checked={Question.answers[0].Boolean} /> </span>
                    <span><input className='option'  value={Question.answers[2].value} placeholder='option 3' onChange={e => {setAnswer3(prevState => ({...prevState,'value':e.target.value})); }} /> <input  type='checkbox' className='box' onClick={onChange3} checked={Question.answers[2].Boolean}/> </span>
                </div>
                <div className='options-container'>
                    <span> <input className='option' value={Question.answers[1].value}  placeholder='option 2'  onChange={e => {setAnswer2({...answer2,'value': e.target.value})}}/> <input type='checkbox' className='box' onClick={onChange2} checked={Question.answers[1].Boolean}/> </span>
                    <span><input className='option' value={Question.answers[3].value}  placeholder='option 4' onChange={e => {setAnswer4({...answer4,'value': e.target.value})}} /> <input type='checkbox' className='box' onClick={onChange4} checked={Question.answers[3].Boolean}/> </span>
                </div>
                <div className='button-container'>
                
                <button  onClick={change}>Confirm <IoIosAddCircleOutline/></button>
                <button onClick={() => console.log(QuizItem)}> <Link to='/createQuiz'>Cancel</Link>  </button>  
                </div>
                </div>
                </div>
                </form>
                {/* {Question.answers.map(function(option){
                    return(
                        <div>
                            <input placeholder="opt" defaultValue={option.val}/>
                            <input type="checkbox" onChange={()=>{console.log('do the function');}} checked={option.bol} />
                        </div>
                    )
                })}
                <button onClick={()=>closeModal(false)}>Cancel</button>
                <button onClick={()=>closeModal(false)}>Confirm</button> */}
            </div>
        </div>
    );
}
export default QuizModal