import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <h1 >Manjeet<span>Sharma</span></h1>
        </div>
        <div className='menu'>
         <NavLink to="/">Home</NavLink>
        <NavLink to="/Eduction">Eduction</NavLink>
        <NavLink to="/Skills">Skills</NavLink>
        <NavLink to="/Project">Project</NavLink>
        <NavLink to="/Social">Social Media</NavLink>
        </div>
    </nav>
  )
}

export default Navbar