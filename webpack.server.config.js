/* eslint global-require: 0 */
const nodeExternal = require('webpack-node-externals');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    server: './src/server/index.js',
  },
  target: 'node',
  externals: [nodeExternal()],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['ignore-loader'],
      },
    ],
  },
  plugins: [
    new DllReferencePlugin({
      manifest: require('./dist/react.manifest.json'),
    }),
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};
