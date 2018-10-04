import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {sendMessages} from '../AC'
import {connect} from 'react-redux'
import './MessageForm.css'


class MessageForm extends Component {
    constructor(props) {
        super(props);

        this.textArea = React.createRef();

        this.state = {
            user: 'bogdan',
            text: ''
        }
    }

    render() {
        return (
            <form className='message-form'>
                <textarea
                    onChange={this.handleKeyDown}
                    value={this.state.text}
                    onKeyDown={this.handleKeyDown}
                    ref={this.textArea}
                    placeholder='Type Message ...'/>
            </form>
        );
    }

    textAreaAdjust = () => {
        this.textArea.current.style.height = "1px";
        this.textArea.current.style.height = (25 + this.textArea.current.scrollHeight) + "px";
    };

    handleKeyDown = (e) => {
        if(e.keyCode === 13)
        {
            this.props.sendMessages(this.state);
            this.setState({text: ''});
            e.preventDefault();
        }else{
            this.setState({text: e.target.value})
        }
    }

}


MessageForm.propTypes = {};

export default connect(null, {sendMessages})(MessageForm);
