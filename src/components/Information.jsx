import React from 'react'
import { Link } from 'react-router-dom';
import {arrow } from '../assets/icons'

const InformationBox =({text, link, button}) =>(
    <div classname = "info-box">
        <p className="font-medium sm: text-xl text-center"></p>
        <Link to={link} >
            {button}
        </Link>
    </div>
)
const renderContent ={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center to-blue-900 py-4 px-8 text-black mx-5'>
            skibidi
        </h1>
    ),
    2:(
        <InformationBox
        text="wi wi wi"
        link = "/about"
        button="Click here to know more." />
    ),
    3:(
        <h1>ohio</h1>
    ),
    4:(
        <h1>brainrot</h1>
    )
}


const Information = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Information
