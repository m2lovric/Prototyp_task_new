import React from "react"
import { Provider } from "react-redux"
import { combineReducers, createStore } from 'redux';

import counterReducer from './src/store/counterReducer';

const extension = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(counterReducer, extension);

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
