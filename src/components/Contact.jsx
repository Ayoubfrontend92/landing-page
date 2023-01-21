import React from 'react'
import {BiSupport} from 'react-icons/bi'
import {TbCurrencyDollar} from 'react-icons/tb'
import {BsNewspaper,BsBug} from 'react-icons/bs'

const Contact = () => {
  return (
    <div>
<div className="container my-24 px-6 mx-auto">

  <section className="mb-32 text-gray-800">
    <div className="block rounded-lg shadow-lg  bg-gradient-to-tl from-red-200 via-white to-white">
    <h1 className='md:my-[100px]  my-[50px] text-[30px] md:text-[50px] font-bold text-[#2f2e41] text-center'>Contact Us </h1>

      <div className="flex md:ml-[80px] flex-wrap items-center">
        <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
          <div className=" w-full">
            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" className="left-0 top-0 h-[150px] w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="flex flex-wrap pt-12 lg:pt-0">
            <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="p-4 bg-red-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                   <BiSupport className='text-white' size={90}/>
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1">Technical support</p>
                  <p className="text-gray-500">support@example.com</p>
                  <p className="text-gray-500">+1 234-567-89</p>
                </div>
              </div>
            </div>
            <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="p-4 bg-red-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <TbCurrencyDollar className='text-white' size={90} />

                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1">Sales questions</p>
                  <p className="text-gray-500">sales@example.com</p>
                  <p className="text-gray-500">+1 234-567-89</p>
                </div>
              </div>
            </div>
            <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
              <div className="flex align-start">
                <div className="shrink-0">
                  <div className="p-4 bg-red-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <BsNewspaper className='text-white' size={90} />

                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1">Press</p>
                  <p className="text-gray-500">press@example.com</p>
                  <p className="text-gray-500">+1 234-567-89</p>
                </div>
              </div>
            </div>
            <div className="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
              <div className="flex align-start">
                <div className="shrink-0">
                  <div className="p-4 bg-red-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <BsBug  className='text-white' size={90}/>

                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1">Bug report</p>
                  <p className="text-gray-500">bugs@example.com</p>
                  <p className="text-gray-500">+1 234-567-89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>
    </div>
  )
}

export default Contact