import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='shadow w-full bg-white'>
      <div className='text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 font-Poppins'>
        <h1 className='w-full text-3xl font-bold'><Link exact to="/">.andrew</Link></h1>
        <ul className='hidden md:flex text-black space-x-12 font-Poppins'>
            <li>
              <Link exact to="/about">About</Link>
            </li>
            <li>
              <Link exact to="/work">Work</Link>
            </li>
            <li>
              <Link exact to="/contact">Contact</Link>
            </li>
        </ul>

        {/*Mobile Menu Button*/}
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <RiMenu3Line size={20} /> : < RiCloseLargeLine size={20} />}
        </div>

        {/*Mobile Menu Items*/}
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-50 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold m-4 font-Poppins'><Link exact to="/">.andrew</Link></h1>
          <ul className='uppercase p-4 font-Poppins'>
          <li>
              <Link exact to="/about">About</Link>
            </li>
            <li>
              <Link exact to="/work">Work</Link>
            </li>
            <li>
              <Link exact to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;