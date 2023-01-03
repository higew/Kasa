import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-footer.svg";
import home from "../../pages/home/Home";

const Footer = () => {
  return (
    <footer>
      <Link to={home}>
        <img id={"logo-footer"} src={logo} alt={"logo pied de page du site"} />
      </Link>
      <p id={"copyrights"}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;