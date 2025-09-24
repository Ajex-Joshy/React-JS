import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../utils/gptSlice";

const useFindMovies = () => {
  const movieArray = useSelector((store) => store.gpt.movieArray);
  const movieList = JSON.parse(movieArray);
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.gpt.movies);
  useEffect(() => {
    if (!movieArray) return;
    const findMovies = async (name) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" + name,
        API_OPTIONS
      );
      const json = await data.json();
      return json;
    };
    const fetchAllMovies = async () => {
      try {
        const promises = movieList.map((movie) => findMovies(movie));
        const results = await Promise.all(promises);
        // console.log(results);
        let movies = [];
        for (let i of results) {
          movies.push(i.results[0]);
        }

        dispatch(addMovies(movies));
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAllMovies();
  }, [movieArray]);
};
export default useFindMovies;
