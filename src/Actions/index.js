import * as types from  './../Constants/ActionTypes';
import callApi from './../api/apiCaller';


export const addUser = user => {
    return {
        type: types.ADD_USER,
        user
    }
}

export const addUserRequest = user => {
    return dispatch => {
        return callApi('admin/user', 'POST', user)
            .then( response => {
                if (response.status === 200){
                    dispatch(actFetchUsersRequest());
                    dispatch(showModalSuccess('Thêm thành công'));
                    dispatch(addUser(user));
                }
                else {
                    console.log(response);
                }
            })
            .catch ( error => {
                console.log(error);
                dispatch(showModalSuccess('Thêm thất bại'));
            }); 
    }
}

export const delUser = user => {
    return {
        type: types.DEL_USER,
        user
    }
}

export const delUserRequest = user => {
    return (dispatch) => {
        return callApi(`admin/user/${user._id}`, 'DELETE', null)
        .then( response => {
            if (response.status === 200){
                dispatch(delUser(user));
                dispatch(showModalSuccess('Xoá thành công'));
            }
            else {
                dispatch(showModalSuccess('Xoá thất bại'));
            }
        })
        .catch( err => {
            console.log(err);
        })
    }
}

export const getUsers = users => {
    return {
        type: types.GET_USER,
        users
    }
}

export const actFetchUsersRequest = () => {
    return dispatch => {
        return callApi('admin/user', 'GET', null)
        .then( response => {
          dispatch(getUsers(response.data));
        });
    }
}


export const showForm = () => {
	return {
		type: types.SHOW_FORM
	}
}

export const toggleForm = () => {
	return {
		type: types.TOGGLE_FORM
	}
}

export const showModalSuccess = message => {
    return {
        type: types.SHOW_MODAL_SUCCESS,
        message
    }
}

export const addProduct = product => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const addProductRequest = product => {
    return dispatch => {
        return callApi('product', 'POST', {
            tensp: product.tensp,
            mota: product.mota,
            gia: product.gia,
            ngaysx: product.ngaysx,
            hansd: product.hansd
          })
          .then( response => {
              if (response.status === 200){
                dispatch(actFetchProductsRequest());
                dispatch(showModalSuccess('Thêm thành công'));
                dispatch(addProduct(product));
              }
            }); 
    }
}

export const editProduct = product => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}

export const editProductRequest = product => {
    return (dispatch) => {
        return callApi(`product/${product._id}`, 'PATCH', {
            tensp: product.tensp,
            mota: product.mota,
            gia: product.gia,
            ngaysx: product.ngaysx,
            hansd: product.hansd
        })
        .then( response => {
            if (response.status === 200)
                dispatch(editProduct(product));
                dispatch(showModalSuccess('Sửa thành công'));
        })
        .catch( err => {
            console.log(err);
        })
    }
}

export const delProduct = product => {
    return {
        type: types.DEL_PRODUCT,
        product
    }
}

export const delProductRequest = product => {
    return (dispatch) => {
        return callApi(`product/${product._id}`, 'DELETE', null)
        .then( response => {
            if (response.status === 200)
                dispatch(delProduct(product));
                dispatch(showModalSuccess('Xoá thành công'));
        })
        .catch( err => {
            console.log(err);
        })
    }
}

export const getProducts = products => {
    return {
        type: types.GET_PRODUCTS,
        products
    }
}

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('product', 'GET', null)
        .then( response => {
          dispatch(getProducts(response.data));
        });
    }
}

export const isSelected = product => {
    return {
        type: types.IS_SELECTED,
        product
    }
}
