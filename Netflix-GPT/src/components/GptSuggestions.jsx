import React from "react";
import { useSelector } from "react-redux";
import SearchCard from "./searchCard";

const GptSuggestions = () => {
  const movies = useSelector((store) => store.gpt.movies);
  if (!movies) return;
  console.log(movies);
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
      {movies.filter(Boolean).map((m) => (
        <SearchCard key={m.id} movie={m} />
      ))}
    </div>
  );
};

export default GptSuggestions;
