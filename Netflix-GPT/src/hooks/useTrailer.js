import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";
const useTrailer = (id) => {
  const [key, setKey] = useState("");
  useEffect(() => {
    if (!id) return;
    const getVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const trailer = json.results.filter((v) => v.name === "Official Trailer");
      if (!trailer) trailer = json.results[0];
      console.log(trailer);
      setKey(trailer[0].key);
    };
    getVideo();
    return key;
  }, [id]);
};

export default useTrailer;
