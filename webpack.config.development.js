const path = require('path')
const config = require('./webpack.config.base')

config.devtool = 'eval-map'
config.devServer = {
  contentBase: path.join(__dirname, './server/static'),
  compress: true,
  hot: true,
  proxy: {
    '/api/v1': {
      target: 'http://localhost:5000',
      secure: true
    }
  },
  stats: {
    colors: true
  },
  historyApiFallback: true,
  publicPath: 'http://localhost'
}

module.exports = config
