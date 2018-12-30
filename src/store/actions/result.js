import * as actionTypes from './actionTypes'

export const save_result = (rst) => {
    // const updatedResult = rst * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: rst
    };
}

export const store_result = (rst) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(save_result(rst))
        }, 5000)   
    }
};

export const delete_result = (rstElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: rstElId
    };
};