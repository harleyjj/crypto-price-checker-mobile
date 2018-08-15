import {
    COIN_DATA_REQUEST,
    COIN_DATA_SUCCESS,
    COIN_DATA_ERROR,
} from '../actions/coinData';

const initialState = {
    isFetching: false,
    data: undefined,
    hasError: false,
    errorMessage: null,
};

export default function(state = initialState, action) {

    switch(action.type) {
        case COIN_DATA_REQUEST:
            return {
                ...state,
                isFetching: true,
                data: undefined,
                hasError: false,
                errorMessage: null
            }
        case COIN_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data,
                hasError: false,
                errorMessage: null
            }
        case COIN_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                data: undefined,
                hasError: true,
                errorMessage: action.error
            }
        default: 
            return state;
    }
}