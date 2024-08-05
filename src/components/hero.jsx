import React from 'react'
import { ReactTyped } from "react-typed";


const hero = () => {
  return (
    <div className='text-black'>
      <div className='m-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-green-600 font-bold p-2'>This is some test text</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>i am andrew</h1>
          <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>I enjoy </p>

        <ReactTyped
        className='md:text-5xl sm:text-4xl text-xl font-bold text-green-600 pl-2 text-center'
          strings={[
            "Graphic Design",
            "Web Developement",
            "Technology",
          ]}
          typeSpeed={40}
          backSpeed={20}
          attr="placeholder"
          loop
        >
          <input type="text" class />
        </ReactTyped>
          </div>
          </div>
    </div>
  )
}

export default hero