import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import * as reducers from './reducers';
import { object } from 'prop-types';
import thunk from 'redux-thunk';


const reducers_ = Object.assign({ router: routerReducer }, reducers)

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            reducers_
            //...reducers,
            // react-router-reduxのReducer
            //router: routerReducer,
        }),
        applyMiddleware(
            logger,
            thunk,
            // react-router-reduxのRedux Middleware
            routerMiddleware(history)
        )
    );
}
