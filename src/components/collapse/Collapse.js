import React from 'react'
import { useState, useRef } from "react";
import arrow from "../../assets/images/arrows/arrow.png";
import './collapse.css'

const Collapse = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("collapse-icon");
    const content = useRef(null);

    function toggleCollapse() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
        setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );

        setRotateState(
            setActive === "active" ? "collapse-icon" : "collapse-icon rotation"
        );
    }
    return (
        <div className={"collapse-section"} id={props.id}>
            <button className={`collapse ${setActive}`} onClick={toggleCollapse}>
                <p className={"collapse-title"}>{props.title}</p>
                <img className={`arrow ${setRotate}`} src={arrow} alt="Flèche pour ouvrir l'accordéon"></img>
            </button>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className={"collapse-content"}>
                <div className={"collapse-text"}>{props.children}</div>
            </div>
        </div>
    );
};

export default Collapse;