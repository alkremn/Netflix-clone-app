import { configureStore } from "@reduxjs/toolkit";
import bannerMovieReducer from "../bannerMovieSlice";

export default configureStore({
  reducer: {
    bannerMovie: bannerMovieReducer,
  },
});
