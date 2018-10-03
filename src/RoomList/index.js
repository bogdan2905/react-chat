import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Room from "../Room";
import './room-list.css'

class RoomList extends Component {
    render() {
        const {rooms} = this.props;
        const roomsElems = rooms.map(room => <li key={room._id}><Room room={room}/></li>);
        return (
            <div className="room-list">
                <ul>
                    {roomsElems}
                </ul>
            </div>
        );
    }
}

RoomList.propTypes = {};

export default RoomList;
