import React from 'react'
import fullStar from "../../assets/images/stars/full-star.png";
import emptyStar from "../../assets/images/stars/empty-star.png";

function Stars({ rating }) {
    let content = [];
    if (rating < 5) {
        for (let i = 0; i < rating; i++) {
        content.push(<img key={`key${i}`} className="star" src={fullStar} alt="star" />);
        }
        for (let i = rating; i < 5; i++) {
        content.push(<img key={`key${i}`} className="star" src={emptyStar} alt="star" />);
        }
    } else {
        for (let i = 0; i < rating; i++) {
        content.push(<img key={`key${i}`} className="star" src={fullStar} alt="star" />);
        }
    }

    return <div>{content}</div>;
}

export default Stars;