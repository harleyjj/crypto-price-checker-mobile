import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import coinReducer from './reducers/coinData';
import screenReducer from './reducers/screen';

const middleware = applyMiddleware(thunk);

const store = createStore(
    combineReducers({
        coin: coinReducer,
        screen: screenReducer,
    }),
    composeWithDevTools(
        middleware  
    )
);

export default store;