import { useSelector } from "react-redux";
import Categories from "./categories";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies?.upComingMovies);
  if (!nowPlayingMovies || !popularMovies || !topRatedMovies || !upComingMovies)
    return;

  return (
    <div className="  ">
      <div className="-mt-20 md:-mt-40 z-50">
        <div className="bg-black pt-[35vh] md:pt-0">
          <Categories title={"Now Playing"} movies={nowPlayingMovies} />
          <Categories title={"Popular"} movies={popularMovies} />
          <Categories title={"Top Rated"} movies={topRatedMovies} />
          <Categories title={"Up Coming"} movies={upComingMovies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
