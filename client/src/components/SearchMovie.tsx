import React from "react";
import { useState, useEffect } from "react";
import { Form, Image, ListGroup } from "react-bootstrap";
import { MovieInterface } from "../types/MovieInterface";
import axiosInstance from "../api/axiosInstance";
import "../assets/css/searchMovie.css";

type SearchProps = {
  MovieData: MovieInterface;
  setMovieData: Function;
};

type SearchDataType = {
  slug: string;
  results: Array<MovieInterface>;
};

const SearchMovie: React.FC<SearchProps> = ({
  MovieData,
  setMovieData,
}: SearchProps) => {
  const [SearchData, setSearchData] = useState<SearchDataType>({
    slug: "",
    results: [],
  });
  const [SelectedMovieIdx, setSelectedMovieIdx] = useState<number>();

  useEffect(() => {
    //api call
    if (SearchData.slug !== "" && !/^[\s]*$/.test(SearchData.slug)) {
      const timeoutID = setTimeout(async () => {
        const handleAPICall = async () => {
          const data = await axiosInstance.get("/search", {
            params: { q: SearchData.slug },
          });
          setSearchData({ ...SearchData, results: data.data });
        };
        await handleAPICall();
      }, 500);
      return () => clearTimeout(timeoutID);
    } else {
      setSearchData({ ...SearchData, results: [], slug: "" });
      setMovieData({ ...MovieData, id: "" });
    }
  }, [SearchData.slug]);

  const handleSelectMovie = (
    id: string,
    image: string,
    idx: number,
    title: string
  ) => {
    setMovieData({ ...MovieData, id, image, title });
    setSelectedMovieIdx(idx);
    console.log("selected: ", MovieData);
  };

  return (
    <div className="main-search-movie-container">
      <Form.Label>Search Movie</Form.Label>
      <Form.Control
        type="search"
        placeholder="Movie name"
        id="search-movie-bar"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchData({ ...SearchData, slug: e.target.value })
        }
      />
      <ListGroup as="ol" numbered className="search-results-list">
        {SearchData.results.map((movie, idx) => {
          return (
            <ListGroup.Item
              as="li"
              className={
                SelectedMovieIdx === idx
                  ? "d-flex justify-content-between align-items-start selected-movie"
                  : "d-flex justify-content-between align-items-start"
              }
              key={idx}
              onClick={() =>
                handleSelectMovie(movie.id, movie.image, idx, movie.title)
              }
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{movie.title}</div>
                {movie.description}
              </div>
              <Image
                src={movie.image.replace("original", "50x69")}
                width={50}
                fluid
                rounded
              ></Image>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default SearchMovie;
