import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = []
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
