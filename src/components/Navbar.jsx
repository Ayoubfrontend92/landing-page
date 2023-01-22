import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const navHandler = (prev) => {
    setNav(prev => !prev)
  }

  return (
    <div className='absolute mt-8 md:mt-0  w-full flex justify-between items-center  p-4 md:p-10'>
      <Link to='/' className='text-white lg:ml-[20px] text-3xl hover:text-red-400 cursor-pointer font-bold md:text-5xl ml-2 font-sans md:ml-[20px]  z-20 '>Blogr</Link>
      <div className=' justify-center absolute 2xl:ml-[350px]  md:ml-[200px] mt-3 hidden md:block w-[250px]'>
        <ul className='flex  justify-between w-[250px]'>
          <li className=''>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md   bg-none px-4 py-2 text-sm font-medium text-white ">
                  Products
                  <BiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 p-2 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link 
                          to='/contact'
                          className={classNames(
                            active ? 'bg-white text-black' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Contact
                        </Link >
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                        to='/products'
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Products
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Likedin
                        </a>
                      )}
                    </Menu.Item>

                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

          </li>
          <li className=''>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md   bg-none px-4 py-2 text-sm font-medium text-white ">
                  Product
                  <BiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 p-2 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to='/contact'
                          className={classNames(
                            active ? 'bg-white text-black' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Contact
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to='/products'
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Products
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Likedin
                        </a>
                      )}
                    </Menu.Item>

                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

          </li>
          <li className=''>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md   bg-none px-4 py-2 text-sm font-medium text-white ">
                  Product
                  <BiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 p-2 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-white text-black' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Contact
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Newsleter
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Likedin
                        </a>
                      )}
                    </Menu.Item>

                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

          </li>
        </ul>
      </div>

      <div className='flex'>
        <button className='bg-none text-white mx-2 font-sans md:mt-2 mt-8 sm:block hidden sm:mt-0  hover:bg-white/30 text-[12px] font-bold rounded-full sm:h-[35px] sm:w-[95px]  h-[50px] w-[130px]'>SignUp</button>
        <button className='bg-white font-sans sm:block hidden md:mt-2 mt-8 sm:mt-0 mr-3 hover:bg-red-100/40 hover:text-white text-[12px] font-bold  text-red-400 rounded-full sm:h-[35px] sm:w-[95px]  h-[50px] w-[130px]'>Login</button>
      </div>

      {nav ? <MdOutlineClose className='z-20 text-red-400  cursor-pointer mr-4 ' size={35} onClick={navHandler} /> : <HiOutlineMenuAlt3 onClick={navHandler} className='z-20 text-white mr-4 sm:hidden cursor-pointer' size={35} />}
      <div className={nav ?
        'ease-in duration-300 fixed text-gray-400 bg-white justify-center	 z-10 top-0 left-0 w-full flex-col h-screen':
        'absolute top-0 h-screen left-[-100%] ease-in duration-200 z-10'}>

        <div className='list-none flex flex-col fixed h-screen w-full  items-center'>

          <ul className='list-none flex flex-col  h-screen w-full mt-[150px]  items-center'>
            <li className='my-6'>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center  rounded-md   bg-none px-4 font-medium text-red-400">
                    <p className='text-gray-700  text-2xl'>Product</p>

                    <BiChevronDown className="-mr-1 ml-2 h-8 w-8" aria-hidden="true" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className=" right-0 p-2 z-10 mt-2 w-[250px] text-center origin-top-center rounded-md bg-gray-100">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-white text-black' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Contact
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Newsleter
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Likedin
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

            </li>
            <li className='my-6'>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center  rounded-md   bg-none px-4 font-medium text-red-400">
                    <p className='text-gray-700 text-2xl'>Product</p>

                    <BiChevronDown className="-mr-1 ml-2 h-8 w-8" aria-hidden="true" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className=" right-0 p-2 z-10 mt-2 w-[250px] text-center origin-top-center rounded-md bg-gray-100">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-white text-black' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Contact
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Newsleter
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Likedin
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

            </li>
            <li className='my-6'>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center  rounded-md   bg-none px-4 font-medium text-red-400">
                    <p className='text-gray-700 text-2xl'>Product</p>

                    <BiChevronDown className="-mr-1 ml-2 h-8 w-8" aria-hidden="true" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className=" right-0 p-2 z-10 mt-2 w-[250px] text-center origin-top-center rounded-md bg-gray-100">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-black' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Contact
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Newsleter
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Likedin
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

            </li>
          </ul>

          <div className='flex flex-col fixed mt-[530px] justify-center items-center '>
            <hr className='bg-gray-200  w-[300px]' />
            <button className='bg-none font-sans   mt-1  mr-3 hover:bg-red-100/40 hover:text-white text-[15px] font-bold  text-gray-700 rounded-full sm:hidden h-[49px] w-[130px]'>Login</button>
            <button className='bg-red-400 text-white font-sans mt-1   border-2 hover:bg-white hover:text-red-400 border-white text-[15px] font-bold rounded-full sm:hidden   h-[49px] w-[130px]'>SignUp</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar








