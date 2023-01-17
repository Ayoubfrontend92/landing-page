import React from 'react'

const Hero = () => {
  return (
    <div className= 'relitive sm:h-[480px] h-[550px]  w-full rounded-bl-[120px]  bg-red-500'>
      
        <div className='  w-full h-full  flex flex-col justify-center items-center text-white'>
            <div className='flex flex-col mt-[50px] md:mt-[180px] md:left-[10%] text-center justify-center items-center max-w-[1100px] m-auto  p-4'>
                <h1 className='flex mt-[110px] sm:mt-0 text-3xl md:text-[45px] font-semibold md:2xl drop-shadow-2xl'>A modern <br className='sm:hidden'/> publishing platform</h1>
                <p className='flex max-w-[600px] mt-8 sm:mt-0 drop-shadow-2xl text-sm sm:py-6'>Grow your audience and build your <br className='sm:hidden'/> online brand</p>
                    <div className='flex flex-row my-3'>
                    <button className='bg-white sm:p-2 mt-8 text-[14px] sm:mt-0 mr-3 hover:bg-red-100/40 hover:text-white sm:text-[12px] font-bold font-sans text-red-400 rounded-full sm:h-[35px] sm:w-[95px]  h-[50px] w-[130px]'>Start For Free</button>
                    <button className='bg-none mt-8 sm:mt-0 text-[14px] border-2 hover:bg-white hover:text-red-400 border-white sm:text-[12px] font-bold font-sans rounded-full sm:h-[35px] sm:w-[95px]  h-[50px] w-[130px]'>Learn More</button>
                    </div>
                
           
            </div>
        </div>
       

    </div>
  )
}

export default Hero