import React from 'react'
import img1 from '../images/profile- (1).jpg'
import img2 from '../images/profile- (2).jpg'
import img3 from '../images/profile- (3).jpg'

import {BsGithub , BsTwitter , BsLinkedin} from 'react-icons/bs'


const MiddleSecond = () => {
  return (
    <div className="container mt-24 md:mt-[250px] px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-32">Meet the <u className="text-red-400">team</u></h2>
    
        <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">

          <div className="mb-24 md:mb-0">
            <div className="rounded-tl-[100px] shadow-lg h-full block bg-gradient-to-tl from-red-300 via-red-200 to-red-100">
              <div className="flex justify-center">
                <div className="flex justify-center mt-[-75px]">
                  <img src={img1} className="w-[150px] h-[250px] object-cover rounded-full mx-auto shadow-lg" alt=""
                     />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Marta Smith</h5>
                <p className="mb-6">Frontend Developer</p>
                <ul className="list-inside flex mx-auto justify-center">
                  <a href="#!" className="px-2">
                   <BsGithub/>
                  </a>
                  <a href="#!" className="px-2">
                  <BsLinkedin/>

                  </a>
                  <a href="#!" className="px-2">
                  <BsTwitter/>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-24 md:mb-0">
            <div className=" shadow-lg h-full block bg-gradient-to-tl from-red-400 via-red-300 to-red-200">
              <div className="flex justify-center">
                <div className="flex justify-center mt-[-75px]">
                  <img src={img2} className="w-[150px] h-[250px] object-cover rounded-full mx-auto shadow-lg" alt=""
                     />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Marta Smith</h5>
                <p className="mb-6">Frontend Developer</p>
                <ul className="list-inside flex mx-auto justify-center">
                  <a href="#!" className="px-2">
                   <BsGithub/>
                  </a>
                  <a href="#!" className="px-2">
                  <BsLinkedin/>

                  </a>
                  <a href="#!" className="px-2">
                  <BsTwitter/>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-24 md:mb-0">
            <div className="rounded-br-[100px] shadow-lg h-full block bg-gradient-to-tl from-red-500 via-red-400 to-red-300">
              <div className="flex justify-center">
                <div className="flex justify-center mt-[-75px]">
                  <img src={img3} className="w-[150px] h-[250px] object-cover rounded-full mx-auto shadow-lg" alt=""
                     />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Marta Smith</h5>
                <p className="mb-6">Frontend Developer</p>
                <ul className="list-inside flex mx-auto justify-center">
                  <a href="#!" className="px-2">
                   <BsGithub/>
                  </a>
                  <a href="#!" className="px-2">
                  <BsLinkedin/>

                  </a>
                  <a href="#!" className="px-2">
                  <BsTwitter/>
                  </a>
                </ul>
              </div>
            </div>
          </div>
       
        </div>
      </section>
    
    </div>
  )
}

export default MiddleSecond
