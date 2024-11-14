import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieDetails = async () => {
  const movies = useSelector((state) => state.movies);
  const { id } = useParams();
  let [movie, setMovie] = useState({});
  const getDataById = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=98e3b56ae688beacd74b6c72af5777dc&language=ar`
    );
    setMovie(data);
  };
  async function getMovieDetails() {
    if (movies.length !== 0) {
      let movie = movies.find((ele) => {
        return ele.id == id;
      });
      setMovie(movie);
    } else {
      getDataById();
    }
  }
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      <Row>
        <Col
          md="12"
          xs="12"
          sm="12"
          className="mt-4 d-flex align-items-center content"
        >
          <img
            className="image"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="photo"
          />
          <div className="details text-center mx-auto fs-4">
            <p>اسم الفيلم: {movie.title}</p>
            <p>تاريخ الفيلم: {movie.release_date}</p>
            <p>عدد المقييمين: {movie.vote_count}</p>
            <p>التقييم: {movie.vote_average}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12" xs="12" sm="12" className="mt-4">
          <h2>القصة: </h2>
          <p>{movie.overview}</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center gap-3">
          <Link to="/">
            <button className="button">عودة للرئيسية</button>
          </Link>
          <a href={movie.homepage ? movie.homepage : "#"}>
            <button className="button">مشاهدة الفيلم</button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
