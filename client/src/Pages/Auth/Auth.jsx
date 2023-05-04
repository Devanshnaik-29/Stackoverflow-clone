import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../../assets/icon.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../Auth/Auth.css'
import { login , signup} from '../../actions/auth'
import AboutAuth from './AboutAuth'

const Auth = () => {
  const [ isSignUp , setIsSignUp ] = useState(false) 
  const [name , setName ] = useState("")
  const [email , setEmail ] = useState("")
  const [password , setPassword ] = useState("")
  
  const handleSwitch = ()=>{
    setIsSignUp(!isSignUp)
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!email || !password){
      alert("Enter a email and a password")
    }
    if(isSignUp){
      if(!name){
        alert("Enter a name to continue")
      }
      dispatch(signup({name , email , password} , navigate))
    }else{
      dispatch(login({ email , password},navigate))
    }
  }


  return (
    <section className="auth-section">
      {isSignUp && <AboutAuth/>}
      <div className="auth-container">
          { !isSignUp && <img src={icon } alt='stack overflow' className='login-logo' />}
          <form onSubmit={handleSubmit}>
            {
              isSignUp && (
                <label htmlFor='name'>
                  <h4>Enter Name</h4>
                  <input type="text" name="name" id="name" onChange={(e) =>{setName(e.target.value)}}/>
                </label>
              )
            }
            <label htmlFor="email">
            <h4>Email</h4>
            <input type="text" name="email" id="email" onChange={(e) =>{setEmail(e.target.value)}}/>
            </label>
            <label htmlFor="password">
              <div className="pswd">
                <h4>Password</h4>
                { !isSignUp && <Link to='/' className='forget'><p style={{color:"#007ac6" , fontSize:"13px"}}>Forgot password ?</p></Link> }
              </div>
              <input type="password" name="password" id="password" onChange={(e) =>{setPassword(e.target.value)}}/>
              { isSignUp && <p style={{ color:"#666767" , fontSize:"13px"}}>Password must contain eight charecters <br />including atleast 1 number and 1 <br /> letter</p> }
            </label>
            { isSignUp && <label style={{fontSize: "13px"}}><input type="checkbox" name="" id="check" /> Opt-in to receive occational <br />product updates ,user research invitations , <br />company announcements, and digests.</label>}
            <br />
            {/* <button type="submit" className='auth-btn' style={{}}>{ isSignUp ? 'Sign Up' : 'Log In'}</button> */}
            {/* <label htmlFor="submit"></label> */}
            <input type="submit" className='auth-btn' value={ isSignUp ? 'Sign Up' : 'Log In'} />
          </form>
          { isSignUp && <p style={{ color:"#666767" , fontSize:"13px"}}>
             By clicking on "Sign Up" , you agree to our
              <span style={{color: "#007ac6"}}> terms of <br />service</span>,
              <span style={{color: "#007ac6"}}> privacy policy</span> and 
              <span style={{color: "#007ac6"}}> cookie policy </span></p> }
          <p style={{fontSize: "13px" , display:"flex" , justifyContent:'center'}}>{ isSignUp? "Already have an account ?" : "Don't have an account ?"} <button className='handle-switch-btn' onClick={handleSwitch}>{ isSignUp ? "Log In" : "Sign Up"}</button></p>
      </div>
    </section>
  )
}

export default Auth
