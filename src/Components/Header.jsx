import React from 'react'
import logo from "../assets/logo.png"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt="Logo" className='logo'/>

        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Contact</li>
        </ul>
    </div> 
)
}

export default Header