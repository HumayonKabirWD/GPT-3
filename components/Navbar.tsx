"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri';
import Image from 'next/image';
const Navbar = () => {
  const  [toggleManu, setToggleManu] = useState(false);

  const Manue = () =>(
    <>
            <a href="#">HOME</a>
            <a href="#w_gpt3">What is GPT-3</a>
            <a href="#features">Open AI</a>
            <a href="#function">Case Studeys</a>
            <a href="#blog">Library</a>
    </>
  )
  return (
    <div className='top-0 z-10 sticky backdrop-blur-xl'>
      <div className="flex items-center justify-around lg:px-[6rem] px-[1rem] py-[1rem]">
        <div className="flex flex-1 justify-start items-center">
          <Link href="/" className="md:mr-[4rem]">
            <Image width={0} height={0} className='h-5 md:h-6' src="/logo.svg" alt="logo" />
          </Link>
          <div className="space-x-3 lg:space-x-7 ml-9 md:text-sm text-xs font-semibold  md:block hidden">
            <Manue />
          </div>
        </div>
        <div className="flex flex-row justify-end items-center gap-2 font-semibold ">
          <p className='hidden md:block'>Sign in</p>
          <button type='button' className='py-1 px-3 bg-orange-600 hover:bg-orange-800 rounded-sm hidden md:block'>Sign up</button>
        </div>
        <div className="flex items-center justify-end md:hidden ml-2">
          {toggleManu 
          ? <RiCloseFill color='#fff' size={27} onClick={()=> setToggleManu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleManu(true)}/>
          }
          {toggleManu && (
            <div className="scale-up-center mt-80 absolute bg-black p-5 rounded-2xl">
              <div className="flex flex-col items-center justify-center">
                <Manue/>
                <p className='my-5 py-1 px-3 border rounded-sm cursor-pointer'>Sign in</p>
                <button type='button' className='py-1 px-3 bg-orange-700 rounded-sm hover:bg-orange-900'>Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    
    </div>
  )
}

export default Navbar