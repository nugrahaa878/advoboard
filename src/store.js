import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import {  composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux'
import thunk from "redux-thunk";
import createRootReducer from "./modules";

export const history = createBrowserHistory();

const initialState = {};
const enchancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.REDUX_DEVTOOLS_EXTENSION;

    if (typeof devToolsExtension === "function") {
        enchancers.push(devToolsExtension());
    }
}

const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
    ...enchancers,
);

const store = createStore(
    createRootReducer(),
    initialState,
    composedEnhancers
);

export default store;
