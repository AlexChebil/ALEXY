import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie/Movie";
import TextField from "@mui/material/TextField";
import Genre from "./Genre/Genre";
import "./Library.scss";
import "./LibraryMediaQ.scss";

function Library() {
  const inputRef = useRef();

  const [movies, setMovies] = useState();
  const [sortBy, setSortBy] = useState("");

  const [searchMovie, setSearchMovie] = useState("");

  const [genres, setGenres] = useState();
  const [selectedGenreID, setSelectedGenreID] = useState();
  const [selectedGenreName, setSelectedGenreName] = useState();

  //API ROUTES

  const API_KEY = "7d92cb02e1baca465546cf38e2de00f0";
  const BASE_URL = "https://api.themoviedb.org/3";

  const REQUEST = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
  const GENRES_REQUEST = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  const SEARCH_REQUEST = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchMovie}`;
  const SELECTED_GENRE_REQUEST = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenreID}`;

  async function getMovies() {
    const rawData = await fetch(REQUEST);
    const data = await rawData.json();
    setMovies(data.results);
  }
  async function getGenres() {
    const rawData = await fetch(GENRES_REQUEST);
    const data = await rawData.json();
    setGenres(data.genres);
  }

  async function getMoviesBySearch() {
    if (searchMovie) {
      const rawData = await fetch(SEARCH_REQUEST);
      const data = await rawData.json();
      setMovies(data.results);
    }
  }

  async function getMoviesWithGenre() {
    const rawData = await fetch(SELECTED_GENRE_REQUEST);
    const data = await rawData.json();
    setMovies(data.results);
  }

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  useEffect(() => {
    getMoviesBySearch();
  }, [searchMovie]);

  useEffect(() => {
    getMoviesWithGenre();
  }, [selectedGenreID]);

  function sortFunction() {
    if (sortBy === "rating") {
      setMovies(movies.sort((a, b) => a.vote_average < b.vote_average));
    } else if (sortBy === "name") {
      setMovies(movies.sort((a, b) => a.title > b.title));
    }
  }

  useEffect(() => {
    sortFunction();
  }, [sortBy]);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      inputRef.current && setSearchMovie(inputRef.current.value);
    }
  });

  return (
    <>
      <div className='flexContainer '>
        <div className='search'>
          <TextField
            inputRef={inputRef}
            id='outlined-basic'
            label='Search Movies'
            variant='outlined'
            color='warning'
          />
        </div>

        <div className='searchedFor'>
          {inputRef.current && inputRef.current.value ? (
            <div>
              <h2> You Searched For :</h2>
              <h1>{inputRef.current.value.toUpperCase()} </h1>
            </div>
          ) : null}
        </div>
        <div className='selectDropdown'>
          <select
            name='sortMovies'
            id='sortMovies'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {/* inversed name and rating values because the render is delayed by a step
        from the state */}
            <option value='' disabled>
              Sort BY
            </option>
            <option value='rating'>Name</option>
            <option value='name'>Rating</option>
          </select>
        </div>
      </div>

      <h1 id='selectedGenreName'>{selectedGenreName} </h1>

      <div className='genreAndMovies'>
        {genres || movies ? null : (
          <h1 className='fetching'>Fetching Data Please Wait...????</h1>
        )}
        <div className='genre blur-in-expand-genre'>
          <h1>Genres</h1>
          {genres &&
            genres.map((genre) => (
              <Genre
                key={genre.id}
                genre={genre}
                setSelectedGenreID={setSelectedGenreID}
                setSelectedGenreName={setSelectedGenreName}
              />
            ))}
        </div>

        <div className='movies'>
          {movies &&
            movies.map((movie, index) => <Movie key={index} movie={movie} />)}
          {movies && movies.length === 0 ? (
            <h1> Unfortunately This Movie Doesn't Exist.???? </h1>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Library;
