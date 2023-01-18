import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'

const Sub = () => {
  return (
    <div>
<div class="container my-24 px-6 mx-auto">

  <section class="mb-32 text-gray-800 text-center">
    <div class="flex flex-wrap justify-center">
      <div class="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">
        <div class="p-4 bg-red-200 rounded-full shadow-lg inline-block mb-6">
       <MdOutlineEmail size={50}/>
        </div>

        <h2 class="text-3xl font-bold mb-6">Subscribe to the newsletter</h2>

        <p class="text-gray-500 mb-12">We will write rarely and only high-quality content.</p>

        <div class="md:flex flex-row">
          <input
            type="text"
            class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            class="inline-block px-7 py-3 bg-red-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>

</div>
    </div>
  )
}

export default Sub