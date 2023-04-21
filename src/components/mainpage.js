import React from "react";
import "./mainpage.css";

function Picname() {
  return (
    <div className="picname">
      <table>
        <tr>
          <td className="image">
            <img src="./gigachad.jpg" alt="Mayank" />
          </td>
          <td>
            <h2> MAYANK ROY </h2>
          </td>
        </tr>
      </table>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <iframe title="Resume" src="./resources/resume.pdf" width="80%"></iframe>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Picname />
      <Resume />
    </div>
  );
}

export default Home;
