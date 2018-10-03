import {SEND_MESSAGE} from '../constants'

export default (messages = [], action) =>
{
    const {type, payload} = action;

    switch (type)
    {
        case SEND_MESSAGE:
            return messages.concat([payload.message]);
    }

    return messages;
}