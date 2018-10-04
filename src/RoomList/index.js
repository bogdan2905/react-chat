import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Room from "../Room";
import AddIcons from "@material-ui/icons/Add"
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import {Grid, ListItem, List, withStyles, Paper} from '@material-ui/core'
import './room-list.css'


const style = {
    Button: {
        margin: "0 auto"
    },
    Paper: {
        height: "98%"
    }
};

class RoomList extends Component {
    render() {
        const {rooms, classes} = this.props;
        const roomsElems = rooms.map(room => <ListItem key={room._id}><Room room={room}/></ListItem>);
        return (
            <Grid direction={"column"} md={1} sm={1} lg={1} justify={"center"}>
                <Paper className={classes.Paper}>
                    <List>
                        {roomsElems}
                        <ListItem>
                            <Button variant="fab" color="primary">
                                <AddIcons/>
                            </Button>
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        );
    }
}

/*<div className="room-list">
                <ul>
                    {roomsElems}
                    <Button variant="fab" color="primary" style={style.Button}>
                        <AddIcons/>
                    </Button>
                </ul>
            </div>*/
RoomList.propTypes = {};

export default withStyles(style)(RoomList);
