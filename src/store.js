// create our redux store
import {createStore} from "redux";
import rootReducer from "./reducers";
import devToolsEnhancer from 'remote-redux-devtools';

const initialState = {
  ecu:{
    rpm: 0,
    coolant: 0,
    air_intake: 0,
    battery: 0,
    map : 0,
    atmosphere: 0,
    throttle_position: 0,
    spark_advance: 0,
    injector_pulse: 0,
    injector_duty: 0,
    errors: []
  },
  tire:{
    lf: { temp: 0, pressure: 0 },
    rf: { temp: 0, pressure: 0 },
    lr: { temp: 0, pressure: 0 },
    rr: { temp: 0, pressure: 0 }
    },
  fuel: {},
  transmission: {},
  transfer_case: {}
};

export const store = createStore(
  rootReducer,
  initialState,
  devToolsEnhancer({hostname:"localhost", port:8000})
);
