import {ActionType} from "../enums";

export const tireReducer = (state=[], action) => {
  switch(action.type) {
    case ActionType.TIRE_DATA_RCVD:
      const position = action.payload.position;
      let _state = {...state};
      _state[position] = {
        temp: action.payload.temp,
        pressure: action.payload.pressure
      }
      return _state;
    default:
      return state;
  }
}
