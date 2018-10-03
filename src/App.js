import React, {Component} from 'react';
import Chat from "./Chat";
import Room from "./Room";
import RoomList from "./RoomList";
import arr from './generated'

class App extends Component {
    render() {
        return (
            <div>
                <RoomList rooms={arr}/>
                <Chat/>
            </div>
        );
    }
}

export default App;


