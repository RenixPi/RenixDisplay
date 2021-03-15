import { combineReducers } from 'redux';
import { ActionType } from '../enums';

function simpleReducer(state=[], action) {
    switch(action.type) {
        case ActionType.SIMPLE_ACTION:
        default:
            return state;
    }
}

export default combineReducers({
    simple: simpleReducer,
});
