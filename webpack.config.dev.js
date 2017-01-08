

const path = require('path');
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/beerTracker'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({'process.env.BEER_TRACKER_API': '"https://beer-tracker-api.herokuapp.com"'})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        excldue: /node_modules/,
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!'
      },
    ]
  },
  sassLoader: {
    includePaths:[
      './node_modules',
      './client/styles'
    ]
  }
}
