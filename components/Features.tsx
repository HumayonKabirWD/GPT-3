import React from 'react'
import Featere from './Featere'

const Features = () => {
  const featureData = [
    {
      title:"Improving and distrubuit quickly",
      text:"This is a most popular ai right now you can litraly go with that for use your great exparience and obiease"
    },
    {
      title:"Become the tended active",
      text:"This is a most popular ai right now you can litraly go with that for use your great exparience and obiease"
    },
    {
      title:"Massage or am nothing",
      text:"This is a most popular ai right now you can litraly go with that for use your great exparience and obiease"
    },
    {
      title:"Really boy row countly",
      text:"This is a most popular ai right now you can litraly go with that for use your great exparience and obiease"
    },
  ]
  return (
    <div className='mx-12 mt-24' id='features'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="max-w-[400px]">
              <h1 className='text-3xl md:text-4xl bg-gradient-to-r from-violet-500 to-orange-300 text-transparent bg-clip-text font-semibold '>The Feature Is Now And You Just Need To Realize It Step Into Futere Today And Make it Happen</h1>
              <p className='mt-5 md:mt-10 text-orange-400 font-semibold cursor-pointer'>Request Early To Get Started</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featureData.map((item,index)=>(
                <Featere title={item.title}  text={item.text} key={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features