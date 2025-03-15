import React from 'react';
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import IC from "../components/IC"

const Projects = () => {
  return (
    <section className='max-container'>
      <h3 className='head-text text-lg'>
        <span className="font-semibold drop-shadow" style={{
          background: 'linear-gradient(to right, #5500ff, #9965fd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>My Projects</span>
      </h3>
      
      <div className='mt-5 flex flex-col gap-3 text-blue-500 text-lg'>
        <p>I have worked on a lot of projects and researches as a student. Here are some that I am really proud of, and if 
          you feel like I could improve, you can always contribute your ideas. Your ideas will be very useful for me.</p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='w-12 h-12' style={{
              position: 'relative',
              transition: '250ms',
              perspective: '500px'
            }}>
              <div className={`rounded-xl ${project.theme}`} style={{
                position: 'absolute',
                inset: 0,
                zIndex: -1,
                width: 'inherit',
                height: 'inherit',
                transition: '250ms',
                transformStyle: 'preserve-3d',
                transformOrigin: 'bottom right',
                transform: 'rotateZ(15deg)',
                willChange: 'transform',
                boxShadow: '16px 0 40px #e4e4e4'
              }} />
              <div className='rounded-xl flex justify-center items-center' style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                width: 'inherit',
                height: 'inherit',
                backgroundColor: '#ffffff33',
                WebkitBackdropFilter: 'blur(20px)',
                backdropFilter: 'blur(20px)',
                transition: '250ms',
                transformStyle: 'preserve-3d',
                transformOrigin: 'top left',
                overflow: 'hidden'
              }}>
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default/icon.png'; }} // Fallback to a default icon if the image fails to load
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div>
                <Link
                  to={project.link}
                  target='_blank'
                  rel="noopener noreferrer"
                  className='font-semibold text-pink-400'
                  style={{ textDecoration: 'underline'}}
                >
                  Link to GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200'/>

      <IC/>
    </section>
  );
}

export default Projects;