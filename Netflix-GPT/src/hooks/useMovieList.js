import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getMovieList() {
      const nowPlaying = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US-US&page=1",
        API_OPTIONS
      );
      const nowPlayingJson = await nowPlaying.json();
      dispatch(addNowPlayingMovies(nowPlayingJson.results));

      const popular = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const popularJson = await popular.json();
      dispatch(addPopularMovies(popularJson.results));

      const topRatedMovies = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const topRatedMoviesJson = await topRatedMovies.json();
      dispatch(addTopRatedMovies(topRatedMoviesJson.results));

      const upComingMovies = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const upComingMoviesJson = await upComingMovies.json();
      dispatch(addUpcomingMovies(upComingMoviesJson.results));
    }
    getMovieList();
  }, []);
};

export default useMovieList;
