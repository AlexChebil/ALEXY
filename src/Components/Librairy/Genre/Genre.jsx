import React from "react";
import "./Genre.scss";

function Genre({ genre, setSelectedGenreID, setSelectedGenreName }) {
  function getGenre() {
    setSelectedGenreID(genre.id);
    setSelectedGenreName(genre.name);
  }
  return (
    <>
      <div className='genre'>
        <h2 onClick={getGenre}>{genre.name} </h2>
      </div>
    </>
  );
}

export default Genre;
