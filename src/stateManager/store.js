import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk'

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger, thunk);
}

export default createStore(reducer, applyMiddleware(...middlewares));