import AppReducer from './index';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore  } from 'redux';
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