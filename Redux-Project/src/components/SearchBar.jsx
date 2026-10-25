import React, { useState } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log('form submited')
    setSearch('')
  }
  // console.log(search)
  return (
    <div>
     <form onSubmit={(e)=>{
      submitHandler(e)
     }}
     className='flex gap-5 mt-5 p-5'>
       <input className='border w-full bg-gray-400 outline-none text-xl px-4 py-2'
      required
      type="text"
      placeholder='Search anything...' 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

      <button className='border cursor-pointer active:scale-95 outline-none text-xl px-4 py-2'>Search</button>
     
     </form>

    </div>
  )
}

export default SearchBar