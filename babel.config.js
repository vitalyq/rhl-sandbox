'use strict';

const presets = [
  ['@babel/preset-env', {
    loose: true
  }],
  '@babel/preset-react'
];

const plugins = [
  'react-hot-loader/babel'
];

module.exports = {
  presets,
  plugins
};
