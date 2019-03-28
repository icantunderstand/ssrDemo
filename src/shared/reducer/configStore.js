import AppReducer from './index';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
export default function configureStore(
  initialState = {},
) {
  const store = createStore(
    AppReducer,
    initialState,
    applyMiddleware(thunk)
  );

  return store;
}