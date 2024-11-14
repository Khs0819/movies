// import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../assets/images/image.png";
import { useDispatch } from "react-redux";
import { searchData, getAllData } from "../redux/actions/moviesActions";
const NavBar = () => {
  // const [letter, setLetter] = useState("");
  const dispatch = useDispatch();
  async function search(word) {
    // setLetter(word);
    if (word.length !== 0) {
      dispatch(searchData(word));
    } else {
      dispatch(getAllData());
    }
  }

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="py-2  align-items-center">
          <Col xs="2" lg="1">
            <img className="logo" src={img} alt="Logo" />
          </Col>
          <Col className="d-flex align-items-center p-relative" xs="10" lg="11">
            <input
              className="search form-control"
              type="text"
              placeholder="ابحث هنا ..."
              onChange={(e) => search(e.target.value)}
            />
            <i className="fa fa-search"></i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavBar;
