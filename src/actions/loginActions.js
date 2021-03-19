import axios from 'axios';

export const LOGIN_ACTION_TYPES = {
    userLogin: "USER_LOGIN",
    userRegister: "USER_REGISTER",
    userAuth: "USER_AUTH",
    userSignOut: "USER_SIGNOUT"
};

const userServer = 'api/users';

export const newUser = (userInfo) => {
    const request = axios.post(`${userServer}/register`, userInfo)
        .then((res) => res.data)

    return {
        type: LOGIN_ACTION_TYPES.userRegister,
        payload: request
    }
};

export const userLogin = (userInfo) => {
    const request = axios.post(`${userServer}/login`, userInfo)
        .then((res) => res.data)

    return {
        type: LOGIN_ACTION_TYPES.userLogin,
        payload: request
    }
};

export const userAuth = () => {
    const request = axios.post(`${userServer}/auth`)
        .then((res) => res.data)

    return {
        type: LOGIN_ACTION_TYPES.userAuth,
        payload: request
    }
};

export const userLogout = () => {
    const request = axios.get(`${userServer}/logout`)
        .then((res) => res.data)

    return {
        type: LOGIN_ACTION_TYPES.userLogout,
        payload: request
    }
};