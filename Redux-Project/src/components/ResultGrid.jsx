import React, { useEffect, useEffectEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchPhotos, FetchVideos } from "../api/MediaApi";
import { setQuery, setError, setLoading, setResults } from "../Redux/features/SearchSlice";
  
 
const ResultGrid = () => {

 const {query,activeTab,error,loading,results} = useSelector((store)=>store.search)

 useEffect(() => {
  const getData = async()=>{
    let data;
    if(activeTab=='Photos'){
      let response = await FetchPhotos(query)
      data = response.results.map((item)=>({
        id:item.id,
        type:item.asset_type,
        title:item.alt_description,
        thumbnail:item.urls.small,
        src:item.urls.full
      }))
    }

    if(activeTab=='Videos'){
      let response = await FetchVideos(query)
      data = response.hits.map((item)=>({
        id:item.user_id,
        type:item.type,
        title:item.name,
        thumbnail:item.videos.small.thumbnail,
        src:item.videos.large.url
      }))
    }
    console.log(data)
  }
 
 getData()
 }, [query,activeTab])
 

  return (
    <div>

    </div>
  )
}

export default ResultGrid;
