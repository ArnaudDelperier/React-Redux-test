import { combineReducers } from 'redux';
import appReducer from './app';
import containerReducer from './container';

const rootReducer = combineReducers({
    app: appReducer,
    container: containerReducer,
})

export default rootReducer;