import React from 'react'

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-20 mx-10">
        <div className=' md:w-[60vw] h-20 bg-gradient-to-r from-violet-500 to-orange-300 flex items-center justify-between px-5 rounded-2xl'>
        <div className="tracking-tighter p-3">
            <p className='text-xs text-black font-semibold'>Rejister early to get accsese</p>
            <h1 className='font-bold text-black text-base md:text-lg '>Register Today & Explore Endless Experiences</h1>
        </div>
        <div className="bg-black py-2 px-3 rounded-2xl md:flex items-center justify-center hidden font-semibold hover:scale-105">
            <button type='button'>Get Started</button>
        </div>
        </div>
        <div className="mt-3 py-2 px-3 rounded-2xl items-center justify-center flex md:hidden font-semibold hover:scale-105 bg-gray-800">
            <button type='button'>Get Started</button>
        </div>
    </div>
  )
}

export default CTA