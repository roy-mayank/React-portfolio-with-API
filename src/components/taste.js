import React, { useState } from "react";
import "./taste.css";
import axios from "axios";

function ShowForm({ onSubmit }) {
  const [names, setNames] = useState(["", "", ""]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(names);
  };

  const handleNameChange = (index, value) => {
    setNames((prevNames) => {
      const newNames = [...prevNames];
      newNames[index] = value;
      return newNames;
    });
  };

  return (
    <div className="mixedform">
      <form onSubmit={handleSubmit}>
        <label>Enter 1st TV/Movie:</label>
        <input
          type="text"
          value={names[0]}
          onChange={(event) => handleNameChange(0, event.target.value)}
          required
        />
        <br />
        <br />

        <label>Enter 2nd TV/Movie:</label>
        <input
          type="text"
          value={names[1]}
          onChange={(event) => handleNameChange(1, event.target.value)}
          required
        />
        <br />
        <br />

        <label>Enter 3rd TV/Movie:</label>
        <input
          type="text"
          value={names[2]}
          onChange={(event) => handleNameChange(2, event.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Taste() {
  const [results, setResults] = useState([]);

  const handleSubmit = async (names) => {
    const replies = names.map((name) =>
      axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3bf98afbe95c4d4b4fd292ed2e9eedab&query=${name}`
      )
    );

    const responses = await Promise.all(replies);

    const movieIds = responses
      .map((response) => response.data.results[0]?.id)
      .filter((id) => id);

    const movieReplies = movieIds.map((id) =>
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3bf98afbe95c4d4b4fd292ed2e9eedab`
      )
    );

    const movieResponses = await Promise.all(movieReplies);

    const voteAverages = movieResponses.map(
      (movieResponse) => movieResponse.data.vote_average
    );

    const allVoteAverage =
      voteAverages.reduce((acc, curr) => acc + curr, 0) / voteAverages.length;

    setResults([allVoteAverage]);
  };

  return (
    <div className="maintaste">
      <h2>LET'S RATE YOUR TASTE</h2>
      <h3>CUZ WHY NOT?</h3>
      <br />
      <p>Welcome to the Taste Games:</p>
      <p>
        Soooooo, How this works is: You pick 3 tv/movies that come right outta
        yer head and we calculate a score for ye based on its popularity and
        ratings.
      </p>
      <p>Have fun ;)</p>
      <br />
      <ShowForm onSubmit={handleSubmit} />

      {results.length > 0 && (
        <>
          <div className="results">
            <h2>Your taste score is : </h2>
            <h2> {results[0].toFixed(1)}/10</h2>
          </div>
          <div className="proclamation">
            <p>
              {results[0] > 8 ? "W. You are sigma" : "Yea no, good try...LOSER"}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Taste;
