import React from "react";
import QuizItem from "../QuizItem";
import { useState } from "react";


function QuizList() {
    
    const Quiz=[{'question':'first',
'answers':[{'value':'aydh','boolean':true},{'value':'adza','boolean':false},{'value':'this is true','boolean':false},{'value':'adfe','boolean':false}]},
{'question':'second',
'answers':[{'value':'aydh','boolean':false},{'value':'adza','boolean':true},{'value':'this is true','boolean':false},{'value':'adfe','boolean':false}]},
{'question':'third',
'answers':[{'value':'aydh','boolean':false},{val:'adza',bol:false},{val:'this is true',bol:true},{val:'adfe',bol:false}]}
]
    
    const [data,setdata]= useState(Quiz)
    console.log(data);
    return(
        <div>
            <h3>The questions:</h3>
            <div className="cards-container">
            {   
                data.map((info, index)=>{
                    return (<QuizItem  quizList={data} setQuizList={setdata} quiz={info} number={index+1} />);
                })
            }
            </div>
        </div>

    );

}
export default QuizList