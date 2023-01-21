import React from 'react'
import img from '../images/undraw_font_re_efri.svg'

const Container = () => {
  return (
    <div>

        <h1 className='text-center font-bold text-[#2f2e41] text-2xl md:text-4xl mt-8 md:mt-[80px]'>Designed for the future </h1>
        
     
      <div className='flex md:flex-row-reverse md:justify-around justify-center text-center md:text-start  items-center md:mt-[80px]  flex-col'>



      <div className='mt-10 md:w-full'>
            <img src={img} alt="img" className='md:max-w-[500px]  max-w-[230px] md:ml-[80px]' />
        </div>




        <div className='flex-col w-full  text-sm md:pr-5 p-5 md:mx-[80px] '>

           <div className='justify-start my-10 md:my-[50px] flex-col'>
               <h2 className='text-lg font-bold  text-[#2f2e41]/80'>  Introducing an extensible editor </h2>
               <p className='mt-5'>Blogr features an exceedingly intuitive interface which lets you focus <br className='hidden md:block'  /> on one thing: creating content. The editor supports management of <br className='hidden md:block' />  multiple blogs and allows easy manipulation of embeds such as images, <br className='hidden md:block' /> videos, and Markdown. Extensibility with plugins and themes provide <br className='hidden md:block' /> easy ways to add functionality or change the looks of a blog.</p>
           </div>

            <div className='justify-start flex-col '>
               <h2  className='text-lg font-bold  text-[#2f2e41]/80'>Robust content management</h2>
               <p className='mt-5'>Flexible content management enables users to easily move through <br className='hidden md:block'  /> posts. Increase the usability of your blog by adding customized <br className='hidden md:block' /> categories, sections, format, or flow. With this functionality, you’re in <br className='hidden md:block' /> full control.</p>
            </div>
        </div>
       


       



      </div>
    </div>
  )
}

export default Container
