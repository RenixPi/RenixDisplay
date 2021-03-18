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

