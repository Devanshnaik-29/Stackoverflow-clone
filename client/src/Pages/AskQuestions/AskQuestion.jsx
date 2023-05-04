import React from 'react'
import './AskQuestion.css'

const AskQuestion = () => {
  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1>Ask a public question</h1>
            <form >
                <div className="ask-form-container">
                    <label htmlFor="title">
                        <h4>Title</h4>    
                        <p>Be specific and imagine you're asking a question to another person</p>
                    </label>
                    <input type="text" id="body" placeholder='e.g. is there any R function for finding the index of the element in a vector'/>
                    <label htmlFor="body">
                        <h4>Body</h4>    
                        <p>Include all the information someone would need to answer your question</p>
                    </label>
                    <textarea  id="body" cols="112" rows="8"></textarea>
                    {/* <input type="text" id="tags" /> */}
                    <label htmlFor="title">
                        <h4>Tags</h4>    
                        <p>Add upto 5 tags to describe what your quetion is about</p>
                    </label>
                    <input type="text" id="tags" placeholder='e.g. (xml typescript wordpress)'/>
                </div>
            </form>
            <input type="submit" value="Review your Question" />

        </div>
      
    </div>
  )
}

export default AskQuestion
