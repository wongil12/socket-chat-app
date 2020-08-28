import React from 'react';

import './InfoBar.css'

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <div className="onlineIcon"></div>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><div className="closeIcon"></div></a>
            </div>
        </div>
    )
};

export default InfoBar;