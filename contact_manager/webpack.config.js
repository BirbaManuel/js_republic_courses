var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [ 
  	'webpack-dev-server/client?http://localhost:8080'
  	], 
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }, 
  // Require the webpack and react-hot-loader plugins
	plugins: [  
	  new webpack.HotModuleReplacementPlugin(),
	  new webpack.NoErrorsPlugin()
	],
};

module.exports = config;