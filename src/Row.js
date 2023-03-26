import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";

const base_url = "http://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchUrl);
      // console.table(request.data.results);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
    // we need to tell useEffect we are using fetchUrl(outsider) so that useEffect runs on changing fetchUrl
  }, [fetchUrl]);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row posters */}
        {movies.map((movie) => {
          // console.log("jj", movie);
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>

      {/* container->poster */}
    </div>
  );
};

export default Row;
