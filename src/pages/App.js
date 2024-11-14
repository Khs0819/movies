import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../assets/css/style.css";
import NavBar from "../components/NavBar.js";
import MoviesList from "../components/MoviesList.js";
import MovieDetails from "../components/MovieDetails.js";
function App() {
  return (
    <div className="almarai-regular">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
