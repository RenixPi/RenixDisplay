import {ActionType} from "../enums";

import { tire_map } from 'config'

export const tireReducer = (state=[], action) => {
  switch(action.type) {
    case ActionType.TIRE_DATA_RCVD:

      let _state = {...state};

      if('position' in action.payload) {
        _state[action.payload.position] = {
          temp: action.payload.temp,
          pressure: action.payload.pressure
        }
      } else if (action.payload.id in tire_map) {
        const position = tire_map[action.payload.id];
        _state[position] = {
          temp: action.payload.temp,
          pressure: action.payload.pressure
        }
      } else{
        console.log("incorrect tpms sensor")
      }
      return _state;
    default:
      return state;
  }
}
