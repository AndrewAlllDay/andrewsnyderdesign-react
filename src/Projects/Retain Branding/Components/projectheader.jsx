import React from 'react'
import { ReactTyped } from 'react-typed';

const projectheader = () => {
  return (
  
    <div className='text-black bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className=' w-full h-[200px] mx-auto text-center flex flex-col justify-center'>
        <div className=' flex flex-col md:flex-row justify-center mx-auto w-[75%] md:space-x-5'>
            <div className='w-full md:w-1/2 h-[200px] md:h-[200px] text-right flex flex-col justify-center'>
                <h1 className='border-r-4 border-white text-4xl font-Poppins font-bold pr-5'>Project </h1>
            </div>
            <div className='md:w-1/2 w-full flex flex-col justify-center text-left text-2xl font-bold'>
            <ReactTyped className='text-left text-2xl font-bold' strings={['Carlo\'s Tratteria Menu']} typeSpeed={20} />
            </div>
        </div>
    </div>
</div>
  );
}

export default projectheader