import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { match } from 'react-router';
import App from '../shared/index';
import routes from '../shared/routes';
import configureStore from '../shared/reducer/configStore';
import logger from './middleware';

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(logger);
const store = configureStore({});
app.get('*', (req, res) => {
  match({ location: req.url, routes }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.log(err);
    }
    let promise = null;
    if (renderProps.components && renderProps.components[0].getInitialData) {
      promise = store.dispatch(renderProps.components[0].getInitialData());
    } else {
      promise = Promise.resolve();
    }
    promise.then(() => {
      const data = store.getState();
      const el = React.createElement(App, { store, renderProps });
      const apphtml = renderToString(el);
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with RR</title>
            <link rel="icon" href="data:;base64,=">
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          </head>

          <body>
            <div id="app">${apphtml}</div>
            <script src="/react.dll.js"></script>
            <script src="/bundle.js" defer></script>
          </body>
        </html>
      `);
    });
  });
});

app.listen(3000, () => {
  console.log('server is on');
});
