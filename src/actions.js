import { ActionType} from "./enums";

export const dataSrcConnected = (topic) => ({
  type: ActionType.CONNECTED,
  payload: topic
});

export const connectionFailed = (topic, error) => ({
  type: ActionType.CONNECTION_FAILED,
  payload: {
    topic: topic,
    error: error
  }
});

export const ecuDataRcvd = (ecu_data) => ({
  type: ActionType.ECU_DATA_RCVD,
  payload: ecu_data
});

// {"time":"2021-04-03 20:12:07","model":"Ford","type":"TPMS","id":"340a250e","pressure_PSI":10.3,"temperature_F":76.0,"code":"284c05","mic":"CHECKSUM"}

export const tireDataRcvd = (tire_data) => {

  return {
    type: ActionType.TIRE_DATA_RCVD,
    payload: {
      id: tire_data.id,
      temp: tire_data.temperature_F,
      pressure: tire_data.pressure_PSI
  }
}}
