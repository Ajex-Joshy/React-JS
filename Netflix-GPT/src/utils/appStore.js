import { configureStore } from "@reduxjs/toolkit";
import user from "../utils/userSlice.js";
import movies from "../utils/movieSlice.js";

const appStore = configureStore({
  reducer: {
    user,
    movies,
  },
});

export default appStore;
