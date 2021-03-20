import {Enumify} from 'enumify';

export class ActionType extends Enumify {
  static CONNECTED = new ActionType();
  static DISCONNECTED = new ActionType();
  static CONNECTION_FAILED = new ActionType();
  static SIMPLE_ACTION = new ActionType();
  static ECU_DATA_RCVD = new ActionType();
  static TIRE_DATA_RCVD = new ActionType();
}
