import {ActionType} from "../enums";

export const ecuReducer = (state=[], action) => {
  switch(action.type) {
    case ActionType.ECU_DATA_RCVD:
      return {
        ...state,
        rpm: action.payload.rpm
      }
    default:
      return state;
  }
}
