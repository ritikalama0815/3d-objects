import React, { useState, useRef, Suspense } from 'react'
import { Canvas }from '@react-three/fiber'
import emailjs from '@emailjs/browser'

import Loader from '../components/Loader'
import Alert from '../components/Alert'
import Fox from '../models/Fox'
import useAlert from '../hooks/useAlert'


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:'', email:'', message:''});
  const[isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert();
  
  //takes events and calls setForm function
  const changes = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  };
  const focus = () => {
    setCurrentAnimation('Take 001');
  };
  const blur = () => {
    setCurrentAnimation('Static Pose');
  };

  //final event
  const submit = (e) => {
    e.preventDefault(); //to prevent reload the page after submitting the form
    setIsLoading(true);

    //send the information to emailjs
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Ritika",
        from_email: form.email,
        to_email: "ritikatheeng2002@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => { //what happens after sending message
      setIsLoading(false);
      //success message and hide alerts
      showAlert({show:true, 
                text:'Your message was sent successfully.',
                type: 'success'})
      setTimeout(() =>{
        hideAlert();
        setCurrentAnimation('idle');
        setForm({ name: '', email: '', message:''});
      }, [3000]);
      
    }).catch((error) =>{ //catches the error incase the message isnt send
      setIsLoading(false);
      setCurrentAnimation('Static Pose');
      console.log(error);
      //show error message
      showAlert({show:true, 
        text:'Sorry, your message was not sent. Please try again.',
        type: 'danger'})
    })
  };
  return (
    <section className='relative flex lg:flex-row flex-col max-container'
        style={{
          background: 'linear-gradient(to right, #2e8b57, #3cb371, #66cdaa, #7fffd4)',
          padding: '10px',
          minWidth:'100%',
          minHeight: '100vh'
        }}
        >
          {alert.show && <Alert {...alert}/>}
      <div className = "flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">
          Contact Me
        </h1>

        <form
            className="w-full flex flex-col gap-7 mt-14"
            onSubmit={submit}
        >
          <label className='text-black-500 text-2xl font-semibold'>
            Your Name
            <input 
              type="text" name = "name" className="input" placeholder='Your Name'
              value={form.name}
              onChange={changes}
              onFocus={focus}
              onBlur={blur}
            />
          </label>
          <label className='text-black-500 text-2xl font-semibold'>
            Your Email
            <input 
              type="email" name = "email" className="input" placeholder='Your Email'
              value={form.email}
              required
              onChange={changes}
              onFocus={focus}
              onBlur={blur}
            />
          </label>
          <label className='text-black-500 text-2xl font-semibold'>
            Write a Message📝
            <textarea
              type="text" name = "message" className="textarea" placeholder='Message..'
              value={form.message}
              rows={8}
              required
              onChange={changes}
              onFocus={focus}
              onBlur={blur}
            />
          </label>
          <button
             type='submit'
             className='btn'
             disabled={isLoading}
             onFocus={focus}
             onBlur={blur}
          >
            {isLoading ? 'Sending your Message...📩' : 'Send Message 📨'}

          </button>

        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[550px]'>
        <Canvas
          camera ={{
              position: [0,0,5],
              fov:75,
              near:.1,
              far:1000
          }}
        >
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={.5}/>
          <Suspense fallback={<Loader/>}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0, -1, 0]} 
                rotation={[0.35, -.03, 0]} 
                scale={[8,8,8]}/>
          </Suspense>
        </Canvas>

      </div>
    </section>
  )
}

export default Contact
