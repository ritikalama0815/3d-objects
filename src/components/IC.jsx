import React from 'react'
import {Link} from 'react-router-dom'

const IC = () => {
  return (
    <section style={{
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'column', 
        marginTop: '8px', 
        gap: '7px'
    }}>
        <p style={{
            color: 'black', 
            fontWeight: 'extrabold', 
            flex: 1, 
            fontSize: '5xl', 
            textAlign: 'center'
        }}>
            Let's skibidi together. 
        </p>
        <Link to="/contact" style={{
             color: 'white', 
             background: 'linear-gradient(to right, #5500ff, #9965fd)', 
             focusRing: '4px', 
             outline: 'none', 
             focusRingColor: 'blue-300', 
             fontWeight: 'medium', 
             borderRadius: '0.5rem', 
             fontSize: '0.875rem', 
             width: '100%', 
             maxWidth: 'auto', 
             padding: '0.625rem 1.25rem', 
             textAlign: 'center'
        }}>
            Contact
        </Link>
    </section>
  )
}

export default IC
