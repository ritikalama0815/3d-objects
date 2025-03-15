import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InformationBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} style={{
        background: '#ccf4fb',
        border: '#00aacc',
        boxShadow: '0.6vmin 0.6vmin #fff, 1vmin 1vmin #d2e4ff, 1vmin 1vmin #d2e4ff 0.65vmin 1vmin #d2e4ff, 1vmin 0.65vmin #d2e4ff',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        color: '#3b82f6',
        textAlign: 'center',
        fontWeight: '600',
        width: '90%',
        position: 'absolute',
        bottom: '-1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-black mx-5"
      style={{
        background: '#e6e6fa',
        position: 'relative',
        borderRadius: '10px',
        border: '#2b77e7',
        boxShadow: '0.6vmin 0.6vmin #336cc1, 1vmin 1vmin #0092db, 1vmin 1vmin #0092db, 0.65vmin 1vmin #0092db, 1vmin 0.65vmin #0092db'
      }}
    >
      I am <span className='font-semibold'> Ritika Lama</span>
      <br/> from Nepal.
    </h1>
  ),
  2: (
    <InformationBox
      text="itamiyo kanjiro, itami o kangayerao the world shall know pain" //text for stage 2
      link="/about"
      btnText="Click here to learn more. "
    />
  ),
  3: (
    <InformationBox
      text="orewa kaijoku o ni naru otoko da" //text for stage 2
      link="/projects"
      btnText="More for research and projects. "
    />
  ),
  4: (
     <InformationBox
        text="hokage dattebayo" //text for stage 2
        link="/contact"
        btnText="Leave a message to me here! "
    />
  )
};

const Information = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Information;