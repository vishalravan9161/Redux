import React from 'react'

const ResultCard = ({item}) => {

  const addToCollection = (item)=>{
    const oldData = JSON.parse(localStorage.getItem('collection')) || []
    const newData = [...oldData,item];
    console.log(newData)
    localStorage.setItem('collection',JSON.stringify(newData))
  }

  return (
    <div className=''>
       <div className='relative bg-white border border-white shadow-xl/500 hover:scale-95 transition-all cursor-pointer active:scale-95  overflow-hidden rounded-md h-70 w-60'>
           {item.type =='photo'?<img className='h-full w-full object-cover' src={item.src} alt="" />:''}
           {item.type =='video'?<video className='h-full w-full object-cover' autoPlay muted loop src={item.src}></video>:''}
            <div className=' gap-20 justify-between px-5 absolute bottom-0 flex bg-white/50 w-full'>
            {/* <h1 className=' text-white bottom-0 left-0 p-2 w-30 text-start mt-3  '> {item.title}</h1> */}
           <a target='_blank' href={item.url}>
             <button className='-ml-1  bg-blue-400 bottom-0 cursor-pointer active:scale-95 px-4 py-2 rounded-md mb-4 mt-5  justify-center'>View</button>
           </a>
           <button onClick={()=>{
            addToCollection(item)
           }}
            className=' bg-green-400 right-0 bottom-0 cursor-pointer active:scale-95 px-4 py-2 rounded-md mb-4 mt-5  justify-center'>
            save</button>
           </div>
       </div>
      
    </div>
  )
}

export default ResultCard