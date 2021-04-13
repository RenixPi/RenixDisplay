import { combineReducers } from 'redux';
import { ActionType } from '../enums';
import { ecuReducer } from "./ecu";
import {tireReducer} from "./tire";


function simpleReducer(state=[], action) {
    switch(action.type) {
        case ActionType.SIMPLE_ACTION:
        default:
            return state;
    }
}

export default combineReducers({
    simple: simpleReducer,
    ecu: ecuReducer,
    tire: tireReducer,
    fuel: simpleReducer,
    transmission: simpleReducer,
    transfer_case: simpleReducer
});
