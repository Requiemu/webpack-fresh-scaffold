const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const config = merge(baseConfig, {
  mode: 'production',
  devtool: 'eval-source-map',
})

module.exports = config;


