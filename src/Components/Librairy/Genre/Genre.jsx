import React from "react";
import "./Genre.scss";

function Genre({ genre }) {
  return (
    <>
      <div className='genre'>
        <h2>{genre.name} </h2>
      </div>
    </>
  );
}

export default Genre;
