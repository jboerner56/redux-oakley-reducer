import { combineReducers } from "redux";

// state
const PLAY = 'playing';
const EAT = 'eating';
const NAP = 'napping'

const initialState = {
    activity: NAP
};


// Action

const ACTION_PLAY = PLAY;
const ACTION_EAT = EAT;
const ACTION_NAP = NAP;

export function play() {
    return {
        type: ACTION_PLAY
    };
    
}
export function eat() {
    return {
        type: ACTION_EAT
    };
    
}
export function nap() {
    return {
        type: ACTION_NAP
    };
    
}
window.play = play;
window.eat = eat;
window.nap = nap;

// reducer

export function activity(initialState= initialState.activity, action={type:''}) {
    switch(action.type) {
        case ACTION_NAP:
            return NAP;
        // break;  dont need a break with a return statement, but good practice to do anyway.
        case ACTION_EAT:
            return EAT;
        case ACTION_PLAY:
            return PLAY;
        default:
            return state;
    }
}

    export const rootReducer = combineReducers({
        activity: activity
    });