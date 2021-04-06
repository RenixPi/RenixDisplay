import {ActionType} from "../enums";

import { getTireMap } from 'config'

export const tireReducer = (state=[], action) => {
  switch(action.type) {
    case ActionType.TIRE_DATA_RCVD:

      let _state = {...state};
      const tire_map = getTireMap()

      if(action.payload.id in tire_map) {
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
