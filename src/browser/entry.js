/* eslint no-underscore-dangle:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';
import match from 'react-router/lib/match';
import configStore from '../reducer/configStore';
import filterComponents from './filterComponent';
import App from './App';


export default ({ routes }) => {
  const store = configStore(window.__INITIAL_DATA__);

  const history = syncHistoryWithStore(browserHistory, store);
  const domEl = document.getElementById('app');
  // 区分多入口
  const matchLocation = location => (onMatch) => {
    const matchOpts = { history, routes };
    if (location) {
      matchOpts.location = location;
    }
    match(matchOpts, (err, redirectLocation, routerState) => {
      console.log(routerState);
      let rerr;
      if (err) {
        rerr = err;
      } else if (redirectLocation) {
        rerr = new Error(`redirectLocation: ${redirectLocation}`);
      } else if (!routerState) {
        rerr = new Error(`match({ url: ${location && location.href} }): routerState is missing`);
        rerr.statusCode = 404;
      }

      if (rerr) {
        console.log(rerr);
      } else {
        onMatch(routerState);
      }
    });
  };

  const getInitialData = (routerState) => {
    const initDataFunc = filterComponents(routerState.components, 'getInitialData');
    Promise.all(initDataFunc.map(func => store.dispatch(func()))).catch(() => {});
  };

  matchLocation(null)(() => {
    const el = React.createElement(App, { store, routes, history });
    ReactDOM.render(el, domEl);
    history.listen((location) => {
      console.log(location);
      matchLocation(location)(getInitialData);
    });
    // router.listen(location => matchLocation(location)(getInitialData));
  });
};
