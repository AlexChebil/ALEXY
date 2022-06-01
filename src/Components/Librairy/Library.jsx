import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie/Movie";
import "./Library.scss";
import TextField from "@mui/material/TextField";

function Library({ searchValue }) {
  const inputRef = useRef();
  const [movies, setMovies] = useState();
  const [sortBy, setSortBy] = useState("");
  const [searchMovie, setSearchMovie] = useState("");

  const API_KEY = "7d92cb02e1baca465546cf38e2de00f0";
  const BASE_URL = "https://api.themoviedb.org/3";
  const REQUEST = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
  const SEARCH_REQUEST = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchMovie}`;

  async function getMovies() {
    const rawData = await fetch(REQUEST);
    const data = await rawData.json();
    setMovies(data.results);
  }
  useEffect(() => {
    getMovies();
  }, []);

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
      <div className='flexContainer'>
        <div className='search'>
          <TextField
            inputRef={inputRef}
            id='outlined-basic'
            label='Search Movies'
            variant='outlined'
            color='warning'
          />
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

      <div className='movies'>
        {movies &&
          movies.map((movie, index) => <Movie key={index} movie={movie} />)}
      </div>
    </>
  );
}

export default Library;
