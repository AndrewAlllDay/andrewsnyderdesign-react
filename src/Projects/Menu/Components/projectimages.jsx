import React from 'react'



const projectimages = () => {
  return (
    <div className=' w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <div className='w-2/3 grid lg:grid-cols-3 md:flex-row justify-center mx-auto '>
           {/*Card 1*/}
                  <div class="max-w-sm bg-white border border-gray-200 ">
                          <img class="" src="https://images.unsplash.com/photo-1722942432683-701fee734be2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
           {/*Card 2*/}
                  <div class="max-w-sm bg-white border border-gray-200 ">
                          <img class="" src="https://images.unsplash.com/photo-1722942432683-701fee734be2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
           {/*Card 3*/}
                  <div class="max-w-sm bg-white border border-gray-200 ">
                          <img class="" src="https://images.unsplash.com/photo-1722942432683-701fee734be2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
                  </div>
                  
          </div>
          <div className='text-black '>
    <div className=' w-full h-[300px] mx-auto text-center flex flex-col justify-center'>
        <div className=' flex flex-col md:flex-row justify-center mx-auto w-[75%] md:space-x-5'>
            <div className='w-full md:w-1/2 h-[100px] md:h-[100px] text-right flex flex-col'>
                <h1 className=' border-white text-2xl font-Poppins font-semibold pr-5'>Project:</h1>
            </div>
            <div className='md:w-1/2 w-full flex flex-col text-left'>
                <h1 className=' border-white text-xl font-Poppins mt-[4px]'>Carlo's Trattoria</h1>
                <h1 className=' border-white text-md font-Poppins mt-[2px]'><i>Hartville, OH</i></h1>
            </div>
        </div>
        <div className=' flex flex-col md:flex-row justify-center mx-auto w-[75%] md:space-x-5'>
            <div className='w-full md:w-1/2 h-[100px] md:h-[100px] text-right flex flex-col'>
                <h1 className=' border-white text-2xl font-Poppins font-semibold pr-5'>Description:</h1>
            </div>
            <div className='md:w-1/2 w-full flex flex-col text-left'>
                <h1 className=' border-white text-md font-Poppins mt-[8px] w-3/4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam fugit ad. Ullam, minima ex! Adipisci dolor, eligendi accusamus facilis perspiciatis sequi vel quaerat? Aperiam.</h1>
                
            </div>
        </div>
    </div>
</div>
      </div>
  );
}

export default projectimages;