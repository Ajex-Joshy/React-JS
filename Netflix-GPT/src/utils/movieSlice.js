import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = movies.actions;
export default movies.reducer;
