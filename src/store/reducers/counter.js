import * as actionTypes from '../actions/actionTypes';
import { updObject } from '../utility';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {

    switch (action.type){
        case actionTypes.INCREMENT:
        return updObject(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT:
        return updObject(state, {counter: state.counter - 1});
        case actionTypes.ADDFIVE:
        return updObject(state, {counter: state.counter + action.value});
        case actionTypes.SUBFIVE:
        return updObject(state, {counter: state.counter - action.value});
        }
    return state;
};

export default reducer;