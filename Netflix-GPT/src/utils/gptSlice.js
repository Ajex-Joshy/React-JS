import { createSlice } from "@reduxjs/toolkit";

const gpt = createSlice({
  name: "gpt",
  initialState: {
    movieArray: null,
    movies: null,
  },
  reducers: {
    addMovieArray: (state, action) => {
      state.movieArray = action.payload;
    },
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovieArray, addMovies } = gpt.actions;

export default gpt.reducer;
