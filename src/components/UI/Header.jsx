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
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
