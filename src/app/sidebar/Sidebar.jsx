import React from 'react';
import MessageBoxComponent from './message-box/MessageBox.jsx';

const SidebarComponent = (props) => {
    const { messages, handlers } = props;

    function createMessageBox() {
        if(!!messages && messages.length > 0) {
            return messages.map((x, i) => <MessageBoxComponent messageInfo={x} key={i} >
                <button onClick={() => deleteMessage(x) }>Delete message</button>
            </MessageBoxComponent>)
        }

        return null;
    }

    function deleteMessage(message) {
        return handlers.removeMessage(message);
    }
    
    return (
        <ul>
            { createMessageBox() }
        </ul>
    )
}

export default SidebarComponent;