import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessagesBox from "../MessagesBox";
import {normalizedComments} from '../fixtures'
import MessageForm from "../MessageForm";
import {Provider} from 'react-redux'
import store from '../store'
import {Grid} from "@material-ui/core"
import './chat.css'

class Chat extends Component {
    render() {
        return (
            <Provider store={store}>
                <Grid direction={"row"} lg={4}>
                    <MessagesBox messages={normalizedComments}/>
                    <MessageForm/>
                </Grid>
            </Provider>
        );
    }
}

Chat.propTypes = {};

export default Chat;
