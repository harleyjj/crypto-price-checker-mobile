import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const COIN_DATA_REQUEST = 'COIN_DATA_REQUEST';
export const coinDataRequest = () => ({
    type: COIN_DATA_REQUEST
});

export const COIN_DATA_SUCCESS = 'COIN_DATA_SUCCESS';
export const coinDataSuccess = data => ({
    type: COIN_DATA_SUCCESS,
    data
});

export const COIN_DATA_ERROR = 'COIN_DATA_ERROR';
export const coinDataError = error => ({
    type: COIN_DATA_ERROR,
    error
});

export const fetchCoinData = () => dispatch => {
    dispatch(coinDataRequest());
    return(
        fetch(`${API_BASE_URL}/v2/ticker/?limit=10`, {
            method: 'GET'
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(coinDataSuccess(data));
        })
        .catch(err => dispatch(coinDataError(err)))
    );
}