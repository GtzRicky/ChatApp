import { MSG_ACTION_TYPES } from '../actions/msgActions';

const INITIAL_STATE = {}

const msgReducer = (state={INITIAL_STATE}, action) => {

    switch (action.type) {
        case MSG_ACTION_TYPES.getMessages:
            return {
                ...state,
                messages: action.payload
            }
        case MSG_ACTION_TYPES.postMessages:
            return {
                ...state,
                messages: state.messages.concat(action.payload)
            }
        default:
            return state;
    };
};

export default msgReducer;