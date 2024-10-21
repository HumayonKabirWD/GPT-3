import React from 'react'
import Featere from './Featere'

const WhatGPT3 = () => {
  return (
    <div className='bg-black  w-full flex flex-row items-center justify-center' id='w_gpt3'>
      <div className="bg-gradient-to-br from-slate-800 to-blue-900 flex-row  max-w-[1000px] my-20">
        <div className="mx-10 mt-2">
            <Featere title='What is GPT-3' text='This is a ultimate ai featere that will give you the most smooth user experience all of them so if you think to use this on your daily work parpases then you can go for it and enjoy your best exparience'/>
        </div>
        <div className="md:flex-row sm:flex  items-center justify-between my-6 mx-10">
            <h1 className='text-2xl md:text-3xl font-bold max-w-[400px] bg-gradient-to-r from-violet-600 to-orange-400 text-transparent bg-clip-text'>The Possibility are Beoend your Imagination</h1>
            <p className='text-sm font-semibold cursor-pointer text-orange-400 mt-5 md:mt-0'>Explor the library</p>
        </div>
        <div className="mx-10 my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:space-x-3">
          <Featere title='Chatbox'text='It has the best chatbx that will reply within the some second that you canot imagine'/>
          <Featere title='KnowlageBase' text='GPT-3 hase the best konwlagebase in the world couse it has the latest machin'/>
          <Featere title='Education' text='For educational perpas it is the most usefull so far i think so you should definetly try this.'/>
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3