import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setActiveTabs } from '../Redux/features/SearchSlice'
const Tabs = () => {

  const tabs = ['Photos','Videos']
  const dispatch = useDispatch()
 const ActiveTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex place-content-center font-semibold gap-20 p-5'>
      {tabs.map(function(elem,idx){
        return (
          <button key={idx}
        className={`${(ActiveTab==elem ? 'bg-blue-700' : 'bg-gray-500')} transition border px-5 py-2 rounded-md cursor-pointer active:scale-95`}
        onClick={()=>{
          dispatch(setActiveTabs(elem))
        }}
        >{elem}</button>
        )
      })}
    </div>
  )
}

export default Tabs