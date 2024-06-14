import React from 'react';

function TopicButton({ name, className, url }) {
    return (
        <div className={`topic topic-wrapper ${className}`}>
            <div className="topic topic-name"><p>{name}</p></div>
            <div className="topic topic-image">
                <div className="topic topic-image overlay">
                    <img src={url} className={`${className}_image`} alt={name} />
                </div>
            </div>
        </div>
    );
}

export default TopicButton;