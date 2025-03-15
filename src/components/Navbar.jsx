import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className = "header">
        <NavLink to ="/" className = "w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md"
        style={{color: 'white', 
             background: 'linear-gradient(to right, #5500ff, #9965fd)', 
             focusRing: '4px', 
             outline: 'none', 
             focusRingColor: 'blue-300', 
             fontWeight: 'medium', 
             borderRadius: '0.5rem', 
             fontSize: '0.875rem',
             width: '50px',
             maxWidth: 'auto', 
             padding: '0.625rem 1.25rem', 
             textAlign: 'center'}}>
            <p className = "to-blue-300"> Home</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to = "/about" className = {({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            About Me
            </NavLink>
            <NavLink to = "/projects" className = {({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            My projects and Research
            </NavLink>
            <NavLink to = "/contact" className = {({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            Contact Me
            </NavLink>
            
        </nav>

    </header>
  )
}

export default Navbar
