import React from 'react';
import SidebarComponent from './sidebar/Sidebar.jsx';
import FormComponent from './form/form-component.jsx';
import TextareaComponent from './form/input/textarea-component.jsx';
import './App.scss'

class AppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            newMessage: ''
        };

        this.removeMessage = this.removeMessage.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.textareaValueChange = this.textareaValueChange.bind(this);
        this.sidebarBilder = this.sidebarBilder.bind(this);
    }

    removeMessage(message) {
        this.setState(state => {
            let messages = state.messages;
            return {
                messages: messages.filter(x => x !== message)
            }
        });
    }

    formSubmit() {
        this.setState(state =>  {
            const messages = [...state.messages, {
                date: new Date().toLocaleString(),
                message: state.newMessage
            }];
            return {
                messages,
                newMessage: ''
            }
        })
    }

    textareaValueChange(value) {
        this.setState(() => {
            const newMessage = value;
            
            return {
                newMessage
            }
        })
    }

    sidebarBilder() {
        if(!!this.state.messages && this.state.messages.length > 0)
            return <SidebarComponent messages={ this.state.messages } handlers={{ removeMessage: this.removeMessage }}/>

        return <i>No messages</i>
    }


    render() {
        return (
            <div className="app-wrapper">
                <div className="sidebar-wrapper">
                    { this.sidebarBilder() }
                </div>

                <div className="form-wrapper">
                    <FormComponent handlers={{ formSubmit: this.formSubmit  }}>
                        <TextareaComponent 
                            handlers={{ valueChange: this.textareaValueChange }}
                            value={ this.state.newMessage } />
                    </FormComponent>
                </div>
            </div>
        )
    }
}

export default AppContainer;