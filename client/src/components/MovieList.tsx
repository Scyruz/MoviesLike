import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { MovieInterface } from "../types/movie";
import React from "react";
import "../assets/css/card.css";

type Movies = {
  movies: Array<MovieInterface>;
};

const MovieList: React.FC<Movies> = ({ movies }: Movies) => {
  console.log(movies);
  return (
    <div>
      <Container>
        <Row>
          {movies.map((movie) => {
            return (
              <div>
                <Col md={6}>
                  <Card
                    className="custom-movie-card"
                    style={{
                      width: "18rem",
                      borderRadius: "1rem",
                      border: "none",
                    }}
                    id={movie.id}
                  >
                    <Card.Img
                      variant="top"
                      src={movie.image}
                      style={{ borderRadius: "1rem" }}
                    />
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <small className="text-muted">{movie.description}</small>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default MovieList;
