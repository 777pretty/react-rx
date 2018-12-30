import * as actionTypes from './actionTypes'

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const addfive = () => {
    return {
        type: actionTypes.ADDFIVE,
        value: 5
    };
};

export const subfive = () => {
    return {
        type: actionTypes.SUBFIVE,
        value: 5
    };
};