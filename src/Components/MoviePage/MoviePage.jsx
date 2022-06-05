import React, { useState } from "react";
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
    console.log(data);
  }

  getGenres();

  return (
    <>
      <div>
        <h1>Movie ID : {id} </h1>
      </div>
    </>
  );
}

export default MoviePage;
