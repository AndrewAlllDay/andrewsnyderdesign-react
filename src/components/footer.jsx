import React from 'react'

const footer = () => {
  return (
    <div className='w-full h-[225px] md:h-[100px]'>
      <div className='text-black flex flex-col pt-5 md:pt-2 md:flex-row justify-start md:justify-between md:items-center h-24 max-w-[1240px] mx-auto px-4 font-Poppins'>
        <h1 className='w-full text-3xl font-bold'>.andrew</h1>
        <ul className=' md:flex text-black md:space-x-12 pt-5 font-Poppins'>
          <li className='pt-2 md:p-4 hover:text-cyan-500'><a href='src/About.js'>About</a></li>
          <li className='pt-2 md:p-4 hover:text-cyan-500'><a href='/work.js'>Work</a></li>
          <li className='pt-2 md:p-4 hover:text-cyan-500'><a href='/'>Contact</a></li>
        </ul>
      </div>

    </div>
  )
}

export default footer