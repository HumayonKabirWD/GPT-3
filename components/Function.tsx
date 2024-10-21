import Image from 'next/image'
import React from 'react'

const Function = () => {
  return (
    <div className='mt-20 lg:mt-20 grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-40' id='function'>
        <div >
            <Image className='h-[30rem]'src="./possibility.png" alt="Possibility" />
        </div>
        <div className="flex items-center justify-center">
            <div className="flex flex-col mt-10 md:mt-0 p-5">
                <h1 className='text-sky-400 font-semibold text-sm py-3'>Request Early To Get Accses</h1>
                <p className='text-4xl md:text-5xl font-semibold bg-gradient-to-r from-violet-700 to-orange-400 text-transparent bg-clip-text'>The Possiblity Beonde Your Imaginatin</p>
                <p className='text-gray-400 py-5'>That is a most beautifull and sweetable place and most flexible for the devloper and nondevloper. theb it is the most fine and good for every one. For the resone of its for the time and tilde wite for none then we will go for the most erotic zone</p>
                <p className='text-orange-400 font-semibold'>Let&apos;s get Into it without Hesitation</p>
            </div>
        </div>
    </div>
  )
}

export default Function