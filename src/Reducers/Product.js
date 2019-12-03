import * as types from './../Constants/ActionTypes';
import { remove } from 'lodash';

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_PRODUCT:
            state.push({
              tensp: action.product.ten,
              mota: action.product.mota,
              gia: action.product.gia,
              ngaysx: action.product.nsx,
              hansd: action.product.hsd
            });
            return [...state];   
        case types.DEL_PRODUCT:
                  remove(state, (product) =>{
                    return product._id === action.product._id;
                  });
                  return [...state]; 
        case types.GET_PRODUCTS:
            state = [...action.products];
            return [...state];
        case types.EDIT_PRODUCT: 
          state.map(item => {
            if (item._id === action.product._id){
              item.tensp = action.product.ten;
              item.mota = action.product.mota;
              item.gia = action.product.gia;
              item.ngaysx = action.product.nsx;
              item.hansd = action.product.hsd;
            }
            return item;
        });
             return [...state];
        default: return [...state];        
    }
}

export default myReducer;