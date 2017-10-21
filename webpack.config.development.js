const path = require('path')
const config = require('./webpack.config.base')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

config.devtool = 'eval-map'
config.devServer = {
  contentBase: path.join(__dirname, './server/static'),
  compress: true,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true,
  publicPath: 'http://localhost',
}
config.plugins.push(new OpenBrowserPlugin({url: 'http://localhost:8080'}))

module.exports = config
