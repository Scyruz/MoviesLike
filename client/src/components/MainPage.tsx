import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../assets/css/main.css";
import MovieList from "./MovieList";
import SearchMovie from "./SearchMovie";
import { MovieInterface } from "../types/MovieInterface";
import axiosInstance from "../api/axiosInstance";

export default function MainPage(): JSX.Element {
  const [MovieData, setMovieData] = useState<MovieInterface>({
    title: "",
    id: "",
    description: "",
    image: "",
    resultType: "",
  });
  const [SuggestionsList, setSuggestionsList] = useState<MovieInterface[]>([]);

  const handleSumbit = async () => {
    const data = await axiosInstance.get("/like", {
      params: {
        q: MovieData.title,
      },
    });
    setSuggestionsList(data.data);
  };

  return (
    <div>
      <Container fluid className="main-container">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Container className="form-container">
              <h2
                style={{ textAlign: "center", margin: "1rem 1rem 5rem 1rem" }}
              >
                I want to watch movies like:
              </h2>
              <SearchMovie
                MovieData={MovieData}
                setMovieData={setMovieData}
              ></SearchMovie>
              <Button
                variant="danger"
                onClick={handleSumbit}
                style={{ width: "100%", marginTop: "1.5rem" }}
              >
                Submit
              </Button>
            </Container>
          </Col>
        </Row>
        <Row>
          <MovieList movies={SuggestionsList}></MovieList>
        </Row>
      </Container>
    </div>
  );
}
