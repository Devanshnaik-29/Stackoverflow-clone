import React from 'react'
import './LeftSideBar.css'
import Globe from '../../assets/Globe.svg'
import { NavLink } from 'react-router-dom'

const LeftSideBar = () => {
  return (
    <div className='left-sidebar'>
        <nav className="side-nav">
            <div className="side-nav-div">
            <NavLink to='/' activeClassName='active' className='side-nav-links'>
                <p>Home</p>
            </NavLink>
                <div>
                    <p>PUBLIC</p>
                </div>
                <NavLink to='/Questions' className="side-nav-links" activeClassName='active'>
                    <img src={Globe} alt="Globe" className='globe'/>
                    <p>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className="side-nav-links" activeClassName='active'>
                    <p>Tags</p>
                </NavLink>
                <NavLink to='/Users'  className="side-nav-links" activeClassName='active'>
                    <p>Users</p>
                </NavLink>
            </div>
        </nav>
      
    </div>
  )
}

export default LeftSideBar
