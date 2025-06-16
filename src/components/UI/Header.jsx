import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">DOORVI</NavLink>
          </div>
          <nav>
            <ul className="towers">
              <p>Navigate to the following buildings:-</p>
              <li>
                <NavLink to={"/towerA"}>TowerA</NavLink>
              </li>
              <li>
                <NavLink to={"/towerB"}>TowerB</NavLink>
              </li>
              <li>
                <NavLink to={"/towerC"}>TowerC</NavLink>
              </li>
              <li>
                <NavLink to={"/towerD"}>TowerD</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
