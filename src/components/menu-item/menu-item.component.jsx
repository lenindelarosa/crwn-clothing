import React from "react";
import './menu-item.styles.scss'

const MenuItem = ({ title, key, imageUrl, size}) => (
    <div 
        className={`${size} menu-item`}
        key={key}>
        <div 
            className="backgound-image"
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;