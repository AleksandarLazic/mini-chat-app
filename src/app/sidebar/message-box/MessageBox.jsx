import React from 'react';

const MessageBoxComponent = (props) => {
    const { date, message } = props.messageInfo;
    return (
        <li>
            <i>{ date }</i>
            <p>{ message }</p>
            {props.children}
        </li>
    )
}

export default MessageBoxComponent