var webpack = require('webpack');
var path = require('path');
var appConfig = require('./../application.config');

var sassLoaders = [
  'style',
  'css-loader?sourceMap',
  'sass?sourceMap',
  'sass-resources',
];

module.exports = {
  devtool: '#source-map',
  debug: true,
  sassLoader: sassLoaders.join('!'),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};
