import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import js from "@eslint/js";
import useTrailer from "../hooks/useTrailer";

const TrailerVideoContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const mainMovie = movies ? movies[0] : null;
  const id = mainMovie?.id;
  const key = useTrailer(id);

  if (!movies || !id || !key) return null;

  return (
    <div>
      <div className="w-screen overflow-hidden min-h-[50vh]">
        <iframe
          className="w-full aspect-video z-0"
          src={"https://www.youtube.com/embed/" + key + "?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerVideoContainer;
