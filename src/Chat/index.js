import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessagesBox from "../MessagesBox";
import {normalizedComments} from '../fixtures'
import MessageForm from "../MessageForm";
import {Provider} from 'react-redux'
import store from '../store'
import './chat.css'

class Chat extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='chat'>
                    <MessagesBox messages={normalizedComments}/>
                    <MessageForm/>
                </div>
            </Provider>
        );
    }
}

Chat.propTypes = {};

export default Chat;
