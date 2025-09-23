import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import js from "@eslint/js";
import useTrailer from "../hooks/useTrailer";

const TrailerVideoContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const mainMovie = movies[0];
  const id = mainMovie?.id;
  const key = useTrailer(id)

  
  return (
    <div>
      <div className="w-screen overflow-hidden">
        <iframe
          className="w-full aspect-video"
          src={"https://www.youtube.com/embed/" + key + "?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerVideoContainer;
