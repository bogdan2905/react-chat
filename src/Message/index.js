import React from 'react'
import PropTypes from 'prop-types'
import './Message.css'
import logo from '../logo.svg'
function Message({message}){
    const {text, user, registered} = message;
    console.log(message);
    const rand = Math.floor(Math.random()*2);
    console.log(rand)
    return (
        <div className={`message ${rand === 1?'right':''}`}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNQ2yyZICBI_pcqc_KxT55FYvlpE8TtOKTlVuNuVyjbr1BSwLhw' alt='avatar'/>
            <div className='bubble'>
                <div className='user-name'>{user}</div>
                {text}
                <span className="date">15-15-15</span>
            </div>
        </div>
    );
}

Message.propTypes = {
    message: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired,
        date: PropTypes.string
    })
};

export default Message;