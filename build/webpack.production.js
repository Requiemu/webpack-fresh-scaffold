const baseConfig = require('./webpack.base.js');

module.exports = {
  ...baseConfig,
  mode: 'production',
  devtool: 'eval-source-map',
  
};


