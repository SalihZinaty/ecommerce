import React from 'react';
import './MenuItem.scss';
//the div that cointains the image is inside the containing div because we don't want the div to get bigger, only the image
const MenuItem = ({title, imageUrl, size}) => (
    <div
        className={`${size} menu-item`}>
        <div className="background-image"  
            style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className='content'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;