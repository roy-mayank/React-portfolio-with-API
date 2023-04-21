import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">My Portfolio</Link>
      <ul>
        <CustomLink to="/me"> Me </CustomLink>
        <CustomLink to="/humor"> Humor </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);

  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
