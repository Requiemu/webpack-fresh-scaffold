const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Mock Api 
// TODO: load all file in src/mock
const STUBS = {
  test: require('../src/mock/test.json'),
}

var mockApi = (req, res) => {
  console.log(req);
  const matchingStub = Object.keys(STUBS).find(url => req.originalUrl.includes(url));
  if (matchingStub) {
    return res.json(STUBS[matchingStub]);
  }

  return res.json({});
}

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
    open: true,
    proxy: [
      {
        context: ['/api'], //add more here if you want
        secure: false,
        changeOrigin: true,
        bypass: mockApi
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
};


