import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "./MovieItem.js";
import { Row } from "react-bootstrap";
import Paginations from "./Paginations.js";
import { getAllData } from "../redux/actions/moviesActions.js";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getAllData());
  }, []);
  useEffect(() => {
    setMovies(data);
  }, [data]);
  return (
    <Row className="my-4">
      {movies.length ? (
        movies.map((ele, i) => {
          return <MovieItem key={i} element={ele} />;
        })
      ) : (
        <h3 className="text-center p-5">لا يوجد افلام ...</h3>
      )}
      {movies.length ? <Paginations /> : null}
    </Row>
  );
};

export default MoviesList;
