const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

// Mock Api 
// TODO: load all file in src/mock
const STUBS = {
  test: require('../src/mock/test.json'),
}

var mockApi = (req, res) => {
  const matchingStub = Object.keys(STUBS).find(url => req.originalUrl.includes(url));
  if (matchingStub) {
    return res.json(STUBS[matchingStub]);
  }

  return res.json({});
}

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9123,
    open: true,
    proxy: [
      {
        context: ['/api'], //add more here if you want
        secure: false,
        changeOrigin: true,
        bypass: mockApi
      },
    ]
  }
})

module.exports = config;


