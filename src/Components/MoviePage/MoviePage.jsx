import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgressWithLabel from "../../MUI/CircularWithLabel";
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
          <img
            id='posterIMG'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=''
          />
          <div className='description'>
            <p id='originalTitle'>{movie.original_title}</p>
            <h2>{movie.tagline} </h2>
            <h1>As It's Original Title</h1>

            <p id='overview'>{movie.overview}</p>
          </div>

          <div className='FlexCont'>
            <h2>
              Budget :$
              {movie.budget
                .toString()
                .match(/.{1,3}/g)
                .join(",")}
            </h2>

            <h2>
              {movie.popularity} Popularity With A {movie.runtime}-Mins Runtime{" "}
            </h2>

            <h2>
              {movie.status} On The {movie.release_date}
            </h2>

            <h2>
              Revenue :$
              {movie.revenue
                .toString()
                .match(/.{1,3}/g)
                .join(",")}
            </h2>
          </div>

          <div className='FlexCont'>
            <div className='flex'>
              <h1>Countries</h1>
              <div>
                {movie.production_countries.map((country) => (
                  <span className='pills' key={Math.random()}>
                    {country.name}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex'>
              <h1>Production Compagnies</h1>
              <div>
                {movie.production_companies.map((companie) => (
                  <span className='pills' key={companie.id}>
                    {companie.name}{" "}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex'>
              <h1>Languages</h1>
              <div>
                {movie.spoken_languages.map((language) => (
                  <span className='pills' key={language.iso_639_1}>
                    {language.english_name}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='imgAndGenre'>
            <div className='genreContainer'>
              <h1>Genres</h1>

              <div>
                {movie.genres.map((genre) => (
                  <span className='pills' key={genre.id}>
                    {genre.name}
                  </span>
                ))}
              </div>

              <a href={`${movie.homepage}`} target='blank'>
                Homepage
              </a>

              <div className='rating'>
                <CircularProgressWithLabel
                  className='CircularProgress'
                  value={movie.vote_average * 10}
                />
                <span>{movie.vote_count} Votes</span>
              </div>
            </div>

            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt=''
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MoviePage;
