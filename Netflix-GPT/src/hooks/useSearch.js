import { useDispatch } from "react-redux";
import { addMovies } from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../utils/constants";

const useSearch = async (query) => {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
  const dispatch = useDispatch();
  const prompt = `You are a movie recommendation engine. 
Based on the following user query, suggest exactly 5 movie names. 
Do not include numbering, extra words, or explanations. 
Return the result strictly as a JavaScript array of strings.

User query: "${query}"

Example output format:
["Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump"]`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log("movie names", text);
    dispatch(addMovies(text));
  } catch (err) {
    console.log(err.message);
  }
};
export default useSearch;
