import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='shadow w-full bg-white'>
      <div className='text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 font-Poppins'>
        <h1 className='w-full text-3xl font-bold'>.andrew</h1>
        <ul className='hidden md:flex text-black space-x-12 font-Poppins'>
          <li className='p-4'><a href='src/About.js'>About</a></li>
          <li className='p-4'><a href='/work.js'>Work</a></li>
          <li className='p-4'><a>Contact</a></li>
        </ul>

        {/*Mobile Menu Button*/}
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <RiMenu3Line size={20} /> : < RiCloseLargeLine size={20} />}
        </div>

        {/*Mobile Menu Items*/}
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-50 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold m-4 font-Poppins'>.andrew</h1>
          <ul className='uppercase p-4 font-Poppins'>
            <li className='p-4 border-b'><a href='/about.js'>About</a></li>
            <li className='p-4 border-b'><a href='/work.js'>Work</a></li>
            <li className='p-4'><a>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;