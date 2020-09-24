import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from './reducers'


const store = createStore(reducer, applyMiddleware(thunk))


ReactDom.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.querySelector('#root')
)