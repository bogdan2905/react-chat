import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './room.css'

class Room extends Component {
    render() {
        const {name, url, id} = this.props.room;
        return (
            <div className='room'>
                <span className='tool-tip'>
                    <div className='tool-tip-text'>{name}</div>
                </span>

                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNQ2yyZICBI_pcqc_KxT55FYvlpE8TtOKTlVuNuVyjbr1BSwLhw'/>

            </div>
        );
    }
}

Room.propTypes = {};

export default Room;
