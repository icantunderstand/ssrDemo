import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';
import RouterContext from 'react-router/lib/RouterContext';

const isServer = typeof window === 'undefined';
const RouterContainer = isServer ? RouterContext : Router;

const App = ({ store, renderProps }) =>
  <Provider store={store}>
    <RouterContainer {...renderProps} />
  </Provider>;

export default App;
