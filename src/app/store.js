import { configureStore } from "@reduxjs/toolkit";

import movieProvider from "../features/movieProvider";
import { saveState } from "../helper/localstorage";

const store = configureStore({
  reducer: {
    movie: movieProvider,
  },
});

store.subscribe(() => {
  saveState({
    saveList: store.getState().movie.saveList,
    status: store.getState().movie.status,
  });
});

export default store;
