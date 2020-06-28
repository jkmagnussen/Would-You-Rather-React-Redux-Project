import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navWrap">
      <ul className="nav">
        <li>
          <NavLink className="navTab" to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Tweet
          </NavLink>
        </li>
        <li className="loggedAs">
          Logged in as:
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
