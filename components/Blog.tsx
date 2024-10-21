import React from 'react'
import Article from './Article'

const Blog = () => {
  return (
    <div className='mx-10 md:mx-20 mt-28' id='blog'>
        <div className="">
            <h1 className='bg-gradient-to-r from-violet-500 to-orange-600 bg-clip-text text-transparent text-3xl md:text-4xl font-bold tracking-wider'>A Lot is Happaning. <br /> We are Bloging About It.</h1>
        </div>
        <div className="flex flex-col mt-10">
            <div className="flex flex-col md:flex-row">

            <div className='flex-[0.75] mr-8 py-20 '>
                <Article img='/blog01.png' date='24 sep 2024' text='GPT-3 And Open AI is the most powerfull thing even exiset' />
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-10">
                    <Article img='/blog01.png' date='24 sep 2024' text='GPT-3 And Open AI is the most powerfull thing even exiset'/>
                    <Article img='/blog02.png' date='24 sep 2024' text='GPT-3 And Open AI is the most powerfull thing even exiset'/>
                    <Article img='/blog03.png' date='24 sep 2024' text='GPT-3 And Open AI is the most powerfull thing even exiset'/>
                    <Article img='/blog04.png' date='24 sep 2024' text='GPT-3 And Open AI is the most powerfull thing even exiset'/>
            </div>
            </div> 
        </div>
    </div>
  )
}

export default Blog