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

const client = connect('mqtt://localhost:1883');
client.on('connect', function() {
    client.subscribe('ecu', function(err) {
        if(!err) {
            console.log("connect to mqtt broker")
        } else {
            console.log("could not connect to mqtt broker")
        }
    })
})

client.on('message', function(topic, message) {
    console.log(message.toString())
})

// Now we can render our application into it
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
