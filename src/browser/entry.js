/* eslint no-underscore-dangle:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';
import match from 'react-router/lib/match';
import configStore from '../shared/reducer/configStore';
import filterComponents from './filterComponent';
import App from '../shared/index';


export default ({ routes }) => {
  const store = configStore(window.__INITIAL_DATA__);

  /**
   * 将 store 和 react-router 使用的 history 同步起来
   */
  const history = syncHistoryWithStore(browserHistory, store);

  /**
   * 获取页面上所有的渲染节点
   */
  const domEl = document.getElementById('app');
  /**
   * server 端使用了 match 并有动态路由
   * 这里也需要 match 到匹配的子路由才能渲染
   */
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
