import React from "react";
import { NavLink } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
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
                <FaBuilding />
                <NavLink to={"/towerA"}>TowerA</NavLink>
              </li>
              <li>
                <FaBuilding />
                <NavLink to={"/towerB"}>TowerB</NavLink>
              </li>
              <li>
                <FaBuilding />
                <NavLink to={"/towerC"}>TowerC</NavLink>
              </li>
              <li>
                <FaBuilding />
                <NavLink to={"/towerD"}>TowerD</NavLink>
              </li>
              <li>
                <AiFillHome />
                <NavLink to={"/"}>Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
