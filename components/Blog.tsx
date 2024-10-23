import React from 'react'
import blog1 from '../public/blog01.png'
import blog2 from '../public/blog02.png'
import blog3 from '../public/blog03.png'
import blog4 from '../public/blog04.png'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className="mt-10 lg:mt-20 mx-10 lg:mx-16">
      <h1 className='font-bold text-4xl lg:text-5xl bg-gradient-to-r from-violet-500 to-orange-300 text-transparent bg-clip-text'>We have done lots of vlog</h1>
      <div className="flex flex-col lg:flex-row w-full mt-10">

        <div className="w-full lg:w-2/4 hidden lg:block">
        <Image src={blog1} alt='blog-1'/>
        <div className="p-2 bg-black rounded-[8px]">
          <p className='font-medium'>24 sep 2024</p>
          <p className='text-2xl mt-5'>Our time is a miracle that we cant cach any time and any whare?</p>
          <div className="text-lg font-medium flex items-center justify-end mt-20">
            <button>Full Article</button>
          </div>
        </div>
        </div>
        <div className="w-full lg:w-3/4 px-3 flex flex-col">
      <div className="flex flex-col lg:flex-row gap-3">
          <div>
          <Image src={blog1} alt='blog-1'/>
            <div className="p-2 bg-black rounded-[8px]">
            <p className='font-medium'>24 sep 2024</p>
            <p className='text-2xl mt-5'>Our time is a miracle that cant cach any time and any whare?</p>
            <div className="text-lg font-medium flex items-center justify-end mt-20">
              <button>Full Article</button>
            </div>
            </div>
          </div>
          <div>
            <Image src={blog2} alt='blog-1'/>
              <div className="p-2 bg-black rounded-[8px]">
              <p className='font-medium'>24 sep 2024</p>
              <p className='text-2xl mt-5'>For this is a maintain cant cach any time and any whare?</p>
              <div className="text-lg font-medium flex items-center justify-end mt-20">
                <button>Full Article</button>
              </div>
            </div>
          </div>
      </div>
      <div className="flex flex-col lg:flex-row  gap-3">
          <div>
          <Image src={blog3} alt='blog-1'/>
            <div className="p-2 bg-black rounded-[8px]">
            <p className='font-medium'>24 sep 2024</p>
            <p className='text-2xl mt-5'>Like is a nurodiation and alao time and any whare?</p>
            <div className="text-lg font-medium flex items-center justify-end mt-20">
              <button>Full Article</button>
            </div>
            </div>
          </div>
          <div>
            <Image src={blog4} alt='blog-1'/>
              <div className="p-2 bg-black rounded-[8px]">
              <p className='font-medium'>24 sep 2024</p>
              <p className='text-2xl mt-5'>for his loyality and hos jobaiden iracle that we cant cach any time and any whare?</p>
              <div className="text-lg font-medium flex items-center justify-end mt-20">
                <button>Full Article</button>
              </div>
            </div>
          </div>
      </div>


      </div>
      </div>
    </div>
  )
}

export default Blog