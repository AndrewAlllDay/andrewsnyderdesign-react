import React from 'react'

const footer = () => {
  return (
    <div className='w-full h-[150px] border-t-2 mt-64 md:mt-4 border-gray-200'>
      <div className='text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 font-Poppins'>
        <h1 className='w-full text-3xl font-bold'>.andrew</h1>
        <ul className='hidden md:flex text-black space-x-12 font-Poppins'>
          <li className='p-4'><a href='src/About.js'>About</a></li>
          <li className='p-4'><a href='/work.js'>Work</a></li>
          <li className='p-4'><a>Contact</a></li>
        </ul>
      </div>

    </div>
  )
}

export default footer