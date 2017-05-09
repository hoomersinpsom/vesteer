var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var appConfig = require('./../application.config');

var sassLoaders = [
  'css-loader',
  'sass-loader',
  'sass-resources',
];

module.exports = {
  devtool: null,
  debug: false,
  sassLoader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: 'assets/bundle.js',
    publicPath: (appConfig.baseUrl + appConfig.path)
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      filename: 'index.html',
      template: 'src/views/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('assets/application.css')
  ]
};
