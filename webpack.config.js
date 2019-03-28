const path = require('path');
const webpack = require('webpack');
const nodeExternal = require('webpack-node-externals');

const browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css.js$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ],
}

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternal()],
  output: {
    path: __dirname,
    filename: "server.js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: "babel-loader",
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ]
}

module.exports = [browserConfig, serverConfig];
