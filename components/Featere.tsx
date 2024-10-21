
import React from 'react'

const Featere = ({title , text}:{title:string; text:string}) => {
  return (
    <div className=''>
        <div >
          <div className="h-1 w-7 ml-1 bg-gradient-to-r from-violet-600 to-orange-400 rounded-3xl mt-3"/>
          <h1 className='font-bold text-xl cursor-pointer mt-2'>
            {title}
            </h1>
        </div>
        <div className= "text-sm text-blue-200 mt-3">
          {text}
        </div>
    </div>
  )
}

export default Featere