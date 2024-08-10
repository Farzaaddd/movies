import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../helper/localstorage";

// const initialState = {
//     saveList: [],
//     status: false
// }

const initialState = loadState();

const movieProvider = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      if (!state.saveList.find((i) => i.imdbID == action.payload.imdbID)) {
        state.saveList.push({ ...action.payload });
        state.status = false;
      }
    },

    removeMovie: (state, action) => {
      const newMovieList = state.saveList.filter(
        (i) => i.imdbID !== action.payload.imdbID
      );

      state.saveList = newMovieList;
    },
  },
});

export default movieProvider.reducer;
export const { addMovie, removeMovie } = movieProvider.actions;
