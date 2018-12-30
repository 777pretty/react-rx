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
        type: ADDFIVE
    };
};

export const subfive = () => {
    return {
        type: SUBFIVE
    };
};

export const store_result = () => {
    return {
        type: STORE_RESULT
    };
};

export const delete_result = () => {
    return {
        type: DELETE_RESULT
    };
};


