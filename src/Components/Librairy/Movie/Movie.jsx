import React from "react";
import "./Movie.scss";

function Movie({ movie }) {
  return (
    <>
      <div className='movie'>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=''
        />
        <h1> {movie.title} </h1>
        <h2>{movie.release_date} </h2>
        <h2>{movie.vote_average} </h2>
        <h3>{movie.overview} </h3>
      </div>
    </>
  );
}

export default Movie;
