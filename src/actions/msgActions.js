import axios from 'axios';

export const MSG_ACTION_TYPES = {
    getMessages: "GET_MESSAGES",
    postMessages: "POST_MESSAGES",
};

const chatServer = '/api/chat';

export const getMessages = () => {
    const request = axios.get(`${chatServer}/getChats`)
        .then((res) => res.data);
    
    return {
        type: MSG_ACTION_TYPES.getMessages,
        payload: request
    };
};

export const postMessages = (data) => {
    return {
        type: MSG_ACTION_TYPES.postMessages,
        payload: data
    };
};