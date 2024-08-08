import React from 'react'
import Slider from './slider'


const work = () => {
    return (
        <div className='text-black bg-gradient-to-r from-cyan-500 to-blue-500 mt-56'>
            <div className='m-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <div className=' flex flex-col md:flex-row justify-center mx-auto w-[75%] md:space-x-5'>
                    <div className='w-full md:w-1/3 h-[200px] md:h-[580px] bg-white rounded-2xl flex flex-col justify-center'>
                        <div className='flex flex-col justify-center'>
                            <p className='w-1/4 mx-auto font-Poppins font-bold text-3xl border-b-4 border-cyan-500'>Work</p>
                            <p className='mt-3 w-3/4 mx-auto text-sm font-Poppins'>I specialize in creating visually compelling design elements that captivate and engage audiences. Each banner I design is tailored to make a bold statement and effectively communicate key messages, whether for promotional events or brand awareness. Menus are crafted with a keen eye for both aesthetics and functionality, ensuring they not only look appealing but also provide a seamless user experience. My approach to graphic design integrates creative flair with strategic thinking, resulting in cohesive and impactful visuals that resonate with viewers and elevate the overall brand experience.</p>
                            <p><a href="/work" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 mt-5">
                                Check Out More
                                <svg class="w-4 h-4 ms-2 rtl:rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a></p>


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