import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'

const Home = () => {
  return (
    <div>
      <div className='text-xl text-center p-5 bg-gray-200 font-semibold font-serif'>Media Search</div>
     <SearchBar />
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default Home