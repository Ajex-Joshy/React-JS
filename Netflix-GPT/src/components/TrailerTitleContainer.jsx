import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa"; // Play icon
import { AiOutlineInfoCircle } from "react-icons/ai"; // Info icon

const TrailerTitleContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies.length === 0) return; // we only need to access after the data populated by the api
  const mainMovie = movies[0];
  const { id, original_title, overview } = mainMovie;
  return (
    <div className="bg-gradient-to-r from-black w-screen aspect-video absolute ">
      <div className="absolute text-white mt-[25vh] ml-10">
        <h1 className="text-5xl font-bold ">{original_title}</h1>
        <p className="w-1/3 text-gray-100 mt-4">{overview}</p>
        <div className="flex mt-4">
          <button className="bg-white py-1.5 px-4  text-black flex items-center rounded-sm">
            <FaPlay className="mr-2" /> Play
          </button>
          <button className="bg-gray-500 py-1.5 px-4  ml-3 flex items-center rounded-sm">
            {" "}
            <AiOutlineInfoCircle className="mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrailerTitleContainer;
