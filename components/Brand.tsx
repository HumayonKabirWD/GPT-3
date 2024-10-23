import Image from 'next/image'
import React from 'react'
import google from '../public/google.png'
import slak from '../public/slack.png'
import atlas from '../public/atlassian.png'
import shop from '../public/shopify.png'
import droop from '../public/dropbox.png'

const Brand = () => {
  return (
    <div className='flex flex-wrap items-center justify-center mt-10 bg-black py-10 px-10'>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image src={google} alt="google" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image  src={slak} alt="slack" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image  src={atlas} alt="atlassian" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image  src={shop} alt="shopify" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image  src={droop} alt="dropbox" />
        </div>
    </div>
  )
}

export default Brand