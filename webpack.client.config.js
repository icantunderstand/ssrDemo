/* eslint global-require:0 */
const path = require('path');
const webpack = require('webpack');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const ManifestPlugin = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { report } = require('yargs').argv;


const browserConfig = {
  entry: {
    github: './src/github/client.js',
    countApp: './src/countApp/client.js',
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
        test: new RegExp('^(?!.*\\.global).*\\.css'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
        include: [path.resolve(__dirname, './src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        include: [path.resolve(__dirname, 'node_modules')],
      },
      {
        test: new RegExp('^(.*\\.global).*\\.css'),
        use: [
          'style-loader',
          'css-loader',
        ],
        include: [path.resolve(__dirname, './src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
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
    new ManifestPlugin(),
  ],
};

if (report) {
  browserConfig.plugins.push(new BundleAnalyzerPlugin());
}

// src => lib

const libConifg = {
  entry: require.resolve('./src/server.js'),
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: 'commonjs',
                },
              ],
              '@babel/preset-react',
            ],
          },
        }],
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.js$/,
        enforce: 'post',
        use: [
          {
            loader: path.resolve(__dirname, './src/libLoader.js'),
          },
        ],
      },
      {
        test: new RegExp('^(?!.*\\.global).*\\.css'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
        include: [path.resolve(__dirname, './src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        include: [path.resolve(__dirname, 'node_modules')],
      },
      {
        test: new RegExp('^(.*\\.global).*\\.css'),
        use: [
          'style-loader',
          'css-loader',
        ],
        include: [path.resolve(__dirname, './src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
    ],
  },
};


module.exports = [browserConfig, libConifg];
