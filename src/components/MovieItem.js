import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieItem = ({ element }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-2 col">
      <Link to={`/movie/${element.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
            alt="movie"
            className="card-image"
          />
          <div className="card-layout">
            <div className="card-content">
              <p>اسم الفلم: {element.title}</p>
              <p>تاريخ الاصدار: {element.release_date}</p>
              <p>عدد المقييمين: {element.vote_count}</p>
              <p>التقييم: {element.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};
export default MovieItem;
