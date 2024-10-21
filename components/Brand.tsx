import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <div className='flex flex-wrap items-center justify-center mt-10 bg-black py-10 px-10'>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image src="./google.png" alt="google" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image src="./slack.png" alt="slack" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image src="./atlassian.png" alt="atlassian" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image src="./shopify.png" alt="shopify" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image src="./dropbox.png" alt="dropbox" />
        </div>
    </div>
  )
}

export default Brand