import React from 'react'
import './tags.css'

function Tags({ tags }) {
    return (
        <div className="tags">
            {tags.map((tag, key) => (
            <div className="tag" key={key}>
                <p>{tag}</p>
            </div>
            ))}
        </div>
    );
}

export default Tags;