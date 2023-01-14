import React from 'react'
import { useState } from "react"
import leftArrow from "../../assets/images/arrows/left-arrow.png"
import rightArrow from "../../assets/images/arrows/right-arrow.png"
import "./gallery.css"

function Gallery(props) {
    const { pictures, title } = props;
    const [activeIndex, updateActiveIndex] = useState(0);

    const prevImgIndex = activeIndex ? activeIndex - 1 : pictures.length - 1;
    const nextImgIndex = activeIndex === pictures.length - 1 ? 0 : activeIndex + 1;
    
    if(pictures.length !== 1) {
        return (
            <section className="gallery">
                <div className="container">
                    <img onClick={() => updateActiveIndex(prevImgIndex)} className="leftArrow" src={leftArrow} alt="left arrow" />
                    <img src={pictures[activeIndex]} alt={title} className="gallery--image" />
                    <img onClick={() => updateActiveIndex(nextImgIndex)} className="rightArrow" src={rightArrow} alt="right arrow" />
                    <span className="nbPhoto">
                        {activeIndex + 1} / {pictures.length}
                    </span>
                </div>
            </section>
        );
    }
    else {
        return (
            <section className="gallery">
                <div className="container">
                    <img src={pictures[activeIndex]} alt={title} className="gallery--image" />
                </div>
            </section>
        );
    }
}

export default Gallery;