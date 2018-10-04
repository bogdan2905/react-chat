import React, {Component} from 'react';
import Chat from "./Chat";
import Drawing from './Drawing'
import RoomList from "./RoomList";
import arr from './generated'
import {Grid} from "@material-ui/core"

class App extends Component {
    render() {
        return (
            <Grid container xs={12} md={12} alignContent={"space-around"} style={{padding: "1%"}}>
                <RoomList rooms={arr}/>
                <Chat/>
                <Drawing/>
            </Grid>
        );
    }
}

export default App;


