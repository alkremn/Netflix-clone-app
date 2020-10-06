import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(fetchUrl)
        .then((response) => setMovies(response.data.results))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && `row__posterLarge`}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.names}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
