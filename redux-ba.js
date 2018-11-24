const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNT'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    
    if (action.type === 'ADD_COUNT'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log('[#Start value]',store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNT'});
store.dispatch({type: 'ADD_COUNT', value: 80});
store.dispatch({type: 'INC_COUNT'});
store.dispatch({type: 'INC_COUNT'});
store.dispatch({type: 'INC_COUNT'});
console.log('[Ending value]', store.getState());
