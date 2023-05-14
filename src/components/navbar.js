import React from "react";
import "./mainpage.css";
import { Link, useMatch } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <h3>ROY</h3>
        <h3>MAYANK</h3>
      </div>
      <div className="navbarlinks">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/aboutme">About Me</CustomLink>
        <CustomLink to="/taste">Taste</CustomLink>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const match = useMatch(to);

  return (
    <Link to={to} className={match ? "active" : ""} {...props}>
      {children}
    </Link>
  );
}

export default NavBar;
