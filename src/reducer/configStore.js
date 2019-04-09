import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppReducer from './index';

export default function configureStore(
  initialState = {},
) {
  const store = createStore(
    AppReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  return store;
}
