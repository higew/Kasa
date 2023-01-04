import React from 'react';
import "./houseCard.css";
import { Link } from "react-router-dom";

export const HouseCard = ({ nameLocation, imgLocation, linkNumber }) => {
    return (
        <div className={"card"}>
        <Link to={`/housesheet/${linkNumber}`}>
            <img
            className={"cover-location"}
            src={imgLocation}
            alt={"photo location " + nameLocation}
            />
            <p className={"name-location"}>{nameLocation}</p>
        </Link>
        </div>
    );
};