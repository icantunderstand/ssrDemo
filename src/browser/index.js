import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/index';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose,  } from 'redux';
import AppReducer from '../shared/reducer/index';
import { Provider } from 'react-redux';


export const UPDATE_LANGUAGE_ITEM = 'UPDATE_LANGUAGE_ITEM';


const storeEnhancer = compose(
  window.devToolsExtension && window.devToolsExtension()
);
const store = createStore(
  AppReducer,
window.__INITIAL_DATA__, storeEnhancer);


hydrate(
  <Provider store ={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('app'));