import React from "react";
import "./mainpage.css";
import resumePdf from "./resume.pdf";
import linkedinPfp from "./my linkedin pfp.jpg";

function Picfolio() {
  return (
    <>
      <div className="picname">
        <div>
          <img src={linkedinPfp} alt="mayank" />
        </div>
        <div>
          <h1> MY PORTFOLIO </h1>
          <br />
          <h4> USING REACT.JS </h4>
        </div>
      </div>
      <div className="quote">
        <p>"IT IS WHAT IT IS"</p>
      </div>
    </>
  );
}

function Resume() {
  return (
    <div className="resume">
      <iframe title="Resume" src={resumePdf} alt="resume" />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Picfolio />
      <Resume />
    </div>
  );
}

export default Home;
