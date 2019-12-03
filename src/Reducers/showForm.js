import * as types from './../Constants/ActionTypes';

var initialState = false;
var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.TOGGLE_FORM:
            return !state;
        case types.SHOW_FORM:
            return true;
        default: return state;
    }
}

export default myReducer;