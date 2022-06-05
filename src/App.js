import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Library from "./Components/Librairy/Library";
import MoviePage from "./Components/MoviePage/MoviePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path='/movie/:id' element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
