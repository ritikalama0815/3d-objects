import React from 'react'
import {Link} from 'react-router-dom'
import {socialLinks} from '../constants'

const Footer = () => {
  return (
    <footer className='w-full bg-slate-200 text-white py-4'>
        <hr className='border-slate-200'/>
        <div className='flex gap-3 justify-center items-center'>
            {socialLinks.map((link)=>(
                <Link key = {link.name} to={link.link} target='_blank'>
                    <img 
                        src={link.iconUrl}
                        alt={link.name}
                        className='w-6 h-6 object-contain'/>
                </Link>
            ))}

        </div>
    </footer>
  )
}

export default Footer
