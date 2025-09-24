import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
  name: "appConfig",
  initialState: {
    lang: "en",
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = appConfig.actions;
export default appConfig.reducer;
