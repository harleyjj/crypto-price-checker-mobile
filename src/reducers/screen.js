import {
    SCREEN_CHANGE,
} from '../actions/screen';

const initialState = {
    screen: '',
};

export default function(state = initialState, action) {

    switch(action.type) {
        case SCREEN_CHANGE:
            return {
                ...state,
                screen: action.screen,
            }
        default: 
            return state;
    }
}