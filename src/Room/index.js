import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar, withStyles, Tooltip, Typography} from "@material-ui/core"
import './room.css'

const styles = {
    avatar:
        {
            width: 56,
            height: 56,
            margin: "10px auto",
            cursor: "pointer"
        },
    toolTip:
        {
            color: "#ffffff",
            fontSize: 15,
            backgroundColor: "#3f51b5"
        }
};

class Room extends Component {
    render() {
        const {name, url, id} = this.props.room;
        const {classes} = this.props;
        return (
            <div className="room">
                <Tooltip
                    classes={{tooltip: classes.toolTip}}
                    title={name}
                    placement={"right"}>
                    <Avatar
                        className={this.props.classes.avatar}
                        src={'https://picsum.photos/200/300/?random'}
                        sizes={100}
                        alt={"mm"}
                    />
                </Tooltip>
            </div>
        );
    }
}

// {/*<div className='room'>*/}
// {/*<span className='tool-tip'>*/}
// {/*<div className='tool-tip-text'>{name}</div>*/}
// {/*</span>*/}
//
// {/*<img*/}
// {/*src='https://picsum.photos/200/300/?random'/>*/}
//
// {/*</div>*/}
Room.propTypes = {};

export default withStyles(styles)(Room);
