const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    cakes4arden: './client/js/index.js',
    vendor: ['babel-polyfill', 'react', 'redux']

  },
  output: {
    path: path.resolve(__dirname, './server/static/'),
    filename: './assets/js/[name]-bundle.js'
  },

  plugins: [
    new ExtractTextPlugin({filename: './assets/css/[name]-bundle.css', allChunks: true})
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/css/'
          }
        }]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      }
    ]
  }
}
