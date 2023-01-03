import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo-header.svg";
import "./header.css";
import home from "../../pages/home/Home";

const Header = () => {
  return (
    <header>
      <Link to={home}>
        <img id={"logo-header"} src={logo} alt={"logo en tête du site"} />
      </Link>
      <nav>
        <ul id={"menu"}>
          <li id={"menu-home"}>
            <NavLink
              to={home}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li id={"menu-about"}>
            <NavLink
              //to={about}
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