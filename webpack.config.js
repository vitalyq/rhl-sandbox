'use strict';

const path = require('path');
const webpack = require('webpack');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/client'
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
