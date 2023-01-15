import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import React,{useState} from 'react'
import { navLinks } from '../constants'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
    const [nav ,setNav]=useState(false)
    const navHandler = (prev)=>{
        setNav(prev=>!prev)
    }
    
  return (
    <div className='absolute  w-full flex justify-between items-center  p-4 md:p-10'>
      <h1 className='text-white font-bold text-5xl font-sans ml-[150px]  z-20 '>Blogr</h1>

      <div className= ' justify-center absolute ml-[340px] mt-3  w-[250px]'>
        <ul className='flex justify-between w-[250px]'>
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




      {nav ?<MdOutlineClose className='z-20 text-white  cursor-pointer ' size={25}  onClick={navHandler}/> :<HiOutlineMenuAlt3 onClick={navHandler} className='z-20 text-white  cursor-pointer'  size={25}/>}
      <div className={nav ? 
      'ease-in duration-300 fixed text-gray-400 bg-black/90	 z-10 top-0 left-0 w-full px-4 py-7 flex-col h-screen':
      'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>

        <div className='list-none flex flex-col fixed h-screen w-full justify-center items-center'>
            {navLinks.map((nav,id)=>(
                <li
                    className='hover:text-white font-bold text-2xl p-8'
                    >
                 <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar









