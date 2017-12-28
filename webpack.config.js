var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: ['webpack-dev-server/client?http://localhost:3000', './src/index.jsx'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
