import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: [],
  new: [],
  trending: [],
  originals: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.new = action.payload.new;
      state.trending = action.payload.trending;
      state.originals = action.payload.originals;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommends = (state) => state.movie.recommend;
export const selectNew = (state) => state.movie.new;
export const selectOriginals = (state) => state.movie.originals;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
