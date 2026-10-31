import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {
  return (
    <div className='bg-gray-300 h-full'>
      <SearchBar />
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default App