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
        margin: "0 auto",
    },
    Paper: {
        height: "100%",
    },
    List: {
        height: "100%",
        overflow: "auto"
    }
};

class RoomList extends Component {
    render() {
        const {rooms, classes} = this.props;
        const roomsElems = rooms.map(room => <ListItem button disableGutters key={room._id}><Room room={room}/></ListItem>);
        return (
            <Grid md={1} sm={1} lg={1} item style={{paddingRight: "10px"}} alignContent={"center"}>
                <Paper className={classes.Paper}>
                    <List className={classes.List}>
                        {roomsElems}
                        <ListItem disableGutters selected>
                            <Button variant="fab" color="primary" className={classes.Button}>
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
