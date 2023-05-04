import React from 'react'
import { useParams,Link } from 'react-router-dom'
import upVotes from '../../assets/sort-up.svg'
import downVotes from '../../assets/sort-down.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Ques.css'
import DisplayAnswers from './DisplayAnswers'

const QuestionDetails = () => {

  let { id } = useParams()
    var questionList = [
        {
          _id:'1',
          upVotes:3,
          downVotes : 0,
          noOfAnswers:2,
          questionTitle:"What is a function ?",
          questionBody:"It is meant to be",
          questionTags : ["java", "R","python"],
          userPosted : "mano" ,
          userId: 1 ,
          answers : [{
            answerBody : "answer",
            userAnswered : "Rocky",
            answeredOn : "jan 4",
            userId : 2
          }],
          askedOn: "jan 1"
        },{
          _id:'2',
          upVotes:1,
          downVotes : 0,
          noOfAnswers:2,
          questionTitle:"What is a function ?",
          questionBody:"It is meant to be",
          questionTags : ["javascript", "R","python"],
          userPosted : "mano" ,
          userId: 1 ,
          answers : [{
            answerBody : "answer",
            userAnswered : "manojj",
            answeredOn : "jan 4",
            userId : 2
          }],
          askedOn: "jan 1"
        },
        {
          _id:'3',
          upVotes:0,
          downVotes : 0,
          noOfAnswers:2,
          questionTitle:"What is a function ?",
          questionBody:"It is meant to be",
          questionTags : ["javascript", "R","python"],
          userPosted : "mano" ,
          userId: 1 ,
          answers : [{
            answerBody : "answer",
            userAnswered : "manojj",
            answeredOn : "jan 4",
            userId : 2
          }],
          askedOn: "jan 1"
        },
        {
          _id:'4',
          upVotes:10,
          downVotes : 3,
          noOfAnswers:5,
          questionTitle:"What is a Rdbms ?",
          questionBody:"It is meant to be",
          questionTags : [ "R","python","database","sql","mongodb"],
          userPosted : "Devansh" ,
          userId: 1 ,
          answers : [{
            answerBody : "answer",
            userAnswered : "manojj",
            answeredOn : "jan 4",
            userId : 2
          }],
          askedOn: "April 11"
        }
      ]
    
  return (
    <div className='question-details-page'>
        {
            questionList === null ? 
            <h1>loading ...</h1> :
             <>
             {
                questionList.filter(question => question._id === id).map((question) =>(
                  <div key={question._id}>
                    <div className="question-details-container">
                      <h1> { question.questionTitle  }</h1>
                      <section className="question-details-container-2">

                        <div className="ques-votes">
                          <img src={ upVotes } alt="UpVote"  width={18} className='votes-icon'/>
                          <p>{ question.upVotes - question.downVotes}</p>
                          <img src={ downVotes } alt="downupVotes" width={18} className='votes-icon'/>
                        </div>
                        <div style={{width:"100%"}}>
                        <p>{question.questionBody}</p>
                          <div className="ques-details-body">
                            
                            <div className="ques-details-tags">
                              {
                                question.questionTags.map((tag)=>(
                                  <p key={tag}>{tag}</p>
                                ))
                              }
                            </div>
                            <div className="ques-action">
                              <div>
                              <button type='button'>Share</button>
                              <button type='button'>Delete</button>
                              </div>
                              <div className="ques-askedby">
                              <p>asked on {question.askedOn}
                                <Link className='user-link' to={`User/${question.userId}`}>
                                <Avatar className='avatar' backgroundColor='lightblue' px='8px' py='5px' width={20} >
                                    {question.userPosted.charAt(0).toUpperCase()}
                                  </Avatar>
                                <p>{question.userPosted}</p>
                                </Link>
                              </p>
                            </div>
                            </div>
                           
                          </div>
                        </div>
                        
                        </section>
                        {
                        question.noOfAnswers !== 0 && (
                          <section className="disp-ans">
                            <h3>{question.noOfAnswers} Answers</h3>
                            < DisplayAnswers key={question._id} question={question}/>
                          </section>
                            )
                         }
                         <section className="post-your-ans">
                          <h3>Your answer</h3>
                          <form className='post-your-ans'>
                            <textarea name="" id="" cols="85" rows="15"></textarea><br />
                            <input type="submit" value="Post Your Answer" /></form>   
                          <p >Browse other Question Tags
                          {
                            question.questionTags.map((tag)=>(
                              <Link to='/Tags' key={tag} className='ans-tags tags'> { tag } </Link>
                            ))
                          } or {
                              <Link to='/AskQuestion' style={{textDecoration:"none" , color:"#009dff"}}>Ask your own Question</Link>
                          }
                          </p>
                         </section>
                    </div>
                  </div>
                ))
             }
             </>
        }


    </div>
  )
}

export default QuestionDetails
