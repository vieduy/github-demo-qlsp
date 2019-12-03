import { combineReducers } from 'redux';
import products from './Product';
import productSelected from './ProductSelected';
import isDisplayForm from './showForm';

const myReducer = combineReducers({
    products,
    productSelected,
    isDisplayForm
});

export default myReducer;