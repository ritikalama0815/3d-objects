import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className = "header">
        <NavLink to ="/" className = "flex items-center justify-center w-10 h-10 font-bold rounded-lg shadow-md"
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
        <nav className="flex text-lg font-medium gap-7">
            <NavLink to = "/about" className = {({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            About Me
            </NavLink>
            <NavLink to = "/projects" className = {({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            My projects and Research
            </NavLink>
            <NavLink to = "/fun" className = {({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            Arts
            </NavLink>
            <NavLink to = "/contact" className = {({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            Contact Me
            </NavLink>
            
            
        </nav>

    </header>
  )
}

export default Navbar
