import {
  allMovies,
  allDataApi,
  searchApi,
  pageMovies,
} from "../types/moviesType.js";
import axios from "axios";

export const getAllData = () => {
  return async (dispatch) => {
    const { data } = await axios.get(allDataApi);

    dispatch({
      type: allMovies,
      data: data.results,
      pages: data.total_pages >= 500 ? 500 : data.total_pages,
      search: "",
    });
  };
};
export const searchData = (word) => {
  return async (dispatch) => {
    const { data } = await axios.get(searchApi + word);
    dispatch({
      type: allMovies,
      data: data.results,
      pages: data.total_pages,
      search: word,
    });
  };
};
export const getPageData = (page, search) => {
  return async (dispatch) => {
    if (search !== "") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=98e3b56ae688beacd74b6c72af5777dc&language=ar&page=${page}&query=${search}`
      );
      setTimeout(function () {
        console.log(data);
        console.log(search);
      }, 5000);
      dispatch({
        type: pageMovies,
        data: data.results,
        pages: data.total_pages >= 500 ? 500 : data.total_pages,
      });
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=98e3b56ae688beacd74b6c72af5777dc&language=ar&page=${page}`
      );
      dispatch({
        type: pageMovies,
        data: data.results,
        pages: data.total_pages >= 500 ? 500 : data.total_pages,
      });
    }
  };
};
