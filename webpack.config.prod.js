

const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: ['./client/beerTracker'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurencePlugin(),
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
  module:{
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    {
      test: /\.scss$/,
      loader: ExtractText.extract('style', 'css!postcss!sass!')
    }
  }

}
