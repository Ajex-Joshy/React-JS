import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice.js";
import movieReducer from "../utils/movieSlice.js";
import configReducer from "../utils/appConfig.js";
import gptReducer from "../utils/gptSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    appConfig: configReducer,
    gpt: gptReducer,
  },
});

export default appStore;
