import React from 'react';

import './Message.css';

const Message = ({ message: { text, user }, name}) => {
    let isSentByCurrentuser = false;
    const trimmedName = name.trim().toLowerCase();
    
    if(user === trimmedName) {
        isSentByCurrentuser = true;
    }

    return (
        isSentByCurrentuser
        ?(
            <div className="messageContainer">
                <p className="sentText">{trimmedName}</p>
                <div className="messageBox">
                    <p className="messageText">{text}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer">
                <p className="sentText">{trimmedName}</p>
                <div className="messageBox">
                    <p className="messageText">{text}</p>
                </div>
                <p className="sentText">{user}</p>
            </div>
        )
    )
};

export default Message;