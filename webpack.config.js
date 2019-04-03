const path = require('path');
const webpack = require('webpack');
const nodeExternal = require('webpack-node-externals');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

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
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
    new DllReferencePlugin({
      manifest: require('./dist/react.manifest.json')
    }),
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ]
}

module.exports = [browserConfig, serverConfig];
