import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import filterComponents from './filterComponent';
import configStore from '../shared/reducer/configStore';
import browserHistory from 'react-router/lib/browserHistory';
import match from 'react-router/lib/match';
import { Provider }  from 'react-redux';
import Router from 'react-router/lib/Router';


export default ({ routes }) => {
  const store = configStore(window.__INITIAL_DATA__);

  /**
   * 将 store 和 react-router 使用的 history 同步起来
   */
  const history = syncHistoryWithStore(browserHistory, store);

  /**
   * 获取页面上所有的渲染节点
   */
  const domEl = document.getElementById("app");
  /**
   * server 端使用了 match 并有动态路由
   * 这里也需要 match 到匹配的子路由才能渲染
   */
  const matchLocation = location => onMatch => {
    const matchOpts = { history, routes };
    const url = window.location.href;
    if (location) {
      matchOpts.location = location;
    }
    match(matchOpts, (err, redirectLocation, routerState) => {
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
        console.log(error);
      } else {
        onMatch(routerState);
      }
    });
  };

  const getInitialData = routerState => {
    /**
     * 与 server 端共享的 getInitialData 逻辑
     * 参考 server/view/reactRouterReduxView.js
     *
     * 组件定义的 getInitialData 出现错误后交给业务层处理
     */
    console.log(routerState, 1000);
    const initDataFunc = filterComponents(routerState.components, 'getInitialData');
    Promise.all(initDataFunc.map(func => store.dispatch(func()))).catch(() => {});
  };

  matchLocation(null)(routerState => {
    console.log(routerState);
    const App = <Provider store={store}>
      <Router history={history} routes={routes}  />
    </Provider>
    ReactDOM.render(App, domEl);
    history.listen((location) => {
      console.log(location);
      matchLocation(location)(getInitialData);
    })
    // router.listen(location => matchLocation(location)(getInitialData));
  });
};
