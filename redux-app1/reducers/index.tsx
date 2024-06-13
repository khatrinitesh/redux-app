import { combineReducers } from 'redux';

const initialState = {
    currentPage: ''
};

const pageReducer = (state = initialState, action) => {
switch (action.type) {
    case 'SET_PAGE':
    return {
        ...state,
        currentPage: action.payload
    };
    default:
    return state;
}
};


// Define your reducers here
export const rootReducer = combineReducers({
    page: pageReducer
});
