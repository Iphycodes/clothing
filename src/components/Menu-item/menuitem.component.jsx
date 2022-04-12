import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import '../Menu-item/menuitem.style.scss'




export const MenuItem = ({title, imageUrl, size, linkUrl}) => {

    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className = {`${size} menu-item`}>
        <div className = "background-image" onClick = {() => {navigate(`${location.pathname}${linkUrl}`)}} style={
        {backgroundImage: `url(${imageUrl})`
    }}>

    </div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    )
}