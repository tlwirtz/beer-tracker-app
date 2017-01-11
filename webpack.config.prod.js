const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/beerTracker'
  ],
  output: {
    path: path.join(__dirname, 'build', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.BEER_TRACKER_API': '"https://beer-tracker-api.herokuapp.com"'}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '\'production\''
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
