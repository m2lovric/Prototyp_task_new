import React from "react"
import { Provider } from "react-redux"
import { createStore} from 'redux';
import { combineReducers } from 'redux';

import counterReducer from './src/Store/counterReducer';
import toDoReducer from './src/Store/toDoReducer';
import userReducer from './src/Store/userReducer';

const extension = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(combineReducers({
  user: userReducer,
  list: toDoReducer,
  counter: counterReducer
}), extension);

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
