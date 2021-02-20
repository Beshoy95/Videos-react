import { useState, useEffect } from "react";
import Youtube from "../apis/Youtube";

const KEY = "AIzaSyAqOEl_OBGMtj_SqK1Lyk-v46wzCaU7jPM";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const respone = await Youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });
    setVideos(respone.data.items);
  };

  return [videos, search];
};

export default useVideos;
