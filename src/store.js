import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import coinReducer from './reducers/coinData';

const middleware = applyMiddleware(thunk);

const store = createStore(
    combineReducers({
        coin: coinReducer
    }),
    composeWithDevTools(
        middleware  
    )
);

export default store;