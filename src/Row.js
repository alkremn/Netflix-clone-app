import React, { useEffect, useState } from "react";
import { setBannerMovie } from "./bannerMovieSlice";
import { useDispatch } from "react-redux";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      return await axios
        .get(fetchUrl)
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    if (isLargeRow && movies.length > 0) {
      const movie = movies[Math.floor(Math.random() * movies.length - 1)];
      dispatch(setBannerMovie(movie));
    }
  }, [movies, dispatch, isLargeRow]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path &&
            movie.poster_path && (
              <img
                className={`row__poster ${isLargeRow && `row__posterLarge`}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.names}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
