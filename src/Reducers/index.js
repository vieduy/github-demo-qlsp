import { combineReducers } from 'redux';
import products from './Product';
import productSelected from './ProductSelected';
import isDisplayForm from './showForm';
import modal from './modal';

const myReducer = combineReducers({
    products,
    productSelected,
    isDisplayForm,
    modal
});

export default myReducer;