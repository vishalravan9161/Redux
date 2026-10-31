import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className=''>
       <div className=' bg-white border-2 border-white shadow-xl/500 hover:scale-95 transition-all cursor-pointer active:scale-95  overflow-hidden rounded-md h-70 w-60'>
           {item.type =='photo'?<img className='h-full w-full object-cover' src={item.src} alt="" />:''}
           {item.type =='video'?<video className='h-full w-full object-cover' autoPlay muted loop src={item.src}></video>:''}
           <h1> {item.title}</h1>
       </div>
    </div>
  )
}

export default ResultCard