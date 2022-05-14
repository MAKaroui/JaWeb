const mongoose = require("mongoose");
const { stringify } = require("uuid");
const User = require("./user")

const QuizItemsSchema = new mongoose.Schema(
    
        {
            author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            quizItems:[
                {
                    question: {
                        type: String
                    },
                    answers:{ 
                         answer1:{
                            value: String,
                            Boolean: Boolean
                        }, 
                         answer2:{
                            value: String,
                            Boolean: Boolean 
                        },
                        answer3: {
                            value: String,
                            Boolean: Boolean
                        },
                        answer4:{
                            value: String,
                            Boolean: Boolean
                        }
                    }
                    
                }
            
            ]
        } 
);

module.exports = mongoose.model("QuizItems", QuizItemsSchema);

