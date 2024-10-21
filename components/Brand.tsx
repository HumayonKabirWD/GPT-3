import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <div className='flex flex-wrap items-center justify-center mt-10 bg-black py-10 px-10'>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image width={100} height={50} src="/google.png" alt="google" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image width={100} height={50} src="/slack.png" alt="slack" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image width={100} height={50} src="/atlassian.png" alt="atlassian" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image height={50} width={100} src="/shopify.png" alt="shopify" />
        </div>
        <div className="flex-1 max-w-[150px] min-w-[120px] ">
            <Image height={50} width={100} src="/dropbox.png" alt="dropbox" />
        </div>
    </div>
  )
}

export default Brand