import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchActionMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  //   console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.original_title || movie?.name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">It not work</button>
          <button className="banner_button">It not Work</button>
        </div>
        {/* description */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner_fadeBottom"></div>

      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
    </header>
  );
};

export default Banner;
