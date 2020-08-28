import React from 'react';

import './TextContainer.css';


const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <h1>실시간 채팅</h1>
        </div>
        {
            users
            ? (
                <div>
                    <h1>Chatting</h1>
                    <div className="activeContainer">
                        <h2>
                            {users.map((name) => {
                                console.log(name);
                                return (
                                <div key={name} className="activeItem">
                                    {name.name}
                                    <div className="onlineIcon"></div>
                                </div>
                            )})}
                        </h2>
                    </div>
                </div>
            ) : null
        }
    </div>
);

export default TextContainer;