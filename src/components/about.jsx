import React from 'react'

const about = () => {
    return (
        <div name='about' className='w-full h-screen bg-black text-white'>
            <div className='flex flex-col justify-center items-center w-full h-screen pt-60 md:pt-0'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='sm:text-right pl-4'>
                        <p>Quis ultricies a rutrum natoque ullamcorper ac condimentum porta vestibulum gravida varius a a facilisis adipiscing scelerisque accumsan lacus libero a cursus ad rutrum porta. Suspendisse ullamcorper a molestie odio semper nisi natoque tempus habitasse id ipsum ac a a.</p>
                    </div>
                    <div className='font-bold text-xl md:text-xl pl-4'>Et a luctus condimentum id ullamcorper rhoncus aenean vestibulum nam luctus rutrum fames suspendisse mus cubilia suspendisse nisi parturient a id nec consectetur cras fames. Parturient varius a at nisl arcu eros per a quisque velit magnis vestibulum per sem volutpat inceptos pharetra mus lacus facilisis quis vulputate vitae ullamcorper. Adipiscing morbi purus ut sociosqu pulvinar vivamus eros porttitor cum interdum quam vestibulum dapibus et at euismod vestibulum curae consectetur suspendisse massa mus consectetur.</div>
                </div>
            </div>

        </div>

    )
}

export default about
