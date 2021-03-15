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

// Now we can render our application into it
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
