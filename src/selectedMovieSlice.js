import { createSlice } from "@reduxjs/toolkit";

export const selectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState: {
    selectedMovie: null,
  },
  reducers: {
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { addSelectedMovie } = selectedMovieSlice.actions;

export default selectedMovieSlice.reducer;
