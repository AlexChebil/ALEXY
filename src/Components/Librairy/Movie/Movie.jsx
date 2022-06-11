import React from "react";
import { Link } from "react-router-dom";
import "./Movie.scss";

function Movie({ movie }) {
  /* Taking the release date and splitting it into an array, then slicing the array to only show the
first 4 characters, then joining the array back into a string. */
  const date =
    movie.release_date && movie.release_date.split("").slice(0, 4).join("");
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={`/movie/${movie.id}`}>
        <div className='movie blur-in-expand'>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=''
          />
          <div className='movieTitleVoteDate'>
            <h1> {movie.title} </h1>

            <h4>
              TMBD <span className='vote'>{movie.vote_average}</span>
            </h4>
          </div>

          <div className='movieTitleVoteDate'>
            <h2> Year </h2>
            <h2>{date}</h2>
            <h2>{movie.original_language.toUpperCase()}</h2>
          </div>

          <div>
            <h1 id='overview'>OVERVIEW </h1>
            <p>{movie.overview} </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Movie;
