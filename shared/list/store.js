'use strict'
import {
    createStore, applyMiddleware
}
from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";

import rootReducer from "./store";

let createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

export function initializeStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
}
