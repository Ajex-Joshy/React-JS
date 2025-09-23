import { useSelector } from "react-redux";
import Categories from "./categories";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (nowPlayingMovies.length === 0) return;
  return (
    <div className="bg-red-600">
      <Categories title={"Now Playing"} movies={nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
