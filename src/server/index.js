import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from '../shared/index';
import { match } from 'react-router';
import routes from '../shared/routes.js';
import configureStore from '../shared/reducer/configStore';

const app = express();
app.use(cors());
app.use(express.static('public'));
// use thunk
const store = configureStore({});
app.get("*", (req,res,next) => {
  match({ location: req.url, routes }, (err, redirectLocation, renderProps) => {
    if(err) {
      console.log(err);
    }
    let promise = null;
    if(renderProps.components && renderProps.components[0].getInitialData) {
      promise = store.dispatch(renderProps.components[0].getInitialData());
      //filtterComponent
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
            <script src="/bundle.js" defer></script>
          </body>
        </html>
      `);
    })
  })
})

app.listen(3000, () => {
  console.log('server is on');
});

