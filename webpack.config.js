'use strict';

const path = require('path');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: src
      }
    ]
  },
  devServer: {
    contentBase: dist,
    hot: true
  }
};
