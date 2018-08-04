import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { createLogger } from "redux-logger";
import appReducer from '../reducers/app';

const store = createStore(
    combineReducers({
        app: appReducer
    }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);

export default store;


