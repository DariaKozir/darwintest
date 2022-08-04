import { applyMiddleware, combineReducers, createStore } from "redux";
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

import reducer from "./reducers";

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(
    createStore
)
const rootReducer = combineReducers({
    reducer: reducer,
})

const store = createStoreWithMiddleware(rootReducer)
export default store;