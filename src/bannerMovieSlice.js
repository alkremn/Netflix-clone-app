import { createSlice } from "@reduxjs/toolkit";

export const bannerMovieSlice = createSlice({
  name: "bannerMovie",
  initialState: {
    value: null,
  },
  reducers: {
    setBannerMovie: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBannerMovie } = bannerMovieSlice.actions;

export const selectBannerMovie = (state) => state.bannerMovie.value;

export default bannerMovieSlice.reducer;
