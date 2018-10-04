import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from "../Message";
import {connect} from 'react-redux'
import {Grid, ListItem, List, Paper, withStyles} from "@material-ui/core"
import './MessagesBox.css'

const style = {
    MessageBox: {
        height: "80vh",
        overflow: "auto",
    },
};

class MessagesBox extends Component {
    render() {
        const {messages, classes} = this.props;
        const messagesElements = messages.map(msg => <ListItem key={msg.id}><Message message={msg}/></ListItem>);
        return (
            <Paper className={classes.MessageBox}>
                <Grid>
                    <List className={classes.List}>
                        {messagesElements}
                    </List>
                </Grid>
            </Paper>
        );
    }
}

MessagesBox.propTypes = {
    messages: PropTypes.array.isRequired
};

export default connect(({messages}) => {
    return {
        messages
    }
})(withStyles(style)(MessagesBox));
