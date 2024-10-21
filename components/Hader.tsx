import React from 'react'

const Hader = () => {
  return (
    <div className='mt-5 mx-5 md:mx-20 w-fit'>
        <div className="flex max-w-screen-xl">
          <div className="">
          <p className='text-3xl bg-gradient-to-r from-violet-700 to-orange-500 bg-clip-text text-transparent font-semibold md:text-7xl w-full'>Let's Build Somthing amazing with GTP-3 Open AI </p>
            <p className='text-gray-400 text-xs md:text-base mt-3 tracking-tight'>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.
            </p>
          </div>
          <div className="hidden md:block">
            <img className='h-[400px] w-[1200px]' src="./ai.png" alt="ai" />
          </div>  
        </div>
        <div className="mt-5 md:mt-7 flex gap-8">
          <input type="email" className="h-10 md:h-14  sm:w-[50vw] text-black" placeholder=' Write Your Email Hare' />
          <button className='px-3 md:px-5 bg-orange-600 font-semibold hover:bg-orange-800' type='button'>Get Started</button>
        </div>
        <div className="mt-5 sm:flex">
          <div className="flex items-center justify-center">
            <img className='h-8' src="./people.png" alt="people" />
          </div>
          <p className='text-gray-500 mt-4 md:mt-0 bg-black mx-0 md:mx-3 rounded-sm items-center flex '>1000+ people geting started and request to join last 24 hours</p>
          <div className="flex md:hidden items-center justify-center">
            <img className='h-[400px] w-[400px]' src="./ai.png" alt="ai" />
          </div>
        </div>
    </div>
  )
}

export default Hader