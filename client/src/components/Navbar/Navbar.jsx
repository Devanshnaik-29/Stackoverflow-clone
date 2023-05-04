import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
// import Button from '../../components/Button/Button'
import '../Navbar/Navbar.css'


const Navbar = () => {
    let User = null
    return (
   <nav className='main-nav'>
    <div className="navbar">
        <Link to='/' className="nav-items nav-logo">
            <img src={ logo } alt="" />
        </Link>
        <Link to='/' className="nav-items nav-btn">About</Link>
        <Link to='/' className="nav-items nav-btn">Products</Link>
        <Link to='/' className="nav-items nav-btn">For Teams</Link>
        <form >        
        <img className='search-icon' src={ search } alt="search" width="18"/>
         <input type="text" placeholder='Search...'/>

        </form>
        { User === null ? 
                <Link to='/Auth' className="nav-items nav-links">Log In</Link> :
                <><Avatar backgroundColor="#009dff" py= "6px" px="12px" borderRadius="50%" color="white"><Link to='/' style={{color: "white" , textDecoration: "none" , marginLeft:"1px"}}>D</Link></Avatar>
                <button className='nav-items nav-links'>Log Out</button>
</>

        }
    </div>

   </nav>
  )
}

export default Navbar
