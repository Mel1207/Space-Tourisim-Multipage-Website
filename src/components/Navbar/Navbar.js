import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="nav-logo">
                    <h1>LOGO</h1>
                </div>
                <ul className="nav-links">
                    <li><span>00</span>HOME</li>
                    <li><span>01</span>DESTINATION</li>
                    <li><span>02</span>CREW</li>
                    <li><span>03</span>TECHNOLOGY</li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar
