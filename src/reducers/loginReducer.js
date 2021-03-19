import { LOGIN_ACTION_TYPES } from '../actions/loginActions';

const INITIAL_STATE = {};

const loginReducer = (state={INITIAL_STATE}, action) => {
    switch (action.type) {
        case LOGIN_ACTION_TYPES.userRegister:
            return {
                ...state,
                register: action.payload
            }
        
        case LOGIN_ACTION_TYPES.userLogin:
            return {
                ...state,
                login: action.payload
            }

        case LOGIN_ACTION_TYPES.userAuth:
            return {
                ...state,
                userInfo: action.payload
            }

        case LOGIN_ACTION_TYPES.userSignOut:
            return {
                ...state
            }
    
        default:
            return state;
    }
}