import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getNowPlaying() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
