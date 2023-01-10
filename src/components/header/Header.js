import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo-header.svg";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img id={"logo-header"} src={logo} alt={"logo en tête du site"} />
      </Link>
      <nav>
        <ul id={"menu"}>
          <li id={"menu-home"}>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li id={"menu-about"}>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;