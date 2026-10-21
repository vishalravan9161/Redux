import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterSlice'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  return (<>
        <div className='h-screen  flex place-content-center items-center'>
    <div className='text-4xl p-10 h-80 bg-blue-300/70 outline-none shadow-xl/500  rounded '>
        <h1 className='bg-gray-400 rounded border-2 px-5'>
          {count}
        </h1>

       
      <div className='flex gap-5 mt-40'>
          <button onClick={()=>{
            dispatch(increment())
          }}
           className='bg-green-400 cursor-pointer active:scale-95 w-full shadow-md/100 items-center  rounded-xl px-3'>
            +1
          </button>
          <button onClick={()=>{
            dispatch(decrement())
          }}
          className='flex bg-red-400 cursor-pointer active:scale-95 w-full shadow-md/100 items-center px-3 rounded-xl'>-1</button>
          </div>
    </div> 
    </div>
    </>
  )
}

export default App