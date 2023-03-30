import React from 'react'
import'./Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">navbooking.com</span>
            <div className="navitems">
            <button className="navbutton"> Register</button>
            <button className="navbutton">login</button>


            </div>
            
        
        </div>
    </div>
  )
}

export default Navbar