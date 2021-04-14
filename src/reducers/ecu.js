import {ActionType} from "../enums";

export const ecuReducer = (state=[], action) => {
  switch(action.type) {
    case ActionType.ECU_DATA_RCVD:
      return {
        ...state,
        rpm: action.payload.rpm,
        coolant: action.payload.coolantTemp,
        air_intake: action.payload.intakeAirTemp,
        battery: action.payload.batteryVoltage,
        map : action.payload.map,
        atmosphere: action.payload.atmosphere,
        throttle_position: action.payload.throttlePosition,
        spark_advance: action.payload.sparkAdvance,
        injector_pulse: action.payload.injectorPulse,
        injector_duty: action.payload.injectorDuty,
      }
    default:
      return state;
  }
}
