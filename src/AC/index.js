import {SEND_MESSAGE} from "../constants";

export const sendMessages = (msg) => {
    console.log(msg)
    return {
        type: SEND_MESSAGE,
        payload: {
            message: msg
        }
    }
};