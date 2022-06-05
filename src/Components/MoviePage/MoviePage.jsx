import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.scss";

function MoviePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState();

  const API_KEY = "7d92cb02e1baca465546cf38e2de00f0";
  const BASE_URL = "https://api.themoviedb.org/3";
  const SELECTED_MOVIE_REQUEST = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

  async function getMovie() {
    const rawData = await fetch(SELECTED_MOVIE_REQUEST);
    const data = await rawData.json();
    setMovie(data);
    console.log(movie);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {movie && (
        <div className='movieContainer'>
          <h1>{movie.title}</h1>
          <h2>{movie.tagline} </h2>

          <img
            id='backdropIMG'
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt=''
          />

          <div className='genreContainer'>
            <h1>Genres:</h1>
            <div>
              {movie.genres.map((genre) => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </div>
          </div>

          <a href={`${movie.homepage}`} target='blank'>
            Homepage
          </a>

          <h2>Original Title:{movie.original_title} </h2>
          <h2>Overview:{movie.overview} </h2>
          <h2>Popularity {movie.popularity} </h2>
          <h2>Status: {movie.status} </h2>
          <h2>Rating: {movie.vote_average}/10 </h2>
          <h2>Rating Count: {movie.vote_count} Votes </h2>

          <div>
            <h1>Production Compagnies:</h1>
            <div>
              {movie.production_companies.map((companie) => (
                <h4 key={companie.id}>{companie.name} </h4>
              ))}
            </div>
          </div>

          <div>
            <h1>Countries:</h1>
            <div>
              {movie.production_countries.map((country) => (
                <h3 key={Math.random()}>{country.name} </h3>
              ))}
            </div>
          </div>

          <div>
            <h1>Languages:</h1>
            <div>
              {movie.spoken_languages.map((language) => (
                <span key={language.iso_639_1}>{language.english_name} </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviePage;
