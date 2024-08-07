import React from 'react';
import { ReactTyped } from "react-typed";

const abouthero = () => {
    return (
      <div className='text-black bg-gradient-to-l from-cyan-500 to-blue-500'>
        <div className='m-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-white font-Poppins pb-2'>Who am i?</p>
            <div className='flex justify-center'>
              <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold md'>i am a</h1>
              <ReactTyped className='md:text-7xl sm:text-3xl text-3xl font-bold pl-2 md:pl-4' strings={['designer.', 'developer.', 'drone pilot.']} typeSpeed={70} backSpeed={40} loop />
            </div>
       </div>
   </div>
    );
  }
  
  export default abouthero;