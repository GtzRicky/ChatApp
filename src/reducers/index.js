import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import msgReducer from './msgReducer';

const reducer = combineReducers({loginReducer, msgReducer});

export default reducer;