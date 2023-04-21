import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/mainpage";
import { Route, Routes } from "react-router-dom";
import Home from "./components/mainpage";
import Me from "./components/me";
import Geography from "./components/geography";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element="<Me />" />
          <Route path="/geography" element="<Geography />" />
        </Routes>
      </div>
    </>
  );
}

export default App;
