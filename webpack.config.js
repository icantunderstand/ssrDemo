const path = require('path');
const webpack = require('webpack');
const nodeExternal = require('webpack-node-externals');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
// 接受参数是否使用
const HappyPack = require('happypack');
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
        use: ['happypack/loader?id=babel'],
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        use: [
          'happypack/loader?id=css',
          'css-loader'
        ],
      }
    ]
  },
  devServer: {
    before: function(app, server) {
      app.get('/some/aa', function(req,res) {
        res.json({ name: 100 });
      })
    }
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: 'client success',
      suppressSuccess: true
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader'],
    }),
    new HappyPack({
      id: 'css',
      loaders: [MiniCssExtractPlugin.loader]
    }),
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new ProgressBarPlugin(),
    // new ParallelUglifyPlugin({})
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
        test: /\.js$/,
        use: "babel-loader",
      }
    ]
  },
  plugins: [
    new DllReferencePlugin({
      manifest: require('./dist/react.manifest.json')
    }),
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ]
}

module.exports = [browserConfig, serverConfig];
