import React from 'react'
import navLogo from '../../images/home/logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="nav-logo">
                    <img src={navLogo} alt="navlogo" />
                </div>
                <ul className="nav-links">
                    <li><span>00</span><NavLink to="/">HOME</NavLink></li>
                    <li><span>01</span><NavLink to="/destination">DESTINATION</NavLink></li>
                    <li><span>02</span><NavLink to="/crew">CREW</NavLink></li>
                    <li><span>03</span><NavLink to="/technology">TECHNOLOGY</NavLink></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar
