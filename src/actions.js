import { ActionType} from "./enums";

export const dataSrcConnected = () => ({
  type: ActionType.CONNECTED,
  payload: null
});

export const connectionFailed = (error) => ({
  type: ActionType.CONNECTION_FAILED,
  payload: error
});

export const ecuDataRcvd = (ecu_data) => ({
  type: ActionType.ECU_DATA_RCVD,
  payload: ecu_data
});

export const tireDataRcvd = (tire_data) => ({
  type: ActionType.TIRE_DATA_RCVD,
  payload: {
    position: tire_data.position,
    temp: tire_data.temp,
    pressure: tire_data.pressure
  }
});
