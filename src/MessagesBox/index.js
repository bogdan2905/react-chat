import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from "../Message";
import './MessagesBox.css'

class MessagesBox extends Component {
    render() {
        const {messages} = this.props;
        const messagesElements = messages.map(msg => <li key={msg.id}><Message message={msg}/></li>);
        return (
            <div className='message-box'>
                <ul>
                    {messagesElements}
                </ul>
            </div>
        );
    }
}

MessagesBox.propTypes = {
    messages: PropTypes.array.isRequired
};

export default MessagesBox;
