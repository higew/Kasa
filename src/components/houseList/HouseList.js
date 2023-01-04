import React from 'react';
import { useEffect, useState } from "react";
import { HouseCard } from "../houseCard/HouseCard";
import "./houseList.css";

export const HouseList = () => {
    const [logements, setLogements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`data.json`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setIsLoading(false);
            setLogements(data);
        });
    }, []);

    return (
        <section id={"houses-list"}>
        {isLoading && <p>Chargement ...</p>}
        {logements.map((logement, index) => {
            return (
            <HouseCard
                nameLocation={logement.title}
                imgLocation={logement.cover}
                linkNumber={logement.id}
                key={index}
            />
            );
        })}
        </section>
    );
};