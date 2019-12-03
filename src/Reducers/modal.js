import * as types from '../Constants/ActionTypes';

var initialState ={
    onShow: false,
    mesage: ''
};

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_MODAL_SUCCESS:
           return {
               onShow: !state.onShow,
               message: action.message
           };
        default: return state;
    }
}

export default myReducer;