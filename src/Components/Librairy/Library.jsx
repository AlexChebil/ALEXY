import React, { useEffect, useState } from "react";
import Movie from "./Movie/Movie";
import "./Library.scss";

function Library() {
  const [movies, setMovies] = useState();
  const [sortBy, setSortBy] = useState("");

  const API_KEY = "7d92cb02e1baca465546cf38e2de00f0";
  const BASE_URL = "https://api.themoviedb.org/3";
  const REQUEST = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

  async function getMovies() {
    const rawData = await fetch(REQUEST);
    const data = await rawData.json();
    setMovies(data.results);
  }
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    sortFunction();
  }, [sortBy]);

  function sortFunction() {
    if (sortBy === "rating") {
      setMovies(movies.sort((a, b) => a.vote_average < b.vote_average));
    } else if (sortBy === "name") {
      setMovies(movies.sort((a, b) => a.title > b.title));
    }
  }

  return (
    <>
      <select
        name='sortMovies'
        id='sortMovies'
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        {/* inversed name and rating values because the render is delayed by a step
        from the state */}
        <option value='rating'>Name</option>
        <option value='name'>Rating</option>
      </select>

      <div className='movies'>
        {movies &&
          movies.map((movie, index) => <Movie key={index} movie={movie} />)}
      </div>
    </>
  );
}

export default Library;
