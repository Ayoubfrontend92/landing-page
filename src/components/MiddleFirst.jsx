import React from 'react'
import phone from '../images/illustration-phones.svg'

const MiddleFirst = () => {
  return (
    <div className='bg-[#2f2e41] text-center md:text-start items-center flex-col justify-around flex md:flex-row mt-[100px]  md:mt-[250px] rounded-bl-[120px] rounded-tr-[120px] w-full h-[650px] md:h-[300px]'>
    
    <div className='mt-[-130px] md:mt-0'>
        <img src={phone} alt="phone" />
      </div>

      <div className='flex flex-col md:p-10'>
        <h1 className='text-4xl mt-[-150px] md:mt-0  text-white font-normal'>State of the Art Infrastructure</h1>
        <p className='text-white/80 mt-5 md:mt-5'>With reliability and speed in mind, worldwide data centers provide the <br className='hidden md:block'  /> backbone for ultra-fast connectivity. This ensures your site will load <br className='hidden md:block'  /> instantly, no matter where your readers are, keeping your site <br className='hidden md:block'  /> competitive.</p>
      </div>

    </div>
  )
}

export default MiddleFirst

