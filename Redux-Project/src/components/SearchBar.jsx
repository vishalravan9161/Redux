import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../Redux/features/SearchSlice'
const SearchBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submitHandler =(e)=>{
    e.preventDefault()
    dispatch(setQuery(text)) //sent data into redux
    // setText('')
  }
 
  return (
    <div>
     <form onSubmit={(e)=>{
      submitHandler(e)
     }}
     className='flex gap-5  p-5'>
       <input className=' w-full bg-gray-400 shadow-xl/55 rounded-md outline-none text-xl px-4 py-2'
      required
      type="text"
      placeholder='Search anything...' 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />

      <button className=' cursor-pointer active:scale-95 shadow-xl/55 rounded-md bg-gray-400 outline-none text-xl px-4 py-2'>Search</button>
     
     </form>

    </div>
  )
}

export default SearchBar