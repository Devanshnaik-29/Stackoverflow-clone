import React from 'react'
import './HomeMainBar.css'
import { useLocation , useNavigate }from 'react-router-dom'
import QuestionsList from './QuestionsList'

const HomeMainBar = () => {
  let navigate = useNavigate()
  let user = 1;
  let checkAuth = ()=>{
    if (user === null){
      alert("Login or SignUp Required");
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  var questionList = [
    {
      id:1,
      votes:3,
      noOfAnswers:2,
      questionTitle:"What is a function ?",
      questionBody:"It is meant to be",
      questionTags : ["java", "R","python"],
      userPosted : "mano" ,
      askedOn: "jan 1"
    },{
      id:2,
      votes:1,
      noOfAnswers:2,
      questionTitle:"What is a function ?",
      questionBody:"It is meant to be",
      questionTags : ["javascript", "R","python"],
      userPosted : "mano" ,
      askedOn: "jan 1"
    },
    {
      id:3,
      votes:0,
      noOfAnswers:2,
      questionTitle:"What is a function ?",
      questionBody:"It is meant to be",
      questionTags : ["javascript", "R","python"],
      userPosted : "mano" ,
      askedOn: "jan 1"
    },
    {
      id:4,
      votes:10,
      noOfAnswers:5,
      questionTitle:"What is a Rdbms ?",
      questionBody:"It is meant to be",
      questionTags : [ "R","python","database","sql","mongodb"],
      userPosted : "Devansh" ,
      askedOn: "April 11"
    }
  ]

  let location = useLocation()
  return (
    <div className='home-main'>
        <div className="main-bar-header">
          {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
          }
          <button style={{border:'none'}} onClick={checkAuth} className="ask-btn" to='/AskQuestion'>Ask Question</button>
        </div>

        <div >
          {
           questionList === null ? <h1>Loading...</h1> : 
            <>
            <p>{ questionList.length } Questions</p>
            <QuestionsList questionList={questionList} />
            </>
            
          }
        </div>
    </div>
  )
}

export default HomeMainBar
