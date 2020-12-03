const baseConfig = require('./webpack.base.js');

// Mock Api 
// TODO: load all file in src/mock
const STUBS = {
  test: require('../src/mock/test.json'),
}

// var mockApi = (req, res) => {
//   const matchingStub = Object.keys(STUBS).find(url => req.originalUrl.includes(url));
//   if (matchingStub) {
//     return res.json(STUBS[matchingStub]);
//   }

//   return res.json({});
// }

module.exports = {
  ...baseConfig,
  mode: 'production',
  devtool: 'eval-source-map',
  
};


