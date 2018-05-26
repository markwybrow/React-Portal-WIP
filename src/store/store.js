import {applyMiddleware, compose, createStore} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/rootReducer';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

if(process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if(typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
};

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);
export default store;
