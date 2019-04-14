/* eslint global-require: 0, import/no-dynamic-require:0 */
import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { match } from 'react-router';
import configureStore from '../src/reducer/configStore';
import logger from './middleware';
import getRouterConfig from './getRouterConfig';
import portMap from './port';
import App from '../src/browser/App';

const { status } = require('yargs').argv;

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(logger);
app.use(getRouterConfig);
const store = configureStore({});
app.get('*', (req, res) => {
  const { appName } = req;
  const manifest = require('../public/manifest.json');
  const jsSrc = manifest[`${appName}.js`];
  const routes = require(`../lib/${appName}/routes`).default;
  console.log(routes);
  match({ location: req.url, routes }, (err, redirectLocation, renderProps) => {
    console.log(req.url);
    if (err) {
      res.writeHead(500, { ContentType: 'text/html' });
      res.write('<html><div>server is error</div></html>');
      res.end();
      return;
    }
    if (!renderProps) {
      res.writeHead(404, { ContentType: 'text/html' });
      res.write('<html><div>404 not found</div></html>');
      res.end();
      return;
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
            <script src="/dll.dll.js"></script>
            <script src=${jsSrc} defer> </script>
          </body>
        </html>
      `);
    });
  });
});

app.listen(portMap[status], () => {
  // if online 服务注册
  console.log(`server is on ${portMap[status]}`);
});
