import React from 'react'
import Collapse from '../../components/collapse/Collapse'
import Stars from '../../components/stars/Stars'
import Tags from '../../components/tags/Tags'
import Gallery from '../../components/gallery/Gallery'
import data from '../../assets/data/data.json'
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./houseSheet.css";

const Housing = () => {
    const { id } = useParams();
    const [appartment, setAppartment] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let myAppartment = data.find((app) => app.id === id);
        myAppartment ? setAppartment(myAppartment) : navigate("/*")
    });

    return appartment ? (
        <section id={"appartment-description"}>
            <div id={"container-gallery"}>
                <Gallery pictures={appartment.pictures} title={appartment.title} />
            </div>
            <div id={"container-primary-infos"}>
                <div id={"container-logement-infos"}>
                    <h2 id={"active-name-location"}>{appartment.title}</h2>
                    <p id={"active-place-location"}>{appartment.location}</p>
                    <Tags tags={appartment.tags} />
                </div>
                <div id={"container-owner-stars"}>
                    <div id={"container-owner"}>
                        <div className={"owner"}>
                            <p id={"owner-name"}>{appartment.host.name}</p>
                            <img id={"owner-picture"} src={appartment.host.picture} alt={appartment.host.name} />
                        </div>
                    </div>
                    <div id={"evaluation"}>
                        <Stars rating={appartment.rating}></Stars>
                    </div>
                </div>
            </div>
            <div id={"collapses"}>
                <Collapse title={"Description"}>
                <p className={"description-logement-collapse"}>
                    {appartment.description}
                </p>
                </Collapse>
                <Collapse title={"??quipements"}>
                <ul className={"list-equipments"}>
                    {appartment.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
                </Collapse>
            </div>
        </section>
    ) : null;
}
export default Housing;