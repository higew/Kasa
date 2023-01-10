import React from 'react';
import { HouseCard } from "../houseCard/HouseCard";
import "./houseList.css";
import datas from '../../assets/data/data.json'
export const HouseList = () => {
    return (
        <section id={"houses-list"}>
        {datas.length === 0 && <p>Chargement ...</p>}
        {datas.map((logement, index) => {
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