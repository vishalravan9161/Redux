import React, { useEffect, useEffectEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchPhotos, FetchVideos } from "../api/MediaApi";
import {
  setQuery,
  setError,
  setLoading,
  setResults,
} from "../Redux/features/SearchSlice";
import ResultCard from "../Pages/ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, error, loading, results } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "Photos") {
          let response = await FetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: item.asset_type,
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }

        if (activeTab == "Videos") {
          let response = await FetchVideos(query);
          data = response.hits.map((item) => ({
            id: item.user_id,
            type: 'video',
            title: item.name,
            thumbnail: item.videos.small.thumbnail,
            src: item.videos.small.url,
          }));
  
        }
        console.log(data)
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }

    };

    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-wrap gap-5 p-5 overflow-auto justify-center">
      {results.map((item, idx) => {
        return <div key={idx}>
          <ResultCard item={item}/>
        </div>;
      })}
    </div>
  );
};

export default ResultGrid;
