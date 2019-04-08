/* eslint new-cap:0 */
const path = require('path');
const dllPlugin = require('webpack/lib/DllPlugin');


module.exports = {
  entry: {
    react: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dist'),
    library: '_dll_[name]',
  },
  plugins: [
    new dllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, 'dist', '[name].manifest.json'),
    }),
  ],
};
