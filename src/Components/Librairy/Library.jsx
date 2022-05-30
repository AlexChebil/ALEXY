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
  }, [sortBy]);

  switch (true) {
    case sortBy === "rating":
      //const a = movies.filter((entry) => entry.title === "Morbius");

      break;

    case sortBy === "release":
      console.log("release");
      break;
    default:
      console.log("default");
      break;
  }

  return (
    <>
      <select
        name='sortMovies'
        id='sortMovies'
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value='rating'>Rating</option>
        <option value='release'>Release</option>
      </select>

      <div className='movies'>
        {movies &&
          movies.map((movie, index) => <Movie key={index} movie={movie} />)}
      </div>
    </>
  );
}

export default Library;
