import React, {Component} from 'react';
import Chat from "./Chat";
import Room from "./Room";
import RoomList from "./RoomList";
import arr from './generated'
import {Grid} from "@material-ui/core"

class App extends Component {
    render() {
        return (
            <Grid container>
                <RoomList rooms={arr}/>
                <Chat/>
            </Grid>
        );
    }
}

export default App;


