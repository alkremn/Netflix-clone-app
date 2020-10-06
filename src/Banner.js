import React, { useState, useEffect, useContext } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

const Banner = () => {
  const [movie, setMovie] = useState({});

    useEffect(() => {
      
        setMovie(useContext()


    // const fetchData = async () => {
    //   await axios
    //     .get(requests.fetchNetflixOriginals)
    //     .then((response) => {
    //       const movies = response.data.results;
    //       console.log(movies);
    //       const randIndex = Math.floor(
    //         Math.random() * Math.floor(movies.length) - 1
    //       );
    //       setMovie(movies[randIndex]);
    //     })
    //     .catch((error) => console.log(error));
    // };
    // fetchData();
  }, []);

  return (
    <header className="banner">
      <h1>{movie.original_name}</h1>
      <div className="header__buttons">
        <button>Play</button>
        <button>MyList</button>
      </div>
      <p></p>
    </header>
  );
};

export default Banner;
