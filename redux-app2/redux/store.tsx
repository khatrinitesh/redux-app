import { createStore, combineReducers } from 'redux';
import pageReducer from './reducers/pageReducer';

const rootReducer = combineReducers({
  page: pageReducer
});

const store = createStore(rootReducer);

export default store;