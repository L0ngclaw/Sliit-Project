import {createStore} from 'redux';

const reducer = (state = [], action) => {
    if (action.type === 'ADD') {
        if (state.indexOf(action.payload) === -1) {
            return [...state, action.payload];
        }
    } else if (action.type === 'REMOVE') {
        if (state.indexOf(action.payload) !== -1) {
            return state.filter(item => item !== action.payload);
        }
    }
};
export const favouriteStore = createStore(reducer, []);
