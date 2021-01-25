const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = merge(baseConfig, {
  mode: 'production',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
})

module.exports = config;


