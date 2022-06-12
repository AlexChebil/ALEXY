import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className='header'>
        <h1 id='h1Header' onClick={() => navigate(-1)}>
          ALEXY.
        </h1>
        {window.innerWidth >= 550 ? (
          <h2>Your Favorite Movies Picker.</h2>
        ) : null}
      </div>
    </>
  );
}

export default Header;
