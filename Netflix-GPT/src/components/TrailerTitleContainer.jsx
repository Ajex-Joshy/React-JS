import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa"; // Play icon
import { AiOutlineInfoCircle } from "react-icons/ai"; // Info icon

const TrailerTitleContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;
  const mainMovie = movies[0];
  const { id, original_title, overview } = mainMovie;
  return (
    <div className=" md:bg-gradient-to-r from-black w-screen h-[80vh] md:h-[89vh] absolute z-10">
      <div className="absolute text-white mt-[30vh] md:mt-[40vh] ml-10">
        <h1 className="text-3xl md:text-5xl font-bold ">{original_title}</h1>
        <p className="w-2/3 md:w-1/3 text-gray-100 mt-4">{overview}</p>
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
