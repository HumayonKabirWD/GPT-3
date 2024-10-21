import React from 'react'

const Article = (
    {
        img,
        date,
        text,
    }:{
        img:string;
        date:string;
        text:string;
    }
) => {
  return (
    <div>
        <div className="bg-black">
            <div>
                <img src={img} alt="blog" />
            </div>
            <div className='p-2'>
                <p className='text-sm'>{date}</p>
                <p className='text-xl md:3xl tracking-tight mt-2'>{text}</p>
                <div className="pt-20">
                    <a href="#">Read full Article</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article