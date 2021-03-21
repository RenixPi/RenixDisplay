// create our redux store
import {createStore} from "redux";
import rootReducer from "./reducers";

const initialState = {
  ecu:{
    rpm: 0
  },
  tire:{
    lf: { temp: 10, pressure: 0 },
    rf: { temp: 10, pressure: 0 },
    lr: { temp: 10, pressure: 0 },
    rr: { temp: 10, pressure: 0 }
    }
};

export const store = createStore(
  rootReducer,
  initialState
);
