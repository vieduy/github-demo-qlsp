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
        return callApi('', 'POST', {
            username: user.username,
            password: user.password,
            productPermis: user.productPermis,
            billPermis: user.billPermis,
            userPermis: user.userPermis,
            postPermis: user.postPermis,
            teamPermis: user.teamPermis,
            feedbackPermis: user.feedbackPermis
          })
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
        return callApi(`${user._id}`, 'DELETE', null)
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
        return callApi('', 'GET', null)
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