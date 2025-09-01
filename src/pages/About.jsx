import React from 'react';
import {skills, experiences} from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import IC from '../components/IC'

const About = () => {
  return (
    <section className='max-container'>
     
      <h3 className='text-lg head-text'>
        Hello, I am <span  className="font-semibold drop-shadow"style={{
          background: 'linear-gradient(to right, #5500ff, #9965fd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>Ritika Lama.</span>
      </h3> My name in my language is close to "Ritu" which means Spring!
      
      <div className='flex flex-col gap-3 mt-5 text-lg text-blue-500'>
        <p>Student at Truman State University</p>
      </div>
      
      <div className='flex flex-col py-10'>
        
        <h3 className='subhead-text'>
          Skills
        </h3>
       
        <div className='flex flex-wrap gap-12 mt-16'>
          {skills.map((skill) => (
            <div className='w-20 h-20 block-container'>
              <div
                className='btn-back rounded-xl'/>
              <div className='flex items-center justify-center btn-front rounded-xl'>
                <img src ={skill.imageUrl}
                alt={skill.name}
                className='object-contain w-1/2 h-1/2'/>
              </div>
            </div>
          ))}  
        </div> 

       
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='flex flex-col gap-3 mt-5 text-lg text-blue-500'>
          <p>I have worked as Researcher, TA, and some other jobs that have helped me to 
            improve my soft skills. Here are the details:
          </p>
        </div>
        <div className='flex mt-12'>
          <VerticalTimeline>
            {experiences.map((experience) =>(
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex items-center justify-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{
                  background:experience.iconBg
                }}
                contentStyle={{
                  borderBottom:"8px",
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-lg font-semibold text-black font-poppins'>
                    {experience.title}
                  </h3>
                  <p className='font-medium text-blue-800 font-base' style={{ margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 ml-5 space-y-2 list-disc'>
                  {experience.points.map((point,index)=> (
                    <li key ={`experience-point-${index}`} className='pl-1 text-sm font-normal text-black-400'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-x-slate-200'/>
      <IC/>
    </section>
  );
}

export default About;