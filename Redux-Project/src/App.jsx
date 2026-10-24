import React from "react";
import { FetchPhotos, FetchVideos } from "./api/MediaApi";

const App = () => {

  return (
    <div>
      <h1 className="">Hello</h1>
      <button onClick={async()=>{
       const data = await FetchPhotos('rose')
       console.log(data.results)
      }}

        className="bg-blue-400 px-5 rounded-2xl py-2 cursor-pointer active:scale-95"
      >get photos</button>

       <button onClick={async()=>{
       const data = await FetchVideos('car')
       console.log(data)
      }}

        className="bg-blue-400 px-5 rounded-2xl py-2 cursor-pointer active:scale-95"
      >get Videos</button>
    </div>
  );
};   

export default App;