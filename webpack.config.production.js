const BabiliPlugin = require('babili-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
const config = require('./webpack.config.base')

config.devtool = 'source-map'
config.plugins.push(
  new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
  new BabiliPlugin(),
  new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
)

module.exports = config
