import React from 'react'
import {FaPlay, FaSearch } from 'react-icons/fa'
import { BsChevronDoubleRight } from "react-icons/bs"
import header from '../assets/food-img.jpg'

function Header() {
  return (
    <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
      <div className='container mx-auto py-[14vh]'>
        <div className='grid grid-col-1 relative lg:grid-cols-2 gap-8 items-center'>
          <div className='lg:w-[32rem] w-full flex flex-col space-y-6'>
            <div className='text-4xl md:text-5xl font-bold text-[#2e2e2e] lg:text-6xl'>
              We are <span className='text-[#f54748]'>Serious</span> For <span className='text-[#f54748]'>Food</span>
              & <span className='text-[#fdc55e]'>Delivery</span>
            </div>
            <div className='lg:text-xl text-[#191919] md:text-lg text-base'>LA food delivery shop is designed for efficiency,
              speed, and customer satisfaction, with a focus on providing delicious meals delivered straight to
              the customer’s door. Its layout, technology, and overall atmosphere
              all contribute to a seamless and enjoyable dining experience, whether at home or on the go.
            </div>
            <div className='flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md'>
              <div className='flex items-center'>
                <FaSearch size={22} className='cursor-pointer' />
                <input type='text' placeholder='Search food here ...'
                  className='text-[#191919] w-full border-none
                outline-none py-2 px-4'/>
              </div>
              <div className='h-10 w-10 relative bg-[#fdc55e] rounded-full'>
                <BsChevronDoubleRight size={22} className='cursor-pointer
                text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
              </div>
            </div>
            <div className='flex gap-8 items-center'>
              <button className='bg-[#f54748] active:scale-90 transition duration-500
              transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl text-white'>Explore More</button>

              <div className='sm:flex hidden gap-4 items-center'>
                <div className='h-14 w-14 shadow-md cursor-pointer relative bg-white rounded-full'>
                  <FaPlay size={18} className='cursor-pointer text-[#f54748] absolute
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                </div>
                <div className='lg:text-xl text-[#191919] md:text-lg text-base cursor-pointer'>Watch Now</div>
              </div>
            </div>
          </div>
          <img src={header} className='h-[28rem] mx-auto justify-end rounded' alt='chicken'/>
        </div>
      </div>
    </div>
  )
}

export default Header