import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/mainpage";
import AboutMe from "./components/aboutme";
import Taste from "./components/taste";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/taste" element={<Taste />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
