import React from 'react'
import ChocoCake from '../assets/choco-cake.png'
import Cake from '../assets/cake.png'
import { FaHeart, FaStar } from 'react-icons/fa'

function SpecialFood() {
    let Icecream = ({iceimg,name,rating,price}) => {
        return(
            <div className='food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5'>
                        <div className='relative mb-3'>
                            <img src={iceimg} alt="recommended"/>
                            <div className='absolute top-2 left-2'>
                                <button className='shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-4 rounded-full relative'>
                                    <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
                                </button>
                            </div>
                            <div className='absolute bottom-2 right-2'>
                                <button className='shadow-sm bottom-1 border-white text-white
                                bg-[#fdc55e] cursor-pointer h-10 w-10 text-xl font-bold rounded-full relative'>
                                    <div className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>${price}</div>
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <p className="text-xl text-center font-bold text-[#f54748]">{name}</p>
                            <div className='flex text-sm space-x-2 cursor-pointer'>
                                <span className='font-normal text-[#fdc55e]'>{rating}</span>
                                <FaStar size={16} className='text-[#fdc55e]'/>
                                <span className='font-medium'>(4)</span>
                            </div>
                        </div>
                        <button className='bg-[#f54748] active:scale-90 transition duration-150 transform
                        hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium'>Order Now</button>
                    </div>
        )}
  return (
    <div className='py-3 sm:px-4 md:px-6 lg:px-6'>
      <div className="container mx-auto py-[2vh]">
        <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
            Special <span className='text-[#f54748]'>Foods</span>
            <div className='grid py-6 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
                <Icecream iceimg={ChocoCake} name='Velvet Cake' rating={3.5} price={10}/>
                <Icecream iceimg={Cake} name='Cho Cake' rating={4.0} price={8}/>
                <Icecream iceimg={ChocoCake} name='Cream Cake' rating={4.5} price={10}/>
                <Icecream iceimg={Cake} name='Cust Cake' rating={4.2} price={10}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialFood
