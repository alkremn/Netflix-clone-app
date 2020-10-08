import React from "react";
import "./Banner.css";
import { useSelector } from "react-redux";
import { selectBannerMovie } from "./bannerMovieSlice";

const base_url = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const movie = useSelector(selectBannerMovie);

  return (
    <header
      className="banner"
      style={{ backgroundImage: `url(${base_url}${movie?.poster_path})` }}
    >
      <h1>{movie?.original_name}</h1>
      <div className="header__buttons">
        <button>Play</button>
        <button>MyList</button>
      </div>
      <p></p>
    </header>
  );
};

export default Banner;
