import React from 'react';
import './MenuItem.scss';
import {withRouter} from 'react-router-dom';
//the div that cointains the image is inside the containing div because we don't want the div to get bigger, only the image
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div
        className={`${size} menu-item`}
        onClick = {() => history.push(`${match.url}${linkUrl}`)}
        >

        <div 
            className="background-image"  
            style={{backgroundImage:`url(${imageUrl})`}}

        />
        
        <div className='content'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);