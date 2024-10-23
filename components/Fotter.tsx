import React from 'react'
import Fot from './Fot'
import Link from 'next/link';

const Fotter = () => {
    const year = new Date().getFullYear();
  return (
    <div className='mt-32 mx-10'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center">
                <Link href="/" className='text-5xl font-bold'>GPT-3</Link>
                <p className='text-sm text-gray-400 font-semibold mt-10 w-60'>This is the time to get into this for well known this is a best option thet you can coose</p>
            </div>
                <div >
                    <h1 className='text-center pb-5 font-semibold text-lg uppercase'>links</h1>
                    <Fot p='Socal Media'/>
                    <Fot p='Contact'/>
                    <Fot p='Hotline'/>
                    <Fot p='live talk'/>
                </div>
                <div className="">
                    <h1 className='text-center pb-5 font-semibold text-lg uppercase'>Companis</h1>
                    <Fot p='HNM ltd.'/>
                    <Fot p='Raja textile'/>
                    <Fot p='Elimentory.'/>
                </div>
                <div className="">
                    <h1 className='text-center pb-5 font-semibold text-lg uppercase'>Get in Touch</h1>
                    <Fot p='Cherating thing'/>
                    <Fot p='Experincec evry day'/>
                    <Fot p='Protectiv'/>
                </div>
        </div>
        <div >
            <p className='text-center text-sm font-semibold my-5 mt-20 bg-black py-3 text-gray-400'>&copy; {year} GPT-3 copywrite from 2020 </p>
        </div>
    </div>
  )
}

export default Fotter