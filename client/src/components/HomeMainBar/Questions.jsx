import React from 'react'
import { Link } from 'react-router-dom'

const Questions = ({question}) => {
  return (
    <div className='display-ques-container'>
        <div className="display-votes-ans">
            <p>{question.votes}</p>
            <p>votes</p>
        </div>

        <div className="display-ans">
            <p>{question.noOfAnswers}</p>
            <p>Answers</p>
        </div>
      <div className="display-ques-details">
        <Link to={`/Questions/${question.id}` } className='ques-title-link'>{ question.questionTitle }</Link>

      <div className="display-tags-time">
        <div className="display-tags">
          {
            question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))
          }
        </div>
        <div className="display-time">
          <p>asked by {question.userPosted} on {question.askedOn}</p>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Questions
