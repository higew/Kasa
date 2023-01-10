import React from 'react'
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
    return (
        <div className={"error-container"}>
            <h1 id={"title-error"}>404</h1>
            <p id={"description-error"}>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to={"/"} id={"link-home"}>
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
};

export default Error;