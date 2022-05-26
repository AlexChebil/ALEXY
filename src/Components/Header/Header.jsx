import React, { useRef } from "react";
import "./Header.scss";
import TextField from "@mui/material/TextField";

function Header() {
  const first = useRef();

  function aa(e) {
    /*  event.addEventListener(
         if (condition) {
             
         } 
      )
    if (event.keyCode === 13) {
      console.log("prop.current.value");
    } */
    // WILL ADD EVENT LISTENER LATER
  }

  return (
    <>
      <div className='header'>
        <h1>ALEXY.</h1>

        <div className='search'>
          <TextField
            inputRef={first}
            id='outlined-basic'
            label='Movies'
            variant='outlined'
            onClick={(event) => aa(event)}
          />
          <button onClick={() => aa(first)}>Search</button>
        </div>
      </div>
    </>
  );
}

export default Header;
