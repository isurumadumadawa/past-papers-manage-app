import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {countReducer, csvDataReducer} from '../reducers';

const rootReducer = combineReducers({
  count: countReducer,
  csvData: csvDataReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
