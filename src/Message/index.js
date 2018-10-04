import React from 'react'
import PropTypes from 'prop-types'
import './Message.css'
import logo from '../logo.svg'
import {
    Card,
    CardHeader,
    CardContent,
    Avatar,
    Typography,
    withStyles
} from "@material-ui/core"

const styles = {
    root: {
        width: "100%"
    }
};

function Message({message, classes}) {
    const {text, user, registered} = message;
    //for test
    const rand = Date.now();
    return (
        <Card className={getClass(rand)}
              raised>
            <CardHeader style={{padding: "10px"}}
                        avatar={<Avatar src={"https://yuzhu.me/img/avatar-1.png"}/>}
                        title={
                            <Typography
                                variant="headline"
                                className="user-name text">
                                {user}
                            </Typography>}
                        subheader={<span className="text">{(new Date()).toLocaleDateString()}</span>}
            />
            <CardContent style={{padding: "10px"}}>
                <Typography className="text main-text">{text}</Typography>
            </CardContent>
        </Card>
    );
    function getClass(id)
    {
        let own = id%2?"":"own";
        return `message ${classes.root} ${own}`;
    }
}



/*<div className={`message ${rand === 1?'right':''}`}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNQ2yyZICBI_pcqc_KxT55FYvlpE8TtOKTlVuNuVyjbr1BSwLhw' alt='avatar'/>
            <div className='bubble'>
                <div className='user-name'>{user}</div>
                {text}
                <span className="date">15-15-15</span>
            </div>
        </div>*/
Message.propTypes = {
    message: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired,
        date: PropTypes.string
    })
};

export default withStyles(styles)(Message);