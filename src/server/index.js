import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from '../shared/index';
import { matchPath, StaticRouter } from 'react-router-dom';
import AppReducer from '../shared/reducer/index';
import { Provider } from 'react-redux';
import routes from '../shared/routes.js';
import configureStore from '../shared/reducer/configStore';

const app = express();
app.use(cors());
app.use(express.static('public'));
// use thunk
const store = configureStore({});
app.get("*", (req,res,next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitalData ? store.dispatch(activeRoute.fetchInitalData(req.path)) : Promise.resolve();
  promise.then(() => {
    const data = store.getState();
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App/>
        </StaticRouter>
      </Provider>);
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <link rel="icon" href="data:;base64,=">
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
          <script src="/bundle.js" defer></script>
        </body>
      </html>
    `);
  }).catch(next)
})

app.listen(3000, () => {
  console.log('server is on');
});

