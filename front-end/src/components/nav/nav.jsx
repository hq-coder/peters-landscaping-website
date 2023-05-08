import React from 'react';
import './nav.css';
import logo from '../../assets/logo.png';





function Navbar () {


    return (
      
        <div className='navbar'>
           <img  src={logo} alt="Logo" className="logo"/>

      <h3><a href='/' >Home</a></h3>
      <h3><a href='./services'>Services</a></h3>
      <h3><a href='./contact'>Contact</a></h3>
      <h3><a href='./about'>About</a></h3>

        </div>
    )
}

export default Navbar;
