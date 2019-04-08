/* eslint global-require:0 */
const path = require('path');
const webpack = require('webpack');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { mode } = require('yargs').argv;


const browserConfig = {
  entry: {
    entry: './src/browser/index.js',
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['happypack/loader?id=babel'],
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    open: 'Google Chrome',
    proxy: {
      '**': 'http://localhost:8081',
    },
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: 'client success',
      suppressSuccess: true,
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader'],
    }),
    new HappyPack({
      id: 'css',
      loaders: [MiniCssExtractPlugin.loader],
    }),
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    new ProgressBarPlugin(),
  ],
};

if (mode === 'development') {
  browserConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = browserConfig;
