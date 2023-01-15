import React from 'react'
// import img from '../assets/bg-pattern-intro-desktop.svg'

const Hero = () => {
  return (
    <div className= 'relitive sm:h-[480px]  w-full rounded-bl-[120px]  bg-red-500'>
        
        
        <div className='  w-full h-full  flex flex-col justify-center items-center text-white'>
            <div className='flex flex-col mt-[180px] md:left-[10%] text-center justify-center items-center max-w-[1100px] m-auto  p-4'>
                <h1 className='flex  text-[45px] font-semibold md:2xl drop-shadow-2xl'>A modern publishing platform</h1>
                <p className='flex max-w-[600px] drop-shadow-2xl text-sm py-4'>Grow your audience and build your online brand</p>
                    <div className='flex flex-row my-3'>
                    <button className='bg-white mr-3 hover:bg-red-100/40 hover:text-white text-[10px] font-bold font-serif text-red-400 rounded-full h-[35px] w-[95px]'>Start For Free</button>
                    <button className='bg-none  border-2 hover:bg-white hover:text-red-400 border-white text-[10px] font-normal font-serif rounded-full h-[35px] w-[95px]'>Learn More</button>
                    </div>
                
               
           
            </div>
        </div>
    </div>
  )
}

export default Hero