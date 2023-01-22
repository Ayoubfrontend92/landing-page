import React from 'react'
import img1 from '../images/product1.jpg'
import img2 from '../images/product2.jpg'
import img3 from '../images/product3.jpg'
import img4 from '../images/product4.jpg'
import img5 from '../images/product5.jpg'
import img6 from '../images/product6.jpg'
import img7 from '../images/product7.jpg'
import img8 from '../images/product8.jpg'
import img9 from '../images/product9.jpg'
import {MdWhatshot} from 'react-icons/md'

const Products = () => {
  return (
    <div>
<div className="container my-24 px-6 mx-auto">

  <section className="mb-32 text-gray-800 text-center lg:text-left">
    <h2 className="text-3xl font-bold mb-12 text-center">Projects we are proud of</h2>

    <div className="grid lg:grid-cols-3 gap-x-6">
      <div className="mb-12 lg:mb-0">
        <div className="shadow-lg  rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={img1} className="w-full md:h-[265px] " data-mdb-ripple="true"/>
          <a href="#!">
            <div
              className="mask absolute top-0 bg-emerald-200/40 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              ></div>
          </a>
        </div>
        <h5 className="text-lg font-bold mb-3">Hollywood Exhibition</h5>
        <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
          <MdWhatshot/>Hot news
        </div>
        <p className="text-gray-500">
          Ut pretium ultricies dignissim. Sed sit amet mi eget urna
          placerat vulputate. Ut vulputate est non quam dignissim
          elementum. Donec a ullamcorper diam.
        </p>
      </div>

      <div className="mb-12 lg:mb-0">
        <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
           data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={img2} className="w-full md:h-[265px]" />
          <a href="#!">
            <div
              className="mask absolute bg-red-100/40 top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
             ></div>
          </a>
        </div>

        <h5 className="text-lg font-bold mb-3">Big Apple</h5>
        <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
         <MdWhatshot/>Experiment
        </div>
        <p className="text-gray-500">
          Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
          orci, nec ornare metus semper sed. Integer volutpat ornare erat
          sit amet rutrum.
        </p>
      </div>

      <div className="mb-0">
        <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
         data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={img3} className="w-full md:h-[265px]" />
          <a href="#!">
            <div
              className="mask absolute bg-red-500/40 top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              ></div>
          </a>
        </div>

        <h5 className="text-lg font-bold mb-3">Sun City</h5>
        <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center lg:justify-start">
        <MdWhatshot/>Family friendly
        </div>
        <p className="text-gray-500">
          Curabitur tristique, mi a mollis sagittis, metus felis mattis
          arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
          massa volutpat feugiat. Donec.
        </p>
      </div>

      
    </div>   
    
    <div className="grid lg:grid-cols-3 my-10 gap-x-6">
      <div className="mb-12 lg:mb-0">
        <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={img4} className="w-full md:h-[265px]" />
          <a href="#!">
            <div
              className="mask absolute top-0 bg-gray-200/40 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              ></div>
          </a>
        </div>
        <h5 className="text-lg font-bold mb-3">Hollywood Exhibition</h5>
        <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
          <MdWhatshot/>Hot news
        </div>
        <p className="text-gray-500">
          Ut pretium ultricies dignissim. Sed sit amet mi eget urna
          placerat vulputate. Ut vulputate est non quam dignissim
          elementum. Donec a ullamcorper diam.
        </p>
      </div>

      <div className="mb-12 lg:mb-0">
        <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
           data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={img5} className="w-full md:h-[265px]" />
          <a href="#!">
            <div
              className="mask absolute bg-gray-100/40 top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
             ></div>
          </a>
        </div>

        <h5 className="text-lg font-bold mb-3">Big Apple</h5>
        <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
         <MdWhatshot/>Experiment
        </div>
        <p className="text-gray-500">
          Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
          orci, nec ornare metus semper sed. Integer volutpat ornare erat
          sit amet rutrum.
        </p>
      </div>

      <div className="mb-0">
        <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
         data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={img6} className="w-full md:h-[265px]" />
          <a href="#!">
            <div
              className="mask absolute bg-yellow-500/40 top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              ></div>
          </a>
        </div>

        <h5 className="text-lg font-bold mb-3">Sun City</h5>
        <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center lg:justify-start">
        <MdWhatshot/>Family friendly
        </div>
        <p className="text-gray-500">
          Curabitur tristique, mi a mollis sagittis, metus felis mattis
          arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
          massa volutpat feugiat. Donec.
        </p>
      </div>

      
    </div>
    
    <div className="grid lg:grid-cols-3 my-10 gap-x-6">
      <div className="mb-12 lg:mb-0">
        <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={img7} className="w-full md:h-[265px]" />
          <a href="#!">
            <div
              className="mask absolute top-0 bg-gray-200/40 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              ></div>
          </a>
        </div>
        <h5 className="text-lg font-bold mb-3">Hollywood Exhibition</h5>
        <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
          <MdWhatshot/>Hot news
        </div>
        <p className="text-gray-500">
          Ut pretium ultricies dignissim. Sed sit amet mi eget urna
          placerat vulputate. Ut vulputate est non quam dignissim
          elementum. Donec a ullamcorper diam.
        </p>
      </div>

      <div className="mb-12 lg:mb-0">
        <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
           data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={img8} className="w-full md:h-[265px]" />
          <a href="#!">
            <div
              className="mask absolute bg-gray-100/40 top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
             ></div>
          </a>
        </div>

        <h5 className="text-lg font-bold mb-3">Big Apple</h5>
        <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
         <MdWhatshot/>Experiment
        </div>
        <p className="text-gray-500">
          Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
          orci, nec ornare metus semper sed. Integer volutpat ornare erat
          sit amet rutrum.
        </p>
      </div>

      <div className="mb-0">
        <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
         data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={img9} className="w-full md:h-[265px]" />
          <a href="#!">
            <div
              className="mask absolute bg-yellow-500/40 top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              ></div>
          </a>
        </div>

        <h5 className="text-lg font-bold mb-3">Sun City</h5>
        <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center lg:justify-start">
        <MdWhatshot/>Family friendly
        </div>
        <p className="text-gray-500">
          Curabitur tristique, mi a mollis sagittis, metus felis mattis
          arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
          massa volutpat feugiat. Donec.
        </p>
      </div>

      
    </div>
    

  </section>

</div>
    </div>
  )
}

export default Products
