import React from 'react'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen-solid.svg'
import'./RightSideBar.css'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className="widget">
        <h4>The Overflow Blog</h4>
        <div className="right-side-div1 ">
            <div className="right-side-div2 d1">
            <img src={pen} alt="pen" width={10}/>
            <p>Observability is the key to the future of software and your DevOps career</p></div>
            <div className="right-side-div2">
            <img src={pen} alt="pen" width={10}/>
            <p>Podcast 374 : How valueable is your screen name ?</p>
            </div>
        </div>


        <h4>Featured on Meta</h4>
        <div className="right-side-div1">
            <div className="right-side-div2"><img src={comment} alt="comment" width={10}/>
            <p>Review queue workflows - Final release ....</p></div>
            <div className="right-side-div2">
            <img src={comment} alt="comment" width={10}/>
            <p>Please welcome Valued Associates : #958 <br />- V2Blast #959 - SpencerG</p>
            </div>
            <div className="right-side-div2">
                <img src={blacklogo} alt="logo" width={10} />
            <p> Outdated Answers : accepted answers are now unpinned on Stack Overflow</p>
            </div>

        </div>


        <h4>Featured on Meta</h4>
        <div className="right-side-div1 b1">
        <div className="right-side-div2"><p>38 </p> <p>Why was the spam flag declined , yet <br />the question marked as spam ?</p></div>
        <div className="right-side-div2"><p>20 </p> <p>What is the best Course action when <br />a user is high enough to rep to ...</p></div>
        <div className="right-side-div2"><p>14 </p> <p>Is link to the "How to ask" help page <br />a useful comment</p></div>
        </div>
    </div>
  )
}

export default Widget
