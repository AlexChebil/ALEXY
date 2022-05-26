import React, { useRef } from "react";
import "./Header.scss";
import TextField from "@mui/material/TextField";

function Header() {
  const searchInputRef = useRef();

  /* Listening for the enter key to be pressed. */
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchInputRef.current && console.log(searchInputRef.current.value);
    }
  });

  return (
    <>
      <div className='header'>
        <h1>ALEXY.</h1>

        <div className='search'>
          <TextField
            inputRef={searchInputRef}
            id='outlined-basic'
            label='Search Movies'
            variant='outlined'
          />
        </div>
      </div>
    </>
  );
}

export default Header;
