import { combineReducers } from 'redux';
import users from './Users';
import isDisplayForm from './showForm';
import modal from './modal';
import products from './Product';
import productSelected from './ProductSelected';

const myReducer = combineReducers({
    users,
    isDisplayForm,
    modal,
    products,
    productSelected
});

export default myReducer;