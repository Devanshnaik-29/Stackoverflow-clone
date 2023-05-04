import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswers = ({ question }) => {
  return (
    <div>
      {
        question.answers.map((ans)=>(
            <div className="display-ans" key={ans._id}>
                <p>{ ans.answerBody }</p>
                <div className="ques-action">
                    <div>
                        <button type='button'>Share</button>
                        <button type='button'>Delete</button>
                    </div>
                    <div >
                        <p className='answered-by' style={{marginBottom:"15px"}}> answered on {ans.answeredOn}
                        <div  className='ques-askedby'>
                        <Link className='user-link' to={`User/${ans.userId}`} >
                                  <Avatar className='avatar' backgroundColor='magenta' px='8px' py='5px' width={20} >
                                    {ans.userAnswered.charAt(0).toUpperCase()}
                                  </Avatar>
                                  <p className="ques-userposted" style={{margin:"0",padding:"0 20px",textAlign:"center", color:"black"}}>{ans.userAnswered}</p>

                        </Link>
                        
                    </div></p>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswers
