import React, { useEffect, useState } from "react";
import Movie from "./Movie/Movie";
import "./Library.scss";

function Library() {
  const [movies, setMovies] = useState();

  const API_KEY = "7d92cb02e1baca465546cf38e2de00f0";
  const BASE_URL = "https://api.themoviedb.org/3";
  const REQUEST = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

  async function getMovies() {
    const rawData = await fetch(REQUEST);
    const data = await rawData.json();
    setMovies(data);
    console.log(movies.results);
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <select name='a' id=''>
        <option value='rating'>Rating</option>
        <option value='name'>Name</option>
      </select>
      {/*
      // replace it with MUI */}

      <div className='movies'>
        {movies &&
          movies.results.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
      </div>
    </>
  );
}

export default Library;
