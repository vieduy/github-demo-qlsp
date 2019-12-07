import { combineReducers } from 'redux';
import users from './Users';
import isDisplayForm from './showForm';
import modal from './modal';

const myReducer = combineReducers({
    users,
    isDisplayForm,
    modal
});

export default myReducer;