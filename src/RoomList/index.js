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
                    <div className={'room room-add'}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAR9SURBVHhe7Z3LjhVVFIaPDFQcGS+MUJz6EurACwmiBPUdFKJRw2ugeBsB8goEJ6BMCcw0RGdeEC8j7zMHoP+XSNKD3+zTVbv22lW1vuRLOt29al+6U6fOXnuvs0mSJEmSJEmSJOmMffJZ+Yb8SH4mr8tv5G/y7//ka77Hz/gdfvd1SezDMtmSvfJF+Z5kMm/Lf0bKNbjWKfmCpI1kB3vkU/Kc/Eu6SazpH5K2npS0vVrulcfkt9JNVAtp+zVJX1bDffKE/Fm6SYmQvrwtF3974v7+vXST0IPfycNycTwmP5Fu0D16QR6Qi+AVyQufG2jP/i6PyNlyj/xAusHNScbAWGbFg/KqdAOao1fkA3IWPCK/km4gc5YxMbaueVzelG4AS5CxMcYu2S9/kK7jS5IxMtauYMHrS+k6vERZW3pIdgFPCNek6+iSZcx3y3A+lK6Da5BH1FBelq5ja/KoDIG36nN8h1tb5iBk2WJOaztTy9pRU1jVdB1Zs81WUVnPj1xSLuFiWkhyh7mZHJIprgOtLOFiWvmWnBQyRtGZrBIuppU/yUlXTsnhuoZbWsLFtJQc8ySwg4C9N67RlpZwMS1lju6S1WHriGuwtSVcTGvZ8lKdj6VrrLUlXExrz8iq8HjVYtPUNpZwMa39U1bd4tLTG68SLibC52U12KvpGomwhIuJ8B1ZDRIQrpEIS7iYCL+QVSDbVWOXci1LuJgIb8kqWbOD0jUQZQkXE+UzcjQcdHAXj7KEi4nyuBwNp03cxaMs4WKirJKyvCzdxaMs4WKivCRHU/sJqHdcn4fK3I2mdvKld1yfh8p5g9H8Kt3Fh9o7rs9D/UWOhmOg7uJD7R3X56Eyd6PJP8Bwq/wB8hY03Cq3oBvSXXyoveP6PNQqL8L5GDrcKo+h1F5wF4+yhIuJ8qIcTS5FDLfKUkQuxg23ymLcc9JdPMoSLibKKsvRJBUyIbN7SchwXLcKmZLcvdVSkkCxI9dIhCVcTIQnZTWoNOUaibCEi4nwkKwGG7PYbOQaam0JF9Naji1VLwJ1VrrGWlvCxbT2tKxObs7d3kk25+b29O38Wk6yPR04fOAabWkJF9PSV+Vk8MKSR5T+38mPKAHVBV3jrSzhYlr5ppwcHklJNLgOtLCEi2khx1Sb1R/lULLrxJqt+sZrGzie7zqyRs/L5lCggtKOrkNrkjl4VIZAqZaelqpby9jDa4u+L13n1iBHt8KhbNcaS5ZRF7WLkmVA5qenpM3UMtb7ZVdk2coOyMKtHZClizuAQtcUvHYDmaOzKt59hyWUr+c5/105u/L1O3lJzvEd8+w/wGEnLFvMae2ItZ2w5YUpYRU1cim7JCnXqlVOeoQ6OiR1yB65SYjwR0kyZVWfsscLGznmyA9y4z+ePsz6RXYs7CB4QrLvqEUtatpg3w5tTrZ7Ya5wC+AeTLEjNreyw9hN4m7kGp9L9mqStVrVbWYsbI1njz0HHXhP8ankD8Otg9ObHANFvuZ7/Iz6DPwuMU/Lbj7pIkmSJEmSJEmSZLPZbP4FOoJLzw3LIRIAAAAASUVORK5CYII="/></div>
                </ul>
            </div>
        );
    }
}

RoomList.propTypes = {};

export default RoomList;
