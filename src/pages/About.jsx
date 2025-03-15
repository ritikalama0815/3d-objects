import React from 'react';
import {skills, experiences} from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import IC from '../components/IC'

const About = () => {
  return (
    <section className='max-container'>
     
      <h3 className='head-text text-lg'>
        skibidi, I am <span  className=" font-semibold drop-shadow"style={{
          background: 'linear-gradient(to right, #5500ff, #9965fd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>Ritika Lama</span>
      </h3>
      
      <div className='mt-5 flex flex-col gap-3 text-blue-500 text-lg'>
        <p>Student at Truman State University</p>
      </div>
      
      <div className='py-10 flex flex-col'>
        
        <h3 className='subhead-text'>
          Skills
        </h3>
       
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div
                className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src ={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
          ))}  
        </div> 

       
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-blue-500 text-lg'>
          <p>I have worked as Researcher, TA, and some other jobs that have helped me to 
            improve my soft skills. Here are the details:
          </p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) =>(
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
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
                  <h3 className='text-black text-lg font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-blue-800 font-medium font-base' style={{ margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point,index)=> (
                    <li key ={`experience-point-${index}`} className='text-black-400 font-normal pl-1 text-sm'>
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