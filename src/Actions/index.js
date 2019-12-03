import * as types from  './../Constants/ActionTypes';
import callApi from './../api/apiCaller';

export const addProduct = product => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const addProductRequest = product => {
    return dispatch => {
        return callApi('', 'POST', {
            tensp: product.ten,
            mota: product.mota,
            gia: product.gia,
            ngaysx: product.nsx,
            hansd: product.hsd
          })
          .then( response => {
              if (response.status === 200){
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
        return callApi(`${product._id}`, 'PATCH', {
            tensp: product.ten,
            mota: product.mota,
            gia: product.gia,
            ngaysx: product.nsx,
            hansd: product.hsd
        })
        .then( response => {
            if (response.status === 200)
                dispatch(editProduct(product));
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
        return callApi(`${product._id}`, 'DELETE', null)
        .then( response => {
            if (response.status === 200)
                dispatch(delProduct(product));
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
        return callApi('', 'GET', null)
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