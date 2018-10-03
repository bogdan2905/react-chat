import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MessageForm.css'

class MessageForm extends Component {
    constructor(props) {
        super(props);

        this.textArea = React.createRef();

        this.state = {
            message: ''
        }
    }

    render() {
        return (
            <form className='message-form'>
                <textarea
                    onChange={this.handleKeyDown}
                    value={this.state.message}
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
            console.log(this.state.message);
            this.setState({message: ''});
            e.preventDefault();
        }else{
            this.setState({message: e.target.value})
        }
    }

}


MessageForm.propTypes = {};

export default MessageForm;
