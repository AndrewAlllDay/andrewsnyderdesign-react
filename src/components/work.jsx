import React from 'react'
import Slider from './slider'


const work = () => {
  return (
    <div className='text-black bg-gradient-to-r from-cyan-500 to-blue-500 mt-56'>
    <div className='m-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className=' flex flex-col md:flex-row justify-center mx-auto w-[75%] md:space-x-5'>
                <div className='w-full md:w-1/3 h-[200px] md:h-[580px] bg-white rounded-2xl flex flex-col justify-center'>
                    <div className='flex flex-col justify-center'>
                        <p className='font-Poppins font-bold text-3xl'>Work</p>
                        <p>Work</p>
                    </div>
                </div>
                <div className=' md:w-2/3 w-full flex flex-col justify-center'>
                    <div>
                        <Slider />
                    </div>
                </div>
        </div>
   </div>
</div>
  )
}

export default work