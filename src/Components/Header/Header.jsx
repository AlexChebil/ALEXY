import React from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className='header'>
        <h1 onClick={() => navigate(-1)}>ALEXY.</h1>
        <h2>Your Favorite Movies Picker.</h2>
      </div>
    </>
  );
}

export default Header;
