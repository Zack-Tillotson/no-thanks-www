var path = require('path');
var webpack = require('webpack');

var buildEnv = process.env.BUILD || 'dev';

module.exports = {
  entry: {
    app: './app/assets/application.js',
    devServer: 'webpack/hot/dev-server'
  },
  output: {
    filename: '[name]_bundle.js', // Will output App_wp_bundle.js
    path: path.join(__dirname, 'assets'),
    publicPath: 'http://localhost:8080/assets' // Required for webpack-dev-server
  },
  resolve: {
    root: [
      __dirname, 
      path.join(__dirname, 'app/assets/components')
    ],
    alias: {
    }
  },
  inline: true,
  watch: true,
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader?stage=2', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.less$/, loader: 'style!css!less?strictMath&noIeCompat' }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
