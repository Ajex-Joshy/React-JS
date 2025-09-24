import React, { useRef } from "react";
import LANG_CONSTANTS from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieArray } from "../utils/gptSlice";
import useFindMovies from "../hooks/useFindMovies";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.appConfig.lang);
  const input = useRef();
  useFindMovies();

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

  const handleSearch = async () => {
    console.log("hi");
    const prompt = `You are a movie recommendation engine. 
Based on the following user query, suggest exactly 5 movie names. 
Do not include numbering, extra words, or explanations. 
Return the result strictly as a JavaScript array of strings.

User query: "${input.current.value}"

Example output format:
["Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump"]`;
    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      dispatch(addMovieArray(text));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-center items-start">
      <div className="w-10/12 md:w-6/12 bg-black mt-[20vh] p-4 grid grid-cols-12 rounded-md shadow-lg">
        <form
          action=""
          className="col-span-9"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            ref={input}
            placeholder={LANG_CONSTANTS[lang].gptPlaceholder}
            className=" bg-white py-2 w-full rounded-l-md border-none outline-none p-4"
          />
        </form>
        <button
          onClick={handleSearch}
          className="bg-red-500 col-span-3 text-white px-6 py-2 rounded-r-md cursor-pointer hover:bg-red-600 transition"
        >
          {LANG_CONSTANTS[lang].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
