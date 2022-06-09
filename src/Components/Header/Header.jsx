import React from "react";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className='header'>
        <h1 onClick={() => window.location.reload()}>ALEXY.</h1>
        <h1>Your Favorite Movies Picker Website.</h1>
      </div>
    </>
  );
}

export default Header;
