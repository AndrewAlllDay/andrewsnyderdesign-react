import React from 'react'

const copywithmedia = () => {
    return (
        <div className='w-full h-screen bg-yellow-300'>
            <div className='m-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <div className=' flex flex-col md:flex-row justify-center mx-auto w-[75%] md:-space-x-5'>
                    <div className='w-full md:w-1/3 h-[200px] md:h-[580px] bg-white rounded-2xl flex flex-col justify-center z-40'>
                        <div className='flex flex-col justify-center'>
                            <p className='w-1/4 mx-auto font-Poppins font-bold text-3xl border-b-4 border-cyan-500'>Work</p>
                            <p className='mt-3 w-3/4 mx-auto text-sm font-Poppins'>I specialize in creating visually compelling design elements that captivate and engage audiences. Each banner I design is        tailored to make a bold statement and effectively communicate key messages, whether for promotional events or brand awareness. Menus are crafted with a keen eye for both aesthetics and functionality, ensuring they not only look appealing but also provide a seamless user experience. My approach to graphic design integrates creative flair with strategic thinking, resulting in cohesive and impactful visuals that resonate with viewers and elevate the overall brand experience.</p>
                        </div>
                    </div>
                    <div className=' md:w-2/3 w-full flex flex-col justify-center'>
                        <img className='bg-cover' src='https://images.unsplash.com/photo-1723001652492-b718bda91aaa?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default copywithmedia;
