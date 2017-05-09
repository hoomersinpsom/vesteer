var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
var config = require('./config/webpack/' + env + '.config');

var entries = [
  __dirname + "/src/index.js"
];

var plugins = [];

if (config.plugins) {
  for (var i = 0, l = config.plugins.length; i < l; i ++) {
    var plugin = config.plugins[i];

    plugins.push(plugin);
  }
}

module.exports = {
  devtool: config.devtool,
  debug: config.debug,
  entry: entries,
  output: config.output,
  devServer: {
    inline: true,
    hot: true,
    host: '0.0.0.0',
    contentBase: './public',
    port:  process.env.PORT || 4000,
    historyApiFallback: true,
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      components: 'src/components',
      src: 'src',
      views: 'src/views'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)/,
        loader: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
      },
      { test: /public\//,
        loader: 'file?name=[path][name].[ext]&context=./public'
      },
      {
        test: /\.s?css$/,
        loader: config.sassLoader,
      },
      {
        test: /(\.woff|\.woff2|\.svg|.eot|\.ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=1&name=fonts/[name]-[hash].[ext]',
      },
    ]
  },
  sassResources: ['./src/config/stylesheets/includes/**/*.scss'],
  plugins: plugins,
  target: 'web',
}
