import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Use named import here
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;