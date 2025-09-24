import React from "react";
import { POSTER_CDN } from "../utils/constants";

const SearchCard = ({ movie: { poster_path, title, release_date } }) => {
  return (
    <div className="p-4 bg-red-500 rounded-2xl">
      <div>
        <img className="rounded-2xl" src={POSTER_CDN + poster_path} alt="" />
      </div>
      <div>
        <h1 className="text-white text-2xl font-bold my-3">{title}</h1>
        <p className="text-white">Released On: {release_date}</p>
      </div>
    </div>
  );
};

export default SearchCard;
