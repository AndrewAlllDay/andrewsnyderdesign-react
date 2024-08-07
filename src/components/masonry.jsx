import React from 'react'

const masonry = () => {
    return (
        <div className='p-5 md:p-10'>
            <div className='columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-4 md:[&>img:not(:first-child)]:mt-4'>
                
                <div className='relative group'>
                    <div className='absolute invisible group-hover:visible top-10 left-10 font-Poppins font-bold z-40'>Carlo's Trattoria</div>
                    <a href='/projects/menu'><img className='hover:opacity-50 cursor-pointer' src="https://images.unsplash.com/photo-1722082839802-18b18cb23a62?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>  
                </div>

                <img className='hover:opacity-50 cursor-pointer' src="https://images.unsplash.com/photo-1722031489919-100378463cfc?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='hover:opacity-50 cursor-pointer' src="https://images.unsplash.com/photo-1722218530661-19e1c5b37dcc?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='hover:opacity-50 cursor-pointer' src="https://images.unsplash.com/photo-1722082839802-18b18cb23a62?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='hover:opacity-50 cursor-pointer' src="https://images.unsplash.com/photo-1722082839802-18b18cb23a62?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='hover:opacity-50 cursor-pointer' src="https://images.unsplash.com/photo-1722218530661-19e1c5b37dcc?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='hover:opacity-50 cursor-pointer' src="https://images.unsplash.com/photo-1722031489919-100378463cfc?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='hover:opacity-50 cursor-pointer' src="https://images.unsplash.com/photo-1722218530661-19e1c5b37dcc?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                
            </div>
        </div>
    )
}

export default masonry;
