import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

import rootReducer from './reducers'

// create our redux store
const initialState = {}
const store = createStore(
    rootReducer,
    initialState
)

// connect to mqtt
import { connect } from 'mqtt';
import {connectionFailed, dataSrcConnected, ecuDataRcvd} from "../actions";

const client = connect('mqtt://localhost:1883');
client.on('connect', function() {
    client.subscribe('ecu', function(err) {
        if(!err) {
            store.dispatch(dataSrcConnected());
          store.dispatch()
        } else {
            store.dispatch(connectionFailed());
        }
    })
})

client.on('message', function(topic, message) {
  switch(topic) {
    case 'ecu':
      store.dispatch(ecuDataRcvd(message));
      break
    case 'tpms':
      break
    default:
      break
  }

  if(topic === 'ecu') {
      store.dispatch()
    }
})

// Now we can render our application into it
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
