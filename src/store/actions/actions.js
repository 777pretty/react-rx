export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDFIVE = 'ADDFIVE';
export const SUBFIVE = 'SUBFIVE';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const addfive = () => {
    return {
        type: ADDFIVE,
        value: 5
    };
};

export const subfive = () => {
    return {
        type: SUBFIVE,
        value: 5
    };
};

export const store_result = (rst) => {
    return {
        type: STORE_RESULT,
        result: rst
    };
};

export const delete_result = (rstElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: rstElId
    };
};


