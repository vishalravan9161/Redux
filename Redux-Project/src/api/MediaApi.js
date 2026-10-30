import axios from "axios";

//import api key from .env file.
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_KEY;

export async function FetchPhotos(query, page = 1, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return res.data;
}

export async function FetchVideos(query, page =1, per_page=20) {
  const res = await axios.get("https://pixabay.com/api/videos", {
    params: {
      key: PIXABAY_KEY,
      q:query,
      page , 
      per_page:per_page,
    },
  });
  return res.data;
}
