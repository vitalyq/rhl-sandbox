'use strict';

const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hmrMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

const port = 8888;
const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static('dist'));
app.use(devMiddleware(compiler, {publicPath: '/'}));
app.use(hmrMiddleware(compiler));

app.listen(port, () => console.log(`Listening on port ${port}!`));
