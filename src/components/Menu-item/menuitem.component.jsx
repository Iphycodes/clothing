import React from 'react';

import '../Menu-item/menuitem.style.scss'

export const MenuItem = ({title, imageUrl, size}) => (
    <div className = {`${size} menu-item`}>
        <div className = "background-image" style={
        {backgroundImage: `url(${imageUrl})`
        // width: "100%",
        // height: "100%",
        // backgroundPosition: "center",
        // backgroundSize: "cover"
       
    }}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
) 