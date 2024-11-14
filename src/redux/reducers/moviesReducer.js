import { allMovies, pageMovies } from "../types/moviesType.js";

const initalValue = { movies: [], pageCount: 0, searchWord: "" };

export const moviesReducer = (state = initalValue, action) => {
  switch (action.type) {
    case allMovies:
      return {
        movies: action.data,
        pageCount: action.pages,
        searchWord: action.search,
      };
    case pageMovies:
      return {
        movies: action.data,
        pageCount: state.pageCount,
        searchWord: state.searchWord,
      };
    default:
      return state;
  }
};
