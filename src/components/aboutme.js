import React, { useState } from "react";
import "./aboutme.css";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name, number);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Pick a number between 1 and 10:
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          min="1"
          max="10"
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

function AboutMe() {
  const [decision, setDecision] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (name, number) => {
    setDecision("AaEeIiOoUu".includes(name[0]) && number > 5 ? "Y" : "N");
    setFormSubmitted(true);
  };

  return (
    <div className="portfolio">
      <main>
        <br />
        <br />
        <div>
          <h3> QUOTE OF THE DAY </h3>
          <br />
          <div className="quote">
            <p>
              "If you ain't a priority, try wailing and crying before giving up
              👍"
            </p>
          </div>
          <br /> <br />
        </div>
        <div>
          <Form onSubmit={handleFormSubmit} />
        </div>
        {formSubmitted && (
          <div className="likes">
            <h2> My Likes </h2>
            <p> I like {decision === "Y" ? "You" : "Maps and Geography"}</p>
            <h2> My Dislikes</h2>
            <p> I HATE {decision === "N" ? "You" : "Your Mum"}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default AboutMe;
