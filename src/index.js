import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

import { store } from "./store";

// connect to mqtt
import { connect } from 'mqtt';
import {connectionFailed, dataSrcConnected, ecuDataRcvd, tireDataRcvd} from "./actions";

const client = connect('mqtt://localhost:1883',{
  'clientId': "renix_display",
  'clean': false
});

const subscribe = (topic) => {
  client.subscribe(topic, function(err) {
    if(!err) {
      store.dispatch(dataSrcConnected(topic));
    } else {
      store.dispatch(connectionFailed(topic, err));
    }
  })
}



client.on('connect', function() {
  console.log('connected');
  subscribe('tpms');
  subscribe('ecu');
});

client.on('message', function(topic, message) {
  const data = JSON.parse(message.toString());
  switch(topic) {
    case 'ecu':
      store.dispatch(ecuDataRcvd(data));
      break
    case 'tpms':
      store.dispatch(tireDataRcvd(data));
      break
    default:
      console.log("unknown topic: " + topic)
      break
  }
});

// Now we can render our application into it
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
