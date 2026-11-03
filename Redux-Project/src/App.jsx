import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import CollectionPage from './Pages/CollectionPage'

const App = () => {
  return (
    <>
    <div className='bg-gray-300 h-full'>
     <div className='bg-gray-300 h-full'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<CollectionPage/>}/>
    </Routes>
    </div>
    </div>
    </>
  )
}

export default App